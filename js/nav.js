/**
 * Commerce Lab - Site Chrome (header, mobile drawer, bottom tab bar, footer)
 *
 * SINGLE SOURCE OF TRUTH FOR NAVIGATION.
 * Every page contains two empty placeholders that this module fills in:
 *
 *   <header class="site-header" id="siteHeader"></header>
 *   <footer class="site-footer" id="siteFooter"></footer>
 *
 * To add, rename or reorder a nav item, edit the NAV object below. Nothing
 * else needs to change - all 15 pages pick it up on the next load.
 *
 * Links are resolved against the site root (the folder above /js/), so the
 * same markup works at http://localhost/commerce-lab/ and at a Vercel root.
 */

const ROOT = new URL('../', import.meta.url);

// ─── Navigation data ─────────────────────────────────────────────
export const NAV = {
  brand: { badge: 'CL', title: 'Commerce Lab', sub: 'Practical Accounting & Business' },

  // Shown as top-level links on desktop and as the first drawer group on mobile.
  primary: [
    { key: 'home',  label: 'Home',  icon: '🏠', href: 'index.html',       desc: 'Platform overview & pathway picker' },
    { key: 'learn', label: 'Learn', icon: '🎓', href: 'learn/index.html', desc: '6 structured learning pathways' }
  ],

  groups: [
    {
      key: 'labs', label: 'Labs', icon: '🧪',
      items: [
        { key: 'accounting-lab',  icon: '⚖️', href: 'accounting-lab/index.html',  title: 'Accounting Simulator',    desc: 'Double-entry, T-Accounts & equation bar' },
        { key: 'business-lab',    icon: '🏬', href: 'business-lab/index.html',    title: 'Business & BEP Lab',      desc: 'Break-even simulator & unit economics' },
        { key: 'tax-lab',         icon: '🏛️', href: 'tax-lab/index.html',         title: 'India Tax & GST Lab',     desc: 'Input Tax Credit pipeline (FY 24-25)' },
        { key: 'excel-lab',       icon: '📊', href: 'excel-lab/index.html',       title: 'Excel Formula Studio',    desc: 'SUMIF, XLOOKUP & data challenges' },
        { key: 'mis-lab',         icon: '📈', href: 'mis-lab/index.html',         title: 'MIS Executive Dashboard', desc: 'KPI metric cards & receivables aging' },
        { key: 'calculators',     icon: '🧮', href: 'calculators/index.html',     title: '16 Financial Calculators', desc: 'Formulas & step-by-step working' }
      ]
    },
    {
      key: 'resources', label: 'Resources', icon: '📚',
      items: [
        { key: 'textbooks',   icon: '📖', href: 'textbooks/index.html',   title: 'Textbooks & SVG Models', desc: '17 chapters with audio narration' },
        { key: 'cheatsheets', icon: '📑', href: 'cheatsheets/index.html', title: 'Cheatsheets & Rules',    desc: 'Golden Rules, ALCRE & ratio sheet' },
        { key: 'projects',    icon: '🏆', href: 'projects/index.html',    title: 'Practical Projects',     desc: 'Bronze, Silver & Gold rubrics' },
        { key: 'quiz',        icon: '✍️', href: 'quiz/index.html',        title: 'Concept Quizzes',        desc: 'Self-assessments with explanations' },
        { key: 'teacher-hub', icon: '🍎', href: 'teacher-hub/index.html', title: 'Teacher Hub',            desc: 'Lesson plans, worksheets & rubrics' }
      ]
    }
  ],

  // Standalone links after the groups.
  standalone: [
    { key: 'islamic-standards', label: 'Islamic Standards', icon: '☪️', href: 'islamic-standards/index.html', desc: 'Fiqh al-Mu\'amalat advisor & Zakat' },
    { key: 'dashboard',         label: 'My Progress',       icon: '📋', href: 'dashboard/index.html',         desc: 'Your local learning record', highlight: true }
  ],

  // Bottom tab bar (mobile only). `sheet` opens the drawer instead of navigating.
  tabs: [
    { key: 'home',  label: 'Home',  icon: '🏠', href: 'index.html' },
    { key: 'learn', label: 'Learn', icon: '🎓', href: 'learn/index.html' },
    { key: 'labs',  label: 'Labs',  icon: '🧪', sheet: 'labs' },
    { key: 'quiz',  label: 'Quiz',  icon: '✍️', href: 'quiz/index.html' },
    { key: 'menu',  label: 'Menu',  icon: '☰',  sheet: 'all' }
  ],

  // Per-page subtitle shown under the brand name.
  pageSubtitles: {
    'home': 'Practical Accounting & Business',
    'learn': 'Curriculum & Pathways',
    'accounting-lab': 'Accounting Simulator',
    'business-lab': 'Business & Unit Economics',
    'tax-lab': 'India Taxation Lab',
    'excel-lab': 'Excel & MIS Studio',
    'mis-lab': 'Executive MIS Studio',
    'calculators': 'Financial Calculators',
    'textbooks': 'Textbook Library',
    'cheatsheets': 'Quick Reference Cheatsheets',
    'projects': 'Practical Projects',
    'quiz': 'Concept Quizzes',
    'teacher-hub': 'Teacher Hub',
    'islamic-standards': 'Islamic Standards & Ethics',
    'dashboard': 'Progress Portal'
  },

  footer: {
    desc: 'An open educational platform dedicated to commerce literacy, double-entry bookkeeping, business simulation, Indian taxation, and spreadsheet craftsmanship.',
    columns: [
      { heading: 'Interactive Labs', links: [
        ['accounting-lab/index.html', 'Accounting Simulator'],
        ['excel-lab/index.html', 'Excel Formula Lab'],
        ['mis-lab/index.html', 'MIS Executive Dashboard'],
        ['tax-lab/index.html', 'India GST & Tax Lab'],
        ['business-lab/index.html', 'Business Break-Even Lab'],
        ['calculators/index.html', '16 Financial Calculators']
      ]},
      { heading: 'Learning Hub', links: [
        ['learn/index.html', 'Master Curriculum'],
        ['textbooks/index.html', 'Textbook Library'],
        ['cheatsheets/index.html', 'Cheatsheets & Rules'],
        ['projects/index.html', 'Practical Projects'],
        ['quiz/index.html', 'Concept Quizzes'],
        ['teacher-hub/index.html', 'Teacher Hub & Rubrics']
      ]},
      { heading: 'Compliance & Standards', links: [
        ['islamic-standards/index.html', 'Islamic Standards (AAOIFI)'],
        ['tax-lab/index.html#disclaimer', 'Tax FY 2024-25 Notes'],
        ['https://cbic-gst.gov.in', 'CBIC GST Portal ↗', true],
        ['https://incometax.gov.in', 'Income Tax Portal ↗', true],
        ['dashboard/index.html', 'Student Progress Portal']
      ]}
    ]
  }
};

