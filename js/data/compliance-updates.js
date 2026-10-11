/**
 * Commerce Lab - Compliance updates ("What's New")
 *
 * Maintained by the compliance check in docs/COMPLIANCE-CHECK.md (any AI tool; Claude: compliance-checker agent).
 * Rendered by updates/index.html and validated by tests/compliance.test.js.
 *
 * Dates are ISO strings (YYYY-MM-DD). Every update must cite an official source.
 * Educational summary only - not legal or tax advice.
 */

export const COMPLIANCE_META = {
  lastChecked: '2026-10-11',          // date the agent last swept all sources
  checkedBy: 'compliance-checker agent',
  checkEveryDays: 30,                 // the page warns when lastChecked is older than this
  notes: 'First full sweep: re-verified the 7 seeded entries on official sources, added 5 changes and 2 due-date extensions (CBDT Circular 07/2026).'
};

export const AREAS = ['GST', 'Income tax', 'TDS/TCS', 'Company & LLP', 'MSME', 'Labour', 'Trademark & IP', 'Import/Export', 'Food (FSSAI)', 'Other'];

// The official sites the agent sweeps. Add a source here before relying on it.
export const SOURCES = [
  { area: 'GST',            name: 'GST Portal - News & Advisories', url: 'https://www.gst.gov.in/newsandupdates' },
  { area: 'GST',            name: 'CBIC GST (notifications, circulars)', url: 'https://cbic-gst.gov.in' },
  { area: 'GST',            name: 'GST Council',                     url: 'https://gstcouncil.gov.in' },
  { area: 'Income tax',     name: 'Income Tax e-filing portal',      url: 'https://www.incometax.gov.in' },
  { area: 'Income tax',     name: 'Income Tax Department (CBDT)',    url: 'https://incometaxindia.gov.in' },
  { area: 'Income tax',     name: 'Union Budget',                    url: 'https://www.indiabudget.gov.in' },
  { area: 'Company & LLP',  name: 'Ministry of Corporate Affairs',   url: 'https://www.mca.gov.in' },
  { area: 'MSME',           name: 'Udyam Registration',              url: 'https://udyamregistration.gov.in' },
  { area: 'MSME',           name: 'Ministry of MSME',                url: 'https://msme.gov.in' },
  { area: 'Labour',         name: 'EPFO',                            url: 'https://www.epfindia.gov.in' },
  { area: 'Labour',         name: 'ESIC',                            url: 'https://www.esic.gov.in' },
  { area: 'Labour',         name: 'Ministry of Labour & Employment', url: 'https://labour.gov.in' },
  { area: 'Trademark & IP', name: 'IP India (trademarks)',           url: 'https://ipindia.gov.in' },
  { area: 'Import/Export',  name: 'DGFT (IEC, foreign trade policy)', url: 'https://www.dgft.gov.in' },
  { area: 'Food (FSSAI)',   name: 'FSSAI',                           url: 'https://fssai.gov.in' },
  { area: 'Other',          name: 'Press Information Bureau',        url: 'https://pib.gov.in' }
];

/**
 * One entry per change in the rules.
 *  date          when it was announced / notified
 *  effectiveFrom when it applies (may be in the future); null only for 'proposed' items whose
 *                start date is not yet notified (the page shows "Start date not yet notified").
 *  status        'in-force' | 'upcoming' | 'proposed'
 *  verified      true only when confirmed on the official source given
 *  lessons       lesson ids (js/lessons/registry.js) that teach this topic
 */
