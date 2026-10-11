import { diagrams, example, callout, formula, checklist, table, terms, inr } from '../lesson-kit.js';

/**
 * Lesson 1.9 - Running it honestly: ethics that pay
 * Running example: Noor Crafts (Sana, Srinagar). GST-registered proprietor buying from
 * Udyam-registered artisans and selling to dealers and online customers.
 */
export default {
  id: 'start-09-ethics-and-trust',
  title: 'Running it honestly: ethics that pay',

  intro: `<p>Every small business gets the same offers in its first year: a dealer who wants a bill "without GST", a customer who
    will not notice that the shawl is a blend, a weaver who can wait another month for his money. Each one looks like free profit.
    This lesson puts numbers on those choices. Honesty is not only the right way to trade; for a brand that lives on repeat orders
    and word of mouth, it is also the cheaper way.</p>`,

  outcomes: [
    'Explain, with numbers, why a "kachha bill" without GST costs more than it saves.',
    'Apply the 15/45-day payment rule for micro and small suppliers and the basic consumer-protection duties of a seller.',
    'Make truthful product claims (handmade, GI pashmina) and handle customer data responsibly.'
  ],

  sections: [
    {
      heading: 'Trust is a marketing budget you do not have to spend',
      short: 'The cycle',
      html: `
        <p>Noor Crafts does not have an advertising budget that can make a stranger believe a ${inr(7000)} shawl is worth it. What it has is
        the last customer. If the shawl was what the listing said, the customer comes back, tells a friend, and the next sale costs nothing to
        acquire. Every honest step feeds the next; every shortcut breaks the loop at the point where it is most expensive to repair.</p>
        ${diagrams.cycle(
          ['Honest claim', 'Product matches promise', 'Repeat order', 'Referral', 'Lower marketing cost'],
          { title: 'The trust loop', caption: 'A new customer from an ad might cost ' + inr(500) + ' to ' + inr(1500) + ' in marketplace fees and promotions. A referred customer costs nothing and already trusts you.' }
        )}
        ${callout('remember', 'A dealer in Delhi buys from Sana because she is 800 km away and he cannot check every shawl. He is buying her word. The day her word becomes unreliable, the 30% dealer discount is no longer enough to keep him; he will need a 40% discount to cover the risk, or he will leave.')}
      `
    },
    {
      heading: 'The "kachha bill": what it really costs',
      short: 'Kachha bill',
      html: `
        <p>A <strong>kachha bill</strong> is an informal note with no GST, no invoice number, and no entry in anyone's books. The buyer
        "saves" the 18%, the seller skips the return, and the sale never happened. Here is the same ${inr(70000)} order done both ways.</p>
        ${example({
          title: 'A dealer asks Sana for ' + inr(70000) + ' of shawls without a bill',
          scenario: 'A Delhi dealer offers to buy shawls worth ' + inr(70000) + ' at dealer prices, paid in cash, "no GST, no invoice". Sana\'s profit on the order at a 10% dealer margin is ' + inr(7000) + '. The dealer is GST-registered.',
          steps: [
            { label: 'Done right.', html: 'Tax invoice ' + inr(70000) + ' + IGST 18% ' + inr(12600) + ' = ' + inr(82600) + '. The dealer claims the ' + inr(12600) + ' as input tax credit in his GSTR-2B, so his real cost is <strong>' + inr(70000) + '</strong>, exactly what he offered in cash. Sana pays ' + inr(12600) + ' output tax (net of her own ITC) and keeps ' + inr(7000) + ' of profit, on record.' },
            { label: 'What the dealer actually wants.', html: 'If he gets the credit anyway, the kachha bill saves him nothing on GST. The only reason to want it is to resell the shawls off the books too. Sana\'s missing invoice becomes the first link in his hidden turnover.' },
            { label: 'Sana\'s GST exposure if found.', html: 'Tax ' + inr(12600) + ' + interest 18% for a year ' + inr(2268) + ' + penalty for suppression up to 100% of tax ' + inr(12600) + ' = <strong>' + inr(27468) + '</strong>. If the consignment is stopped on the highway without an invoice and e-way bill (needed above ' + inr(50000) + '), Section 129 adds a penalty of 200% of the tax, ' + inr(25200) + ', before the goods are released.' },
            { label: 'Income tax exposure.', html: inr(70000) + ' of cash with no sales record is "unexplained money". Section 115BBE taxes it at 60% plus surcharge and cess, an effective 78%: <strong>' + inr(54600) + '</strong>, with no deduction for the ' + inr(63000) + ' the shawls cost her.' },
            { label: 'Compare.', html: 'Possible cost ' + inr(27468) + ' + ' + inr(54600) + ' = ' + inr(82068) + ', against ' + inr(7000) + ' of profit. The downside is nearly twelve times the upside, and the dealer\'s ' + inr(70000) + ' in cash cannot be banked without a question.' }
          ],
          result: 'Issue the tax invoice. A registered dealer loses nothing by paying GST he can claim back, and a dealer who still refuses is telling you he hides sales; he will not pay you on time either.',
          tone: 'e'
        })}
        ${table(
          ['', 'Proper tax invoice', 'Kachha bill'],
          [
            ['Dealer pays', inr(82600) + ' (claims ' + inr(12600) + ' ITC)', inr(70000) + ' cash'],
            ['Dealer\'s real cost', inr(70000), inr(70000) + ', no ITC, no proof of stock'],
            ['Sana\'s profit', inr(7000) + ' on record', inr(7000) + ' that cannot be banked or shown to a lender'],
            ['Sana\'s risk', 'None', 'Up to ' + inr(82068) + ' in tax, interest and penalty'],
            ['Dealer\'s risk', 'None', 'Goods without invoice can be confiscated; 200% penalty in transit']
          ],
          { caption: 'The same ' + inr(70000) + ' order, two ways (penalty rates: verify current sections on the portal)' }
        )}
        ${callout('india', 'Two more cash rules. Receiving ' + inr(200000) + ' or more in cash from one person in a day or for one transaction is banned under Section 269ST; the penalty equals the amount received. And cash expenses above ' + inr(10000) + ' a day to one person are disallowed as a deduction under Section 40A(3). Pay and get paid through the bank.')}
      `
    },
    {
      heading: 'Pay the people who make your product',
      short: 'Paying artisans',
      html: `
        <p>Sana's weavers and carpenter are micro enterprises, most of them Udyam-registered. The law now treats late payment to them
        as a tax matter, not just a courtesy.</p>
        ${terms([
          ['Section 43B(h), Income Tax Act', 'Owe a micro or small supplier beyond <strong>15 days</strong> (<strong>45</strong> with a written agreement) at year end, and the expense is deductible only in the year you actually pay. Ghulam Nabi\'s ' + inr(40000) + ' bill of 6 April is due by 21 April.'],
          ['MSMED Act 2006, Section 16', 'Late payment to an MSME carries compulsory interest at three times the RBI bank rate, compounded monthly, and that interest is not deductible. The supplier can claim it through the MSME Samadhaan portal.'],
          ['Fair wages', 'Pay at least the minimum wage notified for your state and trade, by the 7th, with a written note of hours and rate. No work from anyone under 14 and no hazardous work under 18 (Child Labour Act). Per-piece embroidery must still reach the daily minimum.']
        ])}
        ${formula('Pay micro and small suppliers within 15 days (45 with a written agreement)', 'Unpaid beyond that at 31 March: no deduction this year, plus MSMED interest.')}
        ${callout('tip', 'Put a line in your weekly routine: every creditor on the list has a "pay by" date 15 days after the bill. A weaver who is paid on day 10 every time will give Sana the first pick of his work in the Eid rush, when every dealer in Delhi is calling him. That is a supply advantage no discount can buy.')}
      `
    },
    {
      heading: 'Say only what is true, and take it back when it is wrong',
      short: 'Claims and returns',
      html: `
        <p>Noor Crafts sells on two words: <em>handmade</em> and <em>pashmina</em>. Both are legally loaded.</p>
        ${terms([
          ['"Kashmir Pashmina"', 'A registered Geographical Indication (GI): only hand-spun, hand-woven pure pashmina made in Kashmir qualifies, and the Craft Development Institute, Srinagar, issues the GI label after fibre testing. Putting the name on a machine-made or blended shawl is an offence under the GI Act (imprisonment and a fine of ' + inr(50000) + ' to ' + inr(200000) + ') and a misleading advertisement under the Consumer Protection Act 2019, where the CCPA can impose penalties up to ' + inr(1000000) + '.'],
          ['Honest pricing', 'Never sell above MRP. Do not invent a struck-through "was ' + inr(15000) + '" price nothing ever sold at; the 2023 dark-pattern guidelines treat false discounts and fake urgency ("only 2 left") as unfair trade practices.'],
          ['Returns and the consumer\'s rights', 'The Consumer Protection Act 2019 gives every buyer the right to know what they are buying, to safe goods, and to be heard. The E-commerce Rules 2020 require an online seller to display its return, refund and exchange policy, country of origin and a grievance contact. A customer can complain online at e-daakhil to the District Commission (claims up to ' + inr(5000000) + ') or call the National Consumer Helpline, 1915.']
        ])}
        ${checklist([
          'Product listing says exactly what it is: fibre, weave, hand or machine, origin, care instructions',
          'GI label photographed on every pashmina listing; "blend" written on blends',
          'Return window, who pays return courier, and refund time written on the website and the invoice',
          'A credit note issued for every return so the sales register and GSTR-1 stay correct',
          'Complaints answered within 48 hours; a named grievance contact on the site'
        ], { title: 'The honest-listing checklist' })}
        ${callout('warning', 'A refused return is rarely the end of it. For an online order the customer can raise a chargeback with their bank or a marketplace dispute, and both decide on the written policy you displayed. If you promised "7-day return", honour it; if you cannot afford returns on a product, say "no returns, exchange only" up front. Silence is read against you.')}
      `
    },
    {
      heading: 'Customer data, and the choices that compound',
      short: 'Data and the long run',
      html: `
        <p>Every order gives Sana a name, a phone number and a home address. Under the <strong>Digital Personal Data Protection Act 2023</strong>
        (rules notified in 2025 and phasing in; verify what currently applies to small businesses), she may collect that data for the delivery,
        use it only for that purpose, keep it only as long as needed, and must not sell or share it. Practically: no WhatsApp broadcast to past
        customers who did not opt in, no customer list handed to a "marketing friend", and a password on the spreadsheet.</p>
        ${diagrams.split(
          { heading: 'Short-term gain', tone: 'e', items: ['Kachha bill: skip 18% today', 'Pay the weaver in 60 days', 'Call a blend "pure pashmina"', 'Refuse a return, keep ' + inr(7000), 'Blast every old customer on WhatsApp'] },
          { heading: 'Long-term cost', tone: 'b', items: ['Up to ' + inr(82068) + ' in tax and penalty', 'Lost deduction, interest, lost artisan', 'GI offence, CCPA fine, lost name', 'Chargeback, review, no referral', 'Blocked number, DPDP complaint'] },
          { title: 'Five shortcuts and what they cost', caption: 'Each left-hand box is a one-time gain. Each right-hand box repeats, because customers, artisans and tax officers all remember.' }
        )}
        <p>Commerce Lab's <strong>Islamic Standards</strong> section looks at the same choices through the lens of Islamic commercial law, and the
        overlap is almost complete: no <em>riba</em> (interest-based gain), no <em>gharar</em> (hidden uncertainty or deception about what is being
        sold), and full weight and measure in every transaction, the rule the Qur'an opens Surah Al-Mutaffifin with. A kachha bill, a blended
        "pashmina" and a delayed weaver's payment all fail that test too.</p>
        ${callout('remember', 'The easiest honesty test for any decision: would you be comfortable if the dealer, the weaver and the tax officer could each read your books tomorrow? If yes, the books are an asset. If no, they are a liability, and like all liabilities they come due.')}
      `
    }
  ],

  keyPoints: [
    'A kachha bill saves a registered buyer nothing (he can claim the ' + inr(12600) + ' of GST anyway) and exposes you to tax, 18% interest and penalties that can exceed the whole sale.',
    'Cash rules: no receipt of ' + inr(200000) + ' or more in cash from one person (Section 269ST); cash expenses above ' + inr(10000) + ' a day are disallowed.',
    'Pay micro and small suppliers within 15 days (45 with a written agreement) or lose the deduction that year under Section 43B(h), plus MSMED interest.',
    '"Kashmir Pashmina" is a GI; misusing it is an offence, and misleading claims draw CCPA penalties. Describe fibre, weave and origin exactly.',
    'Display your return policy and honour it; keep customer data only for the order and never share it. The trust loop (honest claim, repeat order, referral) is your cheapest marketing.'
  ],

  practice: [
    { label: 'Islamic Standards', sub: 'Riba, gharar and fair dealing applied to a small business', href: 'islamic-standards/index.html', icon: '🕌' },
    { label: 'Tax Lab', sub: 'See what GST, interest and penalty add up to on any sale', href: 'tax-lab/index.html', icon: '🏛️' },
    { label: 'Lesson: Making a correct invoice', sub: 'The invoice that makes a kachha bill unnecessary', href: 'learn/lesson.html?id=start-05-invoicing', icon: '📘' }
  ],

  quiz: [
    {
      q: 'A GST-registered dealer offers to pay ' + inr(70000) + ' in cash without an invoice to "save the 18%". With a proper invoice, what is his real cost?',
      options: [inr(82600), inr(70000), inr(57400), inr(75600)],
      answer: 1,
      why: 'He pays ' + inr(82600) + ' but claims ' + inr(12600) + ' as input tax credit, so his net cost is ' + inr(70000) + ', the same as the cash offer. The kachha bill only helps him if he plans to resell off the books.'
    },
    {
      q: 'Ghulam Nabi, an Udyam-registered micro weaver, delivers shawls with a bill dated 6 April. There is no written agreement. By when must Sana pay to be safe under Section 43B(h)?',
      options: ['21 April (15 days)', '6 May (30 days)', '21 May (45 days)', '31 March of the following year'],
      answer: 0,
      why: 'The limit is 15 days without a written agreement, 45 days with one. Amounts still unpaid beyond the limit at year end are deductible only when actually paid, and MSMED interest runs regardless.'
    },
    {
      q: 'Sana receives a batch of machine-woven pashmina-wool blend shawls. Which description is safe?',
      options: ['Kashmir Pashmina, handmade', 'Pashmina shawl', 'Machine-woven pashmina-wool blend shawl, made in Srinagar', 'Pure pashmina, GI certified'],
      answer: 2,
      why: '"Kashmir Pashmina" is a registered GI reserved for hand-spun, hand-woven pure pashmina from Kashmir; using it on a machine-made blend is an offence under the GI Act and a misleading claim under the Consumer Protection Act. The exact description is both legal and, over time, more valuable.'
    },
    {
      q: 'Which of these is a cash rule under the Income Tax Act?',
      options: ['Cash sales are not allowed for GST-registered businesses', 'Receiving ' + inr(200000) + ' or more in cash from one person in a transaction is banned (Section 269ST)', 'All cash must be deposited within 24 hours', 'Cash purchases cannot carry input tax credit'],
      answer: 1,
      why: 'Section 269ST bans cash receipts of ' + inr(200000) + ' or more from one person in a day or for one transaction, with a penalty equal to the amount. Separately, cash expenses above ' + inr(10000) + ' a day to one person are disallowed under Section 40A(3).'
    }
  ],

  glossary: [
    ['Kachha bill', 'An informal bill or note with no GST, no invoice number and no entry in the books; evidence of a suppressed sale.'],
    ['Section 43B(h)', 'Income tax rule: payments to micro and small enterprises are deductible only when made within 15 days (45 with a written agreement) or, if later, in the year actually paid.'],
    ['Geographical Indication (GI)', 'A registered sign identifying goods as originating in a specific place with qualities due to that origin, such as Kashmir Pashmina. Misuse is an offence.'],
    ['CCPA', 'Central Consumer Protection Authority, set up under the Consumer Protection Act 2019; it can penalise misleading advertisements and unfair trade practices.'],
    ['Gharar', 'In Islamic commercial law, excessive uncertainty or hidden deception in a contract, such as selling something whose nature or quality is concealed.'],
    ['DPDP Act', 'Digital Personal Data Protection Act 2023: India\'s law on collecting, using and protecting personal data, including customer details held by a business.']
  ]
};
