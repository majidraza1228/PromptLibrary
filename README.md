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

## How to Use

### Browsing Prompts
1. Open the site
2. Browse all 20 built-in prompts or use the **sidebar** to filter by category
3. Use the **search bar** to find prompts by keyword
4. **Click any card** to expand it and see the full prompt template
5. Hit **Copy** to copy the prompt to your clipboard
6. Paste it into your AI tool and replace the `[VARIABLES]` with your specifics

### Adding Your Own Prompts
1. Click **+ Add Prompt** (top right or sidebar)
2. Fill in the form:
   - **Name** — A short, descriptive title
   - **Category** — Writing, Coding, or Meta
   - **Best Model** — Which AI model works best for this prompt
   - **Description** — One sentence explaining what it does
   - **Prompt Template** — The full prompt text (use `[VARIABLE_NAME]` for placeholders)
   - **Tags** — Comma-separated keywords for search
   - **Notes** — Tips on when/how to use it
   - **Rating** — How effective is this prompt (1-10)
   - **Version** — Track iterations (start at 1.0)
3. Click **Save Prompt**

### Editing or Deleting Prompts
1. Click a prompt card to expand it
2. Use the **Edit** button to modify it or **Delete** to remove it

### Exporting Your Library
1. Click **Export as Markdown** in the sidebar
2. A `.md` file downloads with all your prompts formatted and organized

## How to Update the Site

### Option 1: Edit Prompts in the Browser (No Code)
Any prompts you add, edit, or delete through the UI are saved in your browser's localStorage. They persist across page refreshes but are tied to that specific browser/device.

### Option 2: Edit `prompts.js` (Recommended)
All built-in prompts live in a separate **`prompts.js`** file, so you never need to touch `index.html`.

1. **Clone the repo:**
   ```bash
   git clone https://github.com/majidraza1228/PromptLibrary.git
   cd PromptLibrary
   ```

2. **Open `prompts.js`** in any text editor — this is the only file you need to edit

3. **Add a new prompt** by copying the template at the top of the file and pasting it at the end of the array (before the closing `];`):
   ```javascript
   {
     name: "Your Prompt Name",
     category: "writing",       // "writing" | "coding" | "meta"
     description: "A short description of what this prompt does.",
     prompt: `Your full prompt text here.

   Use [VARIABLE_NAME] for placeholders that users should fill in.`,
     tags: ["tag1", "tag2", "tag3"],
     model: "Claude",           // "Claude" | "GPT-4o" | "Gemini" | "Any"
     rating: 8,                 // 1-10
     version: "1.0",
     favorite: false,
     notes: "Optional tips on when or how to use this prompt.",
     uses: 0,
     created: "2025-02-08"      // YYYY-MM-DD
   }
   ```

4. **Commit and push:**
   ```bash
   git add prompts.js
   git commit -m "Add new prompt: Your Prompt Name"
   git push origin main
   ```

5. GitHub Pages will automatically rebuild — your changes go live in 1-2 minutes.

### Project Structure
```
PromptLibrary/
├── index.html      ← App layout, styles, and logic (rarely needs editing)
├── prompts.js      ← All prompt data lives here (edit this to add/remove prompts)
└── README.md       ← This file
```

### Option 3: Add a New Category
To add a category beyond Writing, Coding, and Meta:

1. Add a new CSS color variable in the `:root` section
2. Add category-specific CSS classes (`.dot-yourcategory`, `.tag-yourcategory`, `.cat-yourcategory::before`)
3. Add a sidebar item for the new category
4. Update the `updateCounts()` function
5. Update the category `<select>` in the modal form

## Prompt Writing Tips

- **Be specific with role** — Start prompts with "You are a [role] who [context]"
- **Use `[VARIABLES]`** — Wrap swappable parts in brackets for reusability
- **Show examples** — Include 1-2 examples of desired output in your prompt
- **Constrain the output** — Specify format, length, tone, and structure
- **Rate and iterate** — Update ratings after use, refine top performers
- **Tag the best model** — Note which AI model gives the best results

## Tech Stack

- **Pure HTML/CSS/JavaScript** — No frameworks, no build tools, no dependencies
- **Google Fonts** — Outfit, JetBrains Mono, Source Serif 4
- **localStorage** — For client-side persistence
- **GitHub Pages** — For free hosting

## License

This project is open source and available for personal use.
