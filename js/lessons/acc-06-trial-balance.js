import { diagrams, example, callout, formula, steps, table, terms, inr } from '../lesson-kit.js';

/**
 * Lesson 2.6 - The trial balance
 * Running example: Noor Crafts (Sana, Srinagar). Figures continue from
 * acc-02 (capital ₹2,00,000, J&K Bank loan, October balances).
 */
export default {
  id: 'acc-06-trial-balance',
  title: 'The trial balance',

  intro: `<p>A <strong>trial balance</strong> is a list of every ledger account and its closing balance on one date,
    debit balances in one column and credit balances in the other. If the two columns add to the same figure, the
    arithmetic of your double entry has held. If they do not, something was posted wrong and you must find it
    <em>before</em> you prepare the Profit &amp; Loss account and balance sheet.</p>`,

  outcomes: [
    'Prepare a trial balance from a set of ledger balances and know which side each account belongs on.',
    'Name the errors a trial balance catches, and the four it cannot catch, with an example of each.',
    'Track down a difference quickly using the divide-by-2 and divide-by-9 tests, and know when to open a suspense account.'
  ],

  sections: [
    {
      heading: 'Where it sits: from ledger to final accounts',
      short: 'The picture',
      html: `
        <p>By the end of a month every transaction has been journalised and posted, and each ledger account has a balance.
        The trial balance simply <strong>collects those balances on one page</strong>. It does two jobs at once: it is an
        <em>arithmetical check</em> on the posting, and it is the <em>raw material</em> from which the Trading account,
        Profit &amp; Loss account and balance sheet are built.</p>
        ${diagrams.flow(
          [
            { label: 'Journal', sub: 'every transaction', tone: 'n' },
            { label: 'Ledger', sub: 'one account per item', tone: 'b' },
            { label: 'Ledger balances', sub: 'close each account', tone: 'c' },
            { label: 'Trial balance', sub: 'Dr total = Cr total?', tone: 'a' },
            { label: 'Final accounts', sub: 'P&L and balance sheet', tone: 'd' }
          ],
          { title: 'The trial balance is the bridge', caption: 'Nothing goes into the final accounts that is not first in the trial balance (closing stock is the one classic exception, see below).' }
        )}
        <p>Tally, Zoho Books or any software produces a trial balance with one click, and it always tallies because the software
        refuses to save a one-sided entry. That does not make the lesson useless: you still need to <strong>read</strong> the trial balance
        to spot a balance on the wrong side (a creditor showing a debit balance, a bank account in credit) and to understand what
        your CA is building the year-end statements from.</p>
      `
    },
    {
      heading: 'Which side does each balance sit on?',
      short: 'Dr vs Cr',
      html: `
        <p>Every account has a <em>normal</em> balance. If you know the ALCRE rule from lesson 2.3 you already know the answer:
        assets and expenses carry debit balances; liabilities, capital and incomes carry credit balances.</p>
        ${diagrams.split(
          { heading: 'Debit balances', tone: 'a', items: ['Cash, bank, debtors', 'Stock (opening), fixed assets', 'Purchases, returns inward', 'Expenses and losses', 'Drawings'] },
          { heading: 'Credit balances', tone: 'b', items: ['Capital', 'Loans, creditors, bills payable', 'GST payable, outstanding expenses', 'Sales, returns outward', 'Incomes, gains, provisions'] },
          { title: 'Normal balances', caption: 'A debit balance means "the business has it or has spent it"; a credit balance means "someone has a claim, or the business earned it".' }
        )}
        ${table(
          ['Account', 'Dr balance (₹)', 'Cr balance (₹)'],
          [
            ['Each ledger account, one per row', 'if it closed with a debit balance', 'if it closed with a credit balance'],
            ['Total', 'sum of column', 'must equal the Dr column']
          ],
          { caption: 'Trial balance format: three columns, one line per account, totals at the bottom' }
        )}
        ${callout('remember', 'An account appears <strong>once</strong>, on <strong>one</strong> side, with its <strong>net</strong> balance. You never list both the debit and credit totals of a ledger account; only the difference between them.')}
      `
    },
    {
      heading: 'Noor Crafts: trial balance at 30 September',
      short: 'Worked example',
      html: `
        <p>Six months after Sana opened Noor Crafts (1 April), her ledger has fourteen accounts with a balance. Here is how
        she turns them into a trial balance.</p>
        ${example({
          title: 'Trial balance of Noor Crafts as at 30 September',
          scenario: 'Sana balances each ledger account, writes the balance in the column that matches its side in the ledger, and totals both columns.',
          steps: [
            { label: 'Balance every account.', html: 'Cash ₹12,000 Dr, J&amp;K Bank ₹1,10,000 Dr, Debtors ₹85,000 Dr, Laptop and equipment ₹35,000 Dr, Purchases ₹3,40,000 Dr, Rent ₹48,000 Dr (six months at ₹8,000), Helper\'s salary ₹72,000 Dr (six months at ₹12,000), Packaging and courier ₹20,000 Dr, Drawings ₹30,000 Dr.' },
            { label: 'Credit side.', html: 'Capital ₹2,00,000 Cr, J&amp;K Bank loan ₹80,000 Cr (₹20,000 repaid), Creditors ₹60,000 Cr, GST payable ₹12,000 Cr, Sales ₹4,00,000 Cr.' },
            { label: 'List and total.', html: 'Debit column adds to ₹7,52,000. Credit column adds to ₹7,52,000. It tallies.' }
          ],
          result: 'The arithmetic holds. Sana can now hand this sheet, plus the closing stock count (₹2,40,000), to her CA for the half-year statements.'
        })}
        ${table(
          ['Account', 'Dr (₹)', 'Cr (₹)'],
          [
            ['Cash in hand', inr(12000), ''],
            ['J&K Bank', inr(110000), ''],
            ['Debtors', inr(85000), ''],
            ['Laptop and equipment', inr(35000), ''],
            ['Purchases', inr(340000), ''],
            ['Workshop rent', inr(48000), ''],
            ['Helper\'s salary', inr(72000), ''],
            ['Packaging and courier', inr(20000), ''],
            ['Drawings', inr(30000), ''],
            ['Capital', '', inr(200000)],
            ['J&K Bank loan', '', inr(80000)],
            ['Creditors', '', inr(60000)],
            ['GST payable', '', inr(12000)],
            ['Sales', '', inr(400000)]
          ],
          { align: ['l', 'r', 'r'], caption: 'Noor Crafts: trial balance as at 30 September', total: ['Total', inr(752000), inr(752000)] }
        )}
        ${callout('note', '<strong>Closing stock</strong> (₹2,40,000 of shawls and boxes on the shelf) is not in the trial balance. It comes from a physical count, not from the ledger, so it enters the final accounts as an <em>adjustment</em>. Opening stock, when there is one, <em>is</em> a ledger balance and does appear on the debit side.')}
      `
    },
    {
      heading: 'What a trial balance catches, and what it misses',
      short: 'Errors',
      html: `
        <p>A trial balance only proves that <strong>debits equal credits</strong>. It catches one-sided mistakes: an amount posted to
        only one account, posted twice on one side, a wrong figure on one side, a ledger account totalled wrongly, or a balance copied
        into the wrong column. It is silent about anything that was wrong <em>on both sides equally</em>. Four such errors have names
        you will meet in every exam and in every audit.</p>
        ${table(
          ['Error', 'What it means', 'Noor Crafts example'],
          [
            ['Error of omission', 'A transaction was never recorded at all', 'A ₹1,500 walnut-box sale by UPI is forgotten. No debit, no credit; the trial balance still tallies.'],
            ['Error of commission', 'Right amount, right side, wrong account of the same class', '₹10,000 received from Delhi Boutique is credited to Mumbai Boutique\'s account. Debtors total is unchanged.'],
            ['Error of principle', 'Capital item treated as revenue, or the reverse', 'A new ₹35,000 laptop is debited to Office Expenses instead of Equipment. Profit is understated, assets understated, but Dr still equals Cr.'],
            ['Compensating errors', 'Two unrelated mistakes that cancel each other', 'Sales is over-added by ₹500 and Purchases is also over-added by ₹500. The two cancel out.']
          ],
          { caption: 'The four errors a trial balance does not reveal' }
        )}
        ${callout('warning', 'A trial balance that tallies is <strong>not proof that the books are right</strong>. Owners often hear "the TB matches" and relax. It only means the posting was arithmetically consistent. Reconciling the bank (lesson 2.8), confirming balances with big debtors and creditors, and counting stock are what catch the rest.')}
      `
    },
    {
      heading: 'When it does not tally: hunting the difference',
      short: 'Hunting',
      html: `
        <p>If the columns differ, do not start re-checking every entry from April. Work from the size of the difference down.
        Accountants use two quick tests on the difference itself.</p>
        ${steps([
          'Re-add both columns. Most differences are addition slips in the trial balance itself.',
          '<strong>Divide the difference by 2.</strong> If an account balance equals exactly half the difference, that balance has been put on the wrong side. A ₹5,000 credit listed as a debit creates a ₹10,000 gap.',
          '<strong>Divide the difference by 9.</strong> If it divides exactly, suspect a <em>transposition</em> (₹1,890 written as ₹1,980) or a <em>slide</em> (₹12,000 written as ₹1,200). Swapping two digits always produces a difference that is a multiple of 9.',
          'Check that every ledger balance was copied correctly and on its normal side. Compare the trial balance with the ledger, account by account.',
          'Look for a ledger account missing from the list, then re-check the ledger totals and finally the postings from the journal.'
        ], { title: 'Order of search' })}
        ${formula('Difference ÷ 9 = whole number  →  suspect a transposition or slide', 'Example: 1,980 − 1,890 = 90; 90 ÷ 9 = 10. The 9 and 8 were swapped.')}
        ${example({
          title: 'A ₹90 difference at 31 October',
          scenario: 'Sana\'s October trial balance shows a debit total of ₹8,14,560 and a credit total of ₹8,14,470.',
          steps: [
            { label: 'Difference:', html: '₹8,14,560 − ₹8,14,470 = <strong>₹90</strong>, with the debit side too high.' },
            { label: 'Divide by 2:', html: '₹45. No account has a balance of ₹45, so it is probably not a wrong-side posting.' },
            { label: 'Divide by 9:', html: '90 ÷ 9 = 10 exactly. A transposition is likely, probably in the tens and hundreds digits.' },
            { label: 'Scan the debit column for digit pairs.', html: 'The Courier expense line reads ₹1,980. The courier ledger account shows a balance of ₹1,890. The 8 and 9 were swapped while copying.' },
            { label: 'Correct it.', html: 'Debit total becomes ₹8,14,560 − ₹90 = ₹8,14,470. Both sides now agree.' }
          ],
          result: 'Found in five minutes instead of five hours. The by-9 test pointed straight at a copying error, not a posting error, so Sana checked the trial balance sheet before touching the ledger.',
          tone: 'c'
        })}
        <p>If the difference still cannot be traced and the statements are due, the gap is parked in a <strong>suspense account</strong>:
        a temporary account that takes the difference (₹90 on the credit side in the case above, had it not been found) so that the
        trial balance tallies and work can continue. Each error found later is corrected through a rectification entry, and the
        suspense account must be zero before the final balance sheet is signed. A suspense balance that survives to year end is a sign
        of sloppy books.</p>
        ${terms([
          ['Transposition', 'Two digits swapped while writing a number: ₹2,340 written as ₹2,430. The difference is always a multiple of 9.'],
          ['Slide', 'A number written with the decimal or a zero out of place: ₹12,000 written as ₹1,200. Also a multiple of 9 (here 10,800 = 9 × 1,200).'],
          ['Suspense account', 'A temporary account that holds an unexplained difference so the trial balance tallies; closed once the errors are located.']
        ])}
      `
    }
  ],

  keyPoints: [
    'A trial balance lists every ledger balance on one date, debits in one column and credits in the other. Equal totals prove the posting was arithmetically consistent.',
    'Assets, expenses, purchases and drawings show debit balances; capital, liabilities, sales and incomes show credit balances. Each account appears once, with its net balance.',
    'Closing stock is not in the trial balance; it comes from a stock count and enters the final accounts as an adjustment.',
    'A tallying trial balance misses four errors: omission, commission, principle and compensating. Each keeps debits equal to credits.',
    'To find a difference: divide by 2 (wrong side) and by 9 (transposition or slide), then check copied balances before re-checking postings.',
    'A suspense account parks an unexplained difference temporarily. It must be cleared before the balance sheet is finalised.'
  ],

  practice: [
    { label: 'Accounting Simulator', sub: 'Post a month of transactions and watch the trial balance build itself', href: 'accounting-lab/index.html', icon: '⚖️' },
    { label: 'Ledger posting & T-accounts', sub: 'The previous lesson: how each balance in the trial balance was produced', href: 'learn/lesson.html?id=acc-05-ledger-and-t-accounts', icon: '📒' },
    { label: 'Golden Rules cheatsheet', sub: 'Which side is normal for each type of account', href: 'cheatsheets/index.html', icon: '📑' }
  ],

  quiz: [
    {
      q: 'Noor Crafts\' trial balance tallies at ₹7,52,000. Which of these errors could still be hiding in the books?',
      options: [
        'A ₹4,000 rent payment debited to Rent A/c but never credited to Bank A/c',
        'The Sales ledger account totalled ₹500 too high',
        'A ₹1,500 sale by UPI that was never recorded anywhere',
        'Debtors\' balance of ₹85,000 listed in the credit column'
      ],
      answer: 2,
      why: 'An error of omission leaves both sides untouched, so the trial balance still tallies. The other three are one-sided mistakes that would create a difference.'
    },
    {
      q: 'The debit column exceeds the credit column by ₹7,200. Which test should you try first?',
      options: ['Divide by 9', 'Divide by 2', 'Re-check every journal entry since April', 'Open a suspense account and move on'],
      answer: 1,
      why: 'Divide ₹7,200 by 2 and look for a ₹3,600 balance. If one exists, it has been listed on the wrong side. Only after that try the by-9 test (7,200 ÷ 9 = 800 also divides, so a transposition is the second candidate). A suspense account is the last resort, not the first.'
    },
    {
      q: 'A new sewing machine costing ₹45,000 is debited to Repairs A/c. What kind of error is this, and does the trial balance reveal it?',
      options: [
        'Error of commission; the trial balance reveals it',
        'Error of principle; the trial balance does not reveal it',
        'Compensating error; the trial balance reveals it',
        'Error of omission; the trial balance does not reveal it'
      ],
      answer: 1,
      why: 'A capital item (an asset) has been treated as a revenue expense. Debits still equal credits, so the trial balance tallies, but profit and assets are both understated by ₹45,000.'
    },
    {
      q: 'Which item belongs on the credit side of a trial balance?',
      options: ['Drawings', 'Purchases', 'Returns outward (goods sent back to a supplier)', 'Opening stock'],
      answer: 2,
      why: 'Returns outward reduce purchases, so the account carries a credit balance. Drawings, purchases and opening stock all have debit balances.'
    }
  ],

  glossary: [
    ['Trial balance', 'A statement listing the debit or credit balance of every ledger account on a given date, used to check arithmetical accuracy and as the base for final accounts.'],
    ['Error of omission', 'A transaction left out of the books entirely. Both sides are missing, so the trial balance still tallies.'],
    ['Error of commission', 'A posting to the wrong account of the same class, or a wrong amount on both sides, that does not disturb the totals.'],
    ['Error of principle', 'Recording an item against the wrong type of account, typically a capital expense treated as a revenue expense or the reverse.'],
    ['Compensating errors', 'Two or more independent errors whose effects cancel each other so that the trial balance still agrees.'],
    ['Suspense account', 'A temporary account that holds the difference in a trial balance until the errors causing it are found and rectified.']
  ]
};
