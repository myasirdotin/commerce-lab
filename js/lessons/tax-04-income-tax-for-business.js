import { fig, svg, diagrams, example, callout, formula, table, terms, inr } from '../lesson-kit.js';

/**
 * Lesson 5.4 - Income tax for a small business
 * Running example: Noor Crafts' book profit of ₹9,20,000 taken through the
 * adjustments to taxable income, the new-regime slabs and the 87A rebate,
 * then compared with presumptive taxation under section 44AD.
 */
export default {
  id: 'tax-04-income-tax-for-business',
  title: 'Income tax for a small business',

  intro: `<p>GST taxes what you sell; income tax taxes what you <strong>keep</strong>. For a proprietor the business profit is simply
    added to personal income and taxed at the individual slabs, which, under the new regime, means <strong>nil tax up to
    ₹12 lakh</strong>. This lesson takes Noor Crafts' profit from the P&amp;L to the tax return, and shows when the presumptive
    scheme is the better deal.</p>`,

  outcomes: [
    'Explain how a proprietor, a firm or LLP, and a company are each taxed.',
    'Convert book profit into taxable business income by adding back disallowed expenses and using Income-tax depreciation.',
    'Compute tax under the new regime with the 87A rebate and cess, and compare it with presumptive tax under 44AD.',
    'Name the right ITR form, the due dates, and the advance-tax instalments.'
  ],

  sections: [
    {
      heading: 'Who pays, and at what rate',
      short: 'Who pays',
      html: `
        <p>Income tax depends on the <em>legal form</em> of the business, which is why lesson 1.2 mattered.</p>
        ${table(
          ['Structure', 'Who is taxed', 'Rate (FY 2026-27)'],
          [
            ['Sole proprietorship (Noor Crafts, Gupta Kirana, Chai Adda)', 'The owner, in her own ITR. Business profit is one head of income alongside salary, interest and rent.', 'Individual slabs; new regime by default'],
            ['Partnership firm / LLP', 'The firm itself; partners\' share of profit is exempt in their hands.', '30% + 4% cess'],
            ['Private limited / OPC', 'The company; dividends are taxed again in the shareholder\'s hands.', '25% (turnover up to ₹400 crore) or 22% under 115BAA, plus surcharge and cess']
          ],
          { caption: 'Same profit, different taxpayer' }
        )}
        <p>Under the <strong>new regime</strong> (the default since FY 2023-24) the slabs are wide and most deductions are gone.
        The <strong>old regime</strong> keeps 80C, HRA and the rest but starts taxing at ₹2.5 lakh. A proprietor with business income who wants the old regime
        files Form 10-IEA before the return; having gone back to the new regime, you can opt out only once more in your lifetime, so the choice is not a yearly toggle the way it is for salaried people.</p>
        ${fig({
          title: 'The new-regime slab ladder for FY 2026-27',
          caption: 'Read from the bottom. Tax accumulates slab by slab: ₹20,000 + ₹40,000 = ₹60,000 at ₹12 lakh, exactly the size of the 87A rebate, which is why income up to ₹12 lakh pays nothing.',
          viewBox: '0 0 640 340',
          body: `
            ${svg.panel(150, 170, 330, 160, { label: 'Rebate 87A: total income up to ₹12 lakh pays nil', tone: 'a' })}
            ${svg.box(170, 284, 280, 38, '0 to ₹4 lakh: nil', { tone: 'a', size: 12.5 })}
            ${svg.box(170, 240, 280, 38, '₹4 to 8 lakh: 5%', { tone: 'a', size: 12.5 })}
            ${svg.box(170, 196, 280, 38, '₹8 to 12 lakh: 10%', { tone: 'a', size: 12.5 })}
            ${svg.box(170, 152, 280, 38, '₹12 to 16 lakh: 15%', { tone: 'c', size: 12.5 })}
            ${svg.box(170, 108, 280, 38, '₹16 to 20 lakh: 20%', { tone: 'c', size: 12.5 })}
            ${svg.box(170, 64, 280, 38, '₹20 to 24 lakh: 25%', { tone: 'e', size: 12.5 })}
            ${svg.box(170, 20, 280, 38, 'Above ₹24 lakh: 30%', { tone: 'e', size: 12.5 })}
            ${svg.text(545, 303, 'tax in slab: ₹0', { size: 11, tone: 'muted' })}
            ${svg.text(545, 259, '₹20,000', { size: 11, tone: 'muted' })}
            ${svg.text(545, 215, '₹40,000', { size: 11, tone: 'muted' })}
            ${svg.text(545, 171, '₹60,000', { size: 11, tone: 'muted' })}
            ${svg.text(545, 127, '₹80,000', { size: 11, tone: 'muted' })}
            ${svg.text(545, 83, '₹1,00,000', { size: 11, tone: 'muted' })}
            ${svg.text(545, 39, '30% of excess', { size: 11, tone: 'muted' })}
            ${svg.text(75, 170, 'Old regime: nil to ₹2.5L, 5% to ₹5L, 20% to ₹10L, then 30%', { size: 10.5, tone: 'muted', max: 18 })}
          `
        })}
        ${callout('remember', 'The rebate is a cliff. At ₹12,00,000 of total income the tax is nil; at ₹12,10,000 the slab tax is ₹61,500 and the rebate is gone, though <em>marginal relief</em> caps the tax at the ₹10,000 of income above ₹12 lakh. The ₹75,000 standard deduction is for salary only; business owners do not get it.')}
      `
    },
    {
      heading: 'From book profit to taxable business income',
      short: 'Adjustments',
      html: `
        <p>Your P&amp;L follows accounting rules; the Income-tax Act has its own. Taxable business income starts with book
        profit and adjusts for the differences.</p>
        ${diagrams.flow(
          [
            { label: 'Book profit', sub: 'from the P&L', tone: 'a' },
            { label: '+ Disallowed', sub: 'personal, cash > ₹10,000, fines', tone: 'e' },
            { label: '± Depreciation', sub: 'swap book for IT rates', tone: 'c' },
            { label: 'Taxable income', sub: 'add other heads', tone: 'b' },
            { label: 'Tax − rebate + cess', sub: 'slabs, 87A, 4%', tone: 'd' }
          ],
          { title: 'From the P&L to the tax payable', caption: 'The add-backs are where most small-business notices come from; the depreciation swap is where most legitimate savings come from.' }
        )}
        ${terms([
          ['Personal expenses', 'Family groceries, a holiday, the home electricity bill: not deductible even if paid from the business account. Mixed items (phone, car) are split.'],
          ['Cash payments above ₹10,000 (section 40A(3))', 'An expense paid in cash to one person on one day above ₹10,000 is <strong>fully disallowed</strong> (₹35,000 for transporters). Pay the weaver ₹15,000 by UPI and it is deductible; in cash it is not.'],
          ['Penalties and fines', 'A GST late fee or a traffic challan is the cost of breaking the law, not of doing business. Interest on late tax is likewise disallowed.'],
          ['Depreciation at Income-tax rates', 'The Act prescribes WDV on <em>blocks</em>: 10% furniture and buildings, 15% plant, machinery and vehicles, 40% computers; half rate if used under 180 days. You deduct the Act\'s figure, not the book figure.'],
          ['Pay-first expenses (section 43B)', 'GST, PF, bonus and bank interest count only in the year paid. Under 43B(h), micro and small suppliers must be paid within 15 days (45 with a written agreement) for the expense to count that year.']
        ])}
      `
    },
    {
      heading: 'Noor Crafts: tax on ₹9,20,000 of book profit',
      short: 'Worked example',
      html: `
        ${example({
          title: 'Sana\'s FY 2026-27 computation under the new regime',
          scenario: 'Noor Crafts\' P&L shows a profit of ₹9,20,000 on turnover of ₹18,40,000. On review, ₹40,000 of Sana\'s family expenses were booked as business expenses, and depreciation under the Income-tax Act works out ₹30,000 higher than the ₹50,000 charged in the books (WDV at 15% and 40% on a newer asset base). Sana also earned ₹10,000 of savings-account interest.',
          steps: [
            { label: 'Add back disallowed expenses.', html: '₹9,20,000 + ₹40,000 personal = ₹9,60,000.' },
            { label: 'Swap depreciation.', html: 'Add back book depreciation ₹50,000, deduct IT depreciation ₹80,000: net −₹30,000. Business income = <strong>₹9,30,000</strong>.' },
            { label: 'Add other heads.', html: 'Income from other sources ₹10,000. Total income = <strong>₹9,40,000</strong>. (No standard deduction: that is for salary.)' },
            { label: 'Slab tax.', html: '0 to 4L nil; 4 to 8L at 5% = ₹20,000; 8L to 9.4L at 10% = ₹14,000. Tax = <strong>₹34,000</strong>.' },
            { label: 'Rebate and cess.', html: 'Total income is below ₹12 lakh, so the 87A rebate (up to ₹60,000) wipes out the ₹34,000. Cess 4% of nil = nil. <strong>Tax payable: ₹0.</strong>' }
          ],
          result: 'Nil tax, but the return is still compulsory because income exceeds the ₹4 lakh basic exemption. Under the old regime the same ₹9,40,000 would attract ₹12,500 + 20% of ₹4,40,000 = ₹1,00,500 plus cess, less any 80C savings, so the new regime wins easily.'
        })}
        ${table(
          ['Step', 'Amount'],
          [
            ['Book profit', inr(920000)],
            ['Add: personal expenses', inr(40000)],
            ['Less: extra depreciation under the Act', '−' + inr(30000)],
            ['Business income', inr(930000)],
            ['Add: savings interest', inr(10000)],
            ['Total income', inr(940000)],
            ['Tax at new-regime slabs', inr(34000)],
            ['Less: rebate 87A', '−' + inr(34000)]
          ],
          { align: ['l', 'r'], caption: 'Noor Crafts, FY 2026-27', total: ['Tax payable (incl. 4% cess)', inr(0)] }
        )}
      `
    },
    {
      heading: 'Presumptive taxation: 44AD and 44ADA',
      short: 'Presumptive',
      html: `
        <p>If tax-grade books feel heavy, the Act offers a shortcut: declare a fixed percentage of turnover as profit and skip
        books and audit for income-tax purposes.</p>
        ${table(
          ['Scheme', 'Who', 'Limit', 'Deemed profit', 'Conditions'],
          [
            ['44AD', 'Businesses: traders, manufacturers, kiranas, cafés', 'Turnover up to ₹2 crore (₹3 crore if cash receipts are 5% or less)', '6% of digital receipts, 8% of cash receipts, or more if you choose', 'Individuals, HUFs, partnership firms (not LLPs); not commission income'],
            ['44ADA', 'Professionals: CAs, doctors, architects, designers', 'Receipts up to ₹50 lakh (₹75 lakh if cash is 5% or less)', '50% of receipts', 'Notified professions only']
          ],
          { caption: 'The two presumptive schemes' }
        )}
        ${formula('Deemed profit (44AD) = 6% × digital receipts + 8% × cash receipts', 'No further deduction for expenses or depreciation; the percentage is the profit.')}
        ${example({
          title: 'Would Noor Crafts pay less under 44AD?',
          scenario: 'Turnover ₹18,40,000, of which 90% came through UPI, bank and marketplace settlements and 10% in cash.',
          steps: [
            { label: 'Deemed profit.', html: 'Digital ₹16,56,000 × 6% = ₹99,360. Cash ₹1,84,000 × 8% = ₹14,720. Deemed business income = <strong>₹1,14,080</strong>.' },
            { label: 'Tax.', html: 'With ₹10,000 interest, total income ₹1,24,080, below the ₹4 lakh nil slab. Tax nil, and no books or depreciation schedule needed for income tax.' },
            { label: 'Compare with the normal computation.', html: 'Normal: ₹9,30,000 business income, tax nil after rebate. Presumptive: ₹1,14,080, tax nil. Same tax this year, far less paperwork under 44AD.' },
            { label: 'Now imagine profit of ₹15,00,000 on ₹30,00,000 turnover.', html: 'Normal: slab tax ₹1,05,000 + cess = ₹1,09,200 (no rebate above ₹12 lakh). 44AD at 6%: deemed income ₹1,80,000, tax nil. The gap is over a lakh.' },
            { label: 'And if margins collapse.', html: 'A loss-making year on ₹30,00,000 turnover still deems ₹1,80,000 of profit. Declaring less than 6% or 8% means books, an audit, and losing 44AD for five years.' }
          ],
          result: 'Presumptive wins when your real margin is well above 6% or 8%, as for a high-value craft business, and hurts when margins are thin or negative, as they can be for a kirana at 8 to 12%.',
          tone: 'c'
        })}
        ${callout('warning', 'Presumptive is for income tax only. GST still needs full invoices and GSTR-2B matching, and a bank still wants real statements for a loan, so in practice you keep the books anyway; 44AD saves the audit and the depreciation schedule. And if a lender sees ₹1,14,080 declared against ₹9 lakh of real profit, expect questions; many CAs advise declaring closer to the real figure.')}
      `
    },
    {
      heading: 'Advance tax, forms, due dates and audit',
      short: 'Calendar',
      html: `
        ${terms([
          ['Advance tax', 'If the year\'s tax (after TDS) exceeds <strong>₹10,000</strong>, pay in instalments: <strong>15% by 15 June, 45% by 15 September, 75% by 15 December, 100% by 15 March</strong>; presumptive taxpayers pay it all by 15 March. Shortfalls cost 1% a month under 234B (less than 90% paid in advance) and 234C (instalment missed).'],
          ['ITR form', '<strong>ITR-3</strong> for business income computed normally; <strong>ITR-4 (Sugam)</strong> for 44AD or 44ADA with total income up to ₹50 lakh. ITR-5 for firms and LLPs, ITR-6 for companies.'],
          ['Due dates', '<strong>31 July</strong> without audit; <strong>31 October</strong> with a tax audit. A belated return is allowed until 31 December with a fee and loss of some carry-forwards.'],
          ['Tax audit (44AB)', 'Compulsory if turnover exceeds <strong>₹1 crore</strong> (₹10 crore when cash receipts and payments are each 5% or less), professional receipts exceed ₹50 lakh, or you declare below the presumptive rate while above the basic exemption.'],
          ['Form 26AS and AIS', 'Download both from incometax.gov.in before filing. 26AS lists TDS and TCS credited to your PAN; AIS lists what banks, marketplaces and the GST system reported about you. Anything there but missing from your return invites a notice.']
        ])}
        ${callout('note', 'Slabs, rebate, presumptive limits and due dates here are for FY 2026-27 (assessment year 2027-28), as of October 2026. The Finance Act changes these almost every year; verify on <strong>incometax.gov.in</strong> and the tax calculator there before filing. This is educational material, not professional tax advice.')}
        ${callout('india', 'From 1 April 2026 the <strong>Income-tax Act, 2025</strong> replaces the 1961 Act, and section numbers changed even where the rule stayed the same. This lesson uses the familiar 1961 numbers because CAs, software and older guides still use them. Commonly cited mappings: rebate 87A is now section 156, presumptive 44AD/44ADA are grouped around section 58, and cash-expense limit 40A(3) is around section 41. Published mappings still disagree in places, so confirm the new number on incometax.gov.in before quoting it in a return.', 'New Act, new numbers')}
      `
    }
  ],

  keyPoints: [
    'A proprietor adds business profit to personal income and pays <strong>individual slab rates</strong>; a firm or LLP pays 30%; a company 25% or 22% plus surcharge and cess.',
    'New regime FY 2026-27: nil to ₹4L, 5% to ₹8L, 10% to ₹12L, 15% to ₹16L, 20% to ₹20L, 25% to ₹24L, 30% above. <strong>Rebate 87A makes tax nil up to ₹12 lakh</strong> total income; 4% cess on the tax.',
    'Taxable business income = book profit + disallowed items (personal, <strong>cash above ₹10,000 per person per day</strong>, fines, unpaid 43B items) − Income-tax depreciation instead of book depreciation.',
    '44AD deems profit at <strong>6% digital / 8% cash</strong> of turnover up to ₹2 crore (₹3 crore); 44ADA deems 50% for professionals up to ₹50 lakh. No books or audit, but a five-year lock if you leave.',
    'Advance tax by 15 June, 15 September, 15 December, 15 March (all by 15 March under presumptive). ITR-3 normal, ITR-4 presumptive; file by 31 July, or 31 October with audit. Check 26AS and AIS first.'
  ],

  practice: [
    { label: 'Income-tax calculator', sub: 'New vs old regime with the 87A rebate, cess and marginal relief', href: 'calculators/index.html', icon: '🧮' },
    { label: 'Tax Lab', sub: 'Run the P&L to taxable income adjustments on your own numbers', href: 'tax-lab/index.html', icon: '🏛️' },
    { label: 'Compliance calendar cheatsheet', sub: 'Advance-tax and ITR dates alongside the GST ones', href: 'cheatsheets/index.html', icon: '📅' }
  ],

  quiz: [
    {
      q: 'Sana\'s total income is ₹11,80,000 under the new regime. What is her tax?',
      options: ['₹58,000 plus cess', '₹1,16,000 plus cess', 'Nil, because of the 87A rebate', '₹12,500 plus cess'],
      answer: 2,
      why: 'Slab tax would be ₹20,000 + ₹38,000 = ₹58,000, but total income is at or below ₹12 lakh, so the 87A rebate (up to ₹60,000) cancels it entirely. Cess on nil is nil.'
    },
    {
      q: 'Rohit pays a supplier ₹14,000 in cash on one day for stock. For income tax, this expense is:',
      options: ['Fully allowed, because stock is a business cost', 'Allowed up to ₹10,000, the rest disallowed', 'Fully disallowed under section 40A(3)', 'Allowed if the supplier gives a receipt'],
      answer: 2,
      why: 'Section 40A(3) disallows the whole payment, not just the excess, when cash paid to one person in one day exceeds ₹10,000. Paying by UPI or bank transfer would have made all ₹14,000 deductible.'
    },
    {
      q: 'Chai Adda has turnover ₹48 lakh, 70% by UPI and 30% in cash. What is the deemed profit under 44AD?',
      options: ['₹2,88,000', '₹3,84,000', '₹3,16,800', '₹24,00,000'],
      answer: 2,
      why: 'Digital ₹33,60,000 × 6% = ₹2,01,600 plus cash ₹14,40,000 × 8% = ₹1,15,200, total ₹3,16,800. Option 1 applies 6% to everything; option 2 applies 8% to everything.'
    },
    {
      q: 'Which form and due date apply to a proprietor computing business income normally, with turnover of ₹70 lakh and no tax audit?',
      options: ['ITR-4 by 31 July', 'ITR-3 by 31 July', 'ITR-3 by 31 October', 'ITR-1 by 31 July'],
      answer: 1,
      why: 'Normal computation of business income uses ITR-3. ITR-4 is for presumptive income. 31 October applies only when a tax audit is required, which starts above ₹1 crore (₹10 crore with low cash).'
    },
    {
      q: 'Sana used 44AD for three years and then switched to normal computation to claim a loss. What follows?',
      options: ['Nothing; she can switch back next year', 'She cannot use 44AD again for the next five years and needs books and audit if her income exceeds the basic exemption', 'She must pay a penalty of 6% of turnover', 'Her GST registration is cancelled'],
      answer: 1,
      why: 'Opting out of 44AD after having used it triggers a five-year lock-out and, if income exceeds the basic exemption, compulsory books and a tax audit under 44AB.'
    }
  ],

  glossary: [
    ['Rebate under section 87A', 'A reduction of up to ₹60,000 in tax (new regime) for residents with total income up to ₹12 lakh, making their tax nil. Old regime: ₹12,500 up to ₹5 lakh.'],
    ['Disallowed expense', 'An expense in the books that the Income-tax Act refuses to deduct, such as personal spending, cash payments above ₹10,000 or penalties.'],
    ['Written-down value (WDV)', 'The method the Act uses for depreciation: a fixed percentage of the remaining value of a block of assets each year.'],
    ['Presumptive taxation', 'Sections 44AD and 44ADA: declaring a fixed percentage of turnover as profit instead of computing it from books.'],
    ['Advance tax', 'Income tax paid in instalments during the year itself, required when the year\'s liability exceeds ₹10,000.'],
    ['Cess', 'The 4% health and education cess added to the income tax computed, after rebate and surcharge.']
  ]
};
