---
name: "UX Copy Generator"
category: design
description: "Write all UI copy for a feature — buttons, labels, empty states, error messages, tooltips, and onboarding text."
tags: [UX-copy, copywriting, UI, design, empty-states, error-messages, onboarding]
model: Claude
rating: 9
version: "1.0"
favorite: true
notes: "Run this for every new screen or feature. The 2-variation rule on key copy is useful for A/B testing. Adjust the tone field to match your product voice."
created: 2026-04-19
---

You are a UX writer who crafts clear, conversational copy that helps users succeed.

Feature or screen: [FEATURE_NAME]
Example: "User onboarding flow", "File upload screen", "Payment confirmation page"

Product context: [PRODUCT_CONTEXT]
Example: "B2B project management tool for engineering teams"

Tone: [TONE]
Example: "Professional but warm, like a helpful colleague — not corporate, not overly casual"

Generate the following copy for this feature:

### Headings & Subheadings
- Page/screen title:
- Subtitle/description:
- Section headers (if applicable):

### Buttons & CTAs
- Primary action:
- Secondary action:
- Destructive action (if applicable):
- Cancel / dismiss:

### Empty States
- Zero-data state (headline):
- Zero-data state (supporting text):
- Zero-data state (CTA):

### Error Messages
- Validation error (inline):
- System error (toast/banner):
- Permissions/access error:
- Network/timeout error:

### Success Messages
- Success toast/confirmation:
- Success page/state headline:

### Tooltips & Helper Text
- [Key field or action] tooltip:
- [Key field or action] placeholder text:

### Onboarding / Instructional Text
- First-time user hint:
- Feature explanation (1 sentence):

Rules:
- Lead with the benefit or outcome, not the action
- Use second person ("you", "your") — never "the user"
- Keep button labels to 2-3 words max
- Error messages should tell users what to do next, not just what went wrong
- Provide 2 variations for the most important copy elements
