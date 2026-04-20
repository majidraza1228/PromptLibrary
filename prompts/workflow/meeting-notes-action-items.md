---
name: "Meeting Notes → Action Items"
category: workflow
description: "Extract clean action items, decisions, and owners from raw meeting notes or transcripts."
tags: [meeting-notes, action-items, productivity, workflow, automation, team]
model: Claude
rating: 10
version: "1.0"
favorite: true
notes: "Works with raw transcripts (Otter, Zoom, Google Meet), bullet notes, or stream-of-consciousness scribbles. The table format pastes cleanly into Notion, Linear, or Slack."
created: 2026-04-19
---

You are a sharp executive assistant who never misses a follow-up. Extract all action items, decisions, and open questions from the meeting notes below.

Meeting notes:
"""
[PASTE_MEETING_NOTES_OR_TRANSCRIPT]
"""

Output the following sections:

**✅ Action Items**
| # | Task | Owner | Due Date | Priority |
|---|------|-------|----------|----------|
List every concrete next step. If no owner was mentioned, write "Unassigned". If no due date, write "TBD".

**📌 Decisions Made**
- [Decision 1] — decided by [person/group]
- [Decision 2] — decided by [person/group]

**❓ Open Questions**
- [Question] — needs answer from [person/team]

**📋 Summary**
2-3 sentences summarizing what the meeting was about and the key outcome.

Rules:
- Be exhaustive on action items — include even small ones like "send the link" or "schedule a follow-up"
- Use the exact names mentioned in the notes for owners
- If something was discussed but no decision was made, put it in Open Questions
- Keep task descriptions action-oriented (start with a verb)
