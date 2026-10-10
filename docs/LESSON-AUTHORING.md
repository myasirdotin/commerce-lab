# Writing a Commerce Lab lesson

Lessons are JavaScript modules in `js/lessons/<id>.js`, registered in `js/lessons/registry.js`,
rendered by `learn/lesson.html`, and validated by `node --test tests/lessons.test.js`.
The exemplar to copy is **`js/lessons/acc-02-accounting-equation.js`**. Read it first, then `js/lesson-kit.js`.

## 1. Who reads this and why

Two readers at once:

1. **A small-business owner** (think: someone running a Kashmiri artisan brand that sells online and to dealers)
   who needs to *recall and apply* commerce, accounting, tax and management ideas to their own business.
2. **A commerce student** (Class 11-12, B.Com, CA Foundation) who needs the concept explained properly with worked numbers.

So every lesson must be **practical, concrete and correct**. Real numbers in rupees. Real forms, portals and deadlines.
No motivational filler, no "in this lesson we will learn", no marketing adjectives.

## 2. The shape every lesson follows

```
intro (2-3 sentences: why this matters, in plain words)
outcomes (2-4 "after this lesson you can…" bullets)
sections (4-6):
  1. The idea in one picture        -> a diagram + 1-2 paragraphs
  2. Plain-language explanation     -> terms(), short paragraphs, a callout
  3. Real-life worked example       -> example({...}) with numbered steps and numbers that add up
  4. How it works in practice / common mistakes / the mechanics (tables, journal(), tAccount(), steps())
  5. What this means for a business owner (when relevant)  -> a second example() or callout
keyPoints (4-6 one-liners a reader can memorise)
practice (1-3 links to the site's labs/tools, site-root relative hrefs)
quiz (3-5 MCQs with a `why` that teaches, not just "correct")
glossary (3-6 [term, definition] pairs)
```

Length: **750-1300 words** of prose (excluding code). Minimum **2 figures** (`diagrams.*` or `fig()` + `svg.*`), at least **1 example box**,
at least one `callout()`, a `formula()` wherever a formula exists, `table()` for any set of numbers.

## 3. Running example businesses (reuse these, keep their facts consistent)

| Name | Owner | What | Useful facts |
|---|---|---|---|
| **Noor Crafts** (primary) | Sana, Srinagar (J&K) | Hand-embroidered pashmina shawls and walnut-wood boxes. Sells D2C online and to dealers/boutiques in Delhi, Mumbai. | Shawl sells ₹7,000 (cost ₹4,000 from weaver), walnut box ₹1,500 (cost ₹900). Dealers get 30% off list. Workshop rent ₹8,000/month, one helper ₹12,000/month, packaging ₹120/order, courier ₹90/order. Started with ₹2,00,000 capital + ₹1,00,000 J&K Bank loan. Sole proprietorship, GST-registered. |
| **Gupta Kirana** | Rohit, Jaipur | Neighbourhood grocery store | Low margins (8-12%), high volume, lots of cash + UPI, credit to regular customers ("khata"). |
| **Chai Adda** | Meera, Pune | Small café, 3 staff | Fixed costs ₹60,000/month, cup of chai ₹20 (variable cost ₹7), restaurant GST 5% without ITC. |

Use **Indian number grouping** via `inr(n)` → `₹1,50,000`. Use UPI, GST, kirana, CA, Tally, etc. naturally.

## 4. Verified facts (as of October 2026, FY 2026-27). Use these; add "verify on the portal" where a rule is FY-specific.

**GST**
- Slabs since 22 Sept 2025: **0%, 5%, 18%, 40%** (12% and 28% removed; 40% only for sin/luxury goods). Apparel/footwear ≤ ₹2,500 per piece → 5%; above ₹2,500 → 18%. Textile inputs (cotton, silk, man-made fibre/yarn) 5%. Restaurants (non-AC/standalone) 5% without ITC. Most services 18%.
- CGST + SGST for intra-state supply (split equally); IGST for inter-state. Same total rate either way.
- Registration thresholds: goods ₹40 lakh, services ₹20 lakh (special-category states ₹20L / ₹10L; J&K opted for the ₹40L goods limit). Mandatory regardless of turnover: inter-state supply of goods, selling through e-commerce operators (limited relief exists for small intra-state sellers), casual taxable persons, reverse-charge recipients.
- Composition scheme: turnover ≤ ₹1.5 crore (₹75L special-category). 1% for traders/manufacturers, 5% restaurants, 6% other services (≤ ₹50L). No ITC, cannot charge GST on invoice, cannot sell inter-state. Files CMP-08 quarterly (18th after quarter) and GSTR-4 annually (30 June).
- Returns: monthly GSTR-1 by 11th, GSTR-3B by 20th. QRMP (turnover ≤ ₹5 crore): GSTR-1 quarterly by 13th after quarter, GSTR-3B quarterly by 22nd/24th, tax paid monthly via PMT-06 by 25th, optional IFF by 13th. Since July 2025 GSTR-3B liability auto-fills from GSTR-1 and is not editable. Annual GSTR-9 by 31 Dec (mandatory above ₹2 crore), GSTR-9C above ₹5 crore. Late fee ₹50/day (₹20 nil), interest 18% p.a.
- E-invoicing mandatory above ₹5 crore turnover. E-way bill needed for goods movement above ₹50,000.
- ITC conditions: tax invoice, goods/services received, supplier has filed and paid (appears in GSTR-2B), pay supplier within 180 days. Blocked: personal use, motor vehicles (mostly), food & beverages, club memberships, works contract for buildings.

