import { diagrams, example, callout, formula, table, terms, inr } from '../lesson-kit.js';

/**
 * Lesson 1.7 - Costing & pricing a product
 * Running example: Noor Crafts (Sana, Srinagar). Shawl from the weaver ₹4,000, list price ₹7,000,
 * dealers at 30% off. Rent ₹8,000 + helper ₹12,000 a month, packaging ₹120 and courier ₹90 per order.
 */
export default {
  id: 'start-07-costing-and-pricing',
  title: 'Costing & pricing a product',

  intro: `<p>"The weaver charges me ${inr(4000)}, I sell at ${inr(7000)}, so I make ${inr(3000)} a shawl." Almost every new brand owner
    says a sentence like this, and almost every one of them is wrong, because rent, the helper, the box and the courier are paid out of that
    ${inr(3000)} too. Costing is the habit of finding the <strong>full</strong> cost of one unit. Pricing is deciding what to add on top,
    and knowing exactly how much a discount gives away.</p>`,

  outcomes: [
    'Build a cost sheet for one product: prime cost, overheads absorbed per unit, total cost.',
    'Use markup and margin correctly and convert between them without mixing them up.',
    'Set a GST-inclusive customer price, a dealer price, and a floor below which you never sell.'
  ],

  sections: [
    {
      heading: 'What one shawl really costs',
      short: 'The stack',
      html: `
        <p>Picture the ${inr(7000)} a customer pays for a shawl (before GST) as a stack of layers. The bottom layer is the weaver's
        ${inr(4000)}. On top sit the box, the courier and a slice of the month's rent and salary. Only what is left at the top is profit.
        The stack below uses the numbers worked out in this lesson.</p>
        ${diagrams.bars(
          [
            { label: 'Weaver (direct material)', value: 4000, tone: 'a' },
            { label: 'Packaging', value: 120, tone: 'b' },
            { label: 'Courier', value: 90, tone: 'b' },
            { label: 'Overhead share', value: 200, tone: 'c' },
            { label: 'Profit', value: 2590, tone: 'd' }
          ],
          { title: 'The ' + inr(7000) + ' shawl, layer by layer', caption: 'The five bars add up to ' + inr(7000) + '. Profit is ' + inr(2590) + ', not the ' + inr(3000) + ' a quick guess suggests, and that is on a direct sale. On a dealer sale the profit bar shrinks to ' + inr(490) + '.' }
        )}
        ${callout('warning', 'The commonest costing mistake is to forget costs that do not arrive with the product. Rent and the helper\'s salary are paid whether you sell 10 shawls or 100, so they do not feel like "the cost of a shawl". They are. If you do not load them onto the price, you pay them out of your profit without noticing.')}
      `
    },
    {
      heading: 'The cost sheet, line by line',
      short: 'Cost sheet',
      html: `
        <p>A <strong>cost sheet</strong> is a statement that builds up the cost of one product in a fixed order. The order matters because
        each subtotal answers a different question.</p>
        ${terms([
          ['Direct material', 'Material that becomes the product and can be traced to one unit. For Noor Crafts the ' + inr(4000) + ' shawl bought from the weaver is direct material: it already contains his wool, his loom time and his embroidery.'],
          ['Direct labour', 'Wages paid to make the unit, traceable to that unit. If Sana employed an embroiderer and paid ' + inr(600) + ' per shawl, that would be direct labour. She does not, so this line is nil here.'],
          ['Direct expenses', 'Other costs that happen because of that one unit: the ' + inr(120) + ' box and the ' + inr(90) + ' courier. Each order causes them; no order, no cost.'],
          ['Prime cost', 'Direct material + direct labour + direct expenses. The cost that varies one-for-one with each unit sold.'],
          ['Overheads', 'Costs of running the workshop that cannot be traced to one shawl: rent ' + inr(8000) + ', helper ' + inr(12000) + ', electricity, phone. They are shared across everything made that month.'],
          ['Total cost', 'Prime cost plus each unit\'s share of overheads. This is the number a price must beat.']
        ])}
        ${formula('Prime cost = Direct material + Direct labour + Direct expenses')}
        ${formula('Total cost per unit = Prime cost + Overhead per unit', 'Overhead per unit = Total monthly overheads ÷ units made or sold in the month. This sharing is called <em>absorption</em>.')}
        <p>Absorption is a guess about volume, and that is fine as long as you remember it is a guess. If Sana plans for 100 units a month
        and sells 60, each unit actually carried ${inr(333)} of overhead, not ${inr(200)}. Re-check the number every quarter against real volume.</p>
      `
    },
    {
      heading: 'Noor Crafts: the full cost sheet for one shawl',
      short: 'Worked example',
      html: `
        ${example({
          title: 'From ' + inr(4000) + ' at the weaver to ' + inr(7000) + ' on the website',
          scenario: 'Sana sells about 40 shawls and 60 walnut boxes a month, 100 units in all. Monthly overheads are rent ' + inr(8000) + ' and the helper ' + inr(12000) + '. She wants to keep 37 paise of every rupee the customer pays as profit, a 37% margin.',
          steps: [
            { label: 'Prime cost.', html: 'Direct material ' + inr(4000) + ' + direct labour nil + direct expenses (' + inr(120) + ' box + ' + inr(90) + ' courier) ' + inr(210) + ' = <strong>' + inr(4210) + '</strong>.' },
            { label: 'Overhead per unit.', html: '(' + inr(8000) + ' + ' + inr(12000) + ') ÷ 100 units = <strong>' + inr(200) + '</strong> per unit. A simple per-unit basis; a fairer one would give the shawl a bigger share than a box because it is worth more, but keep it simple until volumes are steady.' },
            { label: 'Total cost.', html: inr(4210) + ' + ' + inr(200) + ' = <strong>' + inr(4410) + '</strong>.' },
            { label: 'Price for a 37% margin.', html: 'Price = Cost ÷ (1 − margin) = ' + inr(4410) + ' ÷ 0.63 = <strong>' + inr(7000) + '</strong>. Profit = ' + inr(7000) + ' − ' + inr(4410) + ' = ' + inr(2590) + '. Check: ' + inr(2590) + ' ÷ ' + inr(7000) + ' = 37%.' },
            { label: 'Dealer price at 30% off.', html: inr(7000) + ' × 0.70 = <strong>' + inr(4900) + '</strong>. Profit = ' + inr(4900) + ' − ' + inr(4410) + ' = ' + inr(490) + ', a margin of 10%. (Dealer orders ship in bulk, so real packaging and courier per shawl are lower; using the same ' + inr(4410) + ' keeps the estimate safe.)' }
          ],
          result: 'The same shawl earns ' + inr(2590) + ' sold direct and ' + inr(490) + ' sold through a dealer. The dealer channel still makes sense for volume, but Sana now knows it needs five dealer sales to equal one direct sale.'
        })}
        ${table(
          ['Cost sheet: one pashmina shawl', 'Per unit'],
          [
            ['Direct material (shawl from weaver)', inr(4000)],
            ['Direct labour', 'nil'],
            ['Direct expenses: packaging ' + inr(120) + ' + courier ' + inr(90), inr(210)],
            [{ html: '<strong>Prime cost</strong>' }, { html: '<strong>' + inr(4210) + '</strong>' }],
            ['Overheads absorbed (' + inr(20000) + ' ÷ 100 units)', inr(200)],
            [{ html: '<strong>Total cost</strong>' }, { html: '<strong>' + inr(4410) + '</strong>' }],
            ['Profit at 37% margin', inr(2590)]
          ],
          { align: ['l', 'r'], total: ['Selling price (before GST)', inr(7000)] }
        )}
      `
    },
    {
      heading: 'Markup vs margin: the classic confusion',
      short: 'Markup vs margin',
      html: `
        <p>Both words describe the same profit, but measured against different bases. <strong>Markup</strong> compares profit with cost:
        "how much did I add on top?" <strong>Margin</strong> compares profit with the selling price: "how much of each rupee the customer paid
        do I keep?" On the shawl, profit ${inr(2590)} is a markup of 58.7% (on ${inr(4410)}) but a margin of 37% (on ${inr(7000)}). Same rupees, two percentages.</p>
        ${formula('Markup % = Profit ÷ Cost × 100', 'Price = Cost × (1 + markup)')}
        ${formula('Margin % = Profit ÷ Selling price × 100', 'Price = Cost ÷ (1 − margin)')}
        ${formula('Margin = Markup ÷ (1 + Markup)', 'A 100% markup is only a 50% margin. Margin is always the smaller number.')}
        ${table(
          ['If you add this markup', 'Your margin is', 'Example on ' + inr(4410) + ' cost'],
          [
            ['25%', '20%', 'Price ' + inr(5513) + ', profit ' + inr(1103)],
            ['50%', '33.3%', 'Price ' + inr(6615) + ', profit ' + inr(2205)],
            ['58.7% (Noor Crafts)', '37%', 'Price ' + inr(7000) + ', profit ' + inr(2590)],
            ['100%', '50%', 'Price ' + inr(8820) + ', profit ' + inr(4410)]
          ],
          { caption: 'Markup to margin (prices rounded to the rupee)' }
        )}
        ${callout('warning', 'A dealer who says "we work on 30%" means a 30% <em>margin</em> on his selling price, which is why he asks for 30% off your list price. If you hear "30%" and add only a 30% <em>markup</em> to your cost, you will build a price with far less room than you think. Always ask: 30% of what?')}
      `
    },
    {
      heading: 'GST, MRP and the dealer\'s price',
      short: 'GST and MRP',
      html: `
        <p>Everything so far was before GST. A shawl above ${inr(2500)} per piece carries 18% GST (verify the rate on the portal for your HSN).
        The customer pays ${inr(7000)} + ${inr(1260)} = ${inr(8260)}; the ${inr(1260)} is not yours. Work your cost sheet and margin on the
        <strong>taxable value</strong>, then add GST at the end. If you want a round shelf price like ${inr(7999)} "inclusive of all taxes", work backwards:
        ${inr(7999)} ÷ 1.18 = about ${inr(6779)} taxable, which cuts your profit to about ${inr(2369)} and your margin to 35%.</p>
        ${diagrams.flow(
          [
            { label: 'Weaver', sub: inr(4000) + ' to Noor', tone: 'a' },
            { label: 'Noor Crafts', sub: 'total cost ' + inr(4410), tone: 'c' },
            { label: 'Dealer', sub: 'buys at ' + inr(4900) + ' + GST', tone: 'b' },
            { label: 'Customer', sub: 'pays ' + inr(8260) + ' incl. GST', tone: 'd' }
          ],
          { title: 'One shawl, four hands, one price ladder', caption: 'Each hand adds its own cost and margin. GST is charged at every registered step but each registered buyer claims it back, so only the final customer actually bears it.' }
        )}
        ${table(
          ['Step', 'Price before GST', 'GST 18%', 'Amount paid', 'Who keeps what'],
          [
            ['Weaver to Noor Crafts', inr(4000), 'nil (unregistered weaver)', inr(4000), 'Weaver: wool, loom time, embroidery'],
            ['Noor Crafts to dealer', inr(4900), inr(882) + ' IGST', inr(5782), 'Noor profit ' + inr(490) + ' (10%); dealer claims ' + inr(882) + ' as ITC'],
            ['Dealer to customer', inr(7000), inr(1260), inr(8260), 'Dealer margin ' + inr(2100) + ' (30%); pays ' + inr(378) + ' net GST'],
            ['Noor Crafts direct to customer', inr(7000), inr(1260), inr(8260), 'Noor profit ' + inr(2590) + ' (37%)']
          ],
          { align: ['l', 'r', 'r', 'r', 'l'], caption: 'The price ladder for one shawl' }
        )}
        ${callout('india', '<strong>MRP</strong> (maximum retail price) must be printed on pre-packaged goods under the Legal Metrology (Packaged Commodities) Rules, inclusive of all taxes. Nobody, including your dealer, may sell above it; anyone may sell below it. Print the GST-inclusive customer price (' + inr(8260) + ') as MRP, and your dealer price list stays a private, before-GST number.')}
      `
    },
    {
      heading: 'How a discount eats margin, and where the floor is',
      short: 'Discounts and floor',
      html: `
        <p>A discount comes entirely out of profit, because the cost does not move. That makes the damage much larger than the headline number.</p>
        ${table(
          ['Discount', 'Price', 'Total cost', 'Profit', 'Margin', 'Units needed to earn the same ' + inr(2590)],
          [
            ['0%', inr(7000), inr(4410), inr(2590), '37%', '1.0'],
            ['10%', inr(6300), inr(4410), inr(1890), '30%', '1.4'],
            ['20%', inr(5600), inr(4410), inr(1190), '21%', '2.2'],
            ['30% (dealer)', inr(4900), inr(4410), inr(490), '10%', '5.3'],
            ['40%', inr(4200), inr(4410), '−' + inr(210), 'loss', 'never']
          ],
          { align: ['l', 'r', 'r', 'r', 'r', 'r'], caption: 'A 10% discount removes 27% of the profit; a 30% discount removes 81%' }
        )}
        <p>So where can you stop? Two floors. The <strong>hard floor</strong> is prime cost, ${inr(4210)}: below it every extra sale loses cash, so
        no sale is better than that sale. The <strong>normal floor</strong> is total cost, ${inr(4410)}: between the two floors a sale still
        contributes something towards rent that is due anyway, which is the only honest case for a clearance price on dead stock.</p>
        ${formula('Minimum price (normal) = Total cost = Prime cost + Overhead per unit', 'Clearance only: price may fall to prime cost, never below.')}
        ${callout('warning', 'Run the walnut box through the same sheet: ' + inr(900) + ' + ' + inr(210) + ' + ' + inr(200) + ' = ' + inr(1310) + ' against a ' + inr(1500) + ' price, a thin 13% margin, and the dealer price of ' + inr(1050) + ' is <em>below prime cost</em>. Boxes to dealers only work if they ship in cartons, so packaging and courier per box fall to a few rupees. Cost every product, not just the hero.', 'Check every product')}
      `
    }
  ],

  keyPoints: [
    'Prime cost = direct material + direct labour + direct expenses. Add each unit\'s share of overheads to get total cost: ' + inr(4210) + ' + ' + inr(200) + ' = ' + inr(4410) + ' for the shawl.',
    'Markup is profit over cost; margin is profit over price. Margin = markup ÷ (1 + markup), so a 100% markup is a 50% margin.',
    'Price for a target margin with Price = Cost ÷ (1 − margin): ' + inr(4410) + ' ÷ 0.63 = ' + inr(7000) + '.',
    'Cost and price on taxable value, then add GST. MRP is the tax-inclusive ceiling printed on the pack; dealers get a private before-GST price.',
    'Discounts come straight out of profit: 30% off list cuts the shawl\'s profit from ' + inr(2590) + ' to ' + inr(490) + '. Never price below prime cost.'
  ],

  practice: [
    { label: 'Calculators', sub: 'Markup, margin and GST-inclusive price calculators', href: 'calculators/index.html', icon: '🧮' },
    { label: 'Business Lab', sub: 'Break-even and contribution with your own numbers', href: 'business-lab/index.html', icon: '🏬' },
    { label: 'Lesson: Channels & margins', sub: 'Retail, online and dealer margins compared', href: 'learn/lesson.html?id=biz-05-channels-and-margins', icon: '📘' }
  ],

  quiz: [
    {
      q: 'Total cost of a shawl is ' + inr(4410) + ' and it sells at ' + inr(7000) + '. What is the margin?',
      options: ['58.7%', '37%', '63%', '30%'],
      answer: 1,
      why: 'Margin = profit ÷ price = ' + inr(2590) + ' ÷ ' + inr(7000) + ' = 37%. The 58.7% figure is the markup (profit ÷ cost).'
    },
    {
      q: 'Which of these belongs in prime cost?',
      options: ['Workshop rent', 'The helper\'s monthly salary', 'The courier charge for shipping the shawl', 'Electricity for the workshop'],
      answer: 2,
      why: 'Courier is a direct expense: it is caused by that one unit. Rent, salary and electricity are overheads, shared across all units and added after prime cost.'
    },
    {
      q: 'A retailer says "I work on a 50% margin." What markup does he add to his cost?',
      options: ['50%', '33.3%', '100%', '150%'],
      answer: 2,
      why: 'Margin = markup ÷ (1 + markup). For margin 0.5, markup must be 1.0, that is 100%. Buying at ' + inr(100) + ' and selling at ' + inr(200) + ' is a 100% markup and a 50% margin.'
    },
    {
      q: 'Sana gives dealers 30% off the ' + inr(7000) + ' list price. With total cost ' + inr(4410) + ', what profit does she make per shawl on a dealer sale?',
      options: [inr(2100), inr(2590), inr(490), inr(1323)],
      answer: 2,
      why: 'Dealer price ' + inr(7000) + ' × 0.70 = ' + inr(4900) + '; profit = ' + inr(4900) + ' − ' + inr(4410) + ' = ' + inr(490) + '. The ' + inr(2100) + ' is the dealer\'s margin, not Sana\'s.'
    },
    {
      q: 'A customer offers ' + inr(4000) + ' for a shawl during a clearance. Prime cost is ' + inr(4210) + ' and total cost ' + inr(4410) + '. Should Sana accept?',
      options: ['Yes, it covers the weaver\'s ' + inr(4000), 'Yes, overheads are paid anyway', 'No, it is below prime cost so the sale loses cash', 'Only if the customer pays in cash'],
      answer: 2,
      why: 'At ' + inr(4000) + ' the sale does not even cover the box and courier on top of the weaver\'s price. Every such sale loses ' + inr(210) + '. Between ' + inr(4210) + ' and ' + inr(4410) + ' a clearance sale at least contributes to overheads; below ' + inr(4210) + ' it never does.'
    }
  ],

  glossary: [
    ['Cost sheet', 'A statement that builds up the cost of one unit in order: direct costs, prime cost, overheads, total cost.'],
    ['Prime cost', 'Direct material + direct labour + direct expenses; the costs that vary directly with each unit.'],
    ['Overhead absorption', 'Spreading shared costs (rent, salaries) over units by a chosen basis, such as per unit or per rupee of cost.'],
    ['Markup', 'Profit expressed as a percentage of cost.'],
    ['Margin', 'Profit expressed as a percentage of selling price. Always smaller than the equivalent markup.'],
    ['MRP', 'Maximum retail price, inclusive of all taxes, printed on pre-packaged goods under the Legal Metrology rules. Selling above it is an offence.']
  ]
};
