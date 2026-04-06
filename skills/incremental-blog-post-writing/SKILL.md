---
name: incremental-blog-post-writing
description: Use when drafting or editing MDX posts for the incremental-blog repository and the task needs this blog's frontmatter, image wrappers, built-in MDX components, or post structure.
---

# Incremental Blog Post Writing

Write posts for this repository's existing MDX pipeline. Reuse the built components and markup patterns already supported by `pages/posts/[slug].tsx`.

## Quick Start

1. Create posts at `posts/YYYY/M/post-name.mdx`.
2. Use string dates in frontmatter.
3. Point `hero` at a file under `public/images/`.
4. Write body content in Markdown first, then use the built-in MDX helpers only when they improve the post.

## Required Frontmatter

Use this shape:

```yaml
---
title: "Your Post Title"
date: "2026-04-05"
author: "Peng Ying"
hero: "/images/your-hero.png"
publish: true
excerpt: "Short summary used in cards and metadata."
tags:
  - Topic
  - Another Topic
---
```

Rules:
- `date` must be a quoted string, not a YAML date object.
- `hero` must use an absolute `/images/...` path that resolves under `public/images/`.
- `publish: false` hides the post from listings.
- `slug` is optional; omit it unless there is a strong reason to override the generated slug.

## Supported MDX Patterns

Use normal Markdown for most content:
- `##` / `###` headings
- paragraphs
- ordered and unordered lists
- fenced code blocks
- tables
- links

Use the built-in MDX helpers when needed:
- `<Blockquote>...</Blockquote>` for emphasized callouts
- `<Image src="/images/..." alt="..." />` inside sized wrappers for controlled image widths
- `<div className="mermaid">...</div>` for Mermaid diagrams

## Image Wrappers

Wrap images in these containers when the post needs a specific width:

```mdx
<div className="Image__XSmall">
  <Image
    src="/images/example.png"
    alt="Example"
  />
</div>
```

Available wrappers:
- `Image__XSmall`
- `Image__Small`
- `Image__Medium`
- `Image__Large`
- `Image__With-Shadow` on the image itself for shadowed treatment

Add `<figcaption>` only when the image benefits from labeling:

```mdx
<div className="Image__Medium">
  <Image
    src="/images/example.png"
    alt="Example"
  />
  <figcaption>Short caption</figcaption>
</div>
```

## Writing Style For This Blog

Follow the existing post style in `posts/`:
- open with a direct setup instead of a formal abstract
- use concrete examples early
- keep sections practical and opinionated
- prefer short subsections over long uninterrupted walls of text
- use code blocks and screenshots when they materially teach something

## Avoid

- introducing new React components without updating `pages/posts/[slug].tsx`
- relative image paths like `./image.png`
- unquoted dates in frontmatter
- custom HTML that duplicates existing helpers
- Jekyll/Liquid-style `{{ ... }}` syntax in docs or post prose unless intentionally escaped

## References

Read these only if needed:
- `CLAUDE.md` for repo-wide post rules and file locations
- `pages/posts/[slug].tsx` for the active MDX component mapping
- `references/examples.md` for copy-paste patterns
