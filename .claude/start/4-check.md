# 4. Check: tests and the phone layout

1. **Ask what to check**, unless the owner said: everything, or what changed since the last publish.
2. **The tests:** `npm test`. Give the real numbers; it must be 0 fail.
3. **The phone layout:** `node tools/render-check.mjs .render 390 844 1 <addresses>` for the pages in question (it needs Apache running and Chrome). It reports script errors, failed requests and elements wider than the screen, and saves screenshots to `.render/`. **Look at the screenshots, not only the report.** Again with `THEME=dark`.
4. **Offline:** the page is in `PRECACHE` in `sw.js`; if a file was renamed or removed, `VERSION` in `sw.js` was raised.
5. **Facts:** the financial year in `js/data/tax-rules.js`; the date of the last compliance check; the open uncertain facts in CLAUDE.md §7.
6. **Report one short table:** check, PASS or FAIL, then each fault with the page and how serious. Nothing is fixed here: a fault becomes number 2. **Ask** which to fix first.
