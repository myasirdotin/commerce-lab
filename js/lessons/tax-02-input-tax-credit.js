import { fig, svg, diagrams, example, callout, formula, table, terms, inr } from '../lesson-kit.js';

/**
 * Lesson 5.2 - Input tax credit (ITC)
 * Running example: Noor Crafts' GST for one month: shawl purchases, packaging,
 * courier, and sales half within J&K and half to other states.
 */
export default {
  id: 'tax-02-input-tax-credit',
  title: 'Input tax credit (ITC)',

  intro: `<p>Input tax credit is the reason GST does not tax the same shawl three times on its way from weaver to customer.
    It is also the part of GST where small businesses <strong>lose the most money</strong>: credit missed because a supplier
    did not file, a bill was paid in cash, or the wrong head was used in set-off. This lesson shows the mechanism, the
    conditions, and the set-off order with real numbers.</p>`,

  outcomes: [
    'Explain ITC as <em>output tax minus input tax</em> and list the four conditions plus the 180-day rule.',
    'Recognise blocked credits you cannot claim even with a perfect invoice.',
    'Set off IGST, CGST and SGST credit in the correct order and arrive at the net cash payment for a month.'
  ],

  sections: [
    {
      heading: 'The mechanism: tax on your value addition only',
      short: 'Mechanism',
      html: `
        <p>When Noor Crafts buys shawls from a weaver, the GST on his invoice is Sana's <strong>input tax</strong>. When she sells
        them, the GST she charges is her <strong>output tax</strong>. She deposits output tax <em>minus</em> input tax, and the
        input tax she subtracts is her <strong>input tax credit (ITC)</strong>.</p>
        ${formula('Net GST payable in cash = Output tax − Input tax credit', 'If ITC exceeds output tax in a month, the excess sits in your electronic credit ledger and rolls forward. It is not refunded, except for exports and inverted-duty cases.')}
        ${diagrams.flow(
          [
            { label: 'Purchase invoice', sub: 'GST paid to supplier', tone: 'b' },
            { label: 'GSTR-2B', sub: 'supplier files; credit appears', tone: 'c' },
            { label: 'Credit ledger', sub: 'ITC by head: IGST, CGST, SGST', tone: 'a' },
            { label: 'Set-off', sub: 'credit vs output tax', tone: 'd' },
            { label: 'Net payment', sub: 'balance paid in cash', tone: 'e' }
          ],
          { title: 'How purchase tax becomes a reduction in your payment', caption: 'Credit only becomes usable at step 2, when the supplier has filed. Steps 3 to 5 happen inside your GSTR-3B each month.' }
        )}
        <p>Credit is tracked <strong>by head</strong>: IGST paid on a Delhi courier bill is IGST credit; CGST and SGST paid to a
        Srinagar packaging vendor are CGST and SGST credit. The heads matter in set-off, below.</p>
      `
    },
    {
      heading: 'The four conditions, the 180-day rule and the time limit',
      short: 'Conditions',
      html: `
        <p>Section 16 of the CGST Act allows credit only if <strong>all four</strong> conditions are met:</p>
        ${terms([
          ['1. You hold a tax invoice', 'A proper tax invoice (or debit note) with the supplier\'s GSTIN, your GSTIN, HSN/SAC and the tax split. A bill of supply from a composition dealer carries no tax and gives no credit.'],
          ['2. You have received the goods or services', 'Credit on goods paid for in advance but not yet delivered must wait.'],
          ['3. The supplier has paid the tax', 'The supplier must have filed GSTR-1, so the invoice shows in <strong>your GSTR-2B</strong>, and paid through GSTR-3B. Not in 2B, no credit, whatever the invoice says.'],
          ['4. You have filed your return', 'Credit is taken by claiming it in your own GSTR-3B.']
        ])}
        <p>Two more rules sit on top. If you do not <strong>pay the supplier within 180 days</strong> of the invoice, you must reverse
        the credit with interest and may re-claim it when you pay. And credit for a financial year must be claimed by
        <strong>30 November</strong> of the next year. An April 2026 invoice found in December 2027 is dead credit.</p>
        ${callout('warning', 'The most common ITC loss for small businesses is condition 3. A supplier who collects GST from Rohit but never files GSTR-1 leaves him with an invoice he cannot use. Check GSTR-2B every month and chase suppliers before the 11th. If a supplier has still not filed by 30 September of the next financial year, Rule 37A requires you to reverse the credit by 30 November.')}
      `
    },
    {
      heading: 'Blocked credits: no ITC even with a perfect invoice',
      short: 'Blocked',
      html: `
        <p>Section 17(5) lists purchases on which credit is simply not allowed, however business-related they feel.</p>
        ${table(
          ['Blocked', 'Typical example', 'Note'],
          [
            ['Goods or services for personal use', 'Sana\'s home internet billed to Noor Crafts', 'Claim only the business share of mixed-use items'],
            ['Motor vehicles (seating up to 13), their insurance and repairs', 'A car bought for deliveries', 'Allowed only for transport businesses, driving schools, or resale'],
            ['Food and beverages, catering, club and gym membership, beauty and health services', 'Staff lunch at a restaurant', 'Allowed only when the law obliges you to provide them'],
            ['Works contract and construction of immovable property', 'Renovating the workshop', 'Plant and machinery is allowed; the building is not'],
            ['Goods lost, stolen, destroyed, written off, gifted or given as free samples', 'Two shawls gifted to an influencer', 'Reverse the credit on those shawls'],
            ['Tax paid under composition', 'Buying from a composition dealer', 'No tax on the bill, nothing to claim']
          ],
          { caption: 'Blocked credits under section 17(5)' }
        )}
        <p>Two related rules. <strong>Capital goods</strong> (a laptop, an embroidery frame, a business-only e-rickshaw) get
        <strong>full credit in the month of purchase</strong>, provided you do not also claim income-tax depreciation on the GST part of the cost.
        And when purchases serve both <strong>taxable and exempt</strong> sales, say a kirana selling 18% soap and 0% loose atta from one shop,
        common credits like rent and electricity are allowed only <strong>in proportion</strong> to taxable turnover (Rules 42 and 43).</p>
      `
    },
    {
      heading: 'The set-off order',
      short: 'Set-off',
      html: `
        <p>Credit under one head cannot always be used against tax under another. The law fixes the order:</p>
        ${fig({
          title: 'Which credit can pay which tax',
          caption: 'IGST credit must be used up first, against IGST, then CGST or SGST. CGST credit goes to CGST then IGST; SGST credit goes to SGST then IGST. CGST and SGST never cross.',
          viewBox: '0 0 640 270',
          body: `
            ${svg.box(30, 15, 160, 56, 'IGST credit', { tone: 'd', sub: 'use this first' })}
            ${svg.box(240, 15, 160, 56, 'CGST credit', { tone: 'a' })}
            ${svg.box(450, 15, 160, 56, 'SGST credit', { tone: 'b' })}
            ${svg.box(30, 200, 160, 56, 'IGST payable', { tone: 'd' })}
            ${svg.box(240, 200, 160, 56, 'CGST payable', { tone: 'a' })}
            ${svg.box(450, 200, 160, 56, 'SGST payable', { tone: 'b' })}
            ${svg.arrow(110, 73, 110, 197, { tone: 'd', width: 2.5, label: '1st' })}
            ${svg.arrow(150, 73, 280, 197, { tone: 'd', dashed: true, label: '2nd' })}
            ${svg.arrow(170, 60, 490, 197, { tone: 'd', dashed: true, label: '3rd' })}
            ${svg.arrow(320, 73, 320, 197, { tone: 'a', width: 2.5, label: '1st' })}
            ${svg.arrow(260, 73, 170, 197, { tone: 'a', dashed: true, label: '2nd' })}
            ${svg.arrow(530, 73, 530, 197, { tone: 'b', width: 2.5, label: '1st' })}
            ${svg.arrow(470, 73, 190, 190, { tone: 'b', dashed: true, label: '2nd' })}
            ${svg.text(425, 228, '✕', { size: 22, weight: 800, tone: 'e' })}
            ${svg.text(425, 262, 'CGST and SGST never cross', { size: 10.5, weight: 700, tone: 'e' })}
          `
        })}
        ${example({
          title: 'Noor Crafts: one month of GST, start to finish',
          scenario: 'In a busy month Sana buys shawls worth ₹3,00,000 at 5% from weavers in J&K (CGST + SGST), packaging worth ₹20,000 at 18% from a Srinagar vendor (CGST + SGST), and courier services worth ₹15,000 at 18% billed by the courier\'s Delhi office (IGST). She sells shawls worth ₹6,00,000 at 18%: half to customers in J&K, half to boutiques in Delhi and Mumbai.',
          steps: [
            { label: 'Output tax.', html: 'Intra-state ₹3,00,000 × 18% = ₹54,000 as CGST ₹27,000 + SGST ₹27,000. Inter-state ₹3,00,000 × 18% = IGST ₹54,000. Total output tax <strong>₹1,08,000</strong>.' },
            { label: 'ITC by head.', html: 'Shawls: ₹3,00,000 × 5% = ₹15,000 as CGST ₹7,500 + SGST ₹7,500. Packaging: ₹20,000 × 18% = ₹3,600 as CGST ₹1,800 + SGST ₹1,800. Courier: ₹15,000 × 18% = IGST ₹2,700. Credit: IGST ₹2,700, CGST ₹9,300, SGST ₹9,300, total <strong>₹21,300</strong>.' },
            { label: 'Set off IGST credit first.', html: 'IGST credit ₹2,700 against IGST payable ₹54,000. IGST still due: ₹51,300. No IGST credit is left to move to CGST or SGST.' },
            { label: 'Set off CGST and SGST credit.', html: 'CGST ₹27,000 − ₹9,300 = ₹17,700 due. SGST ₹27,000 − ₹9,300 = ₹17,700 due.' },
            { label: 'Net cash payment.', html: 'IGST ₹51,300 + CGST ₹17,700 + SGST ₹17,700 = <strong>₹86,700</strong>, paid through a PMT-06 challan into the electronic cash ledger before filing GSTR-3B.' }
          ],
          result: 'Output ₹1,08,000 − ITC ₹21,300 = ₹86,700 in cash. The 5% rate on shawl purchases against 18% on sales is why Sana\'s credit covers only a fifth of her output tax: she adds a lot of value, and GST taxes exactly that.'
        })}
        ${table(
          ['Head', 'Output tax', 'ITC available', 'Credit used', 'Cash payable'],
          [
            ['IGST', inr(54000), inr(2700), inr(2700), inr(51300)],
            ['CGST', inr(27000), inr(9300), inr(9300), inr(17700)],
            ['SGST', inr(27000), inr(9300), inr(9300), inr(17700)]
          ],
          { align: ['l', 'r', 'r', 'r', 'r'], caption: 'Set-off table for the month', total: ['Total', inr(108000), inr(21300), inr(21300), inr(86700)] }
        )}
        ${callout('remember', 'Had the courier bill been CGST + SGST instead, the ₹2,700 would have reduced CGST and SGST by ₹1,350 each and IGST due would have been the full ₹54,000. The cash total stays ₹86,700; only the split between heads changes. Trouble starts when one head has surplus credit and another a shortfall, because surplus SGST credit can never pay a CGST bill.')}
      `
    },
    {
      heading: 'What this means for a business owner',
      short: 'For owners',
      html: `
        <p>ITC is money. Every ₹100 of credit you fail to claim is ₹100 of cost that a competitor who did claim it does not carry.
        Four habits protect it: give your GSTIN to every supplier and insist on a tax invoice, not a cash memo; reconcile purchases
        with GSTR-2B before filing GSTR-3B; pay suppliers within 180 days; and buy capital goods in the business name, because that
        credit is often the biggest single credit of the year.</p>
        ${callout('tip', 'When choosing between two suppliers, compare the price <em>after</em> credit. A registered weaver at ₹4,000 + 5% GST costs you ₹4,000 once you claim the ₹200. An unregistered weaver at ₹4,100 with no GST costs more, because there is nothing to claim.')}
        ${callout('note', 'Rates, rules and dates here are as of FY 2026-27 (October 2026). ITC rules change by amendment and circular, so verify on <strong>gst.gov.in</strong> and in your own GSTR-2B before claiming. This is educational material, not professional tax advice.')}
      `
    }
  ],

  keyPoints: [
    '<strong>Net GST = Output tax − Input tax credit.</strong> Only your value addition is taxed; the consumer bears the whole tax.',
    'Four conditions: tax invoice, goods or services received, supplier filed and paid (<strong>it shows in GSTR-2B</strong>), and your own return filed. Pay the supplier within 180 days.',
    'Blocked under 17(5): personal use, most motor vehicles, food and beverages, club membership, building construction, goods lost or gifted.',
    'Set-off order: <strong>IGST credit first</strong> (against IGST, then CGST, then SGST). CGST credit cannot pay SGST and vice versa.',
    'Capital goods get full credit in the month of purchase. With exempt sales, common credits are allowed only in proportion to taxable turnover.',
    'Check GSTR-2B every month. If a supplier never files, the credit is not yours, however genuine the invoice.'
  ],

  practice: [
    { label: 'GST & ITC Simulator', sub: 'Enter purchases and sales by head and watch the set-off and net payment update', href: 'tax-lab/index.html', icon: '🏛️' },
    { label: 'GST cheatsheet', sub: 'ITC conditions, blocked credits and set-off order on one page', href: 'cheatsheets/index.html', icon: '📑' }
  ],

  quiz: [
    {
      q: 'Noor Crafts has IGST credit of ₹10,000, IGST payable ₹4,000, CGST payable ₹8,000 and SGST payable ₹8,000. After set-off, what is still payable in cash?',
      options: ['CGST ₹8,000 + SGST ₹8,000', 'CGST ₹2,000 + SGST ₹8,000, or any split that totals ₹10,000', 'Nothing', 'IGST ₹4,000 only'],
      answer: 1,
      why: 'IGST credit first clears IGST ₹4,000. The remaining ₹6,000 of IGST credit can be used against CGST or SGST in any proportion. Total liability ₹20,000 − credit ₹10,000 = ₹10,000 in cash.'
    },
    {
      q: 'Rohit of Gupta Kirana has a proper tax invoice for ₹50,000 + 18% GST, but the supplier has not filed GSTR-1 and the invoice is missing from his GSTR-2B. Can he claim the ₹9,000 credit this month?',
      options: ['Yes, the invoice is enough', 'Yes, but only half', 'No, not until it appears in GSTR-2B', 'No, never'],
      answer: 2,
      why: 'Condition 3 requires the supplier to have filed and paid so that the invoice appears in GSTR-2B. Rohit should chase the supplier; once it appears he can claim it, subject to the 30 November deadline.'
    },
    {
      q: 'Which of these purchases gives Noor Crafts input tax credit?',
      options: ['A car for Sana to visit dealers', 'Lunch for staff at a restaurant', 'An embroidery frame for the workshop', 'Renovation of the workshop building'],
      answer: 2,
      why: 'Plant and machinery used for business is allowed, with full credit in the month of purchase. Motor vehicles, food and beverages, and construction of immovable property are blocked under section 17(5).'
    },
    {
      q: 'Sana has surplus SGST credit of ₹5,000 and CGST payable of ₹5,000. What can she do?',
      options: ['Use the SGST credit to pay the CGST', 'Nothing: SGST credit cannot be used against CGST; the CGST must be paid in cash', 'Ask for a refund of the SGST credit', 'Convert SGST credit into IGST credit'],
      answer: 1,
      why: 'CGST and SGST credits never cross. The SGST credit carries forward to future SGST (or IGST) liabilities, and this month\'s CGST is paid in cash.'
    }
  ],

  glossary: [
    ['Input tax credit (ITC)', 'The GST paid on business purchases that you subtract from the GST collected on sales before paying the balance.'],
    ['GSTR-2B', 'An auto-generated monthly statement of the invoices your suppliers have filed. Credit is available only for invoices that appear here.'],
    ['Blocked credit', 'Purchases listed in section 17(5) on which ITC cannot be claimed: personal use, most motor vehicles, food, club membership, buildings, gifts.'],
    ['Electronic credit ledger', 'Your running balance of ITC on the GST portal, kept head-wise (IGST, CGST, SGST), used to pay output tax.'],
    ['Reversal', 'Giving back credit already claimed, with interest, for example when a supplier is not paid within 180 days or goods are gifted.'],
    ['Capital goods', 'Assets used in the business over many years (machines, computers, furniture). Full ITC is allowed at once if no depreciation is claimed on the GST portion.']
  ]
};