**Income tax (new regime is default; FY 2026-27 unchanged by Budget 2026)**
- New regime slabs: 0-4L nil, 4-8L 5%, 8-12L 10%, 12-16L 15%, 16-20L 20%, 20-24L 25%, above 24L 30%. Rebate u/s 87A up to ₹60,000 → no tax if taxable income ≤ ₹12 lakh. Standard deduction ₹75,000 (salaried). 4% cess.
- Old regime: 0-2.5L nil, 2.5-5L 5%, 5-10L 20%, above 10L 30%; rebate ₹12,500 up to ₹5L; standard deduction ₹50,000; deductions 80C etc.
- Presumptive: **44AD** (business) turnover ≤ ₹2 crore (₹3 crore if cash receipts ≤ 5%), deemed profit 6% of digital receipts / 8% of cash. **44ADA** (professionals) receipts ≤ ₹50L (₹75L), deemed profit 50%. No books/audit needed if opted. Must continue 5 years.
- Advance tax if liability > ₹10,000: 15 Jun 15%, 15 Sep 45%, 15 Dec 75%, 15 Mar 100% (44AD/44ADA taxpayers: 100% by 15 Mar). ITR for non-audit cases due 31 July; audit cases 31 Oct.
- Tax audit (44AB): turnover > ₹1 crore (₹10 crore if cash ≤ 5%); professionals > ₹50L.

**TDS (thresholds after Budget 2025)**
- 194C contractors: 1% (individual/HUF) / 2% (others); single bill > ₹30,000 or yearly aggregate > ₹1,00,000.
- 194J professional/technical fees: 10% (2% technical); threshold ₹50,000/yr. 194H commission: 2%; threshold ₹20,000. 194I rent: 10% building, 2% machinery; threshold ₹6,00,000/yr. 194Q purchase of goods > ₹50L/yr: 0.1%.
- Individuals/HUF must deduct only if their turnover exceeded ₹1 crore (business) / ₹50L (profession) in the previous year (except 194M/194-IB). Need a TAN. Deposit by 7th of next month (30 April for March). Quarterly return 26Q: 31 Jul, 31 Oct, 31 Jan, 31 May. Issue Form 16A.

**Registrations & structure**
- PAN (business PAN only for firms/companies; proprietor uses own PAN). Udyam registration (free, online, Aadhaar-based). MSME thresholds from 1 April 2025: micro ≤ ₹2.5 cr investment & ≤ ₹10 cr turnover; small ≤ ₹25 cr & ≤ ₹100 cr; medium ≤ ₹125 cr & ≤ ₹500 cr. Section 43B(h): buyers must pay micro/small suppliers within 15 days (45 with written agreement) or lose the expense deduction that year.
- Shop & Establishment licence: state labour department, usually within 30 days of opening. FSSAI for food. IEC (free, DGFT) for export/import. Trademark: Class 25 clothing, Class 24 textiles; govt fee ₹4,500 per class for individuals/startups/MSMEs, ₹9,000 others.
- Structures: Sole proprietorship (no registration as such; unlimited liability; taxed as individual), Partnership (Indian Partnership Act 1932, deed, 2-50 partners, unlimited joint liability; firm taxed at 30%), LLP (LLP Act 2008, FiLLiP on MCA, limited liability, taxed 30%, no dividend tax), OPC and Private Limited (Companies Act 2013, SPICe+ on MCA, DSC + DIN, limited liability, 25%/22% corporate tax options, more compliance: audit, ROC filings AOC-4 & MGT-7, board meetings).
- Invoice must-haves (Rule 46): supplier name/address/GSTIN, consecutive unique number (≤16 chars) per FY, date, buyer name/address/GSTIN (if registered), HSN/SAC code, description, qty, taxable value, rate & amount of CGST/SGST or IGST, place of supply, signature. Unregistered/composition: "Bill of Supply". Credit note for returns/reductions.

## 5. Writing style

- Plain English. Short sentences. Define every jargon word the first time (then it goes in `glossary`).
- Address the reader as **you**. Prefer "the shawl cost ₹4,000" to "the inventory item was procured for Rs. 4000/-".
- Numbers must add up. Re-check every example arithmetically before you finish.
- Diagrams: short labels (≤ 4 words in boxes), `viewBox` about 640 wide, use the `diagrams.*` generators where they fit
  (`flow`, `scale`, `bars`, `breakEven`, `cycle`, `timeline`, `split`) or compose with `fig()` + `svg.box/arrow/text/panel`.
  Every figure needs a `title` and a `caption` that says what to notice.
- Use `callout('warning', …)` for mistakes people actually make, `callout('india', …)` for India-specific rules, `callout('tip'|'remember', …)`.
- Journal entries via `journal([...])`, ledger accounts via `tAccount()`, comparisons via `compare()`.
- Cross-link to tools with `practice`: `accounting-lab/index.html`, `business-lab/index.html`, `tax-lab/index.html`,
  `excel-lab/index.html`, `mis-lab/index.html`, `calculators/index.html`, `cheatsheets/index.html`, `quiz/index.html`,
  `islamic-standards/index.html`, `projects/index.html`. Link other lessons with `learn/lesson.html?id=<id>`.

## 6. Technical rules

- `import { fig, svg, diagrams, example, callout, formula, steps, checklist, table, journal, tAccount, compare, terms, inr } from '../lesson-kit.js';`
- `export default { id, title, intro, outcomes, sections:[{heading, short?, html}], keyPoints, practice, quiz:[{q, options, answer, why}], glossary }`
- `id` must exactly match the registry. `short` is the optional 1-2 word label used in the on-page table of contents.
- HTML lives in template literals. Avoid raw backticks and `${` inside prose. Use `&amp;` for a literal ampersand in text.
- `practice[].href` is site-root relative (`tax-lab/index.html`), never `../` or `/`.
- Run `node --test tests/lessons.test.js` and make your lessons pass before finishing. Do not edit the registry, kit, CSS or pages.
