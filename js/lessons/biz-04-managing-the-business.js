import { diagrams, example, callout, formula, table, steps, checklist, terms } from '../lesson-kit.js';

/**
 * Lesson 4.4 - Managing: plans, SOPs, people & KPIs
 * Running example: Noor Crafts (Sana, Srinagar) with one helper, Bilal.
 */
export default {
  id: 'biz-04-managing-the-business',
  title: 'Managing: plans, SOPs, people & KPIs',

  intro: `<p>Doing the work and managing the work are different jobs. Sana can embroider, photograph, pack and reply to WhatsApp
    messages until midnight and still have no idea whether the business is on track. Management is the small set of habits that
    turn a busy owner into someone who <strong>decides, delegates and checks</strong>. None of it needs an MBA; all of it needs a weekly hour.</p>`,

  outcomes: [
    'Describe the manager\'s loop (plan, organise, staff, direct, control) and apply it to a small business.',
    'Write a quarterly plan with three measurable goals, and an SOP that someone else can follow without asking you.',
    'Delegate with a simple RACI table, run a weekly review, and read a KPI table to decide what to fix.'
  ],

  sections: [
    {
      heading: 'The manager\'s loop',
      short: 'The loop',
      html: `
        <p>Every management textbook describes the same five activities, and every good shopkeeper does them by instinct: decide what
        you want (plan), arrange the work and tools (organise), get the right people (staff), guide them day to day (direct), and
        compare results with the plan (control). The last step feeds the first, which is why it is a loop and not a list.</p>
        ${diagrams.cycle(
          [
            { label: 'Plan', tone: 'a' },
            { label: 'Organise', tone: 'b' },
            { label: 'Staff', tone: 'c' },
            { label: 'Direct', tone: 'd' },
            { label: 'Control', tone: 'e' }
          ],
          { title: 'The manager\'s loop', caption: 'Control is not punishment; it is measurement. What the numbers show at "control" becomes the input to the next "plan".' }
        )}
        ${terms([
          ['Plan', 'Choose a few goals for a fixed period and decide what has to be done to reach them.'],
          ['Organise', 'Decide who does what, in what order, with which tools. SOPs and the RACI table live here.'],
          ['Staff', 'Hire, train and keep the people the plan needs.'],
          ['Direct', 'The daily work of instructing, answering questions, motivating and correcting.'],
          ['Control', 'Measure results against the plan, find the gap, and act. KPIs and the weekly review live here.']
        ])}
        ${callout('remember', 'Most one-person businesses live entirely in "direct", reacting to whatever comes in. Fifteen minutes of "control" every week is the biggest upgrade an owner can make.')}
      `
    },
    {
      heading: 'A quarterly plan with three goals',
      short: 'Quarterly plan',
      html: `
        <p>A year is too long to plan honestly and a week too short to change anything; a quarter works. Pick <strong>three
        goals</strong>, each with a number and a date, and the two or three actions that will get you there. More than three
        goals means none gets done.</p>
        ${table(
          ['Goal (October to December)', 'Measure', 'Now', 'Target', 'Actions'],
          [
            ['1. Grow monthly revenue', 'Revenue per month', '₹1,00,000', '₹1,50,000 by December', 'Sign 2 new dealers in Delhi; Diwali gift-box campaign online; add 3 new box designs'],
            ['2. Dispatch on time', 'Orders dispatched within 2 working days', '85%', '95%', 'Order fulfilment SOP; Bilal owns packing; courier pickup booked daily at 3 pm'],
            ['3. Cut returns', 'Returns as % of orders', '8%', '4%', 'Better size and colour photos; quality check before packing; sturdier box packaging']
          ],
          { caption: 'Noor Crafts: Sana\'s first quarterly plan' }
        )}
        <p>Each goal has an owner (Sana for 1 and 3, Bilal for 2) and each action a date. At quarter end the "Now" column becomes
        the start of the next plan: the loop closing.</p>
        ${callout('tip', 'Write the plan on one page and pin it above the packing table. A plan nobody sees is a wish.')}
      `
    },
    {
      heading: 'SOPs: write it down once, so you stop explaining it',
      short: 'SOPs',
      html: `
        <p>A <strong>standard operating procedure</strong> is a numbered list of exactly how a task is done here, written so a
        new person can follow it without asking. The test: hand it to someone on their first day and see if the order goes out
        correctly. This one makes goal 2 possible.</p>
        ${steps([
          'Check the order dashboard at 10 am and 2 pm. For each new paid order, print the order slip (name, address, mobile, items, SKU codes).',
          'Pick items by SKU code and tick each on the slip. If anything is missing, tell Sana at once; never substitute.',
          'Quality check: lay the shawl flat and check embroidery, edges and marks; open each box and check hinges and finish. Rejects go to the "QC fail" shelf with a note.',
          'Pack: shawl in tissue, cloth bag, then brand box; walnut box in bubble sheet. Add the thank-you card and care leaflet. Seal with branded tape.',
          'Print the invoice (one copy inside the parcel, one filed) and the courier label. Weigh the parcel and note the weight on the slip.',
          'Book the pickup on the courier portal before 3 pm. Paste the label. Record the tracking number on the slip and in the dispatch register.',
          'WhatsApp the customer the tracking link with the standard message. Mark the order "dispatched" on the dashboard.',
          'File the slip and invoice copy in the month\'s folder. Update the stock register for every item that left.'
        ], { title: 'SOP: order fulfilment (owner: Bilal)' })}
        ${diagrams.flow(
          [
            { label: 'New paid order', tone: 'a' },
            { label: 'Pick and QC', tone: 'b' },
            { label: 'Pack and invoice', tone: 'c' },
            { label: 'Book courier by 3 pm', tone: 'd' },
            { label: 'Tracking to customer', tone: 'e' },
            { label: 'Update registers', tone: 'n' }
          ],
          { title: 'Order fulfilment at a glance', caption: 'Six stations, one owner. The chart goes on the wall; the numbered SOP goes in the folder for training and for settling arguments.' }
        )}
        <p>Write SOPs only for tasks that repeat often and go wrong from memory: order fulfilment, receiving stock, handling a
        return, raising a dealer invoice, closing the day\'s cash. Four or five cover most of a small business.</p>
      `
    },
    {
      heading: 'Delegating and hiring',
      short: 'People',
      html: `
        <p>Delegation fails when it is vague. "Bilal, handle the orders" leaves a dozen questions open. A <strong>RACI table</strong>
        fixes that: for each task, who is <em>Responsible</em> (does the work), <em>Accountable</em> (answers for the result;
        exactly one person), <em>Consulted</em> before, and <em>Informed</em> after.</p>
        ${table(
          ['Task', 'Sana (owner)', 'Bilal (helper)', 'Weaver / carpenter', 'CA'],
          [
            ['Pack and dispatch orders', 'A', 'R', '–', '–'],
            ['Quality check incoming stock', 'R, A', 'C', 'I', '–'],
            ['Reorder shawls at reorder level', 'A', 'R', 'I', '–'],
            ['Dealer pricing and credit terms', 'R, A', '–', '–', 'C'],
            ['GST returns (GSTR-1, GSTR-3B)', 'A', 'I', '–', 'R'],
            ['Weekly KPI sheet', 'A', 'R', '–', '–']
          ],
          { caption: 'Noor Crafts RACI: R = does it, A = answerable, C = consulted, I = informed' }
        )}
        <p>Notice that Sana is Accountable for everything but Responsible for only two rows. That is the goal: the owner keeps the
        decisions and hands over the doing.</p>
        <p>When you hire your first employee, do three things properly: a <strong>written offer letter</strong> (designation, start
        date, salary, hours, leave, notice period, probation); salary by bank transfer, never cash; and at least the state minimum
        wage for the category of work.</p>
        ${callout('india', 'Statutory deductions kick in with size. <strong>EPF</strong> (provident fund) becomes compulsory at 20 or more employees; <strong>ESI</strong> (health insurance) at 10 or more in a notified area, for staff earning up to ₹21,000 a month. Below that you may register voluntarily. With one or two staff, Sana\'s obligations are Shops and Establishment registration, minimum wages and a salary register. Verify current thresholds; some states apply ESI at 20.')}
      `
    },
    {
      heading: 'Control: the weekly review and KPIs',
      short: 'KPIs',
      html: `
        <p>A <strong>KPI</strong> (key performance indicator) is a number you look at every week because it tells you whether the
        plan is working. Choose six to eight, put them on one sheet with a target beside each, and spend half an hour a week
        deciding one or two things from it.</p>
        ${checklist([
          'Last week\'s KPI sheet: which numbers are red, and why?',
          'Cash: bank balance, what is due to be paid this week, what is due to come in.',
          'Orders and stock: anything stuck, anything about to run out?',
          'Customers: complaints, returns, reviews from the week.',
          'Quarterly plan: did the actions for this week happen? What is this week\'s action?',
          'One decision: the single thing we change this week, and who owns it.'
        ], { title: 'Weekly review agenda (Monday, 30 minutes, Sana and Bilal)' })}
        ${example({
          title: 'Sana\'s KPI sheet for the week of 13 to 19 October',
          scenario: 'Bilal fills the sheet on Monday morning from the dashboard, the courier portal and the bank app.',
          steps: [
            { label: 'Orders and revenue.', html: '32 orders: 8 shawls (₹56,000) and 24 walnut boxes (₹36,000), total <strong>₹92,000</strong>.' },
            { label: 'Conversion.', html: '2,400 website visitors produced 32 orders: 32 ÷ 2,400 = <strong>1.33%</strong>.' },
            { label: 'Average order value.', html: '₹92,000 ÷ 32 = <strong>₹2,875</strong>.' },
            { label: 'Gross margin.', html: 'Cost of goods: 8 × ₹4,000 + 24 × ₹900 = ₹53,600. Gross profit ₹92,000 − ₹53,600 = ₹38,400, which is <strong>42%</strong> of revenue.' },
            { label: 'On-time dispatch.', html: '29 of 32 orders left within two working days: <strong>91%</strong>. Three were late because the courier pickup was missed on Thursday.' },
            { label: 'Returns.', html: '2 returns out of 32 orders: <strong>6%</strong>. Both were box lids damaged in transit.' },
            { label: 'Cash days.', html: 'Bank ₹1,20,000 ÷ average daily spend ₹3,000 = <strong>40 days</strong> of runway.' }
          ],
          result: 'Two reds: on-time dispatch (91% vs 95% target) and returns (6% vs 4%). One decision: switch to the double-wall box and set a 2:45 pm phone alarm for the courier booking. Everything else is on track.'
        })}
        ${table(
          ['KPI', 'Formula', 'This week', 'Target', 'Status'],
          [
            ['Orders', 'Count of paid orders', '32', '35', 'Amber'],
            ['Conversion rate', 'Orders ÷ visitors', '1.33%', '1.5%', 'Amber'],
            ['Average order value', 'Revenue ÷ orders', '₹2,875', '₹2,600', 'Green'],
            ['Gross margin', '(Revenue − cost of goods) ÷ revenue', '42%', '40%', 'Green'],
            ['On-time dispatch', 'Orders out within 2 working days ÷ orders', '91%', '95%', 'Red'],
            ['Returns', 'Returned orders ÷ orders', '6%', '4%', 'Red'],
            ['Cash days', 'Bank balance ÷ average daily spend', '40', '45', 'Amber']
          ],
          { align: ['l', 'l', 'r', 'r', 'l'], caption: 'Noor Crafts weekly KPI sheet' }
        )}
        ${formula('Conversion rate = Orders ÷ Visitors', 'Small changes matter: lifting 1.33% to 1.5% on the same 2,400 visitors adds 4 orders a week with no extra ad spend.')}
        <p>Finally, managing means <strong>saying no</strong>: to a dealer order that would push cash days below 20, to a custom design
        that needs a new supplier for one order, to a fourth goal in the quarter. Every yes to the wrong thing is a no to the plan you already wrote.</p>
        ${callout('warning', 'Do not track a number you will not act on. If returns stay red for three weeks and nothing changes, the sheet has become decoration. Fewer KPIs, each with a decision attached, beat a dashboard nobody reads.')}
      `
    }
  ],

  keyPoints: [
    'Management is a loop: plan, organise, staff, direct, control. Control feeds the next plan.',
    'A quarterly plan has three goals, each with a measure, a current value, a target and two or three actions. One page, pinned up.',
    'An SOP is a numbered list a new person can follow on day one. Write them for tasks that repeat and go wrong from memory.',
    'RACI delegation: one Accountable person per task; the owner keeps A and gives away R.',
    'First hire: written offer letter, bank-transferred salary, minimum wage, Shops and Establishment registration. EPF from 20 staff, ESI from 10 (wages up to ₹21,000).',
    'Six to eight KPIs reviewed weekly, with one decision per review. Track only what you will act on.'
  ],

  practice: [
    { label: 'MIS Lab', sub: 'Build the weekly KPI sheet with formulas and red/amber/green flags', href: 'mis-lab/index.html', icon: '📊' },
    { label: 'Projects', sub: 'Write a quarterly plan and two SOPs for your own business', href: 'projects/index.html', icon: '🗂️' },
    { label: 'Business Lab', sub: 'Test the cash impact of each goal before you commit', href: 'business-lab/index.html', icon: '📈' }
  ],

  quiz: [
    {
      q: 'In the manager\'s loop, comparing this week\'s dispatch rate with the 95% target is which activity?',
      options: ['Planning', 'Organising', 'Directing', 'Controlling'],
      answer: 3,
      why: 'Control is measuring results against the plan and acting on the gap. The KPI sheet and the weekly review are control tools.'
    },
    {
      q: 'In a RACI table, how many people should be Accountable for one task?',
      options: ['As many as are involved', 'Exactly one', 'At least two, for safety', 'None; the Responsible person is enough'],
      answer: 1,
      why: 'Accountability must sit with one person, otherwise everyone assumes someone else will answer for the result. Several people can be Responsible, Consulted or Informed.'
    },
    {
      q: 'Revenue ₹1,20,000 from 40 orders, cost of goods ₹66,000. What are the average order value and gross margin?',
      options: ['₹3,000 and 55%', '₹3,000 and 45%', '₹1,650 and 45%', '₹3,000 and 65%'],
      answer: 1,
      why: 'AOV = 1,20,000 ÷ 40 = ₹3,000. Gross margin = (1,20,000 − 66,000) ÷ 1,20,000 = 54,000 ÷ 1,20,000 = 45%.'
    },
    {
      q: 'Noor Crafts has 3 employees earning ₹15,000 a month. Which statement is correct?',
      options: ['EPF deduction is compulsory because wages are under ₹21,000', 'ESI is compulsory because there are more than 2 employees', 'Neither EPF nor ESI is compulsory at this size, but the employer must still pay minimum wages and keep a salary register', 'Both EPF and ESI are compulsory for any registered business'],
      answer: 2,
      why: 'EPF becomes compulsory at 20 or more employees and ESI at 10 or more (for wages up to ₹21,000). With three staff neither applies, though voluntary registration is possible. Minimum wages and basic records apply from the first employee.'
    }
  ],

  glossary: [
    ['SOP (standard operating procedure)', 'A written, numbered description of exactly how a recurring task is done, so anyone can follow it.'],
    ['RACI', 'A delegation table marking who is Responsible, Accountable, Consulted and Informed for each task.'],
    ['KPI (key performance indicator)', 'A small set of numbers reviewed regularly because they show whether the plan is working.'],
    ['Average order value (AOV)', 'Revenue divided by number of orders in a period.'],
    ['Cash days', 'Bank balance divided by average daily cash spend: how many days the business can run with no new receipts.'],
    ['EPF / ESI', 'Employees\' Provident Fund (retirement savings, compulsory at 20+ employees) and Employees\' State Insurance (health cover, compulsory at 10+ employees for wages up to ₹21,000).']
  ]
};
