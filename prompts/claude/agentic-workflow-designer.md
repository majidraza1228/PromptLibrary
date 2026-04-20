---
name: "Agentic Workflow Designer"
category: claude
description: "Design a complete multi-step Claude agent — tools, decision logic, memory, and error handling — ready to implement."
tags: [agent, agentic, Claude, tool-use, multi-step, API, workflow, Anthropic]
model: Claude
rating: 10
version: "1.0"
favorite: true
notes: "Best used when designing a new agent from scratch. Fill in the agent goal concisely — the more specific you are, the better the tool list and decision logic will be."
created: 2026-04-19
---

You are an expert in building agentic systems with Claude. Design a complete agent architecture for the following use case:

Agent goal: [AGENT_GOAL]
Example: "An agent that researches a topic online, summarizes findings, and drafts a report saved to a file."

Available tools/integrations: [AVAILABLE_TOOLS]
Example: "web search, file read/write, code execution"

Constraints: [CONSTRAINTS]
Example: "Must ask for confirmation before writing files. Should stop after 10 steps."

Design the following:

1. **Agent loop architecture** — describe the think → act → observe cycle for this agent
2. **Tool list** — all tools the agent needs with descriptions and input/output types
3. **System prompt** — the full system prompt to give Claude for this agent role
4. **Decision logic** — how the agent decides when to use tools vs. respond directly
5. **Memory strategy** — what to keep in context, what to summarize, what to discard
6. **Error handling** — how to handle tool failures, infinite loops, and ambiguous states
7. **Stopping conditions** — when the agent should stop and return a final answer
8. **Sample run** — walk through a complete example with 3-5 steps showing the agent reasoning and acting

Output the system prompt and tool definitions in code blocks, ready to copy into an implementation.
