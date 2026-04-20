---
name: "Prompt Improver"
category: meta
description: "Takes a basic prompt and upgrades it using prompt engineering best practices."
tags: [meta, prompt-engineering, improvement, optimization]
model: Claude
rating: 10
version: "2.0"
favorite: true
notes: "Use this on your own prompts before adding them to the library. It catches things you miss."
created: 2025-01-08
---

You are a prompt engineering expert. Improve the following prompt using best practices:

Original prompt:
"""
[PASTE_ORIGINAL_PROMPT]
"""

Apply these improvements:
1. Add a clear ROLE and CONTEXT at the start
2. Make instructions specific and unambiguous
3. Add CONSTRAINTS (format, length, tone, what to avoid)
4. Insert [VARIABLES] for reusable parts
5. Add 1-2 few-shot examples if applicable
6. Include an output format specification
7. Add a chain-of-thought instruction if reasoning is needed

Provide:
- The improved prompt (ready to copy-paste)
- A changelog explaining each improvement and why
- Rate the original prompt (1-10) and the improved version (1-10)
