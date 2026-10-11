import { diagrams, example, callout, checklist, table, terms, inr } from '../lesson-kit.js';

/**
 * Lesson 2.7 - Cash book & petty cash
 * Running examples: Gupta Kirana (Rohit, Jaipur) for the double-column cash
 * book; Noor Crafts (Sana, Srinagar) for the petty cash book.
 */
export default {
  id: 'acc-07-cash-book-petty-cash',
  title: 'Cash book & petty cash',

  intro: `<p>Money is the one thing every business touches every day, so it gets its own book. The <strong>cash book</strong> records
    every rupee received and paid, in cash and through the bank, and because it is written in ledger form it is both a journal and
    a ledger at once. The <strong>petty cash book</strong> is its small cousin for the ₹40 auto fare and the ₹85 speed post, so tiny
    payments do not clutter the main book.</p>`,

  outcomes: [
    'Write up a single, double or triple column cash book and balance it at the end of a period.',
    'Record a contra entry correctly when cash moves to the bank or back, and know why it needs no ledger posting.',
    'Run a petty cash book on the imprest system with analytical columns, and apply the simple controls that stop small cash leaking.'
  ],

  sections: [
    {
      heading: 'Money in, money out: one book for cash and bank',
      short: 'The picture',
      html: `
        <p>Think of two pockets: the cash drawer at the counter and the bank account that receives UPI and NEFT. Receipts go in,
        payments come out, and sometimes money just moves from one pocket to the other. The cash book tracks both side by side.</p>
        ${diagrams.flow(
          [
            { label: 'Receipts', sub: 'sales, debtors, UPI', tone: 'a' },
            { label: 'Cash drawer', sub: 'Cash column', tone: 'c' },
            { label: 'Deposit (contra)', sub: 'cash to bank', tone: 'n' },
            { label: 'Bank account', sub: 'Bank column', tone: 'b' },
            { label: 'Payments', sub: 'suppliers, rent, wages', tone: 'e' }
          ],
          { title: 'How money flows through the cash book', caption: 'Receipts are written on the debit (left) side, payments on the credit (right) side, whichever pocket they touch. The deposit in the middle appears on both sides at once.' }
        )}
        <p>The cash book is a <strong>journal</strong> because transactions are first recorded here, in date order, with a narration.
        It is a <strong>ledger</strong> because the Cash column <em>is</em> the Cash account and the Bank column <em>is</em> the Bank account;
        no separate Cash A/c or Bank A/c exists. A cash column always balances as a debit (you cannot pay out cash you do not have);
        a bank column can show a credit balance, which means an overdraft.</p>
      `
    },
    {
      heading: 'Three formats, growing as the business grows',
      short: 'Formats',
      html: `
        ${terms([
          ['Single column', 'Just a Cash column on each side. Fine for a business with no bank account, which today is almost nobody.'],
          ['Double column', 'Cash and Bank columns on each side. The everyday format for a kirana, café or small brand.'],
          ['Triple column', 'Adds a Discount column on each side: <em>discount allowed</em> to customers on the debit side, <em>discount received</em> from suppliers on the credit side. Discount columns are totalled, never balanced, because they are not money; the totals go to the Discount Allowed and Discount Received accounts.']
        ])}
        ${table(
          ['Dr. (Receipts)', 'Disc. allowed', 'Cash', 'Bank', 'Cr. (Payments)', 'Disc. received', 'Cash', 'Bank'],
          [
            ['Date, Particulars, L.F.', '₹', '₹', '₹', 'Date, Particulars, L.F.', '₹', '₹', '₹'],
            ['To Sharma (khata ₹3,100 settled for ₹3,000)', '100', '3,000', '', 'By Agarwal Traders (bill ₹10,000 paid ₹9,800)', '200', '', '9,800']
          ],
          { caption: 'Triple column cash book: the discount columns record what was given up, not what moved' }
        )}
        <p>A <strong>contra entry</strong> (marked "C" in the L.F. column) is a transaction between the two columns. Cash deposited into the bank
        is written on the debit side in the Bank column ("To Cash") and on the credit side in the Cash column ("By Bank"); a withdrawal for
        the till is the mirror image. Both halves of the double entry are already inside the cash book, so a contra entry is
        <strong>never posted</strong> to the ledger.</p>
        ${callout('warning', 'The commonest cash book mistake is recording only one half of a contra entry. Enter the deposit under Bank but forget to reduce Cash, and the book shows ₹20,000 more than the drawer; the owner suspects a theft that never happened.')}
      `
    },
    {
      heading: 'Gupta Kirana: a week in the double-column cash book',
      short: 'Cash book',
      html: `
        ${example({
          title: 'Gupta Kirana, 1 to 7 September',
          scenario: 'Rohit opens the week with ₹8,000 in the drawer and ₹45,000 in the bank. Counter sales come in cash and by UPI (UPI goes straight to the bank column). On 3 September he deposits ₹20,000 of cash into the bank and pays the distributor by NEFT.',
          steps: [
            { label: 'Debit side (receipts).', html: 'Opening balances, cash sales ₹14,500 and ₹16,800, UPI sales ₹9,200 and ₹12,600, ₹3,000 from Sharma who settles his khata, and the ₹20,000 deposit in the Bank column marked C.' },
            { label: 'Credit side (payments).', html: '₹9,500 cash to a wholesaler, the same ₹20,000 deposit in the Cash column marked C, ₹38,000 NEFT to the HUL distributor, ₹12,000 shop rent by NEFT, ₹2,400 electricity and ₹3,500 wages in cash.' },
            { label: 'Balance each column separately.', html: 'Cash: ₹42,300 received − ₹35,400 paid = <strong>₹6,900</strong> c/d. Bank: ₹86,800 − ₹50,000 = <strong>₹36,800</strong> c/d.' }
          ],
          result: 'Both columns balance. Rohit counts the drawer on Sunday night: ₹6,900. The book and the drawer agree, which is the whole point.'
        })}
        ${table(
          ['Date', 'Receipts (Dr.)', 'Cash (₹)', 'Bank (₹)'],
          [
            ['1 Sep', 'To Balance b/d', inr(8000), inr(45000)],
            ['1 Sep', 'To Sales (counter cash)', inr(14500), ''],
            ['1 Sep', 'To Sales (UPI)', '', inr(9200)],
            ['3 Sep', 'To Cash (C)', '', inr(20000)],
            ['4 Sep', 'To Sharma (khata settled)', inr(3000), ''],
            ['5 Sep', 'To Sales (counter cash)', inr(16800), ''],
            ['5 Sep', 'To Sales (UPI)', '', inr(12600)]
          ],
          { align: ['l', 'l', 'r', 'r'], caption: 'Gupta Kirana: cash book, debit side', total: ['', 'Total', inr(42300), inr(86800)] }
        )}
        ${table(
          ['Date', 'Payments (Cr.)', 'Cash (₹)', 'Bank (₹)'],
          [
            ['2 Sep', 'By Purchases (wholesaler, cash)', inr(9500), ''],
            ['3 Sep', 'By Bank (C)', inr(20000), ''],
            ['3 Sep', 'By HUL distributor (NEFT)', '', inr(38000)],
            ['4 Sep', 'By Shop rent (NEFT)', '', inr(12000)],
            ['5 Sep', 'By Electricity', inr(2400), ''],
            ['6 Sep', 'By Wages', inr(3500), ''],
            ['7 Sep', 'By Balance c/d', inr(6900), inr(36800)]
          ],
          { align: ['l', 'l', 'r', 'r'], caption: 'Gupta Kirana: cash book, credit side', total: ['', 'Total', inr(42300), inr(86800)] }
        )}
        ${callout('tip', 'Keep UPI and card receipts in the <strong>Bank</strong> column, not Cash: the money never touched the drawer. If a settlement lands a day late, the bank reconciliation in the next lesson explains the gap.')}
      `
    },
    {
      heading: 'The petty cash book and the imprest system',
      short: 'Petty cash',
      html: `
        <p>Small payments are frequent, urgent and annoying to book one by one. So the main cashier hands a fixed sum, the
        <strong>float</strong>, to a petty cashier, who pays the small bills, collects a voucher for each, and at month end is reimbursed
        <em>exactly what was spent</em> so the float returns to its fixed amount. This is the <strong>imprest system</strong>. Its beauty
        is control: at any moment, cash in the tin plus vouchers in the file must equal the float.</p>
        ${diagrams.cycle(
          [
            { label: 'Float ₹3,000', tone: 'a' },
            { label: 'Spend on small items', tone: 'e' },
            { label: 'Keep a voucher each', tone: 'c' },
            { label: 'Reimburse amount spent', tone: 'b' }
          ],
          { title: 'The imprest cycle', caption: 'The reimbursement equals the total of the vouchers, which restores the float to its fixed figure for the next month.' }
        )}
        <p>The book uses <strong>analytical columns</strong>: each payment is entered once in the Total column and again under its head
        (postage, conveyance, stationery, refreshments). At month end only the column totals are posted to the ledger, so a month of
        thirty small payments becomes four ledger entries.</p>
        ${example({
          title: 'Noor Crafts: petty cash for September, ₹3,000 imprest',
          scenario: 'On 1 September Sana gives her helper a ₹3,000 float. Every payment needs a signed voucher or a bill.',
          steps: [
            { label: 'Record each payment', html: 'in the Total column and in its analysis column. Ten payments during the month, all under ₹350.' },
            { label: 'Total the columns.', html: 'Postage ₹145 + Conveyance ₹340 + Stationery ₹745 + Refreshments ₹370 = <strong>₹1,600</strong>, which must equal the Total column.' },
            { label: 'Balance and reimburse.', html: 'Cash left in the tin = ₹3,000 − ₹1,600 = ₹1,400. On 1 October Sana reimburses ₹1,600 against the vouchers, and the float is ₹3,000 again.' }
          ],
          result: 'Four ledger postings (Postage ₹145, Conveyance ₹340, Stationery ₹745, Refreshments ₹370) replace ten journal entries, and the main cash book shows a single ₹1,600 payment to petty cash.',
          tone: 'c'
        })}
        ${table(
          ['Rec. (₹)', 'Date', 'Particulars', 'V. no.', 'Total (₹)', 'Postage', 'Conveyance', 'Stationery', 'Refreshments'],
          [
            [inr(3000), '1 Sep', 'To Cash (imprest)', '', '', '', '', '', ''],
            ['', '2 Sep', 'Auto to courier hub', '1', '120', '', '120', '', ''],
            ['', '4 Sep', 'Speed post to Delhi dealer', '2', '85', '85', '', '', ''],
            ['', '6 Sep', 'Printer paper', '3', '240', '', '', '240', ''],
            ['', '9 Sep', 'Tea for weaver meeting', '4', '150', '', '', '', '150'],
            ['', '12 Sep', 'Bus fare to bank', '5', '40', '', '40', '', ''],
            ['', '15 Sep', 'Registered post', '6', '60', '60', '', '', ''],
            ['', '18 Sep', 'Tags and thread labels', '7', '310', '', '', '310', ''],
            ['', '22 Sep', 'Auto to Lal Chowk dealer', '8', '180', '', '180', '', ''],
            ['', '25 Sep', 'Snacks for packing team', '9', '220', '', '', '', '220'],
            ['', '28 Sep', 'Envelopes and tape', '10', '195', '', '', '195', ''],
            ['', '30 Sep', 'By Balance c/d', '', '1,400', '', '', '', ''],
            [inr(1400), '1 Oct', 'To Balance b/d', '', '', '', '', '', ''],
            [inr(1600), '1 Oct', 'To Cash (reimbursement)', '', '', '', '', '', '']
          ],
          { align: ['r', 'l', 'l', 'l', 'r', 'r', 'r', 'r', 'r'], caption: 'Noor Crafts: analytical petty cash book, September', total: ['3,000', '', 'Total', '', '3,000', '145', '340', '745', '370'] }
        )}
      `
    },
    {
      heading: 'Controls: how small cash stays honest',
      short: 'Controls',
      html: `
        <p>Petty cash is where leakage starts, not because people are dishonest but because "I will put the bill in later" never happens.
        The imprest system is the first control: nobody can spend beyond the float without coming back with vouchers. Add these.</p>
        ${checklist([
          'A <strong>voucher for every payment</strong>, numbered, signed by the spender and approved by the owner, with the bill attached.',
          'A <strong>ceiling per payment</strong> (say ₹500). Anything bigger goes through the main cash book by UPI or NEFT, where the bank leaves a trail.',
          '<strong>Surprise counts.</strong> Once a month, unannounced, count the tin: cash + vouchers must equal the float. A shortfall is a conversation that day, not at year end.',
          'Reimburse <strong>only against vouchers</strong>, and only up to the float. Never top up "a bit extra".',
          'The petty cashier does not also write the main cash book. Separating the two jobs is the cheapest fraud control there is.'
        ], { title: 'Five petty cash controls' })}
        ${callout('india', 'Income-tax rules disallow a cash expense above ₹10,000 to one person in a day (section 40A(3)), and GST input credit needs a tax invoice. A ₹3,000 float stays safely inside both; for anything larger use the bank and ask for a GST invoice.')}
      `
    }
  ],

  keyPoints: [
    'The cash book is a journal (first record, in date order) and a ledger (the Cash and Bank columns are the accounts themselves).',
    'Receipts on the debit side, payments on the credit side. A cash column always balances as a debit; a credit bank balance is an overdraft.',
    'A contra entry (C) records cash moving to the bank or back. It appears on both sides of the cash book and is never posted to the ledger.',
    'In a triple column cash book, discount columns are totalled, not balanced, and posted to Discount Allowed and Discount Received.',
    'The imprest system gives the petty cashier a fixed float and reimburses exactly what was spent, so cash in hand plus vouchers always equals the float.',
    'Analytical columns turn dozens of small payments into a handful of month-end ledger postings. Vouchers, a per-payment ceiling and surprise counts keep it honest.'
  ],

  practice: [
    { label: 'Accounting Simulator', sub: 'Record receipts, payments and a contra entry and see the cash book balance', href: 'accounting-lab/index.html', icon: '⚖️' },
    { label: 'Excel Lab', sub: 'Build a petty cash register with analysis columns that total themselves', href: 'excel-lab/index.html', icon: '📊' },
    { label: 'Bank reconciliation (next lesson)', sub: 'Why the Bank column and the bank statement disagree, and how to fix it', href: 'learn/lesson.html?id=acc-08-bank-reconciliation', icon: '🏦' }
  ],

  quiz: [
    {
      q: 'Rohit withdraws ₹5,000 from the bank for the shop drawer. How is this recorded in a double-column cash book?',
      options: [
        'Debit Cash column ₹5,000 only',
        'Debit Cash column ₹5,000 and credit Bank column ₹5,000, both marked C, no ledger posting',
        'Credit Cash column ₹5,000 and debit Bank column ₹5,000, then post to the ledger',
        'Only in the bank statement; the cash book does not change'
      ],
      answer: 1,
      why: 'Cash comes in (debit, Cash column) and bank goes out (credit, Bank column). Both halves sit inside the cash book, so it is a contra entry and needs no ledger posting.'
    },
    {
      q: 'Noor Crafts\' petty cash float is ₹3,000. During the month ₹2,150 is spent and vouchers for ₹2,150 are on file. How much is reimbursed at month end under the imprest system?',
      options: ['₹3,000', '₹850', '₹2,150', 'Whatever the petty cashier asks for'],
      answer: 2,
      why: 'Reimbursement equals the amount spent and vouched, ₹2,150, which brings the ₹850 left in the tin back up to the ₹3,000 float.'
    },
    {
      q: 'In a triple column cash book, what happens to the Discount Allowed column at the end of the month?',
      options: [
        'It is balanced like the Cash column and carried down',
        'It is totalled and the total is posted to the debit of Discount Allowed A/c',
        'It is added to the Cash column total',
        'It is ignored because discounts are not transactions'
      ],
      answer: 1,
      why: 'Discount columns are memorandum columns: no money moves, so they are not balanced. The total is posted to the Discount Allowed account (an expense, debit) in the ledger.'
    },
    {
      q: 'During a surprise count, the petty cash tin holds ₹900 and the vouchers total ₹1,850 against a ₹3,000 float. What does this tell you?',
      options: [
        'Everything is in order',
        '₹250 is unaccounted for and needs explaining today',
        'The float should be raised to ₹3,250',
        'The vouchers are over-stated by ₹250'
      ],
      answer: 1,
      why: 'Cash ₹900 + vouchers ₹1,850 = ₹2,750, which is ₹250 short of the ₹3,000 float. Either a voucher is missing or cash is. The imprest rule makes the gap visible immediately.'
    }
  ],

  glossary: [
    ['Contra entry', 'A cash book entry that moves money between the Cash and Bank columns (deposit or withdrawal). Marked C and never posted to the ledger.'],
    ['Imprest', 'A fixed sum of money advanced to a petty cashier and restored to the same amount at each reimbursement.'],
    ['Analytical petty cash book', 'A petty cash book with a separate column for each type of expense so that only column totals are posted to the ledger.'],
    ['Discount allowed', 'Cash discount given to a customer for paying promptly; an expense recorded in the debit-side discount column.'],
    ['Discount received', 'Cash discount a supplier gives you for paying promptly; an income recorded in the credit-side discount column.'],
    ['Voucher', 'A written, numbered and signed record supporting a payment, with the bill or receipt attached.']
  ]
};
