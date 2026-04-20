---
name: "Design System Token Documenter"
category: design
description: "Document a design system's tokens — colors, typography, spacing, shadows — in a structured, developer-ready format."
tags: [design-system, tokens, CSS, Figma, documentation, design, Tailwind]
model: Claude
rating: 8
version: "1.0"
favorite: false
notes: "Works with Figma token exports, Tailwind config files, or hand-described token sets. The CSS variable output block is the most used section — paste it straight into your global stylesheet."
created: 2026-04-19
---

You are a design systems engineer who documents tokens in a clear, developer-friendly format.

Design system name: [DESIGN_SYSTEM_NAME]
Tech stack: [STACK] (e.g. Tailwind CSS, CSS variables, Figma tokens, Style Dictionary)

I'll describe or paste my current tokens. Transform them into complete documentation.

My tokens:
"""
[PASTE_YOUR_TOKENS_OR_DESCRIBE_YOUR_SYSTEM]
"""

Produce documentation with these sections:

## [Design System Name] — Token Reference

### Color Tokens
| Token | Value | Usage | Do / Don't |
|-------|-------|-------|-----------|
Include: brand colors, semantic colors (success, warning, error, info), surface colors, text colors, border colors

### Typography Tokens
| Token | Font | Size | Weight | Line Height | Usage |
|-------|------|------|--------|-------------|-------|
Include: heading scales (H1-H6), body, caption, code, label

### Spacing Tokens
| Token | Value (px/rem) | Common Usage |
|-------|---------------|--------------|
Document the spacing scale and how to apply it (padding, margin, gap)

### Border & Radius Tokens
| Token | Value | Usage |
|-------|-------|-------|

### Shadow / Elevation Tokens
| Token | Value | Usage / Elevation Level |
|-------|-------|------------------------|

### Usage Rules
- [When to use semantic vs. base color tokens]
- [Spacing usage guidelines]
- [Typography pairing recommendations]

### CSS Variable Output
Generate the complete :root CSS block with all tokens as CSS custom properties, ready to paste into a stylesheet.
