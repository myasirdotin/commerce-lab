// The weekly compliance watch (owner, 24/11/2026: "something on our system", free, no AI).
//
// It does the cheap half of docs/COMPLIANCE-CHECK.md by itself: it opens the official list pages a plain script can
// read, finds what was published since the last check, keeps the items whose titles look relevant to a small
// business, and writes a short list. It judges nothing and changes nothing on the site: js/data/compliance-updates.js
// is still updated only by the compliance check, after each item is read on its official page.
//
//   node tools/compliance-watch.mjs                 since the later of the last check and the last watch
//   node tools/compliance-watch.mjs --since 2026-11-01
//   node tools/compliance-watch.mjs --dry           read and print, write nothing
//
// It writes into .compliance-watch/ (git-ignored, this PC only):
//   latest.json           the result of the last run (Dev To-do's daily scan reads it for its reminder)
//   report-YYYY-MM-DD.md  the same as a list to read
//   state.json            the date of the last run and the ids already listed, so nothing is listed twice
//
// Needs Node 18 or newer and the internet. No packages, no keys, no cost.
//
// What it cannot read (the sites refuse scripts; checked 24/11/2026) is printed in every report as links to open by
// hand: see MANUAL below. Keep SOURCES in js/data/compliance-updates.js as the full list the monthly check sweeps.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dir = path.join(root, '.compliance-watch');
const args = process.argv.slice(2);
const dry = args.includes('--dry');
const sinceArg = args.includes('--since') ? args[args.indexOf('--since') + 1] : null;

const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36';
const MAX_DAYS = 35;          // never look further back than this in one run
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const iso = (d) => d.toISOString().slice(0, 10);
const dmy = (s) => s.split('-').reverse().join('/');
const clean = (s) => s.replace(/&amp;/g, '&').replace(/&#39;|&rsquo;|&lsquo;/g, "'").replace(/&quot;|&ldquo;|&rdquo;/g, '"').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();

// PIB ministries whose releases can carry a rule for a small business (ids from PIB's own ministry list).
const MINISTRIES = new Set(['Ministry of Finance', 'Ministry of Labour & Employment', 'Ministry of Micro,Small & Medium Enterprises',
  'Ministry of Corporate Affairs', 'Ministry of Commerce & Industry', 'Ministry of Health and Family Welfare',
  'Ministry of Food Processing Industries', 'Cabinet', 'Cabinet Committee on Economic Affairs (CCEA)']);

// A title must hold one of these to be listed. Wide on purpose: a person or the compliance check judges it afterwards.
const KEYWORDS = /\b(GST|goods and services tax|e-?invoic\w*|e-?way bill|GSTR|GSTN|input tax credit|composition|income[- ]tax|CBDT|CBIC|TDS|TCS|ITR|tax audit|advance tax|presumptive|EPFO?|provident fund|pension|ESIC?|gratuity|labour codes?|wage\w*|bonus|MSMEs?|Udyam|micro,? small|delayed payments?|FSSAI|food safety|food business|licen[cs]\w*|compan(y|ies) (act|law|rules)|LLP|MCA|director|annual (return|filing)|DGFT|foreign trade policy|IEC|export (promotion|obligation|incentive)\w*|RoDTEP|trade ?marks?|start-?ups?|due dates?|extension|extended|extends|deadline|notif\w+|amend\w+|rules?,? 20\d\d|threshold|turnover|exempt\w*|compliance\w*|registration|Budget|Finance (Bill|Act)|cess|rate (cut|rationali[sz]ation)|decriminali[sz]\w*)\b/i;
// ... and none of these: routine releases that match a keyword but are never a rule for a small business.
const NOISE = /\b(auction|treasury bills?|government (stock|securities)|G-?Sec|greetings?|condol\w+|felicitat\w+|inaugurat\w+|flag[s ]? off|visit[s]?|delegation|bilateral|summit|conclave|webinar|workshop|award[s]?|sports|medal|vacanc\w+|recruit\w+|appointed|takes charge|assumes charge|review[s]? (meeting|progress)|chairs|addresses|speech|PM's|Prime Minister|President|Vice-President|tableau|expo|exhibition|roadshow|run for unity|swachh\w*|yoga|celebrat\w+|smuggl\w+|foils?|detects?|seiz\w+|arrest\w+|busts?|awareness|capacity[- ]building|programme|round ?table|calls on|metro|corridor|railway|highway|journey|ecosystem|opportunit\w+|grows?|estimated at|cumulative|first-ever|facilitates|hub|drugs?|clinical|medic\w+|healthcare|hospital\w*|vaccin\w+|special campaign|swachch\w*|cleanliness|foundation day|MoU|partners?|interacts?|publications?|margin money|concludes)\b/i;
// The Health and Food Processing ministries matter here only for food-business rules.
const FOOD_ONLY = new Set(['Ministry of Health and Family Welfare', 'Ministry of Food Processing Industries']);
const FOOD = /\b(FSSAI|food safety|food business\w*|FoSCoS)\b/i;

// The sites a script cannot read. The owner opens these by hand (a minute in a browser).
const MANUAL = [
  { name: 'GST Portal - News & Advisories', url: 'https://www.gst.gov.in/newsandupdates', why: 'the page answers a script with "Loading..." only' },
  { name: 'Ministry of Corporate Affairs - Notices & Circulars', url: 'https://www.mca.gov.in/content/mca/global/en/acts-rules/ebooks/circulars.html', why: 'refuses every script (403)' },
  { name: 'Income Tax Department (CBDT) - circulars and notifications', url: 'https://incometaxindia.gov.in/Pages/communications/index.aspx', why: 'refuses every script (403)' },
];

async function getText(url, init = {}) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), 45000);
  try {
    const res = await fetch(url, { ...init, signal: ctrl.signal, headers: { 'user-agent': UA, 'accept-language': 'en-US,en', ...(init.headers || {}) } });
    return { ok: res.ok, status: res.status, text: await res.text(), res };
  } finally { clearTimeout(t); }
}

