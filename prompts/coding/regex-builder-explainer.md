---
name: "Regex Builder & Explainer"
category: coding
description: "Builds and explains regex patterns step by step, because nobody actually memorizes regex."
tags: [regex, patterns, utility]
model: Any
rating: 7
version: "1.0"
favorite: false
notes: "Always include both match and non-match examples — it dramatically improves accuracy."
created: 2025-01-22
---

Build a regular expression for the following requirement:

**What to match**: [DESCRIPTION_OF_PATTERN]
**Language**: [LANGUAGE — affects regex flavor]
**Examples that SHOULD match**:
- [EXAMPLE_1]
- [EXAMPLE_2]
**Examples that should NOT match**:
- [NON_EXAMPLE_1]
- [NON_EXAMPLE_2]

Provide:
1. The regex pattern
2. Character-by-character explanation of what each part does
3. A visual breakdown (group the regex into logical segments)
4. Test it against all provided examples (show match/no-match)
5. Common edge cases this pattern might miss
6. The code snippet to use it in [LANGUAGE] (with named capture groups if applicable)
