import { diagrams, example, callout, formula, table, terms, inr } from '../lesson-kit.js';

/**
 * Lesson 3.3 - Trading account & cost of goods sold
 * Running example: Noor Crafts, FY 2026-27 (year ended 31 March 2027).
 * Shared figure set (also used in lessons 3.4 to 3.6):
 *   Sales 18,40,000 | Opening stock 1,05,000 | Purchases 10,40,000 less returns 20,000 = 10,20,000
 *   Carriage inward 22,000 | Wages 1,44,000 | Closing stock 2,40,000
 *   COGS 10,51,000 | Gross profit 7,89,000 (42.9%)
 */
export default {
  id: 'fin-03-trading-account-cogs',
  title: 'Trading account & cost of goods sold',

  intro: `<p>Before you can know whether a business made money, you need to know what the goods it sold actually cost. That is the
    one job of the <strong>Trading account</strong>: compare sales with the <strong>cost of goods sold</strong> and show the
    <strong>gross profit</strong>. Rent, marketing and interest wait for the next lesson. This one is only about the goods.</p>`,

  outcomes: [
    'Compute cost of goods sold from opening stock, purchases, direct expenses and closing stock.',
    'Tell a direct expense from an indirect one and put each in the right account.',
    'Prepare a Trading account that balances, and read the gross profit ratio it produces.',
    'Value closing stock at cost or net realisable value, whichever is lower.'
  ],

  sections: [
    {
      heading: 'Stock in, goods out: the idea in one picture',
      short: 'The picture',
      html: `
        <p>Think of the storeroom as a tank. It starts the year with some stock in it. Purchases pour more in. Goods sold flow out.
        Whatever is left on 31 March is closing stock. The amount that flowed out, at cost, is the cost of goods sold.</p>
        ${diagrams.flow(
          [
            { label: 'Opening stock', sub: 'in the tank on 1 April', tone: 'n' },
            { label: '+ Purchases', sub: 'and direct expenses', tone: 'a' },
            { label: 'Goods sold', sub: 'flow out at cost = COGS', tone: 'd' },
            { label: 'Closing stock', sub: 'left on 31 March', tone: 'c' }
          ],
          { title: 'The storeroom as a tank', caption: 'Everything that went in, minus what is still there, must be what went out. That is the whole COGS formula.' }
        )}
        ${formula('Cost of goods sold = Opening stock + Net purchases + Direct expenses − Closing stock')}
        ${formula('Gross profit = Net sales − Cost of goods sold', 'Net sales means sales minus sales returns. Net purchases means purchases minus purchase returns.')}
      `
    },
    {
      heading: 'What belongs in the Trading account',
      short: 'Direct vs indirect',
      html: `
        ${terms([
          ['Direct expense', 'A cost incurred to <strong>bring goods to the point of sale</strong> or to make them saleable: carriage inward, freight, customs duty on imports, octroi, wages of the people who make or finish the goods, power for the workshop. These go in the Trading account.'],
          ['Indirect expense', 'A cost of <strong>running the business</strong> rather than of the goods themselves: rent, salaries of office staff, marketing, courier to customers, interest. These go in the Profit &amp; Loss account.'],
          ['Purchase returns', 'Goods sent back to the supplier (also called returns outward). Deducted from purchases. Sales returns (returns inward) are deducted from sales.']
        ])}
        ${table(
          ['Item', 'Direct or indirect?', 'Goes to'],
          [
            ['Carriage inward (bringing pashmina from the weaver)', 'Direct', 'Trading A/c'],
            ['Wages of the helper who finishes and packs shawls', 'Direct', 'Trading A/c'],
            ['Customs duty on imported embroidery thread', 'Direct', 'Trading A/c'],
            ['Carriage outward (courier to the customer)', 'Indirect', 'P&L A/c'],
            ['Workshop rent, electricity for the office', 'Indirect', 'P&L A/c'],
            ['Instagram ads, dealer commission', 'Indirect', 'P&L A/c']
          ],
          { caption: 'Sorting Noor Crafts\' costs' }
        )}
        ${callout('warning', '<strong>Carriage inward</strong> (goods coming to you) is direct. <strong>Carriage outward</strong> (goods going to customers) is indirect. Exam papers and real ledgers mix these up constantly. Ask: was the cost incurred before or after the goods were ready to sell?')}
      `
    },
    {
      heading: 'Noor Crafts\' Trading account, FY 2026-27',
      short: 'Worked account',
      html: `
        ${example({
          title: 'Building the Trading account for the year ended 31 March 2027',
          scenario: 'From Sana\'s trial balance: sales ₹18,40,000; opening stock ₹1,05,000; purchases ₹10,40,000; purchase returns ₹20,000; carriage inward ₹22,000; wages ₹1,44,000. A physical count on 31 March values closing stock at ₹2,40,000.',
          steps: [
            { label: 'Net purchases.', html: '₹10,40,000 − ₹20,000 returns = <strong>₹10,20,000</strong>.' },
            { label: 'Cost of goods available for sale.', html: 'Opening stock ₹1,05,000 + net purchases ₹10,20,000 + carriage inward ₹22,000 + wages ₹1,44,000 = ₹12,91,000.' },
            { label: 'Cost of goods sold.', html: '₹12,91,000 − closing stock ₹2,40,000 = <strong>₹10,51,000</strong>.' },
            { label: 'Gross profit.', html: 'Sales ₹18,40,000 − COGS ₹10,51,000 = <strong>₹7,89,000</strong>.' }
          ],
          result: 'Gross profit of ₹7,89,000 is carried down to the Profit &amp; Loss account (lesson 3.4). Both sides of the Trading account total ₹20,80,000.'
        })}
        ${table(
          ['Dr. Particulars', '₹', 'Cr. Particulars', '₹'],
          [
            ['To Opening stock', inr(105000), 'By Sales', inr(1840000)],
            ['To Purchases 10,40,000 less returns 20,000', inr(1020000), 'By Closing stock', inr(240000)],
            ['To Carriage inward', inr(22000), '', ''],
            ['To Wages', inr(144000), '', ''],
            [{ html: '<strong>To Gross profit c/d</strong>' }, { html: '<strong>' + inr(789000) + '</strong>' }, '', '']
          ],
          { align: ['l', 'r', 'l', 'r'], caption: 'Trading Account of Noor Crafts for the year ended 31 March 2027', total: ['Total', inr(2080000), 'Total', inr(2080000)] }
        )}
        <p>Notice two things. The debit side lists everything that went <em>into</em> the tank; the credit side lists what came out (sales)
        and what is still there (closing stock). Gross profit is the figure that makes the two sides equal; if costs exceeded sales it
        would be a <em>gross loss</em> shown on the credit side instead.</p>
        ${diagrams.bars(
          [
            { label: 'Sales', value: 1840000, tone: 'd' },
            { label: 'Cost of goods sold', value: 1051000, tone: 'e' },
            { label: 'Gross profit', value: 789000, tone: 'a' }
          ],
          { title: 'Noor Crafts FY 2026-27: sales, COGS and gross profit', caption: 'Gross profit is the gap between the first two bars. Every indirect expense of the business has to be paid out of that third bar.' }
        )}
      `
    },
    {
      heading: 'Gross profit ratio: what it tells you',
      short: 'GP ratio',
      html: `
        ${formula('Gross profit ratio = Gross profit ÷ Net sales × 100', 'Noor Crafts: ₹7,89,000 ÷ ₹18,40,000 × 100 = 42.9%')}
        <p>For every ₹100 of sales, ₹42.90 is left after paying for the goods. That is the money available for rent, marketing,
        courier, interest and, finally, Sana\'s own profit. A shawl listed at ₹7,000 that cost ₹4,000 carries a 42.9% margin at list price;
        a dealer who gets 30% off pays ₹4,900, leaving only ₹900 or 18.4%. The overall ratio is a blend of channels, product mix and the direct
        costs of wages and carriage, so watch it year on year rather than against a textbook number.</p>
        ${callout('tip', 'Margin and mark-up are different. Mark-up is profit on <em>cost</em> (₹3,000 ÷ ₹4,000 = 75%). Margin is profit on <em>sales</em> (₹3,000 ÷ ₹7,000 = 42.9%). When a supplier says "keep 50%", ask which one they mean.')}
        <p>A falling GP ratio with steady sales usually means one of three things: suppliers raised prices and you did not, you gave more discounts,
        or stock is leaking (damage, theft, free samples not recorded). The Trading account cannot tell you which; it can only raise the flag.</p>
      `
    },
    {
      heading: 'Valuing closing stock: cost or NRV, whichever is lower',
      short: 'Closing stock',
      html: `
        <p>Closing stock is the one Trading account figure that does <em>not</em> come from the ledger. It comes from a physical count on
        31 March, priced using a rule from Accounting Standard 2: each item is valued at <strong>cost</strong> or <strong>net realisable value
        (NRV)</strong>, <strong>whichever is lower</strong>. NRV is the price you can actually sell it for, minus any cost to get it sold.</p>
        ${example({
          title: 'The flawed shawls',
          scenario: 'Among Sana\'s closing stock are 10 shawls that cost ₹4,000 each (₹40,000) but have a visible embroidery fault. She can sell them as "seconds" at ₹3,500 each after spending ₹100 per piece on repacking.',
          steps: [
            { label: 'Cost', html: '10 × ₹4,000 = ₹40,000.' },
            { label: 'NRV', html: '10 × (₹3,500 − ₹100) = ₹34,000.' },
            { label: 'Lower of the two', html: '₹34,000. The ₹6,000 drop is recognised <em>this</em> year, even though the shawls have not been sold yet.' }
          ],
          result: 'The ₹2,40,000 closing stock already includes these shawls at ₹34,000, not ₹40,000. Prudence again: the expected loss is booked now; the hoped-for recovery is not.',
          tone: 'c'
        })}
        ${callout('india', 'Value stock at cost <strong>excluding</strong> the GST on which you claimed input tax credit; that tax is sitting in your electronic credit ledger, not in the stock. Also, closing stock appears in two places: the credit side of the Trading account and the assets side of the balance sheet. It is never in the trial balance when it is given as an adjustment.')}
        ${callout('remember', 'Overstate closing stock and this year\'s profit goes up; but that same figure becomes next year\'s opening stock and profit falls by the same amount. Stock errors do not disappear, they move.')}
      `
    }
  ],

  keyPoints: [
    'The Trading account has one job: Net sales − Cost of goods sold = Gross profit.',
    'COGS = Opening stock + Net purchases + Direct expenses − Closing stock.',
    'Direct expenses bring goods to the point of sale (carriage inward, wages, freight, customs duty). Indirect ones run the business and go to the P&amp;L.',
    'Noor Crafts FY 2026-27: COGS ₹10,51,000, gross profit ₹7,89,000, GP ratio 42.9%.',
    'Closing stock is valued at cost or net realisable value, whichever is lower, and appears in both the Trading account and the balance sheet.',
    'Margin is on sales; mark-up is on cost. Track your GP ratio against your own past, not a generic benchmark.'
  ],

  practice: [
    { label: 'Accounting Simulator', sub: 'Post transactions and watch the Trading account and gross profit form', href: 'accounting-lab/index.html', icon: '⚖️' },
    { label: 'Calculators', sub: 'Margin vs mark-up and GP ratio in seconds', href: 'calculators/index.html', icon: '🧮' },
    { label: 'Lesson 3.4: Profit & Loss account', sub: 'Carry the ₹7,89,000 gross profit forward', href: 'learn/lesson.html?id=fin-04-profit-and-loss', icon: '📊' }
  ],

  quiz: [
    {
      q: 'Opening stock ₹1,05,000, net purchases ₹10,20,000, carriage inward ₹22,000, wages ₹1,44,000, closing stock ₹2,40,000. Cost of goods sold is:',
      options: ['₹12,91,000', '₹10,51,000', '₹15,31,000', '₹8,11,000'],
      answer: 1,
      why: 'Add everything that went in (₹12,91,000) and subtract what is still there (₹2,40,000) = ₹10,51,000.'
    },
    {
      q: 'Which of these is a direct expense that belongs in the Trading account?',
      options: ['Courier charges to deliver shawls to customers', 'Freight paid to bring walnut boxes from the carpenter', 'Workshop rent', 'Instagram advertising'],
      answer: 1,
      why: 'Freight inward is incurred to bring goods to the point of sale, so it is part of their cost. Courier to customers, rent and advertising are costs of running and selling, not of the goods, so they go to the P&L.'
    },
    {
      q: 'Twenty boxes cost ₹900 each but, being slightly damaged, can only be sold for ₹700 each after ₹50 of repair per box. At what value does closing stock include them?',
      options: ['₹18,000', '₹14,000', '₹13,000', '₹15,000'],
      answer: 2,
      why: 'Cost = 20 × ₹900 = ₹18,000. NRV = 20 × (₹700 − ₹50) = ₹13,000. The lower figure, ₹13,000, is used.'
    },
    {
      q: 'Noor Crafts sells for ₹18,40,000 with a gross profit of ₹7,89,000. The gross profit ratio is about:',
      options: ['75%', '57%', '43%', '21%'],
      answer: 2,
      why: '₹7,89,000 ÷ ₹18,40,000 = 0.429, so 42.9%. The 21% figure is the net profit ratio you will meet after indirect expenses are deducted.'
    }
  ],

  glossary: [
    ['Cost of goods sold (COGS)', 'The cost of the goods that were actually sold during the year: opening stock + net purchases + direct expenses − closing stock.'],
    ['Gross profit', 'Net sales minus cost of goods sold. Profit before any indirect expense.'],
    ['Direct expense', 'A cost of bringing goods to the point of sale or making them saleable, such as carriage inward or production wages.'],
    ['Net realisable value (NRV)', 'The estimated selling price of stock minus the costs needed to complete and sell it.'],
    ['Returns outward', 'Purchase returns: goods sent back to a supplier, deducted from purchases.']
  ]
};