/** PIB, English, every release of one day, with its ministry (the page groups releases under ministry headings). */
async function pibDay(session, date) {
  const [y, m, d] = date.split('-').map(Number);
  const body = new URLSearchParams({ ...session.hidden, __EVENTTARGET: 'ctl00$ContentPlaceHolder1$ddlday' });
  for (const [name, cur] of Object.entries(session.selects)) {
    body.set(name, /ddlMinistry/.test(name) ? '0' : /ddlday/.test(name) ? String(d) : /ddlMonth/.test(name) ? String(m) : /ddlYear/.test(name) ? String(y) : cur);
  }
  const r = await getText(session.url, { method: 'POST', body, headers: { 'content-type': 'application/x-www-form-urlencoded', cookie: session.cookie, referer: session.url } });
  if (!r.ok) throw new Error(`PIB ${date}: HTTP ${r.status}`);
  const items = [];
  let ministry = '';
  for (const m2 of r.text.matchAll(/<h3[^>]*>([^<]{3,120})<\/h3>|<a[^>]*href=['"][^'"]*PRID=(\d+)[^'"]*['"][^>]*>([^<]{8,300})<\/a>/gi)) {
    if (m2[1]) ministry = clean(m2[1]);
    else items.push({ id: 'pib-' + m2[2], date, source: 'PIB', ministry, title: clean(m2[3]), url: `https://www.pib.gov.in/PressReleasePage.aspx?PRID=${m2[2]}` });
  }
  return items;
}

async function pibSession() {
  const url = 'https://www.pib.gov.in/allRel.aspx?reg=3&lang=1';
  const r = await getText(url);
  if (!r.ok) throw new Error(`PIB: HTTP ${r.status}`);
  const hidden = {};
  for (const m of r.text.matchAll(/<input type="hidden" name="([^"]+)" id="[^"]*" value="([^"]*)"/g)) hidden[m[1]] = m[2];
  const selects = {};
  for (const m of r.text.matchAll(/<select name="([^"]+)"[\s\S]*?<\/select>/g)) {
    const cur = m[0].match(/<option selected="selected" value="([^"]*)"/);
    selects[m[1]] = cur ? cur[1] : '';
  }
  if (!hidden.__VIEWSTATE || !Object.keys(selects).some((s) => /ddlday/.test(s))) throw new Error('PIB: the page has changed (no form found)');
  const cookie = (r.res.headers.getSetCookie ? r.res.headers.getSetCookie() : []).map((c) => c.split(';')[0]).join('; ');
  return { url, hidden, selects, cookie };
}

