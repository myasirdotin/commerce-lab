import { diagrams, example, callout, formula, steps, table, journal, terms, inr } from '../lesson-kit.js';

/**
 * Lesson 3.2 - Bad debts & provisions
 * Running example: Noor Crafts (Sana, Srinagar). Figures are for FY 2026-27 and
 * tie to the Trading A/c, P&L and Balance Sheet used in lessons 3.3 to 3.6:
 * debtors ₹1,70,000, old provision ₹5,000, new provision ₹8,500 (5%),
 * bad debts written off ₹6,000, bad debts recovered ₹2,000.
 */
export default {
  id: 'fin-02-bad-debts-provisions',
  title: 'Bad debts & provisions',

  intro: `<p>Every time you sell on credit you lend money to a customer. Most pay. Some pay late. A few never pay.
    Accounting has two tools for this: a <strong>bad debt</strong> write-off when the money is definitely gone, and a
    <strong>provision for doubtful debts</strong> for the money you <em>expect</em> to lose but cannot yet name.
    Get these right and your profit stops being a fairy tale.</p>`,

  outcomes: [
    'Record a bad debt, a bad debt recovered, and a provision for doubtful debts with the correct journal entries.',
    'Calculate a provision as a percentage of closing debtors, and adjust an existing provision up or down.',
    'Build an aging schedule for your own debtors and use it to decide the provision and whom to chase.',
    'Show exactly where each item appears in the Profit &amp; Loss account and the balance sheet.'
  ],

  sections: [
    {
      heading: 'From debtor to write-off, in one picture',
      short: 'The picture',
      html: `
        <p>A credit sale creates a <strong>debtor</strong>, an asset. Time passes. If the customer is slow, the debt becomes
        <strong>doubtful</strong>, so you set aside a <strong>provision</strong>: an estimate of the loss, charged to profit now.
        If the customer finally fails, the debt becomes <strong>bad</strong> and is written off, removed from the books for good.</p>
        ${diagrams.flow(
          [
            { label: 'Credit sale', sub: 'dealer gets 45 days', tone: 'a' },
            { label: 'Debtor', sub: 'asset: money owed to you', tone: 'b' },
            { label: 'Doubtful', sub: 'overdue, may not pay', tone: 'c' },
            { label: 'Provision', sub: 'expected loss booked', tone: 'd' },
            { label: 'Write-off', sub: 'bad debt: gone', tone: 'e' }
          ],
          { title: 'The life of a credit sale that goes wrong', caption: 'The provision is an <em>estimate</em> made while the customer still owes you. The write-off is a <em>fact</em>: the money is not coming.' }
        )}
        <p>Two accounting ideas drive all of this. <strong>Prudence</strong>: never show a profit you are not reasonably sure of, but do
        show a loss as soon as it is likely. <strong>Matching</strong>: the cost of a credit sale that goes bad belongs to the year in
        which you made the sale, not the year you finally gave up chasing.</p>
      `
    },
    {
      heading: 'Bad debts: when the money is definitely gone',
      short: 'Bad debts',
      html: `
        ${terms([
          ['Bad debt', 'An amount owed by a customer that you have decided is <strong>irrecoverable</strong>: the shop closed, the owner vanished, the dispute was lost. It is written off as an expense.'],
          ['Bad debt recovered', 'Money that turns up <em>after</em> you wrote the debt off. It is a gain for the year it arrives, credited to a separate account, never put back into the customer\'s ledger.'],
          ['Provision for doubtful debts', 'A percentage of year-end debtors set aside for the ones you think will not pay. It reduces profit and is shown as a deduction from debtors in the balance sheet.']
        ])}
        <p>In November 2026 a Mumbai boutique, Marine Drive Decor, shut down owing Noor Crafts <strong>₹6,000</strong> for walnut boxes. Sana writes it off.
        In August 2026 a Delhi dealer she had written off in the previous year sent <strong>₹2,000</strong> by UPI. That is a recovery.</p>
        ${journal([
          { date: '12 Nov 2026', debit: 'Bad Debts', credit: 'Marine Drive Decor', amount: 6000, narration: 'Dues from boutique that closed down written off as irrecoverable' },
          { date: '20 Aug 2026', debit: 'Bank', credit: 'Bad Debts Recovered', amount: 2000, narration: 'Part recovery of a debt written off in FY 2025-26' },
          { date: '31 Mar 2027', debit: 'Profit and Loss', credit: 'Bad Debts', amount: 6000, narration: 'Bad debts for the year transferred to P&L' }
        ], { caption: 'Noor Crafts: bad debt written off and a recovery' })}
        ${callout('warning', 'When old money arrives, do <strong>not</strong> debit Bank and credit the customer. The customer\'s account is already closed. Credit <em>Bad Debts Recovered A/c</em>, which goes to the credit side of the P&amp;L as an income.')}
      `
    },
    {
      heading: 'Provision for doubtful debts: expecting the loss before it happens',
      short: 'Provision',
      html: `
        <p>At 31 March you do not know <em>which</em> dealer will fail next year, but experience says some will. So you estimate a percentage of
        closing debtors and charge it to this year\'s profit. The provision is not cash set aside; it is an accounting reserve that reduces
        the debtor figure to what you realistically expect to collect.</p>
        ${formula('New provision = Closing debtors (after writing off bad debts) × %', 'Always write off known bad debts first, then apply the percentage to what is left.')}
        ${formula('Charge to P&L = Bad debts + New provision − Old provision', 'If the result is negative, the old provision was too big; the excess is written back as income.')}
        <p>Noor Crafts carried an <strong>old provision of ₹5,000</strong> from last year. Closing debtors are ₹1,70,000 and the policy is 5%,
        so the new provision is ₹8,500. Only the <em>increase</em> of ₹3,500 is charged this year.</p>
        ${table(
          ['Situation', 'Old provision', 'New provision needed', 'Effect on P&L'],
          [
            ['Debtors grew, risk up (Noor Crafts)', inr(5000), inr(8500), { html: 'Debit ₹3,500 (expense)' }],
            ['Debtors fell, risk down', inr(5000), inr(4000), { html: 'Credit ₹1,000 (written back as income)' }],
            ['First year, no old provision', inr(0), inr(8500), { html: 'Debit ₹8,500' }]
          ],
          { align: ['l', 'r', 'r', 'l'], caption: 'Adjusting an existing provision up or down' }
        )}
        ${journal([
          { date: '31 Mar 2027', debit: 'Profit and Loss', credit: 'Provision for Doubtful Debts', amount: 3500, narration: 'Provision raised from ₹5,000 to 5% of debtors ₹1,70,000 = ₹8,500' }
        ], { caption: 'Raising the provision' })}
        <p><strong>Provision for discount on debtors</strong> works the same way but for a different reason: if you offer 2% off for prompt
        payment, some good debtors will take it. It is calculated on <em>good</em> debtors only (debtors minus the doubtful provision):
        ₹1,61,500 × 2% = ₹3,230. Most small businesses skip it; Noor Crafts does. Exam questions love it, so know the order: bad debts first,
        then doubtful provision, then discount provision.</p>
        ${callout('remember', 'The provision for doubtful debts lives in the <strong>balance sheet</strong> as a deduction from debtors. Only the <em>change</em> in it goes through the P&amp;L. Students lose marks by charging the whole new provision every year.')}
      `
    },
    {
      heading: 'Noor Crafts: the aging schedule in practice',
      short: 'Aging',
      html: `
        <p>A flat 5% is a shortcut. The better method, and the one your CA will respect, is an <strong>aging schedule</strong>: sort every unpaid
        invoice by how old it is, and apply a higher percentage the older it gets. Tally and most invoicing apps print this report in one click.</p>
        ${example({
          title: 'Noor Crafts\' debtors at 31 March 2027',
          scenario: 'After writing off Marine Drive Decor, 14 dealers and boutiques owe Noor Crafts a total of <strong>₹1,70,000</strong>. Sana ages the invoices and applies the percentages her CA suggested.',
          steps: [
            { label: 'Build the buckets.', html: 'Dealers are on 45-day terms, so anything under 30 days is normal. 31-60 days is a nudge. 61-90 days is a problem. Over 90 days is probably a loss.' },
            { label: 'Apply a percentage to each bucket.', html: 'The riskier the bucket, the higher the percentage. See the table below.' },
            { label: 'Add up.', html: '₹1,000 + ₹2,000 + ₹2,000 + ₹3,500 = <strong>₹8,500</strong>, which is 5% of ₹1,70,000. That is where the 5% policy came from.' },
            { label: 'Compare with the old provision.', html: 'Old provision ₹5,000. Increase needed ₹3,500, charged to P&amp;L.' }
          ],
          result: 'Debtors shown in the balance sheet at ₹1,70,000 − ₹8,500 = <strong>₹1,61,500</strong>. Total charge to P&amp;L for the year: bad debts ₹6,000 + provision increase ₹3,500 = ₹9,500, less bad debts recovered ₹2,000 on the income side.'
        })}
        ${table(
          ['Age of invoice', 'Amount owed', 'Expected loss %', 'Provision'],
          [
            ['0-30 days', inr(100000), '1%', inr(1000)],
            ['31-60 days', inr(40000), '5%', inr(2000)],
            ['61-90 days', inr(20000), '10%', inr(2000)],
            ['Over 90 days', inr(10000), '35%', inr(3500)]
          ],
          { align: ['l', 'r', 'r', 'r'], caption: 'Aging schedule, 31 March 2027', total: ['Total', inr(170000), '5.0%', inr(8500)] }
        )}
        ${diagrams.bars(
          [
            { label: '0-30 days', value: 100000, tone: 'a' },
            { label: '31-60 days', value: 40000, tone: 'c' },
            { label: '61-90 days', value: 20000, tone: 'd' },
            { label: 'Over 90 days', value: 10000, tone: 'e' }
          ],
          { title: 'Noor Crafts debtors by age', caption: 'Healthy shape: most money is fresh. If the right-hand bars start growing, your provision and your phone calls both need to go up.' }
        )}
        ${table(
          ['Statement', 'Line', 'Amount'],
          [
            ['P&L (debit side)', 'Bad debts written off', inr(6000)],
            ['P&L (debit side)', 'Provision for doubtful debts (₹8,500 − ₹5,000)', inr(3500)],
            ['P&L (credit side)', 'Bad debts recovered', inr(2000)],
            ['Balance sheet (assets)', 'Debtors ₹1,70,000 less provision ₹8,500', inr(161500)]
          ],
          { align: ['l', 'l', 'r'], caption: 'Where each item lands in the final accounts' }
        )}
      `
    },
    {
      heading: 'For the owner: chasing the money',
      short: 'For owners',
      html: `
        <p>A provision records the damage; it does not prevent it. The aging report is also your <strong>collection to-do list</strong>.
        Sana\'s rule is that the Over-90 bucket should never contain more than one name.</p>
        ${steps([
          'Day 1: send the invoice with payment terms printed on it (45 days for dealers) and a UPI QR code.',
          'Day 30: a WhatsApp reminder with the invoice attached. Polite, automatic.',
          'Day 45: a phone call, not a message. Ask for a date, write the date down.',
          'Day 60: stop fresh supplies until the account is cleared. Most dealers pay within a week of this.',
          'Day 90: a written demand quoting the MSME payment rule below. Decide whether the debt is doubtful or bad.'
        ], { title: 'A collection routine that works for a small brand' })}
        ${callout('india', 'If Noor Crafts is <strong>Udyam-registered</strong> as a micro enterprise, Section 43B(h) of the Income-tax Act means a buyer who does not pay her within 45 days (15 days without a written agreement) loses the tax deduction for that purchase in that year. Mentioning this in a reminder is a legal, effective nudge for a dealer\'s accountant.')}
        ${callout('tip', 'Offer dealers a small discount for payment within 7 days rather than a bigger credit limit. A 2% discount on a ₹50,000 order costs ₹1,000; a bad debt of ₹50,000 costs ₹50,000.')}
      `
    }
  ],

  keyPoints: [
    'A <strong>bad debt</strong> is a known loss: debit Bad Debts, credit the customer. A <strong>provision</strong> is an estimated loss: debit P&amp;L, credit Provision for Doubtful Debts.',
    'Write off bad debts first, then calculate the provision as a % of what remains.',
    'Only the <em>change</em> in the provision hits the P&amp;L: bad debts + new provision − old provision.',
    'Bad debts recovered are an income in the year received; never reopen the customer\'s account.',
    'In the balance sheet the provision is deducted from debtors so you see what you realistically expect to collect.',
    'An aging schedule (0-30, 31-60, 61-90, 90+ days) gives a sharper provision and tells you whom to call today.'
  ],

  practice: [
    { label: 'Accounting Simulator', sub: 'See how a bad debt and a provision move the P&L and balance sheet', href: 'accounting-lab/index.html', icon: '⚖️' },
    { label: 'Calculators', sub: 'Build an aging schedule for your own debtors', href: 'calculators/index.html', icon: '🧮' },
    { label: 'MIS Lab', sub: 'Add a debtor-aging report to your monthly pack', href: 'mis-lab/index.html', icon: '📈' }
  ],

  quiz: [
    {
      q: 'Noor Crafts has debtors of ₹1,70,000 after write-offs, an old provision of ₹5,000 and wants a 5% provision. What is charged to this year\'s P&L for the provision?',
      options: ['₹8,500', '₹3,500', '₹5,000', '₹13,500'],
      answer: 1,
      why: 'New provision = 5% × ₹1,70,000 = ₹8,500. Old provision already in the books = ₹5,000. Only the increase, ₹3,500, is charged this year.'
    },
    {
      q: 'A customer written off last year pays ₹2,000 this year. The correct entry is:',
      options: [
        'Debit Bank, credit the customer\'s account',
        'Debit Bank, credit Bad Debts Recovered',
        'Debit Bad Debts, credit Bank',
        'Debit Bank, credit Provision for Doubtful Debts'
      ],
      answer: 1,
      why: 'The customer\'s account was closed when the debt was written off. The recovery is a fresh income, credited to Bad Debts Recovered and shown on the credit side of the P&L.'
    },
    {
      q: 'Where does the provision for doubtful debts appear in the balance sheet?',
      options: [
        'As a liability under creditors',
        'As a deduction from capital',
        'As a deduction from debtors on the assets side',
        'It does not appear; it is only in the P&L'
      ],
      answer: 2,
      why: 'The provision reduces debtors to the amount you realistically expect to collect. Noor Crafts shows debtors ₹1,70,000 less provision ₹8,500 = ₹1,61,500.'
    },
    {
      q: 'Which accounting principle says you should record an expected loss on debtors before it actually happens?',
      options: ['Going concern', 'Prudence (conservatism)', 'Money measurement', 'Business entity'],
      answer: 1,
      why: 'Prudence tells you to anticipate losses but not gains. Matching supports it too: the loss belongs to the year of the sale that caused it.'
    }
  ],

  glossary: [
    ['Bad debt', 'A debt that is definitely irrecoverable and is written off as an expense.'],
    ['Provision for doubtful debts', 'An estimated amount set aside against year-end debtors who may not pay, shown as a deduction from debtors.'],
    ['Aging schedule', 'A report that sorts unpaid invoices into buckets by how many days they are overdue.'],
    ['Write-back', 'Reducing a provision that is bigger than needed; the excess is credited to the P&L as income.'],
    ['Prudence', 'The principle of recognising likely losses immediately but gains only when realised.'],
    ['Provision for discount on debtors', 'An estimate of cash discounts good debtors will claim for prompt payment, calculated after the doubtful-debts provision.']
  ]
};
