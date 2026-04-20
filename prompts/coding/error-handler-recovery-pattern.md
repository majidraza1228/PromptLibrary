---
name: "Error Handler & Recovery Pattern"
category: coding
description: "Designs comprehensive error handling for a specific feature or flow."
tags: [error-handling, resilience, architecture, patterns]
model: Claude
rating: 8
version: "1.0"
favorite: false
notes: "This one is underrated. Most bugs in production are error handling gaps, not logic errors."
created: 2025-02-03
---

Design a comprehensive error handling strategy for: [FEATURE/FLOW_DESCRIPTION]

Tech stack: [STACK]

For each potential failure point, provide:
1. **What can go wrong** — List all failure modes
2. **Detection** — How to catch/identify this error
3. **User-facing message** — What the user sees (friendly, actionable)
4. **Logging** — What to log (without exposing sensitive data)
5. **Recovery** — Retry logic, fallbacks, graceful degradation
6. **Code** — Implementation snippet

Cover these failure categories:
- Network failures (timeout, DNS, connection refused)
- API errors (4xx, 5xx, malformed responses)
- Validation errors (bad input, missing fields)
- Auth errors (expired token, insufficient permissions)
- State errors (race conditions, stale data)
- Third-party service failures

Also provide:
- A centralized error handler/middleware pattern
- Error boundary component (if frontend)
- Monitoring/alerting recommendations
