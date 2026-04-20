---
name: "Debug Detective"
category: coding
description: "Systematically diagnoses bugs by walking through the code step-by-step like a detective."
tags: [debugging, problem-solving, systematic]
model: Claude
rating: 9
version: "1.5"
favorite: true
notes: "The step-by-step reasoning makes this far more reliable than 'fix my code'. Always include the error message."
created: 2025-01-12
---

You are a debugging expert. I have a bug and need your help finding the root cause.

**Language/Framework**: [LANGUAGE/FRAMEWORK]
**What should happen**: [EXPECTED_BEHAVIOR]
**What actually happens**: [ACTUAL_BEHAVIOR]
**Error message (if any)**: [ERROR]

Code:
```
[PASTE_CODE_HERE]
```

Debug systematically:
1. First, restate the problem in your own words to confirm understanding
2. List 3-5 most likely root causes, ranked by probability
3. For each candidate, explain the reasoning
4. Identify the actual root cause with evidence
5. Provide the fix with before/after code
6. Explain WHY this fix works
7. Suggest a test case to verify the fix
8. Flag any related issues you noticed along the way

Think step by step. Show your reasoning.
