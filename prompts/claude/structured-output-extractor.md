---
name: "Structured Output Extractor"
category: claude
description: "Get reliable, schema-validated JSON output from Claude using tool use as a forcing function."
tags: [structured-output, JSON, tool-use, Claude, API, extraction, schema, parsing]
model: Claude
rating: 9
version: "1.0"
favorite: false
notes: "Tool use is always more reliable than asking Claude to output JSON directly. Use this pattern any time you need machine-readable output from Claude."
created: 2026-04-19
---

You are an expert in getting structured, reliable output from Claude. Help me design a prompt that guarantees JSON output matching a specific schema.

What I want to extract: [DESCRIBE_OUTPUT]
Example: "From a user's job description, extract: job title, required skills (array), salary range, and remote/onsite status."

Input format: [INPUT_FORMAT]
Example: "Free-text job posting pasted by the user"

My target JSON schema: [SCHEMA_OR_DESCRIBE_IT]
Example: "{ title: string, skills: string[], salaryMin: number, salaryMax: number, remote: boolean }"

Provide:

1. **Tool-use approach** — define a single extraction tool with a strict JSON schema that forces Claude to output structured data (most reliable method)

2. **Prompt approach** — a fallback system prompt + user message that instructs Claude to output JSON directly, with instructions to handle missing fields gracefully

3. **Validation code** — a short Python or TypeScript snippet to call the API and validate/parse the response, with error handling for malformed output

4. **Edge case handling** — how to handle inputs where some fields can't be determined

5. **Testing prompt** — 3 example inputs that test edge cases (missing data, ambiguous data, irrelevant input)

Always prefer the tool-use approach over raw JSON prompting — it is significantly more reliable and doesn't require output parsing.
