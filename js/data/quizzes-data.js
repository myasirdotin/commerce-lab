/**
 * Commerce Lab - Master Quiz Bank with Pedagogical Explanations
 */

export const QUIZ_CATEGORIES = [
  { id: 'foundations', title: 'Accounting Foundations & Principles', level: 'Beginner' },
  { id: 'golden-rules', title: 'Golden Rules of Debit & Credit', level: 'Beginner' },
  { id: 'financial-statements', title: 'P&L, Balance Sheet & Trial Balance', level: 'Intermediate' },
  { id: 'tax-gst', title: 'Indian GST & Direct Tax Concepts', level: 'Intermediate' },
  { id: 'excel-business', title: 'Excel Commerce Formulas (SUMIF, XLOOKUP)', level: 'Advanced' }
];

export const MASTER_QUESTIONS = [
  {
    id: 'q1',
    category: 'foundations',
    question: 'Why is Capital shown on the Liabilities side of the Balance Sheet instead of being treated as company profit?',
    options: [
      'Because of the Business Entity Concept: the owner and the business are separate distinct legal entities',
      'Because the business has to pay income tax on owner capital',
      'Because of the Money Measurement Concept',
      'Because capital is always kept in cash form'
    ],
    correctIndex: 0,
    explanation: 'Under the Business Entity Concept, the business is legally and conceptually separate from its owner. Therefore, money invested by the proprietor is regarded as an internal liability owed by the enterprise back to the owner.'
  },
  {
    id: 'q2',
    category: 'golden-rules',
    question: 'When a firm pays ₹8,000 cash for office stationery, what is the correct debit entry and why?',
    options: [
      'Debit Cash A/c because cash is an asset',
      'Debit Stationery Expense A/c because under Nominal Account rules: "Debit all expenses and losses"',
      'Credit Stationery A/c because stationery comes into the store',
      'Debit Capital A/c because all expenses reduce capital directly'
    ],
    correctIndex: 1,
    explanation: 'Stationery is a consumable expense item (Nominal Account). The Golden Rule for Nominal Accounts dictates: "Debit all expenses and losses; Credit all incomes and gains". Hence, Stationery Expense A/c is debited.'
  },
  {
    id: 'q3',
    category: 'financial-statements',
    question: 'If Sales = ₹2,00,000, Purchases = ₹1,20,000, Opening Stock = ₹30,000, and Closing Stock = ₹40,000, what is the Gross Profit?',
    options: [
      '₹80,000',
      '₹90,000',
      '₹1,10,000',
      '₹50,000'
    ],
    correctIndex: 1,
    explanation: 'Cost of Goods Sold (COGS) = Opening Stock (₹30,000) + Purchases (₹1,20,000) - Closing Stock (₹40,000) = ₹1,10,000. Gross Profit = Sales (₹2,00,000) - COGS (₹1,10,000) = ₹90,000!'
  },
  {
    id: 'q4',
    category: 'tax-gst',
    question: 'What is the primary objective of the Input Tax Credit (ITC) mechanism under GST?',
    options: [
      'To provide free cash subsidies to retail buyers',
      'To eliminate the cascading effect (tax on tax) by allowing credit for tax paid at prior purchase stages',
      'To double the revenue collected by state governments',
      'To exempt all imported goods from custom clearance'
    ],
    correctIndex: 1,
    explanation: 'Under GST, Input Tax Credit prevents "cascading" (tax on tax). A registered dealer offsets the tax already paid on business inputs against the tax collected on their outward supplies, ensuring tax is levied only on genuine value addition.'
  },
  {
    id: 'q5',
    category: 'excel-business',
    question: 'Which Excel formula correctly calculates the sum of all sales in column G where the sales representative in column B is "Pooja"?',
    options: [
      '=COUNTIF(B2:B50, "Pooja")',
      '=SUMIF(B2:B50, "Pooja", G2:G50)',
      '=VLOOKUP("Pooja", B2:G50, 6, FALSE)',
      '=AVERAGEIF(G2:G50, "Pooja")'
    ],
    correctIndex: 1,
    explanation: 'Syntax for SUMIF is =SUMIF(range, criteria, [sum_range]). Here, B2:B50 is checked for "Pooja", and the corresponding amounts in G2:G50 are summed up.'
  }
];
