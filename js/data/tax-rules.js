/**
 * Commerce Lab - Tax Knowledge Base & Versioned Rules
 * STRICT COMPLIANCE:
 * 1. Rates and thresholds are versioned by Financial Year (FY) and Assessment Year (AY).
 * 2. Every rule cites official Indian Government sources (CBIC / Income Tax Dept).
 * 3. Clearly distinguished as educational simulations, NOT professional tax advice.
 */

export const TAX_CONFIG = {
  currentFinancialYear: '2026-27',
  currentAssessmentYear: '2027-28',
  legalDisclaimer: 'Disclaimer: Commerce Lab provides educational simulations designed strictly for conceptual learning. It does not constitute chartered accountancy or tax advice. For actual statutory compliance and return filing, consult a registered tax professional and refer to official government portals (cbic.gov.in / incometax.gov.in).',
  lastReviewedDate: '2026-10-10'
};

// Structure in force since 22 September 2025 (GST Council 56th meeting): the 12% and 28% slabs were removed.
export const GST_RATE_SLABS = [
  { slab: '0%',  description: 'Exempt & essentials: fresh food, unprocessed grains, milk, salt, many medicines, education', cgst: 0, sgst: 0, igst: 0 },
  { slab: '5%',  description: 'Merit rate: packaged foods, apparel & footwear up to ₹2,500 per piece, textiles & yarn, handicrafts, restaurants (no ITC), economy transport', cgst: 2.5, sgst: 2.5, igst: 5 },
  { slab: '18%', description: 'Standard rate: most goods & services, apparel above ₹2,500, electronics, IT & professional services, capital goods, cement, small cars', cgst: 9, sgst: 9, igst: 18 },
  { slab: '40%', description: 'De-merit & luxury: pan masala, tobacco, aerated & sugary drinks, large luxury cars, online money gaming', cgst: 20, sgst: 20, igst: 40 }
];

