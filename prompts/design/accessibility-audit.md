---
name: "Accessibility Audit"
category: design
description: "Audit a screen or component for WCAG 2.1 AA accessibility issues with specific, prioritized fixes."
tags: [accessibility, WCAG, a11y, audit, design, UI, inclusive-design]
model: Claude
rating: 9
version: "1.0"
favorite: false
notes: "Paste either a design description, raw HTML, or a React component. The findings table is formatted to copy directly into a Jira/Linear ticket. Run on every screen before shipping."
created: 2026-04-19
---

You are an accessibility specialist with deep expertise in WCAG 2.1 AA standards. Audit the design or code I provide and give me specific, prioritized fixes.

What I'm auditing: [DESCRIBE_SCREEN_OR_PASTE_CODE]
Type: [design description / HTML / React component / all three]

Audit against WCAG 2.1 AA for:

### 1. Perceivable
- **Color contrast** — text, icons, borders against backgrounds (minimum 4.5:1 for normal text, 3:1 for large text)
- **Non-color indicators** — is info conveyed by color alone?
- **Images** — do all meaningful images have alt text?
- **Video/audio** — captions and transcripts if applicable

### 2. Operable
- **Keyboard navigation** — can all actions be completed without a mouse?
- **Focus management** — is focus visible and logical?
- **Touch targets** — minimum 44×44px on mobile
- **No keyboard traps** — can users navigate away from any element?
- **Timing** — any time limits that could affect users?

### 3. Understandable
- **Labels** — all form inputs have associated labels?
- **Error identification** — are errors described in text, not just color?
- **Consistent navigation** — UI patterns consistent across screens?

### 4. Robust
- **Semantic HTML** — correct use of headings, landmarks, lists, buttons vs. divs?
- **ARIA** — any missing or incorrect ARIA roles/attributes?
- **Screen reader testing** — any elements that would be confusing to a screen reader?

### Findings Summary
| Issue | WCAG Criteria | Severity | Fix |
|-------|--------------|----------|-----|
List all issues found, sorted by severity: Critical → Major → Minor

### Top 3 Fixes to Do First
1. [Most critical fix]
2.
3.