/** The income tax e-filing portal's "Latest news": dated one-paragraph items. */
async function incomeTaxNews(since) {
  const url = 'https://www.incometax.gov.in/iec/foportal/latest-news';
  const r = await getText(url);
  if (!r.ok) throw new Error(`income tax news: HTTP ${r.status}`);
  const text = clean(r.text.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ').replace(/<[^>]*>/g, ' '));
  const months = { jan: 1, feb: 2, mar: 3, apr: 4, may: 5, jun: 6, jul: 7, aug: 8, sep: 9, oct: 10, nov: 11, dec: 12 };
  const items = [];
  const re = /(\d{1,2})-([A-Za-z]{3})-(20\d{2})\s+(.{20,400}?)(?=\s+\d{1,2}-[A-Za-z]{3}-20\d{2}\s|\s+Refer |$)/g;
  for (const m of text.matchAll(re)) {
    const mo = months[m[2].toLowerCase()];
    if (!mo) continue;
    const date = `${m[3]}-${String(mo).padStart(2, '0')}-${String(m[1]).padStart(2, '0')}`;
    if (date < since) continue;
    const title = m[4].trim();
    items.push({ id: 'itnews-' + date + '-' + title.slice(0, 60).toLowerCase().replace(/[^a-z0-9]+/g, '-'), date, source: 'Income Tax e-filing portal', ministry: 'Latest news', title, url });
  }
  return items;
}

/** The GST Council's own site: the documents it links from its home page (press releases of meetings, FAQs). */
async function gstCouncil(since) {
  const base = 'https://gstcouncil.gov.in';
  const r = await getText(base);
  if (!r.ok) throw new Error(`GST Council: HTTP ${r.status}`);
  const items = [];
  const seen = new Set();
  for (const m of r.text.matchAll(/href="(\/sites\/default\/files\/(20\d{2})-(\d{2})\/([^"]+\.pdf))"/gi)) {
    const date = `${m[2]}-${m[3]}-01`;                         // the folder gives the month only
    if (`${m[2]}-${m[3]}` < since.slice(0, 7) || seen.has(m[1])) continue;
    seen.add(m[1]);
    const title = decodeURIComponent(m[4]).replace(/\.pdf$/i, '').replace(/[_-]+/g, ' ');
    items.push({ id: 'gstc-' + m[1], date, source: 'GST Council', ministry: 'document', title, url: base + m[1] });
  }
  return items;
}

// ---------------------------------------------------------------------------------------------------------------

const today = iso(new Date());
const meta = fs.readFileSync(path.join(root, 'js', 'data', 'compliance-updates.js'), 'utf8');
const lastChecked = (meta.match(/lastChecked:\s*'(\d{4}-\d{2}-\d{2})'/) || [])[1] || null;
const statePath = path.join(dir, 'state.json');
const state = fs.existsSync(statePath) ? JSON.parse(fs.readFileSync(statePath, 'utf8')) : { lastRun: null, seen: [] };
const floor = iso(new Date(Date.now() - MAX_DAYS * 86400000));
let since = sinceArg || [lastChecked, state.lastRun].filter(Boolean).sort().pop() || floor;
if (!/^\d{4}-\d{2}-\d{2}$/.test(since)) { console.error('--since needs a date like 2026-11-01'); process.exit(2); }
if (since < floor) since = floor;

const errors = [];
let all = [];

try {
  const session = await pibSession();
  for (let t = new Date(since + 'T00:00:00Z'); iso(t) <= today; t = new Date(t.getTime() + 86400000)) {
    try { all.push(...await pibDay(session, iso(t))); } catch (e) { errors.push(String(e.message || e)); }
    await sleep(600);                                           // be gentle with a public site
  }
} catch (e) { errors.push(String(e.message || e)); }
try { all.push(...await incomeTaxNews(since)); } catch (e) { errors.push(String(e.message || e)); }
try { all.push(...await gstCouncil(since)); } catch (e) { errors.push(String(e.message || e)); }

