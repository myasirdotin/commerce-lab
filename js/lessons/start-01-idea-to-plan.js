import { diagrams, example, callout, formula, table, terms, inr } from '../lesson-kit.js';

/**
 * Lesson 1.1 - From idea to a one-page plan
 * Running example: Noor Crafts (Sana, Srinagar): hand-embroidered pashmina
 * shawls and walnut-wood boxes, sold online and to dealers in Delhi and Mumbai.
 */
export default {
  id: 'start-01-idea-to-plan',
  title: 'From idea to a one-page plan',

  intro: `<p>An idea becomes a business the moment you can say <strong>who will pay for it, how much, and what it costs you to deliver</strong>.
    A one-page plan forces those three answers onto paper before you spend your savings. It is not a document for a bank or an investor;
    it is a document for you, and it should fit on one sheet.</p>`,

  outcomes: [
    'Test an idea with three questions (who is the customer, what problem, why you) before spending money on it.',
    'Fill a one-page plan: customer, offer, channels, price, costs, capital needed and the first 90 days.',
    'Sketch unit economics: contribution per unit, and how many units cover your fixed costs each month.',
    'Match the capital you need to the right source: savings, family, a bank term loan or a MUDRA loan.'
  ],

  sections: [
    {
      heading: 'The path in one picture',
      short: 'The path',
      html: `
        <p>Most small businesses in India start with a product the founder already knows how to make or source. The mistake is to go
        straight from idea to launch: buy stock, print visiting cards, open an Instagram page, and only then discover that customers
        want something slightly different, or that the price does not cover the courier. Put two cheap steps in between.</p>
        ${diagrams.flow(
          [
            { label: 'Idea', sub: 'what you can make or source', tone: 'c' },
            { label: 'Test it', sub: '20 conversations, a few pre-orders', tone: 'b' },
            { label: 'One-page plan', sub: 'customer, price, costs, capital', tone: 'a' },
            { label: 'Launch small', sub: 'first stock, first channel', tone: 'd' },
            { label: 'Review at 90 days', sub: 'what sold, what it cost', tone: 'e' }
          ],
          { title: 'Idea to launch in five steps', caption: 'The two middle steps cost almost nothing and prevent the expensive mistakes. The last step feeds back into the plan.' }
        )}
        <p>Sana in Srinagar has family who weave pashmina and a cousin who carves walnut wood. Her idea is <strong>Noor Crafts</strong>:
        hand-embroidered shawls and walnut boxes sold under one brand, online to customers across India and in bulk to boutiques in
        Delhi and Mumbai. We will follow her through every step.</p>
      `
    },
    {
      heading: 'Three questions that test an idea',
      short: 'Test it',
      html: `
        <p>Before you buy a single piece of stock, answer these in one line each. If you cannot, you do not have a business yet; you have a product.</p>
        ${terms([
          ['Who is the customer?', 'A real person you can describe: where they live, what they earn, where they already shop. "Everyone" is not an answer. Sana\'s customer is a woman aged 30 to 55 in a metro city who buys a shawl as a gift or for a wedding, and a boutique owner who wants authentic Kashmiri pieces without travelling to Srinagar.'],
          ['What problem or desire does it serve?', 'The reason money changes hands. For a shawl the desire is authenticity and craftsmanship; the problem is that buyers in Delhi cannot tell a genuine hand-embroidered pashmina from a machine copy, and fear being cheated.'],
          ['Why you?', 'What you have that a copycat does not. Sana has direct access to weavers (lower cost, no middleman), can show the work being done, and can get her shawls certified under the Kashmir Pashmina GI tag. That is her answer to the trust problem.']
        ])}
        <p>Then test the answers cheaply. Sana spent one month and under ₹5,000: she photographed six pieces, messaged 40 contacts and
        12 boutiques, and asked for money, not opinions. Result: six paid pre-orders at ₹7,000 each and three boutiques asking for
        samples. Two things surprised her: nobody questioned the shawl price, but several buyers asked for a certificate of authenticity.
        That became part of the offer.</p>
        ${callout('tip', 'A pre-order (even a ₹500 advance) is worth more than a hundred "nice idea" comments. People are polite with opinions and honest with money.')}
      `
    },
    {
      heading: 'The one-page plan',
      short: 'The plan',
      html: `
        <p>A one-page plan has seven boxes. Each box is one or two lines. If a box needs a paragraph, you have not thought it through yet.
        Here is Sana's, filled with real numbers.</p>
        ${table(
          ['Box', 'Noor Crafts (Sana\'s answers)'],
          [
            ['Customer', 'Gift and wedding buyers in metro cities (online); boutiques in Delhi and Mumbai (bulk)'],
            ['Offer', 'Hand-embroidered pashmina shawls with GI certificate; hand-carved walnut-wood boxes. Story and photos of the maker with every piece'],
            ['Channels', 'Own website plus Instagram for direct orders; dealers and boutiques at 30% off list price'],
            ['Price', 'Shawl ₹7,000 (dealer ₹4,900); walnut box ₹1,500 (dealer ₹1,050)'],
            ['Costs', 'Shawl ₹4,000 and box ₹900 from the makers; packaging ₹120 and courier ₹90 per order; rent ₹8,000 and one helper ₹12,000 per month'],
            ['Capital needed', '₹3,00,000: ₹2,00,000 own savings plus ₹1,00,000 J&K Bank loan (see below)'],
            ['First 90 days', 'Register (Udyam, GST, current account), build website, first stock of 20 shawls and 30 boxes, deliver the six pre-orders, send samples to three boutiques, target 25 orders by day 90']
          ],
          { caption: 'The one-page plan for Noor Crafts' }
        )}
        <p>Notice what the plan does <em>not</em> contain: no mission statement, no five-year projection, no market-size figure copied from a
        report. It contains the things that will be true or false within 90 days, so that at the review you can see exactly which box was wrong.</p>
        ${callout('remember', 'The plan is a set of guesses written down so they can be checked. Treat every number as a guess until a real customer confirms it.')}
      `
    },
    {
      heading: 'Unit economics: does each sale pay?',
      short: 'Unit economics',
      html: `
        <p>Before capital, before registrations, check that one sale leaves something behind after its own direct costs. That leftover is called
        <strong>contribution</strong>, because it contributes towards the costs you pay anyway each month (the fixed costs). The two formulas below are the
        whole of unit economics.</p>
        ${formula('Contribution per unit = Selling price − Variable cost per unit', 'Variable cost is everything you spend only because that unit was sold: the product itself, packaging, courier, payment charges.')}
        ${formula('Units needed per month = Monthly fixed costs ÷ Contribution per unit', 'Fixed costs are paid whether you sell or not: rent, salary, phone, loan interest.')}
        ${example({
          title: 'How many shawls pay the rent?',
          scenario: 'Sana works out the numbers for a shawl sold on her own website, then for the other three combinations of product and channel.',
          steps: [
            { label: 'Variable cost of one online shawl order:', html: 'shawl from the weaver ₹4,000 + packaging ₹120 + courier ₹90 = <strong>₹4,210</strong>.' },
            { label: 'Contribution:', html: '₹7,000 − ₹4,210 = <strong>₹2,790</strong> per shawl.' },
            { label: 'Monthly fixed costs:', html: 'rent ₹8,000 + helper ₹12,000 + phone, internet and software ₹1,000 + interest on the ₹1,00,000 loan at 12% (₹1,000) = <strong>₹22,000</strong>.' },
            { label: 'Units needed:', html: '₹22,000 ÷ ₹2,790 = 7.9, so <strong>8 online shawls a month</strong> cover every fixed cost. The ninth shawl onwards is profit.' },
            { label: 'Boxes alone?', html: 'A box contributes ₹1,500 − (₹900 + ₹120 + ₹90) = ₹390. Covering ₹22,000 with boxes alone needs 57 boxes a month. Boxes are an add-on sale, not the business.' }
          ],
          result: 'Shawls carry the rent; boxes raise the average order. That single insight decides what Sana photographs first, which product the website leads with, and what she pitches to boutiques.'
        })}
        ${table(
          ['Product and channel', 'Price', 'Variable cost', 'Contribution', 'Units to cover ₹22,000'],
          [
            ['Shawl, own website', inr(7000), inr(4210), inr(2790), '8'],
            ['Shawl, dealer (30% off)', inr(4900), inr(4050), inr(850), '26'],
            ['Box, own website', inr(1500), inr(1110), inr(390), '57'],
            ['Box, dealer (30% off)', inr(1050), inr(950), inr(100), '220']
          ],
          { align: ['l', 'r', 'r', 'r', 'r'], caption: 'Contribution by product and channel. Dealer consignments of 10 shawls and 20 boxes ship for about ₹1,500, so ₹50 per piece is added to the dealer variable cost.' }
        )}
        ${callout('warning', 'Dealer sales look big on the invoice but contribute little per piece: a dealer shawl leaves ₹850, an online one ₹2,790. Many first-year brands chase dealer volume, run out of cash buying stock, and never see why. Keep both channels, but know what each one earns.')}
      `
    },
    {
      heading: 'Capital: how much, and from where',
      short: 'Capital',
      html: `
        <p>Capital needed is not "the cost of stock". It is everything you must pay before the business pays you back, including the months
        of rent and salary while sales are still small. Sana's list looks like this.</p>
        ${table(
          ['What the money is for', 'Amount'],
          [
            ['Opening stock: 20 shawls at ₹4,000 and 30 boxes at ₹900', inr(107000)],
            ['Laptop, phone camera, packing table, shelves', inr(35000)],
            ['Rent deposit (two months)', inr(16000)],
            ['Branding, website, trademark and registrations', inr(12000)],
            ['Three months of fixed costs while sales build (3 × ₹22,000)', inr(66000)],
            ['Buffer for the second stock purchase and surprises', inr(64000)]
          ],
          { align: ['l', 'r'], total: ['Capital needed', inr(300000)], caption: 'Starting capital for Noor Crafts' }
        )}
        <p>She funds it with ₹2,00,000 of savings and a ₹1,00,000 term loan from J&amp;K Bank. The usual sources, in the order most founders use them:</p>
        ${terms([
          ['Own savings', 'No interest, no paperwork, and the discipline of losing your own money. Keep at least six months of household expenses outside the business.'],
          ['Family and friends', 'Cheap but dangerous if vague. Write one page: is it a gift, a loan (rate, repayment dates) or a share of the business? A loan from a relative should go into the business bank account, not your pocket.'],
          ['Bank loan', 'A term loan for equipment and stock, or a cash-credit limit for working capital. Banks look at your plan, your bank statements and your CIBIL score. Udyam registration (lesson 1.3) helps.'],
          ['MUDRA loan', 'Collateral-free loans for micro businesses under Pradhan Mantri MUDRA Yojana, applied through any bank: Shishu up to ₹50,000, Kishore ₹50,001 to ₹5 lakh, Tarun ₹5 lakh to ₹10 lakh, and Tarun Plus up to ₹20 lakh for borrowers who repaid a Tarun loan. Interest and documents vary by bank; verify with the branch or on udyamimitra.in.']
        ])}
        ${callout('india', 'Artisans in listed trades (weavers, carpenters, embroiderers and others) can apply under PM Vishwakarma for a collateral-free loan at a concessional 5% interest, ₹1 lakh in the first tranche and ₹2 lakh in the second. Check eligibility on pmvishwakarma.gov.in; the scheme rules change by year.')}
        <p>Finally, the plan must show what the first year costs in total, not just the first month. Sana's year-one plan assumes 150 shawls
        (90 online, 60 to dealers) and 300 boxes (180 online, 120 to dealers), which is ₹13,20,000 of sales. Here is where the money goes.</p>
        ${diagrams.bars(
          [
            { label: 'Stock from makers', value: 870000, tone: 'c' },
            { label: 'Helper salary', value: 144000, tone: 'e' },
            { label: 'Workshop rent', value: 96000, tone: 'e' },
            { label: 'Packaging and courier', value: 75000, tone: 'b' },
            { label: 'Marketing', value: 60000, tone: 'd' },
            { label: 'Interest and other', value: 36000, tone: 'n' }
          ],
          { title: 'Noor Crafts: first-year cost stack', caption: 'Total ₹12,81,000 against planned sales of ₹13,20,000, leaving ₹39,000 before Sana pays herself anything. Stock is two-thirds of all spending, which is why cash gets tight even when sales are good.' }
        )}
        <p>A ₹39,000 first-year profit is not a failure; it is what a realistic first year looks like for a stock-heavy brand. The point of the plan
        is to see that number before you spend, so that the question "how do I get to 12 online shawls a month instead of 8?" is asked in month one, not month ten.</p>
      `
    }
  ],

  keyPoints: [
    'Three questions test an idea: who is the customer, what problem or desire does it serve, and why you. Answer each in one line, then test with pre-orders, not opinions.',
    'A one-page plan has seven boxes: customer, offer, channels, price, costs, capital needed, first 90 days. Every entry is a guess to be checked at the 90-day review.',
    '<strong>Contribution = price − variable cost.</strong> Units needed per month = fixed costs ÷ contribution. For Noor Crafts: 8 online shawls a month cover ₹22,000 of fixed costs.',
    'Capital needed includes stock, equipment, deposits and several months of fixed costs while sales build, plus a buffer. Not just the first stock purchase.',
    'Fund in order: savings, then written family arrangements, then a bank or MUDRA loan (collateral-free up to ₹10 lakh under Tarun; verify current limits).',
    'Plan the whole first year. Stock is usually the biggest cost, and a small first-year profit is normal.'
  ],

  practice: [
    { label: 'Business Lab', sub: 'Build a break-even model with your own price, variable cost and fixed costs', href: 'business-lab/index.html', icon: '🏬' },
    { label: 'Calculators', sub: 'Contribution, margin and loan EMI calculators', href: 'calculators/index.html', icon: '🧮' },
    { label: 'Next: Costs, contribution and break-even', sub: 'The full version of the unit-economics idea', href: 'learn/lesson.html?id=biz-01-costs-and-break-even', icon: '📐' }
  ],

  quiz: [
    {
      q: 'Sana sells a shawl online for ₹7,000. The shawl costs ₹4,000, packaging ₹120 and courier ₹90. Her workshop rent is ₹8,000 a month. What is the contribution per shawl?',
      options: ['₹3,000', '₹2,790', '₹2,790 minus a share of the rent', '₹7,000'],
      answer: 1,
      why: 'Contribution = price − variable cost = ₹7,000 − (₹4,000 + ₹120 + ₹90) = ₹2,790. Rent is a fixed cost; it is covered by the total contribution of all units, not deducted from each one.'
    },
    {
      q: 'Monthly fixed costs are ₹22,000 and contribution per dealer shawl is ₹850. How many dealer shawls a month cover the fixed costs?',
      options: ['8', '22', '26', '57'],
      answer: 2,
      why: '₹22,000 ÷ ₹850 = 25.9, rounded up to 26. The same fixed costs need only 8 online shawls, which is why the channel mix matters so much.'
    },
    {
      q: 'Which of these is the strongest evidence that an idea will work?',
      options: ['Forty friends say it is a great idea', 'A market report says the handicraft sector is worth thousands of crores', 'Six strangers paid in advance for the product', 'A competitor already sells something similar'],
      answer: 2,
      why: 'Money is the only honest feedback. Opinions, market size and the existence of competitors tell you nothing about whether your customer will pay your price.'
    },
    {
      q: 'Why does the capital-needed figure include three months of fixed costs?',
      options: ['Because banks insist on it', 'Because sales take time to build and rent and salary must be paid meanwhile', 'Because fixed costs are tax deductible', 'It should not; only stock counts as capital'],
      answer: 1,
      why: 'In the first months, contribution from sales will not cover rent and salary. That gap must be funded from starting capital or the business runs out of cash while still being a good idea.'
    }
  ],

  glossary: [
    ['Contribution', 'Selling price minus variable cost per unit. The amount each sale leaves to cover fixed costs and then profit.'],
    ['Variable cost', 'A cost incurred only because a unit was made or sold: the product, packaging, courier, payment charges.'],
    ['Fixed cost', 'A cost paid every month regardless of sales: rent, salaries, phone, loan interest.'],
    ['Unit economics', 'The profit or loss on one unit sold, before fixed costs. If it is negative, selling more only loses more.'],
    ['Working capital', 'The money tied up in stock and unpaid customer bills, minus what you owe suppliers. The reason a profitable business can still be short of cash.'],
    ['MUDRA loan', 'A collateral-free loan for micro and small businesses under Pradhan Mantri MUDRA Yojana, given through banks in Shishu, Kishore, Tarun and Tarun Plus categories.']
  ]
};
