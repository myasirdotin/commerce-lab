/**
 * Commerce Lab - Tax Knowledge Base & Versioned Rules
 * STRICT COMPLIANCE:
 * 1. Rates and thresholds are versioned by Financial Year (FY) and Assessment Year (AY).
 * 2. Every rule cites official Indian Government sources (CBIC / Income Tax Dept).
 * 3. Clearly distinguished as educational simulations, NOT professional tax advice.
 */

export const TAX_CONFIG = {
  currentFinancialYear: '2024-25',
  currentAssessmentYear: '2025-26',
  legalDisclaimer: 'Disclaimer: Commerce Lab provides educational simulations designed strictly for conceptual learning. It does not constitute chartered accountancy or tax advice. For actual statutory compliance and return filing, consult a registered tax professional and refer to official government portals (cbic.gov.in / incometax.gov.in).',
  lastReviewedDate: '2026-03-31'
};

export const GST_RATE_SLABS = [
  { slab: '0%', description: 'Exempted & Essential fresh food, unprocessed grains, milk, salt', cgst: 0, sgst: 0, igst: 0 },
  { slab: '5%', description: 'Mass consumption items, medicines, packaged foods, apparel <= ₹1,000', cgst: 2.5, sgst: 2.5, igst: 5 },
  { slab: '12%', description: 'Processed foods, business computers, apparel > ₹1,000, specific services', cgst: 6, sgst: 6, igst: 12 },
  { slab: '18%', description: 'Standard rate: IT services, software, restaurants, capital goods, most manufactured goods', cgst: 9, sgst: 9, igst: 18 },
  { slab: '28%', description: 'Luxury & demerit goods: automobiles, air conditioners, pan masala', cgst: 14, sgst: 14, igst: 28 }
];

export const TAX_KNOWLEDGE_BASE = [
  {
    id: 'gst-itc-mechanism',
    topic: 'Input Tax Credit (ITC) Mechanism',
    financialYear: '2024-25',
    category: 'Indirect Tax (GST)',
    applicableRule: 'Under Section 16 of CGST Act, 2017, a registered buyer can reduce the tax paid on business purchases (Input Tax) from the tax collected on sales (Output Tax).',
    example: 'A shop buys inventory for ₹10,000 (+ 18% GST = ₹1,800 Input Tax). The shop sells it for ₹15,000 (+ 18% GST = ₹2,700 Output Tax). Net GST payable to Government = ₹2,700 - ₹1,800 = ₹900.',
    source: 'Central Board of Indirect Taxes and Customs (CBIC) - CGST Act 2017 Sec 16',
    sourceUrl: 'https://cbic-gst.gov.in',
    lastReviewedDate: '2026-03-31'
  },
  {
    id: 'gst-composition-scheme',
    topic: 'GST Composition Scheme (Small Businesses)',
    financialYear: '2024-25',
    category: 'Indirect Tax (GST)',
    applicableRule: 'Small businesses with aggregate turnover up to ₹1.5 Crore (₹75 Lakhs for special category states) can pay a flat concession rate (1% for manufacturers/traders, 5% for restaurants) and file quarterly CMP-08 instead of monthly returns.',
    example: 'A small grocery trader with ₹40 Lakh annual turnover pays 1% of turnover (₹40,000) directly without claiming Input Tax Credit or issuing tax invoices.',
    source: 'CBIC Composition Scheme Rules (Section 10, CGST Act)',
    sourceUrl: 'https://cbic-gst.gov.in',
    lastReviewedDate: '2026-03-31'
  },
  {
    id: 'income-tax-new-regime-slabs',
    topic: 'Income Tax Slabs (New Tax Regime u/s 115BAC)',
    financialYear: '2024-25',
    category: 'Direct Tax',
    applicableRule: 'Default regime under Finance (No. 2) Act 2024: Up to ₹3 Lakh: Nil; ₹3L-₹7L: 5%; ₹7L-₹10L: 10%; ₹10L-₹12L: 15%; ₹12L-₹15L: 20%; Above ₹15L: 30%. Standard deduction for salaried: ₹75,000. Full rebate u/s 87A up to ₹7 Lakhs taxable income.',
    example: 'An employee with ₹7.5 Lakh salary claims ₹75,000 standard deduction -> Taxable Income = ₹6.75 Lakh. Because taxable income is under ₹7 Lakh, net tax payable after Section 87A rebate is ₹0.',
    source: 'Income Tax Department of India, Finance (No. 2) Act 2024',
    sourceUrl: 'https://incometax.gov.in',
    lastReviewedDate: '2026-03-31'
  },
  {
    id: 'tds-section-194c',
    topic: 'TDS on Contractor Payments (Section 194C)',
    financialYear: '2024-25',
    category: 'Direct Tax (TDS)',
    applicableRule: 'Any business making payment to a contractor exceeding ₹30,000 in a single bill or ₹1,00,000 aggregate in a financial year must deduct Tax Deducted at Source (1% for individuals/HUF, 2% for companies).',
    example: 'A business pays a painting contractor ₹50,000. TDS @ 1% = ₹500 is deducted and deposited with the government on Form 26Q; the contractor receives net ₹49,500.',
    source: 'Income Tax Act 1961 Section 194C',
    sourceUrl: 'https://incometax.gov.in',
    lastReviewedDate: '2026-03-31'
  },
  {
    id: 'presumptive-taxation-44ad',
    topic: 'Presumptive Taxation for Small Businesses (Section 44AD)',
    financialYear: '2024-25',
    category: 'Direct Tax',
    applicableRule: 'Eligible small resident businesses with annual turnover up to ₹2 Crore (increased to ₹3 Crore if digital receipts >= 95%) can declare profit at 6% of digital turnover and 8% of cash turnover without maintaining complex audited books.',
    example: 'A mobile phone retail shop with ₹80 Lakh digital sales declares 6% profit (₹4.8 Lakh) as taxable business income without requiring a mandatory tax audit.',
    source: 'Income Tax Act 1961 Section 44AD',
    sourceUrl: 'https://incometax.gov.in',
    lastReviewedDate: '2026-03-31'
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
