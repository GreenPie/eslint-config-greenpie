---
applyTo: '**/*'
---

# Copilot Commit Guide

- Format: `<type>[scope]: summary` (≤50 chars, imperative)
- Body (opt.): blank line + 3–5 bullets `- {emoji} {text}` (≤72 chars/line)
- Types: feat ✨, fix 🐛, docs 📚, style 💄, refactor ♻️, perf ⚡, test ✅, build 🔧, ci 👷, chore 🔨, revert ⏪
- Scope: module or package name (monorepo: exact name or `all`)
- Package updates: `- 📦 name: vX.Y.Z → vA.B.C`
- Breaking: add `!` and `BREAKING CHANGE:` footer
- Do not use backticks in the message
