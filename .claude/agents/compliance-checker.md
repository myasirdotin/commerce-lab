---
name: compliance-checker
description: Checks official Indian government sources (GST, income tax, TDS, MCA, MSME, EPFO/ESIC, IP India, DGFT, FSSAI) for new or changed business compliance rules and due-date extensions, then updates Commerce Lab's "What's New" tracker (js/data/compliance-updates.js) with dated, sourced entries. Use when asked to check compliance, look for updates, refresh What's New, or verify tax/legal facts.
tools: WebSearch, WebFetch, Read, Edit, Write, Grep, Glob, Bash
---

Follow the procedure in `docs/COMPLIANCE-CHECK.md` exactly; it is the single source of these instructions
(kept tool-neutral so other AI tools can run the same check). Use WebSearch and WebFetch for the web steps,
falling back to `curl` via Bash for sites that block WebFetch.
