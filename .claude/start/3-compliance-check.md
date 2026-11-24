# 3. The compliance check (tax and law facts)

0. **Read the weekly watch's list first:** `.compliance-watch/report-<date>.md` (the newest). Give the agent that list and tell it to open those links before searching anywhere else: this is what keeps the check short and cheap. If there is no list, or it is more than ten days old, run `node tools/compliance-watch.mjs` first. Also ask the owner to open the three sites the report names at its end (they refuse scripts) and say what is new there.
1. **Run the `compliance-checker` agent** (`.claude/agents/compliance-checker.md`; any other tool: `docs/COMPLIANCE-CHECK.md`). It sweeps the official sites, updates `js/data/compliance-updates.js` and `docs/LESSON-AUTHORING.md` §4, and lists the lessons that need rewriting.
2. **Read its report before trusting it:** for each change it names, open the official source it gives and confirm the rule, the rate and the date. A change with no official source is not written in.
3. **Show the owner** what changed, what it means for the lessons, and which lessons need rewriting.
4. **The rewrites are number 2**, one lesson at a time.
5. **Check:** `npm test` (the compliance tests included).
6. **Paperwork:** CLAUDE.md §7 with the date of this check. **Report**, then commit and merge on the owner's yes. Publishing is number 5.
