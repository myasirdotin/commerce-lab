import { diagrams, example, callout, formula, steps, table, journal, terms, inr } from '../lesson-kit.js';

/**
 * Lesson 1.4 - Bank account, UPI & payment gateways
 * Running example: Noor Crafts (Sana, Srinagar). A ₹10,000 online order
 * followed from the customer's phone to the books.
 */
export default {
  id: 'start-04-bank-and-payments',
  title: 'Bank account, UPI & payment gateways',

  intro: `<p>Every rupee a customer pays you travels through a bank, a UPI app, a payment gateway or a marketplace before it reaches
    you, and each of those takes a cut, holds the money for a day or two, or both. If you understand the path, your books will match your
    bank statement and you will know what each channel really costs. If you do not, the first GST return and the first loan application
    will both go wrong.</p>`,

  outcomes: [
    'Explain why the business needs its own current account and what the bank will ask for.',
    'Compare what UPI, cards, payment gateways, marketplaces and cash on delivery cost on a ₹10,000 sale.',
    'Record a gateway sale, its fee, the GST on the fee and the net payout as journal entries.',
    'Reconcile a gateway payout statement against your sales register and spot the gaps.'
  ],

  sections: [
    {
      heading: 'The money path in one picture',
      short: 'The path',
      html: `
        <p>A direct bank transfer or a UPI payment to your QR code lands in your account the same day, with nothing deducted. A card payment
        on your website, or a sale on a marketplace, goes through an intermediary first. That intermediary is where fees, holding periods
        and reconciliation problems live.</p>
        ${diagrams.flow(
          [
            { label: 'Customer pays', sub: 'card, UPI, net banking on your site', tone: 'a' },
            { label: 'Gateway holds', sub: 'Razorpay, PayU, Cashfree', tone: 'b' },
            { label: 'Payout T+2', sub: 'fee and GST deducted', tone: 'c' },
            { label: 'Current account', sub: 'one line per payout batch', tone: 'd' },
            { label: 'Books', sub: 'sales, fees, ITC, reconciliation', tone: 'e' }
          ],
          { title: 'From the customer\'s phone to your books', caption: 'The bank statement shows one net amount per payout batch. Your books must show the full sale, the fee and the GST on the fee separately, because GST is charged on the full sale and the fee is an expense with input credit.' }
        )}
        <p>T+2 means the money reaches your account two working days after the customer paid. Over a long weekend that becomes four calendar days.
        A marketplace such as Amazon or Flipkart settles on a weekly cycle after the order is delivered, so money from a sale made today may
        arrive in two or three weeks.</p>
      `
    },
    {
      heading: 'Why a separate current account',
      short: 'Current account',
      html: `
        <p>Accounting treats the business and its owner as two different persons, even for a proprietor. This is the <strong>business entity
        concept</strong>, and the bank account is where it becomes real. A separate current account in the name "Noor Crafts" gives you:</p>
        ${terms([
          ['A clean record', 'Every line on the statement is a business event. Your books, your GST returns and your income-tax return all reconcile to it. Mixing household spending into the same account means separating thousands of lines at year end, or paying a CA to do it.'],
          ['Proof for lenders', 'Banks assess a loan from 6 to 12 months of business bank statements. Personal UPI transfers from friends and family do not count as turnover; credits into a current account in the trade name do.'],
          ['Lower deemed profit under 44AD', 'If you use presumptive tax, receipts through the bank are deemed to earn 6% profit, against 8% for cash. A traceable account is cheaper in tax.'],
          ['UPI and gateway onboarding', 'Gateways and marketplaces settle only into an account whose name matches the business name on your GST or Udyam certificate.']
        ])}
        <p>To open one, carry your PAN, Aadhaar, two photos, the Udyam certificate or GST certificate or Shop and Establishment licence as proof the
        business exists, and the rent agreement or electricity bill as address proof. A partnership adds the deed and every partner's KYC; a company
        adds the certificate of incorporation, MOA and AOA, and a board resolution naming the signatories. Accounts open in one to seven days.</p>
        ${callout('warning', 'Keep personal money out. When you put savings in, record it as <em>capital</em>; when you take money home, record it as <em>drawings</em>. Never pay the grocer from the business card or let a cousin "park" money in the account for a week. Each of those is a line a tax officer will ask about and a lender will discount.')}
      `
    },
    {
      heading: 'What each payment method costs',
      short: 'Costs',
      html: `
        <p>The headline fee is never the whole fee. A payment gateway charges a percentage of the transaction and then charges 18% GST on that
        percentage, because the gateway's service is itself a taxable supply. Marketplaces stack several fees. Cash on delivery adds a fixed charge
        plus the risk that the parcel comes back unpaid.</p>
        ${diagrams.split(
          { heading: 'Little or no cost', tone: 'a', items: ['UPI QR at the counter: 0% (no MDR on UPI)', 'Bank transfer NEFT / IMPS: nil for the receiver', 'Cash: no fee, but counting, deposit trips and no record'] },
          { heading: 'Costs you money', tone: 'e', items: ['Gateway (cards, UPI, net banking on your site): about 2% + 18% GST on the fee', 'Marketplace: referral fee 5% to 20% by category, plus closing and shipping fees', 'Cash on delivery: ₹30 to ₹50 per parcel plus returns that cost two couriers', 'Instant settlement: extra 0.1% to 0.3% for same-day money'] },
          { title: 'Payment methods by what they take', caption: 'Zero-fee methods suit a counter and known dealers. Fees are the price of reaching strangers across India; the question is whether your contribution per order covers them.' }
        )}
        ${table(
          ['Method', 'Fee on a ₹10,000 sale', 'When you get the money', 'Best for'],
          [
            ['UPI QR code (bank or PhonePe / Paytm for Business)', inr(0), 'Same day', 'Walk-in buyers, known dealers, exhibitions'],
            ['Bank transfer from a dealer', inr(0), 'Same day', 'Bulk invoices'],
            ['Payment gateway on own website', '₹200 + ₹36 GST = ₹236', 'T+2 (T+1 or instant for an extra charge)', 'Online D2C orders'],
            ['Marketplace (Amazon, Flipkart)', 'About ₹1,500 to ₹2,500 after referral, closing and shipping fees', 'Weekly cycle after delivery', 'Reach and discovery; thin margin'],
            ['Cash on delivery via courier aggregator', '₹236 gateway-equivalent plus about ₹50 COD charge; ₹180 more if returned', '7 to 10 days after delivery', 'Only when customers will not prepay']
          ],
          { caption: 'Illustrative costs at a 2% gateway rate. Each provider publishes its own schedule; check it before you sign up and whenever it changes.' }
        )}
        ${formula('Net payout = Sale value − Gateway fee − 18% GST on the fee', 'For a 2% gateway: ₹10,000 − ₹200 − ₹36 = ₹9,764. The ₹36 comes back as input tax credit if the gateway\'s invoice carries your GSTIN.')}
        ${callout('india', 'UPI payments to a merchant carry no merchant discount rate, so a printed QR code linked to your current account is the cheapest way to get paid in person. Ask your bank for a merchant QR in the business name; a QR generated from a personal savings account puts every sale into the wrong account.')}
      `
    },
    {
      heading: 'A ₹10,000 order, from gateway to books',
      short: 'Worked order',
      html: `
        ${example({
          title: 'Order NC/26-27/042 on the Noor Crafts website',
          scenario: 'On 5 October a customer in Pune buys a shawl (₹7,000) and two walnut boxes (₹3,000) and pays ₹10,000 by card through Razorpay. The gateway charges 2% plus GST and settles on T+2. Here the ₹10,000 is the invoice total; how it splits into taxable value and GST is lesson 1.5, and the GST ledgers are lesson 1.6. This lesson follows the cash.',
          steps: [
            { label: 'Gateway fee:', html: '2% of ₹10,000 = <strong>₹200</strong>.' },
            { label: 'GST on the fee:', html: '18% of ₹200 = <strong>₹36</strong>. Razorpay is in Karnataka and Noor Crafts in J&K, so this is IGST, and Sana can claim it as input tax credit because the gateway\'s monthly invoice shows her GSTIN.' },
            { label: 'Net payout on 7 October:', html: '₹10,000 − ₹200 − ₹36 = <strong>₹9,764</strong> credited to the current account, bundled with any other orders settling that day.' },
            { label: 'What the books must show:', html: 'a sale of ₹10,000 (not ₹9,764), an expense of ₹200, input IGST of ₹36 and a bank receipt of ₹9,764. The gateway account in between starts at ₹10,000 and ends at zero.' }
          ],
          result: 'Sale ₹10,000 = payout ₹9,764 + fee ₹200 + GST on fee ₹36. If Sana recorded only the ₹9,764 that hit the bank, her GST return would under-report sales by ₹236 per order and she would lose the ₹36 credit on each one.',
          tone: 'a'
        })}
        ${journal([
          { date: '5 Oct', debit: 'Razorpay (gateway)', credit: 'Sales', amount: 10000, narration: 'Order NC/26-27/042: one shawl and two walnut boxes, paid by card' },
          { date: '7 Oct', debit: 'Bank (J&K Bank current)', credit: 'Razorpay (gateway)', amount: 9764, narration: 'Settlement of order 042 net of charges' },
          { date: '7 Oct', debit: 'Payment gateway charges', credit: 'Razorpay (gateway)', amount: 200, narration: 'Gateway fee at 2% on order 042' },
          { date: '7 Oct', debit: 'Input IGST', credit: 'Razorpay (gateway)', amount: 36, narration: 'IGST at 18% on gateway fee, ITC claimable' }
        ], { caption: 'Journal entries for one gateway order' })}
        <p>The gateway account is a <strong>receivable</strong>: money the gateway owes you between the customer paying and the payout. Its balance on any day
        should equal the "unsettled" figure on the gateway dashboard. When it does not, something is missing from your books.</p>
      `
    },
    {
      heading: 'Reconciling a payout with the sales register',
      short: 'Reconcile',
      html: `
        <p>Reconciliation means proving that two independent records agree: the gateway's payout report and your own sales register. Do it
        for every payout, or weekly at the least. Here is one payout for Noor Crafts.</p>
        ${table(
          ['Order', 'Sale value', 'Fee 2%', 'GST on fee', 'Net'],
          [
            ['NC/26-27/042', inr(10000), inr(200), inr(36), inr(9764)],
            ['NC/26-27/043', inr(5000), inr(100), inr(18), inr(4882)],
            ['NC/26-27/044', inr(2500), inr(50), inr(9), inr(2441)]
          ],
          { align: ['l', 'r', 'r', 'r', 'r'], total: ['Payout of 7 October', inr(17500), inr(350), inr(63), inr(17087)], caption: 'Gateway payout report. The bank statement shows a single credit of ₹17,087.' }
        )}
        ${steps([
          'Open the payout report and your sales register side by side. Tick each order number in the report against the register.',
          'Check that the sum of ticked sales (₹17,500) minus fees (₹350) minus GST on fees (₹63) equals the bank credit (₹17,087).',
          'Any order in the register but not in the report is still unsettled, refunded or failed. Any order in the report but not in the register is a sale you never invoiced.',
          'Post one entry for the batch: Bank ₹17,087, gateway charges ₹350, input IGST ₹63, all against the gateway account for ₹17,500.',
          'Refunds appear in the report as negative lines and reduce the payout. Record them as a sales return (lesson 1.5 covers the credit note) so that the register, the report and the bank agree.'
        ], { title: 'Reconciling one payout' })}
        ${callout('tip', 'Put the gateway payment ID and your invoice number in both systems: on the gateway as the order reference, and in the register as a column. Reconciliation then takes minutes, and a customer dispute six months later can be answered from one lookup.')}
        ${callout('warning', 'Marketplaces deduct fees, TCS under GST (section 52) and sometimes TDS under section 194-O before paying you. The sale is still the full price. Book the gross sale, each deduction as its own line, and claim the TCS and TDS in your GST and income-tax returns. Treating the net payout as the sale understates turnover and loses the credits.')}
      `
    }
  ],

  keyPoints: [
    'The business is a separate person: one current account in the trade name, with savings entered as capital and money taken home entered as drawings.',
    'UPI QR and bank transfers cost nothing. Gateways take about 2% plus 18% GST on the fee; marketplaces take 5% to 20% plus closing and shipping fees; COD adds ₹30 to ₹50 and return risk.',
    'Net payout = sale − fee − GST on fee. On ₹10,000 at 2%: ₹10,000 − ₹200 − ₹36 = ₹9,764, two working days later.',
    'Always book the gross sale, the fee as an expense and the GST on the fee as input credit. The gateway account is a receivable that returns to zero after each payout.',
    'Reconcile every payout against the sales register: matched order numbers, totals that agree with the bank credit, refunds recorded as returns.',
    'Marketplaces also deduct GST TCS and income-tax TDS. Book them as separate lines and claim them in the returns.'
  ],

  practice: [
    { label: 'Accounting Lab', sub: 'Post the gateway sale, fee and settlement entries and watch the gateway account return to zero', href: 'accounting-lab/index.html', icon: '⚖️' },
    { label: 'Excel Lab', sub: 'Build a sales register with order ID, gateway ID and payout columns', href: 'excel-lab/index.html', icon: '📊' },
    { label: 'Bank reconciliation statement', sub: 'The full method, lesson 2.8', href: 'learn/lesson.html?id=acc-08-bank-reconciliation', icon: '🏦' }
  ],

  quiz: [
    {
      q: 'A customer pays ₹10,000 through a gateway that charges 2% plus GST. What reaches the current account?',
      options: ['₹9,800', '₹9,764', '₹10,000', '₹9,640'],
      answer: 1,
      why: 'Fee 2% = ₹200; GST at 18% on the fee = ₹36; payout = ₹10,000 − ₹200 − ₹36 = ₹9,764. The ₹36 is claimable as input tax credit.'
    },
    {
      q: 'Which figure should Sana record as the sale for the order above?',
      options: ['₹9,764, the amount received', '₹10,000, the invoice value, with the fee and GST on the fee booked separately', '₹9,800, the sale net of the fee', '₹10,236, sale plus the gateway\'s GST'],
      answer: 1,
      why: 'GST on the sale is charged on the full invoice value, and the gateway fee is a business expense with its own input credit. Booking the net amount understates sales and loses the credit.'
    },
    {
      q: 'Why does a merchant UPI QR code cost the shop nothing while a card payment through a gateway costs about 2%?',
      options: ['Because UPI is run by the government for free', 'Because there is no merchant discount rate on UPI person-to-merchant payments, while card networks and gateways charge one', 'Because UPI payments are not taxable', 'Because UPI settles only after a week'],
      answer: 1,
      why: 'UPI merchant payments carry no MDR under current policy, so banks and apps pass on nothing to the merchant. Card acquiring and gateway services are charged for, and that charge attracts 18% GST.'
    },
    {
      q: 'Sana pays her household electricity bill from the Noor Crafts current account. How should this be recorded?',
      options: ['As an electricity expense of the business', 'As drawings, reducing her capital', 'It need not be recorded because it is her own money', 'As a loan from the business to the landlord'],
      answer: 1,
      why: 'Under the business entity concept, personal spending from business funds is drawings: it reduces the owner\'s capital and is not a business expense. Better still, do not do it; transfer money to a personal account first.'
    }
  ],

  glossary: [
    ['Business entity concept', 'The rule that the business is a separate person from its owner for accounting purposes, even in a sole proprietorship.'],
    ['Payment gateway', 'A service (Razorpay, PayU, Cashfree, Paytm) that accepts cards, UPI and net banking on a website and settles the money to the merchant\'s bank account after deducting its fee.'],
    ['Settlement (T+2)', 'The transfer of collected money from the gateway or marketplace to the merchant\'s account; T+2 means two working days after the transaction.'],
    ['MDR (merchant discount rate)', 'The percentage a merchant pays on a card payment to the bank and network. Currently nil for UPI merchant payments.'],
    ['Drawings', 'Money or goods the owner takes out of the business for personal use. Reduces capital; it is not an expense.'],
    ['Reconciliation', 'Matching two independent records of the same money, such as a gateway payout report and the sales register, and explaining every difference.']
  ]
};