export const TAX_KNOWLEDGE_BASE = [
  {
    id: 'gst-itc-mechanism',
    topic: 'Input Tax Credit (ITC) Mechanism',
    financialYear: '2026-27',
    category: 'Indirect Tax (GST)',
    applicableRule: 'Under Section 16 of CGST Act, 2017, a registered buyer can reduce the tax paid on business purchases (Input Tax) from the tax collected on sales (Output Tax).',
    example: 'A shop buys inventory for ₹10,000 (+ 18% GST = ₹1,800 Input Tax). The shop sells it for ₹15,000 (+ 18% GST = ₹2,700 Output Tax). Net GST payable to Government = ₹2,700 - ₹1,800 = ₹900.',
    source: 'Central Board of Indirect Taxes and Customs (CBIC) - CGST Act 2017 Sec 16',
    sourceUrl: 'https://cbic-gst.gov.in',
    lastReviewedDate: '2026-10-10'
  },
  {
    id: 'gst-composition-scheme',
    topic: 'GST Composition Scheme (Small Businesses)',
    financialYear: '2026-27',
    category: 'Indirect Tax (GST)',
    applicableRule: 'Small businesses with aggregate turnover up to ₹1.5 Crore (₹75 Lakhs for special category states) can pay a flat concession rate (1% for manufacturers/traders, 5% for restaurants) and file quarterly CMP-08 instead of monthly returns.',
    example: 'A small grocery trader with ₹40 Lakh annual turnover pays 1% of turnover (₹40,000) directly without claiming Input Tax Credit or issuing tax invoices.',
    source: 'CBIC Composition Scheme Rules (Section 10, CGST Act)',
    sourceUrl: 'https://cbic-gst.gov.in',
    lastReviewedDate: '2026-10-10'
  },
  {
    id: 'income-tax-new-regime-slabs',
    topic: 'Income Tax Slabs (New Tax Regime u/s 115BAC)',
    financialYear: '2026-27',
    category: 'Direct Tax',
    applicableRule: 'Default regime (Finance Act 2025, unchanged by Budget 2026): Up to ₹4 Lakh: Nil; ₹4L-₹8L: 5%; ₹8L-₹12L: 10%; ₹12L-₹16L: 15%; ₹16L-₹20L: 20%; ₹20L-₹24L: 25%; Above ₹24L: 30%. Standard deduction for salaried: ₹75,000. Rebate u/s 87A up to ₹60,000 makes tax nil for taxable income up to ₹12 Lakh. Health & education cess 4%.',
    example: 'A proprietor with ₹11 Lakh taxable business income: slab tax = ₹20,000 (5% of ₹4L) + ₹30,000 (10% of ₹3L) = ₹50,000, fully wiped out by the ₹60,000 Section 87A rebate. Net tax ₹0. At ₹13 Lakh the rebate is lost and tax is ₹75,000 + 4% cess = ₹78,000 (marginal relief may apply just above ₹12L).',
    source: 'Income Tax Department of India, Finance Act 2025 / Budget 2026',
    sourceUrl: 'https://incometax.gov.in',
    lastReviewedDate: '2026-10-10'
  },
  {
    id: 'tds-section-194c',
    topic: 'TDS on Contractor Payments (Section 194C)',
    financialYear: '2026-27',
    category: 'Direct Tax (TDS)',
    applicableRule: 'Any business making payment to a contractor exceeding ₹30,000 in a single bill or ₹1,00,000 aggregate in a financial year must deduct Tax Deducted at Source (1% for individuals/HUF, 2% for others). Individuals/HUF must deduct only if their own turnover exceeded ₹1 Crore (business) or ₹50 Lakh (profession) in the previous year.',
    example: 'A business pays a painting contractor ₹50,000. TDS @ 1% = ₹500 is deducted and deposited with the government on Form 26Q; the contractor receives net ₹49,500.',
    source: 'Income Tax Act 1961 Section 194C',
    sourceUrl: 'https://incometax.gov.in',
    lastReviewedDate: '2026-10-10'
  },
  {
    id: 'presumptive-taxation-44ad',
    topic: 'Presumptive Taxation for Small Businesses (Section 44AD)',
    financialYear: '2026-27',
    category: 'Direct Tax',
    applicableRule: 'Eligible small resident businesses (individuals, HUF, partnership firms; not LLPs) with annual turnover up to ₹2 Crore (₹3 Crore if cash receipts are 5% or less) can declare profit at 6% of digital turnover and 8% of cash turnover without maintaining audited books. Professionals use Section 44ADA: receipts up to ₹50 Lakh (₹75 Lakh), deemed profit 50%.',
    example: 'A mobile phone retail shop with ₹80 Lakh digital sales declares 6% profit (₹4.8 Lakh) as taxable business income without requiring a mandatory tax audit.',
    source: 'Income Tax Act 1961 Section 44AD',
    sourceUrl: 'https://incometax.gov.in',
    lastReviewedDate: '2026-10-10'
  }
];

// Helper to calculate educational GST
export function computeEducationalGST({ purchaseAmount, saleAmount, gstRatePercent, isInterState = false }) {
  const rate = Number(gstRatePercent) / 100;
  const pAmt = Number(purchaseAmount);
  const sAmt = Number(saleAmount);

  const inputGst = pAmt * rate;
  const outputGst = sAmt * rate;
  const netGstLiability = Math.max(0, outputGst - inputGst);
  const excessCreditCarriedForward = Math.max(0, inputGst - outputGst);

  return {
    purchaseAmount: pAmt,
    saleAmount: sAmt,
    ratePercent: gstRatePercent,
    isInterState,
    inputTaxCredit: inputGst,
    inputCGST: isInterState ? 0 : inputGst / 2,
    inputSGST: isInterState ? 0 : inputGst / 2,
    inputIGST: isInterState ? inputGst : 0,
    outputTax: outputGst,
    outputCGST: isInterState ? 0 : outputGst / 2,
    outputSGST: isInterState ? 0 : outputGst / 2,
    outputIGST: isInterState ? outputGst : 0,
    netPayable: netGstLiability,
    excessCredit: excessCreditCarriedForward,
    disclaimer: TAX_CONFIG.legalDisclaimer,
    fy: TAX_CONFIG.currentFinancialYear
  };
}
