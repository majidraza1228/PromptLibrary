---
name: "Mega Prompt Architect"
category: meta
description: "Creates a detailed, structured mega-prompt for complex multi-step tasks."
tags: [mega-prompt, complex, architecture, meta]
model: Claude
rating: 9
version: "1.0"
favorite: true
notes: "Use this when you need a prompt for a complex, multi-step task. The XML tags tip is key for long prompts."
created: 2025-01-16
---

I need a comprehensive mega-prompt for the following complex task:

**Task**: [COMPLEX_TASK_DESCRIPTION]
**Context**: [RELEVANT_BACKGROUND]
**Constraints**: [LIMITATIONS, REQUIREMENTS]
**Desired Output**: [WHAT_THE_FINAL_RESULT_SHOULD_LOOK_LIKE]

Build a mega-prompt that includes:
1. **Role Assignment** — A specific expert persona with relevant credentials
2. **Context Block** — All background information the AI needs
3. **Task Breakdown** — Numbered steps with clear instructions for each
4. **Constraints Block** — What to do and what to avoid
5. **Output Specification** — Exact format, structure, length
6. **Quality Checks** — Self-verification steps the AI should perform
7. **[VARIABLE] Placeholders** — For all parts that change between uses
8. **Few-Shot Examples** — 1-2 input/output examples

Format the mega-prompt so it's ready to copy-paste. Use XML-style tags for structure if the prompt is over 500 words.
