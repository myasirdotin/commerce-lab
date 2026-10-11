import { diagrams, example, callout, formula, table, terms, inr } from '../lesson-kit.js';

/**
 * Lesson 4.5 - Channels & margins: retail, online, dealers
 * Running example: Noor Crafts (Sana, Srinagar). Shawl list price ₹7,000,
 * cost ₹4,000; dealers get 30% off list.
 */
export default {
  id: 'biz-05-channels-and-margins',
  title: 'Channels & margins: retail, online, dealers',

  intro: `<p>The same shawl leaves the same workshop at the same cost, yet how much Sana keeps depends entirely on <strong>the road
    it travels to the customer</strong>. Her own website, a marketplace, a Delhi boutique, a consignment rack, an exhibition stall:
    each one takes a different slice. Knowing the slice for every channel is the difference between growing and merely getting busier.</p>`,

  outcomes: [
    'List the real costs of each sales channel (D2C, marketplace, dealer, consignment, exhibition) and compute net realisation per unit.',
    'Draw the margin stack from artisan to customer and see who earns what.',
    'Use the discount formula to work out how much extra volume a price cut needs, and decide which channel to grow.'
  ],

  sections: [
    {
      heading: 'The margin stack: who keeps what',
      short: 'Margin stack',
      html: `
        <p>A shawl that a customer buys for ₹7,000 was paid for at ₹4,000 by Sana, from a weaver in Kanihama. The ₹3,000 in between is
        the <strong>margin stack</strong>, and it gets shared out among whoever stands between the weaver and the buyer. Through a
        dealer, Sana sells at 30% off list (₹4,900) and the dealer resells at ₹7,000.</p>
        ${diagrams.flow(
          [
            { label: 'Weaver', sub: 'paid ₹4,000', tone: 'n' },
            { label: 'Noor Crafts', sub: '+₹900, sells at ₹4,900', tone: 'a' },
            { label: 'Dealer', sub: '+₹2,100, sells at ₹7,000', tone: 'c' },
            { label: 'Customer', sub: 'pays ₹7,000 + GST', tone: 'd' }
          ],
          { title: 'The dealer route: margin stack for one shawl', caption: 'The dealer earns more than twice what Sana earns on the same shawl, because the dealer takes 30% of the retail price while Sana keeps only 18% of her price. Her margin pays for the brand, the design and the risk of unsold stock.' }
        )}
        ${terms([
          ['List price (MRP)', 'The price the final customer pays. Everyone upstream works backwards from it.'],
          ['Net realisation', 'What actually lands in your bank per unit after every channel cost: commission, fees, courier, packaging, returns, credit cost.'],
          ['Channel margin', 'Net realisation minus the cost of the product. Compare channels on this, never on the headline price.']
        ])}
        ${formula('Net realisation = Price in that channel − All channel costs', 'Channel margin = Net realisation − Product cost')}
      `
    },
    {
      heading: 'Five channels and what each one really costs',
      short: 'Channels',
      html: `
        ${table(
          ['Channel', 'How you get paid', 'Typical costs', 'Watch for'],
          [
            ['D2C website (own store)', 'Customer pays at checkout; gateway settles in 1-3 days', 'Payment gateway about 2% + 18% GST on the fee; packaging; courier; returns; and the ads or content needed to bring visitors', 'Traffic is yours to generate. No visitors, no sales.'],
            ['Marketplace (Amazon, Flipkart, Myntra, Etsy-style)', 'Marketplace collects, deducts its fees and settles 7-14 days after delivery', 'Commission 15-25% of price plus shipping, closing and ad fees, all with 18% GST on top; higher return rates; 0.5% GST TCS withheld (claimable)', 'Commission is on the full price, so it hurts most on expensive items. Price wars with copies.'],
            ['Dealer / wholesale', 'Invoice at 30% off list; usually 30-60 days credit', 'Bulk transport and packing; the cost of waiting for the money; occasional bad debt', 'Set a minimum order and take an advance from a new dealer. Thin per-unit margin, large volume.'],
            ['Consignment', 'Stock sits in the dealer\'s shop; you are paid only when it sells, less 35-40%', 'Your cash is locked in their shop; damage and shop-soiling; stock you cannot see', 'Monthly stock statement in writing; collect unsold items after 90 days.'],
            ['Exhibition / craft fair', 'Cash and UPI on the spot', 'Stall fee ₹10,000-50,000, travel, stay, staff for the days', 'Great for feedback and dealer contacts; count the true cost per day.']
          ],
          { caption: 'The same shawl through five doors' }
        )}
        ${callout('india', 'Selling through a marketplace makes GST registration <strong>compulsory regardless of turnover</strong> (limited relief exists for small intra-state sellers). The marketplace withholds 0.5% TCS on your net sales; it shows up in your GST cash ledger and you claim it in GSTR-3B, so it is a cash-timing item, not a cost. For an exhibition in another state you normally register as a <em>casual taxable person</em> with an advance tax deposit, carry a delivery challan for the goods, and generate an e-way bill if the consignment is worth more than ₹50,000. Goods sent to a consignment agent who invoices in his own name count as a supply when they are sent, not when they sell; verify this with your CA before signing a consignment deal.')}
      `
    },
    {
      heading: 'Worked example: one shawl, three channels',
      short: 'Example',
      html: `
        ${example({
          title: 'Noor Crafts: net realisation on a ₹7,000 shawl',
          scenario: 'Sana costs the same shawl (bought for ₹4,000) through her website, a marketplace, and a Delhi dealer. Prices exclude GST, which passes through in every channel.',
          steps: [
            { label: 'D2C website.', html: 'Price ₹7,000. Gateway 2% + GST = 2.36% = ₹165. Packaging ₹120, courier ₹90, returns and damage allowance ₹100, ads to bring the buyer ₹400. Net realisation ₹7,000 − ₹875 = <strong>₹6,125</strong>. Margin ₹6,125 − ₹4,000 = <strong>₹2,125</strong> (30% of price).' },
            { label: 'Marketplace.', html: 'Price ₹7,000. Commission 18% = ₹1,260, shipping fee ₹100, closing fee ₹50, GST at 18% on those fees ₹254. Packaging ₹120, returns allowance ₹200 (returns run higher). Net realisation ₹7,000 − ₹1,984 = <strong>₹5,016</strong>. Margin <strong>₹1,016</strong> (14.5% of price).' },
            { label: 'Dealer at 30% off.', html: 'Price ₹4,900. Share of bulk transport ₹40, bulk packing ₹60, cost of 60 days\' credit at 11% a year ₹90. Net realisation ₹4,900 − ₹190 = <strong>₹4,710</strong>. Margin <strong>₹710</strong> (14.5% of the dealer price, 10% of list).' }
          ],
          result: 'Per shawl: D2C ₹2,125, marketplace ₹1,016, dealer ₹710. The website earns three times what the dealer earns on an identical shawl. But a dealer buys 50 at a time with no ad spend, and the marketplace brings buyers Sana could never reach alone.'
        })}
        ${table(
          ['', 'D2C website', 'Marketplace', 'Dealer'],
          [
            ['Price (ex GST)', inr(7000), inr(7000), inr(4900)],
            ['Commission / gateway (incl. GST on fee)', inr(165), inr(1614), '–'],
            ['Packaging and courier / transport', inr(210), inr(120), inr(100)],
            ['Returns and damage allowance', inr(100), inr(200), '–'],
            ['Ads / cost of credit', inr(400), '–', inr(90)],
            ['Net realisation', inr(6125), inr(5016), inr(4710)],
            ['Product cost', inr(4000), inr(4000), inr(4000)]
          ],
          { align: ['l', 'r', 'r', 'r'], caption: 'One shawl, three channels', total: ['Channel margin per shawl', inr(2125), inr(1016), inr(710)] }
        )}
        ${diagrams.bars(
          [
            { label: 'D2C website', value: 2125, tone: 'a' },
            { label: 'Marketplace', value: 1016, tone: 'd' },
            { label: 'Dealer', value: 710, tone: 'c' }
          ],
          { title: 'Channel margin per shawl', caption: 'Same shawl, same cost. The channel decides the margin. Judge channels by this bar, then by the volume and effort each one needs.' }
        )}
      `
    },
    {
      heading: 'Discount mathematics',
      short: 'Discounts',
      html: `
        <p>"Give 10% off and make it up on volume." The question is: how much volume? A discount comes entirely out of your margin, not
        out of your price. If your margin is 40% of the price and you give 10% off, you have given away a quarter of your margin on every unit.</p>
        ${formula('Extra volume needed = Discount ÷ (Margin − Discount)', 'Margin and discount both as a percentage of the original price. At 40% margin, a 10% discount needs 10 ÷ (40 − 10) = 33% more units to earn the same total margin.')}
        <p>Check it with ₹100 of sales: cost ₹60, margin ₹40. After 10% off the price is ₹90 and the margin ₹30. To earn ₹40 again you
        must sell ₹40 ÷ ₹30 = 1.33 units: a third more, just to stand still.</p>
        ${table(
          ['Discount', 'Extra volume at 40% margin', 'Extra volume at 30% margin'],
          [
            ['5%', '14%', '20%'],
            ['10%', '33%', '50%'],
            ['15%', '60%', '100%'],
            ['20%', '100%', '200%'],
            ['25%', '167%', '500%']
          ],
          { align: ['l', 'r', 'r'], caption: 'Units you must sell on top of current volume, just to earn the same total margin' }
        )}
        <p>For Sana\'s shawl (margin ₹3,000 on ₹7,000, about 43%), a 10% Diwali discount drops the margin to ₹2,300 and needs
        3,000 ÷ 2,300 = 30% more shawls to break level. A discount that does not bring at least that many extra buyers has cost her money.</p>
        ${callout('warning', 'The same arithmetic runs backwards for dealers. When a dealer asks for 35% off instead of 30%, that extra 5% of list (₹350) comes off Sana\'s ₹710 margin: half her profit on the shawl, for a 5-point change. Negotiate on order size, advance payment and credit days before you touch the discount.')}
        ${callout('tip', 'Discounts that cost less than a price cut: free shipping above a threshold (raises order value), a free C-class item with an A-class purchase (clears slow stock), and a price cut on an older design only. Keep the hero product at full price.')}
      `
    },
    {
      heading: 'Choosing the channel mix',
      short: 'Channel mix',
      html: `
        ${table(
          ['Question', 'D2C website', 'Marketplace', 'Dealer', 'Consignment', 'Exhibition'],
          [
            ['Margin per unit', 'High', 'Medium', 'Low', 'Low', 'High'],
            ['Volume per order', '1-2 items', '1 item', '20-100 items', 'Rack of 10-20', 'Walk-ins'],
            ['Cash timing', '1-3 days', '7-14 days', '30-60 days', 'When sold', 'Same day'],
            ['Effort per sale', 'High (ads, content)', 'Medium (listings, returns)', 'Low once signed', 'Low', 'High for 3 days'],
            ['Customer data', 'Yours', 'Platform\'s', 'Dealer\'s', 'Dealer\'s', 'Yours if you collect it'],
            ['Risk', 'Ad spend with no sale', 'Returns, copies, delisting', 'Bad debt', 'Unsold stock out of sight', 'Stall fee sunk']
          ],
          { caption: 'Channel-mix decision table' }
        )}
        <p>So which should Sana grow? <strong>D2C</strong>, deliberately. It earns ₹2,125 a shawl, keeps the customer\'s name and number for
        the next sale, and sets the price the other channels anchor to. Its weakness is traffic, so the quarterly plan puts money into
        photography and a small, measured ad budget, and tracks conversion rate weekly.</p>
        <p><strong>Dealers</strong> stay as the base load: a predictable 50 shawls a quarter keeps the weavers busy and the stock turning, on
        three conditions. A minimum order, a 30% advance, and no more than 30 days\' credit for a new dealer. The <strong>marketplace</strong>
        is where the walnut boxes and C-class items go for discovery; a ₹7,000 shawl with an 18% commission and a 10% return rate belongs
        on her own site. <strong>Exhibitions</strong> twice a year, for dealer contacts as much as for sales.</p>
        ${callout('remember', 'No single channel is "best". The margin bar says where the profit is; the decision table says what it costs to get there. A mix of one high-margin channel you control and one volume channel that pays reliably is how most small brands survive their third year.')}
      `
    }
  ],

  keyPoints: [
    'Compare channels on net realisation (price minus every channel cost) and channel margin, never on the headline price.',
    'The margin stack runs from artisan to customer. A dealer at 30% off list often earns more per unit than the brand does.',
    'D2C: gateway about 2% + GST, packaging, courier, returns, and the ad spend to bring the buyer. Marketplace: 15-25% commission plus fees, GST on the fees, higher returns, 0.5% TCS withheld.',
    'Dealers: thin per-unit margin, big volumes, slow cash. Insist on a minimum order, an advance and short credit.',
    'Extra volume needed for a discount = discount ÷ (margin − discount). At 40% margin, 10% off needs 33% more units just to stand still.',
    'Grow the channel with the best margin and your own customer data; use volume channels for base load; put cheap items, not hero products, on marketplaces.'
  ],

  practice: [
    { label: 'Break-even simulator', sub: 'Enter each channel\'s price and costs and see how many units each one needs', href: 'business-lab/index.html', icon: '📈' },
    { label: 'Calculators', sub: 'Discount-volume and margin calculators', href: 'calculators/index.html', icon: '🧮' },
    { label: 'Projects', sub: 'Build a channel comparison sheet for your own products', href: 'projects/index.html', icon: '🗂️' }
  ],

  quiz: [
    {
      q: 'A product sells for ₹2,000 on a marketplace with 20% commission, ₹80 shipping fee and ₹40 closing fee, all plus 18% GST on the fees. Product cost is ₹1,200. What is the channel margin?',
      options: ['₹800', '₹280', '₹186', '₹480'],
      answer: 2,
      why: 'Fees: ₹400 + ₹80 + ₹40 = ₹520; GST on fees 18% = ₹93.60; total ₹613.60. Net realisation ₹2,000 − ₹613.60 = ₹1,386.40. Margin = ₹1,386.40 − ₹1,200 = about ₹186. The headline 20% commission became 31% of the price once the other fees and GST were counted.'
    },
    {
      q: 'Your margin is 30% of price. You offer 15% off. How much more volume do you need to earn the same total margin?',
      options: ['15% more', '50% more', '100% more', '30% more'],
      answer: 2,
      why: 'Extra volume = 15 ÷ (30 − 15) = 1.0, that is 100% more: you must sell twice as many units. Half the margin was given away on every unit.'
    },
    {
      q: 'Which statement about selling through an e-commerce marketplace in India is correct?',
      options: ['GST registration is needed only above ₹40 lakh turnover', 'The marketplace withholds 0.5% TCS which the seller can claim in GSTR-3B', 'Commission is charged without GST', 'The seller is paid at checkout, before delivery'],
      answer: 1,
      why: 'Marketplace sellers generally need GST registration regardless of turnover, pay 18% GST on all platform fees, are settled days after delivery, and have 0.5% TCS withheld by the platform, which appears in their cash ledger and is claimable.'
    },
    {
      q: 'A dealer asks for 35% off list instead of 30% on a ₹7,000 shawl that costs Sana ₹4,000 and carries ₹190 of channel costs. What happens to her margin per shawl?',
      options: ['It falls from ₹710 to ₹360', 'It falls from ₹710 to ₹660', 'It is unchanged because the dealer pays for transport', 'It rises because the dealer will order more'],
      answer: 0,
      why: 'At 35% off the dealer price is ₹4,550. Net realisation ₹4,550 − ₹190 = ₹4,360, margin ₹360. A 5-point change in discount halves her profit on the shawl. More volume might justify it, but only if it really arrives.'
    }
  ],

  glossary: [
    ['D2C (direct to consumer)', 'Selling from your own website or shop straight to the final customer, with no intermediary taking a commission.'],
    ['Net realisation', 'The amount per unit that actually reaches your bank after all channel costs are deducted.'],
    ['Consignment', 'Goods placed with a seller who pays you only when they sell; ownership and risk stay with you until then.'],
    ['TCS under GST', 'Tax collected at source: the 0.5% an e-commerce operator withholds from a seller\'s net sales and deposits with the government, which the seller claims as credit.'],
    ['Casual taxable person', 'A GST registration for occasional business in a state where you have no fixed place of business, such as an exhibition, taken with an advance tax deposit.'],
    ['Margin stack', 'The sequence of mark-ups between the maker\'s cost and the final retail price, showing what each intermediary keeps.']
  ]
};
