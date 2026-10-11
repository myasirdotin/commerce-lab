import { diagrams, example, callout, formula, table, journal, terms, inr } from '../lesson-kit.js';

/**
 * Lesson 3.4 - Profit & Loss account
 * Running example: Noor Crafts, FY 2026-27. Gross profit ₹7,89,000 comes from the
 * Trading account in lesson 3.3. Net profit ₹3,88,500 feeds the balance sheet in 3.5.
 *
 *   Office & admin   : rent 96,000 (88,000 + 8,000 o/s) | insurance 9,000 (12,000 − 3,000 prepaid)
 *                      electricity & internet 18,000 | accountant 15,000 | depreciation 24,000  = 1,62,000
 *   Selling & distr. : courier & packaging 1,30,000 | marketing 85,000 | bad debts 6,000
 *                      provision increase 3,500                                              = 2,24,500
 *   Financial        : loan interest 9,000 | bank & gateway charges 11,000                   =    20,000
 *   Other income     : discount received 4,000 | bad debts recovered 2,000                   =     6,000
 */
export default {
  id: 'fin-04-profit-and-loss',
  title: 'Profit & Loss account',

  intro: `<p>Gross profit tells you the goods were sold for more than they cost. It does not tell you whether the business made money,
    because rent, courier, marketing and interest have not been paid yet. The <strong>Profit &amp; Loss account</strong> deducts every
    indirect expense from gross profit, adds any other income, and arrives at the one number an owner actually wants: <strong>net profit</strong>.</p>`,

  outcomes: [
    'Group indirect expenses into office/administration, selling &amp; distribution and financial, and tell operating from non-operating items.',
    'Pass the year-end adjusting entries (outstanding, prepaid, accrued, received in advance, depreciation, bad debts and provision) and place each in the right statement.',
    'Prepare a Profit &amp; Loss account from a trial balance and adjustments, and transfer the net profit to capital.',
    'Re-state the same figures in the vertical income-statement format that owners and banks prefer.'
  ],

  sections: [
    {
      heading: 'From gross profit to net profit, in one picture',
      short: 'The picture',
      html: `
        <p>The P&amp;L starts where the Trading account stopped. Gross profit comes down, indirect expenses go out in three groups,
        other income comes in, and what is left is net profit. Net profit does not stay in the P&amp;L: it belongs to the owner, so it is
        added to capital in the balance sheet.</p>
        ${diagrams.flow(
          [
            { label: 'Gross profit', sub: 'from Trading A/c', tone: 'a' },
            { label: '− Office and admin', sub: 'rent, insurance, CA fees', tone: 'e' },
            { label: '− Selling costs', sub: 'courier, marketing, bad debts', tone: 'e' },
            { label: '− Finance costs', sub: 'interest, bank charges', tone: 'e' },
            { label: 'Net profit', sub: 'added to capital', tone: 'c' }
          ],
          { title: 'The P&L in one line', caption: 'Other income (discount received, bad debts recovered) is added along the way. Noor Crafts: ₹7,89,000 − ₹4,06,500 + ₹6,000 = ₹3,88,500.' }
        )}
        ${formula('Net profit = Gross profit + Other income − Indirect expenses')}
        ${diagrams.bars(
          [
            { label: 'Office and admin', value: 162000, tone: 'b' },
            { label: 'Selling and distribution', value: 224500, tone: 'd' },
            { label: 'Financial', value: 20000, tone: 'e' }
          ],
          { title: 'Noor Crafts FY 2026-27: indirect expenses by group', caption: 'Selling costs are the biggest group. Courier and packaging alone cost ₹1,30,000, about ₹210 per order, which is why Sana tracks them per order rather than per year.' }
        )}
      `
    },
    {
      heading: 'Grouping the indirect expenses',
      short: 'Groups',
      html: `
        ${terms([
          ['Office and administration', 'The cost of keeping the business open whether or not you sell anything: rent, insurance, electricity, internet, accountant\'s fees, office salaries, depreciation of equipment.'],
          ['Selling and distribution', 'The cost of getting goods to customers and customers to you: courier and packaging, marketing, dealer commission, bad debts and the provision for doubtful debts.'],
          ['Financial', 'The cost of money: interest on loans, bank charges, payment-gateway fees. Shown separately so you can judge the business before and after its borrowing.']
        ])}
        <p>A second cut matters to owners: <strong>operating</strong> items arise from the normal business of selling shawls and boxes;
        <strong>non-operating</strong> items are incidental. The split lets you compare this year with last year without a one-off
        gain or loss muddying the picture.</p>
        ${diagrams.split(
          { heading: 'Operating', tone: 'a', items: ['Rent, salaries, insurance', 'Courier, packaging, marketing', 'Bad debts and provision', 'Depreciation'] },
          { heading: 'Non-operating', tone: 'd', items: ['Interest on loan', 'Discount received', 'Profit or loss on sale of an old asset', 'Interest on a fixed deposit'] },
          { title: 'Operating versus non-operating', caption: 'Operating profit (before the right-hand column) shows how good the business itself is. Net profit shows what the owner finally keeps.' }
        )}
      `
    },
    {
      heading: 'Year-end adjustments: each one, its entry, where it goes',
      short: 'Adjustments',
      html: `
        <p>The trial balance records what was <em>paid</em> and <em>received</em>. The P&amp;L must show what was <em>used</em> and
        <em>earned</em> in the year (the accrual concept). Adjustments bridge the gap. Each one touches the P&amp;L once and the balance
        sheet once; that is how you know you have done it right.</p>
        ${table(
          ['Adjustment', 'Journal entry', 'In the P&L', 'In the balance sheet'],
          [
            ['Outstanding expense (March rent unpaid)', 'Dr Rent, Cr Outstanding Rent', 'Add to the expense', 'Current liability'],
            ['Prepaid expense (insurance paid for next year)', 'Dr Prepaid Insurance, Cr Insurance', 'Deduct from the expense', 'Current asset'],
            ['Accrued income (interest earned, not yet received)', 'Dr Accrued Interest, Cr Interest Received', 'Add to the income', 'Current asset'],
            ['Income received in advance (dealer paid for next year\'s goods)', 'Dr Sales/Commission, Cr Income Received in Advance', 'Deduct from the income', 'Current liability'],
            ['Depreciation', 'Dr Depreciation, Cr Asset', 'Expense', 'Deducted from the asset'],
            ['Bad debts and provision (lesson 3.2)', 'Dr Bad Debts / Dr P&L, Cr Debtor / Cr Provision', 'Expense (bad debts + increase in provision)', 'Provision deducted from debtors']
          ],
          { caption: 'The six standard year-end adjustments' }
        )}
        ${journal([
          { date: '31 Mar 2027', debit: 'Rent', credit: 'Outstanding Rent', amount: 8000, narration: 'March workshop rent due but unpaid' },
          { date: '31 Mar 2027', debit: 'Prepaid Insurance', credit: 'Insurance', amount: 3000, narration: 'Premium covering April to June 2027 carried forward' },
          { date: '31 Mar 2027', debit: 'Depreciation', credit: 'Equipment and Furniture', amount: 24000, narration: 'Depreciation at 20% WDV on ₹1,20,000' },
          { date: '31 Mar 2027', debit: 'Profit and Loss', credit: 'Provision for Doubtful Debts', amount: 3500, narration: 'Provision raised from ₹5,000 to ₹8,500' }
        ], { caption: 'Noor Crafts: adjusting entries actually needed this year' })}
        ${callout('warning', 'An adjustment given <em>below</em> the trial balance is used twice (P&amp;L and balance sheet). An item already <em>inside</em> the trial balance, such as "Outstanding wages" listed as a credit balance, is used once, in the balance sheet only. Using it twice is the single most common final-accounts error.')}
      `
    },
    {
      heading: 'Noor Crafts\' Profit & Loss account, FY 2026-27',
      short: 'Worked account',
      html: `
        ${example({
          title: 'From ₹7,89,000 gross profit to ₹3,88,500 net profit',
          scenario: 'Trial balance (indirect items): rent paid ₹88,000; insurance ₹12,000; electricity and internet ₹18,000; accountant\'s fees ₹15,000; courier and packaging ₹1,30,000; marketing ₹85,000; bad debts ₹6,000; interest on J&amp;K Bank loan ₹9,000; bank and gateway charges ₹11,000; discount received ₹4,000; bad debts recovered ₹2,000; provision for doubtful debts (old) ₹5,000. Adjustments: outstanding rent ₹8,000; prepaid insurance ₹3,000; depreciation ₹24,000; new provision 5% of debtors ₹1,70,000.',
          steps: [
            { label: 'Adjust the expenses.', html: 'Rent ₹88,000 + ₹8,000 = ₹96,000. Insurance ₹12,000 − ₹3,000 = ₹9,000. Provision charge = ₹8,500 − ₹5,000 = ₹3,500.' },
            { label: 'Total the three groups.', html: 'Office and admin ₹1,62,000; selling and distribution ₹2,24,500; financial ₹20,000. Total ₹4,06,500.' },
            { label: 'Add other income.', html: 'Gross profit ₹7,89,000 + discount received ₹4,000 + bad debts recovered ₹2,000 = ₹7,95,000.' },
            { label: 'Net profit.', html: '₹7,95,000 − ₹4,06,500 = <strong>₹3,88,500</strong>, transferred to Sana\'s capital account.' }
          ],
          result: 'Net profit ratio = ₹3,88,500 ÷ ₹18,40,000 = 21.1%. The closing entry: <em>Profit and Loss A/c Dr ₹3,88,500, To Capital A/c ₹3,88,500</em>.'
        })}
        ${table(
          ['Dr. Particulars', '₹', 'Cr. Particulars', '₹'],
          [
            ['To Rent 88,000 add outstanding 8,000', inr(96000), 'By Gross profit b/d', inr(789000)],
            ['To Insurance 12,000 less prepaid 3,000', inr(9000), 'By Discount received', inr(4000)],
            ['To Electricity and internet', inr(18000), 'By Bad debts recovered', inr(2000)],
            ['To Accountant\'s fees', inr(15000), '', ''],
            ['To Depreciation on equipment', inr(24000), '', ''],
            ['To Courier and packaging', inr(130000), '', ''],
            ['To Marketing', inr(85000), '', ''],
            ['To Bad debts', inr(6000), '', ''],
            ['To Provision for doubtful debts (8,500 less 5,000)', inr(3500), '', ''],
            ['To Interest on bank loan', inr(9000), '', ''],
            ['To Bank and payment-gateway charges', inr(11000), '', ''],
            [{ html: '<strong>To Net profit transferred to Capital</strong>' }, { html: '<strong>' + inr(388500) + '</strong>' }, '', '']
          ],
          { align: ['l', 'r', 'l', 'r'], caption: 'Profit and Loss Account of Noor Crafts for the year ended 31 March 2027', total: ['Total', inr(795000), 'Total', inr(795000)] }
        )}
        ${callout('remember', 'Net profit is <strong>not</strong> cash. Sana\'s bank went up by much less than ₹3,88,500 because stock grew, dealers still owe her, and she took drawings. Profit is what the business <em>earned</em>; the balance sheet (lesson 3.5) shows where it went.')}
      `
    },
    {
      heading: 'The vertical format owners prefer',
      short: 'Vertical',
      html: `
        <p>The two-sided account above is what students must produce in exams and what Tally prints by default. Banks, investors and
        most owners read the same numbers top-to-bottom as an <strong>income statement</strong>, with sub-totals that answer business questions
        on the way down.</p>
        ${table(
          ['Noor Crafts, year ended 31 March 2027', '₹', '% of sales'],
          [
            ['Sales', inr(1840000), '100.0%'],
            ['Less: Cost of goods sold', inr(1051000), '57.1%'],
            [{ html: '<strong>Gross profit</strong>' }, { html: '<strong>' + inr(789000) + '</strong>' }, { html: '<strong>42.9%</strong>' }],
            ['Less: Office and administration', inr(162000), '8.8%'],
            ['Less: Selling and distribution', inr(224500), '12.2%'],
            [{ html: '<strong>Operating profit</strong>' }, { html: '<strong>' + inr(402500) + '</strong>' }, { html: '<strong>21.9%</strong>' }],
            ['Add: Other income', inr(6000), '0.3%'],
            ['Less: Finance costs', inr(20000), '1.1%'],
            [{ html: '<strong>Net profit</strong>' }, { html: '<strong>' + inr(388500) + '</strong>' }, { html: '<strong>21.1%</strong>' }]
          ],
          { align: ['l', 'r', 'r'], caption: 'The same P&L as a vertical income statement' }
        )}
        <p>Read the right-hand column, not the rupees. If next year\'s selling costs are 15% of sales instead of 12.2%, you know where to look
        even if sales doubled. Lesson 3.6 turns these percentages into a full set of ratios.</p>
        ${callout('tip', 'A sole proprietor\'s P&amp;L charges no salary for the owner. Sana drew ₹2,40,000 during the year for her family; if you treat that as her salary, the "real" profit of the business is closer to ₹1,48,500, or 8% of sales. Keep both numbers in mind before you call a business very profitable.')}
      `
    }
  ],

  keyPoints: [
    'Net profit = Gross profit + Other income − Indirect expenses. Noor Crafts FY 2026-27: ₹7,89,000 + ₹6,000 − ₹4,06,500 = ₹3,88,500.',
    'Group indirect expenses as office/administration, selling &amp; distribution and financial; separate operating from non-operating items.',
    'Every adjustment appears twice: once in the P&amp;L (adjust the expense or income) and once in the balance sheet (as an asset or liability).',
    'Outstanding expense: add and show as a liability. Prepaid: deduct and show as an asset. Accrued income: add and show as an asset. Received in advance: deduct and show as a liability.',
    'Net profit is transferred to capital: P&amp;L A/c Dr, To Capital A/c. It is not cash.',
    'The vertical income statement with a "% of sales" column is the owner\'s reading format; watch the percentages year on year.'
  ],

  practice: [
    { label: 'Accounting Simulator', sub: 'Generate Trading, P&L and balance sheet from live journal entries', href: 'accounting-lab/index.html', icon: '⚖️' },
    { label: 'MIS Lab', sub: 'Build a monthly vertical P&L with % of sales', href: 'mis-lab/index.html', icon: '📈' },
    { label: 'Lesson 3.5: The balance sheet', sub: 'See where the ₹3,88,500 goes', href: 'learn/lesson.html?id=fin-05-balance-sheet', icon: '📋' }
  ],

  quiz: [
    {
      q: 'Rent paid during the year is ₹88,000 and March rent of ₹8,000 is unpaid at year end. What appears in the P&L and the balance sheet?',
      options: [
        'P&L ₹88,000; balance sheet nothing',
        'P&L ₹96,000; balance sheet shows outstanding rent ₹8,000 as a current liability',
        'P&L ₹80,000; balance sheet shows prepaid rent ₹8,000 as an asset',
        'P&L ₹96,000; balance sheet shows outstanding rent ₹8,000 as an asset'
      ],
      answer: 1,
      why: 'The year used 12 months of rent (₹96,000), so that is the expense. The unpaid ₹8,000 is money owed, a current liability.'
    },
    {
      q: 'Which of these is a non-operating item for Noor Crafts?',
      options: ['Courier charges', 'Interest on the J&K Bank loan', 'Marketing', 'Depreciation on equipment'],
      answer: 1,
      why: 'Interest is the cost of financing, not of selling shawls. Separating it lets you judge the business before and after its borrowing.'
    },
    {
      q: 'Gross profit ₹7,89,000, other income ₹6,000, total indirect expenses ₹4,06,500. The net profit is:',
      options: ['₹3,82,500', '₹3,88,500', '₹3,94,500', '₹4,06,500'],
      answer: 1,
      why: '₹7,89,000 + ₹6,000 = ₹7,95,000 total credits; minus ₹4,06,500 = ₹3,88,500.'
    },
    {
      q: 'The closing entry for net profit in a sole proprietorship is:',
      options: ['Capital A/c Dr, To P&L A/c', 'P&L A/c Dr, To Capital A/c', 'P&L A/c Dr, To Bank A/c', 'Drawings A/c Dr, To P&L A/c'],
      answer: 1,
      why: 'Profit belongs to the owner, so the P&L (which has a credit balance when there is a profit) is debited and Capital is credited. No cash moves.'
    },
    {
      q: 'Insurance of ₹12,000 was paid on 1 July 2026 for 12 months. At 31 March 2027, how much is prepaid?',
      options: ['₹3,000', '₹9,000', '₹4,000', 'Nothing, it was paid this year'],
      answer: 0,
      why: 'Nine months (July to March) belong to this year: ₹9,000 expense. Three months (April to June 2027) are prepaid: ₹3,000, a current asset.'
    }
  ],

  glossary: [
    ['Net profit', 'Gross profit plus other income minus all indirect expenses. The amount added to the owner\'s capital.'],
    ['Outstanding expense', 'An expense that belongs to this year but is unpaid at year end; added to the expense and shown as a current liability.'],
    ['Prepaid expense', 'An amount paid this year for a benefit in the next year; deducted from the expense and shown as a current asset.'],
    ['Accrued income', 'Income earned this year but not yet received; added to income and shown as a current asset.'],
    ['Operating profit', 'Gross profit minus operating expenses, before other income and finance costs. Also called EBIT when interest and tax are the only items below it.'],
    ['Accrual concept', 'Record income when earned and expenses when incurred, not when cash moves.']
  ]
};
