/**
 * Commerce Lab - Core Application Utilities
 * Navigation, Theme Management, Student Progress Tracking
 */

(function () {
  'use strict';

  // ─── Theme Management (Light / Dark) ─────────────────────────────
  function initTheme() {
    const savedTheme = localStorage.getItem('commerce_lab_theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = savedTheme || (prefersDark ? 'dark' : 'light');

    document.documentElement.setAttribute('data-theme', theme);
    updateThemeToggleIcon(theme);
  }

  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('commerce_lab_theme', nextTheme);
    updateThemeToggleIcon(nextTheme);
  }

  function updateThemeToggleIcon(theme) {
    const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
    toggleBtns.forEach(btn => {
      btn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
      btn.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
      btn.setAttribute('title', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
    });
  }

  // ─── Toast Notifications ─────────────────────────────────────────
  function showToast(message, type = 'success') {
    let toastContainer = document.getElementById('commToastContainer');
    if (!toastContainer) {
      toastContainer = document.createElement('div');
      toastContainer.id = 'commToastContainer';
      toastContainer.style.cssText = `
        position: fixed;
        bottom: 24px;
        right: 24px;
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

  // ─── Student Learning Progress System (localStorage) ─────────────
  const ProgressStore = {
    KEY: 'commerce_lab_progress_v1',
    get() {
      try {
        return JSON.parse(localStorage.getItem(this.KEY)) || {
          completedLessons: [],
          quizScores: {},
          completedProjects: [],
          streakDays: 1,
          lastActiveDate: new Date().toISOString().split('T')[0],
          masteredSkills: []
        };
      } catch (e) {
        return { completedLessons: [], quizScores: {}, completedProjects: [], streakDays: 1, lastActiveDate: '', masteredSkills: [] };
      }
    },
    save(data) {
      localStorage.setItem(this.KEY, JSON.stringify(data));
    },
    markLessonComplete(lessonId, skillTag) {
      const p = this.get();
      if (!p.completedLessons.includes(lessonId)) {
        p.completedLessons.push(lessonId);
      }
      if (skillTag && !p.masteredSkills.includes(skillTag)) {
        p.masteredSkills.push(skillTag);
      }
      this.updateStreak(p);
      this.save(p);
      showToast('Lesson marked complete! Progress updated.');
    },
    recordQuiz(quizId, score, total) {
      const p = this.get();
      p.quizScores[quizId] = { score, total, date: new Date().toISOString() };
      this.updateStreak(p);
      this.save(p);
    },
    updateStreak(p) {
      const today = new Date().toISOString().split('T')[0];
      if (p.lastActiveDate !== today) {
        const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
        if (p.lastActiveDate === yesterday) {
          p.streakDays = (p.streakDays || 1) + 1;
        } else {
          p.streakDays = 1;
        }
        p.lastActiveDate = today;
      }
    }
  };

  // ─── Quick Pathway Recommender ───────────────────────────────────
  function initPathwaySelector() {
    const selectorBtns = document.querySelectorAll('.pathway-pill-btn');
    const recBox = document.getElementById('pathwayRecommendationBox');
    if (!selectorBtns.length || !recBox) return;

    const pathways = {
      'new': {
        title: 'Accounting Foundations (Pathway 1)',
        desc: 'Start from absolute scratch! Learn what assets, liabilities, and capital are with the intuitive accounting equation.',
        link: 'learn/accounting/index.html',
        btnText: 'Start Accounting Foundations →'
      },
      'school': {
        title: 'Class 11 & 12 Commerce Mastery (Pathway 2)',
        desc: 'Comprehensive coverage of Journals, Ledgers, Trial Balance, Depreciation, BRS, and Final Accounts with Trading & P&L.',
        link: 'learn/financial-accounting/index.html',
        btnText: 'Open School Commerce Pathway →'
      },
      'practical': {
        title: 'Financial Statements Mastery (Pathway 3)',
        desc: 'Understand how real businesses transform daily receipts and invoices into Trading Accounts, P&L, and Balance Sheets.',
        link: 'learn/financial-statements/index.html',
        btnText: 'Master Financial Statements →'
      },
      'tax': {
        title: 'Indian Taxation & GST Lab (Pathway 5)',
        desc: 'Learn practical GST computation, Input Tax Credit (ITC), and business tax concepts with current FY rules.',
        link: 'tax-lab/index.html',
        btnText: 'Enter Taxation Lab →'
      },
      'excel': {
        title: 'Excel for Commerce & Business (Pathway 6)',
        desc: 'Master essential commerce formulas: SUMIF, XLOOKUP, Nested IF, and real Indian business dataset analysis.',
        link: 'excel-lab/index.html',
        btnText: 'Launch Excel Sandbox →'
      },
      'business': {
        title: 'Business & Entrepreneurship (Pathway 4)',
        desc: 'Break-even analysis, unit margins, working capital, and cash-flow management for small business owners.',
        link: 'business-lab/index.html',
        btnText: 'Open Business Lab →'
      },
      'teacher': {
        title: 'Teacher Hub & Lesson Plans',
        desc: 'Classroom curriculum maps, downloadable question banks, grading rubrics, and interactive lab teaching guides.',
        link: 'teacher-hub/index.html',
        btnText: 'Access Teacher Hub →'
      }
    };

    selectorBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        selectorBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const key = btn.getAttribute('data-persona');
        const rec = pathways[key] || pathways['new'];

        recBox.innerHTML = `
          <div>
            <div style="font-size: 0.78rem; font-weight: 800; text-transform: uppercase; color: var(--brand-emerald); letter-spacing: 0.05em;">Recommended Learning Pathway</div>
            <h4 style="font-size: 1.15rem; font-weight: 800; color: var(--text-primary); margin: 0.25rem 0;">${rec.title}</h4>
            <p style="font-size: 0.88rem; color: var(--text-secondary); max-width: 600px;">${rec.desc}</p>
          </div>
          <a href="${rec.link}" class="btn-primary" style="align-self: center;">${rec.btnText}</a>
        `;
      });
    });
  }

  // ─── DOM Ready Initialization ─────────────────────────────────────
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initPathwaySelector();

    // Attach theme toggle button listeners
    document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
      btn.addEventListener('click', toggleTheme);
    });
  });

  // Global Exports
  window.CommerceCore = {
    toggleTheme,
    showToast,
    ProgressStore
  };
})();
