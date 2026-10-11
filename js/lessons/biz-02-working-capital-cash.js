import { diagrams, example, callout, formula, table, terms, checklist, inr } from '../lesson-kit.js';

/**
 * Lesson 4.2 - Working capital & cash flow
 * Running examples: Noor Crafts (Sana, Srinagar), Gupta Kirana (Rohit, Jaipur),
 * Chai Adda (Meera, Pune).
 */
export default {
  id: 'biz-02-working-capital-cash',
  title: 'Working capital & cash flow',

  intro: `<p>Businesses do not close because the P&amp;L shows a loss. They close because on a Tuesday the weaver wants ₹1,00,000, the
    rent is due, and the dealer who owes ₹3,50,000 says "next month". <strong>Profit is an opinion; cash is a fact.</strong>
    This lesson shows you where cash hides, how to see a shortage coming, and the cheapest ways to bridge it.</p>`,

  outcomes: [
    'Explain why a profitable business can run out of cash, using the cash cycle (stock days + debtor days − creditor days).',
    'Compute working capital and build a monthly cash budget that shows the gap before it arrives.',
    'Choose between the levers (collect faster, pay slower, hold less stock, take advances) and the financing options, with their rough costs.'
  ],

  sections: [
    {
      heading: 'Where the cash goes: the operating cycle',
      short: 'The cycle',
      html: `
        <p>Every rupee you spend on stock takes a round trip before it comes home. You pay the supplier, the goods sit on a shelf,
        you sell them (often on credit), and finally the customer pays. The longer that trip, the more cash you need to keep the
        business running even when every sale is profitable.</p>
        ${diagrams.cycle(
          [
            { label: 'Pay supplier', tone: 'e' },
            { label: 'Stock sits', tone: 'c' },
            { label: 'Sell on credit', tone: 'd' },
            { label: 'Customer pays', tone: 'a' },
            { label: 'Cash back in bank', tone: 'b' }
          ],
          { title: 'The cash cycle', caption: 'Cash leaves at "pay supplier" and returns at "customer pays". The days between the two are the cash cycle, and every one of them must be funded by someone.' }
        )}
        ${formula('Cash cycle (days) = Stock days + Debtor days − Creditor days', 'Stock days: how long goods wait before sale. Debtor days: how long customers take to pay. Creditor days: how long you take to pay suppliers (which shortens the gap).')}
        ${table(
          ['Business', 'Stock days', 'Debtor days', 'Creditor days', 'Cash cycle'],
          [
            ['Noor Crafts (dealer sales)', '90', '60', '15', '135 days'],
            ['Gupta Kirana', '20', '7 (khata)', '15', '12 days'],
            ['Chai Adda', '3', '0', '7', '−4 days']
          ],
          { align: ['l', 'r', 'r', 'r', 'r'], caption: 'Three businesses, three very different cash cycles' }
        )}
        <p>Chai Adda\'s cycle is <em>negative</em>: customers pay cash before Meera pays the milk supplier, so growth brings cash in.
        Noor Crafts is the opposite. Sana pays weavers early, holds shawls for months and gives dealers 60 days, so every dealer order
        <strong>sucks cash out</strong> for over four months before it returns with a profit attached. That is why artisan brands feel
        poorer the faster they grow.</p>
      `
    },
    {
      heading: 'Working capital in plain language',
      short: 'Working capital',
      html: `
        ${terms([
          ['Current assets', 'Cash, bank balance, stock, debtors, and advances you have paid. Things that are cash or will turn into cash within a year.'],
          ['Current liabilities', 'Creditors, GST and TDS payable, salaries due, the overdraft, and loan instalments due within a year.'],
          ['Working capital', 'Current assets minus current liabilities: the cushion of short-term resources the business runs on. The question is how much of it is <em>cash</em> rather than stock and debtors.']
        ])}
        ${formula('Working capital = Current assets − Current liabilities', 'Noor Crafts in October: (bank ₹1,10,000 + stock ₹2,40,000 + debtors ₹85,000) − (creditors ₹60,000 + GST payable ₹12,000) = ₹4,35,000 − ₹72,000 = ₹3,63,000.')}
        <p>₹3,63,000 sounds healthy, but ₹3,25,000 of it is shawls on shelves and dealers who have not paid. Only ₹1,10,000 can pay
        a bill tomorrow. Working capital measures the size of the cushion; the cash budget tells you whether it is where you need it, when you need it.</p>
        ${callout('warning', 'The classic trap: a big order arrives, you buy stock for it, deliver, invoice, and for 60 days you cannot pay salaries. The order was profitable; the business still nearly died. Big orders need a cash plan <em>before</em> you say yes.')}
      `
    },
    {
      heading: 'The cash budget: seeing the gap before it arrives',
      short: 'Cash budget',
      html: `
        <p>A cash budget is a table with one column per month: opening cash plus receipts minus payments equals closing cash, which
        becomes next month\'s opening. Do it for the next three to six months and a shortage shows up as a negative number weeks before it reaches the bank.</p>
        ${formula('Closing cash = Opening cash + Receipts − Payments', 'Receipts and payments are actual cash movements, not sales and expenses. A credit sale is a receipt only in the month the customer pays.')}
        ${example({
          title: 'Noor Crafts takes a ₹3,50,000 dealer order',
          scenario: 'On 1 June a Mumbai boutique chain orders 50 shawls at the dealer price of ₹4,900 (₹2,45,000) and 100 walnut boxes at ₹1,050 (₹1,05,000): <strong>₹3,50,000, payable 60 days after delivery</strong>. Sana has ₹1,50,000 in the bank. Her regular online sales bring in about ₹1,00,000 a month, against ₹64,300 of purchases, packaging and courier and ₹20,000 of fixed costs.',
          steps: [
            { label: 'Cost the order.', html: '50 shawls × ₹4,000 = ₹2,00,000; 100 boxes × ₹900 = ₹90,000; bulk transport ₹6,000. Total cash out <strong>₹2,96,000</strong>. Gross profit on the order: ₹3,50,000 − ₹2,96,000 = ₹54,000.' },
            { label: 'Time the payments.', html: 'The weaver and carpenter want 50% advance on 1 June (₹1,00,000 + ₹45,000 = ₹1,45,000) and the balance on delivery, 1 July (₹1,45,000 + ₹6,000 transport = ₹1,51,000).' },
            { label: 'Time the receipt.', html: 'Goods dispatched and invoiced 5 July. Payment due 60 days later: <strong>3 September</strong>.' }
          ],
          result: 'Closing cash goes negative in July (−₹1,14,600) and stays negative through August. A profitable order has created a two-month hole of over a lakh. Sana must fund it or refuse the order.'
        })}
        ${table(
          ['', 'June', 'July', 'August', 'September'],
          [
            ['Opening cash', inr(150000), inr(20700), inr(-114600), inr(-98900)],
            ['Receipts: online sales', inr(100000), inr(100000), inr(100000), inr(100000)],
            ['Receipts: dealer pays', '–', '–', '–', inr(350000)],
            ['Payments: regular purchases, courier, fixed', inr(84300), inr(84300), inr(84300), inr(84300)],
            ['Payments: dealer order (advances / balance + transport)', inr(145000), inr(151000), '–', '–']
          ],
          { align: ['l', 'r', 'r', 'r', 'r'], caption: 'Noor Crafts cash budget, June to September', total: [{ html: '<strong>Closing cash</strong>' }, inr(20700), { html: '<strong>' + inr(-114600) + '</strong>' }, { html: '<strong>' + inr(-98900) + '</strong>' }, inr(266800)] }
        )}
        ${diagrams.bars(
          [
            { label: 'June', value: 20700, tone: 'a' },
            { label: 'July', value: -114600, tone: 'e' },
            { label: 'August', value: -98900, tone: 'e' },
            { label: 'September', value: 266800, tone: 'a' }
          ],
          { title: 'Closing cash by month', caption: 'The hole opens when the balance is paid to the artisans and closes only when the dealer pays. Two months of negative cash must be funded.' }
        )}
        ${callout('india', 'The gap is actually bigger. GST on the July invoice goes into Sana\'s GSTR-3B for July, due 20 August, whether or not the dealer has paid her: at 18% on ₹3,50,000 that is ₹63,000 (less any ITC), a fortnight before the dealer\'s money arrives. Show GST payments as a separate line in the cash budget, and verify the rate for your product; shawls above ₹2,500 per piece attract 18%.')}
        ${callout('tip', 'For tight months, switch to a <strong>13-week cash forecast</strong>: the same table with weekly columns for the next quarter, because salaries, GST, EMIs and big supplier payments land on specific dates that a monthly view can hide. Roll it forward every Monday.')}
      `
    },
    {
      heading: 'Levers: shortening the cycle before borrowing',
      short: 'Levers',
      html: `
        <p>Borrowing should be the last step, because every other lever is cheaper. Each one attacks one of the three numbers in the cash cycle.</p>
        ${checklist([
          '<strong>Collect faster (debtor days).</strong> Ask for a 30% advance with the order; Sana\'s ₹1,05,000 advance would shrink the July gap to under ₹10,000. Offer 2% off for payment within 10 days. Invoice on the day of dispatch and remind three days before the due date.',
          '<strong>Negotiate credit (creditor days).</strong> Ask regular suppliers for 15 or 30 days. Even moving the artisans from 50% advance to 25% would free ₹72,500 in June.',
          '<strong>Reduce stock (stock days).</strong> Make to order for slow designs; keep only fast sellers in stock. Every ₹1,00,000 of stock that does not need to exist is ₹1,00,000 of free financing.',
          '<strong>Deposits from dealers.</strong> A refundable security deposit, or shipping the first order against full payment, protects you from new dealers you do not yet trust.'
        ], { title: 'Four levers, cheapest first' })}
        ${callout('india', 'Section 43B(h) of the Income-tax Act works for you as a micro or small enterprise: a buyer who does not pay a Udyam-registered supplier within 15 days (45 with a written agreement) loses the tax deduction for that purchase until it is paid. Print your Udyam number on the invoice; many larger buyers now pay MSMEs faster because of it.')}
      `
    },
    {
      heading: 'Financing the gap: options and what they cost',
      short: 'Financing',
      html: `
        ${table(
          ['Option', 'How it works', 'Rough cost', 'Good for'],
          [
            ['Bank overdraft / cash credit', 'A limit (say ₹1,50,000 to ₹10 lakh) against stock, debtors or property. You draw what you need and pay interest only on the amount used, daily.', '10-13% a year plus a processing fee of 0.5-1%', 'Recurring seasonal gaps; the cheapest if you qualify'],
            ['Invoice discounting (bank, NBFC or TReDS)', 'The financier pays you 70-90% of a dealer invoice now and collects from the dealer on the due date. Through TReDS platforms (RXIL, M1xchange, Invoicemart) for invoices on larger buyers.', 'About 1-1.5% a month, roughly 9-16% a year, depending on the buyer', 'One-off large orders to credit-worthy buyers'],
            ['MUDRA loan (PMMY)', 'Collateral-free loan through a bank or NBFC: Shishu up to ₹50,000, Kishore to ₹5 lakh, Tarun to ₹10 lakh, Tarun Plus to ₹20 lakh. Can be a working-capital limit.', '9-12% a year, varies by bank', 'First formal credit for a small, Udyam-registered business'],
            ['CGTMSE-covered loan', 'Not a loan itself: a government guarantee that lets a bank lend up to ₹5 crore without collateral. The bank passes on the guarantee fee.', 'Normal interest plus a guarantee fee of about 0.4-1.35% a year', 'Larger limits when you have no property to pledge'],
            ['Dealer advance', 'Customer funds part of the order up front.', 'Zero, or a small extra discount', 'Always ask first']
          ],
          { caption: 'Working-capital finance for a small business (verify current rates and scheme limits with the bank)' }
        )}
        ${example({
          title: 'Two ways to fund the ₹1,14,600 hole',
          scenario: 'Sana compares a cash-credit limit from J&K Bank with discounting the dealer invoice.',
          steps: [
            { label: 'Option A: cash credit of ₹1,50,000 at 11% a year.', html: 'Draw about ₹1,20,000 on 1 July and repay on 3 September when the dealer pays. Interest for two months: ₹1,20,000 × 11% × 2 ÷ 12 = <strong>₹2,200</strong>, plus a processing fee of around ₹1,000. The limit must be sanctioned <em>before</em> the order; that takes two to four weeks.' },
            { label: 'Option B: discount the invoice at 1.5% a month.', html: 'On 5 July the financier advances 80% of ₹3,50,000 = ₹2,80,000. July closing becomes ₹20,700 + ₹1,00,000 + ₹2,80,000 − ₹2,35,300 = ₹1,65,400: no gap at all. Cost: ₹2,80,000 × 1.5% × 2 months = <strong>₹8,400</strong>. On 3 September the financier collects ₹3,50,000 and pays Sana the balance ₹70,000 − ₹8,400 = ₹61,600.' },
            { label: 'Compare with the order\'s profit.', html: 'Gross profit on the order is ₹54,000. Option A eats 4% of it, Option B about 16%. Both beat refusing the order, and both beat paying GST late at 18% interest plus ₹50 a day.' }
          ],
          result: 'A cash-credit limit is cheaper but must exist in advance; invoice discounting costs more but can be arranged in days against a good buyer. Best: set up Option A now and negotiate a 30% dealer advance on top, so the limit is barely used.',
          tone: 'b'
        })}
        ${callout('remember', 'Cash problems are solved before they happen, not during. A sanctioned limit you never use costs almost nothing. A loan you need by Friday costs whatever the lender wants.')}
      `
    }
  ],

  keyPoints: [
    'Profit and cash are different. A profitable order can empty the bank for months if you pay suppliers before customers pay you.',
    'Cash cycle = stock days + debtor days − creditor days. Every day of it must be funded. Shorten any of the three to free cash.',
    'Working capital = current assets − current liabilities. Look at how much of it is cash versus stock and debtors.',
    'A monthly cash budget (opening + receipts − payments = closing) shows the gap weeks ahead. Use a 13-week version when things are tight.',
    'Cheapest fixes first: advances, faster collection, supplier credit, less stock. Then a cash-credit limit (10-13%), then invoice discounting (1-1.5% a month).',
    'GST on an invoice is payable by the 20th of the next month even if the customer has not paid. Put it in the budget.'
  ],

  practice: [
    { label: 'Business Lab', sub: 'Model a cash cycle and see how debtor and creditor days move the gap', href: 'business-lab/index.html', icon: '💧' },
    { label: 'Calculators', sub: 'Working-capital, interest and EMI calculators', href: 'calculators/index.html', icon: '🧮' },
    { label: 'MIS Lab', sub: 'Build a 13-week cash forecast template', href: 'mis-lab/index.html', icon: '📊' }
  ],

  quiz: [
    {
      q: 'A business holds stock for 45 days, gives customers 30 days to pay, and pays its suppliers in 20 days. What is its cash cycle?',
      options: ['95 days', '55 days', '35 days', '5 days'],
      answer: 1,
      why: 'Cash cycle = 45 + 30 − 20 = 55 days. Supplier credit shortens the cycle because you hold on to your cash longer.'
    },
    {
      q: 'Which of these most directly reduces the cash gap on a large credit order?',
      options: ['Increasing the selling price by 5%', 'Asking the customer for a 30% advance with the order', 'Recording the sale in the books on the dispatch date', 'Buying extra stock while the supplier has it'],
      answer: 1,
      why: 'An advance brings cash in before you pay suppliers, directly shrinking the gap. A price rise helps profit but the cash still arrives 60 days later. Book entries move no cash. Extra stock makes the gap worse.'
    },
    {
      q: 'Opening cash ₹40,000, receipts ₹2,10,000, payments ₹2,65,000. What is closing cash?',
      options: ['₹15,000', '−₹15,000', '₹55,000', '−₹55,000'],
      answer: 1,
      why: '₹40,000 + ₹2,10,000 − ₹2,65,000 = −₹15,000. A negative closing figure means you need an overdraft or a lever before that month starts.'
    },
    {
      q: 'Sana discounts a ₹2,00,000 invoice: the financier advances 80% for two months at 1.5% a month. What does the financing cost?',
      options: ['₹6,000', '₹4,800', '₹3,000', '₹2,400'],
      answer: 1,
      why: 'The charge is on the amount advanced: ₹2,00,000 × 80% = ₹1,60,000, × 1.5% × 2 months = ₹4,800.'
    }
  ],

  glossary: [
    ['Cash cycle (operating cycle)', 'Days from paying for stock to collecting cash from its sale: stock days + debtor days − creditor days.'],
    ['Working capital', 'Current assets minus current liabilities; the short-term cushion a business operates on.'],
    ['Cash budget', 'A month-by-month (or week-by-week) forecast of cash receipts and payments showing the closing balance.'],
    ['Cash credit / overdraft', 'A bank limit you can draw on as needed, paying interest only on the amount used.'],
    ['Invoice discounting', 'Selling or pledging an unpaid invoice to a financier for most of its value now, for a fee.'],
    ['TReDS', 'Trade Receivables Discounting System: RBI-regulated online platforms where MSMEs auction their invoices on large buyers to financiers.']
  ]
};
