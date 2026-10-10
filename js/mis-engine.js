/**
 * Commerce Lab - MIS Reporting & Business Intelligence Engine
 * Transforms raw transactional registers into actionable executive dashboards.
 */

import { SAMPLE_SALES_REGISTER, SAMPLE_EXPENSE_REGISTER } from './data/excel-datasets.js';

export class MISEngine {
  constructor(sales = SAMPLE_SALES_REGISTER, expenses = SAMPLE_EXPENSE_REGISTER) {
    this.sales = sales;
    this.expenses = expenses;
  }

  generateExecutiveReport() {
    // 1. Total Revenue & Orders
    let totalGrossRevenue = 0;
    let totalDiscountGiven = 0;
    const categoryBreakdown = {};
    const cityBreakdown = {};

    this.sales.forEach(s => {
      const gross = s.qty * s.unitPrice;
      const discount = gross * (s.discountPct / 100);
      const net = gross - discount;

      totalGrossRevenue += gross;
      totalDiscountGiven += discount;

      // Category aggregation
      if (!categoryBreakdown[s.category]) {
        categoryBreakdown[s.category] = { units: 0, revenue: 0 };
      }
      categoryBreakdown[s.category].units += s.qty;
      categoryBreakdown[s.category].revenue += net;

      // City aggregation
      if (!cityBreakdown[s.city]) {
        cityBreakdown[s.city] = { orders: 0, revenue: 0 };
      }
      cityBreakdown[s.city].orders += 1;
      cityBreakdown[s.city].revenue += net;
    });

    const netSalesRevenue = totalGrossRevenue - totalDiscountGiven;
    const orderCount = this.sales.length;
    const avgOrderValue = Math.round(netSalesRevenue / Math.max(1, orderCount));

    // 2. Cost & Expenses
    // Estimated Cost of Goods Sold @ 65% of net revenue
    const estimatedCOGS = Math.round(netSalesRevenue * 0.65);
    const grossProfit = netSalesRevenue - estimatedCOGS;
    const grossMarginPct = ((grossProfit / netSalesRevenue) * 100).toFixed(1);

    // Total Operating Expenses
    const totalOpEx = this.expenses.reduce((s, e) => s + e.amount, 0);
    const netProfit = grossProfit - totalOpEx;
    const netMarginPct = ((netProfit / netSalesRevenue) * 100).toFixed(1);

    // 3. Receivables Aging Schedule (Illustrative sample data)
    const receivablesAging = {
      current_0_30: 45000,
      overdue_31_60: 22000,
      overdue_61_90: 8500,
      badDebtsRisk_90_plus: 3500,
      totalOutstanding: 79000
    };

    return {
      kpi: {
        netRevenue: netSalesRevenue,
        orderCount,
        avgOrderValue,
        grossProfit,
        grossMarginPct,
        totalOpEx,
        netProfit,
        netMarginPct,
        receivablesTotal: receivablesAging.totalOutstanding
      },
      categoryBreakdown,
      cityBreakdown,
      expensesByCategory: this.getExpenseCategoryBreakdown(),
      receivablesAging
    };
  }

  getExpenseCategoryBreakdown() {
    const map = {};
    this.expenses.forEach(e => {
      map[e.category] = (map[e.category] || 0) + e.amount;
    });
    return map;
  }

  /**
   * Flat summary used by the MIS dashboard page (mis-lab/index.html).
   * Breakdowns are reduced to plain `name -> revenue` maps.
   */
  generateExecutiveSummary() {
    const r = this.generateExecutiveReport();
    const flatten = (obj) => Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, v.revenue]));
    return {
      totalRevenue: r.kpi.netRevenue,
      totalOrders: r.kpi.orderCount,
      averageOrderValue: r.kpi.avgOrderValue,
      grossProfit: r.kpi.grossProfit,
      grossMarginPct: r.kpi.grossMarginPct,
      netProfit: r.kpi.netProfit,
      netMarginPct: r.kpi.netMarginPct,
      totalExpenses: r.kpi.totalOpEx,
      categoryBreakdown: flatten(r.categoryBreakdown),
      cityBreakdown: flatten(r.cityBreakdown),
      expensesByCategory: r.expensesByCategory,
      agingSchedule: {
        current_0_30: r.receivablesAging.current_0_30,
        aging_31_60: r.receivablesAging.overdue_31_60,
        aging_61_90: r.receivablesAging.overdue_61_90,
        above_90: r.receivablesAging.badDebtsRisk_90_plus
      }
    };
  }
}

// Name used by the dashboard page.
export { MISEngine as MISReportingEngine };
