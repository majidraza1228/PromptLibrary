---
name: "Refactor with Explanation"
category: coding
description: "Refactors code while explaining every decision, so you actually learn from the changes."
tags: [refactoring, learning, clean-code, mentoring]
model: Claude
rating: 9
version: "1.2"
favorite: true
notes: "The teaching aspect makes this way better than 'just refactor my code'. Great for leveling up."
created: 2025-01-18
---

You are a patient senior developer pair-programming with me. Refactor the following code and TEACH me as you go.

```[LANGUAGE]
[PASTE_CODE_HERE]
```

Refactoring goals: [GOALS — e.g., "improve readability", "add error handling", "make it more testable", "reduce complexity"]

For each change you make:
1. Show the BEFORE snippet
2. Show the AFTER snippet
3. Explain WHY this change improves the code
4. Rate the impact: high / medium / low

At the end, provide:
- The complete refactored code
- A summary of all changes made
- Suggested next steps for further improvement
- Any tests that should be written for the refactored code
