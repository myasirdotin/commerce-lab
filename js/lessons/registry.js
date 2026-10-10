/**
 * Commerce Lab - Lesson Registry
 *
 * SINGLE SOURCE OF TRUTH for the curriculum: which journeys (hubs) exist, which
 * lessons they contain and in what order. Lesson bodies live in one module each
 * (js/lessons/<id>.js, default export) and are loaded on demand.
 *
 * To add a lesson: create js/lessons/<id>.js, then add its id + meta below.
 */

export const HUBS = [
  {
    id: 'start', num: 1, icon: '🚀', tone: 'a',
    title: 'Start a Business (India)',
    tagline: 'From idea to a registered, invoicing, book-keeping business. The practical track.',
    audience: 'Founders, small brand owners, anyone starting out',
    lessons: [
      { id: 'start-01-idea-to-plan',        title: 'From idea to a one-page plan',               minutes: 9 },
      { id: 'start-02-choose-structure',    title: 'Choosing a legal structure',                 minutes: 10 },
      { id: 'start-03-registrations',       title: 'Registrations checklist: PAN to GST',        minutes: 12 },
      { id: 'start-04-bank-and-payments',   title: 'Bank account, UPI & payment gateways',       minutes: 7 },
      { id: 'start-05-invoicing',           title: 'Making a correct invoice',                   minutes: 10 },
      { id: 'start-06-books-from-day-one',  title: 'Bookkeeping from day one',                   minutes: 11 },
      { id: 'start-07-costing-and-pricing', title: 'Costing & pricing a product',                minutes: 11 },
      { id: 'start-08-compliance-calendar', title: 'Your compliance calendar',                   minutes: 9 },
      { id: 'start-09-ethics-and-trust',    title: 'Running it honestly: ethics that pay',       minutes: 7 }
    ]
  },
  {
    id: 'acc', num: 2, icon: '⚖️', tone: 'b',
    title: 'Accounting Foundations',
    tagline: 'Double entry from scratch: the equation, debit & credit, journal, ledger, trial balance.',
    audience: 'Class 11-12, B.Com, and owners who want to read their own books',
    lessons: [
      { id: 'acc-01-why-accounting',        title: 'Why accounting exists',                      minutes: 7 },
      { id: 'acc-02-accounting-equation',   title: 'The accounting equation',                    minutes: 9 },
      { id: 'acc-03-debit-credit-rules',    title: 'Debit & credit: Golden rules and ALCRE',     minutes: 11 },
      { id: 'acc-04-journal-entries',       title: 'Journal entries',                            minutes: 11 },
      { id: 'acc-05-ledger-and-t-accounts', title: 'Ledger posting & T-accounts',                minutes: 10 },
      { id: 'acc-06-trial-balance',         title: 'The trial balance',                          minutes: 9 },
      { id: 'acc-07-cash-book-petty-cash',  title: 'Cash book & petty cash',                     minutes: 9 },
      { id: 'acc-08-bank-reconciliation',   title: 'Bank reconciliation statement (BRS)',        minutes: 10 }
    ]
  },
  {
    id: 'fin', num: 3, icon: '📊', tone: 'd',
    title: 'Adjustments & Final Accounts',
    tagline: 'Depreciation, provisions, and how the Trading A/c, P&L and Balance Sheet are built and read.',
    audience: 'Class 12, B.Com, business owners reading their CA\'s statements',
    lessons: [
      { id: 'fin-01-depreciation',          title: 'Depreciation: SLM vs WDV',                   minutes: 10 },
      { id: 'fin-02-bad-debts-provisions',  title: 'Bad debts & provisions',                     minutes: 8 },
      { id: 'fin-03-trading-account-cogs',  title: 'Trading account & cost of goods sold',       minutes: 9 },
      { id: 'fin-04-profit-and-loss',       title: 'Profit & Loss account',                      minutes: 9 },
      { id: 'fin-05-balance-sheet',         title: 'The balance sheet',                          minutes: 10 },
      { id: 'fin-06-reading-the-numbers',   title: 'Reading the numbers: ratios that matter',    minutes: 10 }
    ]
  },
  {
    id: 'biz', num: 4, icon: '🏬', tone: 'c',
    title: 'Business & Management',
    tagline: 'Costs, break-even, cash flow, inventory, channels, and how to actually manage a small business.',
    audience: 'Entrepreneurs, BBA/B.Com, managers',
    lessons: [
      { id: 'biz-01-costs-and-break-even',  title: 'Costs, contribution & break-even',           minutes: 10 },
      { id: 'biz-02-working-capital-cash',  title: 'Working capital & cash flow',                minutes: 10 },
      { id: 'biz-03-inventory-management',  title: 'Inventory: stock that sells, not sits',      minutes: 9 },
      { id: 'biz-04-managing-the-business', title: 'Managing: plans, SOPs, people & KPIs',       minutes: 10 },
      { id: 'biz-05-channels-and-margins',  title: 'Channels & margins: retail, online, dealers', minutes: 9 }
    ]
  },
  {
    id: 'tax', num: 5, icon: '🏛️', tone: 'e',
    title: 'Tax & GST (India)',
    tagline: 'GST, input tax credit, returns, income tax for small business, and TDS. Current rules, plain language.',
    audience: 'Business owners, commerce students, anyone filing for the first time',
    lessons: [
      { id: 'tax-01-gst-basics',            title: 'GST basics: CGST, SGST, IGST & slabs',       minutes: 10 },
      { id: 'tax-02-input-tax-credit',      title: 'Input tax credit (ITC)',                     minutes: 9 },
      { id: 'tax-03-returns-and-composition', title: 'GST returns, QRMP & composition scheme',  minutes: 10 },
      { id: 'tax-04-income-tax-for-business', title: 'Income tax for a small business',         minutes: 11 },
      { id: 'tax-05-tds-basics',            title: 'TDS: when you must deduct tax',              minutes: 8 }
    ]
  },
  {
    id: 'mis', num: 6, icon: '📈', tone: 'b',
    title: 'Excel & MIS Reporting',
    tagline: 'Registers that work, formulas that answer business questions, and a monthly MIS pack.',
    audience: 'Owners, accountants, MIS executives',
    lessons: [
      { id: 'mis-01-excel-for-business',    title: 'Excel for business: registers & formulas',   minutes: 10 },
      { id: 'mis-02-monthly-mis-pack',      title: 'The monthly MIS pack & KPIs',                minutes: 9 },
      { id: 'mis-03-budget-vs-actual',      title: 'Budget vs actual: variance analysis',        minutes: 8 }
    ]
  }
];

/** Flat ordered list of every lesson with its hub attached. */
export const ALL_LESSONS = HUBS.flatMap(h => h.lessons.map((l, i) => ({ ...l, hubId: h.id, hubTitle: h.title, hubNum: h.num, hubIcon: h.icon, index: i, number: `${h.num}.${i + 1}` })));

export function findLesson(id) {
  return ALL_LESSONS.find(l => l.id === id) || null;
}

export function hubOf(id) {
  return HUBS.find(h => h.lessons.some(l => l.id === id)) || null;
}

export function neighbours(id) {
  const i = ALL_LESSONS.findIndex(l => l.id === id);
  return { prev: i > 0 ? ALL_LESSONS[i - 1] : null, next: i >= 0 && i < ALL_LESSONS.length - 1 ? ALL_LESSONS[i + 1] : null };
}

/** Dynamic import of a lesson body. */
export async function loadLesson(id) {
  if (!findLesson(id)) throw new Error(`Unknown lesson: ${id}`);
  const mod = await import(`./${id}.js`);
  return mod.default;
}
