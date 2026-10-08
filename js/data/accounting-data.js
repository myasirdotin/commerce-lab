/**
 * Commerce Lab - Accounting Simulator Master Data
 * Realistic Indian business scenarios with full pedagogical explanations.
 */

export const DEFAULT_TRANSACTIONS = [
  {
    id: 'txn-1',
    date: '2026-04-01',
    description: 'Owner (Aarav) starts business with ₹1,00,000 cash capital',
    amount: 100000,
    debitAccount: 'Cash A/c',
    debitType: 'Asset',
    creditAccount: 'Capital A/c',
    creditType: 'Owner Equity',
    equationChange: {
      assets: '+₹1,00,000 (Cash)',
      liabilities: '₹0',
      capital: '+₹1,00,000 (Owner Equity)'
    },
    goldenRule: {
      debitReason: 'Cash is a Real Account. Rule: "Debit what comes into the business".',
      creditReason: 'Capital is a Personal Account representing the proprietor. Rule: "Credit the giver".',
      modernRule: 'Assets increase -> Debit (+Cash). Capital increases -> Credit (+Capital).'
    },
    financialImpact: 'Cash in current assets increases by ₹1,00,000. Capital on liabilities side of Balance Sheet increases by ₹1,00,000. Equation remains in perfect equilibrium.'
  },
  {
    id: 'txn-2',
    date: '2026-04-03',
    description: 'Purchased shop display furniture for ₹20,000 in cash',
    amount: 20000,
    debitAccount: 'Furniture A/c',
    debitType: 'Non-current Asset',
    creditAccount: 'Cash A/c',
    creditType: 'Asset',
    equationChange: {
      assets: '+₹20,000 (Furniture), -₹20,000 (Cash) [Net: ₹0]',
      liabilities: '₹0',
      capital: '₹0'
    },
    goldenRule: {
      debitReason: 'Furniture is a Real Account. Rule: "Debit what comes in" (asset acquired).',
      creditReason: 'Cash is a Real Account. Rule: "Credit what goes out" (cash outflow).',
      modernRule: 'Asset increases (Furniture -> Debit); Asset decreases (Cash -> Credit).'
    },
    financialImpact: 'Asset composition changes: Non-current assets increase by ₹20,000, liquid cash decreases by ₹20,000. Total assets remain exactly ₹1,00,000. Zero impact on profit.'
  },
  {
    id: 'txn-3',
    date: '2026-04-05',
    description: 'Purchased trading inventory for ₹30,000 on credit from Sharma Traders',
    amount: 30000,
    debitAccount: 'Purchases A/c',
    debitType: 'Expense (Trading)',
    creditAccount: 'Creditors (Sharma Traders) A/c',
    creditType: 'Current Liability',
    equationChange: {
      assets: '+₹30,000 (Stock/Inventory)',
      liabilities: '+₹30,000 (Creditors)',
      capital: '₹0'
    },
    goldenRule: {
      debitReason: 'Purchases is a Nominal Account. Rule: "Debit all expenses and losses".',
      creditReason: 'Creditor is a Personal Account. Rule: "Credit the giver" (Sharma Traders gave goods).',
      modernRule: 'Expense increases -> Debit. Liability increases (Creditors) -> Credit.'
    },
    financialImpact: 'Trading account debited with Purchases. Current Liabilities in Balance Sheet increase by ₹30,000 under Creditors.'
  },
  {
    id: 'txn-4',
    date: '2026-04-08',
    description: 'Sold goods costing ₹25,000 for ₹50,000 in cash',
    amount: 50000,
    costAmount: 25000,
    debitAccount: 'Cash A/c',
    debitType: 'Asset',
    creditAccount: 'Sales A/c',
    creditType: 'Revenue',
    equationChange: {
      assets: '+₹50,000 (Cash received) - ₹25,000 (Inventory gone) = Net +₹25,000',
      liabilities: '₹0',
      capital: '+₹25,000 (Net Profit realized)'
    },
    goldenRule: {
      debitReason: 'Cash is a Real Account. Rule: "Debit what comes in".',
      creditReason: 'Sales is a Nominal Account. Rule: "Credit all incomes and gains".',
      modernRule: 'Asset increases (+Cash ₹50,000) -> Debit. Revenue increases (+Sales ₹50,000) -> Credit.'
    },
    financialImpact: 'Trading Account credited with Sales ₹50,000. Gross Profit generated = ₹50,000 - ₹25,000 = ₹25,000, which transfers to Capital in the Balance Sheet!'
  },
  {
    id: 'txn-5',
    date: '2026-04-12',
    description: 'Paid shop premises rent of ₹5,000 by cash',
    amount: 5000,
    debitAccount: 'Rent Expense A/c',
    debitType: 'Expense (Indirect)',
    creditAccount: 'Cash A/c',
    creditType: 'Asset',
    equationChange: {
      assets: '-₹5,000 (Cash)',
      liabilities: '₹0',
      capital: '-₹5,000 (Reduced by Rent expense)'
    },
    goldenRule: {
      debitReason: 'Rent is a Nominal Account. Rule: "Debit all expenses and losses".',
      creditReason: 'Cash is a Real Account. Rule: "Credit what goes out".',
      modernRule: 'Expense increases (Rent -> Debit); Asset decreases (Cash -> Credit).'
    },
    financialImpact: 'Profit & Loss Account debited with ₹5,000. Net profit decreases by ₹5,000, reducing owner equity on the Balance Sheet.'
  },
  {
    id: 'txn-6',
    date: '2026-04-15',
    description: 'Paid supplier Sharma Traders ₹10,000 cash in part settlement',
    amount: 10000,
    debitAccount: 'Creditors (Sharma Traders) A/c',
    debitType: 'Liability Reduction',
    creditAccount: 'Cash A/c',
    creditType: 'Asset',
    equationChange: {
      assets: '-₹10,000 (Cash outflow)',
      liabilities: '-₹10,000 (Reduced Creditor debt)',
      capital: '₹0'
    },
    goldenRule: {
      debitReason: 'Sharma Traders is a Personal Account. Rule: "Debit the receiver".',
      creditReason: 'Cash is a Real Account. Rule: "Credit what goes out".',
      modernRule: 'Liability decreases (Creditors -> Debit); Asset decreases (Cash -> Credit).'
    },
    financialImpact: 'Current liabilities decrease from ₹30,000 to ₹20,000. Cash balance decreases by ₹10,000. Both sides of Balance Sheet shrink by ₹10,000.'
  },
  {
    id: 'txn-7',
    date: '2026-04-20',
    description: 'Received ₹15,000 from customer Rajesh on account',
    amount: 15000,
    debitAccount: 'Cash A/c',
    debitType: 'Asset',
    creditAccount: 'Debtors (Rajesh) A/c',
    creditType: 'Asset Reduction',
    equationChange: {
      assets: '+₹15,000 (Cash), -₹15,000 (Debtors) [Net: ₹0]',
      liabilities: '₹0',
      capital: '₹0'
    },
    goldenRule: {
      debitReason: 'Cash is a Real Account. Rule: "Debit what comes in".',
      creditReason: 'Rajesh is a Personal Account. Rule: "Credit the giver".',
      modernRule: 'Asset increases (Cash -> Debit); Asset decreases (Debtors -> Credit).'
    },
    financialImpact: 'Receivables convert to cash. Working capital remains liquid. Profit is unaffected.'
  },
  {
    id: 'txn-8',
    date: '2026-04-28',
    description: 'Owner withdrew ₹5,000 cash for daughter school fee (personal use)',
    amount: 5000,
    debitAccount: 'Drawings A/c',
    debitType: 'Capital Deduction',
    creditAccount: 'Cash A/c',
    creditType: 'Asset',
    equationChange: {
      assets: '-₹5,000 (Cash)',
      liabilities: '₹0',
      capital: '-₹5,000 (Drawings deducted from Capital)'
    },
    goldenRule: {
      debitReason: 'Drawings is a Personal Account of the owner. Rule: "Debit the receiver" (proprietor receiving company funds for personal purpose).',
      creditReason: 'Cash is a Real Account. Rule: "Credit what goes out".',
      modernRule: 'Owner Equity decreases (Drawings -> Debit); Asset decreases (Cash -> Credit).'
    },
    financialImpact: 'Drawings is NOT an expense of the business! It does not affect P&L. Instead, it is deducted directly from Capital on the liabilities side of the Balance Sheet.'
  }
];
