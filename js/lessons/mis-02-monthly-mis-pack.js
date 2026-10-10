import { fig, svg, diagrams, example, callout, formula, table, terms, steps, inr } from '../lesson-kit.js';

/**
 * Lesson 6.2 - The monthly MIS pack & KPIs
 * Running example: Noor Crafts, September 2026.
 *
 * Numbers used (all consistent):
 *   Shawls: 22 online @7,000 = 1,54,000; 18 dealer @4,900 = 88,200  -> 2,42,200; COGS 40 x 4,000 = 1,60,000
 *   Boxes : 50 online @1,500 = 75,000;  70 dealer @1,050 = 73,500  -> 1,48,500; COGS 120 x 900 = 1,08,000
 *   Revenue 3,90,700 | COGS 2,68,000 | Gross profit 1,22,700 (31.4%)
 *   Opex: rent 8,000 + helper 12,000 + packaging 68x120 = 8,160 + courier 68x90 = 6,120 + ads 25,000
 *         + gateway 2% of online 2,29,000 = 4,580 + misc 3,000 + loan interest 850 = 67,710
 *   Net profit 54,990 (14.1%) | 68 orders | AOV 5,746 | 3 returns (4.4%)
 *   Debtors 1,45,000 (95k / 38k / 12k / 0) ; credit sales 1,61,700 -> 27 debtor days
 *   Stock 2,10,000 ; inventory days 2,10,000 / 2,68,000 x 30 = 23.5 -> 24 ; dead stock 18 boxes = 16,200
 *   Bank 1,35,000 ; fixed monthly outgo ~54,500 -> runway 2.5 months
 */
