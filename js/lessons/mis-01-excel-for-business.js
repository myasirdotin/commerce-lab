import { fig, svg, diagrams, example, callout, formula, table, terms, checklist, inr } from '../lesson-kit.js';

/**
 * Lesson 6.1 - Excel for business: registers & formulas
 * Running example: Noor Crafts (Sana, Srinagar). A 10-row September sales register
 * and the formulas that answer the questions an owner actually asks of it.
 *
 * Column map used throughout:
 *   A ID | B Date | C Customer | D Channel | E State | F SKU | G Qty | H Rate
 *   I Taxable value | J GST rate | K Tax | L Total | M Paid?
 */
export default {
  id: 'mis-01-excel-for-business',
  title: 'Excel for business: registers & formulas',

  intro: `<p>Tally keeps your statutory books. Excel (or Google Sheets) is where you <strong>ask questions</strong> of your business:
    which channel sells more, who owes you money, what is the average order worth. Those questions are easy to answer only if
    your data sits in a clean <strong>register</strong>. This lesson gives you the rules of a clean register and the ten formulas
    that do most of the work.</p>`,

  outcomes: [
    'Lay out a sales register that formulas and pivot tables can read without clean-up.',
    'Write SUM, SUMIF/SUMIFS, COUNTIF, AVERAGE, XLOOKUP and IF with the right syntax and read them in plain English.',
    'Group transactions by month with TEXT or EOMONTH and summarise them with a pivot table.',
    'Spot the three mistakes that quietly break business spreadsheets.'
  ],

  sections: [
    {
      heading: 'A register is a table, not a document',
      short: 'The register',
      html: `
        <p>A <strong>register</strong> is a list of transactions, one row each, that grows downwards forever. It is not a printed
        statement with headings, blank lines and subtotals. The moment you add a merged title cell or a monthly subtotal in the middle,
        every formula and pivot table has to work around it. Keep the data pure; build the pretty report on a separate sheet.</p>
        ${fig({
          title: 'Anatomy of a clean register',
          caption: 'One header row, an ID column, one row per transaction, and totals kept outside the data block (or on another sheet).',
          viewBox: '0 0 640 270',
          body: `
            ${svg.panel(10, 10, 460, 200, { label: 'Sheet: SalesRegister' })}
            ${svg.box(20, 30, 440, 30, 'Header row: one row, short names, no merged cells', { tone: 'b', size: 11 })}
            ${svg.box(20, 66, 70, 138, 'ID', { tone: 'c', sub: 'NC-101, NC-102 …', size: 12 })}
            ${svg.box(96, 66, 364, 26, 'NC-101  02-09-2026  Priya  Online  …  7,000', { tone: 'n', size: 10.5, bold: false })}
            ${svg.box(96, 98, 364, 26, 'NC-102  03-09-2026  Zainab  Dealer  …  19,600', { tone: 'n', size: 10.5, bold: false })}
            ${svg.box(96, 130, 364, 26, 'NC-103  05-09-2026  Rahul  Online  …  3,000', { tone: 'n', size: 10.5, bold: false })}
            ${svg.box(96, 162, 364, 26, 'one row = one transaction', { tone: 'n', size: 10.5, bold: false, dashed: true })}
            ${svg.box(96, 228, 364, 30, 'Totals: outside the data, one blank row below', { tone: 'a', size: 11 })}
            ${svg.arrow(560, 45, 466, 45)}${svg.text(560, 32, 'Freeze this row', { size: 10, tone: 'muted', anchor: 'start' })}
            ${svg.arrow(560, 110, 466, 110)}${svg.text(560, 97, 'Same date format', { size: 10, tone: 'muted', anchor: 'start' })}
            ${svg.text(560, 123, 'in every row', { size: 10, tone: 'muted', anchor: 'start' })}
            ${svg.arrow(560, 243, 466, 243)}${svg.text(560, 230, 'Never typed by', { size: 10, tone: 'muted', anchor: 'start' })}
            ${svg.text(560, 256, 'hand: =SUM()', { size: 10, tone: 'muted', anchor: 'start' })}
          `
        })}
        ${checklist([
          '<strong>One header row</strong> in row 1, short names (Date, Customer, Qty), no merged cells anywhere.',
          '<strong>One row per transaction.</strong> An invoice with a shawl and a box is two rows, one per line item.',
          '<strong>An ID column</strong> first: invoice number or a running serial. It lets you find, lookup and de-duplicate rows.',
          '<strong>Consistent dates</strong>: real Excel dates, not typed text. Pick dd-mm-yyyy and keep it.',
          '<strong>Dropdowns</strong> (Data → Data Validation → List) for Channel, State, SKU and Paid?. Typing "online", "Online " and "ONLINE" gives you three channels.',
          '<strong>Totals outside the data</strong>: a blank row and then =SUM(), or on a separate Summary sheet.'
        ], { title: 'Rules of a clean register' })}
      `
    },
    {
      heading: 'The Noor Crafts sales register',
      short: 'Sales register',
      html: `
        <p>Here is Sana's September register for the first ten invoices. Shawls list at ₹7,000 and walnut boxes at ₹1,500; dealers
        get 30% off list (₹4,900 and ₹1,050). GST is charged per item rate: 18% on the shawl, 5% on the handicraft box (check the HSN rate for your own products).
        <strong>Taxable value</strong> = Qty × Rate, <strong>Tax</strong> = Taxable × GST rate, <strong>Total</strong> = Taxable + Tax.</p>
        ${table(
          ['ID', 'Date', 'Customer', 'Channel', 'State', 'SKU', 'Qty', 'Rate', 'Taxable', 'GST', 'Tax', 'Total', 'Paid?'],
          [
            ['NC-101', '02-09-2026', 'Priya Menon', 'Online', 'Karnataka', 'SHAWL', '1', inr(7000), inr(7000), '18%', inr(1260), inr(8260), 'Yes'],
            ['NC-102', '03-09-2026', 'Zainab Boutique', 'Dealer', 'Delhi', 'SHAWL', '4', inr(4900), inr(19600), '18%', inr(3528), inr(23128), 'No'],
            ['NC-103', '05-09-2026', 'Rahul Jain', 'Online', 'Delhi', 'BOX', '2', inr(1500), inr(3000), '5%', inr(150), inr(3150), 'Yes'],
            ['NC-104', '08-09-2026', 'Zainab Boutique', 'Dealer', 'Delhi', 'BOX', '10', inr(1050), inr(10500), '5%', inr(525), inr(11025), 'Yes'],
            ['NC-105', '10-09-2026', 'Priya Menon', 'Online', 'Karnataka', 'BOX', '1', inr(1500), inr(1500), '5%', inr(75), inr(1575), 'Yes'],
            ['NC-106', '14-09-2026', 'Kashmir House', 'Dealer', 'Maharashtra', 'SHAWL', '3', inr(4900), inr(14700), '18%', inr(2646), inr(17346), 'No'],
            ['NC-107', '17-09-2026', 'Anita Desai', 'Online', 'Maharashtra', 'SHAWL', '2', inr(7000), inr(14000), '18%', inr(2520), inr(16520), 'Yes'],
            ['NC-108', '20-09-2026', 'Zainab Boutique', 'Dealer', 'Delhi', 'SHAWL', '2', inr(4900), inr(9800), '18%', inr(1764), inr(11564), 'No'],
            ['NC-109', '24-09-2026', 'Farhan Lone', 'Online', 'J&K', 'BOX', '3', inr(1500), inr(4500), '5%', inr(225), inr(4725), 'Yes'],
            ['NC-110', '28-09-2026', 'Kashmir House', 'Dealer', 'Maharashtra', 'BOX', '6', inr(1050), inr(6300), '5%', inr(315), inr(6615), 'Yes']
          ],
          {
            align: ['l', 'l', 'l', 'l', 'l', 'l', 'r', 'r', 'r', 'r', 'r', 'r', 'l'],
            caption: 'Noor Crafts sales register, September 2026 (rows 2-11; column letters A to M in this order)',
            total: ['Total', '', '', '', '', '', '34', '', inr(90900), '', inr(13008), inr(103908), '']
          }
        )}
        ${callout('tip', 'Columns I, K and L are formulas, not typed numbers: in row 2, <code>=G2*H2</code>, <code>=I2*J2</code> and <code>=I2+K2</code>. Fill them down once and every new row calculates itself. The GST rate in column J is stored as 0.18, formatted as a percentage.')}
      `
    },
    {
      heading: 'Six questions, six formulas',
      short: 'Formulas',
      html: `
        <p>Each formula below has the same shape: <em>what to add up</em>, <em>where to look</em>, <em>what to match</em>. Read it aloud in English before you type it.</p>
        ${example({
          title: 'Answering Sana\'s questions from the register',
          scenario: 'Rows 2 to 11 hold the ten invoices above. Each answer is checked against the table.',
          steps: [
            { label: 'Total sales before GST?', html: '<code>=SUM(I2:I11)</code> → "add every taxable value". Result <strong>₹90,900</strong>.' },
            { label: 'Sales to dealers?', html: '<code>=SUMIF(D2:D11,"Dealer",I2:I11)</code> → "look in Channel, where it says Dealer, add the taxable value". 19,600 + 10,500 + 14,700 + 9,800 + 6,300 = <strong>₹60,900</strong>. Online is the rest: ₹30,000.' },
            { label: 'How many shawls went to dealers?', html: '<code>=SUMIFS(G2:G11,F2:F11,"SHAWL",D2:D11,"Dealer")</code> → SUMIFS puts the sum range <em>first</em>, then pairs of range/criteria. 4 + 3 + 2 = <strong>9 shawls</strong>.' },
            { label: 'How many orders from Zainab Boutique?', html: '<code>=COUNTIF(C2:C11,"Zainab Boutique")</code> → "count the rows where Customer is Zainab Boutique". Result <strong>3</strong>.' },
            { label: 'Average order value?', html: '<code>=AVERAGE(I2:I11)</code> → ₹90,900 ÷ 10 orders = <strong>₹9,090</strong> per invoice before GST.' },
            { label: 'How much is still unpaid?', html: '<code>=SUMIF(M2:M11,"No",L2:L11)</code> → add the invoice total where Paid? is No. 23,128 + 17,346 + 11,564 = <strong>₹52,038</strong>, all of it from dealers.' }
          ],
          result: 'Six one-line formulas told Sana that dealers bring two-thirds of sales but also hold ₹52,038 of her money. That is the whole point of a register.'
        })}
        ${table(
          ['Question', 'Formula', 'Plain English'],
          [
            ['Fill the rate from a price list', '=XLOOKUP(F2,Prices!$A$2:$A$3,Prices!$B$2:$B$3)', 'Find this SKU in the Prices sheet column A and return column B next to it'],
            ['… and not crash on a typo', '=IFERROR(XLOOKUP(F2,Prices!$A$2:$A$3,Prices!$B$2:$B$3),"SKU not found")', 'If the lookup fails, show a message instead of #N/A'],
            ['Apply the dealer discount', '=XLOOKUP(F2,Prices!$A$2:$A$3,Prices!$B$2:$B$3)*IF(D2="Dealer",0.7,1)', 'List price, times 0.7 only when the channel is Dealer'],
            ['Flag an unpaid invoice older than 30 days', '=IF(AND(M2="No",TODAY()-B2>30),"OVERDUE","")', 'If not paid and the date is more than 30 days ago, write OVERDUE'],
            ['Month label for grouping', '=TEXT(B2,"mmm-yyyy")', 'Turn 03-09-2026 into "Sep-2026" in a helper column N'],
            ['Month-end date for grouping', '=EOMONTH(B2,0)', 'Last day of that month (30-09-2026); keeps it a real date so it sorts correctly'],
            ['Sales for one month', '=SUMIFS(I:I,N:N,"Sep-2026")', 'Add taxable value where the month label is Sep-2026']
          ],
          { caption: 'Lookup, flag and month formulas (Prices sheet: A = SKU, B = list price)' }
        )}
        ${formula('=SUMIFS(sum_range, range1, criteria1, range2, criteria2, …)', 'SUMIF is range, criteria, sum_range. SUMIFS reverses the order and takes many conditions. Mixing the two up is the most common #VALUE! on a business sheet.')}
      `
    },
    {
      heading: 'Absolute references and the pivot table',
      short: 'Pivot &amp; $',
      html: `
        <p>When you fill a formula down, Excel shifts every reference by one row. That is what you want for <code>=G2*H2</code>
        (row 3 becomes <code>=G3*H3</code>). It is <em>not</em> what you want for the price list: row 3 would look in
        <code>Prices!A3:A4</code> and miss. A <strong>$</strong> before the column letter or row number pins it:
        <code>$A$2:$A$3</code> stays put however far you fill. Press F4 in the formula bar to cycle through the four forms.</p>
        ${diagrams.flow(
          [
            { label: 'Raw register', sub: 'one row per invoice', tone: 'n' },
            { label: 'Helper columns', sub: 'Month, Overdue flag', tone: 'c' },
            { label: 'Formulas / pivot', sub: 'SUMIFS, COUNTIF', tone: 'b' },
            { label: 'Summary sheet', sub: 'by channel, by month', tone: 'a' },
            { label: 'Dashboard', sub: 'charts, KPIs', tone: 'd' }
          ],
          { title: 'From register to dashboard', caption: 'Data flows one way. The register is never edited to make the report look right; the report is rebuilt from the register.' }
        )}
        <p>A <strong>pivot table</strong> does the SUMIFS work for you without writing formulas. Select the register, Insert → PivotTable,
        drag <em>Channel</em> to Rows, <em>Month</em> to Columns and <em>Taxable</em> to Values. You get sales by channel by month in
        four clicks, and it refreshes when the register grows. Use formulas when you need one specific number on a dashboard; use a pivot
        when you want to explore.</p>
        ${callout('india', 'Keep <strong>Taxable value</strong> and <strong>Tax</strong> in separate columns and split Tax into CGST/SGST (same state) and IGST (other state) if you prepare GSTR-1 from this sheet. A SUMIF on the State column against your own state tells you which invoices are intra-state. See <a href="learn/lesson.html?id=tax-01-gst-basics">GST basics</a>.')}
      `
    },
    {
      heading: 'Three mistakes that break business spreadsheets',
      short: 'Mistakes',
      html: `
        ${terms([
          ['Numbers stored as text', 'A green triangle in the corner, or numbers hugging the left edge, means Excel sees text. <code>=SUM()</code> silently ignores them and your total is short. Fix: select the column, Data → Text to Columns → Finish, or multiply by 1 in a helper column.'],
          ['Trailing spaces and spelling drift', '"Dealer " (with a space) is a different customer from "Dealer". SUMIF returns zero and you blame the formula. Fix: dropdowns for every category column, and <code>=TRIM()</code> when importing from a bank statement or Tally export.'],
          ['Hard-coded totals', 'Someone types 90900 into the total cell because the formula looked wrong. Next month the register grows and the total does not. Fix: totals are always formulas, kept outside the data, and the sheet is checked by a second person once a month.']
        ])}
        ${callout('warning', 'Dates typed as 3/9/2026 may be read as 9 March on a laptop with US settings. Check Control Panel → Region, or type dates as 03-Sep-2026 which Excel reads the same way everywhere. A wrong month moves a sale into the wrong GST return.')}
        <p>A register that follows the six rules, three helper formulas and one pivot table is enough to produce the monthly MIS pack
        in the <a href="learn/lesson.html?id=mis-02-monthly-mis-pack">next lesson</a>. Spend your effort on keeping the data clean; the reports then take minutes.</p>
      `
    }
  ],

  keyPoints: [
    'A register is one header row, one row per transaction, an ID column, real dates, dropdowns for categories, and no merged cells or subtotals inside the data.',
    'SUM adds a column; SUMIF adds where one condition matches; SUMIFS takes the sum range first and then many range/criteria pairs.',
    'COUNTIF counts matching rows, AVERAGE gives order value, XLOOKUP pulls a price from a list (wrap it in IFERROR), IF writes a flag.',
    'TEXT(date,"mmm-yyyy") or EOMONTH(date,0) in a helper column lets SUMIFS and pivot tables group by month.',
    'Use $ to pin a reference (price lists, tax rates) before filling a formula down; use a pivot table to explore the register without formulas.',
    'Numbers stored as text, trailing spaces and hand-typed totals are the three silent killers. Fix the data, not the formula.'
  ],

  practice: [
    { label: 'Excel Formula Studio', sub: 'Run SUM, SUMIF, COUNTIF, AVERAGE and XLOOKUP on a live sales register', href: 'excel-lab/index.html', icon: '📗' },
    { label: 'MIS Dashboard', sub: 'See what a clean register turns into once it is summarised', href: 'mis-lab/index.html', icon: '📈' },
    { label: 'Business calculators', sub: 'Check GST and margin arithmetic for your own register rows', href: 'calculators/index.html', icon: '🧮' }
  ],

  quiz: [
    {
      q: 'Sana wants the total taxable value of online sales from the register (Channel in column D, Taxable in column I, rows 2-11). Which formula is correct?',
      options: [
        '=SUMIF(I2:I11,"Online",D2:D11)',
        '=SUMIF(D2:D11,"Online",I2:I11)',
        '=SUMIFS(D2:D11,"Online",I2:I11)',
        '=COUNTIF(D2:D11,"Online")'
      ],
      answer: 1,
      why: 'SUMIF is range, criteria, sum_range: look in D for "Online", add I. Option A has the ranges swapped and returns 0; option C uses SUMIFS with SUMIF\'s argument order; COUNTIF counts rows (5), it does not add rupees. The answer is ₹30,000.'
    },
    {
      q: 'The formula =XLOOKUP(F2,Prices!A2:A3,Prices!B2:B3) works in row 2 but returns #N/A from row 4 onwards after filling down. Why?',
      options: [
        'XLOOKUP cannot be filled down',
        'The Prices sheet must be on the same tab',
        'The lookup ranges shifted to A4:A5 because they are relative; they need $ signs',
        'SKU names are case-sensitive'
      ],
      answer: 2,
      why: 'Relative references move one row for every row you fill. The price list is fixed, so pin it: Prices!$A$2:$A$3 and Prices!$B$2:$B$3. Press F4 on the reference to add the $ signs.'
    },
    {
      q: '=SUM(I2:I11) shows ₹71,300 but adding the column by hand gives ₹90,900. The most likely cause is:',
      options: [
        'The GST rate is wrong in column J',
        'Some values in column I are stored as text and SUM ignores them',
        'SUM only adds the first 8 rows',
        'The sheet needs to be saved first'
      ],
      answer: 1,
      why: '₹19,600 is missing, exactly one row. A number stored as text (green triangle, left-aligned) is skipped by SUM. Convert it with Text to Columns or multiply by 1, and use dropdowns and formulas so it does not recur.'
    },
    {
      q: 'Which layout breaks pivot tables and SUMIFS?',
      options: [
        'A helper column with =TEXT(B2,"mmm-yyyy")',
        'Dropdown lists for Channel and State',
        'A merged title cell above the header and a subtotal row after each month',
        'An ID column as the first column'
      ],
      answer: 2,
      why: 'Merged cells and subtotal rows inside the data block confuse the pivot range and get double-counted by SUM. Keep the register pure; build titles and subtotals on a separate report sheet.'
    }
  ],

  glossary: [
    ['Register', 'A flat list of transactions, one per row, with a single header row. The raw data behind every report.'],
    ['Data validation', 'Excel feature (Data → Data Validation) that restricts a cell to a list of allowed values, shown as a dropdown.'],
    ['Absolute reference', 'A cell reference with $ signs ($A$2) that does not shift when a formula is copied or filled down.'],
    ['Pivot table', 'An interactive summary table that groups and totals a register by any columns you drag in, without formulas.'],
    ['Helper column', 'An extra column holding a derived value (month label, overdue flag) that makes grouping and filtering simple.'],
    ['AOV (average order value)', 'Total sales divided by number of orders; AVERAGE of the order value column.']
  ]
};
