import { fig, svg, diagrams, example, callout, table, compare, terms, inr } from '../lesson-kit.js';

/**
 * Lesson 1.2 - Choosing a legal structure
 * Running example: Noor Crafts (Sana, Srinagar), a sole proprietorship today,
 * and the conditions under which she would form a Private Limited company.
 */
export default {
  id: 'start-02-choose-structure',
  title: 'Choosing a legal structure',

  intro: `<p>Your legal structure decides three things that matter on a bad day and a good day: <strong>who pays if the business
    cannot</strong>, <strong>how much tax the profit attracts</strong>, and <strong>how much paperwork you sign every year</strong>.
    Most small brands should start as the simplest form and change only when a specific reason appears. This lesson shows you how to tell.</p>`,

  outcomes: [
    'Describe the five structures used by small businesses in India and the liability, tax and compliance of each.',
    'Walk a decision diagram from "just me" or "partners" to the right structure.',
    'Estimate the setup cost, time and yearly compliance load before choosing.',
    'Recognise the triggers that justify converting a proprietorship into an LLP or a Private Limited company.'
  ],

  sections: [
    {
      heading: 'The decision in one picture',
      short: 'Decision',
      html: `
        <p>Two questions settle most cases. First: is there more than one owner? Second: do you need <strong>limited liability</strong>
        (the business's debts stop at the business) or outside investors? Follow the arrows.</p>
        ${fig({
          title: 'Which structure? A decision diagram',
          caption: 'Start at the top. Most single-founder brands end at "Sole proprietorship" and move right only when an investor, a co-founder or a serious liability appears.',
          viewBox: '0 0 640 410',
          body: `
            ${svg.box(270, 8, 100, 36, 'Start', { tone: 'n', size: 12 })}
            ${svg.arrow(320, 44, 320, 64)}
            ${svg.box(200, 64, 240, 52, 'More than one owner?', { tone: 'c' })}
            ${svg.arrow(200, 100, 130, 156, { label: 'No, just me' })}
            ${svg.arrow(440, 100, 510, 156, { label: 'Yes, partners' })}
            ${svg.box(30, 156, 200, 56, 'Need limited liability or investors?', { tone: 'c', size: 12 })}
            ${svg.box(410, 156, 200, 56, 'Raise from investors or give ESOPs?', { tone: 'c', size: 12 })}
            ${svg.arrow(80, 212, 65, 256, { label: 'No' })}
            ${svg.arrow(180, 212, 205, 256, { label: 'Yes' })}
            ${svg.arrow(470, 212, 415, 256, { label: 'No' })}
            ${svg.arrow(560, 212, 575, 256, { label: 'Yes' })}
            ${svg.box(10, 256, 110, 56, 'Sole proprietorship', { tone: 'a', size: 12 })}
            ${svg.box(150, 256, 110, 56, 'OPC or Pvt Ltd', { tone: 'd', size: 12 })}
            ${svg.box(330, 256, 170, 56, 'Want limited liability?', { tone: 'c', size: 12 })}
            ${svg.box(520, 256, 110, 56, 'Private Limited', { tone: 'd', size: 12 })}
            ${svg.arrow(375, 312, 355, 346, { label: 'No' })}
            ${svg.arrow(455, 312, 485, 346, { label: 'Yes' })}
            ${svg.box(300, 346, 110, 50, 'Partnership', { tone: 'b', size: 12 })}
            ${svg.box(430, 346, 110, 50, 'LLP', { tone: 'b', size: 12 })}
          `
        })}
        <p>The diagram leaves out one thing on purpose: tax. For profits below about ₹12 lakh a year, the proprietor pays little or no
        income tax under the new regime, so tax rarely argues <em>for</em> a company at the start. Liability and investors do.</p>
      `
    },
    {
      heading: 'The five structures, plainly',
      short: 'Five forms',
      html: `
        ${terms([
          ['Sole proprietorship', 'You and the business are legally the same person. No registration creates it; your PAN, your bank account, your Udyam and GST registrations in the trade name make it real. <strong>Unlimited liability</strong>: if the business owes ₹5 lakh and has ₹1 lakh, the other ₹4 lakh comes from your house, car and savings. Profit is taxed as your personal income at slab rates.'],
          ['Partnership firm', 'Two to fifty people under a written <em>partnership deed</em> (Indian Partnership Act 1932). Register the deed with the state Registrar of Firms; an unregistered firm cannot sue a customer who does not pay. Liability is unlimited and <em>joint</em>: a creditor can recover the whole debt from any one partner. The firm is taxed at 30% on its profit; partners\' salary and interest (within limits) are deductible, and their share of profit is tax-free in their hands.'],
          ['LLP (Limited Liability Partnership)', 'A partnership with a corporate shell (LLP Act 2008), formed online through FiLLiP on the MCA portal. Partners\' liability is limited to what they agreed to contribute. Taxed at 30% like a firm, with no dividend tax when profit is distributed. Lighter compliance than a company: two annual MCA forms, audit only above ₹40 lakh turnover or ₹25 lakh contribution.'],
          ['OPC (One Person Company)', 'A Private Limited company with a single shareholder (who must be an Indian resident) and a named nominee. Limited liability for a solo founder. Same tax and audit as a company; slightly lighter meetings and no AGM. Cannot be used for finance businesses.'],
          ['Private Limited company', 'A separate legal person under the Companies Act 2013, incorporated through SPICe+ on MCA with a Digital Signature Certificate (DSC) and Director Identification Number (DIN) for each director. At least two shareholders and two directors. Limited liability, shares that investors can buy, ESOPs for staff. Corporate tax at 25% (turnover up to ₹400 crore) or 22% under section 115BAA, plus surcharge and cess; dividends are taxed again in the shareholder\'s hands. Heaviest compliance: statutory audit every year, AOC-4 and MGT-7 filings, board meetings, registers.']
        ])}
        ${callout('remember', 'Limited liability protects your personal assets from <em>business</em> debts. It does not protect you from a personal guarantee you sign for a bank loan, from GST or TDS you collected and did not deposit, or from fraud. Banks almost always ask small-company directors for a personal guarantee.')}
      `
    },
    {
      heading: 'Side by side: liability, tax, money-raising, exit',
      short: 'Compare',
      html: `
        ${compare([
          { title: 'Proprietorship', tone: 'a', points: ['Unlimited personal liability', 'Taxed at your slab; nil up to ₹12 lakh (new regime, 87A rebate)', 'Cannot sell shares; only loans', 'Set up in a day; close by stopping'] },
          { title: 'Partnership', tone: 'b', points: ['Unlimited, joint liability', 'Firm taxed at 30% + cess', 'New partner needs a new deed', 'Deed on stamp paper; dissolve by deed'] },
          { title: 'LLP', tone: 'b', points: ['Limited to agreed contribution', '30% + cess; no dividend tax', 'Can add partners; VCs rarely invest in LLPs', 'MCA filing; strike-off takes months'] },
          { title: 'OPC', tone: 'd', points: ['Limited', '25% / 22% + surcharge + cess; dividend taxed again', 'Only one shareholder, so no investors until converted', 'MCA filing; convert to Pvt Ltd any time'] },
          { title: 'Pvt Ltd', tone: 'd', points: ['Limited', '25% / 22% + surcharge + cess; dividend taxed again', 'Issue shares, ESOPs, convertible notes', 'MCA filing; closure via strike-off or liquidation'] }
        ])}
        <p>What each one costs to set up and to keep alive. Government fees are small; most of the money goes to the CA or company secretary
        who files for you, and most of the <em>time</em> goes into yearly compliance you cannot skip.</p>
        ${table(
          ['Structure', 'Typical setup cost', 'Time', 'Every year, without fail'],
          [
            ['Sole proprietorship', '₹0 to ₹3,000 (Udyam and GST are free; Shop and Establishment fee varies by state)', 'Same day to 1 week', 'ITR-3 or ITR-4 by 31 August; GST returns if registered; tax audit only above ₹1 crore turnover (₹10 crore if cash is under 5%)'],
            ['Partnership', '₹3,000 to ₹10,000 (stamp duty on the deed by state, Registrar fee, drafting)', '1 to 2 weeks', 'ITR-5; each partner\'s own ITR; GST returns; audit above the same turnover limits'],
            ['LLP', '₹8,000 to ₹20,000 (two DSCs, FiLLiP fee, agreement stamp duty, professional fee)', '2 to 3 weeks', 'Form 11 by 30 May, Form 8 by 30 October, ITR-5, DIR-3 KYC for designated partners; audit above ₹40 lakh turnover'],
            ['OPC / Pvt Ltd', '₹10,000 to ₹25,000 (DSCs, state stamp duty, professional fee; MCA waives its fee for authorised capital up to ₹15 lakh)', '1 to 2 weeks', 'Statutory audit regardless of size, AOC-4 and MGT-7 or MGT-7A, ITR-6 by 31 October, board meetings, DIR-3 KYC, INC-20A within 180 days of incorporation']
          ],
          { caption: 'Setup and annual compliance. Fees change; verify current amounts on mca.gov.in and your state portal.' }
        )}
        ${callout('warning', 'The cost that hurts is not the ₹15,000 to incorporate. It is the ₹25,000 to ₹40,000 a year in audit, filings and CA retainer that a company pays even in a year with no sales, plus penalties of ₹100 per day per form for late MCA filings. Do not buy a company you do not yet need.')}
      `
    },
    {
      heading: 'Why Sana starts as a proprietor',
      short: 'Sana\'s choice',
      html: `
        <p>Sana is the only owner, has no investor, and her first-year plan shows a profit of ₹39,000 rising to perhaps ₹9 lakh in year three.
        Run the numbers for the year-three profit under both options.</p>
        ${example({
          title: 'Proprietor or Private Limited at ₹9,00,000 profit?',
          scenario: 'Same business, same ₹9,00,000 profit, two legal wrappers. Noor Crafts has no other income and uses the default new tax regime.',
          steps: [
            { label: 'As a proprietor:', html: 'profit is Sana\'s income. Slab tax = 5% of ₹4,00,000 (₹20,000) + 10% of ₹1,00,000 (₹10,000) = ₹30,000. Taxable income is below ₹12 lakh, so the section 87A rebate (up to ₹60,000) cancels it. <strong>Tax: nil.</strong> Compliance: one ITR, GST returns she already files.' },
            { label: 'As a Private Limited, keeping the profit in the company:', html: 'tax at 22% + 10% surcharge + 4% cess = 25.168% of ₹9,00,000 = <strong>₹2,26,512</strong>. Taking the rest out as dividend adds tax at her slab.' },
            { label: 'As a Private Limited, paying herself ₹9,00,000 salary instead:', html: 'company profit falls to nil, so no corporate tax. Her salary minus the ₹75,000 standard deduction is ₹8,25,000; slab tax ₹22,500, wiped out by the 87A rebate. Personal tax nil again, but now the company must run payroll, deduct TDS on her salary and file 24Q.' },
            { label: 'Fixed cost of the company either way:', html: 'statutory audit ₹15,000, ROC filings and CA retainer ₹10,000 to ₹25,000, plus her time. Roughly <strong>₹25,000 to ₹40,000 a year</strong> for no tax saving and no investor.' }
          ],
          result: 'At this size the company costs more and protects little, because J&K Bank already holds her personal guarantee on the ₹1,00,000 loan. Sana stays a proprietor: Udyam and GST in the name "Noor Crafts", her own PAN, a current account in the trade name.',
          tone: 'a'
        })}
        ${callout('india', 'A proprietor with turnover up to ₹2 crore can also use presumptive tax under section 44AD: declare 6% of digital receipts (8% of cash) as profit and skip books and audit. Lesson 5.4 covers when that is a good deal and when it is not.')}
      `
    },
    {
      heading: 'What would make her change, and how conversion works',
      short: 'Converting',
      html: `
        ${diagrams.split(
          { heading: 'Stay a proprietor while', tone: 'a', items: ['You are the only owner', 'No investor is offering equity', 'Debts are small and personally guaranteed anyway', 'Profit is under about ₹15 lakh'] },
          { heading: 'Form an LLP or Pvt Ltd when', tone: 'd', items: ['A co-founder joins and wants a share', 'An investor offers money for equity', 'A large buyer or export deal brings real liability', 'You want to give staff ESOPs or sell the business one day'] },
          { title: 'The triggers for changing structure', caption: 'Any one item on the right is a reason to talk to a CA. None of them is "the brand looks more serious with Pvt Ltd after its name".' }
        )}
        <p>Suppose in year three a Delhi investor offers ₹25 lakh for 20% of Noor Crafts, and Sana's cousin wants to join as a co-owner running
        production. That is two triggers at once. The route is <strong>not</strong> a "conversion" of the proprietorship, because a proprietorship has no
        separate existence to convert. Instead she incorporates Noor Crafts Private Limited through SPICe+, the company gets its own PAN, GSTIN and bank
        account, and she transfers the business (stock, brand, website, dealer contracts) into it against shares. The old GST registration is then cancelled
        and ITC on the stock transfers via Form ITC-02. A partnership can be converted into an LLP (Form 17) and a partnership or LLP into a company
        (Form URC-1), and an OPC becomes a Private Limited by adding a second shareholder (Form INC-6). Verify the current forms on mca.gov.in.</p>
        ${table(
          ['From', 'To', 'Route'],
          [
            ['Sole proprietorship', 'Any other form', 'No conversion exists. Incorporate the new entity, then transfer the business into it (new PAN, GSTIN, bank account; ITC-02 for stock credit)'],
            ['Partnership', 'LLP', 'Conversion under the LLP Act (Form 17 with FiLLiP); all partners become LLP partners'],
            ['Partnership or LLP', 'Private Limited', 'Part I conversion under the Companies Act (Form URC-1 with SPICe+)'],
            ['OPC', 'Private Limited', 'Add a second shareholder and director, file INC-6; voluntary at any time']
          ],
          { caption: 'How structures change. Each route costs about the same as a fresh incorporation plus the CA\'s fee.' }
        )}
        ${callout('tip', 'Whatever you choose, keep the business name consistent across Udyam, GST, the bank account, the invoice and the trademark application. A proprietor can trade as "Noor Crafts"; the invoice then shows "Noor Crafts (Proprietor: Sana ...)" with her PAN-based GSTIN.')}
      `
    }
  ],

  keyPoints: [
    'A proprietorship is the owner; a company is a separate person. That one difference drives liability, tax and paperwork.',
    'Proprietorship and partnership: unlimited (and for partners, joint) liability. LLP, OPC and Pvt Ltd: liability limited to what you put in, except for personal guarantees and unpaid taxes.',
    'Tax rarely favours a company for a small business: a proprietor pays nil up to ₹12 lakh under the new regime; a company pays about 25% and dividends are taxed again.',
    'Companies carry fixed compliance costs (audit, AOC-4, MGT-7, board meetings) of ₹25,000 to ₹40,000 a year even with zero sales.',
    'Form an LLP or Pvt Ltd when a co-founder, an investor, ESOPs or real third-party liability appears. Not for appearances.',
    'A proprietorship cannot be "converted"; you incorporate the new entity and transfer the business into it. Partnerships, LLPs and OPCs have formal conversion routes on MCA.'
  ],

  practice: [
    { label: 'Tax Lab', sub: 'Compare slab tax as a proprietor with corporate tax on the same profit', href: 'tax-lab/index.html', icon: '🏛️' },
    { label: 'Next: Registrations checklist', sub: 'What to register, where, and in what order', href: 'learn/lesson.html?id=start-03-registrations', icon: '📋' },
    { label: 'Cheatsheets', sub: 'Business structures at a glance', href: 'cheatsheets/index.html', icon: '📑' }
  ],

  quiz: [
    {
      q: 'Noor Crafts, a sole proprietorship, owes a supplier ₹3,00,000 but the business has only ₹50,000. What can the supplier do?',
      options: ['Recover only ₹50,000; the rest is written off', 'Recover the balance ₹2,50,000 from Sana\'s personal assets', 'Nothing, because the firm is registered under Udyam', 'Recover only if the supplier is GST-registered'],
      answer: 1,
      why: 'A proprietor has unlimited liability: the business and the owner are the same legal person, so business debts can be recovered from personal assets. Only an LLP, OPC or company limits liability.'
    },
    {
      q: 'Which structure lets outside investors buy a share of the business and lets staff receive ESOPs?',
      options: ['Sole proprietorship', 'Partnership firm', 'One Person Company', 'Private Limited company'],
      answer: 3,
      why: 'Only a company issues shares that investors can hold and that can be granted to employees as ESOPs. An OPC has a single shareholder by definition, so it must convert first.'
    },
    {
      q: 'A proprietor earns ₹9,00,000 profit in FY 2026-27 under the new tax regime and has no other income. Approximately how much income tax is due?',
      options: ['Nil, because the 87A rebate covers income up to ₹12 lakh', '₹30,000', '₹2,26,512', '₹90,000'],
      answer: 0,
      why: 'Slab tax would be ₹30,000 (5% of ₹4 lakh + 10% of ₹1 lakh), but the section 87A rebate of up to ₹60,000 applies when taxable income does not exceed ₹12 lakh, so the tax is nil. ₹2,26,512 is what a company would pay at 25.168%.'
    },
    {
      q: 'Sana wants to bring in a co-founder and an investor. What is the correct route from her proprietorship?',
      options: ['File a conversion form on the GST portal', 'Incorporate a new company and transfer the business into it', 'Add the investor\'s name to her Udyam certificate', 'Register a partnership deed naming the investor'],
      answer: 1,
      why: 'A proprietorship has no separate legal existence, so there is nothing to convert. She incorporates a Private Limited company through SPICe+, which gets its own PAN, GSTIN and bank account, and transfers the business into it against shares.'
    }
  ],

  glossary: [
    ['Limited liability', 'The owners of an LLP or company are liable for its debts only up to the amount they agreed to contribute; personal assets are not at risk, except under personal guarantees or for unpaid tax collected.'],
    ['Partnership deed', 'The written agreement between partners (profit shares, capital, duties, exit). Registered with the state Registrar of Firms.'],
    ['SPICe+', 'The MCA web form that incorporates a company and issues its PAN, TAN and (optionally) GSTIN and EPFO/ESIC registrations in one go.'],
    ['DSC and DIN', 'Digital Signature Certificate, used to sign MCA filings; Director Identification Number, the permanent ID of a company director or LLP designated partner.'],
    ['Personal guarantee', 'A promise by an owner or director to repay a business loan personally if the business cannot. It makes limited liability irrelevant for that loan.'],
    ['Section 115BAA', 'The income-tax option under which a domestic company pays 22% tax (plus surcharge and cess) in exchange for giving up most exemptions.']
  ]
};
