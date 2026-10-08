/**
 * Commerce Lab - Islamic Standards & Fiqh al-Mu'amalat Knowledge Base
 * Based on Quranic injunctions, Prophetic Sunnah, Classical Jurisprudential Consensus (Ijma'),
 * and AAOIFI (Accounting and Auditing Organization for Islamic Financial Institutions) Standards.
 *
 * Designed to provide definitive Islamic rulings (Halal, Haram, Makruh, Mubah),
 * identify practices that violate Islamic teachings, and provide Halal alternatives.
 */

export const ISLAMIC_COMMERCE_PRINCIPLES = [
  {
    principle: 'Prohibition of Riba (Interest & Usury)',
    arabic: 'تحريم الربا',
    ruling: 'HARAM (Major Sin)',
    evidence: 'Surah Al-Baqarah (2:275): "Allah has permitted trade and forbidden interest." Surah Al-Baqarah (2:278-279): "Give up what remains of interest, if you are true believers. And if you do not, then be informed of a war against you from Allah and His Messenger."',
    explanation: 'Any predetermined excess or return charged purely on a loan of money without sharing risk or owning a genuine underlying asset constitutes Riba. This includes conventional bank interest, credit card finance charges, compounding loans, and fixed-return promissory notes.',
    conventionalViolation: 'Charging interest on money lent; late payment penalties that increase the debt; conventional bank fixed deposits; compounding business loans.',
    islamicAlternative: 'Qard Hasan (Benevolent interest-free loan), Murabahah (Cost-plus asset sale), Mudarabah (Profit-sharing partnership), or Musharakah (Equity joint venture).'
  },
  {
    principle: 'Prohibition of Gharar (Excessive Uncertainty & Ambiguity)',
    arabic: 'تحريم الغرر',
    ruling: 'HARAM',
    evidence: 'Sahih Muslim (1513): Abu Hurairah reported: "The Messenger of Allah ﷺ forbade transactions determined by chance (Hasah) and transactions involving excessive uncertainty (Gharar)."',
    explanation: 'A contract where the subject matter, price, delivery date, or ownership is unknown, ambiguous, or beyond the control of the parties is invalid. The buyer and seller must have clear knowledge of what is being exchanged.',
    conventionalViolation: 'Binary options, selling items before possessing them without a Salam contract, insurance where payout depends on uncertain catastrophe, naked short selling.',
    islamicAlternative: 'Salam (Forward sale of fully specified agricultural/manufactured goods with full spot payment) or Istisna\'a (Manufacturing contract with precise specifications).'
  },
  {
    principle: 'Prohibition of Maysir & Qimar (Gambling & Speculation)',
    arabic: 'تحريم الميسر والقمار',
    ruling: 'HARAM',
    evidence: 'Surah Al-Ma\'idah (5:90): "O you who have believed, indeed, intoxicants, gambling, stone alters, and divining arrows are but defilement from the work of Satan, so avoid it that you may be successful."',
    explanation: 'Zero-sum bets where one party wins solely at the expense of another based on chance, without creating tangible goods, providing genuine services, or assuming legitimate commercial risk.',
    conventionalViolation: 'Lotteries, spread betting, CFD (Contract for Difference) trading, leveraged derivative speculation.',
    islamicAlternative: 'Productive entrepreneurial investment where profit is derived from genuine economic activity and value creation.'
  },
  {
    principle: 'Prohibition of Ihtikar (Hoarding to Manipulate Prices)',
    arabic: 'تحريم الاحتكار',
    ruling: 'HARAM',
    evidence: 'Sahih Muslim (1605): The Prophet ﷺ said: "No one hoards [essential foodstuff to artificially drive up prices] except a wrongdoer/sinner."',
    explanation: 'Withholding vital commodities, food, medicines, or daily essentials from the public to create artificial scarcity and force exorbitant prices during times of need.',
    conventionalViolation: 'Cornering grain or medicine supply during crises to maximize monopoly rents.',
    islamicAlternative: 'Free market supply with fair pricing and social responsibility; voluntary charity (Sadaqah) during hardship.'
  },
  {
    principle: 'Strict Honesty in Weights, Measures & Disclosure (Tadlis & Ghash)',
    arabic: 'الأمانة والصدق في الكيل والميزان',
    ruling: 'OBLIGATORY (Wajib) / Fraud is HARAM',
    evidence: 'Surah Al-Mutaffifin (83:1-3): "Woe to those who give less [than due], who, when they take a measure from people, take in full; but if they give by measure or by weight to them, they cause loss." Sahih Muslim (101): "He who cheats us is not of us."',
    explanation: 'Full disclosure of all known defects in merchandise (Ayb). Falsifying invoices, altering expiry dates, deceptive packaging, or concealing asset liabilities in financial statements violates Islamic law.',
    conventionalViolation: 'Window-dressing balance sheets, hiding bad debts, selling adulterated food, odometer tampering on vehicles.',
    islamicAlternative: 'Absolute transparency; providing Khiyar al-Ayb (Option of defect: right to return defective goods for a full refund).'
  },
  {
    principle: 'Prohibition of Selling Prohibited (Haram) Commodities',
    arabic: 'تحريم بيع المحرمات',
    ruling: 'HARAM',
    evidence: 'Sahih Bukhari (2236): "When Allah forbids a thing, He forbids its price [commercial sale and trading]."',
    explanation: 'Trading in alcohol, pork, illicit drugs, gambling paraphernalia, interest-based debt securities, or deceptive adult entertainment is forbidden. Even accounting, auditing, or promoting such trades is impermissible.',
    conventionalViolation: 'Investing in distilleries, pork processing, conventional interest-earning bonds, casinos.',
    islamicAlternative: 'Screening equity portfolios using AAOIFI Shariah Sector and Financial Ratio Screening (debt-to-market cap < 33%, cash & interest-bearing securities < 33%).'
  }
];

