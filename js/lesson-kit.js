/**
 * Commerce Lab - Lesson Kit
 *
 * Pure string builders used by every lesson module (js/lessons/*.js) to produce
 * consistent, mobile-friendly, theme-aware content: figures (SVG), worked
 * examples, callouts, formulas, journal entries, T-accounts, tables.
 *
 * No DOM access here - these run in the browser AND in Node tests.
 *
 * Colour tones (resolved by css/lessons.css for light + dark):
 *   a = emerald (primary / assets / money in)   b = blue (liabilities / info)
 *   c = amber (capital / warnings)              d = purple (revenue / highlights)
 *   e = red (expenses / danger)                 n = neutral grey
 */

export const esc = (s) => String(s ?? '')
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Indian number format: inr(150000) -> "₹1,50,000" */
export function inr(n, { sign = '₹', decimals = 0 } = {}) {
  const neg = n < 0;
  const fixed = Math.abs(Number(n)).toFixed(decimals);
  const [int, dec] = fixed.split('.');
  const last3 = int.slice(-3);
  const rest = int.slice(0, -3);
  const grouped = rest ? rest.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + ',' + last3 : last3;
  return (neg ? '-' : '') + sign + grouped + (dec ? '.' + dec : '');
}

/* ─── SVG primitives ─────────────────────────────────────────────── */
const TONES = ['a', 'b', 'c', 'd', 'e', 'n'];
const toneOf = (t) => TONES.includes(t) ? t : 'a';

/** Break a label into <tspan> lines no longer than `max` characters. */
function wrapLines(str, max = 16) {
  const words = String(str).split(/\s+/);
  const lines = [];
  let cur = '';
  for (const w of words) {
    if ((cur + ' ' + w).trim().length > max && cur) { lines.push(cur); cur = w; }
    else cur = (cur + ' ' + w).trim();
  }
  if (cur) lines.push(cur);
  return lines;
}

function multiline(x, y, str, { size = 12, weight = 400, tone = 'ink', anchor = 'middle', max = 16, lineHeight = 1.25 } = {}) {
  const lines = wrapLines(str, max);
  const total = (lines.length - 1) * size * lineHeight;
  const startY = y - total / 2;
  const fill = tone === 'ink' ? 'var(--fig-ink)' : tone === 'muted' ? 'var(--fig-muted)' : `var(--fig-${toneOf(tone)}-text)`;
  return `<text x="${x}" y="${startY}" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}" dominant-baseline="middle">`
    + lines.map((l, i) => `<tspan x="${x}" dy="${i === 0 ? 0 : size * lineHeight}">${esc(l)}</tspan>`).join('')
    + `</text>`;
}

