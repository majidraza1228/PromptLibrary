---
name: "Chain-of-Thought Prompt Template"
category: meta
description: "A reusable template for building prompts that require multi-step reasoning."
tags: [chain-of-thought, reasoning, template, meta]
model: Any
rating: 9
version: "1.0"
favorite: true
notes: "This is a meta-template — embed it inside other prompts when they need complex reasoning."
created: 2025-01-14
---

You are an expert in [DOMAIN]. I need you to solve the following problem using step-by-step reasoning.

Problem: [PROBLEM_STATEMENT]

Think through this systematically:

Step 1: **Understand** — Restate the problem in your own words. Identify key constraints, inputs, and desired outputs.

Step 2: **Break Down** — Decompose the problem into smaller sub-problems. List them.

Step 3: **Analyze** — For each sub-problem, reason through possible approaches. Consider trade-offs.

Step 4: **Synthesize** — Combine your analysis into a coherent solution.

Step 5: **Verify** — Check your solution against the original requirements. Look for errors or gaps.

Step 6: **Present** — Give your final answer in [FORMAT].

Important: Show your reasoning at each step. If you're uncertain about something, say so and explain why.
