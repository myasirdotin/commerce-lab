import { diagrams, example, callout, formula, steps, table, terms, inr } from '../lesson-kit.js';

/**
 * Lesson 2.8 - Bank reconciliation statement (BRS)
 * Running example: Noor Crafts (Sana, Srinagar), J&K Bank current account, 31 August.
 */
export default {
  id: 'acc-08-bank-reconciliation',
  title: 'Bank reconciliation statement (BRS)',

  intro: `<p>Your cash book says the bank balance is one figure; the bank's statement says another. Both can be right on the same day,
    because each side records some things the other has not seen yet. A <strong>bank reconciliation statement (BRS)</strong> lists those
    differences and proves that, once they are explained, the two balances agree. It is the single most useful control a small business
    owner can do in an hour a month.</p>`,

  outcomes: [
    'Name the seven common reasons the cash book and the bank statement differ, and say which side is "behind" in each case.',
    'Prepare a BRS starting from either the cash book balance or the bank statement balance, and get it to reconcile exactly.',
    'Use the reconciliation to update the cash book, catch missing receipts and spot fraud or bank errors early.'
  ],

  sections: [
    {
      heading: 'Why two honest records disagree',
      short: 'The picture',
      html: `
        <p>The bank column of your cash book is written by you, the moment you issue a cheque or get a UPI alert. The bank statement
        is written by J&amp;K Bank, the moment money actually moves through their system. Between those two moments sits a gap of
        hours or days, and some items only one side knows about at all.</p>
        ${table(
          ['Reason', 'Who knows first', 'Effect on cash book balance vs statement'],
          [
            ['Cheques issued but not yet presented', 'You', 'Cash book lower (you deducted; bank has not)'],
            ['Cheques or cash deposited, not yet credited (in transit)', 'You', 'Cash book higher (you added; bank has not)'],
            ['Bank charges, SMS fees, cheque-book charges', 'Bank', 'Cash book higher (bank deducted; you have not)'],
            ['Interest credited by the bank', 'Bank', 'Cash book lower (bank added; you have not)'],
            ['Direct credits: UPI, NEFT, IMPS from customers not yet entered', 'Bank', 'Cash book lower'],
            ['Dishonoured (bounced) cheque you had recorded as received', 'Bank', 'Cash book higher'],
            ['Errors on either side (wrong amount, wrong account)', 'Whoever got it wrong', 'Either way'],
            ['Standing instructions: EMI, insurance, auto-debits', 'Bank', 'Cash book higher']
          ],
          { caption: 'Reconciling items: timing differences (first two) versus items missing from one side (the rest)' }
        )}
        <p>Notice the pattern. The first two reasons are pure <strong>timing</strong>; they fix themselves in a few days and need no entry
        in your books. Everything else is something the bank knows and you have not yet recorded, so the cash book must be <strong>updated</strong>.
        The BRS separates the two kinds.</p>
      `
    },
    {
      heading: 'Two starting points, one destination',
      short: 'Add or less',
      html: `
        <p>A BRS starts from one balance and adjusts it, item by item, until it reaches the other. The usual starting point is the
        <strong>cash book balance</strong> (debit balance means money in the bank). For each reconciling item ask: "Has the bank statement
        got <em>more</em> or <em>less</em> than my book because of this?" More means add; less means subtract.</p>
        ${diagrams.split(
          { heading: 'Add to cash book balance', tone: 'a', items: ['Cheques issued, not yet presented', 'Interest credited by bank', 'Direct credits (UPI, NEFT) not entered', 'Cash book undercast or payment entered twice'] },
          { heading: 'Less from cash book balance', tone: 'e', items: ['Deposits in transit, not yet credited', 'Bank charges and fees', 'Dishonoured cheques', 'Auto-debits (EMI, insurance) not entered'] },
          { title: 'Starting from a favourable cash book balance', caption: 'Starting from the bank statement balance instead simply swaps the two columns: what you added, you now subtract.' }
        )}
        ${formula('Cash book balance + items the bank has but you lack − items you have but the bank lacks = Bank statement balance', 'Favourable balances assumed. An overdraft is a negative figure; treat it as such and the same rule still works.')}
        ${callout('remember', 'Only the <em>bank-side</em> items (charges, interest, direct credits, bounced cheques, auto-debits) go into your cash book afterwards. Unpresented cheques and deposits in transit are already in your book; they will appear in the statement on their own.')}
      `
    },
    {
      heading: 'Noor Crafts: BRS at 31 August',
      short: 'Worked example',
      html: `
        ${example({
          title: 'Reconciling Noor Crafts\' J&amp;K Bank account, 31 August',
          scenario: 'Sana\'s cash book shows a bank balance of <strong>₹1,24,500</strong>. The J&amp;K Bank statement for 31 August shows <strong>₹1,31,200</strong>. She ticks every entry that appears in both, and six items are left unticked.',
          steps: [
            { label: 'Cheque to the carpenter, ₹18,000,', html: 'issued on 28 August and entered in the cash book, but he has not yet deposited it. The bank has not deducted it. <strong>Add.</strong>' },
            { label: 'NEFT of ₹14,000 from a Mumbai boutique', html: 'credited by the bank on 30 August. Sana had not seen the alert and it is not in the cash book. <strong>Add.</strong>' },
            { label: 'Interest of ₹450', html: 'credited by the bank on the quarter end. Not in the cash book. <strong>Add.</strong>' },
            { label: 'Cheque of ₹22,000 from a Delhi dealer', html: 'deposited on 31 August and entered in the cash book; the bank will credit it only after clearing. <strong>Less.</strong>' },
            { label: 'Bank charges of ₹250', html: '(cheque book and SMS alerts) deducted by the bank. Not in the cash book. <strong>Less.</strong>' },
            { label: 'A customer\'s cheque of ₹3,500', html: 'recorded as received on 20 August was returned unpaid on 29 August. The bank reversed it; the cash book still shows the receipt. <strong>Less.</strong>' }
          ],
          result: '₹1,24,500 + ₹18,000 + ₹14,000 + ₹450 − ₹22,000 − ₹250 − ₹3,500 = <strong>₹1,31,200</strong>, exactly the statement balance. Reconciled.'
        })}
        ${table(
          ['Bank reconciliation statement as at 31 August', 'Amount (₹)', 'Total (₹)'],
          [
            [{ html: '<strong>Balance as per cash book (Dr)</strong>' }, '', inr(124500)],
            [{ html: '<em>Add:</em>' }, '', ''],
            ['Cheque issued to carpenter, not yet presented', inr(18000), ''],
            ['NEFT from Mumbai boutique, not yet recorded in cash book', inr(14000), ''],
            ['Interest credited by bank', inr(450), inr(32450)],
            ['', '', inr(156950)],
            [{ html: '<em>Less:</em>' }, '', ''],
            ['Cheque from Delhi dealer deposited, not yet cleared', inr(22000), ''],
            ['Bank charges', inr(250), ''],
            ['Customer\'s cheque dishonoured', inr(3500), inr(25750)]
          ],
          { align: ['l', 'r', 'r'], caption: 'Noor Crafts: BRS starting from the cash book balance', total: ['Balance as per bank statement', '', inr(131200)] }
        )}
        <p>Now the <strong>follow-up</strong>, which is where the real value lies. Items 2, 3, 5 and 6 are missing from Sana's books,
        so she records them: Bank Dr ₹14,000 (Mumbai boutique's debtor account credited), Bank Dr ₹450 (interest income), Bank Cr ₹250
        (bank charges), and Bank Cr ₹3,500 with the customer's account debited again because they still owe her. The adjusted cash book
        balance becomes ₹1,24,500 + ₹14,000 + ₹450 − ₹250 − ₹3,500 = <strong>₹1,35,200</strong>. A BRS from this adjusted figure needs only
        the two timing items: ₹1,35,200 + ₹18,000 − ₹22,000 = ₹1,31,200.</p>
        ${callout('tip', 'Exam questions often ask for the BRS from an <em>adjusted</em> cash book. Update the book first with the bank-side items, then reconcile with timing differences only. The answer is the same statement balance, and the working is shorter.')}
      `
    },
    {
      heading: 'The monthly routine',
      short: 'Routine',
      html: `
        ${diagrams.flow(
          [
            { label: 'Download statement', sub: 'netbanking PDF or CSV', tone: 'b' },
            { label: 'Tick matches', sub: 'book vs statement', tone: 'a' },
            { label: 'List unticked', sub: 'both sides', tone: 'c' },
            { label: 'Update cash book', sub: 'bank-side items', tone: 'd' },
            { label: 'Prepare and file BRS', sub: 'timing items only', tone: 'n' }
          ],
          { title: 'Reconciling once a month', caption: 'Tally and most accounting apps do the ticking for you once you import the statement; the thinking in steps 3 and 4 is still yours.' }
        )}
        ${steps([
          'Fix a date: the last day of the month. Get the statement for exactly that period.',
          'Go through the cash book bank column and the statement line by line, ticking each pair that matches in amount and direction. Watch for amounts that match but dates that differ by more than a week.',
          'Everything unticked on either side is a reconciling item. Decide for each whether it is timing (leave it) or a missing entry (record it).',
          'Pass the entries for bank charges, interest, direct credits, dishonoured cheques and auto-debits. Chase any unidentified credit until you know which customer paid.',
          'Prepare the BRS from the adjusted balance. Sign and date it, and keep it with the statement; your CA and any auditor will ask for it.'
        ], { title: 'Five steps' })}
        <p><strong>How often?</strong> Monthly is the minimum for any business with a bank account. A shop or café that takes fifty UPI payments
        a day should do it <strong>weekly</strong>, because the settlement from the UPI app or payment gateway arrives in the bank as one lump,
        net of fees, a day or two after the sales, and a missing day is invisible until you reconcile. An unpresented cheque older than three
        months is stale and should be reversed in the cash book.</p>
      `
    },
    {
      heading: 'What a BRS catches for a business owner',
      short: 'For owners',
      html: `
        <p>Most owners think of the BRS as an accountant's chore. It is actually the cheapest audit you will ever do, because it compares
        your records with an <em>independent</em> record you cannot edit.</p>
        ${terms([
          ['Missing receipts', 'A ₹14,000 NEFT sitting in the bank and nowhere in your books means a customer who paid is still shown as a debtor. Without the BRS you might chase them, or worse, forget that an order is paid and ready to ship.'],
          ['Fraud and leakage', 'Cash sales deposited short, a cheque issued to a supplier who does not exist, a payment that appears in the statement but was never authorised. Each one shows up as an unticked line.'],
          ['Bank errors', 'Banks do make mistakes: a charge applied twice, a credit meant for another account. You can only dispute what you have noticed, and banks have time limits for complaints.'],
          ['Bounced cheques', 'A dishonoured cheque leaves a false receipt in your books. The BRS flags it in time to follow up with the customer and, if needed, send the section 138 notice within the legal 30-day window.']
        ])}
        ${callout('india', 'Under section 138 of the Negotiable Instruments Act, a dishonoured cheque is a criminal offence for the drawer, but you must send a written demand within 30 days of receiving the bank\'s return memo. Reconcile late and you lose that right. Also keep the bank statement and BRS for every month: GST officers reconcile your declared turnover against bank credits, and unexplained deposits are treated as income.')}
      `
    }
  ],

  keyPoints: [
    'The cash book and the bank statement differ because of timing (unpresented cheques, deposits in transit) and because of items only the bank knows (charges, interest, direct credits, bounced cheques, auto-debits).',
    'Starting from a favourable cash book balance: add what the bank has that you lack; subtract what you have that the bank lacks. Starting from the statement reverses the signs.',
    'Record the bank-side items in the cash book after reconciling. Timing items need no entry; they clear themselves.',
    'Noor Crafts: ₹1,24,500 + ₹32,450 − ₹25,750 = ₹1,31,200. If it does not reconcile to the rupee, an item is still missing.',
    'Reconcile monthly at least; weekly if you take many UPI or gateway payments, because settlements arrive late and net of fees.',
    'The BRS catches missing receipts, bounced cheques, bank errors and fraud, and is the record GST and income-tax officers compare against your turnover.'
  ],

  practice: [
    { label: 'Accounting Simulator', sub: 'Record bank-side items and see the cash book balance move', href: 'accounting-lab/index.html', icon: '⚖️' },
    { label: 'Excel Lab', sub: 'Build a reconciliation sheet: paste the statement, mark matches, list the rest', href: 'excel-lab/index.html', icon: '📊' },
    { label: 'Cash book & petty cash (previous lesson)', sub: 'Where the bank column comes from', href: 'learn/lesson.html?id=acc-07-cash-book-petty-cash', icon: '📒' }
  ],

  quiz: [
    {
      q: 'Starting from a favourable cash book balance of ₹50,000, a ₹6,000 cheque issued to a supplier has not yet been presented. What do you do in the BRS?',
      options: ['Subtract ₹6,000', 'Add ₹6,000', 'Ignore it; it is a timing item', 'Record it in the cash book first'],
      answer: 1,
      why: 'You already deducted the ₹6,000 in your book; the bank has not. So the bank balance is higher by ₹6,000: add it. It is a timing item, so it needs no cash book entry, but it still appears in the BRS.'
    },
    {
      q: 'The bank statement shows a ₹9,000 UPI credit that is not in the cash book. Which action is correct?',
      options: [
        'Subtract it in the BRS and do nothing else',
        'Add it in the BRS (from cash book balance) and then record the receipt in the cash book, crediting the customer who paid',
        'Wait for it to appear in the cash book by itself',
        'Treat it as bank interest'
      ],
      answer: 1,
      why: 'A direct credit is a bank-side item: the bank has more than your book, so add it, and then update the cash book so the customer is no longer shown as a debtor. It will not fix itself.'
    },
    {
      q: 'Starting from the bank statement balance instead of the cash book, how are unpresented cheques treated?',
      options: ['Added', 'Subtracted', 'Ignored', 'Shown in both columns'],
      answer: 1,
      why: 'From the statement side you are travelling towards the cash book balance, which is lower by the unpresented cheques. So subtract them. Every item flips sign when you change the starting point.'
    },
    {
      q: 'Chai Adda receives about 60 UPI payments a day through a payment gateway. How often should Meera reconcile the bank?',
      options: ['Once a year before the ITR', 'Quarterly with the GST return', 'Monthly at minimum, and weekly is better', 'Never; UPI is automatic'],
      answer: 2,
      why: 'Gateway settlements arrive in lumps, net of fees, a day or two late. A missing settlement is invisible until the book is compared with the statement, so a busy digital shop should reconcile weekly.'
    },
    {
      q: 'Cash book balance ₹80,000 (Dr). Unpresented cheques ₹12,000; deposits in transit ₹20,000; bank charges ₹300 not recorded. What is the bank statement balance?',
      options: ['₹72,300', '₹71,700', '₹88,300', '₹87,700'],
      answer: 1,
      why: '₹80,000 + ₹12,000 (bank has not deducted) − ₹20,000 (bank has not credited) − ₹300 (bank deducted, you have not) = ₹71,700.'
    }
  ],

  glossary: [
    ['Bank reconciliation statement', 'A statement that explains the difference between the bank balance in the cash book and the balance on the bank statement on a given date.'],
    ['Unpresented cheque', 'A cheque you have issued and recorded that the payee has not yet deposited, so the bank has not yet deducted it.'],
    ['Deposit in transit', 'A cheque or cash you have deposited and recorded that the bank has not yet credited to your account.'],
    ['Dishonoured cheque', 'A cheque the bank refuses to pay, usually for insufficient funds; the receipt you recorded must be reversed.'],
    ['Direct credit', 'Money received straight into the bank, by UPI, NEFT, IMPS or RTGS, that you learn of from the statement or an alert rather than from a physical receipt.'],
    ['Favourable balance', 'A positive bank balance: a debit balance in the cash book, shown as a credit balance on the bank statement because the bank owes you the money.']
  ]
};
