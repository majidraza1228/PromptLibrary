---
name: "Unit Test Generator"
category: coding
description: "Generates comprehensive unit tests with edge cases, mocking, and clear test descriptions."
tags: [testing, unit-tests, TDD, quality]
model: Any
rating: 8
version: "1.0"
favorite: false
notes: "Specify the test framework explicitly (Jest, Pytest, etc.) for best results."
created: 2025-02-01
---

Generate comprehensive unit tests for the following [LANGUAGE] code using [TEST_FRAMEWORK]:

```[LANGUAGE]
[PASTE_CODE_HERE]
```

Requirements:
- Use describe/it (or equivalent) blocks with clear, readable test names
- Follow the Arrange-Act-Assert pattern
- Cover these scenarios:
  Happy path (expected inputs -> expected outputs)
  Error cases (invalid inputs, missing data, null/undefined)
  Edge cases (empty arrays, zero values, max limits, unicode, etc.)
  Boundary conditions
- Mock external dependencies with clear mock setup
- Include at least [MIN_TESTS] test cases
- Add comments explaining WHY each test matters, not just WHAT it tests

Output format:
1. Test file with all tests
2. A coverage summary (which paths are tested)
3. Any untestable code you noticed (and suggestions to make it testable)