// ─── Helpers ──────────────────────────────────────────────────────
const url = (href) => /^https?:/.test(href) ? href : new URL(href, ROOT).href;

const esc = (s) => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const LAB_KEYS = NAV.groups.find(g => g.key === 'labs').items.map(i => i.key);

/** Which page are we on? 'home', 'tax-lab', 'learn', ... */
export function currentPageKey() {
  let rel = decodeURIComponent(location.pathname);
  if (rel.startsWith(ROOT.pathname)) rel = rel.slice(ROOT.pathname.length);
  const seg = rel.split('/').filter(Boolean)[0] || '';
  return (!seg || seg === 'index.html') ? 'home' : seg;
}

function groupOf(pageKey) {
  const g = NAV.groups.find(gr => gr.items.some(i => i.key === pageKey));
  return g ? g.key : null;
}

// ─── Markup builders ──────────────────────────────────────────────
function dropdownItem(item, page) {
  const active = item.key === page ? ' active' : '';
  return `
    <a href="${url(item.href)}" class="dropdown-item${active}"${active ? ' aria-current="page"' : ''}>
      <span class="dropdown-item-icon" aria-hidden="true">${item.icon}</span>
      <span class="dropdown-item-info">
        <span class="dropdown-item-title">${esc(item.title)}</span>
        <span class="dropdown-item-desc">${esc(item.desc)}</span>
      </span>
    </a>`;
}

function buildHeader(page) {
  const activeGroup = groupOf(page);
  const sub = NAV.pageSubtitles[page] || NAV.brand.sub;

  const primary = NAV.primary.map(l =>
    `<a href="${url(l.href)}"${l.key === page ? ' class="active" aria-current="page"' : ''}>${esc(l.label)}</a>`
  ).join('');

  const groups = NAV.groups.map(g => `
    <div class="nav-dropdown" data-group="${g.key}">
      <button class="dropdown-trigger${activeGroup === g.key ? ' active' : ''}" type="button" aria-haspopup="true" aria-expanded="false">
        ${esc(g.label)} <span class="dropdown-chevron" aria-hidden="true">▼</span>
      </button>
      <div class="dropdown-menu" role="menu">
        ${g.items.map(i => dropdownItem(i, page)).join('')}
      </div>
    </div>`).join('');

  const standalone = NAV.standalone.map(l => {
    const cls = [l.key === page ? 'active' : '', l.highlight ? 'nav-btn-highlight' : ''].filter(Boolean).join(' ');
    return `<a href="${url(l.href)}"${cls ? ` class="${cls}"` : ''}${l.key === page ? ' aria-current="page"' : ''}>${esc(l.label)}</a>`;
  }).join('');

  return `
    <div class="nav-container">
      <a href="${url('index.html')}" class="nav-brand" aria-label="Commerce Lab home">
        <span class="brand-badge" aria-hidden="true">${NAV.brand.badge}</span>
        <span class="brand-text">
          <span class="brand-title">${esc(NAV.brand.title)}</span>
          <span class="brand-sub">${esc(sub)}</span>
        </span>
      </a>

      <nav class="nav-links" id="navLinks" aria-label="Primary">
        ${primary}
        ${groups}
        ${standalone}
      </nav>

      <div class="header-actions">
        <button class="theme-toggle" id="themeToggle" type="button" aria-label="Toggle colour theme">🌙</button>
        <button class="mobile-menu-btn" id="mobileMenuBtn" type="button" aria-label="Open menu" aria-controls="navDrawer" aria-expanded="false">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </div>
    </div>`;
}

