# Commerce Lab (CL)

> **Learn Accounts. Understand Business. Build Financial Skills.**  
> Dedicated to Beneficial Knowledge (*'Ilm Nāfi'*), Digital Stewardship & Craftsmanship.  
> Designed for **Yasir Rasool** • [github.com/myasirdotin](https://github.com/myasirdotin/)

---

## 1. Overview & Vision

**Commerce Lab** is an independent, production-grade, open educational platform designed to make commerce, accounting, business economics, Indian taxation, spreadsheet modeling, and MIS reporting intuitive, visual, and rigorous.

Inspired by the structured information architecture and active learning philosophy of modern educational platforms, Commerce Lab is tailored specifically for the commerce discipline. Instead of presenting students with passive formulas and opaque calculators, it teaches the **pedagogical reasoning** behind every debit, credit, margin, ratio, and statutory tax rule.

---

## 2. Who Is Commerce Lab Built For?

- **Class 8 to 10 Students:** Early introduction to commerce terminology, commercial ethics, and financial literacy.
- **Class 11 & 12 Commerce Students (CBSE / ICSE / State Boards):** Mastery of double-entry bookkeeping, Golden Rules, Modern ALCRE rules, Trial Balance, Depreciation (SLM & WDV), and Final Accounts.
- **College Students (B.Com, BBA, CA Foundation):** Unit economics, Financial Statement analysis, working capital stress-testing, and MIS reporting.
- **Commerce Teachers & Educators:** Ready-to-teach 45-minute lesson plans, active classroom projector simulations, student worksheets, and competency-based assessment rubrics.
- **Small Business Owners & Entrepreneurs:** Break-even analysis, unit contribution margins, cash flow gap diagnosis, and Indian GST Input Tax Credit (ITC) planning.

---

## 3. Platform Architecture & Information Architecture

The platform is structured into modular educational hubs:

```
commerce-lab/
├── css/
│   ├── commerce-core.css        # Academic design system, dark/light themes, typography
│   └── commerce-labs.css        # Interactive lab widgets, T-accounts, equation bars, formula bars
├── js/
│   ├── core.js                  # Theme toggling, toasts, ProgressStore local persistence
│   ├── accounting-engine.js     # Real double-entry ledger & financial statement generator
│   ├── excel-engine.js          # In-browser formula parser (SUM, AVERAGE, SUMIF, COUNTIF, XLOOKUP)
│   ├── mis-engine.js            # Business intelligence & executive KPI summary aggregations
│   ├── calculator-engine.js     # 16 financial & business calculators with formula breakdowns
│   └── data/
│       ├── accounting-data.js   # 8 realistic Indian commercial transactions with dual-aspect rules
│       ├── excel-datasets.js    # Sales & expense registers + formula challenges
│       ├── tax-rules.js         # Versioned FY 2024-25 GST slabs & statutory knowledge base
│       └── quizzes-data.js      # Master multiple-choice conceptual questions
├── learn/                       # 6 Master Learning Pathways
├── accounting-lab/              # Interactive double-entry simulator with T-accounts & equation bar
├── business-lab/                # Break-even simulator, unit economics & small business case studies
├── tax-lab/                     # India GST pipeline simulator (ITC offset) & statutory citations
├── excel-lab/                   # Interactive spreadsheet formula sandbox & challenges
├── mis-lab/                     # Executive MIS reporting dashboard (KPIs, aging, category share)
├── calculators/                 # 16 educational financial & business calculators
├── textbooks/                   # 17 textbook chapters with embedded SVG models & Web Speech TTS
├── cheatsheets/                 # Golden Rules, ALCRE, Financial Ratios, and Excel Shortcuts
├── projects/                    # Graded Bronze, Silver, and Gold practical assignments with rubrics
├── quiz/                        # Interactive concept quiz bank with instant pedagogical feedback
├── teacher-hub/                 # Lesson plans, classroom activities, and holistic grading rubrics
├── dashboard/                   # Local-first student mastery and progress portal
├── tests/                       # Automated unit tests using Node.js native test runner
├── package.json                 # Project configuration & npm test scripts
└── vercel.json                  # Clean static routing configuration for Vercel deployment
```

---

## 4. Key Interactive Laboratories

### 1. Interactive Accounting Simulator (`/accounting-lab/`)
- **Live Equation Bar:** Real-time validation of `Total Assets = Total Liabilities + Capital`.
- **Synchronous Posting:** Toggle transactions on/off to watch real-time updates across the Journal, T-Accounts, Trial Balance, P&L, and Balance Sheet.
- **"Explain This Entry" Modal:** Deconstructs transactions using both traditional British Golden Rules and American Modern ALCRE rules.

### 2. Business & Unit Economics Lab (`/business-lab/`)
- **Dynamic Break-Even Simulator:** Real-time sliders for Fixed Costs, Selling Price, Variable Costs, and Sales Volume.
- **Preset Indian Case Studies:** Delhi Boutique, Bengaluru Cafe, Mumbai Kirana, and Ahmedabad Mobile Store.
- **Commercial Insights:** Automatic computation of Unit Contribution Margin, Break-Even Units, Break-Even Turnover, and Margin of Safety.

### 3. India Taxation & GST Lab (`/tax-lab/`)
- **Statutory Decoupling:** Tax rules, rate slabs (0%, 5%, 12%, 18%, 28%), and thresholds are explicitly versioned for **Financial Year 2024-25** and cite official government sources ([cbic-gst.gov.in](https://cbic-gst.gov.in) and [incometax.gov.in](https://incometax.gov.in)).
- **Input Tax Credit (ITC) Simulator:** Visual pipeline demonstrating purchase taxes paid (Input Tax), sales taxes collected (Output Tax), and net liability payable without cascading.
- **Statutory Disclaimer:** Clearly states that all calculations are for educational and conceptual instruction, not professional tax advice.

### 4. Excel & MIS Reporting Lab (`/excel-lab/` & `/mis-lab/`)
- **In-Browser Formula Engine:** Evaluate `=SUM()`, `=AVERAGE()`, `=SUMIF()`, `=COUNTIF()`, `=XLOOKUP()`, and financial arithmetic against real Indian commerce registers.
- **Executive MIS Dashboards:** Real-time KPI metric cards (Gross Margin, Net Operating Margin, AOV, Expense Ratio), territory breakdowns, and an Accounts Receivable Aging Schedule (0-30, 31-60, 61-90, >90 days).

### 5. 16 Educational Financial Calculators (`/calculators/`)
Every calculator displays the mathematical formula, arithmetic steps, and plain-English business interpretation:
1. Profit & Loss (Absolute & Percentage)
2. Gross Margin vs. Markup Comparison
3. Break-Even Point (Units & Revenue)
4. Straight-Line Method (SLM) Depreciation
5. Written Down Value (WDV) Depreciation
6. Working Capital & Current Ratio
7. Quick (Acid-Test) Ratio
8. Business Loan EMI & Total Interest Amortization
9. Operating Profit Margin
10. Return on Capital Employed (ROCE)
11. Inventory Turnover Ratio
12. Trade Discount vs. Cash Discount
13. Net Present Value (NPV) Concept
14. Debt-to-Equity Ratio
15. Cost of Goods Sold (COGS)
16. Compound Annual Growth Rate (CAGR)

### 6. Textbooks with Embedded SVG Models (`/textbooks/`)
- 17 structured chapters.
- Embedded vector SVG diagrams (Accounting Equation balance scale, 5-stage accounting cycle, Break-even curves).
- Built-in Web Speech API Text-to-Speech narration for accessible audio listening.

---

## 5. Verification & Testing

Commerce Lab uses Node.js native test runner (`node --test`) with zero external dependency overhead:

```bash
npm test
```

### Test Suites Included:
- `tests/accounting.test.js`: Proves double-entry debit-credit equality, Trial Balance balancing, and the invariant Accounting Equation `Assets = Liabilities + Capital`.
- `tests/tax.test.js`: Verifies intra-state and inter-state GST calculations, Input Tax Credit offsetting, and excess credit carry-forward.
- `tests/calculators.test.js`: Verifies Profit & Loss, Markup vs. Margin, Break-even units, SLM/WDV depreciation, and Loan EMI formulas.
- `tests/excel.test.js`: Validates `SUM`, `AVERAGE`, `COUNT`, `SUMIF`, and `XLOOKUP` formula parsing.

---

## 6. How to Run Locally

### Via XAMPP (Apache)
1. Copy or clone this folder into your XAMPP web root:
   ```
   C:\xampp\htdocs\commerce-lab
   ```
2. Start Apache from the XAMPP Control Panel.
3. Open your browser and navigate to:
   ```
   http://localhost/commerce-lab/
   ```

### Via Any Static Local Server
```bash
npx serve .
# or
python -m http.server 8000
```

---

## 7. Deployment to Vercel

The project includes a production `vercel.json` and static asset routing. Deploy instantly via the Vercel CLI:

```bash
npm i -g vercel
vercel deploy --prod
```

---

## 8. Dedication & Credits

© 2026 **Commerce Lab**.  
Dedicated to **Beneficial Knowledge (*'Ilm Nāfi'*)**, Digital Stewardship & Craftsmanship.  
Designed for **Yasir Rasool** • [https://github.com/myasirdotin/](https://github.com/myasirdotin/)
