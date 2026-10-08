/**
 * Commerce Lab - Core Application Utilities
 * Navigation, Theme Management, Student Progress Tracking, Pathway Recommender
 */

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
    foundations: {
      title: 'Pathway 1: Accounting Foundations',
      desc: 'Start from absolute scratch! Master assets, liabilities, capital, and the foundational accounting equation.',
      url: 'learn/index.html#pathway-1',
      btnText: 'Start Foundations →'
    },
    school: {
      title: 'Pathway 2: Financial Accounting for Class 11 & 12',
      desc: 'Master journal entries, ledger posting, trial balance balancing, BRS, depreciation (SLM/WDV), and final accounts.',
      url: 'learn/index.html#pathway-2',
      btnText: 'Open Class 11-12 Curriculum →'
    },
    practical: {
      title: 'Pathway 3: Practical Financial Statements',
      desc: 'Understand how transactions become Trading A/c, Profit & Loss A/c, and Balance Sheet with realistic business numbers.',
      url: 'accounting-lab/index.html',
      btnText: 'Launch Accounting Simulator →'
    },
    islamic: {
      title: 'Islamic Standards & Fiqh al-Mu\'amalat',
      desc: 'Audit contracts for Riba, Gharar, and fraud. Structure Halal Murabahah and compute AAOIFI Business Zakat.',
      url: 'islamic-standards/index.html',
      btnText: 'Open Islamic Standards Advisor →'
    },
    tax: {
      title: 'Pathway 5: India Taxation & GST Lab',
      desc: 'Learn GST slabs (0-28%), Input Tax Credit (ITC) offsetting mechanism, and small business presumptive taxation.',
      url: 'tax-lab/index.html',
      btnText: 'Enter Tax Lab →'
    },
    excel: {
      title: 'Pathway 6: Excel for Commerce & MIS',
      desc: 'Practice real spreadsheet formulas (SUMIF, COUNTIF, XLOOKUP) and build executive management KPI dashboards.',
      url: 'excel-lab/index.html',
      btnText: 'Open Excel & MIS Studio →'
    },
    business: {
      title: 'Pathway 4: Business Economics & Entrepreneurship',
      desc: 'Master unit economics, fixed vs variable costs, contribution margin, and break-even points for Indian enterprises.',
      url: 'business-lab/index.html',
      btnText: 'Simulate Unit Economics →'
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

// ─── Mobile Menu Toggle ───────────────────────────────────────────
export function initMobileMenu() {
  const btn = document.getElementById('mobileMenuBtn');
  const nav = document.getElementById('navLinks');
  if (btn && nav) {
    btn.addEventListener('click', () => {
      nav.classList.toggle('is-open');
    });
  }

  // Handle dropdown toggle on mobile screens
  document.querySelectorAll('.dropdown-trigger').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      if (window.innerWidth <= 992) {
        e.preventDefault();
        const parent = trigger.closest('.nav-dropdown');
        if (parent) {
          parent.classList.toggle('is-expanded');
        }
      }
    });
  });
}

// ─── Initialize on DOM Ready ──────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileMenu();
  initPathwaySelector();

  // Attach theme toggle button
  document.querySelectorAll('#themeToggle, .theme-toggle, .theme-toggle-btn').forEach(btn => {
    btn.addEventListener('click', toggleTheme);
  });
});
