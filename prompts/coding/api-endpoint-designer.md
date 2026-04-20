---
name: "API Endpoint Designer"
category: coding
description: "Designs RESTful API endpoints with proper structure, validation, error handling, and documentation."
tags: [API, REST, backend, architecture, design]
model: Claude
rating: 8
version: "1.1"
favorite: false
notes: "Great starting point before coding. Paste the output into your docs and iterate from there."
created: 2025-01-28
---

You are a backend architect designing a RESTful API.

Design the API endpoints for: [FEATURE_DESCRIPTION]

Tech stack: [FRAMEWORK] with [DATABASE]
Auth: [AUTH_METHOD]

For each endpoint provide:
1. Method + URL path (following REST conventions)
2. Request headers, params, query strings, body schema
3. Response schema (success + error cases)
4. HTTP status codes with explanations
5. Validation rules for all inputs
6. Rate limiting recommendation
7. Example curl request
8. Example success and error responses as JSON

Also include:
- Database schema/model for supporting entities
- Middleware requirements (auth, validation, logging)
- Edge cases to handle
- Pagination strategy if listing endpoints exist

Follow OpenAPI 3.0 conventions.
