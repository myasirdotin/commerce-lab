import { diagrams, example, callout, steps, checklist, table, compare, terms, inr } from '../lesson-kit.js';

/**
 * Lesson 1.6 - Bookkeeping from day one
 * Running example: Noor Crafts (Sana, Srinagar) - pashmina shawls and walnut boxes,
 * sold D2C online and to dealers in Delhi and Mumbai. Sole proprietorship, GST-registered.
 */
export default {
  id: 'start-06-books-from-day-one',
  title: 'Bookkeeping from day one',

  intro: `<p>Most small brands do not fail at selling; they fail at <strong>knowing</strong>. A WhatsApp order here, a UPI payment there,
    a weaver paid in cash, and by month three nobody can say what was sold, who still owes money, or whether the business made a profit.
    Bookkeeping is simply writing every rupee down, in the right register, the same week it moves. Start on day one and it takes
    thirty minutes a week. Start in year two and your CA spends three weeks reconstructing it, and bills you for every one of them.</p>`,

  outcomes: [
    'Name the six registers a small product brand needs and say what goes into each.',
    'Tell cash basis from accrual basis, and explain why GST forces you to track invoices by date, not by payment.',
    'Run a 30-minute weekly routine and hand your CA a complete pack every month.'
  ],

  sections: [
    {
      heading: 'From a receipt to a balance sheet',
      short: 'The flow',
      html: `
        <p>Every number in a Profit &amp; Loss account started life as a piece of paper: an invoice, a bill, a bank entry.
        The paper is the <strong>source document</strong>. You copy it into a <strong>register</strong> (a simple list, one row per transaction).
        The registers feed the <strong>ledger</strong>, where each account (Sales, Rent, J&amp;K Bank) collects its own entries.
        From the ledger come the trial balance and the final statements. Your job as owner is the first two boxes. Do them well and
        the rest is mechanical, whether a CA, Tally or a spreadsheet does it.</p>
        ${diagrams.flow(
          [
            { label: 'Source document', sub: 'invoice, bill, bank entry', tone: 'a' },
            { label: 'Register', sub: 'one row per transaction', tone: 'b' },
            { label: 'Ledger', sub: 'one account per heading', tone: 'c' },
            { label: 'Trial balance', sub: 'all balances listed', tone: 'd' },
            { label: 'Statements', sub: 'P&L, balance sheet, GST returns', tone: 'e' }
          ],
          { title: 'How a transaction travels through the books', caption: 'Nothing can appear on the right that was not written down on the left. Missing receipts become missing expenses, and missing expenses become extra tax.' }
        )}
        ${callout('tip', 'Number every invoice you issue in one unbroken series for the financial year (for example NC/26-27/001, 002, 003). Keep a folder, paper or Drive, named by month, and drop every bill and receipt in it the day you get it. Half of bookkeeping is just not losing paper.')}
      `
    },
    {
      heading: 'The six registers you need',
      short: 'Six registers',
      html: `
        <p>A product brand with one bank account does not need a complicated system. It needs six lists, kept up to date.</p>
        ${terms([
          ['Cash &amp; bank book', 'Every rupee in and out, in date order, with a running balance: one column set for cash in hand, one for the bank account. Moving money between the two (an ATM withdrawal) is a <em>contra entry</em>: it appears on both sides and is not income or expense.'],
          ['Sales register', 'One row per invoice: date, invoice number, buyer (and GSTIN if registered), what was sold, taxable value, GST charged, total. This is the raw material of your GSTR-1.'],
          ['Purchase register', 'One row per supplier bill for goods you resell or use in the product: weaver, carpenter, packaging. Note the supplier\'s GSTIN and the GST on the bill, because that GST is your input tax credit.'],
          ['Expense register', 'Everything else you spend on running the business: rent, helper\'s salary, courier, phone, advertising, gateway fees. Mark which bills carry GST.'],
          ['Stock register', 'Per product: opening units, units bought, units sold, closing units. Count physically at month end and write the difference down honestly.'],
          ['Debtors &amp; creditors lists', 'Who owes you (dealers on credit) and whom you owe (weavers, the bank), with the amount and the due date. These two lists decide whether you can pay the rent next month.']
        ])}
      `
    },
    {
      heading: 'Cash basis or accrual basis?',
      short: 'Cash vs accrual',
      html: `
        <p>There are two ways to decide <em>when</em> a sale or expense belongs in the books. <strong>Cash basis</strong>: record it when money
        actually moves. <strong>Accrual basis</strong> (also called the mercantile system): record it when the sale or purchase happens, whether or not
        money has moved yet. Most people start on cash basis because it feels natural. Here is why it misleads.</p>
        ${table(
          ['Event', 'Cash basis', 'Accrual basis'],
          [
            ['28 March: invoice ' + inr(49000) + ' to Meher Boutique, Delhi. They pay on 20 April.', 'Sale recorded in April (next financial year)', 'Sale recorded in March (this year)'],
            ['25 March: weaver\'s bill ' + inr(40000) + ' for those shawls. Sana pays on 15 April.', 'Expense recorded in April', 'Expense recorded in March'],
            ['Profit shown for March', inr(0), inr(9000)],
            ['Profit shown for April', inr(9000), inr(0)]
          ],
          { caption: 'The same two transactions, two different pictures of two different years' }
        )}
        <p>Accrual puts the sale and its cost in the same month, so each month\'s profit is real. Cash basis makes busy months look poor
        and collection months look rich. Accrual also produces your debtors and creditors lists automatically: an unpaid invoice <em>is</em> a debtor.</p>
        ${callout('india', 'GST does not give you a choice. Tax is due by the <strong>time of supply</strong>, normally the invoice date, whether or not the customer has paid. The Meher Boutique invoice goes in March\'s GSTR-1 and its tax is paid with March\'s return. For income tax, a proprietor may follow either system consistently (Section 145), but once you are GST-registered, keeping the sales register on invoice dates means you are already on accrual. Use it.')}
      `
    },
    {
      heading: 'A starter chart of accounts',
      short: 'Accounts',
      html: `
        <p>A <strong>chart of accounts</strong> is the list of headings your transactions are sorted into. Too few and you cannot answer
        "what did courier cost us this year?". Too many and you stop filing things correctly. This set suits a small product brand; add a
        heading only when you have a question that needs it.</p>
        ${table(
          ['Group', 'Accounts', 'What goes here'],
          [
            ['Assets', 'Cash in hand; J&K Bank current A/c; Stock: shawls; Stock: boxes; Debtors; Input GST (ITC); Equipment', 'What the business owns or is owed. Equipment is the laptop, packing table, camera.'],
            ['Liabilities', 'Creditors; J&K Bank loan; Output GST payable', 'What the business owes. GST collected from customers is a liability until deposited.'],
            ['Capital', 'Capital; Drawings', 'Sana\'s money in, and anything she takes home.'],
            ['Income', 'Sales: shawls; Sales: boxes; Shipping recovered', 'Taxable value only, never including GST.'],
            ['Expenses', 'Purchases; Helper salary; Workshop rent; Packaging; Courier; Marketplace & gateway fees; Advertising; Interest on loan; Bank, phone, internet', 'Keep packaging and courier separate: they are the two costs that grow with every order.']
          ],
          { caption: 'Starter chart of accounts for Noor Crafts' }
        )}
        ${callout('remember', 'Record sales and purchases at their <strong>taxable value</strong> and put the GST in its own account. A ' + inr(8260) + ' online order is ' + inr(7000) + ' of sales and ' + inr(1260) + ' of output GST owed to the government. Mixing them overstates your income and hides your tax liability.')}
      `
    },
    {
      heading: 'One week at Noor Crafts, entered',
      short: 'Worked week',
      html: `
        ${example({
          title: 'The week of 6 to 12 April 2026',
          scenario: 'Sana starts the week with ' + inr(120000) + ' in J&amp;K Bank, ' + inr(2000) + ' cash, 15 shawls in stock, and Aarna Boutique (Mumbai) owing ' + inr(35000) + ' from March. Shawls are priced ' + inr(7000) + ' before GST; dealers pay 30% less, ' + inr(4900) + '. A shawl is above ' + inr(2500) + ' per piece, so GST is 18%, charged as IGST because the buyers are outside J&amp;K.',
          steps: [
            { label: 'Mon 6 Apr.', html: 'Weaver Ghulam Nabi delivers 10 shawls, bill W-14, ' + inr(40000) + ', on credit. He is unregistered, so no GST and no ITC. Purchase register + creditors list + stock register (15 + 10 = 25).' },
            { label: 'Tue 7 Apr.', html: 'Online customer in Delhi buys 2 shawls: taxable ' + inr(14000) + ' + IGST ' + inr(2520) + ' = ' + inr(16520) + ', paid by UPI. Invoice NC/26-27/001. Sales register + bank book + stock (25 − 2 = 23).' },
            { label: 'Wed 8 Apr.', html: 'Meher Boutique, Delhi, takes 10 shawls at ' + inr(4900) + ': taxable ' + inr(49000) + ' + IGST ' + inr(8820) + ' = ' + inr(57820) + ', 30 days credit. Invoice NC/26-27/002. Sales register + debtors list + stock (23 − 10 = 13).' },
            { label: 'Thu 9 Apr.', html: 'April rent ' + inr(8000) + ' paid to the landlord by bank transfer. No GST (he is unregistered). Expense register + bank book.' },
            { label: 'Fri 10 Apr.', html: '100 packaging boxes from Srinagar Packaging (registered): ' + inr(12000) + ' + CGST ' + inr(1080) + ' + SGST ' + inr(1080) + ' = ' + inr(14160) + ', paid by UPI. Purchase register (ITC ' + inr(2160) + ') + bank book.' },
            { label: 'Sat 11 Apr.', html: 'Courier bill for 10 shipments: ' + inr(900) + ' + CGST ' + inr(81) + ' + SGST ' + inr(81) + ' = ' + inr(1062) + ', paid by UPI. Expense register + bank book. Sana also withdraws ' + inr(5000) + ' cash from the ATM for petty expenses: contra entry in the cash &amp; bank book only.' },
            { label: 'Sun 12 Apr.', html: 'Aarna Boutique pays ' + inr(20000) + ' by NEFT against its March invoice. Bank book + debtors list (balance now ' + inr(15000) + ').' }
          ],
          result: 'Seven events, every one written in at least two places. That double trace is what lets the week be checked.'
        })}
        ${table(
          ['Date', 'Invoice', 'Buyer', 'Items', 'Taxable value', 'IGST 18%', 'Total'],
          [
            ['07-04-2026', 'NC/26-27/001', 'Online customer, Delhi (B2C)', '2 shawls', inr(14000), inr(2520), inr(16520)],
            ['08-04-2026', 'NC/26-27/002', 'Meher Boutique, Delhi (B2B, GSTIN)', '10 shawls', inr(49000), inr(8820), inr(57820)]
          ],
          { align: ['l', 'l', 'l', 'l', 'r', 'r', 'r'], caption: 'Sales register', total: ['Total', '', '', '', inr(63000), inr(11340), inr(74340)] }
        )}
        ${table(
          ['Date', 'Register', 'Supplier', 'What', 'Taxable', 'GST (ITC)', 'Total', 'Paid'],
          [
            ['06-04-2026', 'Purchase', 'Ghulam Nabi (unregistered)', '10 shawls', inr(40000), 'nil', inr(40000), 'Credit, due 21 Apr'],
            ['09-04-2026', 'Expense', 'Landlord', 'April rent', inr(8000), 'nil', inr(8000), 'Bank'],
            ['10-04-2026', 'Purchase', 'Srinagar Packaging', '100 boxes', inr(12000), inr(2160), inr(14160), 'UPI'],
            ['11-04-2026', 'Expense', 'Courier (registered)', '10 shipments', inr(900), inr(162), inr(1062), 'UPI']
          ],
          { align: ['l', 'l', 'l', 'l', 'r', 'r', 'r', 'l'], caption: 'Purchase and expense registers', total: ['Total', '', '', '', inr(60900), inr(2322), inr(63222), ''] }
        )}
        ${table(
          ['Date', 'Particulars', 'In', 'Out', 'Balance'],
          [
            ['06-04-2026', 'Opening balance', '', '', inr(120000)],
            ['07-04-2026', 'Online sale NC/26-27/001 (UPI)', inr(16520), '', inr(136520)],
            ['09-04-2026', 'Workshop rent, April', '', inr(8000), inr(128520)],
            ['10-04-2026', 'Srinagar Packaging', '', inr(14160), inr(114360)],
            ['11-04-2026', 'Courier', '', inr(1062), inr(113298)],
            ['11-04-2026', 'Cash withdrawn (contra)', '', inr(5000), inr(108298)],
            ['12-04-2026', 'Aarna Boutique, part payment', inr(20000), '', inr(128298)]
          ],
          { align: ['l', 'l', 'r', 'r', 'r'], caption: 'Bank book (J&amp;K Bank current account)' }
        )}
        <p>Closing position on Sunday night: bank ${inr(128298)}, cash ${inr(7000)}, 13 shawls, debtors ${inr(72820)}
        (Meher ${inr(57820)} + Aarna ${inr(15000)}), creditors ${inr(40000)}. GST so far this month: output IGST ${inr(11340)} less ITC ${inr(2322)}
        = ${inr(9018)} to pay, since CGST and SGST credit can be set off against IGST. Sana knows all of this on Sunday night; a cash-basis owner would only know the bank balance.</p>
      `
    },
    {
      heading: 'The weekly routine and the monthly handover',
      short: 'Routine',
      html: `
        <p>Pick one fixed slot, say Sunday 9 pm, and run the same six steps every week. Thirty minutes is enough for up to about fifty transactions.</p>
        ${diagrams.cycle(
          ['Tick bank statement', 'Enter sales', 'Enter purchases, expenses', 'Update stock', 'Chase debtors', 'Count cash'],
          { title: 'Sunday routine', caption: 'Each step checks the one before it: the bank statement catches a missed sale, the stock count catches a missed purchase.' }
        )}
        ${steps([
          'Download the week\'s bank statement and tick every line against the bank book. Anything unticked is a transaction you forgot to record. (5 min)',
          'Enter every invoice issued this week in the sales register, in invoice-number order. A gap in the numbers means a missing invoice. (7 min)',
          'Enter every supplier bill and expense receipt, noting GSTIN and GST amount, and file the paper or PDF in the month\'s folder. (7 min)',
          'Update the stock register: units in, units out, closing. Once a month, count physically. (5 min)',
          'Update the debtors list and message anyone past the due date. Update creditors with new bills and due dates. (3 min)',
          'Count the cash drawer and compare with the cash book. Write down any difference instead of forcing it to match. (3 min)'
        ], { title: 'The 30-minute week' })}
        ${checklist([
          'Sales register for the month with copies of all invoices and any credit notes',
          'Purchase and expense registers with the GST bills, so ITC can be matched to GSTR-2B',
          'Bank statement for the month and the ticked bank book; cash book',
          'Debtors and creditors lists as on month end, with due dates',
          'Stock register with the month-end physical count',
          'Anything new: an asset bought, a loan taken or repaid, money Sana put in or took out'
        ], { title: 'What to hand the CA every month' })}
        ${compare([
          { title: 'Excel / Google Sheets', tone: 'a', points: ['Free, flexible, you already know it', 'One tab per register, SUMIF for totals', 'Fine up to roughly 50 invoices a month', 'Returns still have to be prepared by hand'] },
          { title: 'Tally Prime', tone: 'b', points: ['The standard every CA already uses', 'Registers, ledger, GST returns and stock in one place', 'Needs a short learning curve and a Windows PC', 'Best once a CA or staff member also enters data'] },
          { title: 'Zoho Books, Vyapar, myBillBook', tone: 'c', points: ['Phone and cloud based; invoice from anywhere', 'GST-compliant invoices and e-way bills built in', 'Monthly subscription; export to your CA', 'Good first step beyond a spreadsheet'] }
        ])}
        ${callout('tip', 'Move from a spreadsheet to software when any one of these happens: more than about 50 invoices a month, a second person entering data, stock in more than a handful of product lines, or your CA asking for a Tally export. Above ' + inr(50000000) + ' turnover, e-invoicing is mandatory and a spreadsheet simply cannot do it.', 'When to move')}
      `
    }
  ],

  keyPoints: [
    'Six registers run a small brand: cash &amp; bank book, sales, purchases, expenses, stock, and the debtors and creditors lists.',
    'Accrual basis records a sale on the invoice date, cash basis on the payment date. GST follows the invoice date, so use accrual.',
    'Record sales and purchases at taxable value; GST goes in its own account. A ' + inr(8260) + ' order is ' + inr(7000) + ' of sales plus ' + inr(1260) + ' of tax you owe.',
    'Every transaction lands in at least two places; the bank statement and the stock count are the checks that catch what you missed.',
    'Thirty minutes every Sunday, one folder per month, and a fixed monthly pack for the CA. Move to software when volume or people grow.'
  ],

  practice: [
    { label: 'Excel Lab', sub: 'Build the six registers with SUMIF totals', href: 'excel-lab/index.html', icon: '📗' },
    { label: 'Accounting Simulator', sub: 'Post this week\'s transactions and watch the ledger', href: 'accounting-lab/index.html', icon: '⚖️' },
    { label: 'Lesson: Cash book & petty cash', sub: 'The cash and bank book in full detail', href: 'learn/lesson.html?id=acc-07-cash-book-petty-cash', icon: '📘' }
  ],

  quiz: [
    {
      q: 'Sana invoices Meher Boutique on 28 March and receives payment on 20 April. Under the accrual basis, in which month is the sale recorded?',
      options: ['April, when the money arrived', 'March, when the invoice was issued', 'Whichever month Sana prefers', 'Half in each month'],
      answer: 1,
      why: 'Accrual records a sale when it happens, which is the invoice date. GST also treats 28 March as the time of supply, so the tax belongs to March\'s return.'
    },
    {
      q: 'Sana withdraws ' + inr(5000) + ' from the ATM for petty expenses. Where does it go?',
      options: ['Expense register, under cash expenses', 'Cash &amp; bank book only, as a contra entry', 'Drawings, because cash left the bank', 'Nowhere until the cash is actually spent'],
      answer: 1,
      why: 'Money moved from the bank column to the cash column; nothing was spent and nothing was taken home. It is a contra entry. The expenses go in the register later, when the cash is used.'
    },
    {
      q: 'An online order is paid as ' + inr(8260) + ' including 18% GST. What does the sales register show as taxable value?',
      options: [inr(8260), inr(7000), inr(6775), inr(1260)],
      answer: 1,
      why: inr(7000) + ' is the sale; ' + inr(1260) + ' is output GST that belongs to the government. Record them separately or your income and your tax liability will both be wrong.'
    },
    {
      q: 'Which list tells Sana on Sunday night how much the dealers still owe her?',
      options: ['Stock register', 'Debtors list', 'Purchase register', 'Bank book'],
      answer: 1,
      why: 'The debtors list holds every unpaid invoice with its due date. After the week it shows Meher ' + inr(57820) + ' and Aarna ' + inr(15000) + ', a total of ' + inr(72820) + ' to collect.'
    }
  ],

  glossary: [
    ['Source document', 'The original evidence of a transaction: an invoice, a supplier bill, a bank entry, a receipt.'],
    ['Register', 'A simple chronological list of one kind of transaction (sales, purchases, expenses), one row each.'],
    ['Accrual basis', 'Recording income and expenses when they are earned or incurred, not when money moves. Also called the mercantile system.'],
    ['Contra entry', 'A transfer between cash and bank. Appears in both columns of the cash &amp; bank book; not an income or expense.'],
    ['Chart of accounts', 'The list of account headings a business sorts its transactions into.'],
    ['GSTR-2B', 'The auto-drafted statement on the GST portal showing the input tax credit available to you based on what your suppliers filed.']
  ]
};
