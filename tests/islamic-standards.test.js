import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { IslamicStandardsAgent } from '../js/islamic-agent-engine.js';
import { calculateBusinessZakat } from '../js/data/islamic-standards-data.js';

describe('Islamic Standards & Fiqh al-Mu\'amalat Advisory Engine', () => {
  const agent = new IslamicStandardsAgent();

  it('should flag conventional bank loan with interest EMI as HARAM (Riba) with scriptural evidence', () => {
    const audit = agent.auditTransaction('Taking a business bank loan of ₹5,00,000 with 11% interest EMI to buy inventory');
    assert.strictEqual(audit.isCompliant, false);
    assert.ok(audit.violations.length >= 1);
    const ribaViolation = audit.violations.find(v => v.type.includes('RIBA'));
    assert.ok(ribaViolation, 'Must flag Riba violation');
    assert.ok(ribaViolation.evidence.includes('2:275'), 'Must cite Surah Al-Baqarah 2:275');
    assert.ok(ribaViolation.halalAlternative.includes('Murabahah'), 'Must recommend Murabahah as Halal alternative');
  });

  it('should flag compounding late payment penalty as HARAM (Jahiliyyah Riba)', () => {
    const audit = agent.auditTransaction('Adding a 5% monthly compounding penalty fee when a customer delays payment');
    assert.strictEqual(audit.isCompliant, false);
    const ribaViolation = audit.violations.find(v => v.type.includes('RIBA'));
    assert.ok(ribaViolation, 'Must flag penalty fee on debt as Riba');
  });

  it('should flag binary options and derivative speculation as HARAM (Gharar & Maysir)', () => {
    const audit = agent.auditTransaction('Trading binary options and crypto futures betting on price movements');
    assert.strictEqual(audit.isCompliant, false);
    const ghararViolation = audit.violations.find(v => v.type.includes('GHARAR'));
    assert.ok(ghararViolation, 'Must flag Gharar & Maysir');
  });

  it('should flag deliberate fraud and concealment of defects as HARAM (Ghash & Tadlis)', () => {
    const audit = agent.auditTransaction('Seller decides to hide defect in machinery before selling to buyer');
    assert.strictEqual(audit.isCompliant, false);
    const fraudViolation = audit.violations.find(v => v.type.includes('GHASH'));
    assert.ok(fraudViolation, 'Must flag concealment of defect');
    assert.ok(fraudViolation.evidence.includes('Muslim'), 'Must cite Sahih Muslim 101');
  });

  it('should approve a compliant commercial transaction as HALAL', () => {
    const audit = agent.auditTransaction('Purchasing standard cotton fabrics with cash payment and agreed 5% trade volume discount');
    assert.strictEqual(audit.isCompliant, true);
    assert.strictEqual(audit.violationsCount, 0);
    assert.ok(audit.status.includes('HALAL'));
  });

  it('should compute Business Zakat accurately according to AAOIFI FAS 9', () => {
    // Total Assets: Cash 2,00,000 + Debtors 1,00,000 + Stock 5,00,000 = 8,00,000
    // Less Debts: 1,00,000 => Net Zakat Base = 7,00,000
    // Nisab = 85 * 7200 = 6,12,000. Since 7,00,000 >= 6,12,000 => Zakat is 2.5% of 7,00,000 = 17,500
    const zakat = calculateBusinessZakat({
      cashInHandAndBank: 200000,
      tradeReceivables: 100000,
      inventoryMarketValue: 500000,
      shortTermLiabilities: 100000,
      goldGramPriceINR: 7200,
      accountingYearType: 'lunar'
    });

    assert.strictEqual(zakat.totalZakatAssets, 800000);
    assert.strictEqual(zakat.netZakatBase, 700000);
    assert.strictEqual(zakat.isLiable, true);
    assert.strictEqual(zakat.zakatPayable, 17500);
  });
});
