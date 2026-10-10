import { diagrams, example, callout, formula, steps, table, terms, inr } from '../lesson-kit.js';

/**
 * Lesson 2.3 - Debit & credit: Golden rules and ALCRE
 * Running examples: Noor Crafts (Sana, Srinagar) and Gupta Kirana (Rohit, Jaipur).
 * GST is left out of this lesson's entries on purpose; lesson 2.4 adds it.
 */
export default {
  id: 'acc-03-debit-credit-rules',
  title: 'Debit & credit: Golden rules and ALCRE',

  intro: `<p>Every entry in every set of books is a debit to one account and an equal credit to another. The only skill
    you need is deciding which account gets which. There are two ways to decide, the traditional "golden rules" taught in
    Indian schools and the modern ALCRE method used by software and most CAs. Both give the same answer every time.</p>`,

  outcomes: [
    'Explain what debit and credit mean (and what they do not mean) and which side of an account each one sits on.',
    'Classify any account under both the traditional (personal, real, nominal) and the modern (ALCRE) systems.',
    'Decide the debit and credit for any everyday transaction using a three-step method, and check it with the other method.'
  ],

  sections: [
    {
      heading: 'Debit and credit are just left and right',
      short: 'Left and right',
      html: `
        <p>Forget what your bank SMS says. In book-keeping <strong>debit (Dr.)</strong> means the left side of an account and
        <strong>credit (Cr.)</strong> means the right side. That is all. Debit is not "bad", credit is not "good", and neither one
        means money in or money out by itself. What a debit <em>does</em> depends on the type of account it lands in: a debit makes
        an asset bigger but makes a liability smaller.</p>
        ${diagrams.split(
          { heading: 'Debit side (left) increases', tone: 'a', items: ['Assets: cash, bank, stock, debtors, machines', 'Expenses: rent, salary, courier, purchases', 'Losses: bad debts, theft, discount allowed', 'Drawings (a reduction of capital)'] },
          { heading: 'Credit side (right) increases', tone: 'b', items: ['Liabilities: creditors, loans, GST payable', 'Capital: what the owner put in', 'Revenue: sales, commission earned', 'Gains: discount received, interest earned'] },
          { title: 'What a debit and a credit each increase', caption: 'A debit to any account on the left list makes it bigger; a credit makes it smaller. For the right list it is the reverse. The two lists are the two sides of the accounting equation.' }
        )}
        ${callout('warning', 'Your bank calls a deposit a "credit" because it is writing <em>its own</em> books, where your money is a liability it owes you. In <em>your</em> books the same deposit is a debit to Bank A/c, because bank balance is your asset. Same event, opposite labels, both correct.')}
      `
    },
    {
      heading: 'The traditional method: three types of account, three golden rules',
      short: 'Golden rules',
      html: `
        <p>The older method, still the standard in Class 11 textbooks, first sorts every account into one of three types and then
        applies one rule per type.</p>
        ${terms([
          ['Personal accounts', 'Accounts of persons: individuals (a khata customer), firms and companies (Ahmad Woodworks, J&amp;K Bank, Amazon), and representative persons (Capital A/c and Drawings A/c stand for the owner; Outstanding Salary A/c stands for the staff who are owed). <strong>Rule: debit the receiver, credit the giver.</strong>'],
          ['Real accounts', 'Accounts of things the business owns: cash, stock, furniture, machinery, a laptop, goodwill. <strong>Rule: debit what comes in, credit what goes out.</strong>'],
          ['Nominal accounts', 'Accounts of expenses, losses, incomes and gains: rent, salary, purchases, sales, commission, discount, bad debts. They exist only for the period and are closed to profit and loss at year end. <strong>Rule: debit all expenses and losses, credit all incomes and gains.</strong>']
        ])}
        ${table(
          ['Type', 'Examples', 'Debit when', 'Credit when'],
          [
            ['Personal', 'Zaina Boutique (customer), Ahmad Woodworks (supplier), J&amp;K Bank, Capital, Drawings', 'the person receives value from the business', 'the person gives value to the business'],
            ['Real', 'Cash, Stock, Laptop, Furniture, Sewing machine', 'the thing comes into the business', 'the thing goes out of the business'],
            ['Nominal', 'Rent, Salary, Purchases, Sales, Courier, Discount, Bad debts', 'it is an expense or loss', 'it is an income or gain']
          ],
          { caption: 'The three golden rules at a glance' }
        )}
        ${callout('note', 'Bank A/c is a <em>personal</em> account (the bank is a person you deal with), while Cash A/c is a <em>real</em> account (notes in a drawer). Purchases and Sales are treated as nominal accounts in most Indian textbooks; a few treat them as real. Either way the entry is the same: goods coming in are a debit, goods going out are a credit.')}
      `
    },
    {
      heading: 'The modern method: ALCRE',
      short: 'ALCRE',
      html: `
        <p>The modern method skips "what kind of person is this" and asks only: which of five elements of the accounting
        equation is this account, and is it going up or down? The five elements spell <strong>ALCRE</strong>:
        <strong>A</strong>ssets, <strong>L</strong>iabilities, <strong>C</strong>apital, <strong>R</strong>evenue, <strong>E</strong>xpenses.</p>
        ${formula('Assets + Expenses = Liabilities + Capital + Revenue', 'The expanded equation from <a href="learn/lesson.html?id=acc-02-accounting-equation">lesson 2.2</a>, with expenses moved to the left. Everything on the left grows with a debit; everything on the right grows with a credit.')}
        ${table(
          ['Element', 'Examples', 'Increase', 'Decrease', 'Normal balance'],
          [
            ['Assets', 'Bank, cash, stock, debtors, laptop', 'Debit', 'Credit', 'Debit'],
            ['Liabilities', 'Creditors, bank loan, GST payable, outstanding rent', 'Credit', 'Debit', 'Credit'],
            ['Capital', 'Owner\'s capital (drawings reduce it)', 'Credit', 'Debit', 'Credit'],
            ['Revenue', 'Sales, commission received, discount received', 'Credit', 'Debit', 'Credit'],
            ['Expenses', 'Purchases, rent, salary, courier, bad debts', 'Debit', 'Credit', 'Debit']
          ],
          { caption: 'ALCRE: the increase and decrease rules. Memory aid: left-side elements (A, E) take a left-side entry (debit) to grow.' }
        )}
        <p>Two patterns cover almost everything. Assets and expenses (the left side) <strong>increase with a debit</strong>.
        Liabilities, capital and revenue (the right side) <strong>increase with a credit</strong>. A decrease is simply the opposite
        side. Drawings is a decrease in capital, so it is debited.</p>
        ${callout('tip', 'Accounting software thinks in ALCRE. When Tally asks you to create a ledger "under" a group such as Sundry Debtors, Indirect Expenses or Loans (Liability), it is asking for the ALCRE element so that it can apply these rules automatically.')}
      `
    },
    {
      heading: 'A three-step method that works every time',
      short: '3-step method',
      html: `
        ${diagrams.flow(
          [
            { label: 'Identify the two accounts', sub: 'what changed?', tone: 'a' },
            { label: 'Classify each', sub: 'personal/real/nominal or ALCRE', tone: 'b' },
            { label: 'Apply the rule', sub: 'one Dr, one Cr, same amount', tone: 'c' }
          ],
          { title: 'Deciding any entry in three steps', caption: 'If you cannot name two accounts in step 1, you do not yet understand the transaction. Go back to the voucher.' }
        )}
        ${steps([
          '<strong>Identify the two accounts.</strong> Read the voucher and ask "what did the business get, and what did it give (or promise)?" Each answer is an account. Money through the bank is Bank A/c; a named customer or supplier is their own account; goods bought for resale are Purchases, goods sold are Sales.',
          '<strong>Classify each account</strong> as personal, real or nominal (traditional) or as A, L, C, R or E (modern). Decide whether it increased or decreased.',
          '<strong>Apply the rule</strong> and write the entry: the debited account first, the credited account below it, same amount on both sides.'
        ], { title: 'The method' })}
        ${example({
          title: 'Eight Noor Crafts transactions, both methods',
          scenario: 'Sana\'s first month, with GST left out so the rules stand alone. Ahmad Woodworks is the carpenter who supplies walnut boxes; Zaina Boutique is a Srinagar dealer who buys on credit at the 30% dealer discount (4 shawls at ' + inr(4900) + ' = ' + inr(19600) + ').',
          steps: [
            { label: 'For each row', html: 'find the two accounts, classify them, apply the rule. The table below shows the answer under both systems; the entries are identical.' }
          ],
          result: 'Total debits ' + inr(497600) + ' = total credits ' + inr(497600) + '. Whichever method you prefer, every rupee debited was credited somewhere else.'
        })}
        ${table(
          ['#', 'Transaction', 'Debit', 'Credit', 'Traditional reasoning', 'ALCRE reasoning'],
          [
            ['1', 'Sana puts ' + inr(200000) + ' into the business bank account', 'Bank ' + inr(200000), 'Capital ' + inr(200000), 'Bank (personal) receives; Capital (personal, the owner) gives', 'Asset up: Dr. Capital up: Cr'],
            ['2', 'Buys 20 shawls from a weaver, ' + inr(80000) + ' by bank transfer', 'Purchases ' + inr(80000), 'Bank ' + inr(80000), 'Purchases (nominal) is an expense; Bank (personal) gives', 'Expense up: Dr. Asset down: Cr'],
            ['3', 'Buys 30 walnut boxes from Ahmad Woodworks on credit, ' + inr(45000), 'Purchases ' + inr(45000), 'Ahmad Woodworks ' + inr(45000), 'Purchases (nominal) is an expense; Ahmad Woodworks (personal) gives', 'Expense up: Dr. Liability up: Cr'],
            ['4', 'Takes a ' + inr(100000) + ' loan from J&amp;K Bank', 'Bank ' + inr(100000), 'J&amp;K Bank Loan ' + inr(100000), 'Bank (personal) receives; J&amp;K Bank (personal) gives', 'Asset up: Dr. Liability up: Cr'],
            ['5', 'Sells 5 shawls to a Delhi boutique, ' + inr(35000) + ' by UPI', 'Bank ' + inr(35000), 'Sales ' + inr(35000), 'Bank (personal) receives; Sales (nominal) is an income', 'Asset up: Dr. Revenue up: Cr'],
            ['6', 'Pays workshop rent ' + inr(8000) + ' by bank', 'Rent ' + inr(8000), 'Bank ' + inr(8000), 'Rent (nominal) is an expense; Bank (personal) gives', 'Expense up: Dr. Asset down: Cr'],
            ['7', 'Sells 4 shawls to Zaina Boutique on credit, ' + inr(19600), 'Zaina Boutique ' + inr(19600), 'Sales ' + inr(19600), 'Zaina Boutique (personal) receives; Sales (nominal) is an income', 'Asset (debtor) up: Dr. Revenue up: Cr'],
            ['8', 'Sana withdraws ' + inr(10000) + ' for household expenses', 'Drawings ' + inr(10000), 'Bank ' + inr(10000), 'Drawings (personal, the owner) receives; Bank (personal) gives', 'Capital down: Dr. Asset down: Cr']
          ],
          { caption: 'Noor Crafts: the same eight entries under both systems' }
        )}
      `
    },
    {
      heading: 'Both methods, same answer',
      short: 'Mapping',
      html: `
        <p>The two systems are two maps of the same territory. Here is how every traditional rule lines up with an ALCRE rule.
        Use whichever you find quicker, and use the other one to check.</p>
        ${table(
          ['Traditional account type', 'Golden rule', 'ALCRE element', 'ALCRE rule', 'Same result?'],
          [
            ['Personal: customer / debtor', 'Debit the receiver', 'Asset (debtor)', 'Asset up: debit', 'Yes'],
            ['Personal: supplier / lender', 'Credit the giver', 'Liability (creditor, loan)', 'Liability up: credit', 'Yes'],
            ['Personal: owner (Capital)', 'Credit the giver', 'Capital', 'Capital up: credit', 'Yes'],
            ['Personal: owner (Drawings)', 'Debit the receiver', 'Capital (reduction)', 'Capital down: debit', 'Yes'],
            ['Real: cash, stock, machine', 'Debit what comes in', 'Asset', 'Asset up: debit', 'Yes'],
            ['Real: cash, stock, machine', 'Credit what goes out', 'Asset', 'Asset down: credit', 'Yes'],
            ['Nominal: rent, salary, purchases', 'Debit all expenses and losses', 'Expense', 'Expense up: debit', 'Yes'],
            ['Nominal: sales, commission, discount received', 'Credit all incomes and gains', 'Revenue', 'Revenue up: credit', 'Yes']
          ],
          { caption: 'Every golden rule is an ALCRE rule wearing a different name' }
        )}
        ${example({
          title: 'A day at Gupta Kirana',
          scenario: 'Rohit\'s Jaipur grocery store runs on cash, UPI and khata (credit to regular customers). Four entries from one Tuesday.',
          steps: [
            { label: 'Stock arrives from Jaipur Agencies on credit, ' + inr(60000) + '.', html: 'Purchases Dr (expense up / nominal, expense), Jaipur Agencies Cr (liability up / personal, giver).' },
            { label: 'Counter sales for the day, ' + inr(8500) + ' in cash.', html: 'Cash Dr (asset up / real, comes in), Sales Cr (revenue up / nominal, income).' },
            { label: 'Mrs Sharma takes groceries on khata, ' + inr(1200) + '.', html: 'Mrs Sharma Dr (asset up: she is now a debtor / personal, receiver), Sales Cr (revenue up).' },
            { label: 'Electricity bill ' + inr(2300) + ' paid by UPI.', html: 'Electricity Dr (expense up / nominal, expense), Bank Cr (asset down / personal, giver).' }
          ],
          result: 'Debits ' + inr(72000) + ', credits ' + inr(72000) + '. When Mrs Sharma pays her ' + inr(1200) + ' next week, Cash will be debited and Mrs Sharma credited, closing her khata to zero.',
          tone: 'b'
        })}
        ${callout('warning', 'Three mistakes account for most wrong entries. (1) Treating a loan received as income: it is a liability, credit Loan A/c, not Sales. (2) Treating the owner\'s drawings as an expense: it reduces capital and never touches profit. (3) Debiting Purchases for a laptop or a machine: goods bought <em>for resale</em> are Purchases; things bought <em>to use</em> are assets with their own account.')}
      `
    }
  ],

  keyPoints: [
    'Debit means the left side of an account; credit means the right side. Neither is good or bad on its own.',
    'Golden rules: personal, debit the receiver and credit the giver; real, debit what comes in and credit what goes out; nominal, debit expenses and losses, credit incomes and gains.',
    'ALCRE: Assets and Expenses increase with a debit; Liabilities, Capital and Revenue increase with a credit. Decreases go the opposite way.',
    'Three steps for any entry: identify the two accounts, classify them, apply the rule. Same amount on both sides.',
    'Both methods always agree. Drawings is a debit (capital down), a loan received is a credit (liability up), a machine bought is an asset, not Purchases.',
    'Your bank\'s "credit" SMS is written from the bank\'s books. In your books that deposit is a debit to Bank A/c.'
  ],

  practice: [
    { label: 'Accounting Simulator', sub: 'Pick a transaction and see which account is debited and credited, under both rules', href: 'accounting-lab/index.html', icon: '⚖️' },
    { label: 'Golden Rules cheatsheet', sub: 'Traditional and ALCRE side by side on one card', href: 'cheatsheets/index.html', icon: '📑' },
    { label: 'Quiz: Debit or credit?', sub: 'Rapid-fire classification practice', href: 'quiz/index.html', icon: '❓' }
  ],

  quiz: [
    {
      q: 'Noor Crafts pays the courier company ₹1,800 by UPI. Which entry is correct?',
      options: ['Bank A/c Dr, To Courier Charges A/c', 'Courier Charges A/c Dr, To Bank A/c', 'Courier Charges A/c Dr, To Cash A/c', 'Purchases A/c Dr, To Bank A/c'],
      answer: 1,
      why: 'Courier is an expense (nominal / E), so it is debited. The payment left the bank account, so Bank (personal, giver / asset down) is credited. It was UPI, not cash, so Cash A/c is wrong.'
    },
    {
      q: 'Under ALCRE, which pair increases with a credit?',
      options: ['Assets and Expenses', 'Liabilities and Revenue', 'Expenses and Capital', 'Assets and Revenue'],
      answer: 1,
      why: 'Liabilities, Capital and Revenue sit on the right of the equation and grow with a credit. Assets and Expenses sit on the left and grow with a debit.'
    },
    {
      q: 'Rohit buys a new weighing scale for the shop for ₹6,500 in cash. Which account is debited?',
      options: ['Purchases A/c', 'Weighing Scale (or Equipment) A/c', 'Cash A/c', 'Capital A/c'],
      answer: 1,
      why: 'The scale is bought to use, not to resell, so it is an asset (real account: debit what comes in). Purchases is only for goods meant for resale. Cash goes out, so Cash is credited.'
    },
    {
      q: 'Which of these is a personal account under the traditional classification?',
      options: ['Stock A/c', 'Rent A/c', 'Outstanding Salary A/c', 'Discount Received A/c'],
      answer: 2,
      why: 'Outstanding Salary represents the staff to whom salary is owed, so it is a representative personal account. Stock is real; Rent and Discount Received are nominal.'
    },
    {
      q: 'Sana takes two walnut boxes (cost ₹1,800) home as gifts for relatives. What is the entry?',
      options: ['Gifts Expense A/c Dr, To Purchases A/c', 'Drawings A/c Dr, To Purchases A/c', 'Sales A/c Dr, To Drawings A/c', 'No entry, because no money moved'],
      answer: 1,
      why: 'Goods taken by the owner for personal use are drawings, a reduction of capital, so Drawings is debited. The goods leave the business, so Purchases is credited at cost. It is not an expense of the business and not a sale.'
    }
  ],

  glossary: [
    ['Debit (Dr.)', 'The left side of an account. Increases assets, expenses and losses; decreases liabilities, capital and revenue.'],
    ['Credit (Cr.)', 'The right side of an account. Increases liabilities, capital, revenue and gains; decreases assets and expenses.'],
    ['Personal account', 'An account of a person, firm or company, or of someone they represent (Capital, Drawings, Outstanding Expenses).'],
    ['Real account', 'An account of a thing the business owns: cash, stock, furniture, machinery, goodwill.'],
    ['Nominal account', 'An account of an expense, loss, income or gain. It is closed to the Profit and Loss account at year end.'],
    ['ALCRE', 'Assets, Liabilities, Capital, Revenue, Expenses: the five elements of the modern classification.']
  ]
};
