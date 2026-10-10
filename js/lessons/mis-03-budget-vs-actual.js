import { diagrams, example, callout, formula, table, terms, compare, inr } from '../lesson-kit.js';

/**
 * Lesson 6.3 - Budget vs actual: variance analysis
 * Running example: Noor Crafts, shawl line, Q2 FY 2026-27 (Jul-Sep 2026).
 *
 * Budget: 60 shawls @ 7,000 (Jul 18, Aug 20, Sep 22). Actual: 54 shawls @ 6,800 (Jul 17, Aug 18, Sep 19).
 * Variable costs per shawl: weaver 4,000, packaging 120, courier 90 (actual courier 110).
 * Fixed for the quarter: rent 24,000, helper 36,000, ads budget 30,000 (actual 36,000).
 *
 * Static budget profit 77,400 | flexible budget (54 units) profit 60,660 | actual profit 42,780
 * Volume effect −16,740 (6 units x contribution 2,790) | flexible variances −17,880 | total −34,620
 */
export default {
  id: 'mis-03-budget-vs-actual',
  title: 'Budget vs actual: variance analysis',

  intro: `<p>A <strong>budget</strong> is your plan written in numbers. Comparing it with what actually happened is the fastest way
    to learn what your business is really doing: where the plan was wrong, where execution slipped, and which of the two you can fix.
    This lesson builds a simple budget, the budget-vs-actual report, and the two tricks that make it honest: splitting a sales variance
    into price and volume, and flexing the budget to actual volume.</p>`,

  outcomes: [
    'Build a monthly budget from units × price, variable cost per unit and fixed costs.',
    'Produce a budget vs actual report with variance in rupees and percent, marked favourable or adverse.',
    'Split a sales variance into a price variance and a volume variance, and flex a budget to actual volume before judging costs.',
    'Apply a materiality threshold so you investigate three variances, not thirty, and keep the budget alive with a rolling forecast.'
  ],

  sections: [
    {
      heading: 'Plan, actual, variance, investigate, act',
      short: 'The loop',
      html: `
        <p>Without a budget, every month\'s result is just a number: ₹42,780 profit, is that good? With a budget it becomes a
        <strong>variance</strong>: ₹34,620 below plan, and now you have a question to answer. The loop below is the whole of
        management accounting in five boxes.</p>
        ${diagrams.flow(
          [
            { label: 'Plan', sub: 'budget by month', tone: 'b' },
            { label: 'Actual', sub: 'from the registers', tone: 'a' },
            { label: 'Variance', sub: 'actual − budget, ₹ and %', tone: 'c' },
            { label: 'Investigate', sub: 'only material ones', tone: 'd' },
            { label: 'Act', sub: 'fix, or re-plan', tone: 'e' }
          ],
          { title: 'The budget control loop', caption: 'The loop runs monthly. "Act" sometimes means changing the business and sometimes means admitting the plan was wrong and re-forecasting.' }
        )}
        ${terms([
          ['Budget', 'A plan for a period (usually a year, split by month) expressed in units and rupees: how much you expect to sell, what it will cost, what will be left.'],
          ['Variance', 'Actual minus budget. Reported in rupees and as a percentage of the budget figure.'],
          ['Favourable (F) / adverse (A)', 'A variance that makes profit higher than planned is favourable; one that makes it lower is adverse. For revenue, more is F; for costs, more is A.']
        ])}
      `
    },
    {
      heading: 'Building a simple budget by month',
      short: 'The budget',
      html: `
        <p>Start with the one number everything hangs on: <strong>units sold per month</strong>. Multiply by selling price for revenue.
        Multiply by variable cost per unit for the costs that move with sales (product, packaging, courier). Add the fixed costs that
        arrive whether you sell or not (rent, salary, committed ad spend). Profit is what remains.</p>
        ${formula('Budget profit = Units × (Price − Variable cost per unit) − Fixed costs', 'Units × (Price − Variable cost) is the contribution. Everything in the budget flows from the unit estimate, so spend your thinking time there.')}
        <p>Sana budgets the shawl line for Q2 (July to September 2026): 18, 20 and 22 shawls at ₹7,000 as the festive season builds.
        Each shawl costs ₹4,000 from the weaver, ₹120 packaging and ₹90 courier. Fixed costs for the quarter: workshop rent ₹24,000,
        helper ₹36,000, online ads ₹30,000.</p>
        ${table(
          ['Line', 'Basis', 'Jul', 'Aug', 'Sep', 'Q2 budget'],
          [
            ['Shawls sold (units)', 'estimate', '18', '20', '22', '60'],
            ['Revenue', 'units × ₹7,000', inr(126000), inr(140000), inr(154000), inr(420000)],
            ['Cost of shawls', 'units × ₹4,000', inr(72000), inr(80000), inr(88000), inr(240000)],
            ['Packaging', 'units × ₹120', inr(2160), inr(2400), inr(2640), inr(7200)],
            ['Courier', 'units × ₹90', inr(1620), inr(1800), inr(1980), inr(5400)],
            ['Rent', 'fixed', inr(8000), inr(8000), inr(8000), inr(24000)],
            ['Helper', 'fixed', inr(12000), inr(12000), inr(12000), inr(36000)],
            ['Ads', 'fixed', inr(10000), inr(10000), inr(10000), inr(30000)]
          ],
          { align: ['l', 'l', 'r', 'r', 'r', 'r'], caption: 'Noor Crafts shawl line: Q2 budget', total: ['Budget profit', '', inr(20220), inr(25800), inr(31380), inr(77400)] }
        )}
        ${callout('tip', 'In Excel keep the assumptions (price, cost per unit, units per month) in a separate block at the top and reference them with $ signs. Change one cell and the whole budget recalculates. Never type a calculated number into the budget grid.')}
      `
    },
    {
      heading: 'The budget vs actual report',
      short: 'BvA report',
      html: `
        <p>Actual Q2: 54 shawls instead of 60, at an average ₹6,800 because Sana ran a ₹200 online festive discount. The courier
        partner raised rates to ₹110 per parcel in August. Ads overshot by ₹6,000. Every other line came in on plan.</p>
        ${formula('Variance ₹ = Actual − Budget      Variance % = Variance ₹ ÷ Budget × 100', 'In Excel: =C2-B2 and =D2/B2. Mark F/A with =IF(D2&gt;0,"F","A") on revenue rows and =IF(D2&lt;0,"F","A") on cost rows.')}
        ${table(
          ['Line', 'Budget', 'Actual', 'Variance ₹', 'Variance %', 'F / A'],
          [
            ['Shawls sold (units)', '60', '54', '−6', '−10.0%', 'A'],
            ['Revenue', inr(420000), inr(367200), '−' + inr(52800), '−12.6%', 'A'],
            ['Cost of shawls', inr(240000), inr(216000), '−' + inr(24000), '−10.0%', 'F'],
            ['Packaging', inr(7200), inr(6480), '−' + inr(720), '−10.0%', 'F'],
            ['Courier', inr(5400), inr(5940), '+' + inr(540), '+10.0%', 'A'],
            ['Rent', inr(24000), inr(24000), inr(0), '0%', '—'],
            ['Helper', inr(36000), inr(36000), inr(0), '0%', '—'],
            ['Ads', inr(30000), inr(36000), '+' + inr(6000), '+20.0%', 'A']
          ],
          { align: ['l', 'r', 'r', 'r', 'r', 'l'], caption: 'Noor Crafts shawl line, Q2 2026: budget vs actual', total: ['Profit', inr(77400), inr(42780), '−' + inr(34620), '−44.7%', 'A'] }
        )}
        ${diagrams.bars(
          [
            { label: 'Jul budget', value: 126000, tone: 'b' },
            { label: 'Jul actual', value: 115600, tone: 'a' },
            { label: 'Aug budget', value: 140000, tone: 'b' },
            { label: 'Aug actual', value: 122400, tone: 'a' },
            { label: 'Sep budget', value: 154000, tone: 'b' },
            { label: 'Sep actual', value: 129200, tone: 'a' }
          ],
          { title: 'Shawl revenue by month: budget (blue) vs actual (green)', caption: 'Actual units were 17, 18 and 19 at ₹6,800. The gap widens every month: the plan assumed a festive ramp-up that did not arrive.' }
        )}
        ${callout('warning', 'The cost of shawls shows a ₹24,000 "favourable" variance. Nothing was saved: Sana simply bought fewer shawls because she sold fewer. A static report rewards falling sales on every variable cost line. That is why you flex the budget before judging costs.')}
      `
    },
    {
      heading: 'Splitting the sales variance, and flexing the budget',
      short: 'Price, volume, flex',
      html: `
        <p>The ₹52,800 adverse revenue variance has two different causes with two different owners: Sana chose the discount (price),
        the market delivered fewer orders (volume). Separate them.</p>
        ${formula('Sales price variance = (Actual price − Budget price) × Actual units', '(6,800 − 7,000) × 54 = −₹10,800 adverse. The discount cost ₹200 on every shawl actually sold.')}
        ${formula('Sales volume variance = (Actual units − Budget units) × Budget price', '(54 − 60) × 7,000 = −₹42,000 adverse. Six missing shawls at the planned price. Together: −10,800 − 42,000 = −₹52,800, which ties to the report.')}
        <p>A <strong>flexible budget</strong> asks: "what <em>should</em> costs have been at 54 shawls?" Recompute every variable line
        at actual units, keep fixed costs as they were, and compare actuals with that. Now a variance on a cost line means the rate
        changed, not the volume.</p>
        ${formula('Flexible budget cost = Fixed cost + Variable cost per unit × Actual units', 'Courier: 0 + 90 × 54 = ₹4,860. Actual ₹5,940. Flexed variance +₹1,080 adverse (22%), where the static report showed a mild +₹540.')}
        ${example({
          title: 'Noor Crafts Q2: what the variances say, and what Sana does',
          scenario: 'Static budget profit ₹77,400, actual ₹42,780. Sana rebuilds the comparison on a flexible budget at 54 shawls before deciding anything.',
          steps: [
            { label: 'Flexible budget at 54 shawls.', html: 'Revenue 54 × 7,000 = 3,78,000; shawls 2,16,000; packaging 6,480; courier 4,860; rent 24,000; helper 36,000; ads 30,000. Flexed profit = <strong>₹60,660</strong>.' },
            { label: 'Volume effect = flexed profit − static profit.', html: '60,660 − 77,400 = <strong>−₹16,740</strong>. Check: 6 shawls × contribution (7,000 − 4,000 − 120 − 90 = 2,790) = 16,740. This is what six lost sales really cost: their margin, not their price.' },
            { label: 'Price variance (flexed vs actual revenue).', html: '3,67,200 − 3,78,000 = <strong>−₹10,800</strong>. Cause: the ₹200 festive discount. Owner: Sana\'s pricing decision.' },
            { label: 'Courier rate variance.', html: '5,940 − 4,860 = <strong>−₹1,080</strong>, a 22% overrun per parcel. Cause: the courier partner raised ₹90 to ₹110 in August without a renegotiation.' },
            { label: 'Ads variance.', html: '36,000 − 30,000 = <strong>−₹6,000</strong> (20%). Cause: a September campaign that was approved verbally and never added to the budget.' },
            { label: 'Everything else.', html: 'Shawl cost, packaging, rent and helper: zero variance once flexed. Total of flexed variances −10,800 − 1,080 − 6,000 = −₹17,880. Plus the volume effect −16,740 = <strong>−₹34,620</strong>, exactly the gap on the report.' }
          ],
          result: 'Actions: (1) stop the blanket ₹200 discount, replace it with a free walnut box on orders above ₹7,000 (costs ₹900, protects the shawl price); (2) get two courier quotes by 15 October and move if the ₹110 rate stands; (3) all ad spend above budget needs a written note in the pack before it is spent. The six-unit shortfall is re-forecast, not "fixed": Q3 units are revised from the plan to 20, 22, 24.',
          tone: 'b'
        })}
        ${table(
          ['Line', 'Static budget', 'Flexible budget (54)', 'Actual', 'Flexed variance', 'Cause'],
          [
            ['Revenue', inr(420000), inr(378000), inr(367200), '−' + inr(10800) + ' A', 'Price: ₹200 discount'],
            ['Cost of shawls', inr(240000), inr(216000), inr(216000), inr(0), '—'],
            ['Packaging', inr(7200), inr(6480), inr(6480), inr(0), '—'],
            ['Courier', inr(5400), inr(4860), inr(5940), '+' + inr(1080) + ' A', 'Rate ₹90 → ₹110'],
            ['Fixed (rent, helper)', inr(60000), inr(60000), inr(60000), inr(0), '—'],
            ['Ads', inr(30000), inr(30000), inr(36000), '+' + inr(6000) + ' A', 'Unbudgeted campaign']
          ],
          { align: ['l', 'r', 'r', 'r', 'r', 'l'], caption: 'Flexible budget reconciliation, Q2 2026', total: ['Profit', inr(77400), inr(60660), inr(42780), '−' + inr(17880) + ' A', 'Volume effect −₹16,740 sits between columns 1 and 2'] }
        )}
      `
    },
    {
      heading: 'Investigate only what matters, and keep the plan alive',
      short: 'Threshold &amp; forecast',
      html: `
        <p>A full report has twenty or thirty lines. If you chase every one you will chase none. Write a <strong>materiality rule</strong>
        on the report itself and apply it mechanically. A common rule for a small business: investigate a line if the variance is
        <strong>both</strong> more than 10% of the budget line <strong>and</strong> more than ₹5,000, or more than ₹25,000 on its own whatever the percentage.
        In Excel: <code>=IF(AND(ABS(E2)&gt;0.1,ABS(D2)&gt;5000),"Investigate","")</code>.</p>
        ${compare([
          { title: 'Static budget', tone: 'n', points: ['Set once at the start of the year', 'Compares actual with the original plan', 'Good for: was the plan right?', 'Bad for: judging cost control when volume moved'] },
          { title: 'Flexible budget', tone: 'b', points: ['Recomputed at actual volume', 'Compares actual with what it should have cost', 'Good for: is each line under control?', 'Separates price/rate effects from volume'] },
          { title: 'Rolling forecast', tone: 'a', points: ['Re-done every month for the next 12 months', 'Drop the month gone, add a new one, update units', 'Good for: cash planning and stock orders', 'Does not replace the budget; sits beside it'] }
        ])}
        <p>On Sana\'s report only two lines pass the threshold: revenue (−12.6%, ₹52,800) and ads (+20%, ₹6,000). Courier (+22% after flexing, but only ₹1,080)
        fails the rupee test, yet it is a rate change that will repeat every month, so it is noted for action. Packaging\'s −10% "saving" is volume and gets no time at all.</p>
        <p>Finally, a budget written in March is out of date by July. A <strong>rolling forecast</strong> keeps the next twelve months
        current: each month you replace the plan for the months already past with actuals, re-estimate units for the months ahead using
        what you now know (a festive season that is slower than hoped, a courier at ₹110) and extend by one month at the end. The original
        budget stays as the yardstick; the forecast is what you run the business on.</p>
        ${callout('india', 'Tie the budget to your compliance calendar: GST payments on the 20th (or 22nd/24th under QRMP), advance tax on 15 June/Sept/Dec/March, and the Section 43B(h) 15-day payment rule for micro and small suppliers. A forecast that ignores these dates will show cash you do not have. See <a href="learn/lesson.html?id=start-08-compliance-calendar">your compliance calendar</a>.')}
      `
    }
  ],

  keyPoints: [
    'Budget profit = Units × (Price − Variable cost per unit) − Fixed costs. The unit estimate drives everything, so budget it month by month.',
    'Variance = Actual − Budget, shown in ₹ and % and marked F (favourable) or A (adverse) from the profit\'s point of view.',
    'Sales price variance = (Actual price − Budget price) × Actual units; sales volume variance = (Actual units − Budget units) × Budget price. They add up to the revenue variance.',
    'Flex the budget to actual volume before judging costs: a "favourable" variable cost on a static budget usually just means you sold less.',
    'Investigate only material variances (e.g. over 10% and over ₹5,000). Three well-understood variances beat thirty noted ones.',
    'Keep the original budget as the yardstick and run the business on a rolling 12-month forecast updated every month.'
  ],

  practice: [
    { label: 'Business calculators', sub: 'Contribution, break-even and margin: the building blocks of a budget', href: 'calculators/index.html', icon: '🧮' },
    { label: 'Excel Formula Studio', sub: 'SUM and SUMIF the actuals that feed the budget vs actual report', href: 'excel-lab/index.html', icon: '📗' },
    { label: 'MIS Dashboard', sub: 'See budget-style KPIs with targets and status colours', href: 'mis-lab/index.html', icon: '📈' }
  ],

  quiz: [
    {
      q: 'Budget: 60 shawls at ₹7,000. Actual: 54 shawls at ₹6,800. What is the sales volume variance?',
      options: ['−₹10,800 adverse', '−₹42,000 adverse', '−₹52,800 adverse', '−₹40,800 adverse'],
      answer: 1,
      why: 'Volume variance = (Actual units − Budget units) × Budget price = (54 − 60) × 7,000 = −₹42,000. The price variance is (6,800 − 7,000) × 54 = −₹10,800, and the two together give the total revenue variance of −₹52,800.'
    },
    {
      q: 'Cost of shawls was budgeted at ₹2,40,000 and came in at ₹2,16,000 because only 54 of the planned 60 were sold. On a flexible budget this line shows:',
      options: ['₹24,000 favourable, because less was spent', '₹24,000 adverse, because fewer were sold', 'Zero variance, because 54 × ₹4,000 = ₹2,16,000 is exactly what it should have cost', 'Cannot be flexed because it is a fixed cost'],
      answer: 2,
      why: 'Flexing recomputes variable costs at actual volume: 54 × 4,000 = 2,16,000, the same as actual. The "saving" on the static report was pure volume effect. The lost margin on the six shawls is captured separately as the volume effect (−₹16,740).'
    },
    {
      q: 'Courier was budgeted at ₹90 per shawl for 60 shawls (₹5,400). Actual was ₹5,940 for 54 shawls. The best description is:',
      options: [
        'A 10% adverse variance, minor, no action',
        'Flexed budget ₹4,860; actual is ₹1,080 (22%) over, meaning the rate per parcel rose to ₹110 and should be renegotiated',
        'A favourable variance because fewer parcels were sent',
        'A volume variance only'
      ],
      answer: 1,
      why: 'Static: 5,940 − 5,400 = +540 (10%) looks mild. Flexed to 54 parcels the budget is 4,860, so the overrun is 1,080, or ₹20 on every parcel. The static view hid a rate increase behind lower volume.'
    },
    {
      q: 'Which variance should be investigated first under a rule of "over 10% and over ₹5,000"?',
      options: ['Packaging −₹720 (−10%)', 'Courier +₹540 (+10%)', 'Ads +₹6,000 (+20%)', 'Rent ₹0'],
      answer: 2,
      why: 'Only ads passes both tests (20% and ₹6,000). Packaging and courier fail the rupee test on a static basis, and packaging\'s "saving" is just volume. Materiality rules exist so that review time goes where the money is.'
    },
    {
      q: 'What is a rolling forecast?',
      options: [
        'The original annual budget, re-issued unchanged each month',
        'A forecast for the next 12 months, updated every month by replacing past months with actuals and adding a new month at the end',
        'The flexible budget for the current month',
        'A budget that only covers fixed costs'
      ],
      answer: 1,
      why: 'A rolling forecast keeps the forward view current as conditions change, while the original budget remains the fixed yardstick for variance reporting. Both are kept; they answer different questions.'
    }
  ],

  glossary: [
    ['Static budget', 'The original budget at planned volume, fixed for the year and used as the yardstick for variances.'],
    ['Flexible budget', 'The budget recomputed at actual volume (variable costs × actual units, fixed costs unchanged) so cost variances reflect rates, not volume.'],
    ['Sales price variance', '(Actual price − Budget price) × Actual units. The revenue effect of selling at a different price than planned.'],
    ['Sales volume variance', '(Actual units − Budget units) × Budget price. The revenue effect of selling more or fewer units than planned.'],
    ['Materiality threshold', 'A written rule (percentage and/or rupee amount) deciding which variances are large enough to investigate.'],
    ['Rolling forecast', 'A 12-month forward estimate updated monthly, used for running the business while the budget stays as the benchmark.']
  ]
};
