import { fig, svg, diagrams, example, callout, steps, table, tAccount, terms, inr } from '../lesson-kit.js';

/**
 * Lesson 2.5 - Ledger posting & T-accounts
 * Posts the first six Noor Crafts entries from lesson 2.4 and balances them.
 */

/** Anatomy of a T-account, drawn with the kit's SVG helpers. */
function tAnatomy() {
  const L = (x, y, s, o = {}) => svg.text(x, y, s, { size: 10.5, anchor: 'start', ...o });
  const R = (x, y, s, o = {}) => svg.text(x, y, s, { size: 10.5, anchor: 'end', ...o });
  const row = (y, side, date, part, jf, amt, o = {}) => {
    const x0 = side === 'L' ? 30 : 335;
    return L(x0, y, date, { tone: 'muted', ...o }) + L(x0 + 62, y, part, o) + L(x0 + 196, y, jf, { tone: 'muted', ...o }) + R(x0 + 275, y, amt, { weight: 700, ...o });
  };
  const body = `
    ${svg.box(200, 8, 240, 34, 'Bank A/c', { tone: 'a', size: 14 })}
    ${svg.text(600, 25, 'Folio 2', { size: 11, tone: 'muted', anchor: 'end' })}
    ${svg.line(20, 54, 620, 54, { tone: 'n', width: 2 })}
    ${svg.line(320, 54, 320, 252, { tone: 'n', width: 2 })}
    ${svg.text(30, 70, 'Dr.', { size: 13, weight: 800, tone: 'a', anchor: 'start' })}
    ${svg.text(610, 70, 'Cr.', { size: 13, weight: 800, tone: 'b', anchor: 'end' })}
    ${L(92, 70, 'Particulars', { tone: 'muted', size: 9.5 })}${L(226, 70, 'J.F.', { tone: 'muted', size: 9.5 })}${R(305, 70, 'Amount', { tone: 'muted', size: 9.5 })}
    ${L(397, 70, 'Particulars', { tone: 'muted', size: 9.5 })}${L(531, 70, 'J.F.', { tone: 'muted', size: 9.5 })}${R(610, 70, 'Amount', { tone: 'muted', size: 9.5 })}
    ${row(96, 'L', '1 Apr', 'To Capital A/c', '1', inr(200000))}
    ${row(119, 'L', '6 Apr', 'To J&K Bank Loan', '4', inr(100000))}
    ${row(142, 'L', '7 Apr', 'To Sales A/c', '5', inr(35000))}
    ${row(165, 'L', '7 Apr', 'To Output IGST', '5', inr(6300))}
    ${row(96, 'R', '3 Apr', 'By Purchases A/c', '2', inr(80000))}
    ${row(119, 'R', '8 Apr', 'By Rent A/c', '6', inr(8000))}
    ${row(200, 'R', '30 Apr', 'By Balance c/d', '', inr(253300), { tone: 'c' })}
    ${svg.text(397, 183, 'balancing figure, smaller side', { size: 9, tone: 'c', anchor: 'start' })}
    ${svg.line(20, 214, 620, 214, { tone: 'n' })}
    ${R(305, 230, inr(341300), { weight: 800 })}${R(610, 230, inr(341300), { weight: 800 })}
    ${svg.line(20, 243, 620, 243, { tone: 'n' })}${svg.line(20, 247, 620, 247, { tone: 'n' })}
    ${row(272, 'L', '1 May', 'To Balance b/d', '', inr(253300), { tone: 'a' })}
    ${svg.text(335, 272, 'opening balance for next period', { size: 9, tone: 'a', anchor: 'start' })}
  `;
  return fig({ title: 'Anatomy of a T-account', caption: 'Debit side on the left, credit side on the right, each with date, the other account\'s name, the journal folio and the amount. The balancing figure (c/d) makes both totals equal; it is brought down (b/d) on the opposite side as the opening balance.', viewBox: '0 0 640 290', body });
}

