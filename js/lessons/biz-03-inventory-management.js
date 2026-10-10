import { diagrams, example, callout, formula, table, terms, checklist, compare, inr } from '../lesson-kit.js';

/**
 * Lesson 4.3 - Inventory: stock that sells, not sits
 * Running examples: Noor Crafts (Sana, Srinagar), Gupta Kirana (Rohit, Jaipur),
 * Chai Adda (Meera, Pune).
 */
export default {
  id: 'biz-03-inventory-management',
  title: 'Inventory: stock that sells, not sits',

  intro: `<p>Walk into Sana\'s workshop and you see shawls. An accountant sees <strong>₹2,40,000 of cash wearing a disguise</strong>.
    Stock is money you have already spent, waiting to be turned back into money. Hold too little and you lose sales; hold too much
    and you run out of cash while the shelves look full. This lesson gives you the handful of numbers that keep stock honest.</p>`,

  outcomes: [
    'Measure how hard your stock is working with stock turnover and inventory days.',
    'Classify items with ABC analysis and set a reorder level and safety stock for the ones that matter.',
    'Value closing stock under FIFO and weighted average, and explain why the choice changes reported profit.',
    'Run a stock-take and handle dead stock, markdowns and the GST consequences correctly.'
  ],

  sections: [
    {
      heading: 'Stock is cash in disguise',
      short: 'Cash in disguise',
      html: `
        <p>Two numbers tell you whether your stock is working or sleeping. <strong>Stock turnover</strong> is how many times a year
        you sell through your average stock. <strong>Inventory days</strong> is the same fact as a number of days on the shelf.</p>
        ${formula('Stock turnover = Cost of goods sold ÷ Average stock', 'Noor Crafts: ₹9,60,000 ÷ ₹2,40,000 = 4 times a year.')}
        ${formula('Inventory days = 365 ÷ Stock turnover', 'Noor Crafts: 365 ÷ 4 = 91 days. A shawl waits three months, on average, for a buyer.')}
        ${table(
          ['Business', 'Annual COGS', 'Average stock', 'Turnover', 'Inventory days'],
          [
            ['Noor Crafts', inr(960000), inr(240000), '4×', '91'],
            ['Gupta Kirana', inr(7200000), inr(400000), '18×', '20'],
            ['Chai Adda', inr(1200000), inr(10000), '120×', '3']
          ],
          { align: ['l', 'r', 'r', 'r', 'r'], caption: 'Same formula, three businesses. Perishables turn fast; handmade luxury turns slowly.' }
        )}
        <p>There is no universal "good" number; compare against your own past and against similar businesses. What matters is the
        <em>direction</em>. If Noor Crafts drifts from 91 days to 150 days, ₹1,50,000 more cash is sitting on shelves with nothing to show for it.</p>
        ${callout('remember', 'Use average stock (opening + closing) ÷ 2, and cost of goods sold, not sales. Comparing stock at cost with sales at selling price mixes two different measures and flatters the ratio.')}
      `
    },
    {
      heading: 'ABC analysis: watch the few that matter',
      short: 'ABC',
      html: `
        <p>Not all items deserve equal attention. Sort every SKU by its annual consumption value (units sold × cost) and you will
        find a familiar pattern: a few items carry most of the value. Those are <strong>A items</strong>: count them weekly, reorder
        them carefully, never run out. <strong>C items</strong> are many but cheap: order in bulk twice a year and stop thinking about them.</p>
        ${table(
          ['Class', 'SKUs', 'Share of SKUs', 'Annual consumption value', 'Share of value', 'Control'],
          [
            ['A', '2 (sozni shawl, plain pashmina shawl)', '14%', inr(680000), '71%', 'Weekly count, reorder level, safety stock'],
            ['B', '4 (kani stole, jewellery box, tea box, tray)', '29%', inr(190000), '20%', 'Monthly count, simple min/max'],
            ['C', '8 (coasters, pen stands, keychains, bookmarks…)', '57%', inr(90000), '9%', 'Quarterly count, bulk order']
          ],
          { align: ['l', 'l', 'r', 'r', 'r', 'l'], caption: 'Noor Crafts: 14 SKUs classified', total: ['Total', '14', '100%', inr(960000), '100%', ''] }
        )}
        ${diagrams.bars(
          [
            { label: 'A: 2 SKUs', value: 680000, tone: 'a' },
            { label: 'B: 4 SKUs', value: 190000, tone: 'c' },
            { label: 'C: 8 SKUs', value: 90000, tone: 'n' }
          ],
          { title: 'Annual consumption value by ABC class', caption: 'Two SKUs out of fourteen account for 71% of the money moving through stock. Control effort should follow the rupees, not the item count.' }
        )}
        <p>Rohit at Gupta Kirana has 1,200 SKUs. His A items are atta, oil, sugar, milk and a few brands of biscuits, maybe 80 lines.
        Those get counted every evening. The 600 slow-moving C items get a quarterly check.</p>
      `
    },
    {
      heading: 'When to reorder, and how much',
      short: 'Reorder',
      html: `
        <p>For A items, do not reorder "when it looks low". Set a number. The <strong>reorder level</strong> is the stock count at which you place the next order, so that what you have lasts until the new lot arrives, with a buffer for a late supplier or a busy week.</p>
        ${formula('Reorder level = (Average usage × Average lead time) + Safety stock', 'Usage and lead time in the same unit (both in days, or both in months).')}
        ${formula('Safety stock = (Maximum usage × Maximum lead time) − (Average usage × Average lead time)', 'The gap between the worst case and the normal case.')}
        ${diagrams.flow(
          [
            { label: 'Count stock', sub: 'weekly for A items', tone: 'b' },
            { label: 'At reorder level?', sub: '14 shawls or fewer', tone: 'c' },
            { label: 'Place order', sub: 'with the weaver', tone: 'a' },
            { label: 'Lead time', sub: '21 days (up to 28)', tone: 'n' },
            { label: 'Receive and inspect', sub: 'update register', tone: 'd' }
          ],
          { title: 'The reorder cycle for shawls', caption: 'The cycle only works if the count is honest and the register is updated the day goods arrive. A stale register makes the reorder level meaningless.' }
        )}
        ${example({
          title: 'Reorder level for pashmina shawls',
          scenario: 'Sana sells about 10 shawls a month, up to 15 in the festival season. The weaver normally delivers in 21 days, but has taken 28 days when the loom was busy.',
          steps: [
            { label: 'Normal lead-time demand.', html: '10 per month × (21 ÷ 30) months = <strong>7 shawls</strong>.' },
            { label: 'Worst-case lead-time demand.', html: '15 per month × (28 ÷ 30) months = <strong>14 shawls</strong>.' },
            { label: 'Safety stock.', html: '14 − 7 = <strong>7 shawls</strong>.' },
            { label: 'Reorder level.', html: '7 + 7 = <strong>14 shawls</strong>. When the weekly count shows 14 or fewer, she orders.' },
            { label: 'How many to order (EOQ).', html: 'Annual demand 120 shawls, cost of placing an order (trip to Kanihama, transport) about ₹1,500, cost of holding one shawl for a year about 20% of ₹4,000 = ₹800. EOQ = square root of (2 × 120 × 1,500 ÷ 800) = square root of 450 = <strong>about 21 shawls</strong> per order, roughly six orders a year.' }
          ],
          result: 'Order 21 shawls whenever stock falls to 14. Stock will peak around 35 and should never hit zero even in a bad month with a slow weaver.'
        })}
        ${callout('tip', 'EOQ balances ordering cost against holding cost. Treat it as a rough guide: if the weaver gives a better price for 25, order 25. The point is to stop ordering 5 at a time (too many trips) or 60 at a time (too much cash tied up).')}
      `
    },
    {
      heading: 'Valuing stock: FIFO vs weighted average',
      short: 'FIFO vs WAC',
      html: `
        <p>When you buy the same item at different prices, which price do you use for the units still on the shelf? The two methods
        permitted in India (AS 2 and Ind AS 2 do not allow LIFO) give different closing stock, and therefore different profit, from the same facts.</p>
        ${terms([
          ['FIFO (first in, first out)', 'Assumes the oldest units are sold first, so closing stock is made of the <em>latest</em> purchases at the latest prices.'],
          ['Weighted average cost (WAC)', 'Pools all purchases and divides total cost by total units. Every unit, sold or unsold, carries the same average cost.']
        ])}
        ${example({
          title: 'Walnut boxes: three purchases, one month',
          scenario: 'In April Sana bought boxes from the carpenter three times at rising prices and sold 45 boxes during the month.',
          steps: [
            { label: 'Purchases.', html: '1 April: 20 boxes at ₹850 = ₹17,000. 15 April: 30 at ₹900 = ₹27,000. 25 April: 20 at ₹950 = ₹19,000. Total <strong>70 boxes for ₹63,000</strong>. Sold 45, so 25 remain.' },
            { label: 'FIFO closing stock.', html: 'The 25 left are the newest: 20 at ₹950 = ₹19,000 plus 5 at ₹900 = ₹4,500 = <strong>₹23,500</strong>. Cost of goods sold = ₹63,000 − ₹23,500 = ₹39,500.' },
            { label: 'Weighted average closing stock.', html: '₹63,000 ÷ 70 = ₹900 per box. 25 × ₹900 = <strong>₹22,500</strong>. Cost of goods sold = 45 × ₹900 = ₹40,500.' }
          ],
          result: 'FIFO shows ₹1,000 more closing stock and ₹1,000 more profit this month. Nothing physical changed; only the assumption did.'
        })}
        ${table(
          ['', 'FIFO', 'Weighted average'],
          [
            ['Total purchases (70 boxes)', inr(63000), inr(63000)],
            ['Closing stock (25 boxes)', inr(23500), inr(22500)],
            ['Cost of goods sold (45 boxes)', inr(39500), inr(40500)],
            ['Effect on April profit', 'Higher by ₹1,000', 'Lower by ₹1,000']
          ],
          { align: ['l', 'r', 'r'], caption: 'Same boxes, same sales, two answers' }
        )}
        ${callout('warning', 'Pick one method and stick with it; switching every year to flatter profit is not allowed under AS 2 and invites tax scrutiny. Tally and most software default to weighted average for traded goods. FIFO is the natural choice when you physically rotate stock, as any kirana must with dated goods.')}
      `
    },
    {
      heading: 'Dead stock, markdowns and stock-take discipline',
      short: 'Dead stock',
      html: `
        <p>Every business grows a tail of items that stopped selling: last year\'s colour, a design the market ignored, a box with a
        hairline crack. Dead stock is still cash, but cash that shrinks every month it sits. The rule is simple: <strong>a slow item
        marked down today is worth more than the same item at full price next year.</strong></p>
        ${compare([
          { title: 'Dead stock signs', tone: 'e', points: ['No sale in 90 days (A/B items) or 180 days (C items)', 'Needs dusting before a photo shoot', 'You keep "meaning to" list it online', 'The carrying cost (space, insurance, obsolescence) is now more than the margin'] },
          { title: 'What to do', tone: 'a', points: ['Mark down 20-30% and feature it; then 50%', 'Bundle a slow C item free with an A item', 'Sell to a dealer at cost to recover cash', 'Write off what is unsaleable, and record it'] }
        ])}
        ${checklist([
          'Count physically at least quarterly; A items weekly. Count in pairs: one counts, one records.',
          'Freeze movements during the count; receive or dispatch nothing until it is signed off.',
          'Compare the count with the register. Investigate every difference above a set value before adjusting the books.',
          'Tag each lot with a received date so FIFO rotation is physical, not just on paper.',
          'Value the stock at the lower of cost and net realisable value (what it can actually be sold for, less selling costs). A ₹900 box that will fetch only ₹600 goes into the books at ₹600.'
        ], { title: 'Stock-take discipline' })}
        ${callout('india', 'When you bought stock you claimed input tax credit on it. If those goods are later lost, stolen, destroyed, written off, or given away as free samples or gifts, Section 17(5)(h) requires you to <strong>reverse that ITC</strong> in your GSTR-3B. Selling at a markdown is different: GST is charged on whatever price you actually sell at, and no ITC reversal is needed just because you sold below cost. Keep the write-off register; your CA needs it for both the GST reversal and the income-tax claim.')}
      `
    }
  ],

  keyPoints: [
    'Stock is cash already spent. Stock turnover (COGS ÷ average stock) and inventory days (365 ÷ turnover) show how fast it comes back.',
    'ABC analysis: a few A items carry most of the value. Count them weekly and set reorder rules; manage C items in bulk.',
    'Reorder level = average usage × lead time + safety stock. Safety stock covers the worst-case usage and lead time over the normal case.',
    'FIFO values closing stock at the latest prices; weighted average pools all costs. In rising prices FIFO shows higher stock and higher profit. LIFO is not permitted.',
    'Mark dead stock down early; count physically and often; value at the lower of cost and net realisable value.',
    'ITC claimed on stock that is lost, destroyed, written off or given free must be reversed in GSTR-3B. Markdown sales need no reversal.'
  ],

  practice: [
    { label: 'Calculators', sub: 'Reorder level, EOQ and inventory-days calculators', href: 'calculators/index.html', icon: '🧮' },
    { label: 'MIS Lab', sub: 'Build an ABC analysis and a stock register in a spreadsheet', href: 'mis-lab/index.html', icon: '📊' },
    { label: 'Projects', sub: 'Do a full stock-take and valuation exercise for Noor Crafts', href: 'projects/index.html', icon: '🗂️' }
  ],

  quiz: [
    {
      q: 'Cost of goods sold for the year is ₹12,00,000 and average stock is ₹2,00,000. What are the inventory days?',
      options: ['6 days', '61 days', '30 days', '182 days'],
      answer: 1,
      why: 'Turnover = 12,00,000 ÷ 2,00,000 = 6 times a year. Inventory days = 365 ÷ 6 = 60.8, about 61 days.'
    },
    {
      q: 'Average usage 20 units a week, lead time 3 weeks, safety stock 15 units. What is the reorder level?',
      options: ['60 units', '75 units', '35 units', '45 units'],
      answer: 1,
      why: 'Reorder level = (20 × 3) + 15 = 75 units. The 60 covers normal demand during the wait; the 15 is the buffer for a late supplier or a busy week.'
    },
    {
      q: 'Prices are rising. Compared with weighted average, FIFO will show:',
      options: ['Lower closing stock and lower profit', 'Higher closing stock and higher profit', 'The same closing stock, different profit', 'Higher closing stock and lower profit'],
      answer: 1,
      why: 'Under FIFO the units left are the newest and dearest, so closing stock is valued higher. Higher closing stock means lower cost of goods sold and therefore higher profit.'
    },
    {
      q: 'Noor Crafts gives away 10 walnut boxes as free samples to a dealer. What happens under GST?',
      options: ['Nothing; samples are exempt', 'The ITC claimed on those boxes must be reversed', 'GST must be charged at 40%', 'The boxes can be shown as a sale at ₹0'],
      answer: 1,
      why: 'Goods given free are blocked under Section 17(5)(h), so the input tax credit originally claimed on them has to be reversed in GSTR-3B. There is no output tax because there is no consideration.'
    }
  ],

  glossary: [
    ['SKU (stock keeping unit)', 'One distinct item you track separately, such as a plain pashmina shawl in a given size and colour.'],
    ['Stock turnover', 'How many times a year average stock is sold through: cost of goods sold ÷ average stock.'],
    ['Reorder level', 'The stock count at which a new order is placed so that goods arrive before stock runs out.'],
    ['Safety stock', 'Extra units held to cover demand spikes or supplier delays beyond the normal case.'],
    ['EOQ (economic order quantity)', 'The order size that balances the cost of placing orders against the cost of holding stock.'],
    ['Net realisable value', 'The price an item can actually be sold for, less the costs of selling it. Stock is valued at the lower of cost and NRV.']
  ]
};
