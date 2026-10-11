import { diagrams, example, callout, formula, steps, table, terms, inr } from '../lesson-kit.js';

/**
 * Lesson 1.8 - Your compliance calendar
 * Running example: Noor Crafts (Sana, Srinagar), GST-registered sole proprietor under QRMP,
 * turnover well under ₹1 crore, one helper, no TDS obligation yet. FY 2026-27 dates.
 */
export default {
  id: 'start-08-compliance-calendar',
  title: 'Your compliance calendar',

  intro: `<p>Nobody loses a business to a tax return. People lose money, sleep and their dealers' trust to <strong>late</strong> tax returns:
    a ${inr(50)}-a-day late fee that quietly runs for months, interest at 18%, a dealer who cannot claim credit because your filing was late.
    The cure is boring: one calendar with every due date on it, and a fixed day each month when you work through it. This lesson builds
    that calendar for a small GST-registered proprietor like Sana, for FY 2026-27.</p>`,

  outcomes: [
    'List what a small GST-registered proprietor must file or pay every month, quarter and year, with the due dates.',
    'Set up Noor Crafts\' calendar for FY 2026-27 under the QRMP scheme.',
    'Work out what a missed GSTR-3B actually costs in late fee and interest.'
  ],

  sections: [
    {
      heading: 'A month in the life of a small proprietor',
      short: 'One month',
      html: `
        <p>Sana's turnover is under ${inr(50000000)}, so she has opted for the <strong>QRMP scheme</strong>: quarterly returns, monthly payment.
        Her month has four fixed dates. Monthly filers have the same shape with different numbers: GSTR-1 by the 11th and GSTR-3B by the 20th,
        instead of the IFF and PMT-06 shown below.</p>
        ${diagrams.timeline(
          [
            { at: '7th', label: 'Pay helper; TDS deposit (if you deduct)', tone: 'a' },
            { at: '13th', label: 'IFF: upload B2B invoices (optional, QRMP)', tone: 'b' },
            { at: '15th', label: 'Advance tax, in Jun / Sep / Dec / Mar', tone: 'c' },
            { at: '25th', label: 'PMT-06: pay the month\'s GST', tone: 'e' },
            { at: 'Within 15 days', label: 'Pay micro/small suppliers (43B(h))', tone: 'd' }
          ],
          { title: 'A QRMP month for Noor Crafts', caption: 'The 13th matters more than it looks: dealers can only claim ITC on your invoices once they appear in their GSTR-2B, and the IFF is what puts them there before quarter end.', axisLabel: 'Repeat every month; the 15th only in the four advance-tax months' }
        )}
        ${terms([
          ['IFF (Invoice Furnishing Facility)', 'Optional monthly upload of B2B invoices for QRMP filers, by the 13th of the next month. Your dealers see the credit in their GSTR-2B a month or two earlier. Skip it and they wait for your quarterly GSTR-1.'],
          ['PMT-06', 'The challan QRMP filers use to pay tax for the first two months of a quarter, by the 25th of the following month. Either 35% of last quarter\'s cash tax or the actual tax worked out from your registers.'],
          ['GSTR-1 and GSTR-3B', 'The outward-supply statement and the summary return with tax payment. QRMP: GSTR-1 by the 13th and GSTR-3B by the 22nd or 24th of the month after the quarter (24th for J&amp;K; verify your state on the portal). Since July 2025 the 3B liability auto-fills from GSTR-1 and cannot be edited, so GSTR-1 must be right.']
        ])}
      `
    },
    {
      heading: 'Monthly, quarterly, yearly: the full list',
      short: 'The list',
      html: `
        <p>Not everything on this list applies to everyone. The right-hand column says whether it applies to Noor Crafts today, and when it would start to.</p>
        ${table(
          ['Item', 'When', 'Applies to Sana?'],
          [
            ['GSTR-1 (monthly filer)', '11th of next month', 'No; she is on QRMP'],
            ['GSTR-3B (monthly filer)', '20th of next month', 'No; she is on QRMP'],
            ['IFF (QRMP, optional)', '13th of next month, months 1 and 2 of a quarter', 'Yes, she uses it for dealer invoices'],
            ['PMT-06 (QRMP tax payment)', '25th of next month, months 1 and 2', 'Yes'],
            ['GSTR-1 quarterly (QRMP)', '13th of month after quarter', 'Yes'],
            ['GSTR-3B quarterly (QRMP)', '22nd / 24th of month after quarter (24th for J&K)', 'Yes'],
            ['TDS deposit; Form 26Q', '7th of next month (30 April for March); 26Q by 31 Jul, 31 Oct, 31 Jan, 31 May', 'Not yet: individuals deduct only if last year\'s turnover was above ' + inr(10000000)],
            ['Advance tax', '15 Jun 15%, 15 Sep 45%, 15 Dec 75%, 15 Mar 100% (44AD: all by 15 Mar)', 'Yes, if tax for the year exceeds ' + inr(10000)],
            ['ITR (income tax return)', '31 July (no audit); 31 October (audit cases)', 'Yes, 31 July'],
            ['GSTR-9 annual return', '31 December', 'Optional below ' + inr(20000000) + ' turnover; still worth filing'],
            ['Udyam profile', 'Review once a year; it refreshes turnover and investment from ITR and GST data', 'Yes, check after filing the ITR'],
            ['Shop &amp; Establishment', 'Renewal period set by the state; check the validity date on the certificate', 'Yes'],
            ['Trademark renewal', 'Every 10 years from filing date; apply in the last year', 'Yes, from year 9 of the registration'],
            ['Professional tax', 'Monthly or annual, in states that levy it (Maharashtra, Karnataka, West Bengal and others)', 'No: not levied in J&K']
          ],
          { caption: 'Compliance list for a small GST-registered proprietor (verify FY-specific dates on the portal)' }
        )}
        ${callout('india', 'Advance tax instalments are cumulative: by 15 September you should have paid 45% of the whole year\'s estimated tax, not 45% of a quarter. If Sana has opted for presumptive tax under Section 44AD, the rule relaxes to one payment of 100% by 15 March. Shortfalls attract interest at 1% a month under Sections 234B and 234C.')}
      `
    },
    {
      heading: 'The year at a glance',
      short: 'The year',
      html: `
        <p>Lay the whole financial year out and a pattern appears: four quarter-end filing windows (July, October, January, April), four
        advance tax dates, and two annual deadlines in July and December. Everything else repeats monthly.</p>
        ${diagrams.timeline(
          [
            { at: '15 Jun', label: 'Advance tax 15%', tone: 'c' },
            { at: '13 / 24 Jul', label: 'Q1 GSTR-1 and 3B', tone: 'a' },
            { at: '31 Jul', label: 'ITR for FY 2025-26', tone: 'e' },
            { at: '15 Sep', label: 'Advance tax 45%', tone: 'c' },
            { at: '13 / 24 Oct', label: 'Q2 GSTR-1 and 3B', tone: 'a' },
            { at: '15 Dec', label: 'Advance tax 75%', tone: 'c' },
            { at: '31 Dec', label: 'GSTR-9 (optional)', tone: 'e' },
            { at: '13 / 24 Jan', label: 'Q3 GSTR-1 and 3B', tone: 'a' },
            { at: '15 Mar', label: 'Advance tax 100%', tone: 'c' }
          ],
          { title: 'FY 2026-27 for Noor Crafts', caption: 'Q4 (January to March) closes in April 2027 with GSTR-1 by 13 April and GSTR-3B by 24 April, and the ITR for this year follows on 31 July 2027.' }
        )}
        ${table(
          ['Month', 'What Sana does', 'Due dates'],
          [
            ['April 2026', 'File Q4 FY 2025-26 returns; confirm QRMP option for Q1; year-end stock count written up', 'GSTR-1 13 Apr; GSTR-3B 24 Apr'],
            ['May', 'IFF for April; pay April GST', 'IFF 13 May; PMT-06 25 May'],
            ['June', 'IFF for May; pay May GST; first advance tax', 'IFF 13 Jun; advance tax 15 Jun; PMT-06 25 Jun'],
            ['July', 'Q1 returns; file ITR for FY 2025-26 with the CA', 'GSTR-1 13 Jul; GSTR-3B 24 Jul; ITR 31 Jul'],
            ['August', 'IFF for July; pay July GST; review Udyam profile after ITR', 'IFF 13 Aug; PMT-06 25 Aug'],
            ['September', 'IFF for August; pay August GST; second advance tax', 'IFF 13 Sep; advance tax 15 Sep; PMT-06 25 Sep'],
            ['October', 'Q2 returns; pre-festival stock means bigger PMT-06 payments ahead', 'GSTR-1 13 Oct; GSTR-3B 24 Oct'],
            ['November', 'IFF for October; pay October GST', 'IFF 13 Nov; PMT-06 25 Nov'],
            ['December', 'IFF for November; pay November GST; third advance tax; GSTR-9 for FY 2025-26 if filing', 'IFF 13 Dec; advance tax 15 Dec; PMT-06 25 Dec; GSTR-9 31 Dec'],
            ['January 2027', 'Q3 returns; check Shop &amp; Establishment validity', 'GSTR-1 13 Jan; GSTR-3B 24 Jan'],
            ['February', 'IFF for January; pay January GST; estimate full-year income for March', 'IFF 13 Feb; PMT-06 25 Feb'],
            ['March', 'IFF for February; pay February GST; final advance tax; physical stock count on 31 March', 'IFF 13 Mar; advance tax 15 Mar; PMT-06 25 Mar']
          ],
          { caption: 'Noor Crafts month by month, FY 2026-27 (every month also: helper paid by the 7th, weavers within 15 days, bank reconciled)' }
        )}
      `
    },
    {
      heading: 'What a missed deadline costs',
      short: 'The cost',
      html: `
        <p>GST late fees and interest are separate charges and both run per day. The late fee is fixed (${inr(50)} a day, ${inr(25)} CGST + ${inr(25)} SGST;
        ${inr(20)} a day for a nil return, with a cap that depends on turnover). Interest is 18% a year on the tax paid late, counted from the due date to the day you pay.</p>
        ${formula('Interest = Tax due × 18% × days late ÷ 365')}
        ${formula('Late fee = ' + inr(50) + ' × days late', 'Nil return: ' + inr(20) + ' a day. Capped per return by turnover; verify the current cap on the portal.')}
        ${example({
          title: 'Sana files the Q1 GSTR-3B thirty days late',
          scenario: 'The Q1 (April to June) GSTR-3B was due on 24 July 2026 with ' + inr(20000) + ' of net tax to pay. Sana was travelling for a Delhi exhibition and filed and paid on 23 August, 30 days late.',
          steps: [
            { label: 'Late fee.', html: '30 days × ' + inr(50) + ' = <strong>' + inr(1500) + '</strong> (' + inr(750) + ' CGST + ' + inr(750) + ' SGST), paid in cash, no ITC can be used against it.' },
            { label: 'Interest.', html: inr(20000) + ' × 18% × 30 ÷ 365 = <strong>' + inr(296) + '</strong> (' + inr(295.89, { decimals: 2 }) + ', rounded).' },
            { label: 'Total extra cost.', html: inr(1500) + ' + ' + inr(296) + ' = <strong>' + inr(1796) + '</strong>, about 9% of the tax itself, for one month of delay.' },
            { label: 'The hidden cost.', html: 'Her Q1 GSTR-1 was also late, so Meher Boutique\'s ' + inr(8820) + ' of ITC on the April invoice did not appear in their GSTR-2B in time. They paid that tax from their own pocket for a month and called Sana about it.' }
          ],
          result: inr(1796) + ' in penalties plus an awkward phone call, for a return that takes twenty minutes. Six months of the same habit would cost over ' + inr(10000) + ' and, after two consecutive unfiled periods, the portal blocks e-way bill generation and a registration can be cancelled.',
          tone: 'e'
        })}
        ${table(
          ['Days late', 'Late fee', 'Interest on ' + inr(20000), 'Total'],
          [
            ['7', inr(350), inr(69), inr(419)],
            ['30', inr(1500), inr(296), inr(1796)],
            ['90', inr(4500), inr(888), inr(5388)]
          ],
          { align: ['r', 'r', 'r', 'r'], caption: 'The same missed return at 7, 30 and 90 days (before any late-fee cap)' }
        )}
        ${callout('warning', 'Income tax has its own meter. Filing the ITR after 31 July costs a late fee of ' + inr(5000) + ' (' + inr(1000) + ' if total income is up to ' + inr(500000) + ') under Section 234F, plus 1% a month interest on unpaid tax, and you lose the right to carry forward business losses. Missing advance tax instalments adds 1% a month under 234B/234C even if the return itself is on time.')}
      `
    },
    {
      heading: 'Make it automatic',
      short: 'Automate',
      html: `
        <p>A calendar only works if it interrupts you. Set it up once, in the week you register for GST, and it runs for years.</p>
        ${steps([
          'Put every date from the month-by-month table into your phone calendar as a recurring event, with a reminder three days before and on the day.',
          'Choose one fixed "compliance morning", for example the 10th of every month. On it, finish the previous month\'s registers, send the pack to the CA, and upload the IFF.',
          'Keep a separate bank sub-balance (or a sweep to a savings account) equal to the GST collected so far, so PMT-06 on the 25th never competes with the weaver\'s payment.',
          'Every quarter, open the GST portal yourself and check the "Returns" dashboard for anything marked "Not filed", even if the CA handles filing. The late fee lands on your GSTIN, not the CA\'s.',
          'In April each year, re-read this list: QRMP opt-in, rate changes, thresholds and due dates do change between financial years. Verify on the portal.'
        ], { title: 'Five steps, once' })}
        ${callout('tip', 'When a due date falls on a Sunday or a bank holiday, the portal normally does not extend it. Pay a day early. The same goes for 15 March advance tax, which falls in the busiest week of the financial year for every CA in the country.')}
      `
    }
  ],

  keyPoints: [
    'QRMP (turnover up to ' + inr(50000000) + '): IFF by the 13th, PMT-06 by the 25th, quarterly GSTR-1 by the 13th and GSTR-3B by the 22nd/24th after the quarter. Monthly filers: GSTR-1 11th, GSTR-3B 20th.',
    'Advance tax is cumulative: 15% by 15 June, 45% by 15 September, 75% by 15 December, 100% by 15 March (all by 15 March under 44AD). ITR by 31 July.',
    'TDS deposit by the 7th and 26Q quarterly apply only once an individual\'s previous-year turnover crosses ' + inr(10000000) + '.',
    'Annual housekeeping: GSTR-9 by 31 December (optional below ' + inr(20000000) + '), Udyam review, Shop &amp; Establishment validity, trademark renewal every 10 years.',
    'A 30-day late GSTR-3B with ' + inr(20000) + ' due costs ' + inr(1500) + ' late fee + ' + inr(296) + ' interest = ' + inr(1796) + ', plus your dealers\' delayed ITC. Put every date in your phone.'
  ],

  practice: [
    { label: 'Tax Lab', sub: 'GST, QRMP and late-fee workings with your own numbers', href: 'tax-lab/index.html', icon: '🏛️' },
    { label: 'Cheatsheets', sub: 'Printable due-date sheet for the year', href: 'cheatsheets/index.html', icon: '📑' },
    { label: 'Lesson: GST returns, QRMP & composition', sub: 'The returns themselves, form by form', href: 'learn/lesson.html?id=tax-03-returns-and-composition', icon: '📘' }
  ],

  quiz: [
    {
      q: 'Sana is on QRMP in J&K. When is her GSTR-3B for the April to June quarter due?',
      options: ['20 July', '13 July', '24 July', '25 July'],
      answer: 2,
      why: 'QRMP filers file GSTR-3B quarterly by the 22nd or 24th of the month after the quarter depending on the state; J&K is in the 24th group. The 13th is GSTR-1, the 25th is PMT-06 (for months 1 and 2 only), and the 20th applies to monthly filers.'
    },
    {
      q: 'What is PMT-06 for?',
      options: ['Claiming a GST refund', 'Paying the GST of the first two months of a quarter under QRMP, by the 25th', 'Depositing TDS', 'Paying the GSTR-3B late fee'],
      answer: 1,
      why: 'Under QRMP the return is quarterly but tax is still paid monthly. PMT-06 is the challan for months 1 and 2; month 3 is settled with the quarterly GSTR-3B.'
    },
    {
      q: 'Sana expects ' + inr(80000) + ' of income tax for the year and is not under 44AD. How much must be paid by 15 September?',
      options: [inr(12000), inr(36000), inr(24000), inr(60000)],
      answer: 1,
      why: 'Advance tax is cumulative: 45% of the year\'s liability by 15 September, so ' + inr(80000) + ' × 45% = ' + inr(36000) + '. (15% by 15 June, 75% by 15 December, 100% by 15 March.)'
    },
    {
      q: 'A GSTR-3B with ' + inr(20000) + ' of tax is filed 30 days late. Roughly what does it cost in late fee and interest?',
      options: [inr(296), inr(1500), inr(1796), inr(5000)],
      answer: 2,
      why: 'Late fee 30 × ' + inr(50) + ' = ' + inr(1500) + '; interest ' + inr(20000) + ' × 18% × 30 ÷ 365 = ' + inr(296) + '. Together ' + inr(1796) + '. Both charges run every day until you file and pay.'
    },
    {
      q: 'Which of these does NOT apply to a sole proprietor with turnover of ' + inr(6000000) + ' and no TDS obligation?',
      options: ['ITR by 31 July', 'Advance tax instalments', 'Form 26Q every quarter', 'Reviewing the Udyam profile yearly'],
      answer: 2,
      why: 'Form 26Q is the quarterly TDS return; it exists only if you deduct TDS, and individuals must deduct only once the previous year\'s turnover exceeded ' + inr(10000000) + '. The other three apply.'
    }
  ],

  glossary: [
    ['QRMP', 'Quarterly Return, Monthly Payment: a GST scheme for turnover up to ₹5 crore with quarterly GSTR-1 and GSTR-3B and monthly tax payment via PMT-06.'],
    ['IFF', 'Invoice Furnishing Facility: optional monthly upload of B2B invoices by QRMP filers so buyers get ITC sooner.'],
    ['Advance tax', 'Income tax paid during the year in instalments when the year\'s liability exceeds ₹10,000.'],
    ['GSTR-9', 'The annual GST return summarising the year\'s GSTR-1 and GSTR-3B filings; due 31 December, mandatory above ₹2 crore turnover.'],
    ['Section 234F', 'The income tax late-filing fee for an ITR filed after the due date.'],
    ['Udyam', 'The free online MSME registration; its turnover and investment figures refresh from ITR and GST data and should be reviewed yearly.']
  ]
};
