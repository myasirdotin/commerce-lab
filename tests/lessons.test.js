/**
 * Validates every lesson registered in js/lessons/registry.js:
 * the module exists, has the required shape, and meets the content bar
 * (a diagram, a worked example, key points, a quiz with valid answers).
 */
import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { HUBS, ALL_LESSONS } from '../js/lessons/registry.js';

const BANNED = [/lorem ipsum/i, /\bTODO\b/, /\bTBD\b/, /placeholder/i, /coming soon/i];

describe('Lesson registry', () => {
  test('lesson ids are unique and well-formed', () => {
    const ids = ALL_LESSONS.map(l => l.id);
    assert.equal(new Set(ids).size, ids.length, 'duplicate lesson id');
    for (const id of ids) assert.match(id, /^[a-z]+-\d{2}-[a-z0-9-]+$/, `bad id: ${id}`);
  });

  test('every hub has lessons with titles and minutes', () => {
    for (const h of HUBS) {
      assert.ok(h.lessons.length >= 3, `${h.id} has too few lessons`);
      for (const l of h.lessons) {
        assert.ok(l.title && l.title.length > 4, `${l.id} title`);
        assert.ok(Number.isInteger(l.minutes) && l.minutes > 0, `${l.id} minutes`);
      }
    }
  });
});

describe('Lesson modules', () => {
  for (const meta of ALL_LESSONS) {
    test(`${meta.number} ${meta.id}`, async () => {
      let mod;
      try {
        mod = await import(`../js/lessons/${meta.id}.js`);
      } catch (e) {
        assert.fail(`module missing or broken: ${e.message}`);
      }
      const L = mod.default;
      assert.ok(L && typeof L === 'object', 'default export object');
      assert.equal(L.id, meta.id, 'id matches registry');
      assert.ok(typeof L.title === 'string' && L.title.length > 4, 'title');
      assert.ok(typeof L.intro === 'string' && L.intro.length > 60, 'intro paragraph');
      assert.ok(Array.isArray(L.outcomes) && L.outcomes.length >= 2, 'outcomes >= 2');
      assert.ok(Array.isArray(L.sections) && L.sections.length >= 3, 'sections >= 3');

      let all = '';
      for (const s of L.sections) {
        assert.ok(typeof s.heading === 'string' && s.heading.length > 3, 'section heading');
        assert.ok(typeof s.html === 'string' && s.html.replace(/\s+/g, ' ').length > 200, `section "${s.heading}" is too thin`);
        all += s.html;
      }
      const svgCount = (all.match(/<svg\b/g) || []).length;
      assert.ok(svgCount >= 1, 'at least one SVG figure');
      assert.ok(all.includes('class="example-box'), 'at least one real-life example box');
      assert.ok(all.includes('<figure class="lesson-figure"'), 'figures built with fig()');
      for (const re of BANNED) assert.doesNotMatch(all, re, `banned text ${re}`);

      assert.ok(Array.isArray(L.keyPoints) && L.keyPoints.length >= 3, 'keyPoints >= 3');
      assert.ok(Array.isArray(L.quiz) && L.quiz.length >= 3, 'quiz >= 3');
      for (const q of L.quiz) {
        assert.ok(typeof q.q === 'string' && q.q.length > 10, 'quiz question');
        assert.ok(Array.isArray(q.options) && q.options.length >= 3 && q.options.length <= 4, 'quiz 3-4 options');
        assert.ok(Number.isInteger(q.answer) && q.answer >= 0 && q.answer < q.options.length, 'quiz answer index');
        assert.ok(typeof q.why === 'string' && q.why.length > 20, 'quiz explanation');
      }
      assert.ok(Array.isArray(L.practice), 'practice array');
      for (const p of L.practice) {
        assert.ok(p.label && p.href, 'practice link');
        assert.doesNotMatch(p.href, /^(\.\.\/|\/)/, 'practice href must be site-root relative (e.g. "accounting-lab/index.html")');
      }
      if (L.glossary) for (const g of L.glossary) assert.ok(Array.isArray(g) && g.length === 2, 'glossary [term, def]');

      const words = (L.intro + all + L.keyPoints.join(' ')).replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
      assert.ok(words >= 550, `lesson too short (${words} words)`);
    });
  }
});
