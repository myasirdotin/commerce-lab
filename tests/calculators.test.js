import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { FinancialCalculators } from '../js/calculator-engine.js';

describe('Financial Calculators Verification', () => {
  it('should calculate Profit and Loss and percentage gain accurately', () => {
    const res = FinancialCalculators.profitAndLoss(100, 125);
    assert.strictEqual(res.isProfit, true);
    assert.strictEqual(res.difference, 25);
    assert.strictEqual(res.percentage, '25.00');

    const lossRes = FinancialCalculators.profitAndLoss(100, 80);
    assert.strictEqual(lossRes.isProfit, false);
    assert.strictEqual(lossRes.difference, 20);
    assert.strictEqual(lossRes.percentage, '20.00');
  });

  it('should correctly distinguish between Gross Margin and Markup', () => {
    // If Cost = 100 and Selling Price = 125:
    // Markup = (25 / 100) * 100 = 25%
    // Margin = (25 / 125) * 100 = 20%
    const markupRes = FinancialCalculators.markup(100, 125);
    assert.strictEqual(markupRes.markupPercent, '25.00');

    const marginRes = FinancialCalculators.grossMargin(125, 100);
    assert.strictEqual(marginRes.marginPercent, '20.00');
    assert.strictEqual(marginRes.grossProfit, 25);
  });

  it('should compute Break-Even Point in units and revenue', () => {
    // Fixed Costs = 50,000, Selling Price = 100, Variable Cost = 60 => Contribution Margin = 40
    // BEP Units = 50,000 / 40 = 1250 units
    const bep = FinancialCalculators.breakEven(50000, 100, 60);
    assert.strictEqual(bep.contributionMargin, 40);
    assert.strictEqual(bep.breakEvenUnits, 1250);
    assert.strictEqual(bep.breakEvenRevenue, 125000);
  });

  it('should calculate Straight-Line and WDV depreciation', () => {
    // Cost = 1,00,000, Scrap = 10,000, Life = 5 years => SLM = (90,000 / 5) = 18,000
    const slm = FinancialCalculators.depreciation(100000, 10000, 5, 'SLM');
    assert.strictEqual(slm.annualDepreciation, 18000);
    assert.strictEqual(slm.bookValueEndYear1, 82000);

    // WDV 15% on 1,00,000 => 15,000, book value = 85,000
    const wdv = FinancialCalculators.depreciation(100000, 10000, 5, 'WDV', 15);
    assert.strictEqual(wdv.annualDepreciationYear1, 15000);
    assert.strictEqual(wdv.bookValueEndYear1, 85000);
  });

  it('should calculate Working Capital and Current Ratio', () => {
    const wc = FinancialCalculators.workingCapital(200000, 100000);
    assert.strictEqual(wc.netWorkingCapital, 100000);
    assert.strictEqual(wc.currentRatio, '2.00');
  });

  it('should calculate Loan EMI and total interest', () => {
    // 1 Lakh loan at 12% annual (1% monthly) for 12 months
    const emi = FinancialCalculators.loanEMI(100000, 12, 12);
    assert.ok(emi.monthlyEMI > 8800 && emi.monthlyEMI < 8950);
    assert.ok(emi.totalPayment > 100000);
  });
});
