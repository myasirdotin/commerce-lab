/**
 * Commerce Lab - Realistic Indian Business Datasets for Excel & MIS Labs
 */

export const SAMPLE_SALES_REGISTER = [
  { invNo: 'INV-101', date: '2026-04-02', customer: 'Patel Electronics', category: 'Smartphones', city: 'Mumbai', qty: 5, unitPrice: 15000, discountPct: 5 },
  { invNo: 'INV-102', date: '2026-04-03', customer: 'Gupta Enterprises', category: 'Accessories', city: 'Delhi', qty: 20, unitPrice: 800, discountPct: 10 },
  { invNo: 'INV-103', date: '2026-04-05', customer: 'Verma Traders', category: 'Laptops', city: 'Bangalore', qty: 2, unitPrice: 55000, discountPct: 4 },
  { invNo: 'INV-104', date: '2026-04-07', customer: 'Sharma Stores', category: 'Smartphones', city: 'Ahmedabad', qty: 8, unitPrice: 12000, discountPct: 5 },
  { invNo: 'INV-105', date: '2026-04-09', customer: 'Khan Retailers', category: 'Accessories', city: 'Hyderabad', qty: 15, unitPrice: 1200, discountPct: 8 },
  { invNo: 'INV-106', date: '2026-04-12', customer: 'Singh Infotech', category: 'Laptops', city: 'Pune', qty: 3, unitPrice: 48000, discountPct: 5 },
  { invNo: 'INV-107', date: '2026-04-15', customer: 'Mehta Distributors', category: 'Smartphones', city: 'Mumbai', qty: 10, unitPrice: 16500, discountPct: 6 },
  { invNo: 'INV-108', date: '2026-04-18', customer: 'Reddy Digital', category: 'Accessories', city: 'Chennai', qty: 25, unitPrice: 650, discountPct: 12 }
];

export const SAMPLE_EXPENSE_REGISTER = [
  { id: 'EXP-01', date: '2026-04-01', category: 'Rent', description: 'Showroom lease', amount: 35000, paidVia: 'Bank Transfer' },
  { id: 'EXP-02', date: '2026-04-05', category: 'Salaries', description: 'Store staff salaries', amount: 65000, paidVia: 'NEFT' },
  { id: 'EXP-03', date: '2026-04-08', category: 'Electricity', description: 'Commercial power bill', amount: 8400, paidVia: 'UPI' },
  { id: 'EXP-04', date: '2026-04-11', category: 'Marketing', description: 'Local newspaper & Meta ads', amount: 12000, paidVia: 'Credit Card' },
  { id: 'EXP-05', date: '2026-04-16', category: 'Logistics', description: 'Courier freight delivery', amount: 4800, paidVia: 'UPI' },
  { id: 'EXP-06', date: '2026-04-22', category: 'Software', description: 'Tally & Cloud ERP subscription', amount: 2500, paidVia: 'Card' }
];

export const EXCEL_FORMULA_CHALLENGES = [
  {
    id: 'sumif-category-sales',
    title: 'Calculate Total Sales for "Smartphones"',
    description: 'Use the SUMIF formula to find the gross sales value of all rows where category is "Smartphones".',
    targetFormula: '=SUMIF(C2:C9, "Smartphones", G2:G9)',
    expectedResult: '₹2,67,000',
    hint: 'Syntax: =SUMIF(range, criteria, [sum_range])',
    explanation: 'SUMIF checks the Category column (C2:C9). Whenever it finds "Smartphones", it adds the corresponding value from the Gross Sales column (G2:G9).'
  },
  {
    id: 'xlookup-customer',
    title: 'Look Up City for Invoice "INV-104"',
    description: 'Use modern XLOOKUP to find the customer city for Invoice number "INV-104".',
    targetFormula: '=XLOOKUP("INV-104", A2:A9, D2:D9)',
    expectedResult: 'Ahmedabad',
    hint: 'Syntax: =XLOOKUP(lookup_value, lookup_array, return_array)',
    explanation: 'XLOOKUP searches column A for "INV-104" and directly returns the corresponding value from City column D without needing index column counting!'
  },
  {
    id: 'countif-high-qty',
    title: 'Count Orders with Quantity >= 10',
    description: 'Count how many transactions had a quantity of 10 or more items.',
    targetFormula: '=COUNTIF(E2:E9, ">=10")',
    expectedResult: '3',
    hint: 'Syntax: =COUNTIF(range, ">=10")',
    explanation: 'COUNTIF scans the Qty column E and counts only cells meeting the condition ">=10" (INV-102, INV-105, INV-107, INV-108).'
  }
];
