/**
 * Commerce Lab - Interactive Accounting Engine
 * Calculates Accounting Equation, T-Accounts, Trial Balance, P&L, and Balance Sheet
 */

import { DEFAULT_TRANSACTIONS } from './data/accounting-data.js';

export class AccountingEngine {
  constructor(transactions = DEFAULT_TRANSACTIONS) {
    this.transactions = transactions;
    this.activeTxns = [...transactions];
  }

  // Toggle a transaction on or off to see live ripple effects
  toggleTransaction(id) {
    const idx = this.activeTxns.findIndex(t => t.id === id);
    if (idx !== -1) {
      this.activeTxns.splice(idx, 1);
    } else {
      const original = this.transactions.find(t => t.id === id);
      if (original) this.activeTxns.push(original);
    }
    return this.calculateAll();
  }

  calculateAll() {
    // 1. Ledger balances computation
    const ledgers = {};

    this.activeTxns.forEach(txn => {
      // Debit Entry
      if (!ledgers[txn.debitAccount]) {
        ledgers[txn.debitAccount] = { name: txn.debitAccount, type: txn.debitType, debits: [], credits: [], netDebit: 0, netCredit: 0 };
      }
      ledgers[txn.debitAccount].debits.push({ date: txn.date, desc: txn.description, amount: txn.amount, against: txn.creditAccount });

      // Credit Entry
      if (!ledgers[txn.creditAccount]) {
        ledgers[txn.creditAccount] = { name: txn.creditAccount, type: txn.creditType, debits: [], credits: [], netDebit: 0, netCredit: 0 };
      }
      ledgers[txn.creditAccount].credits.push({ date: txn.date, desc: txn.description, amount: txn.amount, against: txn.debitAccount });
    });

    // Compute Net Balances
    Object.keys(ledgers).forEach(accName => {
      const acc = ledgers[accName];
      const sumDr = acc.debits.reduce((s, i) => s + i.amount, 0);
      const sumCr = acc.credits.reduce((s, i) => s + i.amount, 0);
      if (sumDr >= sumCr) {
        acc.netDebit = sumDr - sumCr;
        acc.netCredit = 0;
      } else {
        acc.netDebit = 0;
        acc.netCredit = sumCr - sumDr;
      }
    });

    // 2. Trial Balance
    const trialBalance = [];
    let totalDebit = 0;
    let totalCredit = 0;

    Object.keys(ledgers).sort().forEach(accName => {
      const acc = ledgers[accName];
      if (acc.netDebit > 0 || acc.netCredit > 0) {
        trialBalance.push({
          account: acc.name,
          debit: acc.netDebit,
          credit: acc.netCredit
        });
        totalDebit += acc.netDebit;
        totalCredit += acc.netCredit;
      }
    });

    const isTrialBalanced = Math.abs(totalDebit - totalCredit) < 0.01;

    // 3. Trading & Profit & Loss Statement
    const sales = ledgers['Sales A/c']?.netCredit || 0;
    const purchases = ledgers['Purchases A/c']?.netDebit || 0;
    // Closing stock assumption for realistic remaining inventory
    const closingStock = (this.activeTxns.some(t => t.id === 'txn-3') && this.activeTxns.some(t => t.id === 'txn-4')) ? 5000 : 0;
    const costOfGoodsSold = Math.max(0, purchases - closingStock);
    const grossProfit = sales - costOfGoodsSold;

    const rent = ledgers['Rent Expense A/c']?.netDebit || 0;
    const totalIndirectExpenses = rent;
    const netProfit = grossProfit - totalIndirectExpenses;

    // 4. Balance Sheet
    const cash = ledgers['Cash A/c']?.netDebit || 0;
    const furniture = ledgers['Furniture A/c']?.netDebit || 0;
    const debtorsDebit = ledgers['Debtors (Rajesh) A/c']?.netDebit || 0;
    const debtorsCredit = ledgers['Debtors (Rajesh) A/c']?.netCredit || 0;

    const currentAssets = cash + debtorsDebit + closingStock;
    const nonCurrentAssets = furniture;
    const totalAssets = currentAssets + nonCurrentAssets;

    const creditorsCredit = ledgers['Creditors (Sharma Traders) A/c']?.netCredit || 0;
    // If a customer has paid in advance (credit balance on debtor), it is a current liability
    const customerAdvance = debtorsCredit;
    const totalLiabilities = creditorsCredit + customerAdvance;

    const initialCapital = ledgers['Capital A/c']?.netCredit || 0;
    const drawings = ledgers['Drawings A/c']?.netDebit || 0;
    const finalCapital = initialCapital + netProfit - drawings;

    const totalEquityAndLiabilities = totalLiabilities + finalCapital;
    const isBalanceSheetBalanced = Math.abs(totalAssets - totalEquityAndLiabilities) < 0.01;

    return {
      activeTxns: this.activeTxns,
      ledgers,
      trialBalance,
      trialBalanceTotals: { totalDebit, totalCredit, isBalanced: isTrialBalanced },
      profitLoss: {
        sales,
        purchases,
        closingStock,
        costOfGoodsSold,
        grossProfit,
        expenses: { rent },
        totalIndirectExpenses,
        netProfit
      },
      balanceSheet: {
        assets: { cash, furniture, debtors: debtorsDebit, closingStock, currentAssets, nonCurrentAssets, totalAssets },
        liabilities: { creditors: creditorsCredit, customerAdvance, totalLiabilities },
        equity: { initialCapital, netProfit, drawings, finalCapital },
        totalEquityAndLiabilities,
        isBalanced: isBalanceSheetBalanced
      },
      equation: {
        assets: totalAssets,
        liabilities: totalLiabilities,
        capital: finalCapital,
        isBalanced: Math.abs(totalAssets - (totalLiabilities + finalCapital)) < 0.01
      }
    };
  }
}
