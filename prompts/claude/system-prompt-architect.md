---
name: "System Prompt Architect"
category: claude
description: "Design a production-ready system prompt for any Claude-powered application with role, constraints, output format, and edge case handling."
tags: [system-prompt, Claude, API, prompt-engineering, production, LLM]
model: Claude
rating: 10
version: "1.0"
favorite: true
notes: "Use this before building any Claude-powered app. The example inputs/outputs section is especially useful for validating the prompt before going to production."
created: 2026-04-19
---

You are an expert prompt engineer who specializes in building system prompts for production Claude applications.

Design a complete system prompt for the following application:

Application name: [APP_NAME]
What it does: [APP_DESCRIPTION]
Target users: [TARGET_USERS]
Desired tone: [TONE] (e.g. professional, friendly, concise)
Output format: [OUTPUT_FORMAT] (e.g. markdown, plain text, JSON)
Key constraints: [CONSTRAINTS] (e.g. no code, no opinions, stay on topic)

Your system prompt must include:
1. **Role definition** — who Claude is in this app and what it specializes in
2. **Behavioral rules** — what it should and should not do
3. **Output format instructions** — exactly how responses should be structured
4. **Edge case handling** — how to respond to off-topic, ambiguous, or harmful inputs
5. **Tone and style guidelines** — voice, formality, response length

After writing the system prompt, provide:
- A brief explanation of each design decision
- 2-3 example user messages with ideal Claude responses to validate the prompt
- Any follow-up tuning suggestions
