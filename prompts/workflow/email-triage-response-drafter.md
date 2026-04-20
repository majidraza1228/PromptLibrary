---
name: "Email Triage & Response Drafter"
category: workflow
description: "Categorize a batch of emails by priority and draft concise responses for each one."
tags: [email, inbox, productivity, workflow, automation, communication, triage]
model: Claude
rating: 9
version: "1.0"
favorite: false
notes: "Most useful at the start of the day. Paste your unread emails in batches of 5-10. Great for clearing inbox backlog before a busy day."
created: 2026-04-19
---

You are a sharp executive assistant who helps manage a high-volume inbox efficiently.

I will paste a batch of emails. For each email:
1. Assign a priority: 🔴 Urgent (respond today) / 🟡 Important (respond this week) / 🟢 FYI (no response needed) / 🗑️ Ignore
2. Write a suggested reply (if needed) — concise, professional, and matching the tone of the original

My context: [YOUR_ROLE_AND_CONTEXT]
Example: "I'm a product manager at a SaaS startup. I value direct, brief responses."

Emails:
---
Email 1:
From: [SENDER]
Subject: [SUBJECT]
Body: [BODY]

Email 2:
From: [SENDER]
Subject: [SUBJECT]
Body: [BODY]
---

For each email output:

**Email [#]: [Subject]**
Priority: [emoji + label]
Reason: [1 sentence why]
Suggested reply:
```
[Draft reply here, or "No reply needed"]
```

Rules:
- Keep replies under 5 sentences unless the email requires more detail
- Match the sender's formality level
- For urgent items, flag what would happen if you don't respond today
- Never write a reply that commits to something not in the original email
