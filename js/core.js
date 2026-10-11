/**
 * Commerce Lab - Core Application Utilities
 * Theme Management, Toasts, Student Progress Tracking, Pathway Recommender.
 * Navigation (header / drawer / tab bar / footer) lives in nav.js.
 */

import { renderSiteChrome, markUnseenUpdates } from './nav.js';

// Apply the saved theme as early as possible to avoid a light-mode flash.
try {
  const early = localStorage.getItem('commerce_lab_theme')
    || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', early);
} catch (e) { /* storage unavailable */ }

// ─── Theme Management (Light / Dark) ─────────────────────────────
export function initTheme() {
  const savedTheme = localStorage.getItem('commerce_lab_theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = savedTheme || (prefersDark ? 'dark' : 'light');

  document.documentElement.setAttribute('data-theme', theme);
  updateThemeToggleIcon(theme);
}

export function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', nextTheme);
  localStorage.setItem('commerce_lab_theme', nextTheme);
  updateThemeToggleIcon(nextTheme);
}

function updateThemeToggleIcon(theme) {
  const toggleBtns = document.querySelectorAll('#themeToggle, .theme-toggle, .theme-toggle-btn');
  toggleBtns.forEach(btn => {
    btn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
    btn.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
    btn.setAttribute('title', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
  });
}

// ─── Toast Notifications ─────────────────────────────────────────
export const Toast = {
  show(message, type = 'success') {
    let toastContainer = document.getElementById('commToastContainer');
    if (!toastContainer) {
      toastContainer = document.createElement('div');
      toastContainer.id = 'commToastContainer';
      toastContainer.style.cssText = `
        position: fixed;
        bottom: calc(var(--tabbar-h, 0px) + env(safe-area-inset-bottom, 0px) + 16px);
        right: 16px;
        left: 16px;
        align-items: flex-end;
        z-index: 9999;
        display: flex;
        flex-direction: column;
        gap: 8px;
        pointer-events: none;
      `;
      document.body.appendChild(toastContainer);
    }

    const toast = document.createElement('div');
    const bg = type === 'success' ? '#059669' : type === 'error' ? '#dc2626' : '#2563eb';
    toast.style.cssText = `
      background: ${bg};
      color: #ffffff;
      padding: 10px 18px;
      border-radius: 8px;
      font-size: 0.88rem;
      font-weight: 600;
      box-shadow: 0 4px 14px rgba(0,0,0,0.2);
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      opacity: 0;
      transform: translateY(10px);
      pointer-events: auto;
    `;
    toast.textContent = message;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '1';
      toast.style.transform = 'translateY(0)';
    }, 20);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }
};

// ─── Student Learning Progress System (localStorage) ─────────────
export const ProgressStore = {
  KEY: 'commerce_lab_progress_v1',
  get() {
    try {
      return JSON.parse(localStorage.getItem(this.KEY)) || {
        completedLessons: [],
        labActivities: [],
        quizScores: {},
        activePathway: 'Foundations'
      };
    } catch (e) {
      return { completedLessons: [], labActivities: [], quizScores: {}, activePathway: 'Foundations' };
    }
  },
  save(data) {
    localStorage.setItem(this.KEY, JSON.stringify(data));
  },
  recordLesson(lessonTitle) {
    const p = this.get();
    if (!p.completedLessons.includes(lessonTitle)) {
      p.completedLessons.push(lessonTitle);
      this.save(p);
    }
  },
  recordLabActivity(labName) {
    const p = this.get();
    if (!p.labActivities.includes(labName)) {
      p.labActivities.push(labName);
      this.save(p);
    }
  },
  recordQuizScore(qId, scorePct) {
    const p = this.get();
    p.quizScores[qId] = scorePct;
    this.save(p);
  },
  setPathway(pathway) {
    const p = this.get();
    p.activePathway = pathway;
    this.save(p);
  },
  reset() {
    localStorage.removeItem(this.KEY);
  }
};

