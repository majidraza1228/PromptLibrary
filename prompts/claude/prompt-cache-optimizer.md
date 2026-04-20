---
name: "Prompt Cache Optimizer"
category: claude
description: "Restructure your Claude API prompts to maximize prompt caching hits and reduce cost and latency."
tags: [prompt-caching, cost-optimization, Claude, API, performance, Anthropic-SDK, tokens]
model: Claude
rating: 9
version: "1.0"
favorite: false
notes: "Most impactful for apps with large, static system prompts (docs, manuals, long instructions) that repeat across requests. Can reduce costs by 60-90% on cacheable content."
created: 2026-04-19
---

You are an expert in Claude's prompt caching feature. Help me restructure my prompts to maximize cache hits and reduce API costs.

Here is my current prompt setup:

System prompt:
```
[PASTE_SYSTEM_PROMPT]
```

Typical user message structure:
```
[PASTE_EXAMPLE_USER_MESSAGE]
```

My use case: [USE_CASE]
Example: "Customer support bot that answers questions about a 50-page product manual."

Analyze my current setup and provide:

1. **Cache hit analysis** — which parts of my current prompt are good candidates for caching vs. which change per request
2. **Restructured prompt** — rewrite the system prompt and message structure with cache_control breakpoints in the right places, following Anthropic's prompt caching API format
3. **Estimated savings** — rough estimate of token cost reduction based on typical cache hit rates
4. **Implementation code** — a Python or TypeScript snippet showing exactly how to pass the restructured prompt to the Anthropic SDK with caching enabled
5. **Caching pitfalls** — any antipatterns in my current setup that would prevent cache hits

Rules to follow:
- Static content (instructions, documents, examples) goes before dynamic content (user input)
- cache_control should be set at the last stable breakpoint before dynamic content
- Minimum cacheable block is 1024 tokens for Claude 3 models