function drawerItem(item, page, label) {
  const active = item.key === page;
  return `
    <a href="${url(item.href)}" class="drawer-item${active ? ' active' : ''}"${active ? ' aria-current="page"' : ''}>
      <span class="drawer-item-icon" aria-hidden="true">${item.icon}</span>
      <span class="drawer-item-info">
        <span class="drawer-item-title">${esc(label)}</span>
        ${item.desc ? `<span class="drawer-item-desc">${esc(item.desc)}</span>` : ''}
      </span>
      <span class="drawer-item-arrow" aria-hidden="true">›</span>
    </a>`;
}

function buildDrawer(page) {
  const sections = [];

  sections.push(`
    <section class="drawer-group" data-group="start">
      <h3 class="drawer-group-title">Start here</h3>
      ${NAV.primary.map(l => drawerItem(l, page, l.label)).join('')}
    </section>`);

  NAV.groups.forEach(g => {
    sections.push(`
      <section class="drawer-group" data-group="${g.key}" id="drawerGroup-${g.key}">
        <h3 class="drawer-group-title">${g.icon} ${esc(g.label)}</h3>
        ${g.items.map(i => drawerItem(i, page, i.title)).join('')}
      </section>`);
  });

  sections.push(`
    <section class="drawer-group" data-group="more">
      <h3 class="drawer-group-title">More</h3>
      ${NAV.standalone.map(l => drawerItem(l, page, l.label)).join('')}
    </section>`);

  return `
    <div class="nav-drawer" id="navDrawer" hidden>
      <div class="drawer-backdrop" data-drawer-close></div>
      <div class="drawer-panel" role="dialog" aria-modal="true" aria-label="Site navigation">
        <div class="drawer-head">
          <span class="drawer-title">Navigate</span>
          <button class="drawer-close" type="button" aria-label="Close menu" data-drawer-close>✕</button>
        </div>
        <div class="drawer-body">
          ${sections.join('')}
        </div>
      </div>
    </div>`;
}

function buildTabBar(page) {
  const inLabs = LAB_KEYS.includes(page);
  return `
    <nav class="tab-bar" aria-label="Quick navigation">
      ${NAV.tabs.map(t => {
        const active = t.key === page || (t.key === 'labs' && inLabs);
        const cls = `tab-item${active ? ' active' : ''}`;
        if (t.sheet) {
          return `<button type="button" class="${cls}" data-open-sheet="${t.sheet}" aria-label="${esc(t.label)}">
                    <span class="tab-icon" aria-hidden="true">${t.icon}</span><span class="tab-label">${esc(t.label)}</span>
                  </button>`;
        }
        return `<a href="${url(t.href)}" class="${cls}"${active ? ' aria-current="page"' : ''}>
                  <span class="tab-icon" aria-hidden="true">${t.icon}</span><span class="tab-label">${esc(t.label)}</span>
                </a>`;
      }).join('')}
    </nav>`;
}

function buildFooter() {
  const cols = NAV.footer.columns.map(c => `
    <div class="footer-links-col">
      <h4>${esc(c.heading)}</h4>
      <ul>
        ${c.links.map(([href, label, ext]) =>
          `<li><a href="${url(href)}"${ext ? ' target="_blank" rel="noopener"' : ''}>${esc(label)}</a></li>`
        ).join('')}
      </ul>
    </div>`).join('');

  return `
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand-col">
          <div class="footer-brand">
            <span class="brand-badge" aria-hidden="true">${NAV.brand.badge}</span>
            <span class="footer-brand-title">${esc(NAV.brand.title)}</span>
          </div>
          <p class="footer-desc">${esc(NAV.footer.desc)}</p>
          <div class="footer-dedication">
            <p><strong>Dedicated to Beneficial Knowledge (<em>'Ilm Nāfi'</em>), Digital Stewardship &amp; Craftsmanship.</strong></p>
            <p class="designer-credit">Designed for <strong>Yasir Rasool</strong> &bull; <a href="https://github.com/myasirdotin/" target="_blank" rel="noopener">github.com/myasirdotin</a></p>
          </div>
        </div>
        ${cols}
      </div>
      <div class="footer-bottom">
        <p>&copy; ${new Date().getFullYear()} Commerce Lab. All educational materials are provided for learning and conceptual instruction.</p>
        <p class="footer-sub-links"><span>Zero-tracking</span> &bull; <span>Local-first storage</span> &bull; <span>Deployable to Vercel</span></p>
      </div>
    </div>`;
}

