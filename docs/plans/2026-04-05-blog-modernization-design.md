# Blog Modernization Design

Date: 2026-04-05
Topic: Editorial Noir Refresh

## Overview

Comprehensive aesthetic refresh of the incremental blog to elevate the dark theme into a premium, editorial experience. The goal is to transform the blog from functional dark mode into a sophisticated publication with distinctive typography, refined depth, and polished micro-interactions.

## Design Direction: "Editorial Noir"

### Typography

**Heading Font**: Cormorant Garamond
- Weight: 300, 400, 600, 700
- Characteristics: High-contrast, elegant serif with classic editorial feel
- Use: Logo, post titles, pull quotes, headings

**Body Font**: DM Sans
- Weight: 300, 400, 500, 700
- Characteristics: Clean, geometric sans-serif with subtle warmth
- Use: Body text, navigation, UI elements, metadata

### Color Palette

| Role | Color | Hex |
|------|-------|-----|
| Background (primary) | Deep Charcoal | #0D0D0F |
| Background (card) | Dark Slate | #161619 |
| Background (elevated) | Soft Charcoal | #1A1A1D |
| Text (primary) | Warm White | #F5F0E8 |
| Text (secondary) | Muted Gray | #8A8A8E |
| Accent (primary) | Champagne Gold | #E8D5B5 |
| Accent (hover) | Warm Gold | #D4BC94 |
| Border | Subtle | rgba(255,255,255,0.06) |

### Depth & Atmosphere

1. **Noise texture overlay**: SVG noise at 3-5% opacity across the entire background
2. **Layered shadows**: Multiple shadow layers on cards (outer glow + inner shadow)
3. **Glass-morphism**: Subtle backdrop blur on elevated elements
4. **Gradient meshes**: Soft radial gradients behind hero sections

### Components

#### Article Cards
- Height: 420px (reduced from 475px)
- Border radius: 12px
- Hero image: 55% of card height
- Glass effect: `backdrop-filter: blur(10px)` with subtle border
- Hover: Card lifts 8px, shadow expands, image scales 1.05x
- Metadata: Champagne gold accent color for date/time

#### Post Page
- Title: Cormorant Garamond, 3.5rem, weight 600
- Reading time/date: DM Sans, uppercase, letter-spacing 0.1em
- Hero image: Full-width with subtle vignette overlay
- Drop cap on first paragraph

#### Navigation
- Logo: Cormorant Garamond, italic, champagne gold on hover
- Minimal, left-aligned with generous spacing

#### Footer
- Gradient fade from content to pure black
- Social icons with gold hover state

### Motion

1. **Page load**: Staggered fade-in (opacity 0→1, translateY 20px→0), 400ms ease-out, 80ms stagger
2. **Card hover**: translateY -8px, shadow expansion, image scale 1.05, 300ms cubic-bezier(0.4, 0, 0.2, 1)
3. **Link hover**: Color transition to champagne gold, 200ms
4. **Scroll reveals**: Cards animate in on viewport entry

## Implementation Priorities

1. Update MUI theme with new fonts and colors
2. Add noise texture via CSS/SVG
3. Redesign article-card component
4. Add page-level animations (staggered reveals)
5. Polish post page typography and spacing
6. Update header/logo styling
7. Add glass-morphism effects

## Files to Modify

- `styles/theme/mui-theme.ts` — typography, colors, shadows
- `components/article-card.tsx` — card redesign
- `components/header.tsx` — logo styling
- `components/layout.tsx` — noise overlay container
- `pages/index.tsx` — animation wrapper
- `pages/posts/[slug].tsx` — typography polish
- `styles/globals.css` — noise texture, animations

## Success Criteria

- [ ] Typography feels editorial and premium (not generic AI slop)
- [ ] Cards have visible depth and lift on hover
- [ ] Noise texture visible but subtle
- [ ] Page load feels alive with staggered animation
- [ ] Color palette is cohesive with champagne gold accents
- [ ] No layout shifts or janky transitions
