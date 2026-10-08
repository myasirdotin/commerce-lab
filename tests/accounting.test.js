import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { AccountingEngine } from '../js/accounting-engine.js';
import { DEFAULT_TRANSACTIONS } from '../js/data/accounting-data.js';

describe('Accounting Engine & Double Entry Invariants', () => {
  it('should maintain debit and credit equality across the ledger and trial balance', () => {
    const engine = new AccountingEngine(DEFAULT_TRANSACTIONS);
    const result = engine.calculateAll();

    // Verify trial balance totals balance
    assert.strictEqual(result.trialBalanceTotals.isBalanced, true, 'Trial Balance must balance debit and credit');
    assert.strictEqual(result.trialBalanceTotals.totalDebit, result.trialBalanceTotals.totalCredit);
  });

  it('should verify the fundamental Accounting Equation: Assets = Liabilities + Capital', () => {
    const engine = new AccountingEngine(DEFAULT_TRANSACTIONS);
    const result = engine.calculateAll();

    const assets = result.equation.assets;
    const liabilities = result.equation.liabilities;
    const capital = result.equation.capital;

    assert.ok(Math.abs(assets - (liabilities + capital)) < 0.01, `Equation must hold: ${assets} = ${liabilities} + ${capital}`);
    assert.strictEqual(result.balanceSheet.isBalanced, true, 'Balance Sheet must balance');
  });

  it('should recalculate correctly when a transaction is toggled', () => {
    const engine = new AccountingEngine(DEFAULT_TRANSACTIONS);
    const initial = engine.calculateAll();
    const initialDebit = initial.trialBalanceTotals.totalDebit;

    // Toggle off transaction 1 (Owner capital investment ₹1,00,000)
    const afterToggle = engine.toggleTransaction('txn-1');
    assert.notStrictEqual(afterToggle.trialBalanceTotals.totalDebit, initialDebit);
    assert.strictEqual(afterToggle.trialBalanceTotals.isBalanced, true, 'Trial Balance must still balance after removing a balanced transaction');
  });
});