export default {
  id: 'mis-02-monthly-mis-pack',
  title: 'The monthly MIS pack & KPIs',

  intro: `<p>Your CA produces the Profit &amp; Loss account months after the fact, in a format designed for the tax department.
    <strong>MIS</strong> (management information system) is the opposite: a short pack of numbers, built by you from your own
    registers, ready in the first week of the month, designed to make <em>decisions</em>. One page, ten KPIs, three actions.</p>`,

  outcomes: [
    'Explain the difference between MIS and statutory accounts, and what belongs on a one-page monthly pack.',
    'Build the six boxes of the pack (P&amp;L, cash, debtors, stock, sales mix, KPIs) from a sales register, purchase register and bank statement.',
    'Compute nine KPIs for a small business, including gross margin %, debtor days, inventory days and cash runway.',
    'Run a monthly review that turns every red KPI into a named action with an owner and a date.'
  ],

  sections: [
    {
      heading: 'MIS is information for decisions, not accounts for the law',
      short: 'What MIS is',
      html: `
        <p>Statutory accounts answer <em>"what happened, exactly, in the format the law wants?"</em> They are audited, backward-looking
        and arrive late. MIS answers <em>"what is going on, roughly, and what should I do about it on Monday?"</em> It can round to the
        nearest thousand, compare against a budget, and leave out anything that does not change a decision.</p>
        ${terms([
          ['MIS', 'A regular (usually monthly) set of reports and KPIs for managers, built from operational data: sales, purchases, bank, stock. Internal only, no prescribed format.'],
          ['KPI (key performance indicator)', 'A single number that tells you whether one part of the business is healthy. Each KPI needs a target and a red/amber/green rule, otherwise it is just a statistic.'],
          ['Pack', 'The one-page (or one-screen) document that holds the month\'s summary, its KPIs and the actions agreed. The same layout every month, so your eye learns where to look.']
        ])}
        ${fig({
          title: 'The one-page monthly MIS pack',
          caption: 'Six fixed boxes, same positions every month, plus the action list at the bottom. If it does not fit on one page it is not an MIS pack, it is a data dump.',
          viewBox: '0 0 640 316',
          body: `
            ${svg.box(10, 10, 620, 34, 'Noor Crafts  |  MIS  |  September 2026  |  prepared 4 Oct', { tone: 'n', size: 12 })}
            ${svg.box(10, 56, 198, 100, 'P&L summary', { tone: 'a', sub: 'this month vs last month vs budget', size: 13 })}
            ${svg.box(221, 56, 198, 100, 'Cash position', { tone: 'b', sub: 'bank today + 4-week outlook', size: 13 })}
            ${svg.box(432, 56, 198, 100, 'Debtors aging', { tone: 'c', sub: 'who owes, how old', size: 13 })}
            ${svg.box(10, 168, 198, 100, 'Stock summary', { tone: 'c', sub: 'value, days, dead stock', size: 13 })}
            ${svg.box(221, 168, 198, 100, 'Sales mix', { tone: 'd', sub: 'by channel, by SKU', size: 13 })}
            ${svg.box(432, 168, 198, 100, 'KPI table', { tone: 'd', sub: 'actual vs target, red/amber/green', size: 13 })}
            ${svg.box(10, 280, 620, 28, 'Actions: what, who, by when (max 3)', { tone: 'e', size: 12 })}
          `
        })}
      `
    },
    {
      heading: 'The six boxes and where their numbers come from',
      short: 'Six boxes',
      html: `
        <p>Everything on the page is produced by SUMIFS and pivot tables on the registers you built in the
        <a href="learn/lesson.html?id=mis-01-excel-for-business">previous lesson</a>. Nothing is typed in by hand.</p>
        ${table(
          ['Box', 'Shows', 'Built from'],
          [
            ['P&L summary', 'Revenue, cost of goods, gross profit, expenses, net profit. Three columns: this month, last month, budget.', 'Sales register (taxable value), purchase register, expense register'],
            ['Cash position', 'Bank + cash today, then a 4-week outlook: expected collections and online receipts minus payments due.', 'Bank statement, debtors list, supplier bills due, GST/EMI calendar'],
            ['Debtors aging', 'Outstanding invoices in buckets: 0-30, 31-60, 61-90, over 90 days.', 'Sales register rows where Paid? = No, with TODAY() minus invoice date'],
            ['Stock summary', 'Stock at cost, inventory days, items with no sale in 90 days (dead stock).', 'Stock register: opening + purchases − cost of sales'],
            ['Sales mix', 'Sales by channel and by SKU, with the share of each.', 'Pivot on the sales register: Channel and SKU in rows'],
            ['KPI table', 'Nine KPIs with target and colour.', 'All of the above']
          ],
          { caption: 'Contents of the pack' }
        )}
        ${diagrams.bars(
          [
            { label: 'Online shawls', value: 154000, tone: 'a' },
            { label: 'Online boxes', value: 75000, tone: 'a' },
            { label: 'Dealer shawls', value: 88200, tone: 'b' },
            { label: 'Dealer boxes', value: 73500, tone: 'b' }
          ],
          { title: 'Noor Crafts sales mix, September 2026', caption: 'Online (green) brought ₹2,29,000 and dealers (blue) ₹1,61,700, total ₹3,90,700. Dealers buy more units but at 30% off list, so their share of revenue is smaller than their share of volume.' }
        )}
        ${callout('tip', 'Build the pack on a Summary sheet whose formulas point at the registers. On the 1st of the month you change one cell (the month) and every box refreshes. The first pack takes a day; every pack after that takes an hour.')}
      `
    },
    {
      heading: 'The KPI table, defined',
      short: 'KPIs',
      html: `
        <p>Nine KPIs cover a small product business. Each has a formula, a target you set yourself, and a colour rule: green on target,
        amber within 10% of it, red beyond. The formulas use month figures; multiply by 30 for "days" metrics.</p>
        ${formula('Gross margin % = (Revenue − Cost of goods sold) ÷ Revenue × 100', 'What is left after paying for the product itself. For a trader this is the number to protect.')}
        ${formula('Net margin % = Net profit ÷ Revenue × 100', 'After rent, salaries, ads, courier and interest too.')}
        ${formula('Debtor days = Debtors outstanding ÷ Credit sales in the month × 30', 'How many days a dealer takes to pay you on average. Use credit sales only; online customers pay upfront.')}
        ${formula('Inventory days = Stock at cost ÷ Cost of goods sold in the month × 30', 'How many days of sales are sitting in the storeroom.')}
        ${formula('Cash runway (months) = Cash and bank ÷ Monthly fixed outgoings', 'How long the business survives if sales stopped tomorrow. Fixed outgoings here: rent, helper, EMI, committed ad spend.')}
        <p>Revenue, orders, <strong>AOV</strong> (revenue ÷ orders) and <strong>returns %</strong> (orders returned ÷ orders shipped) come straight from the sales register with SUM, COUNT and COUNTIF.</p>
        ${callout('warning', 'A KPI without a target is decoration. Set the target from your budget or from last quarter\'s average, write it in the table, and change it only at the quarterly review, not when a month looks bad.')}
      `
    },
    {
      heading: 'Noor Crafts, September 2026',
      short: 'Example',
      html: `
        ${example({
          title: 'Building Sana\'s September pack',
          scenario: 'September: 40 shawls (22 online at ₹7,000, 18 to dealers at ₹4,900) and 120 walnut boxes (50 online at ₹1,500, 70 to dealers at ₹1,050) across 68 orders. Shawls cost ₹4,000, boxes ₹900. Bank balance on 30 September ₹1,35,000. Dealers owe ₹1,45,000. Stock at cost ₹2,10,000.',
          steps: [
            { label: 'Revenue.', html: 'Shawls 1,54,000 + 88,200 = ₹2,42,200. Boxes 75,000 + 73,500 = ₹1,48,500. Total <strong>₹3,90,700</strong> (budget ₹4,00,000, August ₹3,60,000).' },
            { label: 'Gross profit.', html: 'COGS = 40 × 4,000 + 120 × 900 = ₹2,68,000. Gross profit = 3,90,700 − 2,68,000 = <strong>₹1,22,700</strong>, margin 31.4% (budget 32.5%).' },
            { label: 'Expenses.', html: 'Rent 8,000 + helper 12,000 + packaging 68 × 120 = 8,160 + courier 68 × 90 = 6,120 + ads 25,000 + payment gateway 2% of online ₹2,29,000 = 4,580 + misc 3,000 + loan interest 850 = <strong>₹67,710</strong>.' },
            { label: 'Net profit.', html: '1,22,700 − 67,710 = <strong>₹54,990</strong>, net margin 14.1% (budget 15%).' },
            { label: 'Debtor days.', html: 'Credit (dealer) sales = 88,200 + 73,500 = ₹1,61,700. Debtor days = 1,45,000 ÷ 1,61,700 × 30 = <strong>27 days</strong>. Aging: 0-30 ₹95,000; 31-60 ₹38,000; 61-90 ₹12,000; over 90 nil.' },
            { label: 'Inventory days and dead stock.', html: '2,10,000 ÷ 2,68,000 × 30 = <strong>24 days</strong>. COUNTIFS on the stock register finds 18 plain boxes of the old design with no sale since June: ₹16,200 at cost.' },
            { label: 'Cash runway.', html: 'Fixed outgoings per month: rent 8,000 + helper 12,000 + EMI 9,500 + committed ads 25,000 = ₹54,500. Runway = 1,35,000 ÷ 54,500 = <strong>2.5 months</strong>.' }
          ],
          result: 'The pack is nine numbers and three colours. Revenue, margins and runway are amber; returns are red; debtor and inventory days are green.'
        })}
        ${table(
          ['KPI', 'Formula', 'Sep 2026', 'Target', 'Status'],
          [
            ['Revenue', 'SUM(taxable value)', inr(390700), inr(400000), { html: '<span class="badge-xs badge-amber">Amber −2.3%</span>' }],
            ['Gross margin %', '(Revenue − COGS) ÷ Revenue', '31.4%', '32.5%', { html: '<span class="badge-xs badge-amber">Amber</span>' }],
            ['Net margin %', 'Net profit ÷ Revenue', '14.1%', '15%', { html: '<span class="badge-xs badge-amber">Amber</span>' }],
            ['Orders', 'COUNT(invoice IDs)', '68', '70', { html: '<span class="badge-xs badge-amber">Amber</span>' }],
            ['AOV', 'Revenue ÷ Orders', inr(5746), inr(5700), { html: '<span class="badge-xs badge-emerald">Green</span>' }],
            ['Returns %', 'Returned orders ÷ Orders', '4.4% (3 of 68)', '≤ 2%', { html: '<span class="badge-xs badge-red">Red</span>' }],
            ['Debtor days', 'Debtors ÷ Credit sales × 30', '27', '≤ 30', { html: '<span class="badge-xs badge-emerald">Green</span>' }],
            ['Inventory days', 'Stock ÷ COGS × 30', '24', '≤ 30', { html: '<span class="badge-xs badge-emerald">Green</span>' }],
            ['Cash runway', 'Cash ÷ Fixed outgoings', '2.5 months', '≥ 3 months', { html: '<span class="badge-xs badge-amber">Amber</span>' }]
          ],
          { align: ['l', 'l', 'r', 'r', 'l'], caption: 'Noor Crafts KPI table, September 2026' }
        )}
        <p>The 4-week cash outlook under the cash box: opening ₹1,35,000, plus dealer collections due ₹95,000 (the 0-30 bucket) and
        expected online receipts ₹2,30,000, minus weaver payment ₹1,80,000, GST ₹38,000, rent and helper ₹20,000, ads ₹25,000 and EMI ₹9,500.
        Expected closing: <strong>₹1,87,500</strong>. Cash is fine for October, provided the dealers pay on time.</p>
      `
    },
    {
      heading: 'The review rhythm: from red KPI to action',
      short: 'Review',
      html: `
        <p>A pack that is produced but not discussed changes nothing. Fix a date: the pack is ready by the 5th, reviewed by the 7th.
        Who sees it: the owner, the accountant or MIS executive who built it, and whoever runs sales. Thirty minutes, five questions, three actions.</p>
        ${steps([
          '<strong>What moved?</strong> Which three numbers changed most against last month and budget?',
          '<strong>Why?</strong> Drill from the KPI to the register rows behind it. Returns % red → list the returned invoices.',
          '<strong>Is it a one-off or a trend?</strong> Look at the last three months before reacting.',
          '<strong>What will we do?</strong> One action per red KPI, with a name and a date. Amber gets watched, not acted on, unless it is amber for the third month.',
          '<strong>Did last month\'s actions happen?</strong> Read out last month\'s list first. An action list nobody checks is theatre.'
        ], { title: 'The five review questions' })}
        ${example({
          title: 'Three decisions Sana takes from the September pack',
          scenario: 'Returns are red, one debtor bucket is ageing, and ₹16,200 of stock is dead. Each becomes an action with an owner and a date.',
          steps: [
            { label: 'Returns 4.4% → fix the cause, not the number.', html: 'All three returns are online shawls, reason "colour not as shown". Action: reshoot the four affected listings in daylight and add a "natural dye, shade may vary" note. Owner: Sana. By 15 October. Expected effect: returns back under 2%, saving about ₹1,200 of two-way courier per return.' },
            { label: 'Debtors 61-90 days ₹12,000 → stop the bleed.', html: 'The whole bucket is one Delhi dealer. Action: no further credit dispatch until it is cleared; call on Monday; offer UPI settlement. Owner: accountant. By 10 October. Debtor days stay green only if this is caught now.' },
            { label: 'Dead stock ₹16,200 → convert to cash before Diwali.', html: '18 old-design plain boxes. Action: bundle one box free with every online shawl order above ₹7,000 in October (cost ₹900 per bundle against a ₹7,000 sale) and list the rest at ₹999 on the website. Owner: Sana. Review in the October pack.' }
          ],
          result: 'Three actions, three owners, three dates, written at the bottom of the pack. In November the first question of the review is whether they were done.',
          tone: 'b'
        })}
        ${callout('remember', 'Amber is normal; most KPIs will be amber most months. The pack exists to find the one or two reds early, while a phone call or a photo reshoot can still fix them. Compare this with <a href="learn/lesson.html?id=fin-06-reading-the-numbers">reading the annual numbers</a>, which only tells you what you should have done.')}
      `
    }
  ],

  keyPoints: [
    'MIS is internal, monthly, decision-focused information built from your registers; statutory accounts are for the law and arrive late.',
    'The pack has six fixed boxes on one page: P&L vs last month and budget, cash + 4-week outlook, debtors aging, stock and dead stock, sales mix, KPI table.',
    'Gross margin % = (Revenue − COGS) ÷ Revenue; net margin % = Net profit ÷ Revenue; AOV = Revenue ÷ Orders; returns % = returned orders ÷ orders.',
    'Debtor days = Debtors ÷ Credit sales × 30; inventory days = Stock ÷ COGS × 30; runway = Cash ÷ Monthly fixed outgoings.',
    'Every KPI needs a target and a red/amber/green rule; every red KPI needs one action with an owner and a date.',
    'Review on a fixed day each month, ask the five questions, and start by checking whether last month\'s actions were done.'
  ],

  practice: [
    { label: 'MIS Dashboard', sub: 'Explore KPI cards, sales by category, aging schedule and OpEx on sample data', href: 'mis-lab/index.html', icon: '📈' },
    { label: 'Excel Formula Studio', sub: 'Practise the SUMIF and COUNTIF that feed each box of the pack', href: 'excel-lab/index.html', icon: '📗' },
    { label: 'Business calculators', sub: 'Margin and break-even checks for the KPI targets', href: 'calculators/index.html', icon: '🧮' }
  ],

  quiz: [
    {
      q: 'Which statement about MIS is correct?',
      options: [
        'MIS must follow the Schedule III format of the Companies Act',
        'MIS is internal, built from operational registers, and designed to support decisions quickly',
        'MIS replaces the audited accounts for income tax filing',
        'MIS is only needed by companies with more than 50 employees'
      ],
      answer: 1,
      why: 'MIS has no prescribed format and no legal status. It is for the owner and managers, built from sales, purchase, stock and bank data, and valued for speed and relevance rather than audit-grade precision.'
    },
    {
      q: 'Noor Crafts has debtors of ₹1,45,000 and dealer (credit) sales of ₹1,61,700 in a 30-day month. Debtor days are about:',
      options: ['11 days', '27 days', '45 days', '90 days'],
      answer: 1,
      why: '1,45,000 ÷ 1,61,700 × 30 = 26.9, about 27 days. Using total revenue (₹3,90,700) instead of credit sales would give 11 days and hide the real collection period, because online customers pay upfront.'
    },
    {
      q: 'Revenue ₹3,90,700, COGS ₹2,68,000, net profit ₹54,990. Gross margin % and net margin % are:',
      options: ['68.6% and 14.1%', '31.4% and 14.1%', '31.4% and 45.5%', '14.1% and 31.4%'],
      answer: 1,
      why: 'Gross margin = (3,90,700 − 2,68,000) ÷ 3,90,700 = 1,22,700 ÷ 3,90,700 = 31.4%. Net margin = 54,990 ÷ 3,90,700 = 14.1%. Gross is always the larger of the two because it is before operating expenses.'
    },
    {
      q: 'Returns % has been red for the month. What is the correct next step in the review?',
      options: [
        'Raise the returns target so the KPI turns green',
        'Drill down to the returned invoices in the register, find the common cause, and set one action with an owner and date',
        'Remove returns % from the pack because it is discouraging',
        'Wait six months to see if the trend continues'
      ],
      answer: 1,
      why: 'A red KPI is a pointer to the rows behind it. Finding that all three returns were colour complaints on the same listings leads to a specific fix (reshoot the photos) that can be checked next month. Changing the target or hiding the KPI defeats the purpose.'
    }
  ],

  glossary: [
    ['MIS', 'Management information system: regular internal reports and KPIs built from operational data to support decisions.'],
    ['KPI', 'Key performance indicator: one measurable number with a target that signals the health of part of the business.'],
    ['Debtors aging', 'A table of unpaid customer invoices grouped by how old they are (0-30, 31-60, 61-90, over 90 days).'],
    ['Dead stock', 'Inventory with no sale for a set period (often 90 days); it ties up cash and usually needs discounting or bundling to clear.'],
    ['Cash runway', 'Months the business can keep paying its fixed outgoings from current cash if sales stopped.'],
    ['Red / amber / green', 'A simple status rule for each KPI: on target, within 10% of target, or beyond. Red triggers an action.']
  ]
};
