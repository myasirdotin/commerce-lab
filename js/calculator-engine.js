/**
 * Commerce Lab - 16 Educational Financial & Business Calculators
 * Provides mathematically accurate answers, formula breakdown, and plain-English business interpretation.
 */

export const FinancialCalculators = {
  // 1. Profit & Loss
  profitAndLoss(costPrice, sellingPrice) {
    const cp = Number(costPrice);
    const sp = Number(sellingPrice);
    const diff = sp - cp;
    const isProfit = diff >= 0;
    const percentage = cp > 0 ? ((Math.abs(diff) / cp) * 100).toFixed(2) : 0;
    return {
      isProfit,
      difference: Math.abs(diff),
      percentage,
      formula: 'Profit = Selling Price - Cost Price | Profit % = (Profit / Cost Price) × 100',
      explanation: isProfit
        ? `You generated a profit of ₹${diff.toLocaleString('en-IN')} (${percentage}% gain on cost). Every ₹100 invested yielded ₹${(100 + Number(percentage)).toFixed(2)}.`
        : `You incurred a loss of ₹${Math.abs(diff).toLocaleString('en-IN')} (${percentage}% deficit). Your selling price failed to cover your inventory costs.`
    };
  },

  // 2. Gross Margin
  grossMargin(revenue, cogs) {
    const rev = Number(revenue);
    const cost = Number(cogs);
    const gp = rev - cost;
    const marginPct = rev > 0 ? ((gp / rev) * 100).toFixed(2) : 0;
    return {
      grossProfit: gp,
      marginPercent: marginPct,
      formula: 'Gross Margin % = ((Revenue - Cost of Goods Sold) / Revenue) × 100',
      explanation: `Your Gross Profit is ₹${gp.toLocaleString('en-IN')}, leaving a ${marginPct}% margin. This means for every ₹100 of sales, you have ₹${marginPct} left to cover operating expenses (rent, marketing, salaries) and retain net profit.`
    };
  },

  // 3. Markup
  markup(costPrice, sellingPrice) {
    const cp = Number(costPrice);
    const sp = Number(sellingPrice);
    const markupAmt = sp - cp;
    const markupPct = cp > 0 ? ((markupAmt / cp) * 100).toFixed(2) : 0;
    return {
      markupAmount: markupAmt,
      markupPercent: markupPct,
      formula: 'Markup % = ((Selling Price - Cost Price) / Cost Price) × 100',
      explanation: `A markup of ${markupPct}% was added onto your cost price. Remember: Markup is calculated as a percentage of Cost, whereas Margin is calculated as a percentage of Selling Price!`
    };
  },

  // 4. Break-Even Point (BEP)
  breakEven(fixedCosts, sellingPricePerUnit, variableCostPerUnit) {
    const fc = Number(fixedCosts);
    const sp = Number(sellingPricePerUnit);
    const vc = Number(variableCostPerUnit);
    const contributionMargin = sp - vc;
    if (contributionMargin <= 0) {
      return { error: 'Selling price must be strictly greater than variable cost per unit!' };
    }
    const bepUnits = Math.ceil(fc / contributionMargin);
    const bepRevenue = bepUnits * sp;
    return {
      contributionMargin,
      breakEvenUnits: bepUnits,
      breakEvenRevenue: bepRevenue,
      formula: 'Break-Even Units = Fixed Costs / (Selling Price - Variable Cost per unit)',
      explanation: `You must sell at least ${bepUnits.toLocaleString('en-IN')} units (generating ₹${bepRevenue.toLocaleString('en-IN')} in revenue) just to cover fixed operating costs (rent, salaries). Every unit sold beyond ${bepUnits} contributes directly to profit.`
    };
  },

  // 5. Depreciation (Straight-Line & Written Down Value)
  depreciation(cost, scrapValue, usefulLifeYears, method = 'SLM', wdvRatePct = 15) {
    const c = Number(cost);
    const s = Number(scrapValue);
    const n = Number(usefulLifeYears);

    if (method === 'SLM') {
      const annualDepreciation = (c - s) / Math.max(1, n);
      return {
        annualDepreciation: Math.round(annualDepreciation),
        bookValueEndYear1: Math.round(c - annualDepreciation),
        formula: 'SLM Depreciation = (Asset Cost - Residual Value) / Useful Life (Years)',
        explanation: `Under the Straight-Line Method, an equal charge of ₹${Math.round(annualDepreciation).toLocaleString('en-IN')} is debited to P&L every year for ${n} years.`
      };
    } else {
      const depYear1 = Math.round(c * (wdvRatePct / 100));
      const closingBookValue = c - depYear1;
      return {
        annualDepreciationYear1: depYear1,
        bookValueEndYear1: closingBookValue,
        formula: 'WDV Depreciation = Opening Book Value × Depreciation Rate %',
        explanation: `Under Written Down Value (accelerated depreciation), year 1 depreciation is ₹${depYear1.toLocaleString('en-IN')}, leaving book value of ₹${closingBookValue.toLocaleString('en-IN')} for next year's calculation.`
      };
    }
  },

  // 6. Working Capital & Ratios
  workingCapital(currentAssets, currentLiabilities) {
    const ca = Number(currentAssets);
    const cl = Number(currentLiabilities);
    const wc = ca - cl;
    const currentRatio = cl > 0 ? (ca / cl).toFixed(2) : 'N/A';
    return {
      netWorkingCapital: wc,
      currentRatio,
      formula: 'Net Working Capital = Current Assets - Current Liabilities | Current Ratio = Current Assets / Current Liabilities',
      explanation: wc >= 0
        ? `Positive working capital of ₹${wc.toLocaleString('en-IN')} with a Current Ratio of ${currentRatio}:1. Ideal benchmark is usually 2:1. Your liquid assets comfortably cover short-term debts.`
        : `Negative working capital of ₹${Math.abs(wc).toLocaleString('en-IN')}! The business faces liquidity strain as short-term debt obligations exceed current realizable assets.`
    };
  },

  // 7. Quick Ratio (Acid-Test)
  quickRatio(currentAssets, inventory, prepaidExpenses, currentLiabilities) {
    const ca = Number(currentAssets);
    const inv = Number(inventory);
    const prep = Number(prepaidExpenses);
    const cl = Number(currentLiabilities);
    const quickAssets = ca - inv - prep;
    const ratio = cl > 0 ? (quickAssets / cl).toFixed(2) : 'N/A';
    return {
      quickAssets,
      ratio,
      formula: 'Quick Ratio = (Current Assets - Inventory - Prepaid Expenses) / Current Liabilities',
      explanation: `Quick Ratio is ${ratio}:1 (Standard benchmark is 1:1). It excludes inventory because physical stock takes time to liquidate during an emergency.`
    };
  },

  // 8. Loan EMI (Monthly Equated Installment)
  loanEMI(principal, annualRatePct, tenureMonths) {
    const P = Number(principal);
    const r = (Number(annualRatePct) / 12) / 100;
    const n = Number(tenureMonths);

    const emi = Math.round(P * r * (Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1)));
    const totalPayment = emi * n;
    const totalInterest = totalPayment - P;

    return {
      monthlyEMI: emi,
      totalPayment,
      totalInterest,
      formula: 'EMI = [P × r × (1+r)^n] / [(1+r)^n - 1]',
      explanation: `For a principal loan of ₹${P.toLocaleString('en-IN')}, monthly installment is ₹${emi.toLocaleString('en-IN')}. Over ${n} months, you will repay ₹${totalInterest.toLocaleString('en-IN')} in interest charges.`
    };
  }
};
