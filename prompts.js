// ============================================================
//  PROMPT SEED DATA
//  ─────────────────
//  To add a new prompt, copy the template below and paste it
//  at the end of the array (before the closing bracket).
//
//  TEMPLATE:
//  {
//    name: "Your Prompt Name",
//    category: "writing",       // "writing" | "coding" | "meta"
//    description: "One-line description of what this prompt does.",
//    prompt: `Your full prompt text here.
//
//  Use [VARIABLE_NAME] for parts the user should fill in.`,
//    tags: ["tag1", "tag2"],
//    model: "Claude",           // "Claude" | "GPT-4o" | "Gemini" | "Any"
//    rating: 7,                 // 1-10
//    version: "1.0",
//    favorite: false,
//    notes: "Optional tips on when or how to use this prompt.",
//    uses: 0,
//    created: "2025-02-08"      // YYYY-MM-DD
//  }
// ============================================================

const seedPrompts = [

  // ═══════════════════════════════════════════════════════════
  //  WRITING & CONTENT
  // ═══════════════════════════════════════════════════════════

  {
    name: "Blog Post Outline Generator",
    category: "writing",
    description: "Creates a structured outline for blog posts with SEO-friendly headings and key talking points.",
    prompt: `You are a senior content strategist with expertise in [NICHE/INDUSTRY].

Create a comprehensive blog post outline for the topic: "[TOPIC]"

Target audience: [AUDIENCE]
Target word count: [WORD_COUNT]
Primary keyword: [KEYWORD]

Requirements:
- Write a compelling H1 title (include primary keyword)
- Create 5-8 H2 sections with 2-3 H3 subsections each
- Include a hook intro paragraph concept
- Add key talking points under each section
- Suggest 1 data point or example per section
- End with a strong CTA section
- Include meta description suggestion (under 160 chars)

Format the outline with clear hierarchy and brief notes for each section.`,
    tags: ["blog", "outline", "SEO", "content-strategy"],
    model: "Claude",
    rating: 9,
    version: "2.1",
    favorite: true,
    notes: "Works best when you provide a specific niche. Iterate on the H2s — they become your structure.",
    uses: 24,
    created: "2025-01-15"
  },

  {
    name: "Email Rewriter — Tone Shifting",
    category: "writing",
    description: "Rewrites an email draft in a specified tone while preserving the core message.",
    prompt: `Rewrite the following email in a [TONE] tone.

Tone options: professional, friendly-casual, assertive, empathetic, concise-executive

Original email:
"""
[PASTE_EMAIL_HERE]
"""

Rules:
- Preserve ALL key information and requests
- Adjust formality, word choice, and sentence structure to match the tone
- Keep it under [MAX_SENTENCES] sentences
- If the tone is "concise-executive", cut to 3-5 sentences max
- Suggest a subject line that matches the tone`,
    tags: ["email", "rewriting", "tone", "communication"],
    model: "Claude",
    rating: 8,
    version: "1.3",
    favorite: false,
    notes: "Great for adjusting client emails. The 'concise-executive' option is a lifesaver for long-winded drafts.",
    uses: 18,
    created: "2025-01-20"
  },

  {
    name: "Technical Writing Simplifier",
    category: "writing",
    description: "Takes complex technical content and rewrites it for a non-technical audience.",
    prompt: `You are a technical writer who specializes in making complex concepts accessible.

Rewrite the following technical content for [AUDIENCE_LEVEL]:
- "beginner" = no jargon, use analogies, assume zero background
- "intermediate" = some jargon okay, assume basic familiarity
- "executive" = high-level, focus on business impact, no implementation details

Technical content:
"""
[TECHNICAL_CONTENT]
"""

Guidelines:
- Replace jargon with plain language (or define it in parentheses)
- Use 1-2 real-world analogies
- Keep paragraphs to 3 sentences max
- Add a TL;DR at the top (2 sentences)
- Highlight key takeaways at the end`,
    tags: ["technical-writing", "simplification", "docs"],
    model: "Claude",
    rating: 9,
    version: "1.0",
    favorite: true,
    notes: "The 'executive' level is perfect for stakeholder updates. Claude handles nuance here better than GPT.",
    uses: 12,
    created: "2025-02-01"
  },

  {
    name: "Social Media Thread Creator",
    category: "writing",
    description: "Turns a topic or article into a viral-worthy social media thread with hooks and engagement tactics.",
    prompt: `Create a [PLATFORM] thread/post series about: "[TOPIC]"

Platform: [Twitter/LinkedIn/Threads]
Thread length: [NUMBER] posts
Voice: [VOICE_DESCRIPTION]

Structure each post:
1. HOOK POST: Open with a bold claim, contrarian take, or surprising stat
2. BODY POSTS: One clear idea per post, use line breaks for readability
3. Each post should end with a micro-hook leading to the next
4. FINAL POST: Strong CTA (follow, share, comment prompt, or link)

Rules:
- No hashtags in the body (only last post if needed)
- Use concrete numbers and examples over vague claims
- Write at a 6th-grade reading level
- Each post: max 280 chars for Twitter, 3000 for LinkedIn`,
    tags: ["social-media", "threads", "twitter", "linkedin", "engagement"],
    model: "Any",
    rating: 7,
    version: "1.2",
    favorite: false,
    notes: "Swap VOICE_DESCRIPTION with something specific like 'snarky startup founder' or 'thoughtful researcher'.",
    uses: 9,
    created: "2025-01-25"
  },

  {
    name: "Storytelling Framework — Hero's Journey",
    category: "writing",
    description: "Structures any content using the Hero's Journey narrative framework for maximum engagement.",
    prompt: `You are a narrative strategist. Transform the following content/idea into a compelling story using the Hero's Journey framework.

Content/Idea: "[CONTENT]"
Format: [blog post / presentation / case study / video script]
Length: [SHORT/MEDIUM/LONG]

Map to these beats:
1. THE ORDINARY WORLD — Set the scene. What was life like before?
2. THE CALL — What problem or opportunity appeared?
3. THE RESISTANCE — Why was it hard? What obstacles existed?
4. THE MENTOR/TOOL — What insight, person, or solution appeared?
5. THE TRANSFORMATION — What changed? Show the journey.
6. THE RETURN — What's the new reality? What was learned?

Write it in [FIRST_PERSON/THIRD_PERSON] and make it feel authentic, not formulaic.`,
    tags: ["storytelling", "framework", "narrative", "content"],
    model: "Claude",
    rating: 8,
    version: "1.0",
    favorite: false,
    notes: "Excellent for case studies and 'About Us' pages. The framework works for any story-driven content.",
    uses: 6,
    created: "2025-02-03"
  },

  {
    name: "Newsletter Writer",
    category: "writing",
    description: "Writes engaging newsletter editions with a consistent voice and structure.",
    prompt: `Write a newsletter edition for my [NICHE] newsletter called "[NEWSLETTER_NAME]".

Voice: [VOICE — e.g., "witty and insightful like Morning Brew meets Seth Godin"]
Audience: [AUDIENCE_DESCRIPTION]

Topic for this edition: [TOPIC]

Structure:
1. **Subject Line** — 3 options (curiosity-driven, benefit-driven, and contrarian)
2. **Preview Text** — 1 sentence that complements the subject line
3. **Opening Hook** — 2-3 sentences, personal or surprising
4. **Main Content** — [WORD_COUNT] words, use subheadings and short paragraphs
5. **Key Takeaway** — Boxed/highlighted insight
6. **CTA** — What should the reader do next?
7. **P.S.** — A personal note, fun fact, or teaser for next edition

Formatting: Use short paragraphs (2-3 sentences max). Bold key phrases. No walls of text.`,
    tags: ["newsletter", "email", "content", "engagement"],
    model: "Claude",
    rating: 8,
    version: "1.0",
    favorite: false,
    notes: "The 3 subject line options are clutch — test them with your email platform's A/B testing.",
    uses: 5,
    created: "2025-02-06"
  },

  // ═══════════════════════════════════════════════════════════
  //  CODING & DEV
  // ═══════════════════════════════════════════════════════════

  {
    name: "Code Review — Senior Dev Perspective",
    category: "coding",
    description: "Performs a thorough code review like a senior developer, catching bugs, suggesting improvements, and explaining why.",
    prompt: `You are a senior software engineer conducting a code review. You are thorough but kind — you explain the "why" behind every suggestion.

Review the following [LANGUAGE] code:

\`\`\`[LANGUAGE]
[PASTE_CODE_HERE]
\`\`\`

Analyze for:
1. **Bugs & Logic Errors** — Anything that will break or produce wrong results
2. **Security Issues** — SQL injection, XSS, auth holes, data exposure
3. **Performance** — N+1 queries, unnecessary loops, memory leaks
4. **Readability** — Naming, structure, comments, code organization
5. **Architecture** — Design patterns, separation of concerns, SOLID principles
6. **What's Good** — Call out well-written parts (important for morale!)

For each issue:
- Quote the specific line(s)
- Explain the problem in plain language
- Provide the corrected code
- Rate severity: critical / suggestion / nitpick`,
    tags: ["code-review", "debugging", "best-practices", "quality"],
    model: "Claude",
    rating: 10,
    version: "2.0",
    favorite: true,
    notes: "This is a workhorse prompt. Use it before every PR. The severity ratings help prioritize fixes.",
    uses: 45,
    created: "2025-01-10"
  },

  {
    name: "Debug Detective",
    category: "coding",
    description: "Systematically diagnoses bugs by walking through the code step-by-step like a detective.",
    prompt: `You are a debugging expert. I have a bug and need your help finding the root cause.

**Language/Framework**: [LANGUAGE/FRAMEWORK]
**What should happen**: [EXPECTED_BEHAVIOR]
**What actually happens**: [ACTUAL_BEHAVIOR]
**Error message (if any)**: [ERROR]

Code:
\`\`\`
[PASTE_CODE_HERE]
\`\`\`

Debug systematically:
1. First, restate the problem in your own words to confirm understanding
2. List 3-5 most likely root causes, ranked by probability
3. For each candidate, explain the reasoning
4. Identify the actual root cause with evidence
5. Provide the fix with before/after code
6. Explain WHY this fix works
7. Suggest a test case to verify the fix
8. Flag any related issues you noticed along the way

Think step by step. Show your reasoning.`,
    tags: ["debugging", "problem-solving", "systematic"],
    model: "Claude",
    rating: 9,
    version: "1.5",
    favorite: true,
    notes: "The step-by-step reasoning makes this far more reliable than 'fix my code'. Always include the error message.",
    uses: 33,
    created: "2025-01-12"
  },

  {
    name: "API Endpoint Designer",
    category: "coding",
    description: "Designs RESTful API endpoints with proper structure, validation, error handling, and documentation.",
    prompt: `You are a backend architect designing a RESTful API.

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

Follow OpenAPI 3.0 conventions.`,
    tags: ["API", "REST", "backend", "architecture", "design"],
    model: "Claude",
    rating: 8,
    version: "1.1",
    favorite: false,
    notes: "Great starting point before coding. Paste the output into your docs and iterate from there.",
    uses: 11,
    created: "2025-01-28"
  },

  {
    name: "Refactor with Explanation",
    category: "coding",
    description: "Refactors code while explaining every decision, so you actually learn from the changes.",
    prompt: `You are a patient senior developer pair-programming with me. Refactor the following code and TEACH me as you go.

\`\`\`[LANGUAGE]
[PASTE_CODE_HERE]
\`\`\`

Refactoring goals: [GOALS — e.g., "improve readability", "add error handling", "make it more testable", "reduce complexity"]

For each change you make:
1. Show the BEFORE snippet
2. Show the AFTER snippet
3. Explain WHY this change improves the code
4. Rate the impact: high / medium / low

At the end, provide:
- The complete refactored code
- A summary of all changes made
- Suggested next steps for further improvement
- Any tests that should be written for the refactored code`,
    tags: ["refactoring", "learning", "clean-code", "mentoring"],
    model: "Claude",
    rating: 9,
    version: "1.2",
    favorite: true,
    notes: "The teaching aspect makes this way better than 'just refactor my code'. Great for leveling up.",
    uses: 22,
    created: "2025-01-18"
  },

  {
    name: "Unit Test Generator",
    category: "coding",
    description: "Generates comprehensive unit tests with edge cases, mocking, and clear test descriptions.",
    prompt: `Generate comprehensive unit tests for the following [LANGUAGE] code using [TEST_FRAMEWORK]:

\`\`\`[LANGUAGE]
[PASTE_CODE_HERE]
\`\`\`

Requirements:
- Use describe/it (or equivalent) blocks with clear, readable test names
- Follow the Arrange-Act-Assert pattern
- Cover these scenarios:
  Happy path (expected inputs -> expected outputs)
  Error cases (invalid inputs, missing data, null/undefined)
  Edge cases (empty arrays, zero values, max limits, unicode, etc.)
  Boundary conditions
- Mock external dependencies with clear mock setup
- Include at least [MIN_TESTS] test cases
- Add comments explaining WHY each test matters, not just WHAT it tests

Output format:
1. Test file with all tests
2. A coverage summary (which paths are tested)
3. Any untestable code you noticed (and suggestions to make it testable)`,
    tags: ["testing", "unit-tests", "TDD", "quality"],
    model: "Any",
    rating: 8,
    version: "1.0",
    favorite: false,
    notes: "Specify the test framework explicitly (Jest, Pytest, etc.) for best results.",
    uses: 15,
    created: "2025-02-01"
  },

  {
    name: "Database Schema Designer",
    category: "coding",
    description: "Designs normalized database schemas with relationships, indexes, and migration scripts.",
    prompt: `You are a database architect. Design a database schema for: [APP_DESCRIPTION]

Database: [PostgreSQL / MySQL / MongoDB]

Requirements:
- [LIST KEY ENTITIES AND RELATIONSHIPS]

Deliver:
1. Entity-relationship description (entities, their attributes, relationships)
2. Complete schema with:
   - Table/collection definitions
   - Data types with constraints (NOT NULL, UNIQUE, CHECK, etc.)
   - Primary and foreign keys
   - Indexes (with justification for each)
   - Default values where appropriate
3. Migration script (CREATE TABLE statements or equivalent)
4. Seed data script (5-10 realistic sample records per table)
5. Common query patterns with example SQL
6. Notes on:
   - Normalization decisions and trade-offs
   - Scaling considerations
   - Potential N+1 query pitfalls`,
    tags: ["database", "schema", "SQL", "architecture", "design"],
    model: "Claude",
    rating: 8,
    version: "1.0",
    favorite: false,
    notes: "List your entities explicitly for best results. Works great as a starting point before migration files.",
    uses: 8,
    created: "2025-02-05"
  },

  {
    name: "MCP Server Builder — Streamable HTTP & stdio",
    category: "coding",
    description: "Builds a production-ready Model Context Protocol (MCP) server with both Streamable HTTP and stdio transports, including tools, resources, and prompts.",
    prompt: `You are an expert backend engineer specializing in the Model Context Protocol (MCP). Build a complete MCP server for: [SERVER_PURPOSE]

Language/Runtime: [TypeScript+Node / Python / Go]
Primary Transport: [Streamable HTTP / stdio / both]

The server should expose:
- Tools: [LIST_TOOLS — e.g., "search_docs, run_query, create_record"]
- Resources (optional): [LIST_RESOURCES — e.g., "config://settings, db://schema"]
- Prompts (optional): [LIST_PROMPTS — e.g., "summarize, analyze"]

═══════════════════════════════════════════
PART 1 — STDIO TRANSPORT
═══════════════════════════════════════════

Implement the stdio transport layer:
- Communication over stdin/stdout using newline-delimited JSON-RPC 2.0 messages
- MUST use stderr for logging (never pollute stdout)
- Handle the full MCP lifecycle:
  1. \`initialize\` — Capability negotiation (protocolVersion, capabilities, clientInfo/serverInfo)
  2. \`initialized\` — Notification confirming handshake complete
  3. \`tools/list\` — Return available tools with JSON Schema input definitions
  4. \`tools/call\` — Execute a tool and return content (text, image, or embedded resource)
  5. \`resources/list\` & \`resources/read\` — If resources are defined
  6. \`prompts/list\` & \`prompts/get\` — If prompts are defined
  7. \`ping\` — Respond with empty result for keepalive
- Graceful shutdown on SIGTERM/SIGINT
- Proper error responses with JSON-RPC error codes (-32600, -32601, -32602, -32603)

═══════════════════════════════════════════
PART 2 — STREAMABLE HTTP TRANSPORT
═══════════════════════════════════════════

Implement the Streamable HTTP transport layer:
- Single HTTP endpoint at \`/mcp\` (POST) that accepts JSON-RPC messages
- Response behavior:
  - For requests (has \`id\`): Return SSE stream (\`text/event-stream\`) with the result as an SSE event, OR return a single JSON response (\`application/json\`) for simple cases
  - For notifications (no \`id\`): Return 202 Accepted with no body
  - For batched requests: Stream multiple SSE events, one per response
- SSE event format: \`event: message\\ndata: {json-rpc response}\\n\\n\`
- Session management:
  - Generate \`Mcp-Session-Id\` header on successful \`initialize\` response
  - Require \`Mcp-Session-Id\` on all subsequent requests (return 400 if missing/invalid)
  - Support \`DELETE /mcp\` to terminate sessions
- GET \`/mcp\` should open an SSE stream for server-initiated notifications/requests (optional but recommended)
- Support proper CORS headers for browser-based clients
- Content-Type negotiation: Accept both \`application/json\` and handle \`Accept: text/event-stream\`

═══════════════════════════════════════════
PART 3 — TOOL IMPLEMENTATION
═══════════════════════════════════════════

For each tool:
1. Define the tool with: name, description, and inputSchema (JSON Schema with required fields)
2. Implement the handler with:
   - Input validation against the schema
   - Core logic
   - Structured return: \`{ content: [{ type: "text", text: "..." }], isError?: boolean }\`
3. Handle errors gracefully — return isError:true with a human-readable message, don't throw

═══════════════════════════════════════════
PART 4 — PROJECT STRUCTURE & DELIVERABLES
═══════════════════════════════════════════

Deliver:
1. Complete source code with clear file structure
2. \`package.json\` / \`pyproject.toml\` with MCP SDK dependency
3. Entry point for stdio mode (e.g., \`node server.js --stdio\`)
4. Entry point for HTTP mode (e.g., \`node server.js --http --port 3000\`)
5. MCP client config snippet for Claude Desktop / Claude Code:
   \`\`\`json
   {
     "mcpServers": {
       "[SERVER_NAME]": {
         "command": "node",
         "args": ["path/to/server.js"],
         "env": {}
       }
     }
   }
   \`\`\`
6. Example test commands using curl for the HTTP transport
7. README with setup instructions

═══════════════════════════════════════════
IMPORTANT SPEC COMPLIANCE
═══════════════════════════════════════════

- Protocol version: "2025-03-26" (latest)
- JSON-RPC version: "2.0" (always include \`jsonrpc: "2.0"\` in messages)
- All tool inputSchemas MUST be valid JSON Schema with \`type: "object"\`
- Never mix stdout logging with stdio transport — use stderr
- Streamable HTTP MUST support both SSE streaming and plain JSON responses
- Include proper \`_meta\` and \`progressToken\` support for long-running tools if applicable
- Handle cancellation via \`notifications/cancelled\` for both transports`,
    tags: ["MCP", "server", "protocol", "stdio", "streamable-http", "tools", "AI-integration"],
    model: "Claude",
    rating: 9,
    version: "1.0",
    favorite: true,
    notes: "Use the official MCP SDK (@modelcontextprotocol/sdk for TS, mcp for Python) instead of raw implementation. Specify your tools clearly — the more detail, the better the generated handlers. Test stdio with 'echo {jsonrpc request} | node server.js --stdio' and HTTP with curl.",
    uses: 0,
    created: "2026-02-09"
  },

  {
    name: "Regex Builder & Explainer",
    category: "coding",
    description: "Builds and explains regex patterns step by step, because nobody actually memorizes regex.",
    prompt: `Build a regular expression for the following requirement:

**What to match**: [DESCRIPTION_OF_PATTERN]
**Language**: [LANGUAGE — affects regex flavor]
**Examples that SHOULD match**:
- [EXAMPLE_1]
- [EXAMPLE_2]
**Examples that should NOT match**:
- [NON_EXAMPLE_1]
- [NON_EXAMPLE_2]

Provide:
1. The regex pattern
2. Character-by-character explanation of what each part does
3. A visual breakdown (group the regex into logical segments)
4. Test it against all provided examples (show match/no-match)
5. Common edge cases this pattern might miss
6. The code snippet to use it in [LANGUAGE] (with named capture groups if applicable)`,
    tags: ["regex", "patterns", "utility"],
    model: "Any",
    rating: 7,
    version: "1.0",
    favorite: false,
    notes: "Always include both match and non-match examples — it dramatically improves accuracy.",
    uses: 10,
    created: "2025-01-22"
  },

  {
    name: "Git Commit Message & PR Description",
    category: "coding",
    description: "Generates conventional commit messages and detailed PR descriptions from a diff or summary.",
    prompt: `Generate a git commit message AND pull request description for the following changes.

**What changed (or paste diff)**:
[CHANGES_DESCRIPTION]

**Type of change**: [feat / fix / refactor / docs / test / chore / perf]

Commit message format (Conventional Commits):
<type>(<scope>): <short description>

<body — what and why, not how>

<footer — breaking changes, issue refs>

PR Description format:
## What
[1-2 sentence summary]

## Why
[Context and motivation]

## How
[Key implementation decisions]

## Testing
[How this was tested]

## Screenshots
[If UI changes — note where to add them]

## Checklist
- [ ] Tests pass
- [ ] No console errors
- [ ] Reviewed my own code
- [ ] Updated documentation`,
    tags: ["git", "PR", "workflow", "documentation"],
    model: "Any",
    rating: 7,
    version: "1.0",
    favorite: false,
    notes: "Paste your actual diff for the most accurate commit messages.",
    uses: 14,
    created: "2025-01-30"
  },

  {
    name: "Documentation Writer — README",
    category: "coding",
    description: "Generates a professional, comprehensive README.md for any project.",
    prompt: `Generate a professional README.md for the following project:

**Project Name**: [PROJECT_NAME]
**Description**: [BRIEF_DESCRIPTION]
**Tech Stack**: [TECHNOLOGIES]
**Target Users**: [WHO_IS_THIS_FOR]

Include these sections:
1. Project title + badge placeholders (build status, version, license)
2. One-paragraph description with key value proposition
3. Features list (bullet points)
4. Quick Start (numbered steps, copy-pasteable commands)
5. Prerequisites
6. Installation (with code blocks)
7. Usage examples (with code blocks)
8. Project structure (file tree)
9. Contributing guidelines (brief)
10. License
11. Contact/Support

Write in clear, scannable markdown. Assume the reader has 30 seconds to decide if they care about this project.`,
    tags: ["documentation", "README", "open-source", "markdown"],
    model: "Any",
    rating: 8,
    version: "1.0",
    favorite: false,
    notes: "Fill in the project details thoroughly — the more context, the less you'll need to edit the output.",
    uses: 9,
    created: "2025-01-26"
  },

  {
    name: "Component Builder — React/TypeScript",
    category: "coding",
    description: "Builds a production-ready React component with TypeScript, tests, and Storybook story.",
    prompt: `Build a production-ready React component.

**Component Name**: [COMPONENT_NAME]
**Purpose**: [WHAT_IT_DOES]
**Props**: [LIST_KEY_PROPS]
**Variants/States**: [e.g., "loading, error, empty, populated"]

Requirements:
- TypeScript with strict types (no \`any\`)
- Functional component with hooks
- Props interface exported separately
- Default props where sensible
- Accessible (ARIA labels, keyboard navigation, semantic HTML)
- Responsive (works on mobile)
- CSS approach: [Tailwind / CSS Modules / styled-components]

Deliver:
1. \`[ComponentName].tsx\` — The component
2. \`[ComponentName].types.ts\` — TypeScript interfaces
3. \`[ComponentName].test.tsx\` — Unit tests (React Testing Library)
4. \`[ComponentName].stories.tsx\` — Storybook story with all variants
5. Usage example with sample data`,
    tags: ["react", "typescript", "component", "frontend"],
    model: "Claude",
    rating: 8,
    version: "1.1",
    favorite: false,
    notes: "Always specify your CSS approach. The Storybook output is a nice bonus for component libraries.",
    uses: 13,
    created: "2025-01-19"
  },

  {
    name: "Error Handler & Recovery Pattern",
    category: "coding",
    description: "Designs comprehensive error handling for a specific feature or flow.",
    prompt: `Design a comprehensive error handling strategy for: [FEATURE/FLOW_DESCRIPTION]

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
- Monitoring/alerting recommendations`,
    tags: ["error-handling", "resilience", "architecture", "patterns"],
    model: "Claude",
    rating: 8,
    version: "1.0",
    favorite: false,
    notes: "This one is underrated. Most bugs in production are error handling gaps, not logic errors.",
    uses: 6,
    created: "2025-02-03"
  },

  // ═══════════════════════════════════════════════════════════
  //  META / PROMPT ENGINEERING
  // ═══════════════════════════════════════════════════════════

  {
    name: "Prompt Improver",
    category: "meta",
    description: "Takes a basic prompt and upgrades it using prompt engineering best practices.",
    prompt: `You are a prompt engineering expert. Improve the following prompt using best practices:

Original prompt:
"""
[PASTE_ORIGINAL_PROMPT]
"""

Apply these improvements:
1. Add a clear ROLE and CONTEXT at the start
2. Make instructions specific and unambiguous
3. Add CONSTRAINTS (format, length, tone, what to avoid)
4. Insert [VARIABLES] for reusable parts
5. Add 1-2 few-shot examples if applicable
6. Include an output format specification
7. Add a chain-of-thought instruction if reasoning is needed

Provide:
- The improved prompt (ready to copy-paste)
- A changelog explaining each improvement and why
- Rate the original prompt (1-10) and the improved version (1-10)`,
    tags: ["meta", "prompt-engineering", "improvement", "optimization"],
    model: "Claude",
    rating: 10,
    version: "2.0",
    favorite: true,
    notes: "Use this on your own prompts before adding them to the library. It catches things you miss.",
    uses: 30,
    created: "2025-01-08"
  },

  {
    name: "System Prompt Builder",
    category: "meta",
    description: "Creates a comprehensive system prompt for a custom AI assistant or chatbot persona.",
    prompt: `Design a system prompt for a custom AI assistant with the following characteristics:

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

Keep the system prompt under [MAX_WORDS] words. Make it natural, not robotic.`,
    tags: ["system-prompt", "chatbot", "persona", "meta"],
    model: "Claude",
    rating: 8,
    version: "1.1",
    favorite: false,
    notes: "Great for building custom GPTs, Claude Projects, or any chat-based tool with a specific persona.",
    uses: 7,
    created: "2025-02-02"
  },

  {
    name: "Prompt A/B Test Designer",
    category: "meta",
    description: "Creates two variant prompts from one concept so you can test which performs better.",
    prompt: `I want to A/B test a prompt. Here's my goal:

**Task**: [WHAT_THE_PROMPT_SHOULD_DO]
**Current prompt (if any)**: [CURRENT_PROMPT]
**What I'm optimizing for**: [METRIC — e.g., "accuracy", "creativity", "conciseness", "user satisfaction"]

Create two meaningfully different prompt variants:

**Variant A — [APPROACH_NAME]**
[Full prompt using approach A — e.g., more structured/constrained]

**Variant B — [APPROACH_NAME]**
[Full prompt using approach B — e.g., more open/creative]

For each variant, explain:
- The strategy behind this approach
- When this variant would likely outperform the other
- Potential weaknesses

Then provide:
- A scoring rubric (3-5 criteria) to evaluate outputs from both variants
- Suggested test cases (3 inputs to try with each variant)`,
    tags: ["testing", "optimization", "A/B", "meta"],
    model: "Any",
    rating: 7,
    version: "1.0",
    favorite: false,
    notes: "The scoring rubric is key — without it you'll just pick whichever 'feels' better, which isn't reliable.",
    uses: 4,
    created: "2025-02-04"
  },

  {
    name: "Chain-of-Thought Prompt Template",
    category: "meta",
    description: "A reusable template for building prompts that require multi-step reasoning.",
    prompt: `You are an expert in [DOMAIN]. I need you to solve the following problem using step-by-step reasoning.

Problem: [PROBLEM_STATEMENT]

Think through this systematically:

Step 1: **Understand** — Restate the problem in your own words. Identify key constraints, inputs, and desired outputs.

Step 2: **Break Down** — Decompose the problem into smaller sub-problems. List them.

Step 3: **Analyze** — For each sub-problem, reason through possible approaches. Consider trade-offs.

Step 4: **Synthesize** — Combine your analysis into a coherent solution.

Step 5: **Verify** — Check your solution against the original requirements. Look for errors or gaps.

Step 6: **Present** — Give your final answer in [FORMAT].

Important: Show your reasoning at each step. If you're uncertain about something, say so and explain why.`,
    tags: ["chain-of-thought", "reasoning", "template", "meta"],
    model: "Any",
    rating: 9,
    version: "1.0",
    favorite: true,
    notes: "This is a meta-template — embed it inside other prompts when they need complex reasoning.",
    uses: 19,
    created: "2025-01-14"
  },

  {
    name: "Mega Prompt Architect",
    category: "meta",
    description: "Creates a detailed, structured mega-prompt for complex multi-step tasks.",
    prompt: `I need a comprehensive mega-prompt for the following complex task:

**Task**: [COMPLEX_TASK_DESCRIPTION]
**Context**: [RELEVANT_BACKGROUND]
**Constraints**: [LIMITATIONS, REQUIREMENTS]
**Desired Output**: [WHAT_THE_FINAL_RESULT_SHOULD_LOOK_LIKE]

Build a mega-prompt that includes:
1. **Role Assignment** — A specific expert persona with relevant credentials
2. **Context Block** — All background information the AI needs
3. **Task Breakdown** — Numbered steps with clear instructions for each
4. **Constraints Block** — What to do and what to avoid
5. **Output Specification** — Exact format, structure, length
6. **Quality Checks** — Self-verification steps the AI should perform
7. **[VARIABLE] Placeholders** — For all parts that change between uses
8. **Few-Shot Examples** — 1-2 input/output examples

Format the mega-prompt so it's ready to copy-paste. Use XML-style tags for structure if the prompt is over 500 words.`,
    tags: ["mega-prompt", "complex", "architecture", "meta"],
    model: "Claude",
    rating: 9,
    version: "1.0",
    favorite: true,
    notes: "Use this when you need a prompt for a complex, multi-step task. The XML tags tip is key for long prompts.",
    uses: 11,
    created: "2025-01-16"
  },

  // ─── Architecture Review ─────────────────────────────────────
  {
    name: "Architecture Review — Comprehensive System Analysis",
    category: "coding",
    description: "Performs an exhaustive architecture review covering system design, platform engineering, security, observability, support operations, failure handling, and SaaS vs on-prem considerations.",
    prompt: `You are a principal architect and engineering leadership advisor with deep expertise in distributed systems, platform engineering, cloud infrastructure, security, and operational excellence. You have been handed an architecture document (or description) and must conduct a **comprehensive architecture review**.

═══════════════════════════════════════════════════════════════
INPUT — Provide the architecture details below
═══════════════════════════════════════════════════════════════

**System/Project Name**: [SYSTEM_NAME]
**Architecture Document or Description**: [PASTE_ARCHITECTURE_DOC_OR_DESCRIPTION]
**Tech Stack**: [LANGUAGES, FRAMEWORKS, DATABASES, CLOUD_PROVIDER]
**Deployment Model**: [SaaS / On-Prem / Hybrid / Internal Tool]
**Current Scale**: [USERS, REQUESTS_PER_SEC, DATA_VOLUME]
**Team Size & Structure**: [TEAM_COMPOSITION]

═══════════════════════════════════════════════════════════════
SECTION 1 — GENERAL ARCHITECTURE DESIGN
═══════════════════════════════════════════════════════════════

Analyze and answer the following comprehensively:

**1.1 Architecture Pattern & Style**
- What architecture pattern is being used (monolith, microservices, modular monolith, event-driven, CQRS, hexagonal, serverless, hybrid)? Is this the right choice for the stated requirements?
- Are service boundaries well-defined? Are there any signs of a distributed monolith?
- How is inter-service communication handled (sync REST/gRPC, async messaging, event streaming)? Are there potential coupling issues?
- Is there a clear separation of concerns across layers (presentation, business logic, data access)?

**1.2 Data Architecture**
- What databases and data stores are used? Is the choice appropriate for each use case (relational vs document vs key-value vs graph vs time-series)?
- How is data consistency handled — strong consistency, eventual consistency, or saga pattern?
- What is the data flow across services? Are there single sources of truth or is data duplicated without clear ownership?
- How are database migrations handled? Is there a schema versioning strategy?
- Is there a caching strategy? What layers have caching (CDN, application, database, session)?

**1.3 API Design & Contracts**
- Are APIs versioned? What is the versioning strategy (URL path, headers, query params)?
- Are API contracts documented (OpenAPI/Swagger, GraphQL schema, protobuf definitions)?
- How are breaking changes managed? Is there a deprecation policy?
- Are there API gateways in place? How is request routing, rate limiting, and throttling handled?

**1.4 Scalability & Performance**
- What are the identified bottlenecks? Where will the system break first under 10x load?
- Is horizontal scaling supported? Are services stateless where they need to be?
- How is load balancing configured? What algorithm is used and is it appropriate?
- Are there any single points of failure (SPOF)? What is the redundancy strategy?
- What is the latency budget for critical user flows? Are there SLAs defined?

**1.5 Resilience & Fault Tolerance**
- Are circuit breakers, retries with exponential backoff, and timeouts implemented?
- How does the system handle partial failures and graceful degradation?
- Is there a bulkhead pattern to isolate failures?
- What is the disaster recovery (DR) strategy? What is the RPO and RTO?
- Are there chaos engineering practices in place?

═══════════════════════════════════════════════════════════════
SECTION 2 — PLATFORM ENGINEERING
═══════════════════════════════════════════════════════════════

**2.1 Infrastructure & Deployment**
- What is the infrastructure provisioning approach (Terraform, Pulumi, CloudFormation, CDK, manual)?
- Is infrastructure as code (IaC) consistently used? Is there drift detection?
- What is the deployment strategy (blue-green, canary, rolling, recreate)? Is zero-downtime deployment supported?
- How are environments structured (dev, staging, pre-prod, prod)? Is there environment parity?
- Are there ephemeral environments for feature branches or PR reviews?

**2.2 CI/CD Pipeline**
- What does the CI/CD pipeline look like end-to-end? What tools are used (GitHub Actions, GitLab CI, Jenkins, ArgoCD)?
- What is the average build time? Is there build caching and parallelization?
- What gates exist before production deployment (tests, security scans, approvals, smoke tests)?
- How are rollbacks handled? Can you roll back in under 5 minutes?
- Is there a GitOps workflow? How is the desired state reconciled?

**2.3 Container & Orchestration**
- Are containers used? How are images built, scanned, and stored?
- If Kubernetes: How are clusters managed? What is the namespace strategy? Are resource limits and requests set?
- How is service mesh handled (Istio, Linkerd, none)? Is it necessary at current scale?
- What is the secrets management approach (Vault, AWS Secrets Manager, K8s secrets, sealed secrets)?

**2.4 Developer Experience (DevEx)**
- How easy is it for a new developer to set up the local environment and run the system?
- Is there an internal developer portal or platform (Backstage, custom)?
- Are there golden paths or templates for creating new services?
- What is the inner loop development experience like (local dev, hot reload, debugging)?

═══════════════════════════════════════════════════════════════
SECTION 3 — SECURITY
═══════════════════════════════════════════════════════════════

**3.1 Authentication & Authorization**
- What authentication mechanism is used (OAuth 2.0, OIDC, SAML, API keys, JWT, mTLS)?
- How is authorization handled (RBAC, ABAC, policy engines like OPA)?
- Is there a centralized identity provider? How are service-to-service auth and user auth separated?
- How are tokens managed (expiry, refresh, revocation, rotation)?
- Is multi-factor authentication (MFA) enforced for admin and privileged access?

**3.2 Data Security**
- Is data encrypted at rest and in transit? What encryption standards are used?
- How is PII/sensitive data handled? Is there data classification?
- Are there data retention and deletion policies (GDPR, CCPA compliance)?
- How are database credentials and API keys stored and rotated?
- Is there field-level encryption for sensitive fields?

**3.3 Network Security**
- What is the network topology? Are services in private subnets with proper security groups?
- Is there a WAF (Web Application Firewall) in front of public endpoints?
- How is egress traffic controlled? Is there an allowlist for outbound connections?
- Are there network policies (in Kubernetes) or security groups restricting east-west traffic?
- Is DDoS protection in place?

**3.4 Application Security**
- Is there a secure development lifecycle (SDL) in place?
- Are SAST (static analysis), DAST (dynamic analysis), and SCA (software composition analysis) integrated into CI/CD?
- How are dependencies managed and vulnerabilities tracked (Dependabot, Snyk, Trivy)?
- Is there input validation and output encoding at all entry points?
- How are OWASP Top 10 vulnerabilities mitigated?

**3.5 Compliance & Audit**
- What compliance frameworks apply (SOC 2, ISO 27001, HIPAA, PCI-DSS, FedRAMP)?
- Is there an audit trail for all administrative and data-access operations?
- How are access reviews conducted? Is the principle of least privilege enforced?
- Are there penetration testing and bug bounty programs?

═══════════════════════════════════════════════════════════════
SECTION 4 — OBSERVABILITY
═══════════════════════════════════════════════════════════════

**4.1 Logging**
- What logging stack is used (ELK, Loki, CloudWatch, Datadog, Splunk)?
- Is there structured logging with consistent format across all services?
- Are log levels used appropriately? Is there a log level management strategy?
- How long are logs retained? Is there a tiered storage strategy (hot/warm/cold)?
- Are sensitive data fields redacted from logs?

**4.2 Metrics & Monitoring**
- What metrics platform is used (Prometheus, Datadog, CloudWatch, New Relic, Grafana)?
- Are the four golden signals monitored (latency, traffic, errors, saturation)?
- Are there RED metrics (Rate, Errors, Duration) for each service?
- Are there USE metrics (Utilization, Saturation, Errors) for infrastructure?
- Are SLIs, SLOs, and SLAs defined? How are error budgets tracked?
- Are there dashboards for each service and for business-level KPIs?

**4.3 Distributed Tracing**
- Is distributed tracing implemented (Jaeger, Zipkin, OpenTelemetry, Datadog APM, X-Ray)?
- Are trace IDs propagated across all service boundaries including async flows?
- Can you trace a single user request end-to-end across all services?
- Are traces correlated with logs and metrics?

**4.4 Alerting & On-Call**
- What alerting tool is used (PagerDuty, OpsGenie, custom)?
- Are alerts based on SLOs and error budgets rather than arbitrary thresholds?
- Is there alert fatigue? How many alerts fire per week and how many are actionable?
- Are there runbooks linked to each alert?
- What is the on-call rotation structure? Is there an escalation policy?

═══════════════════════════════════════════════════════════════
SECTION 5 — SUPPORT OPERATIONS & INCIDENT MANAGEMENT
═══════════════════════════════════════════════════════════════

**5.1 Support Team Workflow**
- How does the support team triage and diagnose issues? What tools do they have access to?
- Is there a tiered support model (L1/L2/L3)? What are the escalation criteria?
- Can support team members safely access production data for debugging without direct database access?
- Are there admin tools, internal dashboards, or back-office UIs for common support operations?
- How are support tickets tracked and correlated with engineering work?

**5.2 Incident Management**
- Is there a defined incident response process (detect, respond, mitigate, resolve, review)?
- What severity levels exist (SEV1-SEV4)? What are the response time expectations for each?
- How are incidents communicated to stakeholders and customers (status page, email, Slack)?
- Is there a blameless post-mortem process? Are action items tracked to completion?
- What is the Mean Time to Detect (MTTD) and Mean Time to Resolve (MTTR)?

**5.3 Knowledge Management**
- Is there a runbook library for common operational procedures?
- Are architecture decision records (ADRs) maintained?
- Is tribal knowledge documented or does it exist only in people's heads?
- How is on-call handoff managed?

═══════════════════════════════════════════════════════════════
SECTION 6 — JOB & BATCH PROCESSING FAILURE HANDLING
═══════════════════════════════════════════════════════════════

**6.1 Scheduled Jobs & Background Processing**
- What job scheduling system is used (cron, Airflow, Temporal, Sidekiq, Celery, Step Functions, custom)?
- How are job failures detected and alerted on?
- Is there automatic retry logic with configurable backoff?
- How are poison messages / permanently failing jobs handled (dead letter queues, manual review)?
- Are jobs idempotent? Can they be safely re-run without side effects?

**6.2 Data Pipeline Failures**
- How are ETL/ELT pipeline failures handled?
- Is there data validation at each pipeline stage?
- How is partial failure handled — does the entire pipeline fail or can it resume from the last checkpoint?
- Are there data quality checks and anomaly detection?
- How is pipeline observability implemented (lineage, freshness, volume monitoring)?

**6.3 Recovery & Remediation**
- Can failed jobs be replayed from a specific point in time?
- Is there a manual intervention process for jobs that cannot self-recover?
- How are downstream systems notified when upstream jobs fail?
- Are there circuit breakers for batch processes that interact with external systems?
- What is the blast radius of a job failure — does it cascade to other systems?

═══════════════════════════════════════════════════════════════
SECTION 7 — SaaS vs INTERNAL SOLUTION CONSIDERATIONS
═══════════════════════════════════════════════════════════════

**If SaaS / Multi-Tenant:**
- What is the tenancy model (shared database, schema-per-tenant, database-per-tenant, hybrid)?
- How is tenant isolation enforced at the data layer, compute layer, and network layer?
- How is noisy neighbor problem mitigated? Are there per-tenant resource quotas?
- What is the tenant onboarding and offboarding process? Is it self-service?
- How are tenant-specific configurations and feature flags managed?
- What is the pricing model and how does architecture support metering and billing?
- How are SLAs differentiated across tiers (free, pro, enterprise)?
- Is there a white-label or custom domain capability?
- How is data residency and sovereignty handled for different regions?
- What is the upgrade/migration strategy for rolling out changes across all tenants?

**If Internal / On-Prem Solution:**
- How is the solution packaged for deployment (Docker, Helm chart, installer, VM image, AMI)?
- What are the hardware/infrastructure requirements? Is there a sizing guide?
- How are updates and patches delivered? Is there an auto-update mechanism?
- Can it run in air-gapped environments? How are dependencies managed offline?
- How is licensing managed and enforced?
- What are the backup and restore procedures for administrators?
- Is there integration with enterprise systems (Active Directory/LDAP, SIEM, proxy)?
- How is customer-specific customization handled without forking the codebase?
- What telemetry is collected and is it opt-in/opt-out?

═══════════════════════════════════════════════════════════════
SECTION 8 — RISK ASSESSMENT & RECOMMENDATIONS
═══════════════════════════════════════════════════════════════

Based on the entire review, provide:

1. **Architecture Scorecard** — Rate each section (1-5 stars) with a one-line justification:
   | Area | Rating | Summary |
   |------|--------|---------|
   | General Design | ★★★☆☆ | ... |
   | Platform Engineering | ★★★☆☆ | ... |
   | Security | ★★★☆☆ | ... |
   | Observability | ★★★☆☆ | ... |
   | Support Operations | ★★★☆☆ | ... |
   | Job/Failure Handling | ★★★☆☆ | ... |
   | SaaS/Internal Maturity | ★★★☆☆ | ... |

2. **Top 5 Critical Risks** — Issues that could cause outages, data loss, or security breaches
3. **Top 5 Quick Wins** — Low-effort improvements with high impact
4. **Long-Term Roadmap** — Phased recommendations (0-3 months, 3-6 months, 6-12 months)
5. **Architecture Debt Register** — List of known trade-offs and technical debt with prioritized remediation
6. **Questions for the Team** — Unanswered questions that need clarification from the engineering team

Be specific, cite sections of the provided architecture document, and provide actionable recommendations rather than generic advice.`,
    tags: ["architecture", "system-design", "security", "observability", "platform-engineering", "SaaS", "infrastructure", "review", "DevOps", "incident-management"],
    model: "Claude",
    rating: 10,
    version: "1.0",
    favorite: true,
    notes: "Paste the full architecture document or a detailed description for the best results. If you only have partial information, the prompt will still highlight gaps and generate the right questions. Use this before major design reviews, post-mortems, or when inheriting a new system.",
    uses: 0,
    created: "2026-02-09"
  }

];
