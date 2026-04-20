---
name: "System Prompt Builder"
category: meta
description: "Creates a comprehensive system prompt for a custom AI assistant or chatbot persona."
tags: [system-prompt, chatbot, persona, meta]
model: Claude
rating: 8
version: "1.1"
favorite: false
notes: "Great for building custom GPTs, Claude Projects, or any chat-based tool with a specific persona."
created: 2025-02-02
---

Design a system prompt for a custom AI assistant with the following characteristics:

**Name**: [ASSISTANT_NAME]
**Purpose**: [WHAT_IT_DOES]
**Target Users**: [WHO_USES_IT]
**Personality**: [PERSONALITY_TRAITS — e.g., "friendly but direct, uses analogies, slightly humorous"]
**Domain Expertise**: [KNOWLEDGE_AREAS]

The system prompt should include:
1. Role definition (who the assistant is)
2. Core capabilities and boundaries (what it can and can't do)
3. Communication style guidelines
4. Response format preferences
5. Guardrails (topics to avoid, how to handle edge cases)
6. Example interaction patterns (2-3 short examples)
7. Error handling instructions (what to do when unsure)

Keep the system prompt under [MAX_WORDS] words. Make it natural, not robotic.
