import { diagrams, example, callout, formula, table, terms, inr } from '../lesson-kit.js';

/**
 * Lesson 4.1 - Costs, contribution & break-even
 * Running examples: Chai Adda (Meera's café, Pune), Noor Crafts (Sana's artisan
 * brand, Srinagar) and Gupta Kirana (Rohit's grocery store, Jaipur).
 */
export default {
  id: 'biz-01-costs-and-break-even',
  title: 'Costs, contribution & break-even',

  intro: `<p>Before you can price anything, hire anyone or sign a lease, you need one number: <strong>how much do I have to sell
    just to stop losing money?</strong> That is the break-even point. It comes from sorting your costs into two piles and
    doing one division. Ten minutes with this idea saves many owners a year of guessing.</p>`,

  outcomes: [
    'Sort any cost into fixed, variable or semi-variable, and explain why the split matters.',
    'Compute contribution per unit, the contribution margin ratio, and the break-even point in units and in rupees.',
    'Work out the sales needed for a target profit, read a margin of safety, and predict what a price or cost change does to break-even.'
  ],

  sections: [
    {
      heading: 'The idea in one picture',
      short: 'The picture',
      html: `
        <p>Meera runs <strong>Chai Adda</strong>, a small café in Pune with three staff. Whether she sells one cup or ten thousand,
        rent, salaries and the equipment EMI add up to <strong>₹60,000 a month</strong>. Every cup she sells for ₹20 uses up ₹7 of
        milk, tea, sugar and the paper cup. The chart below plots both lines. Where revenue crosses total cost, she stops losing money.</p>
        ${diagrams.breakEven({
          fixed: 60000, price: 20, variable: 7,
          title: 'Chai Adda: break-even chart',
          caption: 'The red dashed line is fixed cost: it does not move with cups sold. Total cost starts there and climbs ₹7 per cup. Revenue climbs ₹20 per cup from zero. They cross at about 4,616 cups a month.'
        })}
        <p>Everything to the left of the crossing point is a loss; everything to the right is profit. The steeper the gap between the
        revenue line and the total cost line, the faster profit grows once you pass break-even. That gap per cup is called <strong>contribution</strong>.</p>
      `
    },
    {
      heading: 'Three kinds of cost',
      short: 'Cost types',
      html: `
        ${terms([
          ['Fixed cost', 'Stays the same each month whatever you sell, within a normal range of activity. Rent, salaries, insurance, software subscriptions, loan EMIs. You pay it even in a zero-sales month.'],
          ['Variable cost', 'Goes up and down in step with each unit sold. Raw material, packaging, courier per parcel, payment-gateway fee per transaction, sales commission.'],
          ['Semi-variable cost', 'Part fixed, part variable. An electricity bill has a fixed connection charge plus a per-unit charge. A delivery boy on a base salary plus a per-delivery incentive is the same shape. Split it into its two parts before you use it.']
        ])}
        ${table(
          ['Business', 'Fixed', 'Variable (per unit)', 'Semi-variable'],
          [
            ['Noor Crafts (artisan brand)', 'Workshop rent ₹8,000, helper ₹12,000 = ₹20,000/month', 'Shawl from weaver ₹4,000, packaging ₹120, courier ₹90, gateway fee about 2% of price', 'Electricity, mobile and internet'],
            ['Chai Adda (café)', 'Rent, three salaries, equipment EMI = ₹60,000/month', 'Milk, tea, sugar, cup = ₹7 per cup', 'LPG (minimum cylinder plus usage), electricity'],
            ['Gupta Kirana (grocery)', 'Shop rent, licences, Rohit\'s own salary', 'Goods bought for resale (about 90% of the sale price), carry bags, card and UPI charges', 'Delivery boy base pay plus per-delivery incentive']
          ],
          { caption: 'The same three buckets in three very different businesses' }
        )}
        ${callout('warning', 'The split is about <em>behaviour</em>, not importance. A helper\'s salary is fixed even though it is "for making shawls". A weaver paid per shawl is variable even though weaving is the core of the business. Ask one question: <em>does this cost change when I sell one more unit?</em>')}
        <p>Why bother sorting? Because fixed costs are a hurdle you must clear every month, and variable costs decide how much each sale
        contributes towards clearing it. Mix the two together and you cannot see either.</p>
      `
    },
    {
      heading: 'Contribution and the break-even formula',
      short: 'The formula',
      html: `
        <p><strong>Contribution</strong> is what is left from each sale after its own variable cost. It is called that because it
        <em>contributes</em> first towards fixed costs and, once those are covered, towards profit.</p>
        ${formula('Contribution per unit = Selling price − Variable cost per unit', 'Chai Adda: ₹20 − ₹7 = ₹13 per cup.')}
        ${formula('Contribution margin (CM) ratio = Contribution ÷ Selling price', 'Chai Adda: ₹13 ÷ ₹20 = 65%. Of every rupee of sales, 65 paise is contribution.')}
        ${formula('Break-even (units) = Fixed costs ÷ Contribution per unit', 'Chai Adda: ₹60,000 ÷ ₹13 = 4,615.4, so 4,616 cups a month, or about 154 cups a day.')}
        ${formula('Break-even (rupees) = Fixed costs ÷ CM ratio', 'Chai Adda: ₹60,000 ÷ 0.65 = ₹92,308 of monthly sales.')}
        ${formula('Units for a target profit = (Fixed costs + Target profit) ÷ Contribution per unit', 'Profit is just one more hurdle stacked on top of fixed costs.')}
        ${formula('Margin of safety = (Actual sales − Break-even sales) ÷ Actual sales', 'How far sales can fall before you start losing money.')}
        ${diagrams.bars(
          [
            { label: 'Revenue', value: 120000, tone: 'a' },
            { label: 'Variable cost', value: 42000, tone: 'e' },
            { label: 'Contribution', value: 78000, tone: 'd' },
            { label: 'Fixed cost', value: 60000, tone: 'c' },
            { label: 'Profit', value: 18000, tone: 'b' }
          ],
          { title: 'Chai Adda at 6,000 cups a month', caption: 'Revenue minus variable cost leaves contribution; contribution minus fixed cost leaves profit. At 6,000 cups the margin of safety is (6,000 − 4,616) ÷ 6,000 = 23%.' }
        )}
        ${callout('remember', 'Always round break-even units <em>up</em>. 4,615 cups still leaves a ₹5 loss; the 4,616th cup is the one that tips the month into profit.')}
      `
    },
    {
      heading: 'Worked example: how many shawls is enough?',
      short: 'Example',
      html: `
        ${example({
          title: 'Noor Crafts: break-even and a ₹50,000 target',
          scenario: 'Sana\'s fixed costs are workshop rent ₹8,000 plus her helper\'s salary ₹12,000, so <strong>₹20,000 a month</strong>. Take shawls alone: she sells each for ₹7,000 online, pays the weaver ₹4,000, and spends ₹120 on packaging and ₹90 on courier per order.',
          steps: [
            { label: 'Contribution per shawl.', html: '₹7,000 − ₹4,000 − ₹120 − ₹90 = <strong>₹2,790</strong>. CM ratio = 2,790 ÷ 7,000 = 39.9%.' },
            { label: 'Break-even in units.', html: '₹20,000 ÷ ₹2,790 = 7.17, so <strong>8 shawls a month</strong>. At 7 shawls she is ₹470 short; the 8th covers it.' },
            { label: 'Break-even in rupees.', html: '₹20,000 ÷ 0.399 = about <strong>₹50,100</strong> of sales, which matches 8 × ₹7,000 = ₹56,000 once you round units up.' },
            { label: 'Units for ₹50,000 profit.', html: '(₹20,000 + ₹50,000) ÷ ₹2,790 = 25.09, so <strong>26 shawls</strong>. Check: 26 × ₹2,790 = ₹72,540 − ₹20,000 = ₹52,540 profit. At 25 shawls it would be only ₹49,750.' },
            { label: 'Margin of safety at 26 shawls.', html: '(26 − 8) ÷ 26 = <strong>69%</strong>. Sales could fall by two-thirds before she loses money. That is a comfortable business.' }
          ],
          result: 'Sana needs 8 shawls a month to survive and 26 to earn ₹50,000. Roughly one shawl a day. Every shawl after the 8th adds ₹2,790 straight to profit.'
        })}
        ${callout('tip', 'Real businesses sell more than one product. Use the <em>weighted</em> contribution: if 60% of orders are shawls (₹2,790) and 40% are walnut boxes (₹1,500 − ₹900 − ₹120 − ₹90 = ₹390), average contribution per order is 0.6 × 2,790 + 0.4 × 390 = ₹1,830, and break-even is ₹20,000 ÷ ₹1,830 = 11 orders. The mix matters as much as the volume.')}
      `
    },
    {
      heading: 'What moves the break-even point',
      short: 'Sensitivity',
      html: `
        <p>Break-even is not a fixed fact; it reacts to three levers. Price and variable cost change the contribution per unit,
        which changes how many units you need. Fixed cost changes the size of the hurdle. The table runs each lever for Chai Adda, one at a time.</p>
        ${table(
          ['Change', 'Price', 'Variable', 'Contribution', 'Fixed', 'Break-even cups'],
          [
            ['Base case', '₹20', '₹7', '₹13', inr(60000), '4,616'],
            ['Raise price to ₹22', '₹22', '₹7', '₹15', inr(60000), '4,000'],
            ['Cut price to ₹18', '₹18', '₹7', '₹11', inr(60000), '5,455'],
            ['Milk costlier: variable ₹9', '₹20', '₹9', '₹11', inr(60000), '5,455'],
            ['Cheaper cups: variable ₹6', '₹20', '₹6', '₹14', inr(60000), '4,286'],
            ['Hire one more: fixed ₹70,000', '₹20', '₹7', '₹13', inr(70000), '5,385'],
            ['Move to cheaper shop: fixed ₹50,000', '₹20', '₹7', '₹13', inr(50000), '3,847']
          ],
          { align: ['l', 'r', 'r', 'r', 'r', 'r'], caption: 'Chai Adda sensitivity: one lever at a time' }
        )}
        <p>Notice two things. A ₹2 price cut (10%) raises break-even by 839 cups (18%), because the cut comes entirely out of the
        contribution. And a ₹2 rise in variable cost does exactly the same damage as a ₹2 price cut. This is why small discounts are
        far more expensive than they look; the lesson on channels and margins works through that arithmetic.</p>
        ${callout('warning', 'Limitations to keep in mind. The model assumes price and variable cost stay the same at every volume, that fixed costs really are fixed (they step up when you add a second counter or a second helper), that you sell what you make, and that the product mix stays constant. It works within a <em>relevant range</em>: Chai Adda\'s numbers hold between roughly 2,000 and 10,000 cups, not at 50,000.')}
      `
    },
    {
      heading: 'What this means for an owner',
      short: 'For owners',
      html: `
        <p>Three habits follow from the formula. First, <strong>know your daily break-even</strong>. Meera needs 154 cups a day;
        by 4 pm she knows whether today is a profit day. Rohit at Gupta Kirana, with 10% average margin and ₹45,000 of monthly fixed
        costs, needs ₹4,50,000 of monthly sales, so ₹15,000 a day. If the till shows ₹11,000 at closing time, he knows exactly how bad the day was.</p>
        <p>Second, <strong>treat fixed costs as a decision, not a fact</strong>. Before Sana hires a second helper at ₹12,000, she can
        see it needs 12,000 ÷ 2,790 = 4.3 more shawls a month, every month, just to pay for itself. Third, <strong>protect contribution</strong>:
        a cheaper courier that saves ₹30 per order raises contribution on every single sale, with no extra selling effort.</p>
        ${callout('india', 'Chai Adda pays restaurant GST at 5% <em>without</em> input tax credit. The GST she pays on milk, cups and the LPG bill cannot be claimed back, so it is part of her variable cost. A business that can claim ITC should use prices and costs <em>excluding</em> GST in these sums, because the tax passes through.')}
      `
    }
  ],

  keyPoints: [
    'Fixed costs do not move with sales; variable costs move with every unit; semi-variable costs must be split into the two parts.',
    'Contribution per unit = price − variable cost. It pays for fixed costs first, then becomes profit.',
    'Break-even units = fixed costs ÷ contribution per unit. Break-even rupees = fixed costs ÷ CM ratio. Always round units up.',
    'Target-profit units = (fixed costs + target profit) ÷ contribution per unit. Margin of safety shows how far sales can fall.',
    'A price cut or a variable-cost rise of the same amount hurts equally. Small discounts need big volume to pay for themselves.',
    'The model assumes constant prices, costs and mix within a relevant range. Check those assumptions before trusting the number.'
  ],

  practice: [
    { label: 'Break-even simulator', sub: 'Drag price, variable and fixed cost and watch the crossing point move', href: 'business-lab/index.html', icon: '📈' },
    { label: 'Calculators', sub: 'Contribution, break-even and target-profit calculators', href: 'calculators/index.html', icon: '🧮' }
  ],

  quiz: [
    {
      q: 'Chai Adda raises the price of chai to ₹25 and nothing else changes. What is the new break-even in cups?',
      options: ['4,616 cups', '3,334 cups', '2,400 cups', '5,000 cups'],
      answer: 1,
      why: 'Contribution becomes ₹25 − ₹7 = ₹18. Break-even = ₹60,000 ÷ ₹18 = 3,333.3, rounded up to 3,334 cups. The price rise lifted contribution by ₹5 a cup, so far fewer cups are needed.'
    },
    {
      q: 'Which of these is a variable cost for Noor Crafts?',
      options: ['The helper\'s monthly salary of ₹12,000', 'Workshop rent', 'The ₹90 courier charge on each parcel', 'The annual trademark renewal fee'],
      answer: 2,
      why: 'Courier is paid per parcel, so it rises with every order. Salary, rent and the trademark fee are paid whether Sana sells one shawl or a hundred.'
    },
    {
      q: 'Fixed costs ₹20,000, contribution per shawl ₹2,790, target profit ₹1,00,000. How many shawls?',
      options: ['36', '43', '44', '8'],
      answer: 2,
      why: '(₹20,000 + ₹1,00,000) ÷ ₹2,790 = 43.01, which rounds up to 44 shawls. At 43 shawls profit would be ₹99,970, just under the target.'
    },
    {
      q: 'A business sells ₹5,00,000 a month and its break-even sales are ₹4,00,000. What is its margin of safety?',
      options: ['25%', '80%', '20%', '125%'],
      answer: 2,
      why: 'Margin of safety = (5,00,000 − 4,00,000) ÷ 5,00,000 = 20%. Sales can fall by a fifth before the business makes a loss.'
    }
  ],

  glossary: [
    ['Contribution', 'Selling price minus variable cost, per unit or in total. It covers fixed costs first and then becomes profit.'],
    ['Contribution margin ratio', 'Contribution as a percentage of sales. Lets you compute break-even in rupees instead of units.'],
    ['Break-even point (BEP)', 'The sales level, in units or rupees, at which total revenue exactly equals total cost. Profit is zero.'],
    ['Margin of safety', 'The gap between actual (or budgeted) sales and break-even sales, usually shown as a percentage of actual sales.'],
    ['Semi-variable cost', 'A cost with a fixed part and a variable part, such as an electricity bill or a salary plus incentive.'],
    ['Relevant range', 'The band of activity within which the fixed and variable cost assumptions hold true.']
  ]
};
