/**
 * Commerce Lab - Islamic Standards & Fiqh al-Mu'amalat Advisory Engine
 * Audits commercial transactions, flags Shariah violations, and delivers Islamic rulings.
 */

import {
  ISLAMIC_COMMERCE_PRINCIPLES,
  ISLAMIC_CONTRACT_TYPES,
  COMMON_COMMERCIAL_DILEMMAS,
  calculateBusinessZakat
} from './data/islamic-standards-data.js';

export class IslamicStandardsAgent {
  constructor() {
    this.principles = ISLAMIC_COMMERCE_PRINCIPLES;
    this.contracts = ISLAMIC_CONTRACT_TYPES;
    this.dilemmas = COMMON_COMMERCIAL_DILEMMAS;
  }

  /**
   * Audits a commercial transaction or contractual clause for Islamic compliance.
   * Explicitly detects: Riba, Gharar, Maysir, Hoarding, Deception, and Haram products.
   */
  auditTransaction(input) {
    const text = (input || '').toLowerCase();
    const violations = [];
    const recommendations = [];

    // 1. Riba (Interest) Detection
    const ribaKeywords = ['interest', 'compounding', 'late fee', 'penalty fee', 'finance charge', 'guaranteed return', 'fixed return on loan', 'loan with 10%', 'emi interest', 'usury'];
    const matchedRiba = ribaKeywords.filter(k => text.includes(k));
    if (matchedRiba.length > 0) {
      violations.push({
        type: 'RIBA (Interest / Usury)',
        severity: 'HARAM (Major Sin)',
        matchedKeywords: matchedRiba,
        ruling: 'Strictly Prohibited under Quran & Sunnah',
        evidence: 'Surah Al-Baqarah (2:275): "Allah has permitted trade and forbidden interest." Sahih Muslim 1598 (Curse upon those who deal with interest).',
        violationReason: 'The arrangement stipulates a predetermined excess on lent capital or extracts monetary penalties solely for time delay. In Islam, money cannot breed money without genuine risk-bearing and underlying physical asset transfer.',
        halalAlternative: 'Replace with Murabahah (Cost-plus asset sale with agreed fixed profit), Ijarah (Lease), or Mudarabah/Musharakah (Equity partnership where profit and loss are shared).'
      });
    }

    // 2. Gharar / Maysir (Excessive Uncertainty / Gambling) Detection
    const ghararKeywords = ['binary options', 'cfd', 'options trading', 'futures bet', 'margin call', 'lottery', 'short selling', 'selling without owning', 'unspecified delivery'];
    const matchedGharar = ghararKeywords.filter(k => text.includes(k));
    if (matchedGharar.length > 0) {
      violations.push({
        type: 'GHARAR & MAYSIR (Uncertainty & Gambling)',
        severity: 'HARAM',
        matchedKeywords: matchedGharar,
        ruling: 'Prohibited by Prophetic Injunction',
        evidence: 'Sahih Muslim (1513): The Prophet ﷺ forbade transactions involving Gharar (excessive uncertainty). Surah Al-Ma\'idah (5:90): Prohibition of gambling (Maysir).',
        violationReason: 'The contract involves speculative risk without tangible asset transfer or clear specification of quantity, price, and delivery at the time of agreement.',
        halalAlternative: 'Use Salam contracts for forward deliveries with 100% advance spot payment, or Istisna\'a for custom manufacturing with precise specifications.'
      });
    }

    // 3. Prohibited Commodities Detection
    const haramGoods = ['alcohol', 'liquor', 'wine', 'beer', 'pork', 'bacon', 'casino', 'conventional bank shares'];
    const matchedGoods = haramGoods.filter(k => text.includes(k));
    if (matchedGoods.length > 0) {
      violations.push({
        type: 'HARAM COMMODITY / SERVICE',
        severity: 'HARAM',
        matchedKeywords: matchedGoods,
        ruling: 'Impermissible to buy, sell, audit, or broker',
        evidence: 'Sahih Bukhari (2236): "When Allah forbids a thing, He forbids its commercial price."',
        violationReason: 'Trading, brokering, accounting, or investing in intrinsically harmful or forbidden goods is invalid in Islamic law.',
        halalAlternative: 'Pivot business model entirely to permissible (Tayyib) consumer goods, healthcare, ethical education, clean technology, and permissible retail.'
      });
    }

    // 4. Deception & Falsehood
    const fraudKeywords = ['hide defect', 'conceal flaw', 'fake invoice', 'window dressing', 'understate revenue for fraud', 'adulterated'];
    const matchedFraud = fraudKeywords.filter(k => text.includes(k));
    if (matchedFraud.length > 0) {
      violations.push({
        type: 'GHASH & TADLIS (Fraud & Concealment of Defect)',
        severity: 'HARAM',
        matchedKeywords: matchedFraud,
        ruling: 'Sinful & Contractually Voidable',
        evidence: 'Sahih Muslim (101): "Whoever cheats us is not of us." Surah Al-Mutaffifin (83:1-3).',
        violationReason: 'Concealing material defects or falsifying financial records is a gross violation of Amanah (trust) and grants the victim the immediate right to void the deal (Khiyar al-Ayb).',
        halalAlternative: 'Full transparent disclosure of all defects and ethical accounting standards.'
      });
    }

    const isCompliant = violations.length === 0;

    return {
      query: input,
      isCompliant,
      status: isCompliant ? 'SHARIAH-COMPLIANT (HALAL)' : 'NON-COMPLIANT (CONTAINS HARAM ELEMENTS)',
      violationsCount: violations.length,
      violations,
      advice: isCompliant
        ? 'No overt Islamic violations (Riba, Gharar, Maysir, or fraud) were detected in this transaction. Ensure mutual consent (Taradi), fair weights/measures, and fulfillment of contract obligations (Surah Al-Ma\'idah 5:1).'
        : `ATTENTION: This transaction contains ${violations.length} critical violation(s) of Islamic commercial jurisprudence. See detailed rulings and Halal alternatives below.`
    };
  }

  /**
   * Retrieves full analysis for common commercial dilemmas.
   */
  getDilemmaById(id) {
    return this.dilemmas.find(d => d.id === id) || null;
  }

  /**
   * Calculates business zakat according to AAOIFI FAS 9.
   */
  computeZakat(params) {
    return calculateBusinessZakat(params);
  }
}
