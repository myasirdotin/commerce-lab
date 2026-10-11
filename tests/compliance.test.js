/**
 * Validates js/data/compliance-updates.js (maintained by the compliance-checker agent):
 * well-formed dates, official https sources, known areas and lesson ids, sane calendar rules.
 */
import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { COMPLIANCE_META, COMPLIANCE_UPDATES, COMPLIANCE_CALENDAR, SOURCES, AREAS } from '../js/data/compliance-updates.js';
import { findLesson } from '../js/lessons/registry.js';

const ISO = /^\d{4}-\d{2}-\d{2}$/;
const isDate = (s) => ISO.test(s) && !Number.isNaN(Date.parse(s));
const official = (url) => /^https:\/\/([a-z0-9-]+\.)*(gov\.in|nic\.in|gstcouncil\.gov\.in)(\/|$)/.test(url);

describe('Compliance tracker data', () => {
  test('meta has a valid last-checked date that is not in the future', () => {
    assert.ok(isDate(COMPLIANCE_META.lastChecked), 'lastChecked must be YYYY-MM-DD');
    assert.ok(Date.parse(COMPLIANCE_META.lastChecked) <= Date.now() + 86400000, 'lastChecked is in the future');
    assert.ok(Number.isInteger(COMPLIANCE_META.checkEveryDays) && COMPLIANCE_META.checkEveryDays > 0);
  });

  test('sources are official government sites', () => {
    for (const s of SOURCES) {
      assert.ok(AREAS.includes(s.area), `unknown area ${s.area}`);
      assert.ok(official(s.url), `not an official .gov.in/.nic.in source: ${s.url}`);
    }
  });

  test('every update is complete, dated, sourced and linked to real lessons', () => {
    const ids = new Set();
    for (const u of COMPLIANCE_UPDATES) {
      assert.ok(u.id && !ids.has(u.id), `missing or duplicate id ${u.id}`); ids.add(u.id);
      assert.ok(isDate(u.date), `${u.id}: bad date`);
      if (u.effectiveFrom === null) assert.equal(u.status, 'proposed', `${u.id}: only proposed items may have no effectiveFrom`);
      else assert.ok(isDate(u.effectiveFrom), `${u.id}: bad effectiveFrom`);
      assert.ok(AREAS.includes(u.area), `${u.id}: unknown area ${u.area}`);
      assert.ok(['in-force', 'upcoming', 'proposed'].includes(u.status), `${u.id}: bad status`);
      assert.equal(typeof u.verified, 'boolean', `${u.id}: verified must be true/false`);
      for (const k of ['title', 'summary', 'action', 'who']) assert.ok(u[k] && u[k].length > 5, `${u.id}: missing ${k}`);
      assert.ok(u.source && u.source.name && official(u.source.url), `${u.id}: source must be an official https URL`);
      for (const l of u.lessons || []) assert.ok(findLesson(l), `${u.id}: unknown lesson ${l}`);
      if (u.status === 'upcoming' && u.effectiveFrom) assert.ok(u.effectiveFrom >= u.date, `${u.id}: upcoming but effectiveFrom before date`);
    }
  });

  test('calendar rules are valid', () => {
    for (const r of COMPLIANCE_CALENDAR.monthly) {
      assert.ok(r.day >= 1 && r.day <= 28, `${r.title}: day must be 1-28`);
      assert.ok(AREAS.includes(r.area) && r.title && r.who, `${r.title}: incomplete`);
      for (const m of r.months || []) assert.ok(m >= 1 && m <= 12, `${r.title}: bad month`);
    }
    for (const r of COMPLIANCE_CALENDAR.annual) {
      assert.ok(r.month >= 1 && r.month <= 12 && r.day >= 1 && r.day <= 31, `${r.title}: bad date`);
      assert.ok(AREAS.includes(r.area) && r.title && r.who, `${r.title}: incomplete`);
    }
    for (const x of COMPLIANCE_CALENDAR.extensions) {
      assert.ok(isDate(x.date) && AREAS.includes(x.area) && x.title && x.who, `extension ${x.title}: incomplete`);
      assert.ok(x.source && official(x.source.url), `extension ${x.title}: needs an official source`);
    }
  });
});
