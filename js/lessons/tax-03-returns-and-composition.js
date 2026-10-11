import { diagrams, example, callout, formula, table, terms, compare, inr } from '../lesson-kit.js';

/**
 * Lesson 5.3 - GST returns, QRMP & composition scheme
 * Running examples: Chai Adda (Meera, Pune, restaurant at 5%) and
 * Gupta Kirana (Rohit, Jaipur, trader) deciding between regular and composition.
 */
export default {
  id: 'tax-03-returns-and-composition',
  title: 'GST returns, QRMP & composition scheme',

  intro: `<p>Registering for GST is a one-time job; <strong>filing</strong> is forever. Every month or quarter you report what you sold,
    accept what you bought, and pay the difference, on fixed dates that carry fees and interest if you miss them.
    This lesson walks the return cycle, the lighter QRMP and composition options, and how Chai Adda and Gupta Kirana should choose.</p>`,

  outcomes: [
    'Describe the GSTR-1 to GSTR-2B to GSTR-3B cycle and the monthly and QRMP due dates.',
    'Work out late fees and interest, and know when GSTR-9, e-way bills and e-invoicing apply.',
    'Decide between the regular scheme and the composition scheme for a small business, with numbers.'
  ],

  sections: [
    {
      heading: 'The return cycle: report sales, accept purchases, pay the difference',
      short: 'The cycle',
      html: `
        <p>A regular taxpayer files two returns a month. <strong>GSTR-1</strong> lists every sales invoice. The portal uses everyone's
        GSTR-1 to build each buyer's <strong>GSTR-2B</strong>, the statement of credit they may claim. <strong>GSTR-3B</strong> is the summary:
        output tax (auto-filled from your GSTR-1 since July 2025 and not editable), ITC from GSTR-2B, and the balance you pay.</p>
        ${diagrams.flow(
          [
            { label: 'GSTR-1', sub: 'your sales invoices, by 11th', tone: 'a' },
            { label: 'GSTR-2B', sub: 'auto ITC statement, 14th', tone: 'c' },
            { label: 'GSTR-3B', sub: 'summary + payment, by 20th', tone: 'b' },
            { label: 'Ledgers', sub: 'cash and credit updated', tone: 'd' }
          ],
          { title: 'The monthly return cycle', caption: 'Your GSTR-1 feeds your customers\' GSTR-2B; your suppliers\' GSTR-1 feeds yours. File GSTR-1 late and your customers lose credit for the month.' }
        )}
        <p>Payment runs through two accounts on the portal. The <strong>electronic credit ledger</strong> holds your ITC, head-wise. The
        <strong>electronic cash ledger</strong> holds money you deposit through a <strong>PMT-06</strong> challan (net banking, UPI, NEFT). GSTR-3B
        first draws on credit, then on cash; if the cash ledger is short, the return will not file.</p>
        ${table(
          ['Scheme', 'GSTR-1', 'GSTR-3B', 'Payment', 'Who'],
          [
            ['Monthly', '11th of next month', '20th of next month', 'With GSTR-3B', 'Default; compulsory above ₹5 crore'],
            ['QRMP', '13th after the quarter (optional IFF by 13th for months 1 and 2)', '22nd or 24th after the quarter, by state', 'PMT-06 by 25th for months 1 and 2', 'Turnover up to ₹5 crore, on opting in'],
            ['Composition', 'None', 'None', 'CMP-08 by 18th after the quarter', 'Turnover up to ₹1.5 crore; GSTR-4 yearly by 30 June']
          ],
          { caption: 'Who files what, and when' }
        )}
        ${diagrams.timeline(
          [
            { at: '11th', label: 'GSTR-1 monthly', tone: 'a' },
            { at: '13th', label: 'IFF / quarterly GSTR-1', tone: 'c' },
            { at: '20th', label: 'GSTR-3B monthly', tone: 'b' },
            { at: '22/24th', label: 'Quarterly GSTR-3B', tone: 'd' },
            { at: '25th', label: 'PMT-06 under QRMP', tone: 'e' }
          ],
          { title: 'Due dates in a typical month', caption: 'Monthly filers live by the 11th and 20th. QRMP filers pay by the 25th in months 1 and 2 and file in the month after the quarter. Maharashtra and the southern and western states use the 22nd; J&K, Delhi, Rajasthan and the north and east use the 24th.' }
        )}
      `
    },
    {
      heading: 'Late fees, interest, annual return and the paperwork for goods',
      short: 'Penalties',
      html: `
        ${terms([
          ['Late fee', '<strong>₹50 per day</strong> (₹25 CGST + ₹25 SGST) for a late GSTR-1 or GSTR-3B; <strong>₹20 per day</strong> for a nil return. Caps apply by turnover (₹500 for nil, ₹2,000 up to ₹1.5 crore); check the current notification.'],
          ['Interest', '<strong>18% per year</strong> on the tax paid late, counted from the due date to the payment date, on the net cash amount. On wrongly claimed ITC the rate is also 18%.'],
          ['GSTR-9', 'The annual return, due <strong>31 December</strong>, mandatory if turnover exceeds <strong>₹2 crore</strong>. A reconciliation statement GSTR-9C is added above ₹5 crore.'],
          ['E-way bill', 'Needed before moving goods worth more than <strong>₹50,000</strong> in one consignment, generated on ewaybillgst.gov.in. A truck of shawls to Delhi needs one; a single ₹8,260 courier parcel does not.'],
          ['E-invoicing', 'Businesses above <strong>₹5 crore</strong> must register each B2B invoice on the Invoice Registration Portal and print the IRN and QR code on it.']
        ])}
        ${formula('Interest = Tax paid late × 18% × days late ÷ 365', 'Paying ₹86,700 ten days late costs ₹86,700 × 18% × 10 ÷ 365 = about ₹428 plus ₹500 of late fee.')}
        ${callout('warning', 'A nil return still has to be filed. Chai Adda closed for a month during renovation and skipped GSTR-3B; the ₹20 a day fee ran for 25 days before Meera noticed. The portal also blocks GSTR-1 if the previous GSTR-3B is pending, so one missed return stalls the next one.')}
      `
    },
    {
      heading: 'The composition scheme: a flat rate instead of the full cycle',
      short: 'Composition',
      html: `
        <p>Small businesses can opt for <strong>composition</strong>: pay a small percentage of turnover, file quarterly, and skip invoice-level
        reporting. The trade-offs are real.</p>
        ${table(
          ['Rule', 'Detail'],
          [
            ['Who can opt', 'Aggregate turnover up to <strong>₹1.5 crore</strong> (₹75 lakh in most special-category states). Not available if you make inter-state supplies, supply goods through an e-commerce operator (a limited intra-state relaxation exists since 2023), or sell non-taxable goods.'],
            ['Rates', '<strong>1%</strong> for manufacturers and traders (traders pay it on taxable turnover only), <strong>5%</strong> for restaurants, <strong>6%</strong> for other service providers with turnover up to ₹50 lakh.'],
            ['No ITC, no tax on the bill', 'You pay the composition tax from your own pocket. You cannot charge GST to customers, and your customers get no credit from you.'],
            ['Document', 'A <strong>bill of supply</strong>, not a tax invoice, marked "composition taxable person, not eligible to collect tax on supplies". The same words go on your signboard.'],
            ['Filing', '<strong>CMP-08</strong> statement and payment by the <strong>18th</strong> after each quarter; <strong>GSTR-4</strong> annual return by <strong>30 June</strong>.']
          ],
          { caption: 'The composition scheme in five lines' }
        )}
        ${callout('india', 'Composition is a <em>supplier</em> choice with a <em>customer</em> consequence. A hotel buying 500 walnut boxes from a composition dealer gets no ITC, so it will push for a lower price or go to a regular dealer. If your customers are businesses, composition can cost you the sale.')}
      `
    },
    {
      heading: 'Regular or composition? Two businesses decide',
      short: 'Decide',
      html: `
        ${example({
          title: 'Chai Adda: ₹48 lakh of chai and snacks',
          scenario: 'Meera\'s café in Pune turns over ₹48,00,000 a year. Restaurants are taxed at 5% without ITC under both schemes, so the comparison is about who bears the tax and how much paperwork there is.',
          steps: [
            { label: 'Composition at 5%.', html: '₹48,00,000 × 5% = <strong>₹2,40,000</strong> a year, paid from her margin. A ₹20 chai stays ₹20 on the bill of supply, and ₹1 of it goes to the government. Four CMP-08s and one GSTR-4.' },
            { label: 'Regular at 5%, no ITC.', html: 'She adds 5% to every bill: the chai becomes ₹21 and the customer bears the ₹1. Output tax on ₹48,00,000 = <strong>₹2,40,000</strong>, deposited from money collected. ITC on milk, rent and gas is blocked for 5% restaurants, so nothing reduces it. Under QRMP: eight returns plus eight PMT-06 payments; monthly: twenty-four returns.' },
            { label: 'Compare.', html: 'The tax amount is identical. Regular lets Meera pass it to customers but costs filing effort; composition is simpler but comes out of her price unless she raises it to ₹21, which makes the two schemes equal.' }
          ],
          result: 'For a restaurant at 5% the cash difference is nil; the decision is paperwork versus pricing freedom. Most small cafés choose composition for the four-filings-a-year simplicity.'
        })}
        ${example({
          title: 'Gupta Kirana: ₹60 lakh of groceries',
          scenario: 'Rohit\'s store in Jaipur sells ₹60,00,000 a year: ₹24,00,000 of exempt goods (loose atta, rice, milk), ₹24,00,000 at 5% and ₹12,00,000 at 18%. He buys everything at a 10% margin, so purchases are 90% of sales.',
          steps: [
            { label: 'Regular: output tax.', html: '5% × ₹24,00,000 = ₹1,20,000; 18% × ₹12,00,000 = ₹2,16,000. Output tax <strong>₹3,36,000</strong>, collected inside the MRP he already charges.' },
            { label: 'Regular: ITC.', html: '5% × ₹21,60,000 = ₹1,08,000; 18% × ₹10,80,000 = ₹1,94,400. ITC <strong>₹3,02,400</strong>.' },
            { label: 'Regular: net cash.', html: '₹3,36,000 − ₹3,02,400 = <strong>₹33,600</strong>, which is simply the tax on his ₹3,60,000 taxable margin. The customer paid it; Rohit only passes it on, but he must match GSTR-2B and file 24 (or QRMP) returns.' },
            { label: 'Composition at 1%.', html: 'Traders pay 1% of <em>taxable</em> turnover: ₹36,00,000 × 1% = <strong>₹36,000</strong>, from his own margin. He keeps the MRP including the embedded tax, and files four CMP-08s.' }
          ],
          result: 'Regular ₹33,600 (customers\' money, heavy filing) versus composition ₹36,000 (his money, light filing): nearly the same cash. Composition wins on effort, as long as he never sells inter-state and his buyers are households who do not need ITC. If his margin were 25% instead of 10%, regular would tax the bigger margin and composition at 1% of turnover would be clearly cheaper.',
          tone: 'b'
        })}
        ${compare([
          { title: 'Choose regular when', tone: 'a', points: ['Your customers are GST-registered and want ITC', 'You sell inter-state or on marketplaces', 'Your purchases carry heavy GST (18% inputs) that you want to recover', 'Turnover will cross ₹1.5 crore soon'] },
          { title: 'Choose composition when', tone: 'c', points: ['Customers are households (retail, café, salon)', 'Turnover is well under ₹1.5 crore and all within your state', 'Inputs carry little GST or ITC is blocked anyway (restaurants)', 'You want four filings a year, not twenty-four'] }
        ])}
        ${callout('note', 'Due dates, rates and limits in this lesson are as of FY 2026-27 (October 2026). Due dates get extended by notification and the late-fee caps change; verify on <strong>gst.gov.in</strong> before relying on any date here. This is educational material, not professional tax advice.')}
      `
    }
  ],

  keyPoints: [
    'Monthly cycle: <strong>GSTR-1 by the 11th</strong> (sales), GSTR-2B auto-built (ITC), <strong>GSTR-3B by the 20th</strong> (summary and payment).',
    'QRMP (turnover up to ₹5 crore): quarterly GSTR-1 by the 13th, GSTR-3B by the 22nd/24th, tax every month by PMT-06 on the 25th, optional IFF.',
    'Late fee ₹50 a day (₹20 for nil), interest 18% a year. GSTR-9 by 31 December above ₹2 crore. E-way bill above ₹50,000; e-invoicing above ₹5 crore.',
    'Composition: turnover up to ₹1.5 crore, <strong>1% traders and manufacturers, 5% restaurants, 6% services</strong>; no ITC, no tax on the bill, no inter-state sales; CMP-08 by the 18th quarterly, GSTR-4 by 30 June.',
    'Regular suits B2B and inter-state sellers; composition suits in-state retail with household customers. For a 5% restaurant the tax is the same either way.'
  ],

  practice: [
    { label: 'GST & ITC Simulator', sub: 'Model a quarter under regular and composition and compare the cash', href: 'tax-lab/index.html', icon: '🏛️' },
    { label: 'Compliance calendar cheatsheet', sub: 'Every GST and income-tax date for the year on one page', href: 'cheatsheets/index.html', icon: '📅' },
    { label: 'Interest & late fee calculator', sub: 'Days late to rupees', href: 'calculators/index.html', icon: '🧮' }
  ],

  quiz: [
    {
      q: 'Noor Crafts files monthly. Its March GSTR-3B is due on which date?',
      options: ['11 April', '20 April', '25 April', '30 June'],
      answer: 1,
      why: 'Monthly GSTR-1 is due by the 11th and GSTR-3B by the 20th of the following month. The 25th is the PMT-06 date for QRMP filers; 30 June is the composition GSTR-4.'
    },
    {
      q: 'Gupta Kirana opts for composition. Which of these is now NOT allowed?',
      options: ['Selling loose atta to walk-in customers', 'Issuing a bill of supply', 'Supplying a bulk order to a hotel in Delhi', 'Paying tax quarterly through CMP-08'],
      answer: 2,
      why: 'A composition dealer cannot make inter-state supplies. Delhi is outside Rajasthan, so that order would force Rohit back onto the regular scheme.'
    },
    {
      q: 'Chai Adda filed a nil GSTR-3B 15 days late. What is the late fee?',
      options: ['₹750', '₹300', '₹50', 'Nil, because no tax was due'],
      answer: 1,
      why: 'A nil return attracts ₹20 per day (₹10 CGST + ₹10 SGST): 15 × ₹20 = ₹300. The ₹50-a-day rate applies when there is tax to report. Nil returns must still be filed.'
    },
    {
      q: 'A trader with ₹90 lakh turnover under composition sells ₹30 lakh of exempt goods and ₹60 lakh of taxable goods. How much composition tax is due?',
      options: ['₹90,000', '₹60,000', '₹30,000', '₹9,000'],
      answer: 1,
      why: 'For traders the 1% composition rate applies to taxable turnover only: ₹60,00,000 × 1% = ₹60,000. Manufacturers, by contrast, pay 1% on total turnover.'
    }
  ],

  glossary: [
    ['GSTR-1', 'The monthly or quarterly return listing every outward supply (sales invoice). It feeds your customers\' GSTR-2B.'],
    ['GSTR-3B', 'The monthly or quarterly summary return in which you declare output tax, claim ITC and pay the balance.'],
    ['QRMP', 'Quarterly Return Monthly Payment: taxpayers up to ₹5 crore file returns quarterly but pay tax monthly through PMT-06.'],
    ['Electronic cash ledger', 'Your deposit account on the GST portal, filled through PMT-06 challans and used to pay tax, interest and fees.'],
    ['Composition scheme', 'A simplified scheme for turnover up to ₹1.5 crore: a flat 1%, 5% or 6% of turnover, no ITC, no tax charged on bills, quarterly CMP-08.'],
    ['Bill of supply', 'The document a composition dealer or an exempt supplier issues instead of a tax invoice; it shows no GST.']
  ]
};