// ─── Behaviour ────────────────────────────────────────────────────
function initDrawer() {
  const drawer = document.getElementById('navDrawer');
  const menuBtn = document.getElementById('mobileMenuBtn');
  if (!drawer) return;

  let lastFocus = null;

  const open = (group) => {
    lastFocus = document.activeElement;
    drawer.hidden = false;
    // Force a frame so the CSS transition runs.
    requestAnimationFrame(() => drawer.classList.add('is-open'));
    document.body.classList.add('drawer-open');
    menuBtn && menuBtn.setAttribute('aria-expanded', 'true');

    const body = drawer.querySelector('.drawer-body');
    body.scrollTop = 0;
    if (group && group !== 'all') {
      const target = document.getElementById(`drawerGroup-${group}`);
      if (target) {
        body.scrollTop = target.offsetTop - 8;
        target.classList.add('is-highlight');
        setTimeout(() => target.classList.remove('is-highlight'), 1200);
      }
    }
    const closeBtn = drawer.querySelector('.drawer-close');
    closeBtn && closeBtn.focus({ preventScroll: true });
  };

  const close = () => {
    drawer.classList.remove('is-open');
    document.body.classList.remove('drawer-open');
    menuBtn && menuBtn.setAttribute('aria-expanded', 'false');
    setTimeout(() => { drawer.hidden = true; }, 220);
    if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus({ preventScroll: true });
  };

  menuBtn && menuBtn.addEventListener('click', () => open('all'));
  document.querySelectorAll('[data-open-sheet]').forEach(btn =>
    btn.addEventListener('click', () => open(btn.getAttribute('data-open-sheet')))
  );
  drawer.querySelectorAll('[data-drawer-close]').forEach(el => el.addEventListener('click', close));
  drawer.querySelectorAll('.drawer-item').forEach(a => a.addEventListener('click', close));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !drawer.hidden) close();
  });
  // Close if the viewport grows to desktop width while open.
  window.matchMedia('(min-width: 900px)').addEventListener('change', (e) => { if (e.matches && !drawer.hidden) close(); });
}

function initDesktopDropdowns() {
  const dropdowns = Array.from(document.querySelectorAll('.site-header .nav-dropdown'));
  if (!dropdowns.length) return;

  const closeAll = (except) => dropdowns.forEach(d => {
    if (d !== except) {
      d.classList.remove('is-open');
      d.querySelector('.dropdown-trigger').setAttribute('aria-expanded', 'false');
    }
  });

  dropdowns.forEach(d => {
    const trigger = d.querySelector('.dropdown-trigger');
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const willOpen = !d.classList.contains('is-open');
      closeAll(d);
      d.classList.toggle('is-open', willOpen);
      trigger.setAttribute('aria-expanded', String(willOpen));
    });
  });

  document.addEventListener('click', () => closeAll());
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeAll(); });
}

/** Wrap any bare <table> so it scrolls sideways on narrow screens. */
export function wrapTables(scope = document) {
  scope.querySelectorAll('table').forEach(t => {
    if (t.closest('.table-responsive')) return;
    const wrap = document.createElement('div');
    wrap.className = 'table-responsive';
    t.parentNode.insertBefore(wrap, t);
    wrap.appendChild(t);
  });
}

// ─── Entry point ──────────────────────────────────────────────────
let rendered = false;

export function renderSiteChrome() {
  if (rendered) return;
  rendered = true;

  const page = currentPageKey();
  document.body.setAttribute('data-page', page);

  const header = document.getElementById('siteHeader') || document.querySelector('header.site-header');
  const footer = document.getElementById('siteFooter') || document.querySelector('footer.site-footer');

  if (header) {
    header.innerHTML = buildHeader(page);
    header.insertAdjacentHTML('afterend', buildDrawer(page));
  }
  if (footer) footer.innerHTML = buildFooter();
  document.body.insertAdjacentHTML('beforeend', buildTabBar(page));

  initDrawer();
  initDesktopDropdowns();
  wrapTables();

  // Tables rendered later by page scripts also get wrapped.
  const mo = new MutationObserver((muts) => {
    for (const m of muts) {
      for (const n of m.addedNodes) {
        if (n.nodeType === 1 && (n.matches('table') || n.querySelector('table'))) { wrapTables(n.parentNode || n); return; }
      }
    }
  });
  mo.observe(document.body, { childList: true, subtree: true });
}