const read = all.length;
const seen = new Set(state.seen);
const relevant = (it) => it.source !== 'PIB'
  ? true                                                        // the tax portal's news and the Council's documents are all on subject
  : KEYWORDS.test(it.title) && !NOISE.test(it.title) && (!FOOD_ONLY.has(it.ministry) || FOOD.test(it.title)) && (MINISTRIES.has(it.ministry) || /\b(GST|income[- ]tax|EPFO?|ESIC|MSME|Udyam|FSSAI|DGFT|labour codes?)\b/i.test(it.title));
const fresh = [];
const ids = new Set();
for (const it of all) {
  if (ids.has(it.id) || seen.has(it.id)) continue;
  ids.add(it.id);
  if (relevant(it)) fresh.push(it);
}
// Items stay on the list until a compliance check has been done after they were found: a run never drops what an
// earlier run listed (a second run on the same day once replaced a list of 12 with an empty one, 24/11/2026).
const latestPath = path.join(dir, 'latest.json');
const before = fs.existsSync(latestPath) ? JSON.parse(fs.readFileSync(latestPath, 'utf8')) : null;
const waiting = before && before.lastChecked === lastChecked ? (before.items || []).filter((x) => !ids.has(x.id)) : [];
const newCount = fresh.length;
fresh.push(...waiting);
fresh.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : a.source.localeCompare(b.source)));

const result = { ranAt: today, since: waiting.length && before.since < since ? before.since : since, lastChecked, read, newThisRun: newCount, items: fresh, manual: MANUAL, errors };
const lines = [
  `# Compliance watch, ${dmy(today)}`,
  '',
  `Official items published since ${dmy(result.since)} whose titles look relevant to a small business. Made by`,
  '`tools/compliance-watch.mjs` (free, no AI). **It only lists; it judges nothing.** Each item is read on its official',
  'page before anything is written into "What\'s New" (`docs/COMPLIANCE-CHECK.md`).',
  '',
  `- Last compliance check: ${lastChecked ? dmy(lastChecked) : 'not known'}`,
  `- Releases and notices read this run: ${read}; new this run: ${newCount}; waiting to be looked at: ${fresh.length}`,
  '- An item stays on this list until a compliance check is done after it was found.',
  '',
];
if (!fresh.length) lines.push('**Nothing new to look at from the sites a script can read.**', '');
let cur = '';
for (const it of fresh) {
  const head = `${it.source}${it.ministry ? ' - ' + it.ministry : ''}`;
  if (head !== cur) { lines.push(`## ${head}`, ''); cur = head; }
  lines.push(`- ${dmy(it.date)}: [${it.title.replace(/[[\]]/g, '')}](${it.url})`);
}
lines.push('', '## Open these by hand (they refuse scripts)', '');
for (const m of MANUAL) lines.push(`- [${m.name}](${m.url}): ${m.why}`);
if (errors.length) { lines.push('', '## Could not be read this time', ''); for (const e of errors) lines.push(`- ${e}`); }
lines.push('', 'When you have looked: in a Claude session in this project, type `start`, then `3` (the compliance check), and', 'give it this list. It then reads only these links instead of sweeping every site.', '');

if (!dry) {
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'latest.json'), JSON.stringify(result, null, 1));
  fs.writeFileSync(path.join(dir, `report-${today}.md`), lines.join('\n'));
  // remember what was listed or passed over, so the next run lists only what is new; keep the list from growing for ever
  const keep = [...new Set([...state.seen, ...all.map((x) => x.id)])].slice(-6000);
  fs.writeFileSync(statePath, JSON.stringify({ lastRun: today, seen: keep }));
}

console.log(`compliance watch ${dmy(today)}: since ${dmy(since)}, read ${read}, new ${newCount}, waiting to be looked at ${fresh.length}${errors.length ? `, could not read ${errors.length}` : ''}${dry ? ' (dry run, nothing written)' : ''}`);
for (const it of fresh.slice(0, 40)) console.log(`  ${dmy(it.date)} | ${it.source}${it.ministry ? ' / ' + it.ministry : ''} | ${it.title.slice(0, 120)}`);
if (fresh.length > 40) console.log(`  ... and ${fresh.length - 40} more in the report`);
for (const e of errors) console.log(`  could not read: ${e}`);
if (!dry) console.log(`report: .compliance-watch/report-${today}.md`);
process.exit(errors.length && !read ? 1 : 0);
