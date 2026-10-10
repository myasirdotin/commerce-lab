import { diagrams, example, callout, steps, table, journal, terms, inr, esc } from '../lesson-kit.js';

/**
 * Lesson 2.4 - Journal entries
 * Running example: Noor Crafts (Sana, Srinagar). GST-registered, sells shawls (18% GST,
 * apparel above Rs 2,500) intra-state (CGST+SGST) and inter-state (IGST).
 */

/**
 * Local builder for compound entries (several debits and/or credits in one entry).
 * Uses the same classes as journal() so it renders identically. rows: [{date, lines:[{acc, dr}|{acc, cr}], narration}]
 */
function entries(rows, { caption = 'Journal entries' } = {}) {
  const body = rows.map(r => {
    const drs = r.lines.filter(l => l.dr), crs = r.lines.filter(l => l.cr);
    const cells = [
      ...drs.map(l => `<td>${esc(l.acc)} A/c <span class="j-dr">Dr.</span></td><td class="text-right num">${inr(l.dr)}</td><td></td>`),
      ...crs.map(l => `<td class="j-indent">To ${esc(l.acc)} A/c</td><td></td><td class="text-right num">${inr(l.cr)}</td>`)
    ];
    const lines = cells.map((c, i) => `<tr>${i === 0 ? `<td rowspan="${cells.length}" class="j-date">${esc(r.date || '')}</td>` : ''}${c}</tr>`).join('');
    return lines + (r.narration ? `<tr class="j-narr"><td></td><td colspan="3"><em>(${esc(r.narration)})</em></td></tr>` : '');
  }).join('');
  return `<div class="table-responsive lesson-table journal"><div class="table-caption">${caption}</div><table class="financial-table">
    <thead><tr><th>Date</th><th>Particulars</th><th class="text-right">Debit (₹)</th><th class="text-right">Credit (₹)</th></tr></thead>
    <tbody>${body}</tbody></table></div>`;
}