export default {
  id: 'acc-05-ledger-and-t-accounts',
  title: 'Ledger posting & T-accounts',

  intro: `<p>The journal tells you what happened on each date. It cannot tell you how much is in the bank, how much
    Ahmad Woodworks is owed, or what the month\'s sales were. For that, every entry is copied into the <strong>ledger</strong>,
    where each account has its own page, and the page is balanced. The ledger balance is the number you actually use.</p>`,

  outcomes: [
    'Post any journal entry to the ledger, on the correct side, with the "To" and "By" convention and folio numbers.',
    'Balance an account with balance c/d and b/d, and read what a debit or credit balance means for each type of account.',
    'Prepare a list of ledger balances that is ready to become a trial balance.'
  ],

  sections: [
    {
      heading: 'From journal to ledger',
      short: 'Posting',
      html: `
        <p>The journal is the <em>book of original entry</em>; the ledger is the <em>principal book</em>. The journal is sorted by
        date, the ledger by account. Posting is simply copying each half of a journal entry onto the page of the account it names.
        Nothing new is decided at this stage; the debit and credit were fixed when the entry was written.</p>
        ${diagrams.flow(
          [
            { label: 'Journal', sub: 'entries in date order', tone: 'c' },
            { label: 'Ledger', sub: 'one page per account', tone: 'a' },
            { label: 'Trial balance', sub: 'list of all balances', tone: 'b' }
          ],
          { title: 'Journal to ledger to trial balance', caption: 'Each arrow is a copying step. If the journal was right, the ledger is right; if the ledger is balanced correctly, the trial balance agrees.' }
        )}
        ${steps([
          'Open the ledger page of the <strong>debited</strong> account. On its <strong>debit (left) side</strong> write the date, then "To" followed by the name of the account that was <em>credited</em>, then the amount.',
          'Open the page of the <strong>credited</strong> account. On its <strong>credit (right) side</strong> write the date, then "By" followed by the name of the account that was <em>debited</em>, then the same amount.',
          'Write the journal page number in the J.F. (journal folio) column of each ledger entry, and the ledger page numbers back in the L.F. column of the journal. Now any figure can be traced both ways.'
        ], { title: 'Posting one entry' })}
        ${terms([
          ['Same amount, opposite side', 'The ₹8,000 rent entry puts ₹8,000 on the debit side of Rent A/c and ₹8,000 on the credit side of Bank A/c. One entry, two pages, two sides.'],
          ['"To" and "By"', 'Convention only: "To" opens every line on the debit side, "By" every line on the credit side, and the name that follows is the <em>other</em> account in the entry. So you never write "To Bank" inside Bank A/c itself.'],
          ['Folio', 'A page number. L.F. in the journal points to the ledger page; J.F. in the ledger points back to the journal page. In software the voucher number does the same job.']
        ])}
        ${callout('tip', 'A compound entry is posted line by line. The Delhi sale (Bank Dr ' + inr(41300) + '; To Sales ' + inr(35000) + '; To Output IGST ' + inr(6300) + ') puts two lines on the debit side of Bank A/c, "To Sales" and "To Output IGST", not one line for ' + inr(41300) + '. That way the Bank page shows where the money came from.')}
      `
    },
    {
      heading: 'Anatomy of a T-account',
      short: 'T-account',
      html: `
        <p>A ledger page is drawn as a large T. The account name sits on the crossbar; the stem divides the debit side from
        the credit side. Textbooks and exams use this shape; Tally shows the same information as a two-column report. Here is the
        Bank A/c of Noor Crafts after the first six entries of April, already balanced.</p>
        ${tAnatomy()}
        ${table(
          ['Column', 'On the debit side', 'On the credit side'],
          [
            ['Date', 'Date of the journal entry', 'Date of the journal entry'],
            ['Particulars', '"To" + the account credited in the entry', '"By" + the account debited in the entry'],
            ['J.F.', 'Journal page (or voucher no.) the line came from', 'Same'],
            ['Amount', 'Debits to this account', 'Credits to this account']
          ],
          { caption: 'The four columns are mirrored on both sides' }
        )}
      `
    },
    {
      heading: 'Balancing an account',
      short: 'Balancing',
      html: `
        <p>At the end of a period (month, quarter or year) each account is <strong>balanced</strong>: you find the difference
        between the two sides and record it so that the account can start the next period with a single figure.</p>
        ${steps([
          'Add up the debit side and the credit side separately. Bank A/c: debits ' + inr(341300) + ', credits ' + inr(88000) + '.',
          'The difference is the balance: ' + inr(253300) + '. It is a <strong>debit balance</strong> because the debit side is bigger.',
          'Write the difference on the <strong>smaller</strong> side as "By Balance c/d" (carried down). Now both sides total ' + inr(341300) + '. Rule a double line under the totals.',
          'Below the line, bring the balance down on the <strong>opposite</strong> side as "To Balance b/d" (brought down) dated the first day of the next period. The ' + inr(253300) + ' is now the opening debit balance.'
        ], { title: 'Four steps to balance' })}
        <p>Which side the balance falls on is not random. It tells you what kind of account you are looking at, and a balance on
        the "wrong" side is a warning.</p>
        ${table(
          ['Account type', 'Normal balance', 'A debit balance means', 'A credit balance means'],
          [
            ['Asset (Bank, Cash, Stock, Debtors, Laptop)', 'Debit', 'What the business has or is owed', 'Bank: overdraft. Debtor: customer overpaid or a return is pending. Cash: impossible, an error'],
            ['Liability (Creditors, Loan, Output GST)', 'Credit', 'Supplier overpaid, or goods returned after paying', 'What the business owes'],
            ['Capital', 'Credit', 'Losses and drawings have exceeded the owner\'s investment', 'Owner\'s net stake in the business'],
            ['Revenue (Sales, Discount Received)', 'Credit', 'Error, or returns larger than sales', 'Income earned in the period'],
            ['Expense (Purchases, Rent, Salary)', 'Debit', 'Cost incurred in the period', 'Error, or a refund larger than the expense']
          ],
          { caption: 'Reading a balance by account type' }
        )}
        ${callout('warning', 'A credit balance on Bank A/c in your own books means you are overdrawn, not that the bank has credited you. A debit balance on a supplier means you paid more than you owed, which usually points to a bill that was never entered. Chase both before the trial balance, not after.')}
        ${callout('note', '<strong>Opening balances.</strong> A brand-new business starts every account at zero, as Noor Crafts does here. From the second year on, every balance-sheet account (assets, liabilities, capital) begins with "To" or "By Balance b/d" taken from last year\'s closing balance sheet. Revenue and expense accounts start at zero every year because they were closed to profit and loss. In Tally this is the Opening Balance field when you create a ledger.')}
      `
    },
    {
      heading: 'Worked example: posting the first six entries',
      short: 'Worked example',
      html: `
        ${example({
          title: 'Noor Crafts, 1 to 8 April: from journal to balanced ledgers',
          scenario: 'These are the first six entries from <a href="learn/lesson.html?id=acc-04-journal-entries">lesson 2.4</a>. Post each one twice, then balance the accounts at 30 April.',
          steps: [
            { label: 'List the entries', html: 'and the accounts they touch (table below). Six entries open nine accounts: Bank, Capital, Purchases, Ahmad Woodworks, J&amp;K Bank Loan, Sales, Output IGST, Rent.' },
            { label: 'Post each half.', html: 'Entry 1: Bank A/c debit side "To Capital" ' + inr(200000) + '; Capital A/c credit side "By Bank" ' + inr(200000) + '. Entry 5 is compound: Bank A/c gets two debit lines, Sales A/c and Output IGST A/c get one credit line each.' },
            { label: 'Balance.', html: 'Bank: ' + inr(341300) + ' − ' + inr(88000) + ' = ' + inr(253300) + ' debit. Purchases: ' + inr(125000) + ' debit, nothing on the credit side. Sales, Ahmad Woodworks and Capital have only credit entries, so their balances are credit balances.' }
          ],
          result: 'Five balanced accounts are shown below. Every rupee that was debited somewhere was credited somewhere else, so the debit balances and credit balances across all nine accounts will be equal. That equality is the trial balance.',
          tone: 'b'
        })}
        ${table(
          ['#', 'Date', 'Debit', 'Credit', 'Amount'],
          [
            ['1', '1 Apr', 'Bank', 'Capital', inr(200000)],
            ['2', '3 Apr', 'Purchases', 'Bank', inr(80000)],
            ['3', '5 Apr', 'Purchases', 'Ahmad Woodworks', inr(45000)],
            ['4', '6 Apr', 'Bank', 'J&K Bank Loan', inr(100000)],
            ['5', '7 Apr', 'Bank ' + inr(41300), 'Sales ' + inr(35000) + '; Output IGST ' + inr(6300), inr(41300)],
            ['6', '8 Apr', 'Rent', 'Bank', inr(8000)]
          ],
          { align: ['l', 'l', 'l', 'l', 'r'], caption: 'The six entries to be posted' }
        )}
        ${tAccount('Bank',
          [{ label: 'To Capital A/c', amount: 200000 }, { label: 'To J&K Bank Loan A/c', amount: 100000 }, { label: 'To Sales A/c', amount: 35000 }, { label: 'To Output IGST A/c', amount: 6300 }],
          [{ label: 'By Purchases A/c', amount: 80000 }, { label: 'By Rent A/c', amount: 8000 }]
        )}
        ${tAccount('Purchases',
          [{ label: 'To Bank A/c', amount: 80000 }, { label: 'To Ahmad Woodworks A/c', amount: 45000 }],
          []
        )}
        ${tAccount('Sales', [], [{ label: 'By Bank A/c', amount: 35000 }])}
        ${tAccount('Ahmad Woodworks (creditor)', [], [{ label: 'By Purchases A/c', amount: 45000 }])}
        ${tAccount('Capital', [], [{ label: 'By Bank A/c', amount: 200000 }])}
        <p>Notice how each T-account reads. Bank A/c says: money came in from the owner, the lender and a sale, went out for
        stock and rent, and ' + inr(253300) + ' is left. Ahmad Woodworks A/c says: nothing has been paid yet, ' + inr(45000) + ' is owed.
        Purchases A/c says: ' + inr(125000) + ' of goods were bought this month. You do not need the journal to answer any of those
        questions any more.</p>
      `
    },
    {
      heading: 'Where the balances go next',
      short: 'To trial balance',
      html: `
        <p>Balancing is not the end. Each closing balance is lifted into a two-column list, debit balances on the left,
        credit balances on the right. If the posting was done correctly the two columns agree. That list is the
        <strong>trial balance</strong>, the subject of <a href="learn/lesson.html?id=acc-06-trial-balance">lesson 2.6</a>.</p>
        ${table(
          ['Account', 'Debit balance', 'Credit balance'],
          [
            ['Bank', inr(253300), ''],
            ['Purchases', inr(125000), ''],
            ['Rent', inr(8000), ''],
            ['Capital', '', inr(200000)],
            ['J&K Bank Loan', '', inr(100000)],
            ['Ahmad Woodworks', '', inr(45000)],
            ['Sales', '', inr(35000)],
            ['Output IGST', '', inr(6300)]
          ],
          { align: ['l', 'r', 'r'], caption: 'Ledger balances at 8 April, ready for the trial balance', total: ['Total', inr(386300), inr(386300)] }
        )}
        ${callout('remember', 'The balance is the number that matters. Assets and expenses end up with debit balances; liabilities, capital and revenue with credit balances. Balance-sheet accounts carry their balance into next year; revenue and expense accounts are closed to profit and loss and start again at zero.')}
        ${callout('tip', 'In Tally, open any ledger (Display More Reports, Account Books, Ledger) and you are looking at a T-account laid out in two columns, with the opening balance at the top and the closing balance at the bottom. Read your Bank, Sundry Debtors and Sundry Creditors ledgers every week; they answer "how much do I have, who owes me, whom do I owe" without a single calculation.')}
      `
    }
  ],

  keyPoints: [
    'The journal is sorted by date; the ledger is sorted by account. Posting copies each half of an entry to its account\'s page.',
    'Post the same amount on the opposite side: the debited account gets a debit-side line starting "To", the credited account gets a credit-side line starting "By", each naming the other account.',
    'Folio numbers (L.F. in the journal, J.F. in the ledger) let you trace any figure in either direction.',
    'To balance: total both sides, write the difference on the smaller side as Balance c/d, rule off, bring it down on the opposite side as Balance b/d.',
    'Assets and expenses normally carry debit balances; liabilities, capital and revenue carry credit balances. A balance on the other side is a warning (overdraft, overpayment or an error).',
    'The list of closing balances, debits in one column and credits in the other, is the trial balance.'
  ],

  practice: [
    { label: 'Accounting Simulator', sub: 'Post entries and watch each T-account fill and balance', href: 'accounting-lab/index.html', icon: '⚖️' },
    { label: 'Excel Lab: ledger template', sub: 'A two-sided ledger sheet with automatic balancing', href: 'excel-lab/index.html', icon: '📗' },
    { label: 'Ledger cheatsheet', sub: 'Posting rules and the balancing steps on one card', href: 'cheatsheets/index.html', icon: '📑' }
  ],

  quiz: [
    {
      q: 'The journal entry is "Rent A/c Dr ₹8,000; To Bank A/c ₹8,000". How is it posted in Bank A/c?',
      options: ['Debit side: To Rent A/c ₹8,000', 'Credit side: By Rent A/c ₹8,000', 'Credit side: By Bank A/c ₹8,000', 'Debit side: By Rent A/c ₹8,000'],
      answer: 1,
      why: 'Bank was credited in the entry, so the line goes on the credit side of Bank A/c, starting with "By" and naming the other account, Rent. "To" is only used on the debit side.'
    },
    {
      q: 'Zaina Boutique A/c shows debits of ₹23,128 and credits of ₹23,128 at month end. What is the balance?',
      options: ['Debit balance ₹23,128', 'Credit balance ₹23,128', 'Nil; the account is closed for the period', 'Debit balance ₹46,256'],
      answer: 2,
      why: 'Both sides are equal, so the difference is zero. The dealer was invoiced and has paid in full; nothing is carried down. The account is simply totalled and ruled off.'
    },
    {
      q: 'Noor Crafts\' Bank A/c ends the month with a credit balance of ₹14,000. What does this mean?',
      options: ['The bank owes Noor Crafts ₹14,000', 'The account is overdrawn by ₹14,000', 'Sana deposited ₹14,000 of capital', 'The posting was done on the wrong side'],
      answer: 1,
      why: 'Bank is an asset and normally has a debit balance. A credit balance means more has gone out than came in, so the business owes the bank: an overdraft. It is a liability until repaid.'
    },
    {
      q: 'Which of these accounts starts every new financial year with a Balance b/d?',
      options: ['Sales A/c', 'Rent A/c', 'J&K Bank Loan A/c', 'Purchases A/c'],
      answer: 2,
      why: 'The loan is a liability, a balance-sheet account, so its closing balance is carried into the next year. Sales, Rent and Purchases are closed to the Trading and Profit and Loss account and start again at zero.'
    },
    {
      q: 'After posting the entries for a month, the sum of all debit balances is ₹3,86,300 and the sum of all credit balances is ₹3,80,000. What does this tell you?',
      options: ['The business made a profit of ₹6,300', 'Nothing; the totals need not match', 'There is a posting or balancing error of ₹6,300 to find', 'An asset was sold'],
      answer: 2,
      why: 'Every entry debits and credits the same amount, so the totals of debit and credit balances must be equal. A difference means something was posted once, on the wrong side, or balanced wrongly. Profit is not found this way.'
    }
  ],

  glossary: [
    ['Ledger', 'The principal book of account: one page (or one record in software) per account, collecting every debit and credit to it.'],
    ['Posting', 'Copying each half of a journal entry to the ledger page of the account it names, on the matching side.'],
    ['Folio', 'A page number used as a cross-reference: L.F. (ledger folio) in the journal, J.F. (journal folio) in the ledger.'],
    ['Balance c/d', '"Carried down": the difference between the two sides, written on the smaller side to make the totals equal at period end.'],
    ['Balance b/d', '"Brought down": the same figure written on the opposite side below the totals as the opening balance of the next period.'],
    ['Trial balance', 'A list of all ledger balances in debit and credit columns, prepared to check that total debits equal total credits.']
  ]
};
