import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { ExcelFormulaEngine } from '../js/excel-engine.js';
import { SAMPLE_SALES_REGISTER } from '../js/data/excel-datasets.js';

describe('Excel Formula Engine', () => {
  it('should evaluate SUM formula on the dataset', () => {
    const engine = new ExcelFormulaEngine(SAMPLE_SALES_REGISTER);
    const sumResult = engine.evaluate('=SUM(F2:F7)');
    assert.strictEqual(sumResult.success, true);
    assert.ok(sumResult.result > 0);
  });

  it('should evaluate AVERAGE and COUNT formulas', () => {
    const engine = new ExcelFormulaEngine(SAMPLE_SALES_REGISTER);
    const avgResult = engine.evaluate('=AVERAGE(F2:F7)');
    assert.strictEqual(avgResult.success, true);
    assert.ok(avgResult.result > 0);

    const countResult = engine.evaluate('=COUNT(A2:A7)');
    assert.strictEqual(countResult.success, true);
    assert.strictEqual(countResult.result, SAMPLE_SALES_REGISTER.length);
  });

  it('should evaluate SUMIF with category filter', () => {
    const engine = new ExcelFormulaEngine(SAMPLE_SALES_REGISTER);
    const sumifResult = engine.evaluate('=SUMIF(D2:D7, "Smartphones", F2:F7)');
    assert.strictEqual(sumifResult.success, true);
    assert.ok(sumifResult.result > 0);
  });

  it('should evaluate XLOOKUP', () => {
    const engine = new ExcelFormulaEngine(SAMPLE_SALES_REGISTER);
    const xlookupResult = engine.evaluate('=XLOOKUP("INV-104", A2:A9, D2:D9)');
    assert.strictEqual(xlookupResult.success, true);
    assert.strictEqual(xlookupResult.result, 'Ahmedabad');
  });

  it('should evaluate simple math expressions safely', () => {
    const engine = new ExcelFormulaEngine(SAMPLE_SALES_REGISTER);
    const mathResult = engine.evaluate('=5000 * 1.18');
    assert.strictEqual(mathResult.success, true);
    assert.strictEqual(mathResult.result, 5900);
  });
});