export const ISLAMIC_CONTRACT_TYPES = [
  {
    name: 'Murabahah (Cost-Plus Sale)',
    arabic: 'مرابحة',
    standard: 'AAOIFI Shariah Standard No. 8',
    nature: 'Sale of goods at original cost plus an agreed, explicitly declared profit margin.',
    rules: [
      'The financier/seller must genuinely own and possess the asset (constructive or physical) before selling it to the client.',
      'Cost price and profit markup must be disclosed transparently to the customer.',
      'Once the contract is signed, the price is fixed and CANNOT increase even if the customer defaults or delays payment (late interest is prohibited; any agreed charity penalty cannot be retained by the bank).'
    ],
    antiPatternWarning: 'If the bank does not take ownership or risk of the goods and simply hands money with an interest markup, it becomes Riba under the guise of Murabahah!'
  },
  {
    name: 'Musharakah (Equity Partnership)',
    arabic: 'مشاركة',
    standard: 'AAOIFI Shariah Standard No. 12',
    nature: 'Joint partnership where all partners contribute capital and agree to share profits and losses.',
    rules: [
      'Profits are shared according to an agreed ratio (e.g. 50-50 or 60-40).',
      'Losses MUST strictly be shared in exact proportion to each partner\'s capital contribution.',
      'No partner can guarantee the capital or return of another partner.'
    ],
    antiPatternWarning: 'Guaranteeing a partner\'s principal investment or promising a guaranteed fixed return turns the partnership into an interest-bearing loan (Haram).'
  },
  {
    name: 'Mudarabah (Trust Financing / Sweat Equity)',
    arabic: 'مضاربة',
    standard: 'AAOIFI Shariah Standard No. 13',
    nature: 'Partnership between a capital provider (Rab al-Mal) and a working entrepreneur (Mudarib).',
    rules: [
      'Capital provider supplies 100% of the funds; entrepreneur provides expertise and management.',
      'Profits are divided by agreed percentages (e.g. 70% investor, 30% entrepreneur).',
      'Financial loss is borne solely by the capital provider; the entrepreneur loses only their spent labor, unless there was proven negligence or breach of trust.'
    ],
    antiPatternWarning: 'Demanding the entrepreneur repay the capital in the event of genuine business failure violates Mudarabah principles.'
  },
  {
    name: 'Ijarah (Leasing & Lease-to-Own)',
    arabic: 'إجارة',
    standard: 'AAOIFI Shariah Standard No. 9',
    nature: 'Transfer of usufruct (use of an asset) for an agreed rent and duration.',
    rules: [
      'The lessor (owner) retains ownership and bears structural ownership risks (insurance/Takaful, major repairs).',
      'The lessee pays for operational use and routine maintenance.',
      'In Ijarah Muntahia Bittamleek (Lease-to-own), the transfer of ownership at the end must happen through a separate independent contract (gift or sale), not tied directly into the lease.'
    ],
    antiPatternWarning: 'Passing total ownership risk (loss of asset) to the lessee while keeping ownership title is conventional financial leasing and not Shariah-compliant.'
  },
  {
    name: 'Salam (Forward Commodity Sale)',
    arabic: 'سلم',
    standard: 'AAOIFI Shariah Standard No. 10',
    nature: 'Sale where full price is paid in advance on the spot for standardized goods delivered at a specified future date.',
    rules: [
      'Price must be paid 100% in full at the time of contract execution (prevents selling debt for debt).',
      'Quantity, quality, specifications, and exact date and place of delivery must be strictly defined.',
      'Primarily used for agricultural produce and standard manufactured goods.'
    ],
    antiPatternWarning: 'Delayed payment combined with delayed delivery (Bay al-Kali bil-Kali / debt for debt) is strictly prohibited by consensus.'
  },
  {
    name: 'Qard Hasan (Benevolent Interest-Free Loan)',
    arabic: 'قرض حسن',
    standard: 'AAOIFI Shariah Standard No. 19',
    nature: 'Loan granted purely out of compassion and goodwill without any excess return.',
    rules: [
      'The borrower is obligated to return only the exact principal amount borrowed.',
      'No extra gift, fee, or condition benefiting the lender may be stipulated.',
      'The lender is encouraged to grant extensions or forgive the debt if the debtor faces hardship (Surah Al-Baqarah 2:280).'
    ],
    antiPatternWarning: 'Any loan that brings a benefit to the lender is Riba (Kullu qardin jarra manfa\'atan fa-huwa Riba).'
  }
];

