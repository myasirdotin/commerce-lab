import { fig, svg, diagrams, example, callout, formula, table, terms, inr } from '../lesson-kit.js';

/**
 * Lesson 5.1 - GST basics: CGST, SGST, IGST & slabs
 * Running example: Noor Crafts (Sana, Srinagar) selling pashmina shawls and
 * walnut-wood boxes to local customers and to boutiques in Delhi.
 */
export default {
  id: 'tax-01-gst-basics',
  title: 'GST basics: CGST, SGST, IGST & slabs',

  intro: `<p>GST is the one tax sitting inside almost every bill you give or receive. If you run a business you
    <strong>collect it on sales, pay it on purchases, and send the difference to the government</strong>.
    This lesson gives you the vocabulary (supply, place of supply, GSTIN, slabs) and the arithmetic you need before
    you touch a return.</p>`,

  outcomes: [
    'Say what GST replaced, why it is called a <em>destination-based</em> tax, and what counts as a <em>supply</em>.',
    'Pick the right slab (0%, 5%, 18%, 40%) for common goods and services, and split a bill into CGST + SGST or IGST.',
    'Read a 15-character GSTIN and decide whether a business must register.'
  ],

  sections: [
    {
      heading: 'One tax on supply, collected where the goods are consumed',
      short: 'The idea',
      html: `
        <p>Before 1 July 2017 a shawl leaving Srinagar for Delhi could carry central excise, VAT, central sales tax,
        entry tax and octroi, each charged on top of the other. <strong>GST (Goods and Services Tax)</strong> replaced them
        with one tax on one event: a <strong>supply</strong>, meaning any sale, transfer, exchange, rental or lease of goods
        or services for a price in the course of business. Even moving stock from your Srinagar GSTIN to your own
        Mumbai GSTIN is a supply.</p>
        <p>GST is <strong>destination-based</strong>: the revenue goes to the state where the goods or services are
        <em>consumed</em>, not where they were made. A shawl bought in Delhi is taxed for Delhi's benefit, even though
        it was embroidered in Kashmir.</p>
        <p>The second big idea is the <strong>credit chain</strong>. Each business charges GST on its sale but subtracts the GST
        it already paid on purchases, so only its <em>value addition</em> is taxed. The final consumer, who gets no credit, bears the whole tax.</p>
        ${diagrams.flow(
          [
            { label: 'Yarn spinner', sub: 'sells ₹2,000 + 5% = ₹100', tone: 'n' },
            { label: 'Weaver', sub: 'sells ₹4,000 + 18% = ₹720; pays ₹620', tone: 'b' },
            { label: 'Noor Crafts', sub: 'sells ₹7,000 + 18% = ₹1,260; pays ₹540', tone: 'a' },
            { label: 'Consumer', sub: 'pays ₹8,260; no credit', tone: 'e' }
          ],
          { title: 'The GST credit chain for one shawl', caption: 'Government collects ₹100 + ₹620 + ₹540 = ₹1,260, exactly the GST on the final ₹7,000 sale. Each link paid tax only on its own value addition.', boxW: 120, boxH: 72, gap: 24 }
        )}
        ${formula('GST payable = Output tax (on sales) − Input tax credit (on purchases)', 'The weaver collected ₹720 but had already paid ₹100 on yarn, so he deposits ₹620. The next lesson is all about this credit.')}
      `
    },
    {
      heading: 'The slabs after 22 September 2025',
      short: 'Slabs',
      html: `
        <p>The GST Council cut the rate structure to <strong>four slabs</strong> from 22 September 2025. The old 12% and 28% slabs
        are gone; most of their items moved to 5% or 18%, and a 40% slab now exists only for sin and luxury goods.</p>
        ${table(
          ['Rate', 'What falls here (examples)', 'For Noor Crafts, Chai Adda, Gupta Kirana'],
          [
            ['0% (nil)', 'Unbranded atta, rice, fresh vegetables, milk, books, health and life insurance', 'Loose grains at Gupta Kirana'],
            ['5%', 'Handicrafts, apparel and footwear up to ₹2,500 per piece, textile yarn and fabric, packaged food, standalone restaurants (no ITC)', 'Walnut boxes, chai and snacks at Chai Adda'],
            ['18%', 'Apparel above ₹2,500 per piece, electronics, cement, and almost every service: courier, software, consultancy, commission', 'Pashmina shawls at ₹7,000, courier bills, marketplace commission'],
            ['40%', 'Tobacco and pan masala, sugary and aerated drinks, large luxury cars and yachts', 'Nothing these three businesses sell']
          ],
          { caption: 'The four GST slabs since 22 September 2025' }
        )}
        ${callout('india', 'The apparel rule bites at the price <em>per piece</em>: a ₹2,400 kurta is 5%, a ₹2,600 kurta is 18%. Noor Crafts\' shawls at ₹7,000 are therefore 18%, while its walnut boxes qualify as handicrafts at 5%. Restaurants pay 5% but <strong>cannot claim any input credit</strong>, so Chai Adda gets nothing back on the GST it pays on milk powder or rent.')}
        <p>Look up the HSN code (goods) or SAC code (services) of each item on gst.gov.in rather than relying on memory; the code also goes on your invoice.</p>
      `
    },
    {
      heading: 'CGST + SGST or IGST? Place of supply decides',
      short: 'Intra vs inter',
      html: `
        <p>GST is a dual tax: the Centre and the state each take a share. The total rate is the same either way; what changes is <em>how it is labelled</em> on the invoice.</p>
        ${terms([
          ['Intra-state supply', 'Supplier and place of supply in the <strong>same</strong> state. Charge <strong>CGST + SGST</strong>, each half the rate: an 18% item carries 9% CGST (to the Centre) and 9% SGST (to the state). In a Union Territory without a legislature it is CGST + UTGST.'],
          ['Inter-state supply', 'Place of supply in a <strong>different</strong> state (or an export or import). Charge <strong>IGST</strong> at the full rate; the Centre collects it and passes the state share to the consuming state.'],
          ['Place of supply', 'For goods, where the goods are <strong>delivered</strong>. For most services to a registered business, the <strong>buyer\'s location</strong>. This, not the buyer\'s billing address or the courier route, decides intra vs inter.']
        ])}
        ${diagrams.split(
          { heading: 'Intra-state: Srinagar to Srinagar', tone: 'a', items: ['Taxable value ₹7,000', 'CGST 9% = ₹630 to Centre', 'SGST 9% = ₹630 to J&K', 'Customer pays ₹8,260'] },
          { heading: 'Inter-state: Srinagar to Delhi', tone: 'b', items: ['Taxable value ₹7,000', 'IGST 18% = ₹1,260 to Centre', 'Centre passes share to Delhi', 'Boutique pays ₹8,260'] },
          { title: 'The same 18% split two ways', caption: 'The total tax is identical. Only the heads on the invoice differ, and that decides which credit the buyer gets.' }
        )}
        ${example({
          title: 'Noor Crafts bills a shawl two ways, and a walnut box',
          scenario: 'Sana sells one pashmina shawl (list price ₹7,000, 18%) to a walk-in customer in Srinagar and an identical one to a boutique in Delhi. She also sells a walnut box (₹1,500, 5%) to the Srinagar customer. Prices are before tax.',
          steps: [
            { label: 'Shawl to the Srinagar customer (intra-state).', html: 'CGST 9% × ₹7,000 = <strong>₹630</strong>; SGST 9% × ₹7,000 = <strong>₹630</strong>. Invoice total ₹7,000 + ₹1,260 = <strong>₹8,260</strong>.' },
            { label: 'Shawl to the Delhi boutique (inter-state).', html: 'IGST 18% × ₹7,000 = <strong>₹1,260</strong>. Invoice total <strong>₹8,260</strong>. The boutique will claim ₹1,260 as IGST credit.' },
            { label: 'Walnut box to the Srinagar customer (intra-state, 5%).', html: 'CGST 2.5% = <strong>₹37.50</strong>; SGST 2.5% = <strong>₹37.50</strong>. Total ₹1,575. Had it gone to Delhi: IGST 5% = ₹75, same total.' }
          ],
          result: 'Both shawl invoices carry ₹1,260 of tax: the Srinagar one split ₹630/₹630 between Centre and J&K, the Delhi one a single IGST line that the Centre later shares with Delhi.'
        })}
        ${table(
          ['Item', 'Taxable value', 'Rate', 'CGST', 'SGST', 'IGST', 'Invoice total'],
          [
            ['Shawl, Srinagar', inr(7000), '18%', inr(630), inr(630), '—', inr(8260)],
            ['Shawl, Delhi', inr(7000), '18%', '—', '—', inr(1260), inr(8260)],
            ['Walnut box, Srinagar', inr(1500), '5%', '₹37.50', '₹37.50', '—', inr(1575)]
          ],
          { align: ['l', 'r', 'r', 'r', 'r', 'r', 'r'], caption: 'Three invoices from Noor Crafts' }
        )}
      `
    },
    {
      heading: 'GSTIN, aggregate turnover and who must register',
      short: 'Registration',
      html: `
        <p>A registered business gets a <strong>GSTIN</strong>, a 15-character number that must appear on every tax invoice.</p>
        ${fig({
          title: 'Anatomy of a GSTIN',
          caption: 'Example 01ABCPS1234K1Z5 (fictitious). The first two digits tell you the state at a glance: 01 is J&K, 07 Delhi, 08 Rajasthan, 27 Maharashtra.',
          viewBox: '0 0 640 150',
          body: `
            ${svg.box(10, 20, 90, 60, '01', { tone: 'a', sub: 'State code (2)', size: 18 })}
            ${svg.box(110, 20, 250, 60, 'ABCPS1234K', { tone: 'b', sub: 'PAN of the owner (10)', size: 18 })}
            ${svg.box(370, 20, 80, 60, '1', { tone: 'c', sub: 'Entity no. (1)', size: 18 })}
            ${svg.box(460, 20, 80, 60, 'Z', { tone: 'n', sub: 'Default (1)', size: 18 })}
            ${svg.box(550, 20, 80, 60, '5', { tone: 'd', sub: 'Check digit', size: 18 })}
            ${svg.text(320, 115, '2 + 10 + 1 + 1 + 1 = 15 characters. One PAN can hold one GSTIN per state; the entity number counts them.', { size: 11, tone: 'muted' })}
          `
        })}
        <p>Whether you <em>must</em> register depends on <strong>aggregate turnover</strong>: all your taxable, exempt and
        export sales across India under one PAN, excluding the GST itself and reverse-charge purchases.</p>
        ${table(
          ['Situation', 'Registration'],
          [
            ['Goods, aggregate turnover above ₹40 lakh (₹20 lakh in most special-category states; J&K opted for ₹40 lakh)', 'Compulsory'],
            ['Services, aggregate turnover above ₹20 lakh (₹10 lakh in special-category states)', 'Compulsory'],
            ['Any inter-state supply of goods, whatever the turnover', 'Compulsory from the first sale'],
            ['Selling through an e-commerce operator (Amazon, Flipkart, Meesho)', 'Compulsory; narrow relief for small intra-state sellers'],
            ['Casual taxable person (a stall at a Delhi exhibition), or paying tax under reverse charge', 'Compulsory'],
            ['Below the limits, in-state only, not online', 'Optional; voluntary registration lets you claim ITC']
          ],
          { caption: 'Who must take a GSTIN' }
        )}
        ${callout('warning', 'The turnover limit is the exception, not the rule, for anyone selling online or across state lines. Noor Crafts had to register on day one because its first boutique order came from Delhi, long before it reached ₹40 lakh.')}
      `
    },
    {
      heading: 'Taxable value, the computation and reverse charge',
      short: 'The maths',
      html: `
        <p><strong>Taxable value</strong> is the price actually payable for the supply: the item price, minus any discount shown on
        the invoice, plus packing, freight or other charges you bill the customer. Tax is then simply value times rate.</p>
        ${formula('Tax = Taxable value × Rate; split Rate/2 + Rate/2 for CGST + SGST, or Rate for IGST', 'A ₹120 packing charge on the Delhi shawl is part of taxable value: IGST on ₹7,120 = ₹1,281.60.')}
        ${formula('Taxable value from an inclusive price = Price × 100 ÷ (100 + Rate)', 'A chai priced at ₹21 "inclusive of 5% GST" has a taxable value of ₹20 and tax of ₹1. Use this when you quote MRP-style prices.')}
        <p><strong>Reverse charge</strong> turns the mechanism around: for a few notified cases the <em>buyer</em> pays the GST straight to the
        government. The common ones for a small business are freight paid to a goods transport agency, an advocate's fees,
        imported services such as foreign software subscriptions, and certain purchases from unregistered persons. You pay this
        tax in cash, not from credit, and then claim it as input credit if the purchase is for business.</p>
        ${callout('tip', 'Every purchase invoice you receive must show the supplier\'s GSTIN, your GSTIN, the HSN or SAC code and the tax split. Without those, the credit in the next lesson is lost before you start.')}
        ${callout('note', 'Rates, thresholds and dates in this lesson are as of FY 2026-27 (October 2026). GST rates change by Council notification, so verify the current rate for your HSN or SAC on <strong>gst.gov.in</strong> before invoicing or filing. This is educational material, not professional tax advice.')}
      `
    }
  ],

  keyPoints: [
    'GST taxes every <strong>supply</strong> and is <strong>destination-based</strong>: revenue goes to the state where the goods or services are consumed.',
    'Four slabs since 22 September 2025: <strong>0%, 5%, 18%, 40%</strong>. Apparel up to ₹2,500 per piece 5%, above that 18%; handicrafts 5%; most services 18%; restaurants 5% without ITC.',
    'Same state: <strong>CGST + SGST</strong>, half each. Different state: <strong>IGST</strong> at the full rate. Place of supply decides; the total is identical.',
    'A GSTIN is <strong>15 characters</strong>: state code (2) + PAN (10) + entity number + Z + check digit.',
    'Registration is compulsory above ₹40 lakh (goods) or ₹20 lakh (services), and <strong>from the first sale</strong> if you sell inter-state or online.',
    'Tax = taxable value × rate. Under <strong>reverse charge</strong> the buyer pays the tax directly, in cash, then claims it as credit.'
  ],

  practice: [
    { label: 'GST & ITC Simulator', sub: 'Enter a sale and see the CGST/SGST or IGST split and the credit chain live', href: 'tax-lab/index.html', icon: '🏛️' },
    { label: 'GST Calculator', sub: 'Exclusive to inclusive and back, for any rate', href: 'calculators/index.html', icon: '🧮' },
    { label: 'GST cheatsheet', sub: 'Slabs, thresholds and due dates on one page', href: 'cheatsheets/index.html', icon: '📑' }
  ],

  quiz: [
    {
      q: 'Noor Crafts (Srinagar) sells a ₹7,000 shawl to a boutique in Mumbai. Which tax goes on the invoice?',
      options: ['CGST ₹630 + SGST ₹630', 'IGST ₹1,260', 'CGST ₹1,260', 'No GST, because handicrafts are exempt'],
      answer: 1,
      why: 'The goods are delivered in Maharashtra, a different state from the supplier, so it is an inter-state supply and carries IGST at the full 18%. A ₹7,000 shawl is apparel above ₹2,500, so it is not in the 5% slab.'
    },
    {
      q: 'Which of these businesses must register for GST regardless of turnover?',
      options: ['A kirana store with ₹30 lakh turnover selling only to walk-in customers', 'A Pune café with ₹15 lakh turnover', 'A Srinagar artisan who sells ₹3 lakh of boxes a year through an online marketplace', 'A tuition teacher earning ₹8 lakh a year'],
      answer: 2,
      why: 'Selling through an e-commerce operator makes registration compulsory from the first sale (barring a narrow relief for intra-state sellers). The others are below the ₹40 lakh goods or ₹20 lakh services thresholds.'
    },
    {
      q: 'In the GSTIN 27ABCPS1234K1Z5, what does "27" tell you?',
      options: ['The year of registration', 'The state code (Maharashtra)', 'The number of branches', 'The GST rate the business charges'],
      answer: 1,
      why: 'The first two characters are the state code. 27 is Maharashtra; J&K is 01, Delhi 07. The next ten characters are the PAN, then the entity number, Z and a check digit.'
    },
    {
      q: 'A chai at Chai Adda is priced ₹21 inclusive of 5% GST. What is the taxable value?',
      options: ['₹21', '₹19.95', '₹20', '₹20.95'],
      answer: 2,
      why: 'Taxable value = 21 × 100 ÷ 105 = ₹20, and the tax is ₹1. Subtracting 5% of ₹21 (₹1.05) is the common mistake.'
    },
    {
      q: 'Why is GST called a destination-based tax?',
      options: ['Because the tax rate depends on the distance the goods travel', 'Because the revenue goes to the state where the goods or services are consumed', 'Because it is paid at the destination port only on imports', 'Because the consumer pays it at the shop'],
      answer: 1,
      why: 'Under GST the consuming state gets the revenue. For an inter-state sale the Centre collects IGST and transfers the state share to the destination state.'
    }
  ],

  glossary: [
    ['Supply', 'The taxable event under GST: any sale, transfer, exchange, rental or lease of goods or services for a price in the course of business.'],
    ['Place of supply', 'The location that decides whether a supply is intra-state (CGST + SGST) or inter-state (IGST). For goods it is where they are delivered.'],
    ['GSTIN', 'The 15-character GST identification number: 2-digit state code, 10-character PAN, entity number, the letter Z and a check digit.'],
    ['Aggregate turnover', 'All taxable, exempt and export supplies under one PAN across India, excluding GST and reverse-charge purchases. Used to test the registration threshold.'],
    ['HSN / SAC code', 'Harmonised System of Nomenclature code for goods, Services Accounting Code for services. Determines the rate and must appear on invoices.'],
    ['Reverse charge', 'Cases where the buyer, not the supplier, pays the GST directly to the government, in cash, and then claims credit.']
  ]
};
