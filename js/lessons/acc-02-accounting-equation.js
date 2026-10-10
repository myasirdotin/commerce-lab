import { fig, svg, diagrams, example, callout, formula, table, terms, inr } from '../lesson-kit.js';

/**
 * Lesson 2.2 - The accounting equation
 * Running example: Noor Crafts, a small Kashmiri artisan brand (pashmina shawls,
 * walnut-wood boxes) run by Sana from Srinagar, selling online and to dealers.
 */
export default {
  id: 'acc-02-accounting-equation',
  title: 'The accounting equation',

  intro: `<p>Every set of books in the world, from a corner kirana to Tata Motors, rests on one sentence:
    <strong>what a business owns equals what it owes to outsiders plus what it owes to its owner.</strong>
    Understand this one line and double-entry stops being a mystery.</p>`,

  outcomes: [
    'Explain <em>Assets = Liabilities + Capital</em> in plain words and classify any item into one of the three.',
    'Show how a real transaction changes two things at once and why the equation never breaks.',
    'Work out an owner\'s net worth in a business from a simple list of what it owns and owes.'
  ],

  sections: [
    {
      heading: 'The equation in one picture',
      short: 'The picture',
      html: `
        <p>Think of a weighing scale. On the left pan sit the <strong>assets</strong>: everything the business owns or is owed.
        On the right pan sit the two groups of people who have a claim on those assets: <strong>outsiders</strong> (liabilities)
        and <strong>the owner</strong> (capital). Because every rupee of asset came from one of those two sources, the pans always balance.</p>
        ${diagrams.scale(
          { label: 'Assets', sub: 'Cash, bank, stock, debtors, furniture' },
          { label: 'Liabilities + Capital', sub: 'Creditors, loans  +  owner\'s money & profits', tone: 'b' },
          { title: 'The accounting equation as a balance scale', caption: 'Assets are what the business has; the right side shows <em>whose money</em> paid for them.' }
        )}
        ${formula('Assets = Liabilities + Capital', 'Rearranged: Capital = Assets − Liabilities. This is why capital is also called <em>net worth</em> or <em>owner\'s equity</em>.')}
      `
    },
    {
      heading: 'The three words, in plain language',
      short: 'Three words',
      html: `
        ${terms([
          ['Assets', 'Things the business <strong>owns</strong> or is <strong>owed</strong>, that will bring future benefit. Cash in the drawer, money in the bank, stock on the shelf, a customer who still has to pay you (a <em>debtor</em>), a laptop, a sewing machine, a shop.'],
          ['Liabilities', 'What the business <strong>owes to outsiders</strong>. A supplier you have not paid yet (a <em>creditor</em>), a bank loan, GST collected but not yet deposited, salary due to staff.'],
          ['Capital (owner\'s equity)', 'What the business <strong>owes to its owner</strong>. The money the owner put in, plus every profit the business has earned and kept, minus anything the owner has taken out (<em>drawings</em>).']
        ])}
        ${callout('remember', 'The business and the owner are <strong>two separate persons</strong> in accounting, even for a one-person proprietorship. That is why the owner\'s money is a claim <em>on</em> the business, written on the right side next to the loans. This is the <em>business entity concept</em>.')}
        <p>A quick test for any item: ask <em>"Does the business have it, or does the business owe it?"</em> If it has it, it is an asset. If it owes it, decide to whom: outsider (liability) or owner (capital).</p>
      `
    },
    {
      heading: 'Why it never breaks: every transaction has two sides',
      short: 'Two sides',
      html: `
        <p>Nothing happens in business that changes only one number. Buy stock with cash and one asset goes up while another goes down.
        Borrow from a bank and cash goes up while a liability goes up by the same amount. This is the <strong>dual aspect</strong>, and it is the
        reason the method is called <em>double</em> entry.</p>
        ${example({
          title: 'Noor Crafts opens for business',
          scenario: 'Sana starts <strong>Noor Crafts</strong> in Srinagar to sell hand-embroidered pashmina shawls and walnut-wood boxes online and to dealers. Here is her first week, one transaction at a time. Watch both sides of the scale.',
          steps: [
            { label: '1 April. Sana deposits ₹2,00,000 of her savings into a new business bank account.', html: 'Bank (asset) +₹2,00,000. Capital +₹2,00,000. Assets ₹2,00,000 = Liabilities ₹0 + Capital ₹2,00,000.' },
            { label: '3 April. She buys 20 shawls from a weaver in Kanihama for ₹80,000, paying by bank transfer.', html: 'Stock (asset) +₹80,000, Bank (asset) −₹80,000. Total assets unchanged at ₹2,00,000. Only the <em>form</em> of the asset changed.' },
            { label: '5 April. A carpenter supplies 30 walnut boxes for ₹45,000 on 30 days credit.', html: 'Stock +₹45,000 and Creditors (liability) +₹45,000. Assets ₹2,45,000 = Liabilities ₹45,000 + Capital ₹2,00,000.' },
            { label: '6 April. Noor Crafts takes a ₹1,00,000 small-business loan from J&K Bank.', html: 'Bank +₹1,00,000 and Bank loan (liability) +₹1,00,000. Assets ₹3,45,000 = Liabilities ₹1,45,000 + Capital ₹2,00,000.' },
            { label: '7 April. She sells 5 shawls to a Delhi boutique for ₹35,000, paid by UPI. Those 5 shawls cost her ₹20,000.', html: 'Bank +₹35,000, Stock −₹20,000, so assets rise by ₹15,000. That ₹15,000 is <strong>profit</strong>, and profit belongs to the owner, so Capital +₹15,000.' }
          ],
          result: 'Assets ₹3,60,000 = Liabilities ₹1,45,000 + Capital ₹2,15,000. Five very different events, and the scale balanced every single time.'
        })}
        ${table(
          ['After transaction', 'Bank', 'Stock', 'Total assets', 'Liabilities', 'Capital'],
          [
            ['1. Capital introduced', inr(200000), inr(0), inr(200000), inr(0), inr(200000)],
            ['2. Shawls bought for cash', inr(120000), inr(80000), inr(200000), inr(0), inr(200000)],
            ['3. Boxes bought on credit', inr(120000), inr(125000), inr(245000), inr(45000), inr(200000)],
            ['4. Bank loan taken', inr(220000), inr(125000), inr(345000), inr(145000), inr(200000)],
            ['5. Shawls sold at a profit', inr(255000), inr(105000), inr(360000), inr(145000), inr(215000)]
          ],
          { align: ['l', 'r', 'r', 'r', 'r', 'r'], caption: 'Noor Crafts: running balances for the first week' }
        )}
        ${fig({
          title: 'The four ways a transaction can move the scale',
          caption: 'Every transaction is one of these four patterns. Patterns 1 and 2 keep totals the same; patterns 3 and 4 change both sides equally.',
          viewBox: '0 0 640 250',
          body: `
            ${svg.box(10, 10, 300, 100, 'Asset up, another asset down', { tone: 'a', sub: 'Buy stock with cash. Totals unchanged.', size: 13 })}
            ${svg.box(330, 10, 300, 100, 'Liability up, another liability down', { tone: 'b', sub: 'Pay a creditor with a bank loan.', size: 13 })}
            ${svg.box(10, 130, 300, 100, 'Asset up, claim up', { tone: 'c', sub: 'Take a loan, or owner adds capital. Both sides grow.', size: 13 })}
            ${svg.box(330, 130, 300, 100, 'Asset down, claim down', { tone: 'e', sub: 'Repay a loan, or owner withdraws cash. Both sides shrink.', size: 13 })}
          `
        })}
      `
    },
    {
      heading: 'The expanded equation: where profit fits',
      short: 'Profit',
      html: `
        <p>Transaction 5 above hid an important idea. Sales and expenses do not get their own pan on the scale; they are the
        two things that <strong>change capital</strong> during the year. Open capital up and you get the version accountants actually work with:</p>
        ${formula('Assets = Liabilities + (Opening Capital + Revenue − Expenses − Drawings)', 'Revenue makes the owner richer; expenses and drawings make the owner poorer. Net of all that is closing capital.')}
        ${diagrams.flow(
          [
            { label: 'Opening capital', sub: 'what Sana put in', tone: 'c' },
            { label: '+ Revenue', sub: 'sales of shawls & boxes', tone: 'a' },
            { label: '− Expenses', sub: 'rent, courier, packaging', tone: 'e' },
            { label: '− Drawings', sub: 'cash Sana takes home', tone: 'd' },
            { label: 'Closing capital', sub: 'owner\'s net worth now', tone: 'b' }
          ],
          { title: 'How capital moves during a year', caption: 'This is also the skeleton of the Profit & Loss account you will meet in journey 3.' }
        )}
        ${callout('tip', 'When you see <em>Sales A/c</em> or <em>Rent A/c</em> in a ledger, remember they are temporary pockets inside capital. At year end their net result (profit or loss) is added to capital and the pockets start again at zero.')}
      `
    },
    {
      heading: 'What the equation tells a business owner',
      short: 'For owners',
      html: `
        <p>The equation is not just an exam topic. Rearranged as <strong>Capital = Assets − Liabilities</strong>, it answers the question every owner asks:
        <em>"If I sold everything and paid everyone, what would be left for me?"</em> That number is your real stake in the business, whatever the cash balance looks like today.</p>
        ${example({
          title: 'Is Noor Crafts worth more after six months?',
          scenario: 'In October Sana lists what the business has and owes.',
          steps: [
            { label: 'Assets:', html: 'Bank ₹1,10,000, stock at cost ₹2,40,000, debtors (two dealers yet to pay) ₹85,000, laptop and packing equipment ₹35,000. Total <strong>₹4,70,000</strong>.' },
            { label: 'Liabilities:', html: 'Bank loan ₹80,000 (she has repaid ₹20,000), creditors ₹60,000, GST payable ₹12,000. Total <strong>₹1,52,000</strong>.' },
            { label: 'Capital = Assets − Liabilities', html: '₹4,70,000 − ₹1,52,000 = <strong>₹3,18,000</strong>.' }
          ],
          result: 'Sana started with ₹2,00,000 and took ₹30,000 home for personal expenses. So the business earned ₹3,18,000 − ₹2,00,000 + ₹30,000 = <strong>₹1,48,000 profit</strong> in six months. Notice that most of her wealth is sitting in stock and debtors, not cash. The equation shows she is profitable <em>and</em> warns her that cash is tight. Both are true at once.',
          tone: 'b'
        })}
        ${callout('warning', 'A growing capital figure with a shrinking bank balance usually means money is stuck in unsold stock or unpaid customers. Profit and cash are different things. Journey 4 covers working capital for exactly this reason.')}
      `
    }
  ],

  keyPoints: [
    '<strong>Assets = Liabilities + Capital.</strong> Left side: what the business has. Right side: whose money paid for it.',
    'Every transaction changes at least two items, and always in a way that keeps the two sides equal. That is the dual aspect.',
    'Capital is the owner\'s claim: money put in + profits kept − drawings. It is also called net worth or owner\'s equity.',
    'Revenue and expenses are temporary pockets inside capital. Profit increases capital; losses and drawings reduce it.',
    'Capital = Assets − Liabilities answers "what is really mine?". A high capital figure with low cash means money is locked in stock or debtors.'
  ],

  practice: [
    { label: 'Accounting Simulator', sub: 'Toggle transactions and watch the equation bar rebalance live', href: 'accounting-lab/index.html', icon: '⚖️' },
    { label: 'Golden Rules cheatsheet', sub: 'Keep it open while you classify accounts', href: 'cheatsheets/index.html', icon: '📑' }
  ],

  quiz: [
    {
      q: 'Noor Crafts buys packaging material for ₹6,000 and pays by UPI. What happens to the equation?',
      options: [
        'Assets go up by ₹6,000 and liabilities go up by ₹6,000',
        'One asset (packaging stock) goes up and another asset (bank) goes down; totals are unchanged',
        'Capital goes down by ₹6,000',
        'Nothing changes because it was paid digitally'
      ],
      answer: 1,
      why: 'Cash was swapped for another asset. Only the form of the asset changed, so total assets, liabilities and capital are all the same as before.'
    },
    {
      q: 'A business has assets of ₹9,40,000 and liabilities of ₹3,10,000. What is the owner\'s capital?',
      options: ['₹12,50,000', '₹3,10,000', '₹6,30,000', 'Cannot be known without the profit figure'],
      answer: 2,
      why: 'Capital = Assets − Liabilities = ₹9,40,000 − ₹3,10,000 = ₹6,30,000. The profit figure is already inside this number.'
    },
    {
      q: 'Which of these is a liability for Noor Crafts?',
      options: ['Shawls in the storeroom', 'A dealer who still owes ₹20,000 for boxes', 'GST collected from customers but not yet deposited with the government', 'The laptop Sana uses for the online store'],
      answer: 2,
      why: 'GST collected belongs to the government until it is deposited, so it is money the business owes to an outsider. The other three are assets (stock, a debtor, equipment).'
    },
    {
      q: 'Sana withdraws ₹10,000 from the business bank account for her family\'s expenses. Which pattern is this?',
      options: ['Asset up, claim up', 'Asset down, claim down', 'Asset up, asset down', 'Liability up, liability down'],
      answer: 1,
      why: 'Bank (asset) falls by ₹10,000 and drawings reduce capital (the owner\'s claim) by ₹10,000. Both sides shrink equally.'
    }
  ],

  glossary: [
    ['Debtor', 'A customer who owes the business money for goods or services already supplied. Also called accounts receivable.'],
    ['Creditor', 'A supplier the business owes money to for goods or services already received. Also called accounts payable.'],
    ['Drawings', 'Cash or goods the owner takes out of the business for personal use. Reduces capital; it is not an expense.'],
    ['Net worth', 'Another name for capital: assets minus liabilities.'],
    ['Dual aspect', 'The principle that every transaction affects at least two accounts so that the equation stays balanced.']
  ]
};
