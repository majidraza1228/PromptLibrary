---
name: "MCP Server Builder — Streamable HTTP & stdio"
category: coding
description: "Builds a production-ready Model Context Protocol (MCP) server with both Streamable HTTP and stdio transports, including tools, resources, and prompts."
tags: [MCP, server, protocol, stdio, streamable-http, tools, AI-integration]
model: Claude
rating: 9
version: "1.0"
favorite: true
notes: "Use the official MCP SDK (@modelcontextprotocol/sdk for TS, mcp for Python) instead of raw implementation. Specify your tools clearly — the more detail, the better the generated handlers. Test stdio with 'echo {jsonrpc request} | node server.js --stdio' and HTTP with curl."
created: 2026-02-09
---

You are an expert backend engineer specializing in the Model Context Protocol (MCP). Build a complete MCP server for: [SERVER_PURPOSE]

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
  1. `initialize` — Capability negotiation (protocolVersion, capabilities, clientInfo/serverInfo)
  2. `initialized` — Notification confirming handshake complete
  3. `tools/list` — Return available tools with JSON Schema input definitions
  4. `tools/call` — Execute a tool and return content (text, image, or embedded resource)
  5. `resources/list` & `resources/read` — If resources are defined
  6. `prompts/list` & `prompts/get` — If prompts are defined
  7. `ping` — Respond with empty result for keepalive
- Graceful shutdown on SIGTERM/SIGINT
- Proper error responses with JSON-RPC error codes (-32600, -32601, -32602, -32603)

═══════════════════════════════════════════
PART 2 — STREAMABLE HTTP TRANSPORT
═══════════════════════════════════════════

Implement the Streamable HTTP transport layer:
- Single HTTP endpoint at `/mcp` (POST) that accepts JSON-RPC messages
- Response behavior:
  - For requests (has `id`): Return SSE stream (`text/event-stream`) with the result as an SSE event, OR return a single JSON response (`application/json`) for simple cases
  - For notifications (no `id`): Return 202 Accepted with no body
  - For batched requests: Stream multiple SSE events, one per response
- SSE event format: `event: message\ndata: {json-rpc response}\n\n`
- Session management:
  - Generate `Mcp-Session-Id` header on successful `initialize` response
  - Require `Mcp-Session-Id` on all subsequent requests (return 400 if missing/invalid)
  - Support `DELETE /mcp` to terminate sessions
- GET `/mcp` should open an SSE stream for server-initiated notifications/requests (optional but recommended)
- Support proper CORS headers for browser-based clients
- Content-Type negotiation: Accept both `application/json` and handle `Accept: text/event-stream`

═══════════════════════════════════════════
PART 3 — TOOL IMPLEMENTATION
═══════════════════════════════════════════

For each tool:
1. Define the tool with: name, description, and inputSchema (JSON Schema with required fields)
2. Implement the handler with:
   - Input validation against the schema
   - Core logic
   - Structured return: `{ content: [{ type: "text", text: "..." }], isError?: boolean }`
3. Handle errors gracefully — return isError:true with a human-readable message, don't throw

═══════════════════════════════════════════
PART 4 — PROJECT STRUCTURE & DELIVERABLES
═══════════════════════════════════════════

Deliver:
1. Complete source code with clear file structure
2. `package.json` / `pyproject.toml` with MCP SDK dependency
3. Entry point for stdio mode (e.g., `node server.js --stdio`)
4. Entry point for HTTP mode (e.g., `node server.js --http --port 3000`)
5. MCP client config snippet for Claude Desktop / Claude Code:
   ```json
   {
     "mcpServers": {
       "[SERVER_NAME]": {
         "command": "node",
         "args": ["path/to/server.js"],
         "env": {}
       }
     }
   }
   ```
6. Example test commands using curl for the HTTP transport
7. README with setup instructions

═══════════════════════════════════════════
IMPORTANT SPEC COMPLIANCE
═══════════════════════════════════════════

- Protocol version: "2025-03-26" (latest)
- JSON-RPC version: "2.0" (always include `jsonrpc: "2.0"` in messages)
- All tool inputSchemas MUST be valid JSON Schema with `type: "object"`
- Never mix stdout logging with stdio transport — use stderr
- Streamable HTTP MUST support both SSE streaming and plain JSON responses
- Include proper `_meta` and `progressToken` support for long-running tools if applicable
- Handle cancellation via `notifications/cancelled` for both transports
