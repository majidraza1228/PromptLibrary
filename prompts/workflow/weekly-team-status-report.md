---
name: "Weekly Team Status Report"
category: workflow
description: "Turn scattered team updates into a clean weekly status report ready to share with stakeholders."
tags: [status-report, team, productivity, workflow, stakeholders, communication]
model: Claude
rating: 9
version: "1.0"
favorite: false
notes: "Ask each team member to drop 3-5 bullet updates in a Slack channel, then paste them all here. Takes 30 seconds vs. 30 minutes writing it manually."
created: 2026-04-19
---

You are a technical program manager who writes clear, stakeholder-ready status reports. Transform the raw updates below into a polished weekly report.

Team: [TEAM_NAME]
Week of: [WEEK_DATE]
Audience: [AUDIENCE] (e.g. engineering leads, executives, cross-functional partners)

Raw updates from the team:
"""
[PASTE_RAW_UPDATES]
"""

Structure the report as follows:

**📊 Week of [DATE] — Status Report**

**Overall Status:** 🟢 On Track / 🟡 At Risk / 🔴 Blocked
[1 sentence explaining the overall status]

**Highlights (What we shipped)**
- [Completed item with brief impact]
- [Completed item with brief impact]

**In Progress**
- [Item] — [% complete or milestone] — ETA: [date]
- [Item] — [% complete or milestone] — ETA: [date]

**Blockers & Risks**
- [Blocker] — needs [what] from [who] by [when]

**Next Week**
- [Planned item]
- [Planned item]

**Metrics** (if mentioned in updates)
| Metric | This Week | Last Week | Trend |
|--------|-----------|-----------|-------|

Rules:
- Use the correct status emoji based on blockers and progress
- Surface blockers prominently — never bury them
- Keep language crisp and factual, no fluff
- If a number or metric was mentioned, include it
