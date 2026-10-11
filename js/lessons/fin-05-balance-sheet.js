import { fig, svg, diagrams, example, callout, formula, table, compare, terms, inr } from '../lesson-kit.js';

/**
 * Lesson 3.5 - The balance sheet
 * Running example: Noor Crafts as at 31 March 2027. Net profit ₹3,88,500 comes from
 * lesson 3.4; debtors and provision from 3.2; closing stock from 3.3.
 *
 *   Liabilities: Capital 3,10,000 + 3,88,500 − drawings 2,40,000 = 4,58,500 | J&K Bank loan 80,000
 *                Creditors 1,25,000 | GST payable 16,000 | Outstanding rent 8,000      = 6,87,500
 *   Assets:      Equipment 1,20,000 − dep 24,000 = 96,000 | Stock 2,40,000
 *                Debtors 1,70,000 − provision 8,500 = 1,61,500 | Prepaid insurance 3,000
 *                Bank 1,82,000 | Cash 5,000                                            = 6,87,500
 */
export default {
  id: 'fin-05-balance-sheet',
  title: 'The balance sheet',

  intro: `<p>The Trading account and the P&amp;L describe a <em>year</em>. The balance sheet describes a <em>moment</em>: what the business
    owns and owes at the close of business on 31 March. It is the statement a bank reads first, the one your CA signs, and the one
    most owners understand least. By the end of this lesson you will read it the way a lender does.</p>`,

  outcomes: [
    'Explain why the balance sheet is a snapshot and why its two sides must always be equal.',
    'Classify any item as a fixed or current asset, a long-term or current liability, or part of capital, and arrange them in order.',
    'Place every year-end adjustment (outstanding, prepaid, provision, depreciation) on the correct line.',
    'Compute working capital and see what is financing what.'
  ],

  sections: [
    {
      heading: 'A snapshot, not a film',
      short: 'Snapshot',
      html: `
        <p>A P&amp;L has a heading "for the year ended". A balance sheet has a heading "as at". The difference is the whole idea: profit
        is a flow over time; assets and liabilities are a stock at one instant. Sell a shawl on 1 April and the 31 March balance sheet does not move.</p>
        ${diagrams.scale(
          { label: 'Assets ₹6,87,500', sub: 'equipment, stock, debtors, bank, cash, prepaid' },
          { label: 'Liabilities ₹2,29,000 + Capital ₹4,58,500', sub: 'loan, creditors, GST, outstanding rent + Sana\'s net worth', tone: 'b' },
          { title: 'Noor Crafts at 31 March 2027', caption: 'The scale from lesson 2.2 again, now with real year-end numbers. The right side shows whose money is tied up in the left side.' }
        )}
        ${formula('Assets = Liabilities + Capital', 'The balance sheet is this equation written out in full. It balances because every entry in the year had two sides; if yours does not, there is an error somewhere, not a missing item to invent.')}
        ${callout('remember', 'The balance sheet is <strong>not an account</strong>. It has no debit or credit side and nothing is "posted" to it. It is a list of balances remaining in the ledger after the Trading and P&amp;L accounts have been closed.')}
      `
    },
    {
      heading: 'Two sides, four groups',
      short: 'Classification',
      html: `
        ${terms([
          ['Fixed (non-current) assets', 'Held to <strong>use</strong>, not to sell, for more than a year: equipment, furniture, vehicles, a shop you own. Shown at cost less accumulated depreciation.'],
          ['Current assets', 'Cash, or things that will turn into cash within a year in the normal course of business: stock, debtors, bank, prepaid expenses, accrued income.'],
          ['Long-term liabilities', 'Owed to outsiders and payable after more than a year: a term loan from J&amp;K Bank.'],
          ['Current liabilities', 'Payable within a year: creditors, GST payable, outstanding expenses, income received in advance, a bank overdraft.'],
          ['Capital', 'The owner\'s claim: <em>opening capital + net profit − drawings</em>. For a company this is share capital plus reserves.']
        ])}
        <p>Items are listed in a fixed sequence called <strong>marshalling</strong>. Indian sole-proprietor accounts usually follow the
        order of <em>permanence</em>; company balance sheets under Schedule III and most bank formats do the same. The order of <em>liquidity</em>
        is simply the reverse.</p>
        ${compare([
          { title: 'Order of permanence', tone: 'c', points: ['Capital, long-term loans, current liabilities', 'Fixed assets first, then stock, debtors, bank, cash', 'Used by Noor Crafts below'] },
          { title: 'Order of liquidity', tone: 'a', points: ['Cash and bank first, then debtors, stock, fixed assets', 'Current liabilities before loans and capital', 'Common in banks and in some exam questions'] }
        ])}
      `
    },
    {
      heading: 'Where the adjustments land',
      short: 'Adjustments',
      html: `
        <p>Each adjustment from lesson 3.4 changed the P&amp;L once. Here is its second appearance. The rule is mechanical: an amount
        the business still <em>owes</em> is a liability, an amount it has <em>paid ahead</em> or is <em>owed</em> is an asset, and a
        provision or depreciation is <em>deducted</em> from the asset it relates to.</p>
        ${table(
          ['Adjustment', 'Balance sheet line', 'Noor Crafts'],
          [
            ['Outstanding rent', 'Current liability', inr(8000)],
            ['Prepaid insurance', 'Current asset', inr(3000)],
            ['Provision for doubtful debts', 'Deducted from debtors: 1,70,000 − 8,500', inr(161500)],
            ['Depreciation for the year', 'Deducted from the asset: 1,20,000 − 24,000', inr(96000)],
            ['Closing stock', 'Current asset (at cost or NRV, whichever lower)', inr(240000)],
            ['Net profit', 'Added to capital; drawings deducted', inr(458500)]
          ],
          { align: ['l', 'l', 'r'], caption: 'Second appearance of each year-end item' }
        )}
        ${callout('warning', 'Show the working, not just the net figure. "Debtors 1,70,000 less provision 8,500 = 1,61,500" and "Equipment 1,20,000 less depreciation 24,000 = 96,000" tell a reader how much risk and how much wear sit behind each asset. A bare 1,61,500 hides it.')}
      `
    },
    {
      heading: 'Noor Crafts\' balance sheet at 31 March 2027',
      short: 'Worked sheet',
      html: `
        ${example({
          title: 'Closing the books for FY 2026-27',
          scenario: 'Balances after the Trading and P&amp;L accounts are closed: capital on 1 April 2026 ₹3,10,000; drawings ₹2,40,000; net profit ₹3,88,500; J&amp;K Bank term loan ₹80,000; creditors ₹1,25,000; GST payable ₹16,000; equipment and furniture ₹1,20,000; debtors ₹1,70,000; bank ₹1,82,000; cash ₹5,000. Adjustments: closing stock ₹2,40,000; outstanding rent ₹8,000; prepaid insurance ₹3,000; depreciation ₹24,000; provision for doubtful debts ₹8,500.',
          steps: [
            { label: 'Closing capital.', html: '₹3,10,000 + ₹3,88,500 − ₹2,40,000 = <strong>₹4,58,500</strong>.' },
            { label: 'Liabilities side.', html: 'Capital ₹4,58,500 + loan ₹80,000 + current liabilities (₹1,25,000 + ₹16,000 + ₹8,000 = ₹1,49,000) = <strong>₹6,87,500</strong>.' },
            { label: 'Assets side.', html: 'Equipment net ₹96,000 + stock ₹2,40,000 + debtors net ₹1,61,500 + prepaid ₹3,000 + bank ₹1,82,000 + cash ₹5,000 = <strong>₹6,87,500</strong>.' }
          ],
          result: 'Both sides agree at ₹6,87,500. The ₹3,88,500 profit from lesson 3.4 is now inside capital, and you can see where it went: mostly into stock (up from ₹1,05,000 to ₹2,40,000) and the bank.'
        })}
        ${table(
          ['Liabilities', '₹', 'Assets', '₹'],
          [
            ['Capital: opening 3,10,000', '', 'Equipment and furniture 1,20,000', ''],
            ['  add net profit 3,88,500', '', '  less depreciation 24,000', inr(96000)],
            ['  less drawings 2,40,000', inr(458500), 'Closing stock', inr(240000)],
            ['J&K Bank term loan', inr(80000), 'Debtors 1,70,000', ''],
            ['Creditors', inr(125000), '  less provision for doubtful debts 8,500', inr(161500)],
            ['GST payable', inr(16000), 'Prepaid insurance', inr(3000)],
            ['Outstanding rent', inr(8000), 'Bank', inr(182000)],
            ['', '', 'Cash in hand', inr(5000)]
          ],
          { align: ['l', 'r', 'l', 'r'], caption: 'Balance Sheet of Noor Crafts as at 31 March 2027', total: ['Total', inr(687500), 'Total', inr(687500)] }
        )}
        ${fig({
          title: 'The same balance sheet as stacked blocks',
          caption: 'Block height is proportional to rupees. Capital alone covers all the fixed assets, all the stock and most of the debtors; outsiders finance only the bottom third.',
          viewBox: '0 0 640 350',
          body: `
            ${svg.text(160, 18, 'Assets ₹6,87,500', { size: 13, weight: 800 })}
            ${svg.text(480, 18, 'Liabilities + Capital ₹6,87,500', { size: 13, weight: 800 })}
            ${svg.box(40, 30, 240, 42, 'Fixed assets ₹96,000', { tone: 'n', size: 12, r: 6 })}
            ${svg.box(40, 72, 240, 105, 'Closing stock', { tone: 'a', sub: '₹2,40,000', size: 13, r: 6 })}
            ${svg.box(40, 177, 240, 70, 'Debtors (net)', { tone: 'a', sub: '₹1,61,500', size: 13, r: 6 })}
            ${svg.box(40, 247, 240, 83, 'Bank, cash, prepaid', { tone: 'a', sub: '₹1,90,000', size: 13, r: 6 })}
            ${svg.box(360, 30, 240, 200, 'Capital', { tone: 'c', sub: '₹4,58,500 = opening + profit − drawings', size: 15, r: 6 })}
            ${svg.box(360, 230, 240, 35, 'Bank loan ₹80,000', { tone: 'b', size: 12, r: 6 })}
            ${svg.box(360, 265, 240, 65, 'Current liabilities', { tone: 'b', sub: '₹1,49,000', size: 13, r: 6 })}
            ${svg.text(320, 180, '=', { size: 30, weight: 800 })}
            ${svg.line(40, 340, 600, 340, { tone: 'n', dashed: true })}
          `
        })}
      `
    },
    {
      heading: 'Reading it as an owner or a lender',
      short: 'Reading it',
      html: `
        <p>Two questions unlock any balance sheet. First: <strong>can the business pay its bills this year?</strong> Compare current assets
        with current liabilities. Second: <strong>what is financing what?</strong> Long-term assets should be paid for with long-term money
        (capital and term loans), never with creditors who want their money in 45 days.</p>
        ${formula('Working capital = Current assets − Current liabilities', 'Noor Crafts: ₹5,91,500 − ₹1,49,000 = ₹4,42,500')}
        ${table(
          ['Source of money', '₹', 'Where it is sitting', '₹'],
          [
            ['Capital', inr(458500), 'Fixed assets', inr(96000)],
            ['Term loan', inr(80000), 'Working capital (stock, debtors, bank, cash, prepaid less current liabilities)', inr(442500)],
            [{ html: '<strong>Long-term funds</strong>' }, { html: '<strong>' + inr(538500) + '</strong>' }, { html: '<strong>Long-term uses</strong>' }, { html: '<strong>' + inr(538500) + '</strong>' }]
          ],
          { align: ['l', 'r', 'l', 'r'], caption: 'What is financed by what' }
        )}
        <p>Noor Crafts is comfortably financed: ₹5,38,500 of long-term money against only ₹96,000 of fixed assets, so ₹4,42,500 is free to carry
        stock and dealers\' credit. The flip side is that a lot of that money is sitting still. Stock more than doubled during the year and the bank
        holds ₹1,82,000. Lesson 3.6 turns these observations into ratios you can track every month.</p>
        ${callout('tip', 'When a bank asks for your balance sheet, it is checking three things: whether current assets cover current liabilities, how much of the business is the owner\'s money versus borrowed, and whether the debtors and stock figures look real. Keep the aging report and the stock count sheet ready; they are the proof behind the two biggest assets.')}
        ${callout('india', 'A proprietorship has no legal obligation to publish a balance sheet, but you will need one for a bank loan, for income-tax return forms ITR-3 (and the simplified balance-sheet lines in ITR-4), and for any investor or partner. Companies and LLPs must file theirs with the MCA every year.')}
      `
    }
  ],

  keyPoints: [
    'A balance sheet is "as at" a date, not "for the year". It lists ledger balances left after the P&amp;L is closed; it is not an account.',
    'Assets = Liabilities + Capital, always. Capital = opening capital + net profit − drawings. Noor Crafts: ₹3,10,000 + ₹3,88,500 − ₹2,40,000 = ₹4,58,500.',
    'Assets split into fixed (use for years) and current (cash within a year); liabilities into long-term and current. List them in order of permanence or liquidity, consistently.',
    'Outstanding expenses are current liabilities; prepaid expenses are current assets; provisions and depreciation are deducted from the asset they relate to.',
    'Working capital = current assets − current liabilities. Long-term assets should be funded by long-term money.',
    'Noor Crafts at 31 March 2027 totals ₹6,87,500 on both sides, with working capital of ₹4,42,500.'
  ],

  practice: [
    { label: 'Accounting Simulator', sub: 'Generate a balance sheet from live entries and watch it balance', href: 'accounting-lab/index.html', icon: '⚖️' },
    { label: 'Calculators', sub: 'Working capital and current ratio from your own numbers', href: 'calculators/index.html', icon: '🧮' },
    { label: 'Lesson 3.6: Reading the numbers', sub: 'Turn this balance sheet into ratios', href: 'learn/lesson.html?id=fin-06-reading-the-numbers', icon: '📐' }
  ],

  quiz: [
    {
      q: 'Opening capital ₹3,10,000, net profit ₹3,88,500, drawings ₹2,40,000. Closing capital is:',
      options: ['₹6,98,500', '₹4,58,500', '₹2,18,500', '₹9,38,500'],
      answer: 1,
      why: 'Profit increases the owner\'s claim and drawings reduce it: ₹3,10,000 + ₹3,88,500 − ₹2,40,000 = ₹4,58,500.'
    },
    {
      q: 'Where does outstanding rent of ₹8,000 appear in the balance sheet?',
      options: ['Deducted from capital', 'As a current liability', 'As a current asset', 'It does not appear; it is only in the P&L'],
      answer: 1,
      why: 'Rent that has been used but not paid is money the business owes to the landlord within the year, so it is a current liability. The P&L shows the expense; the balance sheet shows the debt.'
    },
    {
      q: 'Which is a current asset?',
      options: ['Equipment bought for the workshop', 'The J&K Bank term loan', 'Prepaid insurance', 'GST payable'],
      answer: 2,
      why: 'Prepaid insurance is a benefit already paid for that will be used within the year. Equipment is a fixed asset; the loan and GST payable are liabilities.'
    },
    {
      q: 'Current assets ₹5,91,500 and current liabilities ₹1,49,000. Working capital is:',
      options: ['₹7,40,500', '₹4,42,500', '₹1,49,000', '₹5,91,500'],
      answer: 1,
      why: 'Working capital = current assets − current liabilities = ₹5,91,500 − ₹1,49,000 = ₹4,42,500. It is the long-term money available to run day-to-day operations.'
    }
  ],

  glossary: [
    ['Balance sheet', 'A statement of assets, liabilities and capital as at a particular date.'],
    ['Fixed (non-current) asset', 'An asset held for use over more than one year, shown at cost less accumulated depreciation.'],
    ['Current liability', 'An amount payable within one year: creditors, outstanding expenses, GST payable, overdraft.'],
    ['Marshalling', 'Arranging balance sheet items in a fixed order, either of permanence or of liquidity.'],
    ['Working capital', 'Current assets minus current liabilities; the funds available for day-to-day operations.'],
    ['Capital employed', 'Capital plus long-term loans, equal to fixed assets plus working capital.']
  ]
};
