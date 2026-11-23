# 5. Publish (push to GitHub; Vercel publishes)

1. **What would go live:** `git log --oneline origin/main..main`, in plain words. CLAUDE.md §5: push to `main` only when the owner asks.
2. **Read-only check, each ✅ or ❌:** the folder is on `main` with nothing unsaved; `npm test` passes with 0 fail; the changed pages pass `tools/render-check.mjs` at 390 px; `VERSION` in `sw.js` was raised if a file was renamed or removed; nothing that belongs only to this PC is in the commits (a link or widget for `localhost` must not reach the public site: read each unpublished commit for that).
3. **Stop at any ❌ and ask.**
4. **On the owner's yes:** `git push origin main`. Vercel publishes by itself from GitHub; it is the owner's account and Claude does not open it.
5. **After it is live:** ask the owner to open the site on a phone and say what they see; a phone that still shows the old pages needs the app closed and opened again (the offline copy).
6. **Paperwork:** CLAUDE.md §7 with the date published.
