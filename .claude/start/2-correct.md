# 2. Correct content or a fact

1. **Ask what is wrong**, unless the owner said: which lesson or tool, and what it says against what is right; and **where the right fact comes from**.
2. **Confirm the fact on the official source** (the GST portal, the Income Tax department, MCA, the notification itself) before changing a word. If it cannot be confirmed, say so and hedge the line instead of guessing.
3. **Change `docs/LESSON-AUTHORING.md` §4 first**, with the source and the date; then `js/data/tax-rules.js` if a rate or slab changed; then every lesson and tool that uses it: `git grep -n <the old value>` to find them all.
4. **Work on a branch** made from `main`'s last commit.
5. **Add the change to "What's New"** (`js/data/compliance-updates.js`) when it is a real rule change a reader should know about.
6. **Check:** `npm test`; the changed pages with `tools/render-check.mjs` at 390 px.
7. **Paperwork:** CLAUDE.md §7 (remove the item from "facts flagged uncertain" if it is now settled).
8. **Report** the old line, the new line and the source. Commit and merge on the owner's yes. Publishing is number 5.
