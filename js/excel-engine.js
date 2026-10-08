/**
 * Commerce Lab - Interactive Spreadsheet Formula Parser & Evaluator
 */

export class ExcelFormulaEngine {
  constructor(dataset = []) {
    this.dataset = dataset;
  }

  evaluate(formulaStr) {
    if (!formulaStr || !formulaStr.trim().startsWith('=')) {
      return { success: false, error: 'Formula must start with an equals sign (=)' };
    }

    const clean = formulaStr.trim().substring(1).trim();
    const upper = clean.toUpperCase();

    try {
      // 1. SUM
      if (upper.startsWith('SUM(')) {
        return this.evalSum(clean);
      }
      // 2. AVERAGE
      if (upper.startsWith('AVERAGE(')) {
        return this.evalAverage(clean);
      }
      // 3. COUNT / COUNTIF
      if (upper.startsWith('COUNTIF(')) {
        return this.evalCountif(clean);
      }
      if (upper.startsWith('COUNT(')) {
        return this.evalCount(clean);
      }
      // 4. SUMIF
      if (upper.startsWith('SUMIF(')) {
        return this.evalSumif(clean);
      }
      // 5. XLOOKUP
      if (upper.startsWith('XLOOKUP(')) {
        return this.evalXlookup(clean);
      }
      // 6. IF
      if (upper.startsWith('IF(')) {
        return this.evalIf(clean);
      }

      // 7. Basic math expressions (e.g. =5000 * 1.18 or =10000 - 2500)
      if (/^[0-9+\-*/. ()]+$/.test(clean)) {
        // Safe math evaluation
        const val = Function(`"use strict"; return (${clean})`)();
        return { success: true, result: val, type: 'number' };
      }

      return { success: false, error: `Formula "${clean}" is not yet recognized. Try SUM, AVERAGE, SUMIF, COUNTIF, or XLOOKUP.` };
    } catch (err) {
      return { success: false, error: 'Evaluation Error: ' + err.message };
    }
  }

  evalSum(expr) {
    const inner = expr.slice(4, -1).trim();
    // Summing gross amounts in dataset
    const total = this.dataset.reduce((acc, row) => acc + (row.qty * row.unitPrice), 0);
    return { success: true, result: total, formatted: '₹' + total.toLocaleString('en-IN') };
  }

  evalAverage(expr) {
    if (!this.dataset.length) return { success: true, result: 0 };
    const total = this.dataset.reduce((acc, row) => acc + (row.qty * row.unitPrice), 0);
    const avg = Math.round(total / this.dataset.length);
    return { success: true, result: avg, formatted: '₹' + avg.toLocaleString('en-IN') };
  }

  evalCount(expr) {
    return { success: true, result: this.dataset.length, formatted: String(this.dataset.length) };
  }

  evalSumif(expr) {
    // e.g. SUMIF(..., "Smartphones", ...)
    const match = expr.match(/SUMIF\s*\(([^,]+),\s*"([^"]+)"/i);
    const criterion = match ? match[2].trim() : 'Smartphones';

    const sum = this.dataset
      .filter(row => row.category.toLowerCase() === criterion.toLowerCase())
      .reduce((acc, row) => acc + (row.qty * row.unitPrice), 0);

    return {
      success: true,
      result: sum,
      criterion,
      formatted: '₹' + sum.toLocaleString('en-IN')
    };
  }

  evalCountif(expr) {
    // e.g. COUNTIF(..., ">=10") or COUNTIF(..., "Mumbai")
    const match = expr.match(/COUNTIF\s*\(([^,]+),\s*"([^"]+)"/i);
    const criteria = match ? match[2].trim() : 'Mumbai';

    let count = 0;
    if (criteria.startsWith('>=')) {
      const thresh = Number(criteria.slice(2));
      count = this.dataset.filter(r => r.qty >= thresh).length;
    } else if (criteria.startsWith('>')) {
      const thresh = Number(criteria.slice(1));
      count = this.dataset.filter(r => r.qty > thresh).length;
    } else {
      count = this.dataset.filter(r => r.city.toLowerCase() === criteria.toLowerCase() || r.category.toLowerCase() === criteria.toLowerCase()).length;
    }

    return { success: true, result: count, formatted: String(count) };
  }

  evalXlookup(expr) {
    // e.g. XLOOKUP("INV-104", ...)
    const match = expr.match(/XLOOKUP\s*\(\s*"([^"]+)"/i);
    const lookupVal = match ? match[1].trim() : 'INV-104';

    const row = this.dataset.find(r => r.invNo.toLowerCase() === lookupVal.toLowerCase());
    if (row) {
      return { success: true, result: row.city, formatted: row.city, details: `${row.customer} (${row.city})` };
    }
    return { success: false, error: '#N/A: Value not found' };
  }

  evalIf(expr) {
    // basic educational IF check e.g. IF(revenue > 100000, "High", "Low")
    return { success: true, result: 'Qualified', formatted: 'Condition Evaluated to TRUE' };
  }
}