export const svg = {
  text(x, y, str, opts = {}) { return multiline(x, y, str, { max: 200, ...opts }); },

  /** Rounded labelled box. opts: tone, sub (second line), r, size, bold */
  box(x, y, w, h, label, { tone = 'a', sub = '', r = 10, size = 13, bold = true, dashed = false } = {}) {
    const t = toneOf(tone);
    const hasSub = !!sub;
    const cy = y + h / 2;
    return `<g>
      <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="var(--fig-${t}-soft)" stroke="var(--fig-${t})" stroke-width="1.5"${dashed ? ' stroke-dasharray="5 4"' : ''}/>
      ${multiline(x + w / 2, hasSub ? cy - 8 : cy, label, { size, weight: bold ? 700 : 500, tone: t, max: Math.max(8, Math.floor(w / (size * 0.58))) })}
      ${hasSub ? multiline(x + w / 2, cy + 11, sub, { size: size - 3, tone: 'muted', max: Math.max(10, Math.floor(w / ((size - 3) * 0.55))) }) : ''}
    </g>`;
  },

  line(x1, y1, x2, y2, { tone = 'n', width = 1.5, dashed = false } = {}) {
    return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="var(--fig-${toneOf(tone)})" stroke-width="${width}"${dashed ? ' stroke-dasharray="5 4"' : ''} stroke-linecap="round"/>`;
  },

  /** Straight arrow with a computed head. */
  arrow(x1, y1, x2, y2, { tone = 'n', width = 1.75, dashed = false, label = '' } = {}) {
    const t = toneOf(tone);
    const ang = Math.atan2(y2 - y1, x2 - x1);
    const hl = 9, hw = 5;
    const bx = x2 - hl * Math.cos(ang), by = y2 - hl * Math.sin(ang);
    const p1 = `${bx + hw * Math.sin(ang)},${by - hw * Math.cos(ang)}`;
    const p2 = `${bx - hw * Math.sin(ang)},${by + hw * Math.cos(ang)}`;
    const mid = label ? multiline((x1 + x2) / 2, (y1 + y2) / 2 - 9, label, { size: 10, tone: 'muted', max: 200 }) : '';
    return `<g><line x1="${x1}" y1="${y1}" x2="${bx}" y2="${by}" stroke="var(--fig-${t})" stroke-width="${width}"${dashed ? ' stroke-dasharray="5 4"' : ''} stroke-linecap="round"/>
      <polygon points="${x2},${y2} ${p1} ${p2}" fill="var(--fig-${t})"/>${mid}</g>`;
  },

  circle(cx, cy, r, { tone = 'a', label = '', size = 12 } = {}) {
    const t = toneOf(tone);
    return `<g><circle cx="${cx}" cy="${cy}" r="${r}" fill="var(--fig-${t}-soft)" stroke="var(--fig-${t})" stroke-width="1.5"/>
      ${label ? multiline(cx, cy, label, { size, weight: 700, tone: t, max: Math.floor(r * 2 / (size * 0.58)) }) : ''}</g>`;
  },

  /** Semi-transparent background panel */
  panel(x, y, w, h, { label = '', tone = 'n' } = {}) {
    const t = toneOf(tone);
    return `<g><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="var(--fig-${t}-soft)" stroke="var(--fig-${t})" stroke-width="1" stroke-dasharray="4 4" opacity="0.9"/>
      ${label ? multiline(x + 12, y + 14, label, { size: 10, weight: 700, tone: 'muted', anchor: 'start', max: 200 }) : ''}</g>`;
  }
};

/* ─── Figure wrapper ─────────────────────────────────────────────── */
let figCounter = 0;

/**
 * fig({ title, caption, viewBox, body })  -> <figure> with an accessible SVG.
 * `body` is SVG markup built with the `svg` helpers or hand-written.
 */
export function fig({ title, caption = '', viewBox = '0 0 640 240', body, maxWidth = 720 }) {
  figCounter += 1;
  return `
    <figure class="lesson-figure" style="max-width:${maxWidth}px">
      <svg viewBox="${viewBox}" role="img" aria-label="${esc(title)}" preserveAspectRatio="xMidYMid meet">
        <title>${esc(title)}</title>
        ${body}
      </svg>
      ${caption ? `<figcaption><strong>${esc(title)}.</strong> ${caption}</figcaption>` : `<figcaption><strong>${esc(title)}</strong></figcaption>`}
    </figure>`;
}

/* ─── Diagram generators (ready-made, consistent) ─────────────────── */
export const diagrams = {
  /**
   * Horizontal process flow. items: string | {label, sub, tone}. Up to 5 per row, wraps to a second row.
   */
  flow(items, { title, caption, boxW = 150, boxH = 70, gap = 30, perRow: maxPerRow = 3 } = {}) {
    const norm = items.map((it, i) => typeof it === 'string' ? { label: it, tone: TONES[i % 5] } : { tone: TONES[i % 5], ...it });
    // Max 3 boxes per row so labels stay legible when the SVG is scaled to a phone width.
    const perRow = Math.min(maxPerRow, norm.length);
    const rows = Math.ceil(norm.length / perRow);
    const width = perRow * boxW + (perRow - 1) * gap + 20;
    const height = rows * boxH + (rows - 1) * 48 + 20;
    let body = '';
    norm.forEach((it, i) => {
      const r = Math.floor(i / perRow), c = i % perRow;
      const x = 10 + c * (boxW + gap), y = 10 + r * (boxH + 48);
      body += svg.box(x, y, boxW, boxH, it.label, { tone: it.tone, sub: it.sub, size: 14 });
      if (i < norm.length - 1) {
        const nextRow = Math.floor((i + 1) / perRow);
        if (nextRow === r) body += svg.arrow(x + boxW + 3, y + boxH / 2, x + boxW + gap - 3, y + boxH / 2);
        else body += svg.arrow(x + boxW / 2, y + boxH + 3, 10 + boxW / 2, y + boxH + 48 - 3, { dashed: true });
      }
    });
    return fig({ title, caption, viewBox: `0 0 ${width} ${height}`, body });
  },

  /** Balance scale: left pan vs right pan (e.g. Assets = Liabilities + Capital). */
  scale(left, right, { title, caption, equalSign = '=' } = {}) {
    const L = typeof left === 'string' ? { label: left } : left;
    const R = typeof right === 'string' ? { label: right } : right;
    const body = `
      ${svg.line(60, 70, 580, 70, { tone: 'n', width: 5 })}
      <polygon points="320,30 300,70 340,70" fill="var(--fig-ink)"/>
      ${svg.line(320, 70, 320, 200, { tone: 'n', width: 3 })}
      <rect x="250" y="198" width="140" height="10" rx="4" fill="var(--fig-ink)"/>
      ${svg.line(150, 70, 150, 100, { tone: 'n' })}${svg.line(490, 70, 490, 100, { tone: 'n' })}
      ${svg.box(50, 100, 200, 80, L.label, { tone: L.tone || 'a', sub: L.sub, size: 15 })}
      ${svg.box(390, 100, 200, 80, R.label, { tone: R.tone || 'b', sub: R.sub, size: 15 })}
      ${svg.text(320, 145, equalSign, { size: 30, weight: 800 })}`;
    return fig({ title, caption, viewBox: '0 0 640 220', body });
  },

  /** Vertical bar chart. data: [{label, value, tone}] */
  bars(data, { title, caption, unit = '₹', height = 240, format = (v) => inr(v) } = {}) {
    const max = Math.max(...data.map(d => Math.abs(d.value)), 1);
    const n = data.length;
    const width = Math.max(360, n * 110 + 60);
    const chartH = height - 80, baseY = height - 50;
    const bw = Math.min(72, (width - 60) / n * 0.6);
    let body = svg.line(40, baseY, width - 10, baseY, { tone: 'n' });
    data.forEach((d, i) => {
      const slot = (width - 60) / n;
      const x = 40 + slot * i + (slot - bw) / 2;
      const h = Math.max(2, Math.abs(d.value) / max * chartH);
      const y = d.value >= 0 ? baseY - h : baseY;
      const t = toneOf(d.tone || TONES[i % 5]);
      body += `<rect x="${x}" y="${y}" width="${bw}" height="${h}" rx="6" fill="var(--fig-${t})" opacity="0.85"/>`;
      body += svg.text(x + bw / 2, d.value >= 0 ? y - 12 : y + h + 12, format(d.value), { size: 11, weight: 700 });
      body += multiline(x + bw / 2, baseY + 18, d.label, { size: 11, tone: 'muted', max: Math.floor(slot / 6.5) });
    });
    return fig({ title, caption, viewBox: `0 0 ${width} ${height}`, body });
  },

  /** Break-even chart computed from numbers. */
  breakEven({ fixed, price, variable, maxUnits, title, caption }) {
    const bep = fixed / (price - variable);
    const units = maxUnits || Math.ceil(bep * 2 / 100) * 100;
    const W = 640, H = 300, ox = 70, oy = 250, pw = 540, ph = 210;
    const maxY = Math.max(price * units, fixed + variable * units) * 1.05;
    const X = (u) => ox + u / units * pw;
    const Y = (v) => oy - v / maxY * ph;
    const body = `
      ${svg.line(ox, oy, ox + pw, oy, { tone: 'n', width: 2 })}${svg.line(ox, oy, ox, oy - ph, { tone: 'n', width: 2 })}
      ${svg.text(ox + pw / 2, oy + 30, 'Units sold', { size: 11, tone: 'muted' })}
      <text x="18" y="${oy - ph / 2}" font-size="11" fill="var(--fig-muted)" text-anchor="middle" transform="rotate(-90 18 ${oy - ph / 2})">Rupees</text>
      ${svg.line(ox, Y(fixed), ox + pw, Y(fixed), { tone: 'e', dashed: true, width: 2 })}
      ${svg.text(ox + pw - 4, Y(fixed) - 10, 'Fixed costs ' + inr(fixed), { size: 11, weight: 700, tone: 'e', anchor: 'end' })}
      ${svg.line(ox, Y(fixed), X(units), Y(fixed + variable * units), { tone: 'c', width: 2.5 })}
      ${svg.text(X(units) - 4, Y(fixed + variable * units) - 10, 'Total cost', { size: 11, weight: 700, tone: 'c', anchor: 'end' })}
      ${svg.line(ox, oy, X(units), Y(price * units), { tone: 'a', width: 2.5 })}
      ${svg.text(X(units) - 4, Y(price * units) + 14, 'Revenue', { size: 11, weight: 700, tone: 'a', anchor: 'end' })}
      ${svg.line(X(bep), Y(price * bep), X(bep), oy, { tone: 'd', dashed: true })}
      <circle cx="${X(bep)}" cy="${Y(price * bep)}" r="6" fill="var(--fig-d)"/>
      ${svg.text(X(bep), Y(price * bep) - 16, 'Break-even: ' + Math.ceil(bep) + ' units', { size: 12, weight: 800, tone: 'd' })}
      ${svg.text(X(bep), oy + 16, Math.ceil(bep) + ' units', { size: 10, tone: 'd' })}`;
    return fig({ title: title || 'Break-even point', caption, viewBox: `0 0 ${W} ${H}`, body });
  },

  /** Circular cycle of 4-7 steps. */
  cycle(items, { title, caption } = {}) {
    const n = items.length, cx = 320, cy = 160, R = 105;
    let body = `<circle cx="${cx}" cy="${cy}" r="${R}" fill="none" stroke="var(--fig-line)" stroke-width="1.5" stroke-dasharray="6 5"/>`;
    items.forEach((it, i) => {
      const a = -Math.PI / 2 + i * 2 * Math.PI / n;
      const x = cx + R * Math.cos(a), y = cy + R * Math.sin(a);
      const label = typeof it === 'string' ? it : it.label;
      const tone = typeof it === 'string' ? TONES[i % 5] : (it.tone || TONES[i % 5]);
      body += svg.box(x - 60, y - 24, 120, 48, label, { tone, size: 11 });
      const a2 = a + 2 * Math.PI / n, am = a + Math.PI / n;
      const r2 = R + 42;
      body += svg.arrow(cx + r2 * Math.cos(am - 0.18), cy + r2 * Math.sin(am - 0.18), cx + r2 * Math.cos(am + 0.18), cy + r2 * Math.sin(am + 0.18), { tone: 'n' });
      void a2;
    });
    body += multiline(cx, cy, title || '', { size: 12, weight: 700, tone: 'muted', max: 14 });
    return fig({ title, caption, viewBox: '0 0 640 320', body });
  },

  /** Horizontal timeline. items: [{at:'11th', label:'GSTR-1', tone}] */
  timeline(items, { title, caption, axisLabel = '' } = {}) {
    const n = items.length, W = Math.max(480, n * 120 + 60), y = 70;
    let body = svg.line(30, y, W - 30, y, { tone: 'n', width: 3 });
    items.forEach((it, i) => {
      const x = 50 + i * (W - 100) / Math.max(1, n - 1);
      const t = toneOf(it.tone || TONES[i % 5]);
      body += `<circle cx="${x}" cy="${y}" r="8" fill="var(--fig-${t})"/>`;
      body += multiline(x, y - 24, it.at, { size: 12, weight: 800, tone: t, max: 12 });
      body += multiline(x, y + 34, it.label, { size: 10.5, tone: 'ink', max: 16 });
    });
    if (axisLabel) body += svg.text(W / 2, 130, axisLabel, { size: 10, tone: 'muted' });
    return fig({ title, caption, viewBox: `0 0 ${W} 140`, body });
  },

  /** Two-column comparison blocks, e.g. Debit side vs Credit side. */
  split(left, right, { title, caption } = {}) {
    const col = (c, x, tone) => `
      ${svg.box(x, 10, 300, 40, c.heading, { tone, size: 14 })}
      ${c.items.map((it, i) => svg.box(x + 10, 62 + i * 46, 280, 38, it, { tone: 'n', size: 11.5, bold: false })).join('')}`;
    const h = 70 + Math.max(left.items.length, right.items.length) * 46;
    const body = col(left, 10, left.tone || 'a') + col(right, 330, right.tone || 'b');
    return fig({ title, caption, viewBox: `0 0 640 ${h}`, body });
  }
};

/* ─── HTML content components ────────────────────────────────────── */

/** Worked, real-life example box. steps: [{label, html}] or strings */
export function example({ title, scenario, steps = [], result = '', tone = 'a' }) {
  const stepHtml = steps.map((s, i) => {
    const o = typeof s === 'string' ? { html: s } : s;
    return `<li><span class="ex-step-no">${i + 1}</span><div>${o.label ? `<strong>${o.label}</strong> ` : ''}${o.html}</div></li>`;
  }).join('');
  return `
    <section class="example-box tone-${toneOf(tone)}">
      <header class="example-head"><span class="example-tag">Real-life example</span><h4>${title}</h4></header>
      ${scenario ? `<p class="example-scenario">${scenario}</p>` : ''}
      ${stepHtml ? `<ol class="example-steps">${stepHtml}</ol>` : ''}
      ${result ? `<div class="example-result"><strong>Result:</strong> ${result}</div>` : ''}
    </section>`;
}

/** callout('tip' | 'note' | 'warning' | 'remember', html, title?) */
export function callout(type, html, title) {
  const names = { tip: 'Tip', note: 'Note', warning: 'Watch out', remember: 'Remember', india: 'In India' };
  const icons = { tip: '💡', note: '📝', warning: '⚠️', remember: '🧠', india: '🇮🇳' };
  const t = names[type] ? type : 'note';
  return `<aside class="callout callout-${t}"><div class="callout-icon" aria-hidden="true">${icons[t]}</div><div><strong>${title || names[t]}:</strong> ${html}</div></aside>`;
}

/** Highlighted formula line. */
export function formula(expr, note = '') {
  return `<div class="formula"><code>${expr}</code>${note ? `<span class="formula-note">${note}</span>` : ''}</div>`;
}

/** Numbered how-to steps. */
export function steps(items, { title = '' } = {}) {
  return `<div class="step-list">${title ? `<h4>${title}</h4>` : ''}<ol>${items.map(i => `<li>${i}</li>`).join('')}</ol></div>`;
}

/** Tick checklist (static). */
export function checklist(items, { title = '' } = {}) {
  return `<div class="check-list">${title ? `<h4>${title}</h4>` : ''}<ul>${items.map(i => `<li><span class="check-ico">✓</span><span>${i}</span></li>`).join('')}</ul></div>`;
}

/** Responsive data table. rows are arrays; use {html:'..'} or plain strings. align: ['l','r',...] */
export function table(headers, rows, { align = [], caption = '', total = null } = {}) {
  const cell = (v, i, tag = 'td') => {
    const a = align[i] === 'r' ? ' class="text-right"' : '';
    const content = (v && typeof v === 'object' && 'html' in v) ? v.html : esc(v);
    return `<${tag}${a}>${content}</${tag}>`;
  };
  return `<div class="table-responsive lesson-table">${caption ? `<div class="table-caption">${caption}</div>` : ''}<table class="financial-table">
    <thead><tr>${headers.map((h, i) => cell(h, i, 'th')).join('')}</tr></thead>
    <tbody>${rows.map(r => `<tr>${r.map((v, i) => cell(v, i)).join('')}</tr>`).join('')}
    ${total ? `<tr class="total-row">${total.map((v, i) => cell(v, i)).join('')}</tr>` : ''}</tbody></table></div>`;
}

/** Journal entries. rows: [{date, debit, credit, amount, narration}] */
export function journal(rows, { caption = 'Journal entries' } = {}) {
  const body = rows.map(r => `
    <tr><td rowspan="2" class="j-date">${esc(r.date || '')}</td><td>${esc(r.debit)} A/c <span class="j-dr">Dr.</span></td><td class="text-right num">${inr(r.amount)}</td><td></td></tr>
    <tr><td class="j-indent">To ${esc(r.credit)} A/c</td><td></td><td class="text-right num">${inr(r.amount)}</td></tr>
    ${r.narration ? `<tr class="j-narr"><td></td><td colspan="3"><em>(${esc(r.narration)})</em></td></tr>` : ''}`).join('');
  return `<div class="table-responsive lesson-table journal"><div class="table-caption">${caption}</div><table class="financial-table">
    <thead><tr><th>Date</th><th>Particulars</th><th class="text-right">Debit (₹)</th><th class="text-right">Credit (₹)</th></tr></thead>
    <tbody>${body}</tbody></table></div>`;
}

/** T-account. debits/credits: [{label, amount}] */
export function tAccount(name, debits = [], credits = []) {
  const sum = (a) => a.reduce((s, x) => s + x.amount, 0);
  const dTot = sum(debits), cTot = sum(credits);
  const bal = dTot - cTot;
  const row = (x) => `<div class="t-entry"><span>${esc(x.label)}</span><strong>${inr(x.amount)}</strong></div>`;
  const dRows = debits.map(row).join('') + (bal < 0 ? `<div class="t-entry t-bal"><span>Balance c/d</span><strong>${inr(-bal)}</strong></div>` : '');
  const cRows = credits.map(row).join('') + (bal > 0 ? `<div class="t-entry t-bal"><span>Balance c/d</span><strong>${inr(bal)}</strong></div>` : '');
  const tot = Math.max(dTot, cTot);
  return `
    <div class="t-account-card lesson-t">
      <div class="t-account-header"><strong>${esc(name)} A/c</strong><span class="badge-xs ${bal >= 0 ? 'badge-emerald' : 'badge-blue'}">${bal >= 0 ? 'Debit' : 'Credit'} balance ${inr(Math.abs(bal))}</span></div>
      <div class="t-account-body grid grid-2">
        <div class="t-col t-col-dr"><div class="t-col-title">Dr. (Debit)</div>${dRows}</div>
        <div class="t-col t-col-cr"><div class="t-col-title">Cr. (Credit)</div>${cRows}</div>
      </div>
      <div class="t-account-footer d-flex justify-between"><span>Total ${inr(tot)}</span><span>Total ${inr(tot)}</span></div>
    </div>`;
}

/** Side-by-side comparison of two or more options. cols: [{title, tone, points:[]}] */
export function compare(cols) {
  return `<div class="compare-grid">${cols.map(c => `
    <div class="compare-col tone-${toneOf(c.tone || 'n')}"><h4>${c.title}</h4><ul>${c.points.map(p => `<li>${p}</li>`).join('')}</ul></div>`).join('')}</div>`;
}

/** Definition list for terms. */
export function terms(items) {
  return `<dl class="term-list">${items.map(([t, d]) => `<dt>${t}</dt><dd>${d}</dd>`).join('')}</dl>`;
}
