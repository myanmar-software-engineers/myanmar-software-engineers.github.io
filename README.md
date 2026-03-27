<div align="center">

<img src="public/seo/favicon-original.png" alt="MMSWE" width="80" />

# Myanmar Software Engineers

**A community platform connecting Myanmar's software engineering talent.**

[![Deploy](https://github.com/myanmar-software-engineers/myanmar-software-engineers.github.io/actions/workflows/build.yml/badge.svg)](https://github.com/myanmar-software-engineers/myanmar-software-engineers.github.io/actions/workflows/build.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-a78bfa.svg)](LICENSE)
[![Profiles](https://img.shields.io/badge/Engineers-116+-22d3ee.svg)](#profiles)
[![Next.js](https://img.shields.io/badge/Next.js-16-000?logo=nextdotjs)](https://nextjs.org)
[![Made with Bun](https://img.shields.io/badge/Bun-runtime-fbf0df?logo=bun)](https://bun.sh)

[**mmswe.com**](https://mmswe.com)

</div>

---

## About

MMSWE is an open-source platform where Myanmar software engineers can showcase their profiles, share technical articles, and connect with the community. Built as a static site deployed to GitHub Pages, it serves as a living directory of Myanmar's developer talent.

### Features

- **Developer Profiles** — 116+ engineer profiles with tech stacks, bios, and custom MDX pages
- **Blog Platform** — Technical articles written by community members
- **Profile Editor** — In-browser tool to create your profile MDX file without writing code
- **Myanmar & English** — Full bilingual support with EN/MM toggle, powered by next-intl
- **Responsive Design** — Obsidian Prism dark theme with animated interactions

## Tech Stack

| Layer               | Technology                                                                   |
| ------------------- | ---------------------------------------------------------------------------- |
| **Framework**       | Next.js 16 (App Router, Static Export)                                       |
| **Language**        | TypeScript, React 19                                                         |
| **Styling**         | Tailwind CSS 3 + DaisyUI + Sass                                              |
| **Content**         | Contentlayer2 with MDX                                                       |
| **Animation**       | Framer Motion, Three.js, React Three Fiber                                   |
| **i18n**            | next-intl (Myanmar & English)                                                |
| **Fonts**           | Bricolage Grotesque, Plus Jakarta Sans, JetBrains Mono, KhitHaungg (Myanmar) |
| **Package Manager** | Bun                                                                          |
| **Deployment**      | GitHub Pages via GitHub Actions                                              |

## Quick Start

### Prerequisites

- [Bun](https://bun.sh) (recommended) or Node.js 18+
- Git

### Setup

```bash
# Clone the repository
git clone https://github.com/myanmar-software-engineers/myanmar-software-engineers.github.io.git
cd myanmar-software-engineers.github.io

# Install dependencies
bun install

# Start development server
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Commands

```bash
bun dev              # Start dev server
bun run build        # Build static site (output: ./out)
bun run serve        # Serve static build locally
bun run lint         # Run ESLint
bun run content:build # Rebuild contentlayer content
bun run commit       # Interactive gitmoji commit helper
```

## Add Your Profile

There are two ways to add your profile to MMSWE:

### Option 1: Profile Editor (Recommended)

Visit [mmswe.com/profile/editor](https://mmswe.com/profile/editor) to create your profile using the visual editor. Fill in your details, preview in real-time, and download the `.mdx` file.

### Option 2: Manual Creation

1. **Fork** this repository
2. Create a new file in `content/profile/` with your name (lowercase, no spaces):

```
content/profile/yourname.mdx
```

3. Add frontmatter and content:

```mdx
---
name: Your Name
description: A short bio about yourself
image: "https://avatars.githubusercontent.com/u/YOUR_ID?v=4"
tags:
  - Frontend
  - React
  - TypeScript
---

Write your profile content here using standard markdown.

## About Me

Hello! I'm a software engineer from Myanmar...
```

4. **Submit a Pull Request** to the `main` branch

### Frontmatter Fields

| Field         | Required | Description                            |
| ------------- | -------- | -------------------------------------- |
| `name`        | Yes      | Your display name                      |
| `description` | No       | Short bio (shown on profile card)      |
| `image`       | No       | Avatar URL (GitHub avatar recommended) |
| `tags`        | No       | Technology/skill tags                  |

## Add Your Book

1. **Fork** this repository
2. Create a new file in `content/books/`:

```
content/books/your-book-title.mdx
```

3. Add frontmatter and content:

```mdx
---
title: book title
authorName:  the name of book author
link: https://example.com/book-link
image: https://example.com/book-cover.jpg
authorEmail: author@example.com
authorLink: https://example.com
---

Short note about why this book is recommended.
```

4. **Submit a Pull Request** to the `main` branch

### Frontmatter Fields

| Field         | Required | Description                    |
| ------------- | -------- | ------------------------------ |
| `title`       | Yes      | Book title                     |
| `authorName`  | Yes      | Author name                    |
| `link`        | Yes      | Official/primary resource link |
| `image`       | No       | Book cover image URL           |
| `authorEmail` | No       | Author contact email           |
| `authorLink`  | No       | Author website/profile URL     |

## Add Your Class

1. **Fork** this repository
2. Create a new file in `content/classes/`:

```
content/classes/your-class-title.mdx
```

3. Add frontmatter and content:

```mdx
---
title: your class title
description: short description of your class 
instructorName: class mentor name
classLink: https://example.com/classes/react-bootcamp
tags: tags for tech-stack that involve in this class
classType: online or in-person
status: upcoming/completed/incoming
proofOfAssociation: Proof that submitter is affiliated with the class.
image: https://example.com/class-cover.jpg
---

Add trust context, schedule notes, and useful details for learners.
This is important because PR without trust context for class will be denied.
```

4. **Submit a Pull Request** to the `main` branch

### Frontmatter Fields

| Field                | Required | Description                               |
| -------------------- | -------- | ----------------------------------------- |
| `title`              | Yes      | Class title                               |
| `description`        | Yes      | Summary of class content                  |
| `instructorName`     | Yes      | Instructor or organization                |
| `classLink`          | Yes      | Official class link                       |
| `tags`               | Yes      | Topic tags (e.g. React, Python)           |
| `classType`          | Yes      | One of: `online`, `In-Person`             |
| `status`             | Yes      | One of: `active`, `completed`, `incoming` |
| `proofOfAssociation` | Yes      | Credibility/proof note for maintainers    |
| `image`              | No       | Class cover image URL                     |

## Project Structure

```
src/
  app/                 # Next.js App Router pages
    blog/              #   Blog listing & [slug] pages
    profile/           #   Profile listing, [slug] & editor pages
    contact-us/        #   Contact page
  components/          # React components
    MSE/               #   Homepage sections (Hero, Join, Platform, etc.)
    Common/            #   Shared UI (Navbar, Footer, Container, Tag, Mdx)
    Profile/           #   Profile cards & lists
    ProfileEditor/     #   Profile creation tool components
    Contributors/      #   Custom contributor page widgets
    Ui/                #   Base UI elements
  context/             # React context (LanguageProvider)
  config/              # App configuration
  data/                # Static data & animation variants
  hooks/               # Custom React hooks
  styles/              # Global SCSS & Tailwind tokens
  utils/               # Utility functions
  i18n/                # next-intl configuration
  fonts/               # Local fonts (KhitHaungg Myanmar font)
content/
  profile/             # Developer profile MDX files (116+)
  blog/                # Blog post MDX files
messages/
  en.json              # English translations
  mm.json              # Myanmar translations
```

## Design System

MMSWE uses the **Obsidian Prism** theme — a dark interface with prismatic accent colors:

| Token          | Color     | Usage            |
| -------------- | --------- | ---------------- |
| `obsidian`     | `#09090b` | Base background  |
| `surface`      | `#1a1a22` | Card backgrounds |
| `prism-cyan`   | `#22d3ee` | Primary accent   |
| `prism-violet` | `#a78bfa` | Secondary accent |
| `prism-rose`   | `#fb7185` | Tertiary accent  |
| `accent-gold`  | `#fbbf24` | Highlight accent |

Typography uses **Bricolage Grotesque** for display, **Plus Jakarta Sans** for body, **JetBrains Mono** for code, and **KhitHaungg** for Myanmar script.

## Internationalization (i18n)

The site supports **Myanmar** and **English** with an EN/MM toggle in the Navbar. Localization is opt-in per component using [next-intl](https://next-intl.dev/).

### How it works

- **`LanguageProvider`** (`src/context/LanguageContext.tsx`) manages locale state with `useSyncExternalStore` + `localStorage` persistence
- **`useLanguage`** hook (`src/hooks/useLanguage.ts`) provides `locale`, `setLocale`, `isMyanmar`, `isEnglish`
- **Translation files** in `messages/en.json` and `messages/mm.json` with namespaced keys
- **Myanmar font**: KhitHaungg (`src/fonts/khit-haungg/`) loaded via `next/font/local`, applied with `khitHaungg.className` when Myanmar is active

### Adding translations

1. Add keys to both `messages/en.json` and `messages/mm.json` under a namespace
2. In your component, use `useTranslations("namespace")` and `useLanguage()`:

```tsx
const t = useTranslations("mySection");
const { isMyanmar } = useLanguage();
const mmFont = isMyanmar ? khitHaungg.className : "";

return <h1 className={mmFont}>{t("title")}</h1>;
```

### Myanmar font guidelines

- Use `khitHaungg.className` directly (not Tailwind `font-myanmar` class)
- Avoid `bg-clip-text text-transparent` for Myanmar text — use solid colors instead (e.g. `text-prism-cyan`)
- Remove `overflow-hidden` from parent containers when Myanmar is active
- Use `leading-[1.6]` with `py-2` for large Myanmar headings
- Disable character-by-character `AnimateText` for Myanmar — render plain text instead

## Contributing

We welcome contributions from all Myanmar software engineers!

### Ways to Contribute

- **Add your profile** — Follow the [profile guide](#add-your-profile) above
- **Write a blog post** — Create an `.mdx` file in `content/blog/`
- **Improve the platform** — Fix bugs, add features, improve UI
- **Report issues** — Open an issue on GitHub

### Commit Convention

This project uses [gitmoji](https://gitmoji.dev/) commits enforced by commitlint + Husky:

```
:sparkles: feat: add new feature
:bug: fix: fix a bug
:lipstick: style: update UI/UX
:fire: build(profile): add yourname profile
:beers: build(blog): add blog post title
:recycle: refactor: refactor code
:zap: perf: improve performance
:memo: docs: update documentation
```

Use `bun run commit` for an interactive commit helper.

### Development Guidelines

1. Fork and clone the repository
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Make your changes and ensure `bun run build` passes
4. Submit a pull request to `main`

## Deployment

The site automatically deploys to GitHub Pages on every push to `main` via GitHub Actions:

1. Installs dependencies with Bun
2. Builds the static site (`next build` with `output: "export"`)
3. Deploys the `./out` directory to GitHub Pages

## Community

- **Facebook Group**: [Myanmar Software Engineers](https://www.facebook.com/groups/myanmarsoftwareengineers)
- **GitHub**: [myanmar-software-engineers](https://github.com/myanmar-software-engineers)
- **Website**: [mmswe.com](https://mmswe.com)

## License

This project is licensed under the [MIT License](LICENSE).

Copyright (c) 2023 — [Lwin Moe Paing](https://github.com/lwinmoepaing)

---

<div align="center">

**Built with love by the Myanmar Software Engineers community.**

</div>