export const COMMON_COMMERCIAL_DILEMMAS = [
  {
    id: 'conventional-loan-emi',
    question: 'Is taking a conventional bank loan with interest (EMI) permissible for expanding my business?',
    ruling: 'STRICTLY HARAM',
    status: 'haram',
    citation: 'Surah Al-Baqarah 2:275-279; Sahih Muslim 1598 (Prophet ﷺ cursed the consumer of interest, its payer, its scribe, and its two witnesses).',
    violationDetails: 'Conventional loans charge interest for the time-value of money without asset backing or risk-sharing. Every extra rupee paid over the principal is Riba.',
    halalSolution: '1. Murabahah (Ask an Islamic bank to purchase the equipment/machinery and sell it to you on deferred payment at an agreed fixed profit margin).\n2. Diminishing Musharakah (Joint purchase of premises where you gradually buy out the bank\'s share).\n3. Mudarabah/Musharakah with equity partners or family investors.'
  },
  {
    id: 'late-payment-penalty',
    question: 'Can a seller charge a 5% monthly compounding penalty if a wholesale buyer delays payment?',
    ruling: 'STRICTLY HARAM',
    status: 'haram',
    citation: 'AAOIFI Shariah Standard No. 3 (Default in Payment); Classical Consensus on Riba an-Nasi\'ah.',
    violationDetails: 'Increasing a debt due to a delay in repayment is the exact textbook definition of pre-Islamic Riba (Jahiliyyah Riba: "Either pay or pay extra").',
    halalSolution: 'The seller may take a security deposit (Hamish Jiddiyyah), ask for a guarantor (Kafalah), or stipulate a penalty clause where the fine is donated 100% to verified charity without the seller taking a single penny of profit.'
  },
  {
    id: 'dropshipping-compliance',
    question: 'Is modern dropshipping (selling items online before owning or having them in possession) permissible?',
    ruling: 'PERMISSIBLE WITH CONDITIONS (Conditional Halal)',
    status: 'conditional',
    citation: 'Sunan Abi Dawud (3503): The Prophet ﷺ told Hakim ibn Hizam: "Do not sell what you do not possess."',
    violationDetails: 'Selling an item you do not own and cannot guarantee delivery of involves Gharar and violates the prohibition of selling what one does not possess.',
    halalSolution: 'Dropshipping is permissible under two Shariah-compliant models:\n1. Wakalah (Agency): Act as an agent/broker for the supplier, earning a declared commission.\n2. Salam Contract: Receive full payment as a forward sale for precisely standardized goods that you are guaranteed to procure and deliver.\n3. Promise to Purchase (Wa\'d): Customer places an order/promise; you buy and take possession of the goods, then execute the final sale contract.'
  },
  {
    id: 'zakat-on-business',
    question: 'How should a business calculate and pay Zakat on commercial assets?',
    ruling: 'OBLIGATORY (Fard / Third Pillar of Islam)',
    status: 'halal',
    citation: 'Surah At-Tawbah 9:103; Sunan Abi Dawud 1562; AAOIFI Financial Accounting Standard (FAS) No. 9 on Zakat.',
    violationDetails: 'Failing to pay Zakat on business merchandise is a grave sin and invalidates the spiritual purity of wealth.',
    halalSolution: 'Formula for Business Zakat (Urud al-Tijarah):\nZakat Base = [Cash in hand & bank + Trade Debtors expected to be recovered + Finished Goods Inventory valued at current selling/market price] - [Immediate Short-Term Debts / Creditors due within current year].\nIf Net Zakat Base >= Nisab (equivalent of 85 grams of gold or 595 grams of silver), pay exactly 2.5% for Lunar accounting year (or 2.577% for Solar year).'
  },
  {
    id: 'volume-discounts-trade',
    question: 'Is it permissible to offer trade discounts or volume discounts (e.g. 10% off for buying 50+ units)?',
    ruling: 'HALAL & PERMISSIBLE (Mubah / Encouraged)',
    status: 'halal',
    citation: 'Prophetic Principle: "Transactions are based on mutual consent" (Surah An-Nisa 4:29; Ibn Majah 2185).',
    violationDetails: 'There is no Riba or Gharar; both parties have full clarity on price and quantity.',
    halalSolution: 'Freely permissible as long as the discount does not involve deceptive predatory pricing intended to unfairly drive small competitors into bankruptcy.'
  },
  {
    id: 'crypto-and-options-trading',
    question: 'What is the Islamic ruling on binary options, crypto futures, and margin-leveraged day trading?',
    ruling: 'STRICTLY HARAM',
    status: 'haram',
    citation: 'AAOIFI Shariah Standard No. 20 (Sale of Debt & Currency Exchange); Prohibition of Maysir and Bay al-Gharar.',
    violationDetails: 'Binary options and leveraged CFD futures do not involve transfer of real asset ownership; they are speculative derivative bets on price volatility (Qimar/Maysir) and involve borrowing interest-bearing leverage (Riba).',
    halalSolution: 'Invest in spot asset markets with full unleveraged capital, genuine ownership delivery, and companies that pass Shariah screening.'
  }
];

