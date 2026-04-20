# Prompt Library

A personal, browser-based library for storing, organizing, and reusing AI prompts. Built with plain HTML/CSS/JS — no frameworks, no build tools.

**Live Site:** [majidraza1228.github.io/PromptLibrary](https://majidraza1228.github.io/PromptLibrary/)

---

## What It Does

Prompt Library gives you a searchable, categorized collection of reusable prompts for AI tools like Claude, ChatGPT, and Gemini. Instead of rewriting prompts from scratch every time, you save your best ones here and copy them with one click.

## Why It's Useful

- **Stop rewriting prompts** — Save your go-to prompts once, reuse them forever
- **Find prompts fast** — Search by name, description, tags, or even prompt content
- **Stay organized** — Prompts are categorized into Writing, Coding, and Meta/Prompt Engineering
- **Track what works** — Rate prompts (1-10), mark favorites, and see usage counts
- **Works offline** — Everything runs in your browser with localStorage, no server needed
- **Export anytime** — Download your entire library as a Markdown file for backup or sharing

## Features

| Feature | Description |
|---|---|
| **Sidebar Navigation** | Filter by category (Writing, Coding, Meta) or view Favorites |
| **Search** | Real-time search across prompt names, descriptions, tags, and content |
| **Expandable Cards** | Click any prompt to reveal the full template with highlighted `[VARIABLES]` |
| **Copy to Clipboard** | One-click copy of any prompt |
| **Add / Edit / Delete** | Full CRUD — add your own prompts, edit existing ones, or remove them |
| **Favorites** | Star your most-used prompts for quick access |
| **Ratings & Versioning** | Rate prompts 1-10 and track version numbers |
| **Best Model Tag** | Tag which AI model (Claude, GPT-4o, Gemini, Any) works best |
| **Export to Markdown** | Download the full library as a `.md` file |
| **Mobile Responsive** | Works on phone and tablet with a collapsible sidebar |
| **localStorage** | Your additions and edits persist across browser sessions |

---

## Project Structure

```
PromptLibrary/
├── index.html              ← App layout, styles, and all UI logic
├── prompts.js              ← Seed data for the web app (all 29 prompts as a JS array)
├── prompts/                ← Individual prompt files for developer copy-paste
│   ├── writing/            ← 10 writing prompts
│   ├── coding/             ← 13 coding prompts
│   └── meta/               ← 6 meta/prompt-engineering prompts
└── README.md               ← This file
```

### Two-File System

The library intentionally stores prompts in **two places**:

| File | Purpose | Who uses it |
|------|---------|-------------|
| `prompts.js` | Powers the live web app | The browser/web app |
| `prompts/*.md` | Individual files for easy browsing and copy-paste | Developers on GitHub |

**Important:** Both files must be kept in sync. When you add or update a prompt, you must update **both** `prompts.js` and the corresponding `.md` file. See the workflow below.

---

## How to Use the Web App

### Browsing Prompts
1. Open the [live site](https://majidraza1228.github.io/PromptLibrary/)
2. Browse all prompts or use the **sidebar** to filter by category
3. Use the **search bar** to find prompts by keyword
4. **Click any card** to expand it and see the full prompt template
5. Hit **Copy** to copy the prompt to your clipboard
6. Paste it into your AI tool and replace the `[VARIABLES]` with your specifics

### Adding Your Own Prompts (No Code)
1. Click **+ Add Prompt** (top right or sidebar)
2. Fill in the form — name, category, model, description, prompt text, tags, notes, rating, version
3. Click **Save Prompt**

> Note: Prompts added this way are saved in your browser's localStorage only. They won't appear for other users and won't persist if you clear your browser data. To permanently add a prompt for everyone, follow the developer workflow below.

### Editing or Deleting Prompts
1. Click a prompt card to expand it
2. Use the **Edit** button to modify or **Delete** to remove

### Exporting Your Library
1. Click **Export as Markdown** in the sidebar
2. A `.md` file downloads with all your prompts formatted and organized

---

## Developer Workflow

### Adding a New Prompt

When adding a prompt permanently (visible to all users), you must update **two files**:

#### Step 1 — Add to `prompts.js`

Open `prompts.js` and add a new entry to the `seedPrompts` array before the closing `];`. Copy this template:

```javascript
{
  name: "Your Prompt Name",
  category: "writing",       // "writing" | "coding" | "meta"
  description: "One-line description of what this prompt does.",
  prompt: `Your full prompt text here.

Use [VARIABLE_NAME] for parts the user should fill in.`,
  tags: ["tag1", "tag2", "tag3"],
  model: "Claude",           // "Claude" | "GPT-4o" | "Gemini" | "Any"
  rating: 8,                 // 1-10
  version: "1.0",
  favorite: false,
  notes: "Optional tips on when or how to use this prompt.",
  uses: 0,
  created: "2026-04-19"      // YYYY-MM-DD
}
```

#### Step 2 — Create a `.md` file in `prompts/<category>/`

Create a new file at `prompts/<category>/<slug>.md` where `<slug>` is the prompt name in lowercase with hyphens.

Examples:
- "Blog Post Outline Generator" → `prompts/writing/blog-post-outline-generator.md`
- "Debug Detective" → `prompts/coding/debug-detective.md`
- "Feynman Technical Tutor" → `prompts/meta/feynman-technical-tutor.md`

Use this format:

```markdown
---
name: "Your Prompt Name"
category: writing
description: "One-line description of what this prompt does."
tags: [tag1, tag2, tag3]
model: Claude
rating: 8
version: "1.0"
favorite: false
notes: "Optional tips on when or how to use this prompt."
created: 2026-04-19
---

Your full prompt text here.

Use [VARIABLE_NAME] for parts the user should fill in.
```

#### Step 3 — Commit and push both files

```bash
git add prompts.js prompts/<category>/<slug>.md
git commit -m "Add prompt: Your Prompt Name"
git push origin main
```

GitHub Pages rebuilds automatically — changes go live in 1-2 minutes.

---

### Updating an Existing Prompt

1. Edit the prompt entry in `prompts.js`
2. Edit the corresponding `.md` file in `prompts/<category>/`
3. Bump the `version` field (e.g. `"1.0"` → `"1.1"`)
4. Commit both files together:

```bash
git add prompts.js prompts/<category>/<slug>.md
git commit -m "Update prompt: Your Prompt Name (v1.1)"
git push origin main
```

---

### Removing a Prompt

1. Delete the entry from `prompts.js`
2. Delete the corresponding `.md` file
3. Commit:

```bash
git add prompts.js
git rm prompts/<category>/<slug>.md
git commit -m "Remove prompt: Your Prompt Name"
git push origin main
```

---

### Adding a New Category

To add a category beyond Writing, Coding, and Meta, you need to update `index.html` in 5 places:

1. Add a CSS color variable in the `:root` section
2. Add category-specific CSS classes (`.dot-yourcategory`, `.tag-yourcategory`, `.cat-yourcategory::before`)
3. Add a sidebar item: `<div class="sidebar-item" onclick="filterCategory('yourcategory', this)">`
4. Update the `updateCounts()` function
5. Update the category `<select>` in the modal form

Then create a new folder: `prompts/yourcategory/`

---

## Prompt Writing Tips

- **Assign a role** — Start with "You are a [role] who [context]"
- **Use `[VARIABLES]`** — Wrap swappable parts in brackets: `[TOPIC]`, `[AUDIENCE]`, `[TONE]`
- **Show examples** — Include 1-2 examples of desired output format
- **Constrain the output** — Specify format, length, tone, and structure explicitly
- **Use XML tags for structure** — For complex prompts, use `<instructions>`, `<reference>`, `<example>` tags to separate sections
- **Rate and iterate** — Update `rating` and bump `version` after each refinement
- **Tag the best model** — Note which AI model gives the best results for that specific prompt

---

## Tech Stack

- **Pure HTML/CSS/JavaScript** — No frameworks, no build tools, no dependencies
- **Google Fonts** — Outfit, JetBrains Mono, Source Serif 4
- **localStorage** — Client-side persistence for user edits
- **GitHub Pages** — Free hosting, auto-deploys on push to `main`

---

## License

This project is open source and available for personal use.
