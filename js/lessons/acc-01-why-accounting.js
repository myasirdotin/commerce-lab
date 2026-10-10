import { diagrams, example, callout, table, terms, inr } from '../lesson-kit.js';

/**
 * Lesson 2.1 - Why accounting exists
 * Running examples: Gupta Kirana (Rohit, Jaipur) and Noor Crafts (Sana, Srinagar).
 */
export default {
  id: 'acc-01-why-accounting',
  title: 'Why accounting exists',

  intro: `<p>A business makes hundreds of small decisions a month: buy more stock or not, give a customer credit or not,
    take a loan or not. Accounting is the habit of writing down every rupee that moves, in a form that answers those
    questions later. It is also the only language a bank, the GST department and the income-tax department accept as proof.</p>`,

  outcomes: [
    'Say what accounting does in four verbs (record, classify, summarise, interpret) and who uses the result.',
    'Explain the difference between book-keeping and accounting, and between cash and profit.',
    'Walk through the seven steps of the accounting cycle and name the basic concepts behind every set of books.'
  ],

  sections: [
    {
      heading: 'What accounting actually does',
      short: 'Four verbs',
      html: `
        <p>Strip away the jargon and accounting is four actions done in order. You <strong>record</strong> each transaction
        (a sale, a purchase, a payment) as it happens. You <strong>classify</strong> it into an account, so all rent goes in one
        place and all sales in another. You <strong>summarise</strong> those accounts into a few statements at the end of a period.
        Then you <strong>interpret</strong> the statements to decide what to do next.</p>
        ${diagrams.flow(
          [
            { label: 'Record', sub: 'every transaction, with proof', tone: 'a' },
            { label: 'Classify', sub: 'into accounts (ledger)', tone: 'b' },
            { label: 'Summarise', sub: 'trial balance, P&amp;L, balance sheet', tone: 'c' },
            { label: 'Interpret', sub: 'profit? cash? growth?', tone: 'd' }
          ],
          { title: 'Accounting in four verbs', caption: 'The first two are book-keeping. The last two are accounting proper. Most software does steps 2 and 3 for you, but only if step 1 is done honestly.' }
        )}
        ${terms([
          ['Book-keeping', 'The clerical part: recording and classifying transactions day by day. A Tally operator or a diligent owner with a register does this. It needs discipline more than judgement.'],
          ['Accounting', 'The whole process, including summarising and interpreting. Deciding how much depreciation to charge, whether a doubtful customer will pay, what the profit really is. This needs judgement, which is why a CA signs the statements.'],
          ['Objectives', 'Keep a complete record; find the profit or loss for a period; show the financial position (what is owned and owed) on a date; give users information they can trust.']
        ])}
        ${callout('remember', '<strong>Cash is what is in your bank today; profit is what you earned in a period, whether or not the customer has paid yet.</strong> A business can be profitable and still bounce a cheque. Accounting tracks both, separately.')}
      `
    },
    {
      heading: 'Who needs the numbers, and why',
      short: 'Users',
      html: `
        <p>You might think the books are for you alone. In practice at least six different people will ask to see them,
        and each one is looking for something different.</p>
        ${table(
          ['User', 'What they want to know', 'Where they look'],
          [
            ['Owner (you)', 'Am I making money? Which product earns more? Can I afford a second helper?', 'P&amp;L, cash book, debtor list'],
            ['Bank', 'Can this business repay a loan? Is there enough stock and receivables as security?', 'Last 2-3 years of audited or CA-certified statements, GST returns, bank statements'],
            ['GST department', 'Did you report every sale, and is every input tax credit you claimed backed by a supplier invoice?', 'Sales and purchase registers, GSTR-1, GSTR-3B, GSTR-2B'],
            ['Income-tax department', 'Is the profit you declared in your ITR the real profit?', 'Books of account, bank statements, Form 26AS / AIS'],
            ['Suppliers', 'Will this buyer pay me on time if I give 30 days credit?', 'Payment history, creditworthiness, sometimes your balance sheet'],
            ['Investors or partners', 'What is my share worth, and is the business growing?', 'Balance sheet, capital accounts, profit trend']
          ],
          { caption: 'Six users of the same set of books' }
        )}
        ${example({
          title: 'Two kirana stores, one bank, one GST notice',
          scenario: 'Rohit runs <strong>Gupta Kirana</strong> in Jaipur and keeps books in Tally, entering every bill and every UPI receipt. Two streets away, <strong>Verma Stores</strong> does the same volume of business but keeps only a khata diary of who owes what. Both apply to the same bank for a ₹5,00,000 working-capital loan in the same month, and both receive a routine GST query.',
          steps: [
            { label: 'Gupta Kirana at the bank.', html: 'Rohit hands over a CA-certified P&amp;L: sales ' + inr(4800000) + ', gross margin 11%, net profit ' + inr(430000) + ' (about 9%), stock ' + inr(600000) + ', khata debtors ' + inr(85000) + '. The bank can see a drawing power of stock plus debtors minus creditors, and sanctions ' + inr(500000) + ' within three weeks.' },
            { label: 'Verma Stores at the bank.', html: 'Mr Verma has bank statements showing ' + inr(2200000) + ' of UPI credits and nothing to show for the cash sales. The bank cannot find a profit figure to lend against. It offers ' + inr(150000) + ' against a fixed deposit instead.' },
            { label: 'The GST query.', html: 'Both receive a notice asking why the sales in their returns differ from the UPI receipts reported by their banks. Rohit opens his sales register, matches it to GSTR-1 in an hour and replies with a reconciliation. Mr Verma spends two weekends reconstructing sales from memory and pays a penalty for the gap he cannot explain.' }
          ],
          result: 'Same shops, same turnover. The one with books borrowed ' + inr(500000) + ' and closed a notice in an hour. The one without borrowed ' + inr(150000) + ' and paid a penalty. Books are not a cost of doing business; they are an asset of it.',
          tone: 'b'
        })}
      `
    },
    {
      heading: 'The accounting cycle',
      short: 'The cycle',
      html: `
        <p>Every set of books, whether in a ruled register or in Tally, moves through the same seven steps once a year.
        Steps one to five repeat every day or week; six and seven happen at the year end (31 March in India).</p>
        ${diagrams.cycle(
          [
            { label: 'Transaction', tone: 'a' },
            { label: 'Voucher', tone: 'b' },
            { label: 'Journal', tone: 'c' },
            { label: 'Ledger', tone: 'd' },
            { label: 'Trial balance', tone: 'e' },
            { label: 'Adjustments', tone: 'b' },
            { label: 'Final accounts', tone: 'a' }
          ],
          { title: 'The accounting cycle', caption: 'Each step feeds the next. A mistake at the voucher stage travels all the way to the balance sheet, which is why proof matters most at the start.' }
        )}
        ${table(
          ['Step', 'What happens', 'Noor Crafts example'],
          [
            ['1. Transaction', 'An event that changes money, goods or a claim.', 'Sana sells a shawl for ' + inr(7000) + ' by UPI.'],
            ['2. Voucher', 'The proof: invoice, receipt, bank entry, bill.', 'Her tax invoice no. NC/26-27/014 and the UPI reference.'],
            ['3. Journal', 'The first written record, in date order, as a debit and a credit.', 'Bank A/c Dr ' + inr(7000) + ' / To Sales A/c ' + inr(7000) + '.'],
            ['4. Ledger', 'Each account collected on its own page.', 'The ' + inr(7000) + ' appears in Bank A/c and in Sales A/c.'],
            ['5. Trial balance', 'A list of all ledger balances to check debits equal credits.', 'Done monthly before filing GSTR-3B.'],
            ['6. Adjustments', 'Year-end corrections: depreciation, closing stock, expenses due but unpaid.', 'Unsold shawls counted on 31 March; March rent paid in April.'],
            ['7. Final accounts', 'Trading and P&amp;L account (profit) and balance sheet (position).', 'Given to the CA for the ITR and to J&amp;K Bank for the loan renewal.']
          ],
          { caption: 'The seven steps, one transaction followed through' }
        )}
        ${callout('tip', 'Software collapses steps 3 to 5: enter a voucher in Tally and the journal, ledger and trial balance update by themselves. What software cannot do is step 2. If the voucher is wrong or missing, everything downstream is wrong. Lessons 2.3 to 2.6 teach steps 3 to 5 by hand so that you can read what the software produces.')}
      `
    },
    {
      heading: 'The ground rules: concepts and conventions',
      short: 'Concepts',
      html: `
        <p>Books from Srinagar and books from Chennai can be read by the same banker because everyone follows the same
        assumptions. These are called accounting concepts (the basic assumptions) and conventions (accepted practices).
        You do not need to memorise definitions; you need to recognise each one when it shows up in a decision.</p>
        ${table(
          ['Concept', 'Rule in one line', 'Example'],
          [
            ['Business entity', 'The business and its owner are separate persons in the books.', 'Sana\'s grocery bill is not a Noor Crafts expense; if paid from the business account it is drawings.'],
            ['Money measurement', 'Only things measurable in rupees are recorded.', 'A loyal customer base is valuable but has no entry; a ' + inr(1200) + ' courier bill does.'],
            ['Going concern', 'Assume the business will continue, so assets are kept at cost, not at what a closing-down sale would fetch.', 'The sewing machine stays at ' + inr(25000) + ' less depreciation, not at its scrap value.'],
            ['Accounting period', 'Results are measured for fixed periods, usually 1 April to 31 March.', 'Profit for FY 2026-27 is worked out on 31 March 2027 even though the business carries on.'],
            ['Cost', 'Assets are recorded at the price paid, not at current market value.', 'A shop bought in 2019 for ' + inr(3000000) + ' stays at that cost even if it is worth ' + inr(5000000) + ' today.'],
            ['Dual aspect', 'Every transaction has two sides, so Assets = Liabilities + Capital always holds.', 'A ' + inr(100000) + ' loan raises bank balance and raises a liability by the same amount. See <a href="learn/lesson.html?id=acc-02-accounting-equation">lesson 2.2</a>.'],
            ['Accrual', 'Record income when earned and expenses when incurred, not when cash moves.', 'A dealer takes shawls on 28 March and pays on 10 April: the sale belongs to March.'],
            ['Matching', 'Put the expenses of earning a revenue in the same period as that revenue.', 'The cost of the shawls sold in March is charged in March, not when the weaver was paid in January.'],
            ['Consistency', 'Use the same method year after year so figures are comparable.', 'If you depreciate the laptop by the straight-line method this year, do not switch to WDV next year without a reason.'],
            ['Prudence (conservatism)', 'Do not count a gain until it is sure; provide for a loss as soon as it is likely.', 'Stock is valued at cost or market price, whichever is lower; a doubtful khata debt gets a provision.'],
            ['Materiality', 'Small items can be treated simply; big items need exact treatment.', 'A ' + inr(300) + ' stapler is written off as an expense, not depreciated over five years.'],
            ['Full disclosure', 'Report everything a reader needs to judge the business fairly.', 'A pending court case or a loan guarantee given to a friend is noted even if no money has moved yet.']
          ],
          { caption: 'Twelve concepts you will meet again and again' }
        )}
        ${callout('india', 'For companies these rules are law through the Accounting Standards (AS) and Ind AS notified under the Companies Act 2013. For a proprietor they still matter: the Income-tax Act (section 44AA) requires books once income or turnover crosses modest limits, and section 145 requires the cash or mercantile (accrual) system to be followed consistently. Verify the current 44AA limits with your CA.')}
        ${callout('warning', 'The most common failure in small businesses is not a wrong concept but a missing one: the <strong>business entity</strong> concept. Paying school fees from the shop account, or buying stock from a personal UPI, mixes two persons into one set of books. Within a year no one, including the owner, can say what the business earned.')}
      `
    },
    {
      heading: 'What this means for a business owner',
      short: 'For owners',
      html: `
        <p>You do not need to become an accountant. You need three habits that make accounting possible: one bank account
        used only for the business, a voucher for every rupee in or out (an invoice, a bill, a receipt, a screenshot of the UPI
        transfer), and a weekly half-hour to enter or check them. With those habits, a CA can produce the statements a bank
        or a tax officer will accept. Without them, no amount of year-end effort can rebuild the truth.</p>
        ${example({
          title: 'Sana\'s weekly routine at Noor Crafts',
          scenario: 'Noor Crafts is GST-registered and sells to dealers on credit and to online buyers on prepayment. Sana keeps up with the books in about 30 minutes a week.',
          steps: [
            { label: 'Every sale gets a numbered tax invoice', html: 'even the ' + inr(1500) + ' walnut box sold to a tourist, so that GSTR-1 matches the bank.' },
            { label: 'Every purchase bill is photographed', html: 'and filed by month. The weaver is not GST-registered, so his bill has no GST; the courier company\'s bill does, and that GST is input tax credit she can claim.' },
            { label: 'Saturday: enter the week in Tally', html: 'and compare the bank balance in the software with the actual balance. A difference means a missing voucher.' },
            { label: 'Month end: trial balance and GST returns', html: 'GSTR-1 by the 11th, GSTR-3B by the 20th. The numbers come straight from the books.' }
          ],
          result: 'When J&amp;K Bank reviews her ' + inr(100000) + ' loan each year, Sana sends the P&amp;L and balance sheet the same day. The books were never a separate job; they were a by-product of running the business carefully.'
        })}
      `
    }
  ],

  keyPoints: [
    'Accounting = record, classify, summarise, interpret. Book-keeping is the first two; accounting adds judgement.',
    'The same books serve the owner, the bank, the GST and income-tax departments, suppliers and investors. Each reads a different page.',
    'Cash is what you have today; profit is what you earned in the period. A business can be profitable and short of cash at the same time.',
    'The cycle is transaction, voucher, journal, ledger, trial balance, adjustments, final accounts. Software does the middle; you must get the voucher right.',
    'Business entity, accrual, matching, prudence and consistency are the concepts you will use most. Keep the business and the owner apart in the books.',
    'Three habits make accounting possible: a separate bank account, a voucher for every rupee, a fixed weekly time to enter them.'
  ],

  practice: [
    { label: 'Accounting Simulator', sub: 'Enter a week of transactions and watch the cycle run from journal to balance sheet', href: 'accounting-lab/index.html', icon: '⚖️' },
    { label: 'Concepts cheatsheet', sub: 'The twelve concepts on one page', href: 'cheatsheets/index.html', icon: '📑' },
    { label: 'Quiz: Accounting basics', sub: 'Ten quick questions on users, concepts and the cycle', href: 'quiz/index.html', icon: '❓' }
  ],

  quiz: [
    {
      q: 'Rohit pays his daughter\'s school fees of ₹18,000 from the Gupta Kirana bank account. Which concept decides how this is recorded?',
      options: ['Money measurement', 'Business entity', 'Matching', 'Materiality'],
      answer: 1,
      why: 'The business and the owner are separate persons in the books. The fees are not a shop expense; they are drawings by the owner, which reduce capital.'
    },
    {
      q: 'Noor Crafts delivers shawls worth ₹24,500 to a Delhi dealer on 29 March and receives payment on 12 April. Under the accrual concept, in which year is the sale recorded?',
      options: ['The year ending 31 March, when the goods were delivered', 'The next year, when the money arrived', 'Half in each year', 'Whichever year has lower tax'],
      answer: 0,
      why: 'Accrual records revenue when it is earned, which is when the goods are delivered and the customer becomes liable to pay. The date of payment does not matter.'
    },
    {
      q: 'Which of these is book-keeping rather than accounting?',
      options: ['Deciding that a ₹12,000 khata debt will probably never be collected and providing for it', 'Entering the day\'s purchase bills into the purchase register', 'Choosing whether to depreciate a laptop over three or five years', 'Judging from the P&amp;L whether to hire a second helper'],
      answer: 1,
      why: 'Recording transactions in the register is book-keeping: a clerical task with no judgement. The other three involve estimates or decisions, which is the accounting part.'
    },
    {
      q: 'A kirana store shows a profit of ₹4,30,000 for the year but its bank balance fell during the same year. Which statement is correct?',
      options: ['The profit figure must be wrong', 'The profit is real; cash may be tied up in stock, khata debtors or loan repayments', 'Profit and cash are always the same, so one of the books is missing', 'The store must have been robbed'],
      answer: 1,
      why: 'Profit measures what was earned in the period; cash measures what is in the bank. Buying extra stock, giving credit to customers and repaying a loan all reduce cash without reducing profit.'
    },
    {
      q: 'Which step of the accounting cycle cannot be done by accounting software on its own?',
      options: ['Posting to the ledger', 'Preparing the trial balance', 'Collecting the voucher that proves the transaction happened', 'Totalling the sales account'],
      answer: 2,
      why: 'Software can post, total and balance, but only you can produce the invoice, bill or receipt that proves a transaction. A missing or wrong voucher corrupts every later step.'
    }
  ],

  glossary: [
    ['Voucher', 'The document that proves a transaction: an invoice, a bill, a receipt, a bank entry. Every journal entry should rest on one.'],
    ['Accrual', 'Recording income when it is earned and expenses when they are incurred, regardless of when cash is paid or received.'],
    ['Going concern', 'The assumption that the business will keep operating, so assets are shown at cost less depreciation rather than at forced-sale value.'],
    ['Prudence', 'Count losses as soon as they are likely, count gains only when they are certain. Also called conservatism.'],
    ['Final accounts', 'The year-end statements: the Trading and Profit &amp; Loss account (showing profit) and the Balance Sheet (showing position).'],
    ['Materiality', 'Only items big enough to affect a reader\'s decision need exact treatment; trivial items can be expensed at once.']
  ]
};
