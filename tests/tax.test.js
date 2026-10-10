import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { computeEducationalGST, TAX_CONFIG, GST_RATE_SLABS } from '../js/data/tax-rules.js';

describe('Tax Engine & GST Calculation Verification', () => {
  it('should verify tax rules metadata specifies current FY and official disclaimer', () => {
    assert.strictEqual(TAX_CONFIG.currentFinancialYear, '2026-27');
    assert.ok(TAX_CONFIG.legalDisclaimer.includes('educational simulations'));
    assert.ok(GST_RATE_SLABS.length >= 4);
    assert.ok(GST_RATE_SLABS.some(s => s.slab === '40%') && !GST_RATE_SLABS.some(s => s.slab === '28%'), 'post-Sept-2025 slab structure');
  });

  it('should accurately compute intra-state GST (CGST + SGST) and Input Tax Credit offset', () => {
    const calc = computeEducationalGST({
      purchaseAmount: 10000,
      saleAmount: 20000,
      gstRatePercent: 18,
      isInterState: false
    });

    // Input GST = 18% of 10,000 = 1,800 (CGST 900, SGST 900)
    assert.strictEqual(calc.inputTaxCredit, 1800);
    assert.strictEqual(calc.inputCGST, 900);
    assert.strictEqual(calc.inputSGST, 900);

    // Output GST = 18% of 20,000 = 3,600 (CGST 1800, SGST 1800)
    assert.strictEqual(calc.outputTax, 3600);
    assert.strictEqual(calc.outputCGST, 1800);
    assert.strictEqual(calc.outputSGST, 1800);

    // Net Payable = 3600 - 1800 = 1800
    assert.strictEqual(calc.netPayable, 1800);
    assert.strictEqual(calc.excessCredit, 0);
  });

  it('should handle excess Input Tax Credit (ITC carried forward) when purchases exceed sales', () => {
    const calc = computeEducationalGST({
      purchaseAmount: 50000,
      saleAmount: 20000,
      gstRatePercent: 12,
      isInterState: false
    });

    // Input = 6,000, Output = 2,400
    assert.strictEqual(calc.inputTaxCredit, 6000);
    assert.strictEqual(calc.outputTax, 2400);
    assert.strictEqual(calc.netPayable, 0);
    assert.strictEqual(calc.excessCredit, 3600);
  });
});
