import { diagrams, example, callout, formula, table, terms, inr } from '../lesson-kit.js';

/**
 * Lesson 3.6 - Reading the numbers: ratios that matter
 * All ratios are computed from the Noor Crafts statements in lessons 3.3 to 3.5
 * (year ended 31 March 2027):
 *   Sales 18,40,000 | COGS 10,51,000 | Gross profit 7,89,000 | Net profit 3,88,500 | Loan interest 9,000
 *   Opening stock 1,05,000 | Closing stock 2,40,000 | Net purchases 10,20,000
 *   Current assets 5,91,500 (incl. stock 2,40,000, prepaid 3,000) | Current liabilities 1,49,000
 *   Debtors (gross) 1,70,000 | Creditors 1,25,000 | Capital 4,58,500 | Term loan 80,000
 */
export default {
  id: 'fin-06-reading-the-numbers',
  title: 'Reading the numbers: ratios that matter',

  intro: `<p>A P&amp;L and a balance sheet are two pages of numbers. A ratio turns two of those numbers into one question with an answer:
    is the margin healthy, can the bills be paid, how long is cash stuck in stock? You need ten ratios, not fifty.
    This lesson computes all ten for Noor Crafts and says what to do when each one looks wrong.</p>`,

  outcomes: [
    'Compute gross margin, net margin, current ratio, quick ratio, debtor, creditor and inventory days, the working-capital cycle, ROCE and debt-to-equity from a set of final accounts.',
    'Say what a normal range looks like for a small product business and recognise when a ratio is off.',
    'Trace a bad ratio to its likely cause and pick a practical action.'
  ],

  sections: [
    {
      heading: 'Margins: how much of each rupee of sales you keep',
      short: 'Margins',
      html: `
        ${formula('Gross margin = Gross profit ÷ Sales × 100', 'Noor Crafts: ₹7,89,000 ÷ ₹18,40,000 = 42.9%')}
        ${formula('Net margin = Net profit ÷ Sales × 100', 'Noor Crafts: ₹3,88,500 ÷ ₹18,40,000 = 21.1%')}
        <p>Gross margin is about <strong>pricing and buying</strong>. Net margin is about <strong>everything else</strong>: the gap between
        the two is your overheads as a share of sales (21.8% for Noor Crafts). A handmade product brand selling direct and through dealers
        typically runs a 35-55% gross margin; a kirana store 8-12%; a café 60-70% on food but with heavy staff costs underneath.
        A net margin of 8-15% <em>after paying the owner a salary</em> is healthy for a small product business.</p>
        ${diagrams.bars(
          [
            { label: 'Gross margin', value: 42.9, tone: 'a' },
            { label: 'Overheads % of sales', value: 21.8, tone: 'e' },
            { label: 'Net margin', value: 21.1, tone: 'c' }
          ],
          { title: 'Noor Crafts FY 2026-27 margins', caption: 'Gross margin minus overheads (and plus a little other income) gives net margin. The middle bar is the one Sana can shrink fastest.', format: (v) => v.toFixed(1) + '%' }
        )}
        ${callout('warning', 'Sana\'s 21.1% net margin charges nothing for her own work. Her drawings were ₹2,40,000; treat that as a salary and the margin falls to about 8%. Always ask "after owner\'s salary?" before comparing a proprietorship with a company.')}
      `
    },
    {
      heading: 'Liquidity: can you pay next month\'s bills?',
      short: 'Liquidity',
      html: `
        ${formula('Current ratio = Current assets ÷ Current liabilities', 'Noor Crafts: ₹5,91,500 ÷ ₹1,49,000 = 4.0')}
        ${formula('Quick ratio = (Current assets − Stock − Prepaid) ÷ Current liabilities', 'Noor Crafts: ₹3,48,500 ÷ ₹1,49,000 = 2.3')}
        <p>The current ratio asks whether everything you expect to turn into cash this year covers everything you must pay this year.
        The quick ratio (also called the acid test) drops stock and prepaid items, because shawls on a shelf cannot pay a courier bill
        tomorrow. Banks like a current ratio of <strong>1.5 to 2.5</strong> and a quick ratio above <strong>1</strong>. Below 1 means you are
        funding long-term things with short-term money. Above 3 is not a virtue: it usually means idle cash or stock that is not selling.</p>
        ${terms([
          ['Liquidity', 'How quickly an asset becomes cash without losing value. Bank balance is fully liquid; a pashmina shawl is not.'],
          ['Solvency', 'Whether total assets cover total liabilities in the long run. A business can be solvent but illiquid, and that is how most small businesses actually fail.']
        ])}
      `
    },
    {
      heading: 'The working-capital cycle: how long cash is stuck',
      short: 'Cycle',
      html: `
        <p>Money leaves when you pay the weaver and comes back when the dealer pays you. Everything in between is cash you must
        finance yourself. Three "days" ratios measure the pieces, and one sum measures the whole loop.</p>
        ${formula('Inventory days = Average stock ÷ COGS × 365', 'Noor Crafts: (₹1,05,000 + ₹2,40,000) ÷ 2 = ₹1,72,500; ÷ ₹10,51,000 × 365 = 60 days')}
        ${formula('Debtor days = Debtors ÷ Credit sales × 365', 'Noor Crafts: ₹1,70,000 ÷ ₹18,40,000 × 365 = 34 days (using total sales; dealer-only sales would give a longer figure)')}
        ${formula('Creditor days = Creditors ÷ Credit purchases × 365', 'Noor Crafts: ₹1,25,000 ÷ ₹10,20,000 × 365 = 45 days')}
        ${formula('Working-capital cycle = Inventory days + Debtor days − Creditor days', 'Noor Crafts: 60 + 34 − 45 = 49 days')}
        ${diagrams.cycle(
          [
            { label: 'Buy stock on credit', tone: 'b' },
            { label: 'Hold stock 60 days', tone: 'c' },
            { label: 'Sell to dealer', tone: 'd' },
            { label: 'Collect in 34 days', tone: 'a' },
            { label: 'Pay supplier at 45 days', tone: 'e' }
          ],
          { title: 'Cash conversion cycle', caption: 'Stock sits for 60 days and the dealer takes 34 more, but suppliers wait 45 days, so Sana finances 49 days of each rupee of cost herself. Shorter is better.' }
        )}
        <p>What is normal? Debtor days should not exceed your credit terms by more than about 15 days (Noor Crafts gives 45, collects in 34: good).
        Creditor days should be close to supplier terms; stretching beyond them buys cash at the cost of goodwill and, for MSME suppliers,
        a tax penalty for the buyer under Section 43B(h). Inventory days of 30-90 are normal for crafts and apparel; a kirana store runs 15-30.</p>
      `
    },
    {
      heading: 'Return and risk: is the capital earning, and whose is it?',
      short: 'Return and risk',
      html: `
        ${formula('ROCE = (Net profit + Interest) ÷ Capital employed × 100', 'Capital employed = Capital + Long-term loan = ₹4,58,500 + ₹80,000 = ₹5,38,500. Noor Crafts: ₹3,97,500 ÷ ₹5,38,500 = 73.8%')}
        ${formula('Debt-to-equity = Long-term debt ÷ Capital', 'Noor Crafts: ₹80,000 ÷ ₹4,58,500 = 0.17')}
        <p><strong>Return on capital employed</strong> asks: for every ₹100 tied up in the business for the long term, how much did it earn
        before paying for borrowed money? Interest is added back so the ratio measures the business, not its financing. It must beat what
        the money could earn elsewhere: above <strong>15-20%</strong> is good for a small business, and anything below the loan interest rate
        means borrowing to lose money. Noor Crafts' 73.8% is flattered by the small asset base and the unpaid owner; even after a ₹2,40,000 salary
        it would still be 29%.</p>
        <p><strong>Debt-to-equity</strong> asks whose money is at risk. Below <strong>1</strong> is comfortable for a proprietorship; banks get nervous
        above 2. Noor Crafts at 0.17 could borrow more if a good use existed.</p>
        ${callout('india', 'Banks appraising an MSME working-capital limit typically look at the current ratio (1.33 minimum is a common benchmark), total debt to net worth, and debtor and stock levels against the sanctioned limit. Verify the exact norms with your branch; they vary by bank and scheme.')}
      `
    },
    {
      heading: 'Noor Crafts\' ratio card, FY 2026-27',
      short: 'Ratio card',
      html: `
        ${example({
          title: 'All ten ratios from the three statements',
          scenario: 'Sana takes the Trading account (lesson 3.3), the P&amp;L (3.4) and the balance sheet (3.5) and fills in one card. It takes ten minutes and tells her more than the statements do.',
          steps: [
            { label: 'Two strengths.', html: 'A 42.9% gross margin means pricing and buying are sound. Debt-to-equity of 0.17 and a quick ratio of 2.3 mean no lender can push the business around and every bill can be paid on time.' },
            { label: 'Two warnings.', html: 'Stock more than doubled in the year (₹1,05,000 to ₹2,40,000) and inventory days are 60 and rising: cash is turning into shelves. And the 21.1% net margin hides that Sana is unpaid; after a fair salary the business earns about 8% of sales, which is fine but not spectacular.' },
            { label: 'One action each.', html: 'Count stock by product line and stop reordering anything that has not sold in 90 days. Decide a fixed monthly salary for Sana and show it as drawings so the "real" profit is visible every month.' }
          ],
          result: 'A healthy, lightly borrowed business whose main risk is slow-moving stock, not debt or margin.'
        })}
        ${table(
          ['Ratio', 'Formula', 'Noor Crafts', 'Normal for a small product business', 'Verdict'],
          [
            ['Gross margin', 'GP ÷ Sales', '42.9%', '35-55% (crafts, D2C)', 'Strong'],
            ['Net margin', 'NP ÷ Sales', '21.1% (about 8% after owner\'s salary)', '8-15% after owner\'s salary', 'Fine'],
            ['Current ratio', 'CA ÷ CL', '4.0', '1.5-2.5', 'High: idle cash and stock'],
            ['Quick ratio', '(CA − Stock − Prepaid) ÷ CL', '2.3', 'Above 1', 'Strong'],
            ['Debtor days', 'Debtors ÷ Sales × 365', '34 days', 'Terms + 15 days at most', 'Good (terms are 45)'],
            ['Creditor days', 'Creditors ÷ Purchases × 365', '45 days', 'Close to supplier terms', 'Fine'],
            ['Inventory days', 'Avg stock ÷ COGS × 365', '60 days', '30-90, falling', 'Watch: rising'],
            ['Working-capital cycle', 'Inv + Debtor − Creditor days', '49 days', 'Under 60', 'Fine'],
            ['ROCE', '(NP + Interest) ÷ Capital employed', '73.8% (29% after salary)', 'Above 15-20%', 'Strong'],
            ['Debt-to-equity', 'Long-term debt ÷ Capital', '0.17', 'Below 1', 'Strong']
          ],
          { caption: 'Noor Crafts ratio card, year ended 31 March 2027' }
        )}
      `
    },
    {
      heading: 'When a ratio is off: symptom, cause, action',
      short: 'Fix-it table',
      html: `
        <p>A ratio never tells you <em>why</em>. It tells you where to dig. This table is the digging guide; keep it next to your monthly MIS pack.</p>
        ${table(
          ['Symptom', 'Likely cause', 'Action'],
          [
            ['Gross margin falling, sales steady', 'Supplier prices up and you did not reprice; more discounts; stock leaking (damage, samples, theft)', 'Reprice or renegotiate; cap dealer discounts; count stock monthly and reconcile'],
            ['Net margin falling, gross margin steady', 'Overheads growing faster than sales: marketing, courier, rent', 'Track cost per order; cut marketing with no measurable sales; renegotiate courier rates'],
            ['Current ratio below 1', 'Long-term assets or losses funded with creditors and overdraft', 'Convert to a term loan; cut drawings; stop capital spending until it recovers'],
            ['Current ratio above 3', 'Idle bank balance or dead stock', 'Clear slow stock; put surplus cash in a sweep-in FD or repay the loan'],
            ['Debtor days above terms + 15', 'Weak collection routine; too much credit to weak dealers', 'Run the aging schedule and the chase routine from lesson 3.2; stop supply to over-90 accounts'],
            ['Creditor days above supplier terms', 'You are using suppliers as a bank', 'Pay on time; use a working-capital limit instead; remember Section 43B(h) if the supplier is an MSME'],
            ['Inventory days rising', 'Over-buying; some product lines not moving', 'ABC analysis; reorder only on sales data; clearance sale for lines over 90 days'],
            ['ROCE below the loan rate', 'The business is not earning its capital; low volume or price', 'Raise prices or volume; drop products with the lowest contribution; shrink idle assets'],
            ['Debt-to-equity above 2', 'Borrowing to fund losses or drawings', 'Reduce drawings; repay from profit; bring in equity before more debt']
          ],
          { caption: 'Symptom, likely cause, action' }
        )}
        ${callout('tip', 'Compute ratios monthly, not yearly, and plot them. One bad month is noise; three months in the same direction is a trend. Lesson 6.2 shows how to put these on a one-page MIS pack.')}
        ${callout('remember', 'Ratios compare a business with itself over time and with similar businesses. A kirana store\'s 10% gross margin is excellent; the same number at Noor Crafts would mean something has gone badly wrong.')}
      `
    }
  ],

  keyPoints: [
    'Margins measure pricing and overheads: gross margin = GP ÷ sales; net margin = NP ÷ sales. Always ask whether the owner\'s salary has been charged.',
    'Liquidity ratios measure next month: current ratio 1.5-2.5 and quick ratio above 1 are comfortable; far above 3 means idle money.',
    'The working-capital cycle = inventory days + debtor days − creditor days. Noor Crafts finances 49 days of cost for every rupee it spends.',
    'ROCE = (net profit + interest) ÷ capital employed; it must beat the interest rate and a fair return on the owner\'s money.',
    'Debt-to-equity below 1 is comfortable for a small business; above 2 worries lenders.',
    'Noor Crafts FY 2026-27: strong margins, almost no debt, good collections; the one thing to fix is stock that doubled in a year.'
  ],

  practice: [
    { label: 'Calculators', sub: 'Ratio calculator: paste your P&L and balance sheet figures', href: 'calculators/index.html', icon: '🧮' },
    { label: 'MIS Lab', sub: 'Put the ten ratios on a monthly one-page pack', href: 'mis-lab/index.html', icon: '📈' },
    { label: 'Accounting Simulator', sub: 'Generate the final accounts the ratios are built from', href: 'accounting-lab/index.html', icon: '⚖️' }
  ],

  quiz: [
    {
      q: 'Current assets ₹5,91,500 of which stock is ₹2,40,000 and prepaid ₹3,000; current liabilities ₹1,49,000. The quick ratio is about:',
      options: ['4.0', '2.3', '1.6', '0.4'],
      answer: 1,
      why: 'Quick assets = ₹5,91,500 − ₹2,40,000 − ₹3,000 = ₹3,48,500. Divided by ₹1,49,000 = 2.34. The current ratio, which keeps stock in, is 4.0.'
    },
    {
      q: 'Inventory days 60, debtor days 34, creditor days 45. The working-capital cycle is:',
      options: ['139 days', '49 days', '71 days', '19 days'],
      answer: 1,
      why: 'Cash is out for 60 + 34 = 94 days, but suppliers finance 45 of them: 94 − 45 = 49 days that the business must fund itself.'
    },
    {
      q: 'A business has a 45% gross margin but a 2% net margin. The most likely problem is:',
      options: ['It is buying goods too expensively', 'Its overheads are too high for its sales', 'It has too much debt relative to capital', 'Its debtors pay too slowly'],
      answer: 1,
      why: 'Gross margin is healthy, so pricing and buying are fine. The 43 points lost between gross and net are indirect expenses: rent, staff, marketing, courier. That is where to look first.'
    },
    {
      q: 'Why is interest added back when computing return on capital employed?',
      options: [
        'Because interest is not a real expense',
        'So the ratio measures the business itself, regardless of how it is financed',
        'Because interest is tax-deductible',
        'To make the ratio look better for the bank'
      ],
      answer: 1,
      why: 'Capital employed includes both the owner\'s money and the lender\'s. The return must therefore be measured before the lender\'s share (interest) is paid, so two businesses with different borrowing can be compared fairly.'
    }
  ],

  glossary: [
    ['Gross margin', 'Gross profit as a percentage of sales; measures pricing and buying.'],
    ['Quick ratio (acid test)', 'Current assets excluding stock and prepaid expenses, divided by current liabilities.'],
    ['Working-capital cycle', 'Inventory days plus debtor days minus creditor days: the number of days cash is tied up in operations.'],
    ['Return on capital employed (ROCE)', 'Profit before interest divided by capital plus long-term loans; the earning power of the money invested in the business.'],
    ['Debt-to-equity', 'Long-term borrowings divided by the owner\'s capital; a measure of financial risk.'],
    ['Capital employed', 'Owner\'s capital plus long-term loans, equal to fixed assets plus working capital.']
  ]
};
