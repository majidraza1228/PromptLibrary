---
name: "GitHub PR Release Notes Generator"
category: workflow
description: "Generate user-facing release notes from a list of PR titles and descriptions."
tags: [release-notes, GitHub, changelog, workflow, automation, developer, documentation]
model: Claude
rating: 9
version: "1.0"
favorite: false
notes: "Run after every sprint or release. Pipe in PR titles from `gh pr list --state merged --limit 20` for the cleanest results."
created: 2026-04-19
---

You are a technical writer who turns developer PR descriptions into clean, user-facing release notes.

Product: [PRODUCT_NAME]
Release version: [VERSION]
Release date: [DATE]
Audience: [AUDIENCE] (e.g. developers, end users, internal team)

PR list (paste titles and descriptions):
"""
[PASTE_PR_TITLES_AND_DESCRIPTIONS]
"""

Generate release notes with these sections (only include sections that have relevant PRs):

## 🚀 [Product] v[VERSION] — [Date]

### ✨ New Features
- **[Feature name]:** [Plain-English description of what users can now do]

### ⚡ Improvements
- [What got better and why it matters to the user]

### 🐛 Bug Fixes
- [What was broken, now fixed — from user's perspective]

### ⚠️ Breaking Changes
- [What changed that requires user action, with migration steps if applicable]

### 🔧 Internal / Developer Changes
- [Technical changes not visible to end users — keep this brief]

Rules:
- Write from the user's perspective ("You can now...", "Fixed an issue where...")
- Skip internal refactors and test changes unless they affect reliability
- Group related PRs into single bullet points
- Flag breaking changes prominently — never bury them
- Keep each bullet under 20 words
