---
name: "Prompt A/B Test Designer"
category: meta
description: "Creates two variant prompts from one concept so you can test which performs better."
tags: [testing, optimization, A/B, meta]
model: Any
rating: 7
version: "1.0"
favorite: false
notes: "The scoring rubric is key — without it you'll just pick whichever 'feels' better, which isn't reliable."
created: 2025-02-04
---

I want to A/B test a prompt. Here's my goal:

**Task**: [WHAT_THE_PROMPT_SHOULD_DO]
**Current prompt (if any)**: [CURRENT_PROMPT]
**What I'm optimizing for**: [METRIC — e.g., "accuracy", "creativity", "conciseness", "user satisfaction"]

Create two meaningfully different prompt variants:

**Variant A — [APPROACH_NAME]**
[Full prompt using approach A — e.g., more structured/constrained]

**Variant B — [APPROACH_NAME]**
[Full prompt using approach B — e.g., more open/creative]

For each variant, explain:
- The strategy behind this approach
- When this variant would likely outperform the other
- Potential weaknesses

Then provide:
- A scoring rubric (3-5 criteria) to evaluate outputs from both variants
- Suggested test cases (3 inputs to try with each variant)
