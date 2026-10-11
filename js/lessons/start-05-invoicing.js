import { fig, svg, example, callout, formula, checklist, table, terms, inr } from '../lesson-kit.js';

/**
 * Lesson 1.5 - Making a correct invoice
 * Running example: Noor Crafts (Sana, Srinagar, GSTIN 01ABCPS1234F1Z5) invoicing
 * a Delhi boutique (inter-state, IGST) and a Srinagar boutique (CGST + SGST).
 */
export default {
  id: 'start-05-invoicing',
  title: 'Making a correct invoice',

  intro: `<p>An invoice is the one document that a customer, your CA, the GST portal and a bank all read. If it is right, your buyer gets
    their input tax credit, your GSTR-1 fills itself, and a dispute six months later is settled by looking at one sheet. If it is wrong,
    the buyer's credit is blocked and the mistake comes back as a notice. The rules are short; this lesson shows every one of them on a real sale.</p>`,

  outcomes: [
    'List the fields a GST tax invoice must carry under Rule 46 and lay them out on a page.',
    'Choose between a tax invoice, a bill of supply, a receipt voucher and a proforma, and number invoices correctly for a financial year.',
    'Decide CGST + SGST or IGST from the place of supply, and convert a GST-inclusive price into taxable value and tax.',
    'Issue a credit note for a return and know when e-invoicing and e-way bills apply.'
  ],

  sections: [
    {
      heading: 'An invoice in one picture',
      short: 'Layout',
      html: `
        <p>Rule 46 of the CGST Rules lists what a tax invoice must contain. Rather than memorise the list, learn the eight areas of the page.</p>
        ${fig({
          title: 'The eight areas of a GST tax invoice',
          caption: 'Areas 1, 2, 3 and 5 identify who, when and what; area 4 decides which tax; area 6 shows the tax; area 7 the total; area 8 makes it a document. Miss any one and the buyer\'s input tax credit is at risk.',
          viewBox: '0 0 640 440',
          maxWidth: 680,
          body: `
            ${svg.panel(10, 10, 620, 420, { label: 'TAX INVOICE' })}
            ${svg.box(20, 30, 300, 70, '1. Supplier', { tone: 'a', sub: 'Name, address, GSTIN, state and code', size: 13 })}
            ${svg.box(330, 30, 290, 70, '2. Invoice number and date', { tone: 'b', sub: 'Consecutive, unique in the FY, max 16 characters', size: 13 })}
            ${svg.box(20, 110, 300, 70, '3. Bill to / Ship to', { tone: 'c', sub: 'Buyer name, address, GSTIN if registered', size: 13 })}
            ${svg.box(330, 110, 290, 70, '4. Place of supply', { tone: 'd', sub: 'State and code; decides IGST or CGST + SGST', size: 13 })}
            ${svg.box(20, 190, 600, 90, '5. Line items', { tone: 'n', sub: 'HSN or SAC, description, quantity, unit, rate, discount, taxable value, GST rate', size: 13 })}
            ${svg.box(20, 290, 380, 70, '6. Tax summary', { tone: 'e', sub: 'CGST and SGST, or IGST: rate and amount per rate', size: 13 })}
            ${svg.box(410, 290, 210, 70, '7. Total', { tone: 'a', sub: 'Taxable value + tax, in figures and words', size: 13 })}
            ${svg.box(20, 370, 600, 50, '8. Signature', { tone: 'b', sub: 'Signed or digitally signed by the supplier or an authorised person', size: 13 })}
          `
        })}
        <p>Two things are not on the list but belong on every invoice: your bank details or UPI ID for payment, and the payment terms
        ("due in 15 days" for a dealer, "paid online" for a website order). For goods, the invoice is issued at or before delivery; for services,
        within 30 days of supply.</p>
      `
    },
    {
      heading: 'Which document, and how to number it',
      short: 'Documents',
      html: `
        ${terms([
          ['Tax invoice', 'Issued by a GST-registered seller for a taxable supply. Shows GST separately. The buyer\'s input tax credit depends on it.'],
          ['Bill of supply', 'Issued instead of a tax invoice when no GST can be charged: by a composition dealer, by an unregistered seller, or for exempt goods. Same fields, no tax lines, and the words "composition taxable person, not eligible to collect tax" where that applies.'],
          ['Receipt voucher', 'Issued when you receive an advance before supplying. For goods, GST is not payable on the advance; the tax invoice follows at delivery.'],
          ['Proforma invoice', 'A quotation in invoice format. Not a GST document, carries no tax liability, and must not be numbered in the tax-invoice series.'],
          ['Credit note and debit note', 'Issued against an earlier tax invoice when goods come back, a discount is given later, or the invoice overstated or understated value or tax. Reported in GSTR-1 so that both sides\' tax adjusts.']
        ])}
        <p><strong>Numbering.</strong> The series must be consecutive and unique within a financial year, up to 16 characters, using letters, numbers,
        "/" and "-". Noor Crafts uses NC/26-27/001 onwards and restarts at 001 on 1 April 2027 with NC/27-28/001. You may run separate series
        for website orders and dealers (NCW/26-27/001 and NCD/26-27/001) as long as each is consecutive. Gaps are a red flag in an audit.</p>
        <p><strong>HSN and SAC.</strong> Every line needs the Harmonised System of Nomenclature code for goods or the Services Accounting Code for services.
        With turnover up to ₹5 crore, four digits are mandatory on invoices to registered buyers and optional on consumer invoices; above ₹5 crore,
        six digits. Pashmina shawls fall under HSN 6214 (shawls and scarves); walnut-wood boxes under HSN 4420 (wooden ornaments and caskets).
        Confirm codes and rates on the GST portal\'s rate finder before your first invoice.</p>
        ${callout('warning', 'Keep every invoice. Rule 48 wants goods invoices in triplicate (original for the buyer, duplicate for the transporter, triplicate for you), and section 36 requires records to be kept for 72 months after the due date of the annual return for that year. A PDF folder named by financial year, backed up, satisfies both.')}
      `
    },
    {
      heading: 'CGST + SGST or IGST: the place of supply',
      short: 'Which tax',
      html: `
        <p>The GST rate is the same wherever the buyer is. What changes is who collects it. For goods, the <strong>place of supply</strong> is where
        the goods are delivered. If that is in your own state, you charge CGST and SGST in equal halves; if it is in another state, you charge IGST
        at the full rate.</p>
        ${fig({
          title: 'Intra-state or inter-state?',
          caption: 'Noor Crafts is registered in J&K (state code 01). The delivery address decides the tax, not the buyer\'s billing address or where the money comes from.',
          viewBox: '0 0 640 220',
          body: `
            ${svg.box(20, 80, 170, 60, 'Supplier: J&K (01)', { tone: 'a', sub: 'Noor Crafts, Srinagar', size: 12 })}
            ${svg.arrow(193, 110, 227, 110)}
            ${svg.box(230, 80, 180, 60, 'Where are the goods delivered?', { tone: 'c', size: 12 })}
            ${svg.arrow(410, 95, 440, 55, { label: 'Srinagar' })}
            ${svg.arrow(410, 125, 440, 165, { label: 'Delhi' })}
            ${svg.box(440, 20, 190, 64, 'Same state: CGST 9% + SGST 9%', { tone: 'b', sub: 'Two lines, same total', size: 12 })}
            ${svg.box(440, 136, 190, 64, 'Other state: IGST 18%', { tone: 'd', sub: 'One line, same total', size: 12 })}
          `
        })}
        <p><strong>Which rate.</strong> Since 22 September 2025 the slabs are 0%, 5%, 18% and 40%. For apparel and made-up textile articles the rule
        is per piece: a sale value up to ₹2,500 attracts 5%, above ₹2,500 attracts 18%. Sana's shawls sell at ₹7,000 to consumers and ₹4,900 to dealers,
        so both are at 18%. Wooden handicraft boxes are at 5%. Verify both rates on the portal.</p>
        <p><strong>Inclusive or exclusive.</strong> A dealer price list is GST-exclusive: ₹4,900 plus 18%. A website price shown to consumers must be
        the final price, so it is GST-inclusive and the invoice works backwards:</p>
        ${formula('Taxable value = Inclusive price ÷ (1 + rate)', 'Shawl at ₹7,000 inclusive of 18%: ₹7,000 ÷ 1.18 = ₹5,932.20 taxable, ₹1,067.80 GST. Box at ₹1,500 inclusive of 5%: ₹1,428.57 taxable, ₹71.43 GST.')}
        ${callout('india', 'Round the invoice total to the nearest rupee (section 170), not each line. Show the GST lines to the paisa and let the software round once at the bottom.')}
      `
    },
    {
      heading: 'Worked invoice: a Delhi boutique',
      short: 'Delhi invoice',
      html: `
        ${example({
          title: 'Invoice NC/26-27/051 to Zara Boutique, Delhi',
          scenario: 'On 12 October Noor Crafts ships 10 shawls and 20 walnut boxes to a GST-registered boutique in Delhi (GSTIN starting 07). Dealer prices are list less 30%: shawl ₹4,900, box ₹1,050, both GST-exclusive. Delivery in Delhi, so the place of supply is Delhi and the tax is IGST.',
          steps: [
            { label: 'Shawls:', html: '10 × ₹4,900 = ₹49,000 taxable. Each piece is above ₹2,500, so 18% IGST = <strong>₹8,820</strong>.' },
            { label: 'Boxes:', html: '20 × ₹1,050 = ₹21,000 taxable. Wooden handicraft at 5% IGST = <strong>₹1,050</strong>.' },
            { label: 'Totals:', html: 'taxable ₹70,000; IGST ₹8,820 + ₹1,050 = ₹9,870; invoice total <strong>₹79,870</strong>, "Rupees seventy-nine thousand eight hundred seventy only".' },
            { label: 'Before dispatch:', html: 'the consignment is worth more than ₹50,000, so Sana generates an e-way bill on ewaybillgst.gov.in quoting this invoice number and the courier\'s vehicle or transporter ID.' }
          ],
          result: 'The boutique pays ₹79,870 within 15 days (Noor Crafts is a registered micro enterprise, so section 43B(h) applies to the buyer). The boutique claims ₹9,870 as input tax credit once the invoice appears in its GSTR-2B, which happens when Sana files her GSTR-1 by the 11th of November.',
          tone: 'd'
        })}
        ${table(
          ['#', 'Description', 'HSN', 'Qty', 'Rate', 'Taxable value', 'IGST rate', 'IGST'],
          [
            ['1', 'Hand-embroidered pashmina shawl', '6214', '10', inr(4900), inr(49000), '18%', inr(8820)],
            ['2', 'Hand-carved walnut-wood box', '4420', '20', inr(1050), inr(21000), '5%', inr(1050)]
          ],
          { align: ['l', 'l', 'l', 'r', 'r', 'r', 'r', 'r'], total: ['', 'Total', '', '30', '', inr(70000), '', inr(9870)], caption: 'Line items of invoice NC/26-27/051. Supplier GSTIN 01ABCPS1234F1Z5, buyer GSTIN 07xxxxxxxxxxxxx, place of supply Delhi (07). Invoice total ₹79,870.' }
        )}
      `
    },
    {
      heading: 'The same sale in Srinagar, a return, and e-invoicing',
      short: 'Srinagar, returns',
      html: `
        <p>Sell the identical consignment to a registered boutique in Srinagar and only area 6 of the invoice changes. The total tax is still ₹9,870, now split into two equal halves.</p>
        ${table(
          ['Description', 'Taxable value', 'CGST', 'SGST', 'Line total'],
          [
            ['10 shawls at ₹4,900 (9% + 9%)', inr(49000), inr(4410), inr(4410), inr(57820)],
            ['20 boxes at ₹1,050 (2.5% + 2.5%)', inr(21000), inr(525), inr(525), inr(22050)]
          ],
          { align: ['l', 'r', 'r', 'r', 'r'], total: ['Total', inr(70000), inr(4935), inr(4935), inr(79870)], caption: 'Intra-state version: place of supply J&K (01). CGST ₹4,935 + SGST ₹4,935 = ₹9,870, the same as the IGST on the Delhi invoice.' }
        )}
        <p><strong>Returns.</strong> Two weeks later the Delhi boutique returns two shawls with a loose thread. Sana does not cancel the invoice or issue
        a new one with eight shawls. She issues a <strong>credit note</strong> CN/26-27/003 against invoice NC/26-27/051: 2 × ₹4,900 = ₹9,800 taxable plus
        IGST ₹1,764, total ₹11,564. She reports it in her GSTR-1, which reduces her output tax by ₹1,764, and the boutique's ITC reduces by the same
        amount. Credit notes for a financial year can be issued up to 30 November of the following year.</p>
        ${callout('tip', 'A credit note is also the right tool for a discount agreed after the invoice, such as 5% off for paying within 7 days. A "revised" invoice with a lower amount leaves two invoices with the same number in the system, which is exactly what an audit looks for.')}
        <p><strong>E-invoicing.</strong> Once your turnover in any year since 2017-18 crosses ₹5 crore, every B2B invoice must first be registered on an
        Invoice Registration Portal, which returns an IRN and a QR code that must print on the invoice. Noor Crafts is far below that today. Verify the current threshold on the portal.</p>
        ${checklist([
          'Supplier name, address, GSTIN and state on every invoice',
          'Number consecutive in the series, unique in the FY, 16 characters or fewer',
          'Buyer GSTIN and place of supply filled, and IGST or CGST + SGST chosen from the delivery address',
          'HSN or SAC on every line; rate checked against the apparel ₹2,500 rule',
          'Tax shown per rate; total rounded once; amount in words',
          'E-way bill for any consignment above ₹50,000',
          'Returns and later discounts handled by credit note, never by editing the invoice',
          'Copies saved by financial year for 72 months'
        ], { title: 'Before you send the invoice' })}
      `
    }
  ],

  keyPoints: [
    'Rule 46 in eight areas: supplier, number and date, buyer, place of supply, line items with HSN, tax summary, total, signature.',
    'Tax invoice for taxable supplies by a registered seller; bill of supply when no GST can be charged; proforma is a quote and never in the invoice series.',
    'Numbers run consecutively within a financial year, maximum 16 characters, no gaps. Restart on 1 April.',
    'Place of supply for goods is the delivery address: same state means CGST + SGST in equal halves, other state means IGST. The total is identical.',
    'Taxable value from an inclusive price = price ÷ (1 + rate). Apparel up to ₹2,500 a piece is 5%, above is 18%; wooden handicrafts 5%. Verify rates each year.',
    'Returns and later discounts go through credit notes reported in GSTR-1. E-way bill above ₹50,000 per consignment; e-invoicing above ₹5 crore turnover.'
  ],

  practice: [
    { label: 'Tax Lab', sub: 'Build the Delhi and Srinagar invoices and see CGST + SGST versus IGST side by side', href: 'tax-lab/index.html', icon: '🏛️' },
    { label: 'Excel Lab', sub: 'An invoice template that calculates taxable value from inclusive prices', href: 'excel-lab/index.html', icon: '📊' },
    { label: 'GST basics', sub: 'Lesson 5.1 on slabs, CGST, SGST and IGST in more depth', href: 'learn/lesson.html?id=tax-01-gst-basics', icon: '📘' }
  ],

  quiz: [
    {
      q: 'Noor Crafts (J&K) sells 10 shawls at ₹4,900 each to a registered boutique in Delhi. Which tax lines appear on the invoice?',
      options: ['CGST 9% ₹4,410 and SGST 9% ₹4,410', 'IGST 18% ₹8,820', 'IGST 5% ₹2,450', 'CGST 18% ₹8,820'],
      answer: 1,
      why: 'Delivery is in another state, so it is an inter-state supply and IGST applies at the full 18% (each shawl is above the ₹2,500 apparel limit). 18% of ₹49,000 is ₹8,820.'
    },
    {
      q: 'A website shows a walnut box at ₹1,500 including 5% GST. What is the taxable value on the invoice?',
      options: ['₹1,500', '₹1,425', '₹1,428.57', '₹1,575'],
      answer: 2,
      why: 'Taxable value = inclusive price ÷ (1 + rate) = ₹1,500 ÷ 1.05 = ₹1,428.57, and GST = ₹71.43. Subtracting 5% of ₹1,500 (₹1,425) is the common mistake.'
    },
    {
      q: 'A dealer returns two shawls a fortnight after the invoice. What should Sana issue?',
      options: ['A fresh invoice for the remaining eight shawls and cancel the old one', 'A credit note against the original invoice, reported in GSTR-1', 'A bill of supply for the two shawls', 'Nothing; adjust the next invoice'],
      answer: 1,
      why: 'A credit note linked to the original invoice reduces the taxable value and tax for both parties through GSTR-1. Cancelling or re-issuing invoices breaks the consecutive series and the buyer\'s already-claimed credit.'
    },
    {
      q: 'Which of these is NOT a mandatory field on a GST tax invoice under Rule 46?',
      options: ['HSN code of the goods', 'Place of supply', 'The buyer\'s PAN', 'A consecutive invoice number unique in the financial year'],
      answer: 2,
      why: 'The buyer\'s GSTIN (if registered) is required, not their PAN separately; the PAN is already inside the GSTIN. HSN, place of supply and a unique consecutive number are all mandatory.'
    },
    {
      q: 'Who must issue a bill of supply instead of a tax invoice?',
      options: ['Any seller shipping goods inter-state', 'A composition dealer, or a seller of exempt goods', 'Any seller whose invoice is above ₹50,000', 'A seller with turnover above ₹5 crore'],
      answer: 1,
      why: 'A bill of supply is used when no GST can be charged on the document: composition scheme sellers, unregistered sellers and exempt supplies. Inter-state goods sales by a registered seller need a tax invoice with IGST.'
    }
  ],

  glossary: [
    ['Place of supply', 'The state where a supply is deemed to happen; for goods, where delivery ends. It decides whether CGST + SGST or IGST applies.'],
    ['HSN code', 'Harmonised System of Nomenclature, the international numbering of goods used to fix GST rates; SAC is the equivalent for services.'],
    ['Bill of supply', 'The invoice-like document issued when GST cannot be charged: by composition dealers, unregistered sellers, or for exempt goods.'],
    ['Credit note', 'A document reducing the value or tax of an earlier invoice, issued for returns, later discounts or errors, and reported in GSTR-1.'],
    ['E-way bill', 'An electronic permit generated on the GST e-way bill portal before moving goods worth more than ₹50,000 in a single consignment.'],
    ['IRN (Invoice Reference Number)', 'The unique number an Invoice Registration Portal assigns to a B2B invoice under e-invoicing, mandatory for businesses above ₹5 crore turnover.']
  ]
};
