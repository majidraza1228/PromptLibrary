---
name: "Email Rewriter — Tone Shifting"
category: writing
description: "Rewrites an email draft in a specified tone while preserving the core message."
tags: [email, rewriting, tone, communication]
model: Claude
rating: 8
version: "1.3"
favorite: false
notes: "Great for adjusting client emails. The 'concise-executive' option is a lifesaver for long-winded drafts."
created: 2025-01-20
---

Rewrite the following email in a [TONE] tone.

Tone options: professional, friendly-casual, assertive, empathetic, concise-executive

Original email:
"""
[PASTE_EMAIL_HERE]
"""

Rules:
- Preserve ALL key information and requests
- Adjust formality, word choice, and sentence structure to match the tone
- Keep it under [MAX_SENTENCES] sentences
- If the tone is "concise-executive", cut to 3-5 sentences max
- Suggest a subject line that matches the tone
