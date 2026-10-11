import { diagrams, example, callout, formula, table, journal, compare, terms, inr } from '../lesson-kit.js';

/**
 * Lesson 3.1 - Depreciation: SLM vs WDV
 * Running example: Noor Crafts (Sana, Srinagar) buys a ₹1,20,000 embroidery
 * machine. Residual ₹20,000, 5-year life for SLM; 20% for WDV.
 */
const SLM = [20000, 20000, 20000, 20000, 20000];
const WDV = [24000, 19200, 15360, 12288, 9830];   // 20% of opening book value, year 5 rounded from 9,830.40
const slmBV = [100000, 80000, 60000, 40000, 20000];
const wdvBV = [96000, 76800, 61440, 49152, 39322]; // year 5 rounded from 39,321.60

export default {
  id: 'fin-01-depreciation',
  title: 'Depreciation: SLM vs WDV',

  intro: `<p>A machine bought for ₹1,20,000 does not become a ₹1,20,000 expense on the day you buy it, and it does not stay worth
    ₹1,20,000 for ever either. <strong>Depreciation</strong> spreads the cost of a long-lived asset over the years it earns you money,
    so each year's profit carries a fair share. Two methods do this: the straight-line method (SLM) and the written-down-value method (WDV).
    The choice changes the profit you report, the tax you pay and the figure on your balance sheet.</p>`,

  outcomes: [
    'Explain depreciation as cost allocation, not valuation, and name its causes.',
    'Compute a multi-year schedule under SLM and WDV and say when each method fits.',
    'Pass the journal entries, show depreciation in the P&amp;L and balance sheet, and work out profit or loss on the sale of an asset.',
    'Apply the income-tax block rates and the half-rate rule to a purchase.'
  ],

  sections: [
    {
      heading: 'What depreciation is, and what it is not',
      short: 'The idea',
      html: `
        <p>When Sana buys an embroidery machine, she swaps one asset (bank) for another (machinery). No expense yet. But the machine will
        wear out, and the <strong>matching principle</strong> says its cost should be charged against the revenue of each year it helps earn.
        That yearly charge is depreciation.</p>
        ${diagrams.flow(
          [
            { label: 'Cost ₹1,20,000', sub: 'paid once, an asset', tone: 'b' },
            { label: 'Yearly charge', sub: 'expense in the P&L', tone: 'e' },
            { label: 'Accumulated', sub: 'total charged so far', tone: 'c' },
            { label: 'Book value', sub: 'cost minus accumulated', tone: 'a' }
          ],
          { title: 'From cost to book value', caption: 'Each year a slice of the cost moves from the balance sheet to the P&L. What has not yet been charged is the book value, which is not a market price.' }
        )}
        <p>Three things to hold on to. Depreciation is <strong>allocation, not valuation</strong>: book value is the cost not yet charged,
        whatever a buyer would pay. It is a <strong>non-cash expense</strong>: the cash left when the machine was bought, so the yearly charge
        reduces profit but not the bank balance. And land is not depreciated, because it does not wear out.</p>
        ${terms([
          ['Causes', 'Wear and tear; passage of time (a lease, a patent); obsolescence when a better machine arrives; depletion for mines and quarries.'],
          ['Residual (scrap) value', 'What you expect to get for the asset at the end of its useful life. Under SLM it is deducted before spreading the cost.'],
          ['Useful life', 'The years you expect to use the asset, not how long it could physically last.']
        ])}
      `
    },
    {
      heading: 'Straight line vs written down value',
      short: 'Two methods',
      html: `
        ${formula('SLM depreciation per year = (Cost − Residual value) ÷ Useful life', 'Same amount every year. Noor Crafts: (1,20,000 − 20,000) ÷ 5 = ₹20,000.')}
        ${formula('WDV depreciation = Opening book value × Rate', 'A fixed percentage of a shrinking base, so the charge falls every year. Noor Crafts: 1,20,000 × 20% = ₹24,000 in year 1; 96,000 × 20% = ₹19,200 in year 2.')}
        ${compare([
          { title: 'Straight-line (SLM)', tone: 'a', points: ['Equal charge each year; simple to budget', 'Ends exactly at residual value', 'Fits assets that give even service: furniture, leases, patents, buildings', 'Usual in company accounts (Schedule II, Companies Act 2013)'] },
          { title: 'Written-down value (WDV)', tone: 'd', points: ['Heavy charge early, lighter later', 'Fits assets that lose value fast: machines, vehicles, computers', 'Depreciation plus rising repairs stays roughly level', 'Required for income tax in India, so many small businesses use it in the books too'] }
        ])}
        ${callout('remember', 'Under WDV the book value never mathematically reaches zero; the asset is eventually sold or written off. Under SLM the schedule ends exactly at the residual value.')}
      `
    },
    {
      heading: 'Noor Crafts: the embroidery machine under both methods',
      short: 'Worked example',
      html: `
        ${example({
          title: 'A ₹1,20,000 machine, five years, two methods',
          scenario: 'On 1 April Sana buys a computerised embroidery machine for ₹1,20,000, expecting to use it for five years and sell it for ₹20,000. Her CA shows the schedule under SLM and under WDV at 20%.',
          steps: [
            { label: 'SLM:', html: '(₹1,20,000 − ₹20,000) ÷ 5 = <strong>₹20,000 every year</strong>. Book value falls to ₹20,000 after year 5.' },
            { label: 'WDV year 1:', html: '₹1,20,000 × 20% = ₹24,000. Book value ₹96,000.' },
            { label: 'WDV year 2 onwards:', html: '₹96,000 × 20% = ₹19,200, then ₹15,360, ₹12,288, ₹9,830 (rounded). Book value after year 5: ₹39,322.' },
            { label: 'Profit, year 1:', html: 'WDV charges ₹4,000 more than SLM, so profit is <strong>₹4,000 lower</strong> under WDV.' },
            { label: 'Profit, year 5:', html: 'WDV charges ₹9,830 against SLM\'s ₹20,000, so profit is <strong>₹10,170 higher</strong> under WDV.' }
          ],
          result: 'Over five years SLM charges ₹1,00,000 and WDV ₹80,678. The machine costs the same whichever method you use; the methods only decide <em>which year</em> bears how much. If Sana sells at ₹20,000 in year 5, the WDV books show a ₹19,322 loss on sale to catch up.'
        })}
        ${table(
          ['Year', 'SLM charge', 'SLM book value', 'WDV charge (20%)', 'WDV book value'],
          [1, 2, 3, 4, 5].map((y, i) => [String(y), inr(SLM[i]), inr(slmBV[i]), inr(WDV[i]), inr(wdvBV[i])]),
          { align: ['l', 'r', 'r', 'r', 'r'], caption: 'Noor Crafts embroidery machine: five-year schedule under both methods', total: ['Total charged', inr(100000), '', inr(80678), ''] }
        )}
        ${diagrams.bars(
          [
            { label: 'Y1 SLM', value: SLM[0], tone: 'a' }, { label: 'Y1 WDV', value: WDV[0], tone: 'd' },
            { label: 'Y2 SLM', value: SLM[1], tone: 'a' }, { label: 'Y2 WDV', value: WDV[1], tone: 'd' },
            { label: 'Y3 SLM', value: SLM[2], tone: 'a' }, { label: 'Y3 WDV', value: WDV[2], tone: 'd' },
            { label: 'Y4 SLM', value: SLM[3], tone: 'a' }, { label: 'Y4 WDV', value: WDV[3], tone: 'd' },
            { label: 'Y5 SLM', value: SLM[4], tone: 'a' }, { label: 'Y5 WDV', value: WDV[4], tone: 'd' }
          ],
          { title: 'Yearly depreciation: SLM (green) vs WDV (purple)', caption: 'SLM is flat. WDV starts above it and drops below from year 2, so WDV shows lower profit early and higher profit later.' }
        )}
      `
    },
    {
      heading: 'Journal entries and where it shows in the statements',
      short: 'Entries',
      html: `
        <p>Two ways to book the yearly charge. The <strong>direct method</strong> credits the asset account, so the ledger shows the shrinking
        book value. The <strong>provision method</strong> keeps the asset at cost and accumulates the charge in a separate Provision for
        Depreciation account; the balance sheet shows cost less provision.</p>
        ${journal([
          { date: '31 Mar Y1', debit: 'Depreciation', credit: 'Machinery', amount: 20000, narration: 'SLM depreciation for the year, direct method' },
          { date: '31 Mar Y1', debit: 'Depreciation', credit: 'Provision for Depreciation on Machinery', amount: 20000, narration: 'Same charge under the provision method; Machinery A/c stays at ₹1,20,000' },
          { date: '31 Mar Y1', debit: 'Profit and Loss', credit: 'Depreciation', amount: 20000, narration: 'Depreciation A/c closed to the P&L at year end' }
        ], { caption: 'Year 1 entries under SLM (either the first or the second, then the third)' })}
        ${table(
          ['Statement', 'Where', 'Year 1 (SLM)', 'Year 1 (WDV)'],
          [
            ['Profit and Loss A/c', 'Debit side, under expenses: "Depreciation on machinery"', inr(20000), inr(24000)],
            ['Balance sheet (direct method)', 'Assets: Machinery at book value', inr(100000), inr(96000)],
            ['Balance sheet (provision method)', 'Assets: Machinery ₹1,20,000 less provision for depreciation', inr(100000), inr(96000)]
          ],
          { align: ['l', 'l', 'r', 'r'], caption: 'How the first year appears in the final accounts' }
        )}
        ${callout('tip', 'The provision method suits an owner better: the balance sheet shows what you paid and how much is used up. Cost ₹1,20,000 less provision ₹1,00,000 is telling you a replacement is due.')}
      `
    },
    {
      heading: 'Income-tax depreciation: blocks, rates and the 180-day rule',
      short: 'Tax rules',
      html: `
        <p>Whatever your books use, the income-tax computation has its own rules: assets are grouped into <strong>blocks</strong> by type,
        depreciation is always on the <strong>WDV</strong> of the block, and the rates are fixed by the Income-tax Rules.</p>
        ${table(
          ['Block', 'Rate (WDV)', 'Examples'],
          [
            ['Buildings (non-residential)', '10%', 'Shop, workshop, office; residential buildings 5%'],
            ['Furniture and fittings', '10%', 'Racks, counters, electrical fittings'],
            ['Plant and machinery (general)', '15%', 'Embroidery machine, café kitchen equipment, motor cars'],
            ['Computers and software', '40%', 'Laptops, billing PCs, printers'],
            ['Intangibles', '25%', 'Trademarks, licences, know-how']
          ],
          { caption: 'Common income-tax depreciation blocks (Appendix I, Income-tax Rules). Verify current rates on the portal before filing.' }
        )}
        ${callout('india', '<strong>Half-rate rule:</strong> an asset put to use for <strong>less than 180 days</strong> in the financial year gets half the rate that year. Sana\'s machine bought on 1 April earns the full 15% (₹18,000); bought on 15 November it would get 7.5% (₹9,000). A sold asset is deducted from its block; no profit or loss is computed asset by asset unless the block empties. Check the rates on the Income-tax portal each year.')}
        <p>So the books may charge ₹20,000 or ₹24,000 while the tax return allows ₹18,000: a normal book-versus-tax timing gap your CA adjusts in the computation.</p>
      `
    },
    {
      heading: 'Selling the asset: profit or loss on sale',
      short: 'Sale',
      html: `
        <p>When an asset is sold, compare the sale price with the <strong>book value on the date of sale</strong>. Above book value is a
        profit on sale; below is a loss. Either is really a correction of the depreciation charged so far.</p>
        ${formula('Profit (loss) on sale = Sale price − Book value at date of sale', 'Book value = cost − depreciation charged to date. Always depreciate up to the date of sale first.')}
        ${example({
          title: 'Sana sells the machine at the end of year 3 for ₹65,000',
          scenario: 'A newer model has arrived, and a Baramulla workshop offers ₹65,000 for the three-year-old machine. Depreciation for year 3 has already been charged.',
          steps: [
            { label: 'Under SLM:', html: 'Book value = ₹1,20,000 − ₹60,000 = ₹60,000. Profit on sale = ₹65,000 − ₹60,000 = <strong>₹5,000</strong>.' },
            { label: 'Under WDV:', html: 'Book value = ₹61,440. Profit on sale = ₹65,000 − ₹61,440 = <strong>₹3,560</strong>.' },
            { label: 'Entry (SLM, direct method):', html: 'Bank A/c Dr ₹65,000; To Machinery A/c ₹60,000; To Profit on Sale of Machinery A/c ₹5,000.' },
            { label: 'Provision method:', html: 'see the table below; the asset and its provision are both removed.' }
          ],
          result: 'Net charge over three years: SLM ₹60,000 − ₹5,000 gain = ₹55,000; WDV ₹58,560 − ₹3,560 gain = ₹55,000. Either way the machine cost ₹1,20,000 − ₹65,000 = ₹55,000 to own. The method only changed the timing.',
          tone: 'c'
        })}
        ${table(
          ['Particulars', 'Debit (₹)', 'Credit (₹)'],
          [
            ['Bank A/c Dr', inr(65000), ''],
            ['Provision for Depreciation on Machinery A/c Dr', inr(60000), ''],
            ['To Machinery A/c', '', inr(120000)],
            ['To Profit on Sale of Machinery A/c', '', inr(5000)]
          ],
          { align: ['l', 'r', 'r'], caption: 'Sale entry under SLM, provision method (debits ₹1,25,000 = credits ₹1,25,000)' }
        )}
        ${callout('warning', 'Owners often book the ₹65,000 received as income and leave the machine in the books. That overstates profit and leaves a ghost asset on the balance sheet. Remove the asset (and its provision) and recognise only the difference.')}
      `
    }
  ],

  keyPoints: [
    'Depreciation allocates a fixed asset\'s cost over its useful life. It is not a valuation and not a cash outflow.',
    'SLM: (Cost − Residual) ÷ Life, a flat charge. WDV: Rate × opening book value, a falling charge. The total over the asset\'s life is the same; only the timing differs.',
    'Noor Crafts\' ₹1,20,000 machine: SLM ₹20,000 a year; WDV at 20% gives ₹24,000 in year 1 falling to ₹9,830 in year 5. Year-1 profit is ₹4,000 lower under WDV, year-5 profit ₹10,170 higher.',
    'Entry: Depreciation A/c Dr, To Asset A/c (direct) or To Provision for Depreciation A/c. Debit side of the P&L; book value on the balance sheet.',
    'Income tax uses WDV block rates (furniture 10%, plant and machinery 15%, computers 40%, buildings 10%), halved if the asset was used under 180 days in the year of purchase.',
    'On sale: profit or loss = sale price − book value at the date of sale. Remove the asset and its provision from the books.'
  ],

  practice: [
    { label: 'Depreciation calculator', sub: 'Enter cost, residual, life or rate and compare SLM and WDV schedules', href: 'calculators/index.html', icon: '🧮' },
    { label: 'Accounting Simulator', sub: 'Pass the year-end depreciation entry and watch the P&L and balance sheet update', href: 'accounting-lab/index.html', icon: '⚖️' },
    { label: 'Tax Lab', sub: 'See how book depreciation differs from the income-tax block computation', href: 'tax-lab/index.html', icon: '🏛️' }
  ],

  quiz: [
    {
      q: 'A delivery scooter costs ₹80,000 with an expected residual value of ₹8,000 after 4 years. What is the yearly SLM depreciation?',
      options: ['₹20,000', '₹18,000', '₹22,000', '₹8,000'],
      answer: 1,
      why: '(₹80,000 − ₹8,000) ÷ 4 = ₹18,000. Residual value is deducted first under SLM; forgetting it gives the wrong ₹20,000.'
    },
    {
      q: 'Under WDV at 20%, what is the depreciation in year 2 on an asset that cost ₹1,20,000?',
      options: ['₹24,000', '₹20,000', '₹19,200', '₹16,000'],
      answer: 2,
      why: 'Year 1: ₹1,20,000 × 20% = ₹24,000, leaving ₹96,000. Year 2: ₹96,000 × 20% = ₹19,200. WDV always works on the opening book value, not the original cost.'
    },
    {
      q: 'Which statement about depreciation is correct?',
      options: [
        'It shows what the asset would sell for today',
        'It reduces profit and reduces the bank balance by the same amount',
        'It allocates the asset\'s cost to the years it is used and does not involve cash',
        'It applies to land as well as buildings'
      ],
      answer: 2,
      why: 'Depreciation is cost allocation under the matching principle. The cash went out when the asset was bought; the yearly charge is non-cash. Land is not depreciated because it does not wear out.'
    },
    {
      q: 'Chai Adda buys a ₹60,000 commercial fridge on 10 December and uses it from that day. What depreciation does the income-tax computation allow in that first year (plant and machinery block, 15%)?',
      options: ['₹9,000', '₹4,500', '₹6,000', 'Nil, because it was used for under a year'],
      answer: 1,
      why: 'From 10 December to 31 March is under 180 days, so only half of 15%, that is 7.5%, applies: ₹60,000 × 7.5% = ₹4,500. Bought before 1 October it would have earned the full ₹9,000.'
    },
    {
      q: 'An asset with a book value of ₹35,000 is sold for ₹28,000. What is recorded?',
      options: ['Profit on sale ₹7,000', 'Loss on sale ₹7,000', 'Income of ₹28,000', 'Nothing until year end'],
      answer: 1,
      why: 'Sale price ₹28,000 − book value ₹35,000 = −₹7,000, a loss on sale, debited to the P&L. The asset (and any provision) is removed from the books at the same time.'
    }
  ],

  glossary: [
    ['Depreciation', 'The systematic allocation of the cost of a fixed asset over its useful life, charged as an expense each year.'],
    ['Straight-line method (SLM)', 'A method that charges an equal amount each year: (cost − residual value) ÷ useful life.'],
    ['Written-down-value method (WDV)', 'A method that charges a fixed percentage of the opening book value each year, so the charge declines over time. Also called reducing or diminishing balance.'],
    ['Book value', 'Cost of an asset minus the depreciation charged on it to date. Also called written-down value or net book value.'],
    ['Provision for depreciation', 'A separate credit-balance account that accumulates depreciation so the asset account can stay at cost. Also called accumulated depreciation.'],
    ['Block of assets', 'Under the Income-tax Act, a group of assets of the same type carrying the same rate, depreciated together on the WDV of the block.']
  ]
};
