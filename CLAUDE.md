# CLAUDE.md

## Project Overview

Myanmar Software Engineers (MMSWE) — a community platform showcasing Myanmar software engineers with profile listings and blog functionality. Static site deployed to GitHub Pages at mmswe.com.

## Tech Stack

- **Framework**: Next.js 16.1.6 (App Router, TypeScript, static export)
- **Package Manager**: Bun (primary)
- **Styling**: Tailwind CSS + DaisyUI + Sass
- **Content**: Contentlayer with MDX (profiles and blogs)
- **Animation**: Motion (formerly Framer Motion), Three.js / React Three Fiber
- **Path alias**: `@/*` → `./src/*`

## Commands

```bash
bun install          # Install dependencies
bun dev --port 3333  # Dev server (port 3333)
bun run build        # Build static site (output: ./out)
bun run serve        # Serve static build locally
bun run lint         # ESLint
bun run content:build # Build Content Collections content
bun run commit       # Interactive gitmoji commit helper
```

## Project Structure

```
src/
  app/               # Next.js App Router pages (blog, profile, contact-us)
  components/        # Reusable React components (Animate, Common, Profile, Ui)
  config/            # App configuration
  data/              # Static data (animation variants, icon list)
  hooks/             # Custom React hooks
  styles/            # Global styles (SCSS)
  utils/             # Utilities (profileHelper.ts for filtering/search)
content/
  profile/           # Developer profiles (.mdx files)
  blog/              # Blog posts (.mdx files)
```

## Content Schemas

**Profile** (`content/profile/*.mdx`):
```yaml
name: string (required)
description: string
tags: string[]         # Technology tags
image: string          # GitHub avatar URL
```

**Blog** (`content/blog/*.mdx`):
```yaml
title: string (required)
description: string
date: date (required)
published: boolean (default: true)
```

## Commit Convention

Uses **gitmoji** commits enforced by commitlint + Husky. Format: `:emoji: type(scope): message`

Key types:
- `:fire: build(profile): add <name> profile` — new profiles
- `:beers: build(blog): add <name> blog` — new blogs
- `:sparkles: feat: <description>` — new features
- `:bug: fix: <description>` — bug fixes
- `:lipstick: style: <description>` — UI/UX changes
- `:recycle: refactor: <description>` — refactoring

## Myanmar Font Guidelines

When localizing hero sections or large headings with Myanmar text:

- **Font**: Use `khitHaungg.className` (from `@/fonts/fonts`) directly, NOT Tailwind `font-myanmar` class
- **`bg-clip-text` issue**: Myanmar script has tall stacking diacritics that get clipped by `bg-clip-text text-transparent` with gradient backgrounds. For Myanmar, use a solid color (e.g. `text-prism-cyan`) instead of the gradient clip technique. English can keep `bg-clip-text` gradient.
- **`overflow-hidden` issue**: Remove `overflow-hidden` from parent containers when Myanmar is active — it clips top/bottom of Myanmar characters
- **Line height**: Use `leading-[1.6]` with `py-2` for Myanmar large text (vs `leading-[1.15]` for English)
- **AnimateText**: Disable character-by-character `AnimateText` for Myanmar — render plain text instead
- **Pattern**: `const mmFont = isMyanmar ? khitHaungg.className : ""` then conditionally apply classes
- **Localization hook**: Use `useLanguage` from `@/hooks/useLanguage` (NOT from `@/context/LanguageContext`)

## Screenshots

Save all screenshots (including Playwright MCP captures) to the `screen-shot/` folder in the project root.

## Git Preferences

- Use `git switch` instead of `git checkout` for branch switching
- Use `git switch -c <branch>` instead of `git checkout -b <branch>` for creating new branches

## CI/CD

GitHub Actions (`.github/workflows/build.yml`): on push/PR to `main`, installs with Bun, builds, deploys to GitHub Pages.
