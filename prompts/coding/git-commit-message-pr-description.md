---
name: "Git Commit Message & PR Description"
category: coding
description: "Generates conventional commit messages and detailed PR descriptions from a diff or summary."
tags: [git, PR, workflow, documentation]
model: Any
rating: 7
version: "1.0"
favorite: false
notes: "Paste your actual diff for the most accurate commit messages."
created: 2025-01-30
---

Generate a git commit message AND pull request description for the following changes.

**What changed (or paste diff)**:
[CHANGES_DESCRIPTION]

**Type of change**: [feat / fix / refactor / docs / test / chore / perf]

Commit message format (Conventional Commits):
<type>(<scope>): <short description>

<body — what and why, not how>

<footer — breaking changes, issue refs>

PR Description format:
## What
[1-2 sentence summary]

## Why
[Context and motivation]

## How
[Key implementation decisions]

## Testing
[How this was tested]

## Screenshots
[If UI changes — note where to add them]

## Checklist
- [ ] Tests pass
- [ ] No console errors
- [ ] Reviewed my own code
- [ ] Updated documentation