export const COMPLIANCE_UPDATES = [
  {
    id: 'gst-council-57-2026',
    date: '2026-10-08', effectiveFrom: null, area: 'GST', status: 'proposed', verified: true,
    title: '57th GST Council: easier compliance for small businesses',
    summary: 'The Council recommended (not yet law): no late fee on a delayed GST return for turnover up to ₹5 crore if it is filed by the end of the month it was due; no show cause notice where the tax involved is below ₹10,000; maximum general penalty cut from ₹25,000 to ₹10,000; fewer blocked ITC items (e.g. outdoor catering, health and life insurance, free samples); automatic registration for small e-commerce sellers who declare the marketplace warehouse in another state. Start dates will come with the law and rule amendments; the new return-correction mechanism is planned from the April 2027 return.',
    action: 'Nothing to do yet. Keep filing on time and watch for CBIC notifications that give the start dates.',
    who: 'GST-registered small businesses and e-commerce sellers',
    source: { name: 'GST Council - 57th meeting press release', url: 'https://www.gstcouncil.gov.in/sites/default/files/2026-10/press_release.pdf' },
    lessons: ['tax-02-input-tax-credit', 'tax-03-returns-and-composition', 'start-03-registrations']
  },
  {
    id: 'itr-audit-extension-ay2026',
    date: '2026-09-28', effectiveFrom: '2026-09-28', area: 'Income tax', status: 'in-force', verified: true,
    title: 'Tax audit and audit-case ITR dates extended (AY 2026-27)',
    summary: 'CBDT Circular 07/2026 extends the ITR due date for persons subject to audit from 31 October 2026 to 21 November 2026. The tax audit report date moves from 30 September 2026 to 21 October 2026.',
    action: 'If your accounts need a tax audit, file the audit report by 21 October and the ITR by 21 November 2026.',
    who: 'Businesses needing a tax audit for FY 2025-26',
    source: { name: 'CBDT Circular No. 07/2026', url: 'https://www.incometax.gov.in/iec/foportal/sites/default/files/2026-09/Circular-7-2026.pdf' },
    lessons: ['tax-04-income-tax-for-business', 'start-08-compliance-calendar']
  },
  {
    id: 'itr-non-audit-31-aug-2026',
    date: '2026-02-01', effectiveFrom: '2026-04-01', area: 'Income tax', status: 'in-force', verified: true,
    title: 'Non-audit business ITR now due 31 August',
    summary: 'Budget 2026 staggered ITR due dates. ITR-1 and ITR-2 filers stay at 31 July; non-audit business cases get until 31 August. For AY 2026-27 the ITR-4 (presumptive) due date was 31 August 2026.',
    action: 'Plan your business ITR for August, but file early if you expect a refund.',
    who: 'Proprietors and firms whose accounts need no audit',
    source: { name: 'Income Tax e-filing portal - ITR-4 FAQs', url: 'https://www.incometax.gov.in/iec/foportal/help/all-topics/e-filing-services/itr%204-faqs' },
    lessons: ['tax-04-income-tax-for-business', 'start-08-compliance-calendar']
  },
  {
    id: 'small-company-thresholds-2025',
    date: '2025-12-01', effectiveFrom: '2025-12-01', area: 'Company & LLP', status: 'in-force', verified: true,
    title: 'Small company limits raised to ₹10 crore / ₹100 crore',
    summary: 'MCA notification G.S.R. 880(E) dated 1 December 2025 raised the small company limits from paid-up capital ₹4 crore and turnover ₹40 crore to ₹10 crore and ₹100 crore. Small companies have lighter compliance under the Companies Act.',
    action: 'If you run a private limited company, check whether it now qualifies as a small company and ask your CA which filings get easier.',
    who: 'Private limited companies',
    source: { name: 'PIB - MCA year-end review 2025', url: 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2210429' },
    lessons: ['start-02-choose-structure']
  },
  {
    id: 'labour-codes-2025',
    date: '2025-11-21', effectiveFrom: '2025-11-21', area: 'Labour', status: 'in-force', verified: true,
    title: 'Four Labour Codes in force, replacing 29 laws',
    summary: 'The Code on Wages, Industrial Relations Code, Code on Social Security and OSH Code came into force on 21 November 2025. Every worker must get an appointment letter; fixed-term employees get gratuity after one year; ESIC is extended pan-India (voluntary below 10 employees). Old rules continue during the transition until new rules are framed.',
    action: 'Give every employee a written appointment letter stating designation, wages and social security, and check your PF/ESI coverage.',
    who: 'Any business with employees',
    source: { name: 'PIB - Four Labour Codes made effective', url: 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2192463' },
    lessons: ['start-03-registrations', 'start-08-compliance-calendar']
  },
  {
    id: 'gst-slabs-2025',
    date: '2025-09-03', effectiveFrom: '2025-09-22', area: 'GST', status: 'in-force', verified: true,
    title: 'GST slabs cut to 0%, 5%, 18% and 40%',
    summary: 'The 56th GST Council meeting (3 September 2025) replaced the four-rate structure with a standard 18% rate and a merit 5% rate, plus a 40% de-merit rate for a few sin and luxury goods, from 22 September 2025. Apparel up to ₹2,500 per piece is 5%, above that 18%.',
    action: 'Check the HSN rate on every product you sell, update your billing software and price lists.',
    who: 'Every GST-registered business',
    source: { name: 'PIB - Recommendations of the 56th GST Council meeting', url: 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2163555' },
    lessons: ['tax-01-gst-basics', 'start-05-invoicing', 'start-07-costing-and-pricing']
  },
  {
    id: 'gstr3b-locked-2025',
    date: '2025-06-07', effectiveFrom: '2025-07-01', area: 'GST', status: 'in-force', verified: true,
    title: 'GSTR-3B tax liability can no longer be edited',
    summary: 'From the July 2025 tax period (GSTR-3B filed in August 2025), the tax liability auto-filled in GSTR-3B from GSTR-1/IFF/GSTR-1A is locked. Mistakes must be fixed in GSTR-1A for the same period before filing GSTR-3B.',
    action: 'Get GSTR-1 right before the 11th; use GSTR-1A for corrections, not GSTR-3B.',
    who: 'Regular GST taxpayers',
    source: { name: 'GSTN advisory, 7 June 2025 (copy on Maharashtra GST site)', url: 'https://www.mahagst.gov.in/public/uploads/gstnadvisory/1760596521_352%20Advisory%20regarding%20non-editable%20of%20auto-populated%20liability%20in%20GSTR-3B.pdf' },
    lessons: ['tax-03-returns-and-composition']
  },
  {
    id: 'income-tax-act-2025',
    date: '2025-08-21', effectiveFrom: '2026-04-01', area: 'Income tax', status: 'in-force', verified: true,
    title: 'Income-tax Act, 2025 replaces the 1961 Act',
    summary: 'The Act received Presidential assent on 21 August 2025 and came into force on 1 April 2026; the Income-tax Rules, 2026 were notified on 20 March 2026. Income from 1 April 2026 is taxed under it, while returns for FY 2025-26 still follow the 1961 Act. Sections are renumbered: the rebate (old 87A) is section 156, presumptive tax (old 44AD/44ADA) is section 58, and TDS is consolidated in a table in section 393.',
    action: 'Expect new section numbers on forms and notices from tax year 2026-27. Check the official mapping before quoting a section.',
    who: 'Every taxpayer',
    source: { name: 'PIB - Income-tax Act, 2025 comes into force', url: 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2248005' },
    lessons: ['tax-04-income-tax-for-business', 'tax-05-tds-basics']
  },
  {
    id: 'new-regime-12l-2025',
    date: '2025-02-01', effectiveFrom: '2025-04-01', area: 'Income tax', status: 'in-force', verified: true,
    title: 'No income tax up to ₹12 lakh under the new regime',
    summary: 'Budget 2025 revised new-regime slabs (0-4L nil, then 5% steps up to 30% above 24L) and raised the rebate to ₹60,000, so normal income up to ₹12 lakh pays no tax. Unchanged for FY 2026-27 (the rebate is now section 156 of the 2025 Act).',
    action: 'Compare old vs new regime each year before filing; the new regime is the default.',
    who: 'Individuals, including sole proprietors',
    source: { name: 'Budget Speech 2025-26 (paras 158-159)', url: 'https://www.indiabudget.gov.in/budget2025-26/doc/Budget_Speech.pdf' },
    lessons: ['tax-04-income-tax-for-business']
  },
  {
    id: 'tds-thresholds-2025',
    date: '2025-02-01', effectiveFrom: '2025-04-01', area: 'TDS/TCS', status: 'in-force', verified: true,
    title: 'Higher TDS thresholds (rent, professional fees, commission)',
    summary: 'Rent (194-I) threshold changed from ₹2,40,000 a year to ₹50,000 per month or part of a month (the Budget called it ₹6 lakh a year). Professional fees (194J) raised from ₹30,000 to ₹50,000; commission (194H) from ₹15,000 to ₹20,000. Contractor limits (194C) were not changed.',
    action: 'Update the TDS thresholds in your accounting software. For rent, test each month against ₹50,000.',
    who: 'Businesses that deduct TDS',
    source: { name: 'Budget Speech 2025-26 (Annexure, TDS thresholds)', url: 'https://www.indiabudget.gov.in/budget2025-26/doc/Budget_Speech.pdf' },
    lessons: ['tax-05-tds-basics']
  },
  {
    id: 'msme-thresholds-2025',
    date: '2025-02-01', effectiveFrom: '2025-04-01', area: 'MSME', status: 'in-force', verified: true,
    title: 'MSME size limits raised',
    summary: 'Investment limits went up 2.5 times and turnover limits 2 times from 1 April 2025. Micro: investment up to ₹2.5 crore and turnover up to ₹10 crore. Small: ₹25 crore / ₹100 crore. Medium: ₹125 crore / ₹500 crore.',
    action: 'Recheck your Udyam category; more businesses now qualify as micro or small.',
    who: 'All businesses with Udyam registration',
    source: { name: 'PIB - Ministry of MSME year-end review 2025', url: 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2209712' },
    lessons: ['start-03-registrations']
  },
  {
    id: 'tds-194o-2024',
    date: '2024-07-23', effectiveFrom: '2024-10-01', area: 'TDS/TCS', status: 'in-force', verified: true,
    title: 'E-commerce TDS (194-O) cut from 1% to 0.1%',
    summary: 'From 1 October 2024 marketplaces deduct 0.1% income-tax TDS on seller payouts (was 1%), alongside the separate 0.5% GST TCS.',
    action: 'Claim both credits: TDS in your ITR (see Form 26AS), GST TCS in your electronic cash ledger.',
    who: 'Sellers on Amazon, Flipkart and other marketplaces',
    source: { name: 'Budget Speech 2024-25 (Annexure, TDS rates)', url: 'https://www.indiabudget.gov.in/budget2024-25/doc/Budget_Speech.pdf' },
    lessons: ['tax-05-tds-basics', 'biz-05-channels-and-margins']
  }
];

/**
 * Filing calendar. The page turns these rules into the next few weeks of due dates, so it never goes stale.
 *  monthly: due every month on `day` (optionally only in `months`, 1-12)
 *  annual:  due once a year on month/day
 *  extensions: one-off changes the government announces (agent adds these with a source)
 */
export const COMPLIANCE_CALENDAR = {
  monthly: [
    { day: 7,  area: 'TDS/TCS', title: 'Deposit TDS deducted last month', who: 'TDS deductors', months: [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12] },
    { day: 11, area: 'GST', title: 'GSTR-1 for last month', who: 'Monthly GST filers' },
    { day: 13, area: 'GST', title: 'GSTR-1 for last quarter (QRMP)', who: 'Quarterly (QRMP) filers', months: [1, 4, 7, 10] },
    { day: 18, area: 'GST', title: 'CMP-08 for last quarter', who: 'Composition dealers', months: [1, 4, 7, 10] },
    { day: 20, area: 'GST', title: 'GSTR-3B for last month', who: 'Monthly GST filers' },
    { day: 22, area: 'GST', title: 'GSTR-3B for last quarter (22nd or 24th by state)', who: 'Quarterly (QRMP) filers', months: [1, 4, 7, 10] },
    { day: 25, area: 'GST', title: 'PMT-06 tax payment for last month', who: 'Quarterly (QRMP) filers', months: [2, 3, 5, 6, 8, 9, 11, 12] },
    { day: 15, area: 'Labour', title: 'PF and ESI contributions for last month', who: 'Employers registered with EPFO/ESIC' }
  ],
  annual: [
    { month: 4,  day: 30, area: 'TDS/TCS', title: 'Deposit TDS deducted in March', who: 'TDS deductors' },
    { month: 6,  day: 15, area: 'Income tax', title: 'Advance tax: 1st instalment (15%)', who: 'Tax payable over ₹10,000' },
    { month: 9,  day: 15, area: 'Income tax', title: 'Advance tax: 2nd instalment (45%)', who: 'Tax payable over ₹10,000' },
    { month: 12, day: 15, area: 'Income tax', title: 'Advance tax: 3rd instalment (75%)', who: 'Tax payable over ₹10,000' },
    { month: 3,  day: 15, area: 'Income tax', title: 'Advance tax: final instalment (100%, incl. 44AD/44ADA)', who: 'Tax payable over ₹10,000' },
    { month: 7,  day: 31, area: 'Income tax', title: 'ITR for non-audit cases (ITR-1, ITR-2)', who: 'Individuals without business income' },
    { month: 8,  day: 31, area: 'Income tax', title: 'ITR for non-audit business cases', who: 'Proprietors and firms not needing audit' },
    { month: 9,  day: 30, area: 'Income tax', title: 'Tax audit report', who: 'Businesses needing tax audit' },
    { month: 10, day: 31, area: 'Income tax', title: 'ITR for audit cases', who: 'Businesses needing tax audit' },
    { month: 7,  day: 31, area: 'TDS/TCS', title: 'TDS return 26Q for Apr-Jun', who: 'TDS deductors' },
    { month: 10, day: 31, area: 'TDS/TCS', title: 'TDS return 26Q for Jul-Sep', who: 'TDS deductors' },
    { month: 1,  day: 31, area: 'TDS/TCS', title: 'TDS return 26Q for Oct-Dec', who: 'TDS deductors' },
    { month: 5,  day: 31, area: 'TDS/TCS', title: 'TDS return 26Q for Jan-Mar', who: 'TDS deductors' },
    { month: 6,  day: 30, area: 'GST', title: 'GSTR-4 annual return', who: 'Composition dealers' },
    { month: 12, day: 31, area: 'GST', title: 'GSTR-9 annual return', who: 'GST turnover above ₹2 crore' }
  ],
  extensions: [
    { date: '2026-10-21', area: 'Income tax', title: 'Tax audit report for FY 2025-26 (extended)', who: 'Businesses needing tax audit', replaces: 'Tax audit report', source: { name: 'CBDT Circular No. 07/2026', url: 'https://www.incometax.gov.in/iec/foportal/sites/default/files/2026-09/Circular-7-2026.pdf' } },
    { date: '2026-11-21', area: 'Income tax', title: 'ITR for audit cases, AY 2026-27 (extended)', who: 'Businesses needing tax audit', replaces: 'ITR for audit cases', source: { name: 'CBDT Circular No. 07/2026', url: 'https://www.incometax.gov.in/iec/foportal/sites/default/files/2026-09/Circular-7-2026.pdf' } }
  ]
};
