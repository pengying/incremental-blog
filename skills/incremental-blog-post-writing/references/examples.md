# Post Examples

## Minimal Post Skeleton

```mdx
---
title: "Example Post"
date: "2026-04-05"
author: "Peng Ying"
hero: "/images/example-hero.png"
publish: true
excerpt: "A short description for the homepage card."
tags:
  - Example
---

## Overview

Open with the core point of the post in plain language.

### Why it matters

- first concrete takeaway
- second concrete takeaway

<Blockquote>Use callouts sparingly for emphasis.</Blockquote>
```

## Image Patterns

```mdx
<div className="Image__Medium">
  <Image
    src="/images/stripe-reference-docs.png"
    alt="Stripe's 3 column layout"
  />
  <figcaption>Stripe's 3 column layout</figcaption>
</div>
```

```mdx
<div className="Image__XSmall">
  <Image
    src="/images/analytics_screen.png"
    alt="Analytics screenshot"
  />
</div>
```

## Mermaid Pattern

```mdx
<div className="mermaid">
graph TD
  A[Idea] --> B[Draft]
  B --> C[Publish]
</div>
```

## Code Block Pattern

````mdx
```bash
npm run dev
```
````
