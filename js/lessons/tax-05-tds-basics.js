import { diagrams, example, callout, formula, table, terms, inr } from '../lesson-kit.js';

/**
 * Lesson 5.5 - TDS: when you must deduct tax
 * Running example: Noor Crafts, now above ₹1 crore turnover, paying a
 * photographer, a courier contractor and workshop rent, and receiving a
 * marketplace settlement with tax deducted at source.
 */
export default {
  id: 'tax-05-tds-basics',
  title: 'TDS: when you must deduct tax',

  intro: `<p>Tax Deducted at Source turns every sizeable business into a part-time tax collector. When you pay a professional,
    a contractor or a landlord above a threshold, you keep back a slice, deposit it against <em>their</em> PAN, and they claim it
    in their return. Miss it and the cost is yours: interest, fees and <strong>30% of the expense disallowed</strong>.
    This lesson shows when a small business must deduct, how much, and what the calendar looks like.</p>`,

  outcomes: [
    'Decide whether your business must deduct TDS at all, and under which section a payment falls.',
    'Apply the common rates and thresholds (194C, 194J, 194H, 194I, 194Q) to real bills and compute the net payment.',
    'Run the deduct, deposit, return, certificate cycle on time, and claim TDS that others deduct from you.'
  ],

  sections: [
    {
      heading: 'The idea: collect a little tax early, at the source',
      short: 'The idea',
      html: `
        <p>The government does not want to wait until July for its income tax, and it wants a record of who paid whom.
        So the <strong>payer</strong> (the deductor) withholds a percentage from certain payments and deposits it with the
        government against the <strong>payee's</strong> PAN. The payee sees it in <strong>Form 26AS</strong> and subtracts it from the
        tax due on their own return. TDS is not an extra tax; it is the payee's tax, paid early by the payer.</p>
        ${diagrams.flow(
          [
            { label: 'Pay a bill', sub: 'above the threshold', tone: 'n' },
            { label: 'Deduct', sub: 'keep back the TDS', tone: 'e' },
            { label: 'Deposit', sub: 'by 7th of next month', tone: 'c' },
            { label: 'File 26Q', sub: 'quarterly return', tone: 'b' },
            { label: 'Form 16A', sub: 'certificate to payee', tone: 'a' },
            { label: 'Payee\'s credit', sub: 'shows in 26AS / AIS', tone: 'd' }
          ],
          { title: 'The TDS cycle from payment to credit', caption: 'The payee cannot claim the credit until you have deposited the tax and filed the return. A late 26Q delays their refund, which is why suppliers chase you.' }
        )}
        <p><strong>Does a small business need to deduct at all?</strong> Companies, firms and LLPs always do. An <strong>individual or HUF</strong>
        (every proprietor) must deduct under the common sections only if their business turnover exceeded <strong>₹1 crore</strong>
        (or professional receipts <strong>₹50 lakh</strong>) in the <em>previous</em> financial year. Below that, a proprietor deducts only
        under special sections like 194-IB (rent above ₹50,000 a month) and 194M, using their PAN instead of a TAN.</p>
        ${callout('india', 'To deduct you need a <strong>TAN</strong> (Tax Deduction and Collection Account Number), a 10-character code applied for on Form 49B. It goes on every challan, return and Form 16A. Collect each payee\'s PAN before paying: without it the rate jumps to 20%.')}
      `
    },
    {
      heading: 'The common sections: rates and thresholds',
      short: 'Sections',
      html: `
        <p>Each type of payment has its own section, rate and threshold. These are the ones a small business meets.</p>
        ${table(
          ['Section', 'Payment', 'Rate', 'Threshold (per year unless stated)'],
          [
            ['194C', 'Contractors and sub-contractors: job work, courier, printing, catering, advertising', '1% if payee is an individual or HUF; 2% for others', 'Single bill above ₹30,000, or yearly total above ₹1,00,000'],
            ['194J', 'Professional fees (CA, lawyer, photographer, designer); technical services', '10% professional; 2% technical', '₹50,000'],
            ['194H', 'Commission and brokerage (agents, marketplaces charging you commission)', '2%', '₹20,000'],
            ['194I', 'Rent', '10% for land and buildings; 2% for plant and machinery', '₹50,000 per month or part of a month'],
            ['194Q', 'Purchase of goods from one seller', '0.1% on the amount above ₹50 lakh', 'Purchases above ₹50 lakh from that seller (buyer turnover above ₹10 crore)'],
            ['194-IB', 'Rent paid by individuals or HUFs not covered by 194I', '2%', 'Rent above ₹50,000 per month; deduct once a year, PAN instead of TAN']
          ],
          { caption: 'TDS sections a small business meets most often (thresholds after Budget 2025)' }
        )}
        ${formula('TDS = Rate × Gross bill (before GST, if GST is shown separately)', 'A ₹60,000 photographer fee billed as ₹60,000 + ₹10,800 GST: deduct 10% of ₹60,000 = ₹6,000, not 10% of ₹70,800.')}
        ${callout('warning', 'Thresholds work on the <em>whole year</em>. A courier billing ₹12,000 a month never crosses the ₹30,000 single-bill limit, but by the ninth month the aggregate passes ₹1,00,000 and TDS is due on <strong>everything paid so far</strong>, not just the excess. Track payee-wise totals from April.')}
      `
    },
    {
      heading: 'Noor Crafts starts deducting',
      short: 'Worked example',
      html: `
        ${example({
          title: 'A year of TDS at Noor Crafts',
          scenario: 'Noor Crafts\' turnover crossed ₹1 crore in FY 2025-26, so from April 2026 Sana must deduct under the common sections. She took a TAN in April. During FY 2026-27 she makes these payments.',
          steps: [
            { label: 'Photographer for the new catalogue, ₹60,000 plus GST, paid 20 August.', html: 'Professional fee, 194J, above ₹50,000. TDS 10% × ₹60,000 = <strong>₹6,000</strong>. She pays ₹54,000 + GST and deposits ₹6,000 by <strong>7 September</strong>.' },
            { label: 'Courier company (a private limited company), ₹1,40,000 over the year in monthly bills.', html: '194C at 2% because the payee is a company. No single bill exceeds ₹30,000, but the running total passes ₹1,00,000 in December, so from the December payment she deducts 2% on the full ₹1,05,000 paid to date (₹2,100), then 2% on each later bill. Year total 2% × ₹1,40,000 = <strong>₹2,800</strong>. December\'s deduction is deposited by <strong>7 January</strong>; March\'s by <strong>30 April</strong>.' },
            { label: 'Workshop rent, ₹8,000 a month = ₹96,000 a year.', html: 'Well below the ₹50,000-a-month threshold of both 194I and 194-IB: <strong>no TDS</strong>.' },
            { label: 'Marketplace settlement: gross sales ₹2,00,000 in October.', html: 'Here Sana is the <em>payee</em>. The marketplace deducts TDS under <strong>194-O at 0.1%</strong> = ₹200 (her yearly marketplace sales exceed the ₹5 lakh exemption for individuals) and GST TCS at <strong>0.5%</strong> = ₹1,000, after its 15% commission of ₹30,000 plus ₹5,400 GST. She receives ₹2,00,000 − ₹30,000 − ₹5,400 − ₹200 − ₹1,000 = <strong>₹1,63,400</strong>.' }
          ],
          result: 'Sana deducts ₹8,800 in the year (₹6,000 + ₹2,800), files four 26Q returns and issues two Form 16As. The ₹200 deducted from her shows in her Form 26AS and reduces her own income tax; the ₹1,000 of GST TCS shows on the GST portal and, once accepted, lands in her electronic cash ledger.'
        })}
        ${table(
          ['Payment', 'Section', 'Rate', 'Gross', 'TDS', 'Net paid'],
          [
            ['Photographer', '194J', '10%', inr(60000), inr(6000), inr(54000)],
            ['Courier company', '194C', '2%', inr(140000), inr(2800), inr(137200)],
            ['Workshop rent', '194I', '—', inr(96000), inr(0), inr(96000)],
            ['Marketplace (deducted from Sana)', '194-O + GST TCS', '0.1% + 0.5%', inr(200000), inr(1200), inr(163400)]
          ],
          { align: ['l', 'l', 'r', 'r', 'r', 'r'], caption: 'Noor Crafts, FY 2026-27 (marketplace net is after its commission and GST)' }
        )}
      `
    },
    {
      heading: 'Deposit, return, certificate: the calendar',
      short: 'Calendar',
      html: `
        ${terms([
          ['Deposit', 'Pay through challan ITNS-281 on incometax.gov.in by the <strong>7th of the next month</strong>; for March, by <strong>30 April</strong>.'],
          ['Quarterly return', '<strong>Form 26Q</strong> (24Q for salary) listing every deductee, PAN, amount and challan, due <strong>31 July, 31 October, 31 January, 31 May</strong>. Late filing costs ₹200 a day under 234E, up to the TDS amount.'],
          ['Form 16A', 'The certificate you download from TRACES and give each payee within 15 days of filing the quarterly return.'],
          ['Lower-deduction certificate', 'A payee whose real tax is far below the TDS rate can apply on Form 13 for a certificate under section 197. Deduct at the certificate rate and keep a copy.']
        ])}
        ${diagrams.timeline(
          [
            { at: '7th', label: 'Deposit every month', tone: 'e' },
            { at: '31 Jul', label: 'Q1 26Q (Apr to Jun)', tone: 'a' },
            { at: '31 Oct', label: 'Q2 26Q (Jul to Sep)', tone: 'b' },
            { at: '31 Jan', label: 'Q3 26Q (Oct to Dec)', tone: 'c' },
            { at: '31 May', label: 'Q4 26Q (Jan to Mar)', tone: 'd' }
          ],
          { title: 'The TDS calendar', caption: 'Monthly deposits, quarterly returns, Form 16A within 15 days of each return. The Q4 return has the longest window because March TDS is deposited only by 30 April.' }
        )}
      `
    },
    {
      heading: 'What it costs to get it wrong, and TDS on your own receipts',
      short: 'Consequences',
      html: `
        ${table(
          ['Failure', 'Consequence'],
          [
            ['Did not deduct, or deducted and did not deposit by the ITR due date', '<strong>30% of the expense is disallowed</strong> under section 40(a)(ia) in that year (allowed later, in the year you finally deposit)'],
            ['Deducted late', 'Interest <strong>1% per month</strong> from the date it was deductible to the date deducted'],
            ['Deposited late', 'Interest <strong>1.5% per month</strong> from the date of deduction to the date of deposit, part months counted as full'],
            ['Return filed late', '₹200 a day (234E), plus a penalty of ₹10,000 to ₹1,00,000 if over a year late'],
            ['Payee had no PAN', 'Deduct at 20%; the payee cannot even claim the credit properly']
          ],
          { caption: 'The price of missing TDS' }
        )}
        <p>Money also flows the other way. Marketplaces deduct <strong>194-O</strong> on your gross sales (0.1%, once your yearly sales through them exceed ₹5 lakh if you are an individual) and <strong>GST TCS at 0.5%</strong>; business customers deduct 194C or 194J on what they pay you. Each deduction is your money, parked with the government.</p>
        ${callout('tip', 'Twice a year, open Form 26AS and AIS on incometax.gov.in and the TDS and TCS tab on the GST portal. Claim income-tax TDS in your ITR (it reduces your advance-tax instalments too) and accept GST TCS so it reaches your cash ledger. Credit you do not claim is a gift to the exchequer.')}
        ${callout('note', 'Rates, thresholds and dates here are as of FY 2026-27 (October 2026) and reflect the Budget 2025 threshold changes. TDS rates and limits change almost every Finance Act; confirm the current table on <strong>incometax.gov.in</strong> before deducting. This is educational material, not professional tax advice.')}
        ${callout('india', 'From 1 April 2026 the <strong>Income-tax Act, 2025</strong> replaces the 1961 Act. Almost all TDS sections (194C, 194J, 194H, 194-I, 194Q and others) are consolidated into a single <strong>section 393</strong>, with each payment type as a row in its tables. This lesson keeps the familiar 194-series names because they are still how people talk about TDS. For payments from 1 April 2026, returns and challans use the new references; check the exact sub-section on incometax.gov.in or with your CA.', 'New Act, new numbers')}
      `
    }
  ],

  keyPoints: [
    'TDS is the <strong>payee\'s</strong> tax, deducted by the <strong>payer</strong> and deposited against the payee\'s PAN; the payee claims it through Form 26AS.',
    'A proprietor deducts under the common sections only if last year\'s turnover exceeded <strong>₹1 crore</strong> (₹50 lakh for professionals). Companies and firms always deduct. You need a TAN.',
    'Core rates: 194C contractors <strong>1% / 2%</strong> (₹30,000 single or ₹1,00,000 yearly); 194J professional <strong>10%</strong> (₹50,000); 194H commission <strong>2%</strong> (₹20,000); 194I rent <strong>10%</strong> building, 2% machinery (above ₹50,000 a month); 194Q purchases <strong>0.1%</strong> above ₹50 lakh.',
    'Deposit by the <strong>7th</strong> of the next month (30 April for March); file 26Q by 31 July, 31 October, 31 January and 31 May; issue Form 16A within 15 days.',
    'Not deducting costs you <strong>30% of the expense</strong> under 40(a)(ia), plus interest at 1% (late deduction) or 1.5% (late deposit) a month.',
    'Check what others deducted from you (194-O, GST TCS, customers\' TDS) in 26AS, AIS and the GST portal, and claim it.'
  ],

  practice: [
    { label: 'TDS calculator', sub: 'Pick a section, enter the bill, get the deduction, net payment and deposit date', href: 'calculators/index.html', icon: '🧮' },
    { label: 'Compliance calendar cheatsheet', sub: 'TDS deposit and 26Q dates next to GST and ITR dates', href: 'cheatsheets/index.html', icon: '📅' },
    { label: 'Tax Lab', sub: 'See how marketplace TDS and GST TCS reduce a settlement', href: 'tax-lab/index.html', icon: '🏛️' }
  ],

  quiz: [
    {
      q: 'Gupta Kirana (turnover ₹60 lakh last year, a proprietorship) pays a CA ₹55,000 for the year. Must Rohit deduct TDS?',
      options: ['Yes, 10% under 194J', 'Yes, 2% under 194C', 'No, because his turnover last year was below ₹1 crore', 'No, because CAs are exempt from TDS'],
      answer: 2,
      why: 'An individual or HUF deducts under 194J, 194C, 194H and 194I only if business turnover exceeded ₹1 crore (or professional receipts ₹50 lakh) in the previous year. Rohit is below that, so no TDS, although a company paying the same fee would deduct 10%.'
    },
    {
      q: 'Noor Crafts pays a freelance designer (an individual) ₹45,000 in the year for packaging artwork. TDS under 194J is:',
      options: ['₹4,500', '₹900', 'Nil, below the ₹50,000 threshold', '₹450'],
      answer: 2,
      why: 'The 194J threshold is ₹50,000 a year per payee. ₹45,000 is below it, so nothing is deducted. Had the fee been ₹55,000, TDS would be 10% of the whole ₹55,000 = ₹5,500.'
    },
    {
      q: 'Sana deducted ₹6,000 from the photographer on 20 August but deposited it on 12 October. What interest applies?',
      options: ['1% for one month', '1.5% per month for three months (August, September, October)', '1.5% per month for two months', 'None, if deposited before the 26Q due date'],
      answer: 1,
      why: 'Late deposit attracts 1.5% per month from the date of deduction to the date of deposit, and part of a month counts as a full month: August, September and October make three months, so ₹6,000 × 1.5% × 3 = ₹270.'
    },
    {
      q: 'A company with a TAN pays a courier firm (a partnership) bills of ₹25,000 in April, ₹25,000 in May and ₹60,000 in June. When does TDS under 194C first apply, and on how much?',
      options: ['Never; no single bill exceeds ₹30,000', 'In June, on ₹60,000 only', 'In June, on the whole ₹1,10,000', 'In April, on ₹25,000'],
      answer: 2,
      why: 'The June bill of ₹60,000 itself exceeds the ₹30,000 single-bill limit and takes the aggregate to ₹1,10,000, above ₹1,00,000. TDS at 2% (partnership) applies to the full ₹1,10,000 including the earlier bills: ₹2,200.'
    },
    {
      q: 'Noor Crafts failed to deduct TDS on a ₹1,00,000 contractor bill and the ITR due date has passed. The income-tax effect is:',
      options: ['The whole ₹1,00,000 is disallowed', '₹30,000 of the expense is disallowed this year under 40(a)(ia)', 'Only interest is charged; the expense is allowed', 'A flat ₹10,000 penalty'],
      answer: 1,
      why: 'Section 40(a)(ia) disallows 30% of an expense on which TDS was not deducted or not deposited by the return due date. The disallowed ₹30,000 is allowed in the year the TDS is finally deposited.'
    }
  ],

  glossary: [
    ['Deductor / deductee', 'The payer who deducts TDS, and the payee from whose payment it is deducted.'],
    ['TAN', 'Tax Deduction and Collection Account Number: the 10-character number every deductor needs on challans, returns and certificates.'],
    ['Form 26Q', 'The quarterly TDS return for non-salary payments, due 31 July, 31 October, 31 January and 31 May.'],
    ['Form 16A', 'The TDS certificate the deductor downloads from TRACES and gives the payee for each quarter.'],
    ['Form 26AS / AIS', 'Statements on incometax.gov.in showing TDS and TCS credited to your PAN (26AS) and all reported financial transactions (AIS).'],
    ['Section 40(a)(ia)', 'The rule disallowing 30% of an expense on which TDS was not deducted or not deposited in time.']
  ]
};
