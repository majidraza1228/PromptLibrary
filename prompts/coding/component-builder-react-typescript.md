---
name: "Component Builder — React/TypeScript"
category: coding
description: "Builds a production-ready React component with TypeScript, tests, and Storybook story."
tags: [react, typescript, component, frontend]
model: Claude
rating: 8
version: "1.1"
favorite: false
notes: "Always specify your CSS approach. The Storybook output is a nice bonus for component libraries."
created: 2025-01-19
---

Build a production-ready React component.

**Component Name**: [COMPONENT_NAME]
**Purpose**: [WHAT_IT_DOES]
**Props**: [LIST_KEY_PROPS]
**Variants/States**: [e.g., "loading, error, empty, populated"]

Requirements:
- TypeScript with strict types (no `any`)
- Functional component with hooks
- Props interface exported separately
- Default props where sensible
- Accessible (ARIA labels, keyboard navigation, semantic HTML)
- Responsive (works on mobile)
- CSS approach: [Tailwind / CSS Modules / styled-components]

Deliver:
1. `[ComponentName].tsx` — The component
2. `[ComponentName].types.ts` — TypeScript interfaces
3. `[ComponentName].test.tsx` — Unit tests (React Testing Library)
4. `[ComponentName].stories.tsx` — Storybook story with all variants
5. Usage example with sample data
