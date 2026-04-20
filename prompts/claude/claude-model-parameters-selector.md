---
name: "Claude Model & Parameters Selector"
category: claude
description: "Choose the right Claude model, temperature, max_tokens, and other API parameters for your specific use case."
tags: [model-selection, Claude, API, parameters, temperature, cost, Haiku, Sonnet, Opus]
model: Claude
rating: 9
version: "1.0"
favorite: false
notes: "Run this at the start of any new Claude integration. Getting the model and parameters right upfront saves significant debugging and cost later."
created: 2026-04-19
---

You are an expert in the Claude model family and Anthropic's API. Help me select the right model and parameters for my use case.

My use case: [USE_CASE]
Example: "A real-time coding assistant in a VS Code extension that suggests completions and explains errors."

Requirements:
- Latency needs: [LATENCY] (e.g. real-time <1s, interactive <3s, batch is fine)
- Complexity of tasks: [COMPLEXITY] (e.g. simple Q&A, multi-step reasoning, creative writing)
- Expected input size: [INPUT_SIZE] (e.g. short messages, long documents, entire codebases)
- Expected output size: [OUTPUT_SIZE] (e.g. one-liners, paragraphs, full documents)
- Budget sensitivity: [BUDGET] (e.g. cost is critical, moderate, not a concern)
- Volume: [VOLUME] (e.g. 10 req/day, 1000 req/day, 1M req/month)

Provide:
1. **Recommended model** — which Claude model (Haiku 4.5, Sonnet 4.5/4.6, Opus 4.6) with justification
2. **Parameter settings** — recommended temperature, max_tokens, top_p with explanations for each
3. **Cost estimate** — rough monthly cost at stated volume using current pricing
4. **Alternative model** — a cheaper or faster alternative with the tradeoffs
5. **When to upgrade** — signals that indicate you need a more capable model
6. **SDK snippet** — a ready-to-use Python or TypeScript API call with all recommended parameters set

Current Claude models (April 2026):
- claude-haiku-4-5: Fastest, cheapest, great for simple tasks
- claude-sonnet-4-5 / claude-sonnet-4-6: Best balance of speed, capability, cost
- claude-opus-4-6: Most capable, highest cost, best for complex reasoning