export default {
  id: 'acc-04-journal-entries',
  title: 'Journal entries',

  intro: `<p>The journal is the first book a transaction enters. Each entry names the account debited, the account credited,
    the amount, and a one-line narration saying why. Once you can write a correct journal entry for the twenty or so
    transactions a small business repeats every month, the ledger, trial balance and final accounts follow mechanically.</p>`,

  outcomes: [
    'Write a journal entry in the standard format, with narration, for any routine business transaction.',
    'Distinguish a simple entry from a compound entry and know when each is used.',
    'Record purchases and sales with GST using Input and Output CGST, SGST and IGST accounts.',
    'Spot the five most common journalising mistakes before they reach the ledger.'
  ],

  sections: [
    {
      heading: 'From voucher to journal',
      short: 'The format',
      html: `
        <p>A journal entry is not where accounting starts. It starts with a <strong>source document</strong>: a tax invoice,
        a supplier\'s bill, a bank statement line, a UPI screenshot, a rent receipt. You read the document, find the two accounts
        it affects, decide the debit and the credit using the rules from <a href="learn/lesson.html?id=acc-03-debit-credit-rules">lesson 2.3</a>,
        and only then write the entry.</p>
        ${diagrams.flow(
          [
            { label: 'Source document', sub: 'invoice, bill, bank line', tone: 'a' },
            { label: 'Analyse', sub: 'two accounts, which Dr, which Cr', tone: 'b' },
            { label: 'Journal entry', sub: 'date, Dr, Cr, amount, narration', tone: 'c' },
            { label: 'Post to ledger', sub: 'lesson 2.5', tone: 'd' }
          ],
          { title: 'Where a journal entry comes from', caption: 'The entry is only as good as the document behind it. File the voucher with the entry number written on it.' }
        )}
        ${table(
          ['Date', 'Particulars', 'L.F.', 'Debit (₹)', 'Credit (₹)'],
          [
            ['2026-04-08', { html: 'Rent A/c <strong>Dr.</strong>' }, '14', inr(8000), ''],
            ['', { html: '&nbsp;&nbsp;&nbsp;&nbsp;To Bank A/c' }, '2', '', inr(8000)],
            ['', { html: '<em>(Being April workshop rent paid by bank transfer, receipt no. 7)</em>' }, '', '', '']
          ],
          { align: ['l', 'l', 'l', 'r', 'r'], caption: 'The five columns of a journal page' }
        )}
        ${terms([
          ['Particulars', 'The debited account on the first line with "Dr." at the end; the credited account on the next line, indented, starting with "To". Software drops the "To" but keeps the order.'],
          ['L.F. (ledger folio)', 'The page number of that account in the ledger, filled in when the entry is posted. It is the cross-reference that lets you trace any ledger figure back to its entry and voucher.'],
          ['Narration', 'One line in brackets starting with "Being", stating what happened and the document number. Not optional: six months later it is the only clue to what the entry was for.'],
          ['Simple entry', 'One debit and one credit. Rent paid, cash sale, capital introduced.'],
          ['Compound entry', 'More than one debit or credit in a single entry, when one event touches three or more accounts. A GST sale (Sales plus Output CGST plus Output SGST) or a payment with discount. The debits must still total the credits.']
        ])}
      `
    },
    {
      heading: 'The entries every small business makes',
      short: 'Common entries',
      html: `
        <p>About fifteen patterns cover almost everything a trading business like Noor Crafts does in a year. Learn these and
        you can journalise by recognition rather than by working each one out. Amounts below are Noor Crafts figures; GST is
        added in the next section.</p>
        ${journal([
          { date: 'Capital', debit: 'Bank', credit: 'Capital', amount: 200000, narration: 'Being capital introduced by Sana into the business bank account' },
          { date: 'Loan taken', debit: 'Bank', credit: 'J&K Bank Loan', amount: 100000, narration: 'Being term loan received from J&K Bank' },
          { date: 'Loan repaid', debit: 'J&K Bank Loan', credit: 'Bank', amount: 5000, narration: 'Being principal instalment repaid; interest is a separate entry to Interest A/c' },
          { date: 'Drawings', debit: 'Drawings', credit: 'Bank', amount: 10000, narration: 'Being cash withdrawn by the owner for personal use' },
          { date: 'Asset bought', debit: 'Laptop', credit: 'Bank', amount: 40000, narration: 'Being laptop purchased for the business, not for resale' }
        ], { caption: 'Owner, lender and asset entries' })}
        ${journal([
          { date: 'Cash purchase', debit: 'Purchases', credit: 'Bank', amount: 80000, narration: 'Being 20 shawls bought from the weaver, paid by NEFT' },
          { date: 'Credit purchase', debit: 'Purchases', credit: 'Ahmad Woodworks', amount: 45000, narration: 'Being 30 walnut boxes bought on 30 days credit' },
          { date: 'Returns outward', debit: 'Ahmad Woodworks', credit: 'Purchase Returns', amount: 3000, narration: 'Being 2 cracked boxes returned to the supplier, debit note no. 1' },
          { date: 'Cash sale', debit: 'Bank', credit: 'Sales', amount: 7000, narration: 'Being 1 shawl sold to a walk-in customer, received by UPI' },
          { date: 'Credit sale', debit: 'Zaina Boutique', credit: 'Sales', amount: 19600, narration: 'Being 4 shawls sold at dealer price on 30 days credit' },
          { date: 'Returns inward', debit: 'Sales Returns', credit: 'Zaina Boutique', amount: 4900, narration: 'Being 1 shawl returned by the dealer, credit note no. 1' }
        ], { caption: 'Buying and selling (returns go to their own accounts, not back through Purchases or Sales)' })}
        ${journal([
          { date: 'Expense paid', debit: 'Courier Charges', credit: 'Bank', amount: 1800, narration: 'Being courier charges for 20 orders paid by UPI' },
          { date: 'Outstanding expense', debit: 'Salary', credit: 'Outstanding Salary', amount: 12000, narration: 'Being March salary due to the helper but unpaid on 31 March' },
          { date: 'Prepaid expense', debit: 'Prepaid Insurance', credit: 'Bank', amount: 6000, narration: 'Being annual stock insurance paid in advance; the part for next year is an asset' },
          { date: 'Bad debt', debit: 'Bad Debts', credit: 'Karan Handicrafts', amount: 2500, narration: 'Being balance due from a Mumbai dealer who has closed down, written off' }
        ], { caption: 'Expenses, year-end accruals and losses' })}
        ${entries([
          { date: 'Discount allowed', lines: [{ acc: 'Bank', dr: 9800 }, { acc: 'Discount Allowed', dr: 200 }, { acc: 'Zaina Boutique', cr: 10000 }], narration: 'Being ₹10,000 due from Zaina Boutique settled at ₹9,800 for early payment' },
          { date: 'Discount received', lines: [{ acc: 'Ahmad Woodworks', dr: 42000 }, { acc: 'Bank', cr: 41500 }, { acc: 'Discount Received', cr: 500 }], narration: 'Being supplier balance of ₹42,000 settled at ₹41,500' }
        ], { caption: 'Two compound entries: settlement with cash discount' })}
        ${callout('remember', 'Outstanding Salary and Prepaid Insurance are the accrual concept in action: the expense belongs to the period it was <em>incurred</em>, not the month the money moved. Outstanding expenses are liabilities; prepaid expenses are assets.')}
      `
    },
    {
      heading: 'GST in journal entries',
      short: 'GST',
      html: `
        <p>Once a business is GST-registered, tax on a purchase is not a cost and tax on a sale is not income. The GST you pay
        a supplier is <strong>input tax credit</strong>, an amount the government owes you back, so it is an asset. The GST you charge
        a customer belongs to the government, so it is a liability. That is why GST gets its own accounts, split by the type of tax.</p>
        ${table(
          ['Account', 'Type (ALCRE)', 'Used when', 'Normal balance'],
          [
            ['Input CGST / Input SGST', 'Asset', 'You buy from a supplier in your own state', 'Debit'],
            ['Input IGST', 'Asset', 'You buy from a supplier in another state', 'Debit'],
            ['Output CGST / Output SGST', 'Liability', 'You sell to a customer in your own state', 'Credit'],
            ['Output IGST', 'Liability', 'You sell to a customer in another state', 'Credit']
          ],
          { caption: 'The six GST accounts. Intra-state: the rate splits equally into CGST and SGST. Inter-state: the whole rate is IGST.' }
        )}
        ${diagrams.split(
          { heading: 'Buying (purchase on credit)', tone: 'a', items: ['Dr Purchases or Asset: taxable value', 'Dr Input CGST and Input SGST: tax paid', 'Cr Supplier: total invoice amount'] },
          { heading: 'Selling (sale on credit)', tone: 'd', items: ['Dr Customer: total invoice amount', 'Cr Sales: taxable value only', 'Cr Output CGST and Output SGST: tax charged'] },
          { title: 'Dr what, Cr what: purchase versus sale with GST', caption: 'Sales and Purchases carry only the taxable value. The tax goes to its own line. Inter-state deals swap the CGST and SGST lines for a single IGST line.' }
        )}
        ${example({
          title: 'A GST purchase and a GST sale at Noor Crafts',
          scenario: 'Both deals are inside Jammu &amp; Kashmir, so the 18% rate splits into CGST 9% and SGST 9%.',
          steps: [
            { label: 'Purchase:', html: 'Sana buys a laptop for the online store from a Srinagar dealer. Taxable value ' + inr(40000) + ', CGST ' + inr(3600) + ', SGST ' + inr(3600) + ', invoice total ' + inr(47200) + ', paid by bank.' },
            { label: 'Sale:', html: 'A walk-in customer buys one shawl. Taxable value ' + inr(7000) + ', CGST ' + inr(630) + ', SGST ' + inr(630) + ', invoice total ' + inr(8260) + ', paid by UPI.' }
          ],
          result: 'The laptop is recorded at ' + inr(40000) + ', not ' + inr(47200) + '; the ' + inr(7200) + ' is a credit Sana will use against the tax she collects. The sale is recorded at ' + inr(7000) + ', not ' + inr(8260) + '; the ' + inr(1260) + ' is owed to the government.'
        })}
        ${entries([
          { date: '2026-04-12', lines: [{ acc: 'Laptop', dr: 40000 }, { acc: 'Input CGST', dr: 3600 }, { acc: 'Input SGST', dr: 3600 }, { acc: 'Bank', cr: 47200 }], narration: 'Being laptop purchased from Valley Computers, Srinagar, invoice VC/118, GST 18%' },
          { date: '2026-04-14', lines: [{ acc: 'Bank', dr: 8260 }, { acc: 'Sales', cr: 7000 }, { acc: 'Output CGST', cr: 630 }, { acc: 'Output SGST', cr: 630 }], narration: 'Being 1 pashmina shawl sold, tax invoice NC/26-27/003, received by UPI' }
        ], { caption: 'The two GST entries in full' })}
        ${callout('india', 'Input tax credit is only yours if the supplier has filed the invoice in their GSTR-1 so that it shows in your GSTR-2B, and if you pay the supplier within 180 days. The weaver who supplies Sana\'s shawls is not registered, so his bill carries no GST and there is nothing to claim. At month end the Output balances are set off against the Input balances and only the net is paid; see <a href="learn/lesson.html?id=tax-02-input-tax-credit">the ITC lesson</a>.')}
      `
    },
    {
      heading: 'Noor Crafts: the first ten transactions',
      short: 'Worked example',
      html: `
        ${example({
          title: 'April 2026 at Noor Crafts, journalised in full',
          scenario: 'Sana starts the business on 1 April. The weaver and the landlord are not GST-registered; the Delhi boutique is in another state (IGST 18%); Zaina Boutique is in Srinagar (CGST 9% + SGST 9%) and buys at the 30% dealer price of ' + inr(4900) + ' per shawl.',
          steps: [
            { label: 'Work the GST first.', html: 'Delhi: 5 shawls at ' + inr(7000) + ' = ' + inr(35000) + '; IGST 18% = ' + inr(6300) + '; invoice ' + inr(41300) + '. Zaina: 4 shawls at ' + inr(4900) + ' = ' + inr(19600) + '; CGST ' + inr(1764) + ' + SGST ' + inr(1764) + '; invoice ' + inr(23128) + '.' },
            { label: 'Then write each entry', html: 'using the three-step method. The ten entries are below.' }
          ],
          result: 'Total of all debits ' + inr(542556) + ' = total of all credits ' + inr(542556) + '. These ten entries are posted to the ledger in <a href="learn/lesson.html?id=acc-05-ledger-and-t-accounts">lesson 2.5</a>.',
          tone: 'b'
        })}
        ${entries([
          { date: '2026-04-01', lines: [{ acc: 'Bank', dr: 200000 }, { acc: 'Capital', cr: 200000 }], narration: 'Being capital introduced by Sana into the Noor Crafts current account' },
          { date: '2026-04-03', lines: [{ acc: 'Purchases', dr: 80000 }, { acc: 'Bank', cr: 80000 }], narration: 'Being 20 pashmina shawls bought from the Kanihama weaver (unregistered, no GST), paid by NEFT' },
          { date: '2026-04-05', lines: [{ acc: 'Purchases', dr: 45000 }, { acc: 'Ahmad Woodworks', cr: 45000 }], narration: 'Being 30 walnut boxes bought from Ahmad Woodworks on 30 days credit, bill no. 212' },
          { date: '2026-04-06', lines: [{ acc: 'Bank', dr: 100000 }, { acc: 'J&K Bank Loan', cr: 100000 }], narration: 'Being business loan disbursed by J&K Bank' },
          { date: '2026-04-07', lines: [{ acc: 'Bank', dr: 41300 }, { acc: 'Sales', cr: 35000 }, { acc: 'Output IGST', cr: 6300 }], narration: 'Being 5 shawls sold to a Delhi boutique at list price plus IGST 18%, invoice NC/26-27/001, received by UPI' },
          { date: '2026-04-08', lines: [{ acc: 'Rent', dr: 8000 }, { acc: 'Bank', cr: 8000 }], narration: 'Being April workshop rent paid to the landlord by bank transfer' },
          { date: '2026-04-10', lines: [{ acc: 'Zaina Boutique', dr: 23128 }, { acc: 'Sales', cr: 19600 }, { acc: 'Output CGST', cr: 1764 }, { acc: 'Output SGST', cr: 1764 }], narration: 'Being 4 shawls sold to Zaina Boutique at dealer price plus CGST 9% and SGST 9%, invoice NC/26-27/002, 30 days credit' },
          { date: '2026-04-20', lines: [{ acc: 'Bank', dr: 23128 }, { acc: 'Zaina Boutique', cr: 23128 }], narration: 'Being payment received from Zaina Boutique in full settlement of invoice NC/26-27/002' },
          { date: '2026-04-25', lines: [{ acc: 'Drawings', dr: 10000 }, { acc: 'Bank', cr: 10000 }], narration: 'Being cash withdrawn by Sana for household expenses' },
          { date: '2026-04-30', lines: [{ acc: 'Salary', dr: 12000 }, { acc: 'Bank', cr: 12000 }], narration: 'Being April salary paid to the helper by UPI' }
        ], { caption: 'Journal of Noor Crafts, April 2026' })}
      `
    },
    {
      heading: 'Common mistakes',
      short: 'Mistakes',
      html: `
        <p>Every one of these shows up in real books. Check your entries against this list before posting.</p>
        ${table(
          ['Mistake', 'What goes wrong', 'Correct treatment'],
          [
            ['Sales recorded at invoice total', 'Sales A/c shows ' + inr(41300) + ' instead of ' + inr(35000) + '; GSTR-1 and the books disagree', 'Sales at taxable value; GST to Output accounts'],
            ['Laptop debited to Purchases', 'Profit understated by ' + inr(40000) + '; no asset on the balance sheet', 'Debit the asset account; depreciate it each year'],
            ['Credit sale entered only when paid', 'March sales appear in April; debtors never show', 'Debit the customer on the invoice date, Bank when paid'],
            ['Owner\'s personal spending as expense', 'Profit and tax understated; business entity concept broken', 'Debit Drawings'],
            ['Loan received credited to Sales', 'Fake profit; GST demanded on money that was never a sale', 'Credit Loan A/c (a liability)'],
            ['No narration, no voucher number', 'Entry cannot be verified; auditor or GST officer rejects it', 'Narration with document number on every entry']
          ],
          { caption: 'Six errors to catch at the journal stage' }
        )}
        ${callout('warning', 'Cash A/c and Bank A/c are different accounts. A UPI or card payment is Bank; notes in the drawer are Cash. Mixing them makes the cash book impossible to reconcile and is the single most common beginner error in Tally.')}
        ${steps([
          'Is there a document? If not, get one before writing anything.',
          'Are exactly two sides named, and do the debits equal the credits?',
          'Is GST separated from the taxable value, with the right Input or Output account?',
          'Is the date the document date (invoice or bill), not the payment date?',
          'Does the narration say what happened and quote the document number?'
        ], { title: 'Five-second check before you post' })}
      `
    }
  ],

  keyPoints: [
    'Journal format: date, particulars (debit account then "To" credit account), L.F., debit amount, credit amount, narration.',
    'A simple entry has one debit and one credit; a compound entry has more, but debits still equal credits.',
    'Sales and Purchases carry only the taxable value. GST goes to Input (asset) or Output (liability) accounts: CGST + SGST within the state, IGST across states.',
    'Returns get their own accounts (Sales Returns, Purchase Returns). Outstanding expenses are liabilities; prepaid expenses are assets.',
    'Assets bought for use go to an asset account, never Purchases. Owner\'s personal spending is Drawings, never an expense.',
    'Date every entry by its document, number the voucher, and write a narration. An entry you cannot prove is an entry an officer will not accept.'
  ],

  practice: [
    { label: 'Accounting Simulator', sub: 'Journalise a month of transactions and see the ledger build itself', href: 'accounting-lab/index.html', icon: '⚖️' },
    { label: 'Tax Lab: GST calculator', sub: 'Split any invoice into taxable value, CGST, SGST or IGST', href: 'tax-lab/index.html', icon: '🏛️' },
    { label: 'Journal entries cheatsheet', sub: 'The standard entries on one card', href: 'cheatsheets/index.html', icon: '📑' }
  ],

  quiz: [
    {
      q: 'Noor Crafts sells a walnut box to a Mumbai customer. Taxable value ₹1,500, GST 18%, paid by UPI. Which entry is correct?',
      options: [
        'Bank Dr ₹1,770; To Sales ₹1,770',
        'Bank Dr ₹1,770; To Sales ₹1,500; To Output CGST ₹135; To Output SGST ₹135',
        'Bank Dr ₹1,770; To Sales ₹1,500; To Output IGST ₹270',
        'Bank Dr ₹1,500; To Sales ₹1,500'
      ],
      answer: 2,
      why: 'Mumbai is outside Jammu & Kashmir, so this is an inter-state supply and the whole 18% (₹270) is IGST. Sales carries only the taxable value of ₹1,500, and the bank receives the full ₹1,770.'
    },
    {
      q: 'Zaina Boutique returns one damaged shawl that it bought on credit for ₹4,900 (ignore GST). Which account is debited?',
      options: ['Sales A/c', 'Sales Returns A/c', 'Zaina Boutique A/c', 'Purchases A/c'],
      answer: 1,
      why: 'Goods coming back from a customer are returns inward, recorded in Sales Returns A/c (debit) so that gross sales stay visible. Zaina Boutique is credited because the dealer now owes less.'
    },
    {
      q: 'On 31 March the helper\'s March salary of ₹12,000 has not been paid. What should Sana record?',
      options: ['Nothing until it is paid in April', 'Salary A/c Dr; To Outstanding Salary A/c', 'Salary A/c Dr; To Bank A/c', 'Outstanding Salary A/c Dr; To Salary A/c'],
      answer: 1,
      why: 'Under the accrual concept the March salary is a March expense. Salary is debited and a liability, Outstanding Salary, is credited. When paid in April, Outstanding Salary is debited and Bank credited.'
    },
    {
      q: 'Which of these is a compound journal entry?',
      options: ['Rent A/c Dr ₹8,000; To Bank A/c ₹8,000', 'Bank A/c Dr ₹9,800 and Discount Allowed A/c Dr ₹200; To Zaina Boutique A/c ₹10,000', 'Drawings A/c Dr ₹10,000; To Bank A/c ₹10,000', 'Purchases A/c Dr ₹45,000; To Ahmad Woodworks A/c ₹45,000'],
      answer: 1,
      why: 'A compound entry has more than one debit or credit. Here two accounts are debited (Bank and Discount Allowed) against one credit, and the debits still total ₹10,000.'
    },
    {
      q: 'Sana buys a sewing machine for ₹25,000 to finish shawl edges. She debits Purchases A/c. What is the effect?',
      options: ['No effect; Purchases and assets are the same thing', 'Profit is understated by ₹25,000 and the balance sheet shows no machine', 'Profit is overstated by ₹25,000', 'GST cannot be claimed'],
      answer: 1,
      why: 'Purchases is an expense that reduces this year\'s profit in full. A machine is an asset whose cost is spread over its life through depreciation. The wrong entry hides the asset and understates profit.'
    }
  ],

  glossary: [
    ['Journal', 'The book of original entry: every transaction recorded in date order as a debit and a credit with a narration.'],
    ['Narration', 'The bracketed line under an entry explaining the transaction and citing the voucher number.'],
    ['Ledger folio (L.F.)', 'The ledger page number written beside each account in the journal when the entry is posted.'],
    ['Compound entry', 'A journal entry with more than one debit or more than one credit, whose debits still equal its credits.'],
    ['Input tax credit (ITC)', 'GST paid on business purchases that can be set off against GST collected on sales. Recorded in Input CGST / SGST / IGST accounts as an asset.'],
    ['Output tax', 'GST charged to customers on sales, owed to the government. Recorded in Output CGST / SGST / IGST accounts as a liability.']
  ]
};
