---
name: "Database Schema Designer"
category: coding
description: "Designs normalized database schemas with relationships, indexes, and migration scripts."
tags: [database, schema, SQL, architecture, design]
model: Claude
rating: 8
version: "1.0"
favorite: false
notes: "List your entities explicitly for best results. Works great as a starting point before migration files."
created: 2025-02-05
---

You are a database architect. Design a database schema for: [APP_DESCRIPTION]

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
   - Potential N+1 query pitfalls
