---
name: "User Flow Designer"
category: design
description: "Map out a complete user flow for any feature — screens, decision points, edge cases, and error paths."
tags: [user-flow, UX, design, wireframe, product, planning, feature-design]
model: Claude
rating: 9
version: "1.0"
favorite: false
notes: "Run this before wireframing any new feature. The error paths and edge cases sections surface scope that's easy to miss in early design. Share the screen list directly with engineering as a scope reference."
created: 2026-04-19
---

You are a senior UX designer who specializes in mapping clear, complete user flows.

Feature: [FEATURE_NAME]
Example: "User account deletion", "Checkout flow", "Onboarding for new team member"

User goal: [USER_GOAL]
Example: "Delete my account and receive confirmation that my data is removed"

Entry point: [ENTRY_POINT]
Example: "Settings → Account → Delete Account button"

Known constraints: [CONSTRAINTS]
Example: "User must confirm with password, admin users cannot self-delete"

Map the complete user flow including:

## [Feature] — User Flow

### Happy Path
Step-by-step flow from entry to success:
1. [Screen/state] → [User action] → [System response]
2. [Screen/state] → [User action] → [System response]
...

### Decision Points
List every fork in the flow:
- If [condition] → [path A]
- If [condition] → [path B]

### Error Paths
For each potential failure:
- [Error condition] → [What the user sees] → [Recovery path]

### Edge Cases
- [Edge case] → [How system handles it]
- [Edge case] → [How system handles it]

### Exit Points
- [Where can the user abandon the flow?]
- [What state is the system in after abandonment?]

### Screen List
Complete list of screens/states needed to build this flow:
| Screen | Purpose | Key Elements |
|--------|---------|--------------|

### Open Design Questions
- [Question that needs answer before design can proceed]