// Helper to compute Islamic Business Zakat according to AAOIFI FAS 9
export function calculateBusinessZakat({
  cashInHandAndBank = 0,
  tradeReceivables = 0,
  inventoryMarketValue = 0,
  otherZakatLiquidAssets = 0,
  shortTermLiabilities = 0,
  goldGramPriceINR = 7200, // benchmark price of 24k gold per gram
  accountingYearType = 'lunar' // 'lunar' (2.5%) or 'solar' (2.577%)
}) {
  const cash = Number(cashInHandAndBank) || 0;
  const debtors = Number(tradeReceivables) || 0;
  const stock = Number(inventoryMarketValue) || 0;
  const otherAssets = Number(otherZakatLiquidAssets) || 0;
  const currentDebts = Number(shortTermLiabilities) || 0;

  const totalZakatAssets = cash + debtors + stock + otherAssets;
  const netZakatBase = Math.max(0, totalZakatAssets - currentDebts);

  // Nisab based on 85g gold
  const nisabGoldGrams = 85;
  const nisabThresholdINR = nisabGoldGrams * goldGramPriceINR;
  const isLiable = netZakatBase >= nisabThresholdINR;

  const rate = accountingYearType === 'solar' ? 0.02577 : 0.025;
  const zakatPayable = isLiable ? Math.round(netZakatBase * rate) : 0;

  return {
    cash,
    debtors,
    stock,
    otherAssets,
    totalZakatAssets,
    currentDebts,
    netZakatBase,
    nisabThresholdINR,
    isLiable,
    accountingYearType,
    ratePercent: accountingYearType === 'solar' ? '2.577%' : '2.500%',
    zakatPayable,
    ruling: isLiable
      ? `Zakat is OBLIGATORY. Your net zakatable assets (₹${netZakatBase.toLocaleString('en-IN')}) exceed the Nisab threshold of ₹${nisabThresholdINR.toLocaleString('en-IN')}. You must pay ₹${zakatPayable.toLocaleString('en-IN')} to eligible recipients (Surah At-Tawbah 9:60).`
      : `Zakat is not currently obligatory on this business because net zakatable wealth (₹${netZakatBase.toLocaleString('en-IN')}) is below the Nisab threshold of ₹${nisabThresholdINR.toLocaleString('en-IN')}. Voluntary charity (Sadaqah) is always encouraged.`
  };
}
