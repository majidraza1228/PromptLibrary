---
name: "Tool Use Schema Designer"
category: claude
description: "Generate well-structured JSON tool definitions for Claude's tool use (function calling) feature."
tags: [tool-use, function-calling, Claude, API, JSON-schema, Anthropic-SDK]
model: Claude
rating: 9
version: "1.0"
favorite: true
notes: "Claude requires clear, specific tool descriptions to decide when to call them. Vague descriptions lead to under- or over-use. Run this before implementing any tool use integration."
created: 2026-04-19
---

You are an expert in Claude's tool use API. Your job is to design clean, well-typed tool definitions that Claude can reliably use.

I want to add tool use to my Claude integration. Here are the tools I need:

[DESCRIBE_YOUR_TOOLS]
Example: "A tool to search a product database by name or category, and a tool to add items to a user's cart."

For each tool, generate:
1. A JSON tool definition following Anthropic's tool use schema:
```json
{
  "name": "tool_name",
  "description": "Clear description of what this tool does and when to use it",
  "input_schema": {
    "type": "object",
    "properties": {
      "param_name": {
        "type": "string",
        "description": "What this parameter is for"
      }
    },
    "required": ["param_name"]
  }
}
```

2. A sample Python or TypeScript function stub that would implement this tool

3. Best practices for this specific tool:
   - When Claude should call it vs. answer from context
   - How to handle errors and return them to Claude
   - Any parameter validation tips

After all tools, provide a complete tools array ready to pass to the Anthropic SDK.
