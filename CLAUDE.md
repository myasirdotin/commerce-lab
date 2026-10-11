# CLAUDE.md — Commerce Lab

**Read this whole file before making any change.** It is the briefing for any agent working on this project:
what is being built, for whom, how it is put together, and what must stay true.

## 1. What this is

Commerce Lab is a **static, mobile-first learning website** for commerce, accounting, business management,
ethics, Indian tax/GST and starting a business. Repo: `github.com/myasirdotin/commerce-lab` (branch `main`).
Local: `C:\xampp\htdocs\commerce-lab` → `http://localhost/commerce-lab/`. Also deployable to Vercel (`vercel.json`).

**Owner:** Yasir Rasool, who runs a real business (The Khadeejah). Two goals:
1. A **personal reference** to re-learn and quickly recall commerce/accounting/tax while running the business.
2. A **public how-to site** for others starting a business in India, and for commerce students.

## 2. Non-negotiables

- **Mobile first.** Most reading happens on a phone. Every change must work at **390px wide** with no horizontal
  scroll, readable text, and thumb-size tap targets. Check it (see §6) before calling anything done.
- **Static only.** Plain HTML/CSS/ES-module JS. No backend, no database, no build step, no framework.
  Progress and theme live in `localStorage` only.
- **Well organised.** Content is grouped into clear hubs/journeys. New content goes into the existing structure
  (registry, hubs, labs) rather than a new one-off page.
- **Correct facts.** Indian tax/legal facts must match `docs/LESSON-AUTHORING.md` §4 (verified Oct 2026, FY 2026-27).
  If a fact changes, update that file first, then the lessons and `js/data/tax-rules.js`. Hedge anything uncertain
  with "verify on the portal".
- **Educational, not advice.** Tax pages keep the disclaimer.

## 3. How it is built

| Piece | Where | Notes |
|---|---|---|
| Navigation (header, drawer, bottom tab bar, footer) | `js/nav.js` → `NAV` object | **Single source of truth.** Pages contain only empty `#siteHeader` / `#siteFooter` placeholders. Never hardcode nav in a page. |
| Theme, toasts, progress store | `js/core.js` | Imports `renderSiteChrome` from nav.js. |
| Styles | `css/commerce-core.css` (design system, nav, mobile), `css/commerce-labs.css` (lab widgets), `css/lessons.css` (lesson reader) | Light/dark via `[data-theme]`. |
| Curriculum | `js/lessons/registry.js` → `HUBS` | **Single source of truth** for the 6 journeys and lesson order. |
| Lessons | `js/lessons/<id>.js` (one module each, default export) | Rendered by `learn/lesson.html?id=<id>`. Built with helpers in `js/lesson-kit.js`. |
| Lesson rules | `docs/LESSON-AUTHORING.md` | Shape, length, style, running examples, verified facts. **Follow it for every lesson.** Exemplar: `acc-02-accounting-equation.js`. |
| Labs / tools | `accounting-lab/`, `business-lab/`, `tax-lab/`, `excel-lab/`, `mis-lab/`, `calculators/`, `islamic-standards/`, `textbooks/`, `cheatsheets/`, `projects/`, `quiz/`, `teacher-hub/`, `dashboard/` | Each is one `index.html` + engine in `js/*-engine.js` + data in `js/data/`. |
| Tax data | `js/data/tax-rules.js` | GST slabs 0/5/18/40% (since 22 Sept 2025), FY `2026-27`. |
| Glossary & revision | `learn/glossary.html`, `learn/revise.html?hub=<id>` | Built automatically from every lesson's `glossary` and `keyPoints`. No separate data to maintain. |
| Installable app / offline | `manifest.webmanifest`, `sw.js`, `icons/` | Service worker registered from `js/core.js`. Network first, cache as fallback. |

**Six journeys:** Start a Business (`start-*`), Accounting Foundations (`acc-*`), Final Accounts (`fin-*`),
Business & Management (`biz-*`), Tax & GST (`tax-*`), Excel & MIS (`mis-*`). 36 lessons, all complete.

**Running example business:** *Noor Crafts* (Sana, Srinagar — pashmina shawls & walnut boxes). Secondary:
*Gupta Kirana*, *Chai Adda*. Their numbers are fixed in LESSON-AUTHORING §3; keep them consistent.

**Paths:** links inside nav and lessons are **site-root relative** (`tax-lab/index.html`), resolved by nav.js,
so the site works both under `/commerce-lab/` and at a Vercel root. Never use `/` or `../` in `practice[].href`.

## 4. Adding things

- **Nav item:** edit `NAV` in `js/nav.js` only.
- **Lesson:** create `js/lessons/<id>.js` per LESSON-AUTHORING, add it to `HUBS` in `registry.js`, run tests.
- **New page:** copy an existing lab page's `<head>` (viewport meta with `viewport-fit=cover`, theme-color,
  the manifest/icon links, the CSS links) and the empty header/footer placeholders, and load `js/core.js` as a module.
  Add the page to `PRECACHE` in `sw.js` so it works offline.
- **Renamed or removed a file?** Bump `VERSION` in `sw.js` so phones drop the old cache.

## 5. Record keeping (do this after every change)

- Commit with a clear conventional message (`feat(content):`, `fix(ui):`, `docs:` …). Push to `main` **only when the user asks**.
- If you learn or change a fact, update `docs/LESSON-AUTHORING.md` §4.
- Update §7 below (status / open items) so the next agent knows where things stand.
- Keep `README.md` in sync when features or rates change.

## 6. Checking your work

```bash
npm test                                    # node --test: engines, calculators, tax, all lessons (must be 0 fail)
node tools/render-check.mjs .render 390 844 1 http://localhost/commerce-lab/index.html [more urls…]
```

`render-check` drives headless Chrome at phone size and reports JS errors, failed requests, elements wider than
the viewport, and saves screenshots to `.render/` (git-ignored). Needs Apache running and Chrome installed.
Look at the screenshots, not just the JSON. `THEME=dark` checks dark mode.

## 7. Status & open items (keep this current)

_Last updated 2026-10-11._

- Done: mobile-first CSS, shared nav, lesson system, all 36 lessons; searchable A–Z glossary (194 terms) and
  per-journey quick revision pages; installable app with offline reading (checked: lessons open with no network);
  all 17 pages render at 390px with no overflow or console errors; 61/61 tests pass. Stale FY 2024-25 labels
  updated to 2026-27; unused Vite/TypeScript files removed.
- Open — facts flagged uncertain: walnut-box HSN/GST rate; trademark class for wooden boxes; Income-tax Act 2025
  section numbers (hedged callouts in `tax-04`, `tax-05`).
- Ideas: lesson search across full text; a "recently viewed" list on the Learn hub; printable revision sheets.