// ─── Pathway Recommender ───────────────────────────────────────────
export function initPathwaySelector() {
  const pills = document.querySelectorAll('.pathway-pill');
  const resultCard = document.getElementById('pathwayRecommendation');
  const recTitle = document.getElementById('recTitle');
  const recDesc = document.getElementById('recDesc');
  const recActionBtn = document.getElementById('recActionBtn');

  if (!pills.length || !resultCard) return;

  const pathways = {
    start: {
      title: 'Journey 1: Start a Business (India)',
      desc: 'Nine practical lessons: idea to plan, legal structure, registrations, bank & payments, invoicing, bookkeeping, pricing, the compliance calendar and ethics.',
      url: 'learn/index.html#hub-start',
      btnText: 'Start journey 1 →'
    },
    foundations: {
      title: 'Journey 2: Accounting Foundations',
      desc: 'Start from scratch: the accounting equation, debit & credit rules, journal, ledger, trial balance, cash book and bank reconciliation.',
      url: 'learn/index.html#hub-acc',
      btnText: 'Start journey 2 →'
    },
    school: {
      title: 'Journeys 2 & 3: Class 11-12 Accountancy',
      desc: 'Journal entries, ledger posting, trial balance, BRS, depreciation (SLM/WDV), provisions and final accounts, with worked examples for every topic.',
      url: 'learn/index.html#hub-acc',
      btnText: 'Open journey 2, then 3 →'
    },
    practical: {
      title: 'Journey 3: Adjustments & Final Accounts',
      desc: 'How transactions become the Trading A/c, Profit & Loss A/c and Balance Sheet, and how to read the ratios like an owner.',
      url: 'learn/index.html#hub-fin',
      btnText: 'Start journey 3 →'
    },
    islamic: {
      title: 'Islamic Standards & Fiqh al-Mu\'amalat',
      desc: 'Audit contracts for Riba, Gharar, and fraud. Structure Halal Murabahah and compute AAOIFI Business Zakat.',
      url: 'islamic-standards/index.html',
      btnText: 'Open Islamic Standards Advisor →'
    },
    tax: {
      title: 'Journey 5: Tax & GST (India)',
      desc: 'GST slabs (0/5/18/40), input tax credit, returns and composition, income tax for a small business, and TDS. Then practise in the Tax Lab.',
      url: 'learn/index.html#hub-tax',
      btnText: 'Start journey 5 →'
    },
    excel: {
      title: 'Journey 6: Excel & MIS Reporting',
      desc: 'Registers and formulas that answer business questions, the monthly MIS pack, and budget vs actual. Then practise in the Excel & MIS labs.',
      url: 'learn/index.html#hub-mis',
      btnText: 'Start journey 6 →'
    },
    business: {
      title: 'Journey 4: Business & Management',
      desc: 'Costs and break-even, working capital and cash flow, inventory, managing with SOPs and KPIs, and channel margins.',
      url: 'learn/index.html#hub-biz',
      btnText: 'Start journey 4 →'
    },
    teacher: {
      title: 'Teacher Hub & Lesson Plans',
      desc: 'Ready-to-teach 45-minute lesson plans, classroom activity guides, student worksheets, and competency-based rubrics.',
      url: 'teacher-hub/index.html',
      btnText: 'Open Teacher Hub →'
    }
  };

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const key = pill.getAttribute('data-pathway') || 'foundations';
      const rec = pathways[key] || pathways.foundations;

      recTitle.textContent = rec.title;
      recDesc.textContent = rec.desc;
      recActionBtn.textContent = rec.btnText;
      recActionBtn.href = rec.url;

      resultCard.style.display = 'flex';
      ProgressStore.setPathway(rec.title);
    });
  });
}

// ─── Offline support (installable app) ───────────────────────────
// sw.js sits at the site root, so its scope covers every page.
if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register(new URL('../sw.js', import.meta.url), { scope: new URL('../', import.meta.url).pathname })
      .catch(err => console.warn('Service worker not registered:', err));
  });
}

// ─── Initialize on DOM Ready ──────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderSiteChrome();
  markUnseenUpdates();
  initTheme();
  initPathwaySelector();

  // Attach theme toggle button
  document.querySelectorAll('#themeToggle, .theme-toggle, .theme-toggle-btn').forEach(btn => {
    btn.addEventListener('click', toggleTheme);
  });
});
