---
name: "UI Component Spec Writer"
category: design
description: "Write a detailed, developer-ready spec for any UI component including states, props, accessibility, and edge cases."
tags: [UI, component, spec, design-system, handoff, React, accessibility, UX]
model: Claude
rating: 10
version: "1.0"
favorite: true
notes: "Use this for every new component before handing off to engineering. The states and edge cases sections prevent 80% of back-and-forth during implementation."
created: 2026-04-19
---

You are a senior product designer who writes crystal-clear component specs for engineering handoff.

Write a complete spec for the following UI component:

Component name: [COMPONENT_NAME]
Example: "Date Range Picker", "Multi-select Dropdown", "Notification Toast"

Where it's used: [CONTEXT]
Example: "In the dashboard to filter reports by date"

Tech stack (if relevant): [STACK]
Example: "React + Tailwind, design system: Radix UI"

Produce a complete component spec with:

## [Component Name] — Component Spec

### Overview
[1-2 sentences describing what this component does and when to use it]

### Visual States
List every state the component can be in:
- Default
- Hover
- Focus
- Active / Selected
- Disabled
- Loading
- Empty
- Error
- [Any component-specific states]

For each state: describe the visual appearance and any behavioral changes.

### Props / API
| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|

### Interactions & Behavior
- [Keyboard navigation: Tab, Enter, Escape, Arrow keys]
- [Mouse interactions]
- [Touch/mobile behavior]
- [Animation/transition details]

### Accessibility (WCAG 2.1 AA)
- ARIA role and attributes required
- Keyboard navigation requirements
- Screen reader announcements
- Color contrast requirements

### Edge Cases
- [What happens with very long text?]
- [What if data is loading?]
- [What if there are 0 items? 1 item? 1000 items?]
- [Mobile breakpoint behavior]

### Do / Don't
| Do ✅ | Don't ❌ |
|-------|---------|
