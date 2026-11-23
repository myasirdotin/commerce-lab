# 1. Add a lesson, tool or calculator

1. **Ask what is wanted**, unless the owner said: a lesson (which journey), a lab tool, a calculator, a cheatsheet; and what the reader should be able to do after it.
2. **Check it is not already there:** `js/lessons/registry.js` (`HUBS`), the lab folders, `git log --oneline -i --grep=<word>`.
3. **Read before writing:** CLAUDE.md §2 "Non-negotiables" and §3 "How it is built"; for a lesson, `docs/LESSON-AUTHORING.md` whole, and the exemplar `js/lessons/acc-02-accounting-equation.js`.
4. **Work on a branch** made from `main`'s last commit.
5. **Build it into the existing structure,** never a one-off page: a lesson is `js/lessons/<id>.js` and a line in `HUBS`; a nav item is `NAV` in `js/nav.js` only; a new page copies an existing lab page's head and placeholders and is added to `PRECACHE` in `sw.js`. Static only: no backend, no build step, no framework. Paths inside nav and lessons are site-root relative.
6. **Facts:** every Indian tax or legal fact matches `docs/LESSON-AUTHORING.md` §4. A new fact is checked on the official site first, written into §4 with its source and date, then used. Anything uncertain is hedged with "verify on the portal". Never invent a rate, a section number or a date.
7. **The running example** is Noor Crafts, with the numbers fixed in LESSON-AUTHORING §3: keep them consistent.
8. **Educational, not advice:** the "For education only" banner and the footer disclaimer stay.
9. **Check:** `npm test` (must be 0 fail), then `node tools/render-check.mjs .render 390 844 1 <the page's address>` and **look at the screenshots**: 390 px wide, no sideways scroll, thumb-size targets. `THEME=dark` too.
10. **Paperwork:** CLAUDE.md §7, the README if a feature was added. **Report**, then commit and merge on the owner's yes. Publishing is number 5.
