import { fig, svg, diagrams, example, callout, checklist, table, terms, inr } from '../lesson-kit.js';

/**
 * Lesson 1.3 - Registrations checklist: PAN to GST
 * Running example: Noor Crafts (Sana, Srinagar), a sole proprietorship that
 * sells shawls and walnut boxes online and to boutiques in Delhi and Mumbai.
 */
export default {
  id: 'start-03-registrations',
  title: 'Registrations checklist: PAN to GST',

  intro: `<p>Registering a small business in India is not one form; it is a short chain of them, and each link is a document the next one asks for.
    Done in the right order the whole chain takes about a month and, for most product businesses, under ₹15,000. Done in the wrong order you
    wait for a bank account that wants a GST certificate that wants a bank account.</p>`,

  outcomes: [
    'Name each registration a small business needs, who must take it, where to apply, what it costs and how long it takes.',
    'Decide whether GST registration is optional or mandatory for you, and read a GSTIN.',
    'Do the registrations in the order that avoids waiting on missing documents.',
    'Know which extra licences (trademark, FSSAI, IEC, professional tax) apply only to certain businesses.'
  ],

  sections: [
    {
      heading: 'The order in one picture',
      short: 'The order',
      html: `
        <p>The sequence below works for a proprietor. Partnerships, LLPs and companies first get their own PAN (through the deed or SPICe+)
        and then follow the same chain.</p>
        ${diagrams.timeline(
          [
            { at: 'Day 1', label: 'PAN (own) and Udyam', tone: 'a' },
            { at: 'Day 2-5', label: 'Rent agreement, current account', tone: 'b' },
            { at: 'Day 5-10', label: 'Shop and Establishment', tone: 'c' },
            { at: 'Day 7-14', label: 'GST application', tone: 'd' },
            { at: 'Day 15-30', label: 'Trademark filing', tone: 'e' }
          ],
          { title: 'Registration sequence for a new proprietorship', caption: 'Each step produces a document the next step asks for: Udyam proves the business exists to the bank, the bank account and address proof go into the GST form, and the Udyam certificate halves the trademark fee.', axisLabel: 'days from the decision to start' }
        )}
        <p>Why this order? The bank wants proof that a business exists, and the free Udyam certificate is the quickest proof. The GST
        form asks for a bank account and an address proof, so both come before it. Trademark filing can wait until the name is final, but not
        much longer, because the date of filing is the date your claim starts.</p>
      `
    },
    {
      heading: 'What each registration is',
      short: 'Each one',
      html: `
        ${terms([
          ['PAN (Permanent Account Number)', 'The tax identity of the person who earns the profit. A proprietor uses their <strong>own</strong> PAN; there is no separate business PAN. A partnership, LLP or company gets its own PAN (free with SPICe+ for companies; about ₹107 through Protean or UTIITSL for a firm). You will also need a TAN only if you must deduct TDS, which for a small proprietor comes much later (lesson 5.5).'],
          ['Current account', 'A business bank account in the trade name, opened at any bank. Not a registration, but every portal after this asks for a cancelled cheque or statement. Documents: PAN, Aadhaar, a photo, and one proof that the business exists (Udyam certificate, GST certificate or Shop and Establishment licence) plus proof of the business address. Opens in 1 to 7 days. Minimum balances range from zero to ₹25,000 depending on the bank and scheme.'],
          ['Udyam (MSME) registration', 'Free, online, instant, on udyamregistration.gov.in with Aadhaar and PAN. It classifies you as micro (investment up to ₹2.5 crore and turnover up to ₹10 crore), small (₹25 crore and ₹100 crore) or medium (₹125 crore and ₹500 crore), limits in force since 1 April 2025. Nearly every new brand is micro. It unlocks priority-sector and collateral-free CGTMSE lending, the MSME trademark fee, and section 43B(h), under which your business customers must pay you within 15 days (45 with a written agreement) or lose the tax deduction for that purchase.'],
          ['Shop and Establishment licence', 'A registration with the state labour department under that state\'s Shops and Establishments Act, usually within 30 days of opening any shop, office or workshop. It records your trade name, address, working hours and staff. Fees run from a few hundred rupees to a few thousand depending on the state and headcount; some states exempt very small units. Banks accept it as business proof. Apply on your state labour portal.'],
          ['GST registration', 'Covered in the next section. Free, on gst.gov.in, and gives you the 15-character GSTIN that goes on every invoice.']
        ])}
        ${callout('tip', 'Get one rent agreement on stamp paper for the workshop or office before anything else, with the owner\'s no-objection letter and a recent electricity bill. That single bundle is the address proof for the bank, Shop and Establishment, GST and trademark forms.')}
      `
    },
    {
      heading: 'GST: when you must register, and what a GSTIN says',
      short: 'GST',
      html: `
        <p>GST registration is <strong>optional</strong> until your turnover crosses ₹40 lakh a year for goods or ₹20 lakh for services (special-category
        states ₹20 lakh and ₹10 lakh; J&amp;K chose the ₹40 lakh goods limit). It is <strong>mandatory from the first rupee</strong>, whatever your turnover, if you:</p>
        ${checklist([
          'supply goods to another state (a Srinagar seller shipping to a Delhi buyer);',
          'sell through an e-commerce operator such as Amazon, Flipkart or Meesho (a small relief exists for sellers who stay within their own state; verify on the portal);',
          'are a casual taxable person, for example selling at a Dilli Haat exhibition for ten days;',
          'must pay tax under reverse charge, for example on goods transport agency fees;',
          'want to claim input tax credit on your purchases, even below the limit.'
        ], { title: 'GST becomes mandatory when you' })}
        <p>Noor Crafts ships to Delhi and Mumbai, so the turnover limit is irrelevant: Sana registers on day one. The application is form REG-01 on gst.gov.in,
        free, with Aadhaar authentication; the GSTIN usually arrives within 7 working days, or up to 30 if the officer orders a physical verification.</p>
        ${fig({
          title: 'Anatomy of a GSTIN',
          caption: 'Fifteen characters. The first two are the state code (01 is J&amp;K, 07 Delhi, 27 Maharashtra); the next ten are the taxpayer\'s PAN, so a proprietor\'s GSTIN contains their personal PAN. Noor Crafts: 01ABCPS1234F1Z5.',
          viewBox: '0 0 640 150',
          body: `
            ${svg.text(320, 18, '15 characters, read left to right', { size: 11, tone: 'muted' })}
            ${svg.box(20, 40, 80, 60, '01', { tone: 'a', sub: 'State code', size: 18 })}
            ${svg.box(115, 40, 250, 60, 'ABCPS1234F', { tone: 'b', sub: 'PAN of the taxpayer', size: 18 })}
            ${svg.box(380, 40, 70, 60, '1', { tone: 'c', sub: 'Entity no.', size: 18 })}
            ${svg.box(465, 40, 70, 60, 'Z', { tone: 'n', sub: 'Default', size: 18 })}
            ${svg.box(550, 40, 70, 60, '5', { tone: 'd', sub: 'Check digit', size: 18 })}
            ${svg.text(320, 128, 'Entity no. counts registrations under the same PAN in the same state; most businesses show 1', { size: 10.5, tone: 'muted' })}
          `
        })}
        <p>Documents for REG-01: PAN and Aadhaar of the proprietor (or of the firm and its partners or directors, with the deed or certificate of incorporation),
        a passport photo, proof of the principal place of business (rent agreement plus owner\'s NOC plus electricity bill, or a property-tax receipt if you own it),
        bank proof (cancelled cheque or first page of the statement), and for firms and companies an authorisation letter or board resolution naming the signatory.</p>
        ${callout('india', 'Once registered you must file returns even in a month with no sales: GSTR-1 by the 11th and GSTR-3B by the 20th, or quarterly under QRMP if turnover is up to ₹5 crore. A nil return filed late still costs ₹20 a day. Register when you are ready to sell, not months before. Lesson 5.3 covers returns.')}
      `
    },
    {
      heading: 'Trademark, and the licences only some businesses need',
      short: 'Trademark and others',
      html: `
        <p>A trademark protects the name and logo, not the product. File on ipindia.gov.in in the <strong>class</strong> that matches what you sell:
        Class 25 for clothing including shawls, Class 24 for textiles and fabrics, Class 20 for wooden articles and boxes, Class 35 for retail
        and online store services. Check the Nice classification search on the portal before filing. The government fee is ₹4,500 per class
        per application for an individual, startup or Udyam-registered MSME, and ₹9,000 for anyone else; a CA or trademark agent typically adds
        ₹2,000 to ₹5,000. You can use the TM symbol from the filing date and the R symbol only after registration, which takes 12 to 18 months if
        nobody objects.</p>
        ${table(
          ['Registration', 'Who needs it', 'Where', 'Cost', 'Time'],
          [
            ['PAN', 'Everyone (proprietor uses own PAN; firm or company gets its own)', 'Protean / UTIITSL, or SPICe+ for companies', 'Own PAN: nil. Firm PAN about ₹107', 'Instant e-PAN to 2 weeks'],
            ['Current account', 'Everyone', 'Any bank', 'Nil to open; minimum balance ₹0 to ₹25,000', '1 to 7 days'],
            ['Udyam (MSME)', 'Every micro, small or medium business; strongly advised', 'udyamregistration.gov.in', 'Free', 'Same day'],
            ['Shop and Establishment', 'Any shop, office or workshop; within 30 days of opening', 'State labour department portal', '₹200 to ₹5,000 by state and headcount', '1 to 2 weeks'],
            ['GST', 'Above ₹40L goods / ₹20L services, or mandatory cases (inter-state, e-commerce)', 'gst.gov.in (REG-01)', 'Free', '7 working days (up to 30 with verification)'],
            ['Trademark', 'Anyone building a brand name', 'ipindia.gov.in', '₹4,500 per class (MSME / individual), ₹9,000 others', 'Filing instant; registration 12 to 18 months'],
            ['FSSAI', 'Food businesses only', 'foscos.fssai.gov.in', 'Basic registration ₹100 a year (turnover up to ₹12L); state licence ₹2,000 to ₹5,000 a year', '1 to 4 weeks'],
            ['IEC', 'Only if you import or export', 'dgft.gov.in', 'Free', 'Same day to 3 days'],
            ['Professional tax', 'Employers and professionals in states that levy it (Maharashtra, Karnataka, West Bengal and others; not Delhi or J&K)', 'State commercial tax portal', 'Up to ₹2,500 a year per person', '1 to 2 weeks']
          ],
          { caption: 'Registrations at a glance. Fees and timelines are as of October 2026; verify on each portal before paying.' }
        )}
        ${callout('warning', 'Agents on social media sell "MSME certificates" and "GST registration" for ₹2,000 to ₹5,000. Both are free and take under an hour yourself. Pay a professional for advice on structure or tax, not for typing your Aadhaar number into a government form.')}
      `
    },
    {
      heading: 'Noor Crafts: the first 30 days',
      short: 'Sana\'s 30 days',
      html: `
        ${example({
          title: 'Sana\'s registration sequence, with costs',
          scenario: 'Sana already has a PAN and Aadhaar. She has decided on the name Noor Crafts and rented a small workshop in Srinagar for ₹8,000 a month.',
          steps: [
            { label: 'Day 1, Udyam:', html: 'Aadhaar OTP, PAN, bank details, activity "manufacturing and trading of pashmina shawls and walnut-wood boxes". Certificate the same afternoon, classified micro. Cost <strong>₹0</strong>.' },
            { label: 'Day 2, rent agreement:', html: '11-month agreement on stamp paper, notarised, with the landlord\'s NOC and his electricity bill. Cost <strong>₹500</strong>.' },
            { label: 'Day 3, current account:', html: 'J&K Bank opens a current account in the name Noor Crafts against her PAN, Aadhaar, Udyam certificate and the rent agreement. Opening cost <strong>₹0</strong>; she parks ₹10,000 as the required minimum balance (her money, not a cost).' },
            { label: 'Day 6, Shop and Establishment:', html: 'Online on the J&K labour department portal, one employee declared. Fee for her band <strong>₹2,000</strong> (check the current schedule).' },
            { label: 'Day 8, GST:', html: 'REG-01 with Aadhaar authentication, uploading the rent agreement bundle and a cancelled cheque. Reason for registration: inter-state supply. GSTIN 01ABCPS1234F1Z5 arrives on day 15. Cost <strong>₹0</strong>.' },
            { label: 'Day 16, trademark:', html: '"Noor Crafts" with logo in Class 25 (shawls) and Class 20 (wooden boxes), at the MSME rate using the Udyam certificate: 2 × ₹4,500 = <strong>₹9,000</strong>. She files it herself.' },
            { label: 'Not needed now:', html: 'FSSAI (no food), IEC (no exports yet; she will take the free IEC the day a foreign buyer appears), professional tax (not levied in J&K).' }
          ],
          result: 'Total government and stamp costs: ₹500 + ₹2,000 + ₹9,000 = <strong>₹11,500</strong>, within the ₹12,000 she set aside in her one-page plan for branding and registrations. Elapsed time: 16 days to file everything, GSTIN in hand on day 15, first GST-compliant invoice possible on day 16.',
          tone: 'a'
        })}
        ${checklist([
          'PAN and Aadhaar linked, mobile number updated (every portal sends OTPs there)',
          'Rent agreement, owner NOC and electricity bill scanned as one PDF',
          'Udyam certificate downloaded',
          'Current account opened; cancelled cheque scanned',
          'Shop and Establishment licence number noted',
          'GSTIN received; certificate (REG-06) printed and displayed at the workshop',
          'Trademark application number noted; TM symbol added to the logo',
          'All certificates saved in one folder, cloud and paper'
        ], { title: 'Registration checklist' })}
      `
    }
  ],

  keyPoints: [
    'Order matters: Udyam first (free, instant, proves the business exists), then bank account, then Shop and Establishment, then GST, then trademark.',
    'A proprietor uses their own PAN; a firm, LLP or company gets its own PAN. Your GSTIN embeds that PAN after the two-digit state code.',
    'GST is optional below ₹40 lakh (goods) or ₹20 lakh (services) but mandatory from day one for inter-state supply or selling through e-commerce operators.',
    'Udyam registration is free and unlocks collateral-free loans, the ₹4,500 trademark fee and the 15/45-day payment protection of section 43B(h).',
    'Trademark by class: 25 for clothing including shawls, 20 for wooden articles, 35 for retail. Filing date is the date your claim begins.',
    'FSSAI, IEC and professional tax apply only to food, foreign trade and certain states. Never pay an agent for a free registration.'
  ],

  practice: [
    { label: 'Tax Lab', sub: 'Check whether your turnover and sales pattern make GST registration mandatory', href: 'tax-lab/index.html', icon: '🏛️' },
    { label: 'Cheatsheets', sub: 'Registration portals, fees and deadlines on one page', href: 'cheatsheets/index.html', icon: '📑' },
    { label: 'Next: Bank account, UPI and payment gateways', sub: 'What to do with the current account you just opened', href: 'learn/lesson.html?id=start-04-bank-and-payments', icon: '🏦' }
  ],

  quiz: [
    {
      q: 'A Srinagar proprietor expects ₹8 lakh of sales in the first year, all shipped to customers in Delhi and Mumbai. Must she register for GST?',
      options: ['No, she is below the ₹40 lakh limit', 'No, because J&K is a special-category state', 'Yes, because inter-state supply of goods requires registration regardless of turnover', 'Only if she sells through Amazon'],
      answer: 2,
      why: 'The turnover limit applies only to intra-state sellers. Supplying goods to another state makes registration mandatory from the first sale.'
    },
    {
      q: 'In the GSTIN 07AAACR5055K1Z5, what do the characters AAACR5055K represent?',
      options: ['The registration date', 'The taxpayer\'s PAN', 'The state and district code', 'A random number issued by the portal'],
      answer: 1,
      why: 'Characters 3 to 12 of every GSTIN are the taxpayer\'s PAN. The first two (07) are the state code for Delhi, the 13th is the entity number, Z is a fixed letter and the last is a check digit.'
    },
    {
      q: 'What does Udyam registration cost, and where is it done?',
      options: ['₹1,000 through an authorised agent', 'Free, on udyamregistration.gov.in', '₹500 at the district industries centre', '₹4,500 per class on ipindia.gov.in'],
      answer: 1,
      why: 'Udyam is a free, Aadhaar-based online registration with an instant certificate. ₹4,500 per class is the MSME trademark fee, which the Udyam certificate makes you eligible for.'
    },
    {
      q: 'Sana wants to protect the name "Noor Crafts" for her shawls. Which trademark class, and what is the government fee for a Udyam-registered proprietor?',
      options: ['Class 24, ₹9,000', 'Class 25, ₹4,500', 'Class 35, free', 'Class 20, ₹9,000'],
      answer: 1,
      why: 'Shawls are clothing, Class 25. Individuals, startups and Udyam-registered MSMEs pay ₹4,500 per class; ₹9,000 is the fee for other applicants. Class 20 would cover the wooden boxes as a second class.'
    }
  ],

  glossary: [
    ['GSTIN', 'The 15-character Goods and Services Tax Identification Number: state code, PAN, entity number, the letter Z and a check digit.'],
    ['Udyam', 'The free government registration that classifies a business as a micro, small or medium enterprise and gives access to MSME benefits.'],
    ['Casual taxable person', 'Someone who occasionally sells in a state where they have no fixed place of business, such as at an exhibition. Must register for GST in advance for that period.'],
    ['Trademark class', 'One of 45 categories (the Nice classification) under which a brand name or logo is registered; protection applies only within the classes filed.'],
    ['IEC', 'Importer-Exporter Code, issued free by DGFT. Needed before any export or import shipment.'],
    ['Section 43B(h)', 'Income-tax rule that denies a buyer the deduction for purchases from a micro or small supplier unless paid within 15 days (45 with a written agreement).']
  ]
};
