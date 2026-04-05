# Blog Modernization Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Elevate the incremental blog with "Editorial Noir" aesthetic — premium typography, refined depth effects, and polished micro-interactions.

**Architecture:** Update MUI theme with new fonts/colors, add noise texture via CSS, redesign article cards with glass-morphism and hover animations, implement staggered page load reveals.

**Tech Stack:** Next.js 13 (Pages Router), Material-UI v5, Emotion, CSS animations

---

## Task 1: Update MUI Theme with New Typography & Colors

**Files:**
- Modify: `styles/theme/mui-theme.ts:1-177`

**Step 1: Update font imports**

Replace lines 1-4:
```typescript
import { Roboto, Merriweather } from "next/font/google";
```
With:
```typescript
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
```

**Step 2: Update font declarations**

Replace lines 72-82:
```typescript
const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

const merriweather = Merriweather({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
});
```
With:
```typescript
const cormorantGaramond = Cormorant_Garamond({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});
```

**Step 3: Update color palette**

Replace lines 84-103:
```typescript
const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#111216",
      card: "#1D2128",
    },
    common: {
      horizontalRule: "rgba(255, 255, 255, 0.15)",
      copy: "#6f7177",
      track: "rgba(255, 255, 255, 0.3)",
      progress: "#fff",
    },
    action: {
      hover: "#ffcf74",
    },
    grey: {
      600: "#73737D",
    },
  },
```
With:
```typescript
const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0D0D0F",
      card: "#161619",
      elevated: "#1A1A1D",
    },
    common: {
      horizontalRule: "rgba(255, 255, 255, 0.06)",
      copy: "#8A8A8E",
      track: "rgba(255, 255, 255, 0.12)",
      progress: "#E8D5B5",
    },
    action: {
      hover: "#E8D5B5",
    },
    primary: {
      main: "#E8D5B5",
      light: "#F5F0E8",
      dark: "#D4BC94",
    },
    grey: {
      600: "#8A8A8E",
    },
  },
```

**Step 4: Update typography declarations**

Replace lines 112-173 with:
```typescript
  fonts: {
    merriweather: cormorantGaramond.style.fontFamily
  },
  typography: {
    fontFamily: dmSans.style.fontFamily,
    heroTitle: {
      fontFamily: cormorantGaramond.style.fontFamily,
      fontSize: "1.5rem",
      fontWeight: 400,
    },
    heroBody: {
      fontFamily: dmSans.style.fontFamily,
      fontSize: "1rem",
      fontWeight: 300,
      color: "#8A8A8E",
    },
    heroFooter: {
      fontFamily: dmSans.style.fontFamily,
      fontSize: "18px",
      fontWeight: 700,
      color: "#8A8A8E",
      opacity: 0.33,
    },
    quote: {
      fontFamily: cormorantGaramond.style.fontFamily,
      fontSize: "3.0rem",
      fontWeight: 300,
    },
    authorName: {
      fontFamily: dmSans.style.fontFamily,
      fontSize: "2.0rem",
      fontWeight: 700,
    },
    authorDetails: {
      fontFamily: dmSans.style.fontFamily,
      fontSize: "18px",
      fontWeight: 400,
    },
    heroName: {
      fontFamily: dmSans.style.fontFamily,
      fontSize: "18px",
      fontWeight: 700,
      color: "#8A8A8E",
    },
    heroAuthor: {
      fontFamily: dmSans.style.fontFamily,
      fontSize: "14px",
      fontWeight: 400,
      color: "#8A8A8E",
    },
    logo: {
      fontFamily: cormorantGaramond.style.fontFamily,
      fontSize: "1.5rem",
      fontWeight: 400,
      fontStyle: "italic",
    },
    postTitle: {
      fontFamily: cormorantGaramond.style.fontFamily,
      fontSize: "3.5rem",
      fontWeight: 600,
    }
  },
```

---

## Task 2: Add Noise Texture & Animation Keyframes

**Files:**
- Create: `styles/globals.css` (if not exists)
- Modify: `styles/globals.css`

**Step 1: Create noise SVG data URI**

Add to `styles/globals.css`:
```css
:root {
  --noise-opacity: 0.035;
  --bg-primary: #0D0D0F;
  --bg-card: #161619;
  --accent-gold: #E8D5B5;
  --text-primary: #F5F0E8;
  --text-secondary: #8A8A8E;
}

.noise-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 9999;
  opacity: var(--noise-opacity);
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeInUp 0.4s ease-out forwards;
}

.animate-delay-1 { animation-delay: 0ms; }
.animate-delay-2 { animation-delay: 80ms; }
.animate-delay-3 { animation-delay: 160ms; }
.animate-delay-4 { animation-delay: 240ms; }
.animate-delay-5 { animation-delay: 320ms; }
.animate-delay-6 { animation-delay: 400ms; }
```

---

## Task 3: Update Layout with Noise Overlay

**Files:**
- Modify: `components/layout.tsx:1-26`

**Step 1: Add noise overlay to layout**

Replace entire file with:
```tsx
import * as React from "react";
import Header from "./header";
import Container from "@mui/material/Container";
import Footer from "./footer";

export default function Layout({
  children,
  copyrightDate,
  home,
}: {
  children: React.ReactNode;
  copyrightDate: any;
  home?: any;
}) {
  return (
    <>
      <div className="noise-overlay" aria-hidden="true" />
      <Container maxWidth="lg">
        <Header />
      </Container>
      {children}
      <Container maxWidth="lg">
        <Footer copyrightDate={copyrightDate} />
      </Container>
    </>
  );
}
```

---

## Task 4: Redesign Article Card with Glass Morphism & Hover

**Files:**
- Modify: `components/article-card.tsx:1-75`

**Step 1: Replace article card implementation**

Replace entire file with:
```tsx
import React from "react";
import { styled } from "@mui/material/styles";

import Card from "@mui/material/Card";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

import Image from "next/image";

export default function ArticleCard({ pageData }: { pageData: any }) {
  const date = new Date(pageData.date);
  return (
    <CardHero>
      <Link href={`/posts/${pageData.slug}`} className="card-link">
        <ImageContainer>
          <Image
            src={pageData.hero}
            fill
            sizes="(max-width: 900px) 100vw, 420px"
            style={{ objectFit: "cover" }}
            alt={pageData.title}
          />
          <ImageOverlay />
        </ImageContainer>
      </Link>
      <CardContent sx={{ padding: "24px 0" }}>
        <CardLink href={`/posts/${pageData.slug}`} variant="heroTitle">
          {pageData.title}
        </CardLink>
        <Excerpt variant="heroBody">{pageData.excerpt}</Excerpt>
        <CardFooter variant="heroFooter">
          {date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })} &sdot; {pageData.readingTime.text}
        </CardFooter>
      </CardContent>
    </CardHero>
  );
}

const CardHero = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.card,
  height: "420px",
  boxShadow: "none",
  backgroundImage: "none",
  position: "relative",
  borderRadius: "12px",
  overflow: "hidden",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  border: "1px solid rgba(255, 255, 255, 0.06)",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: `
      0 20px 40px rgba(0, 0, 0, 0.4),
      0 0 0 1px rgba(232, 213, 181, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.05)
    `,
    border: "1px solid rgba(232, 213, 181, 0.15)",
  },
}));

const ImageContainer = styled("div")({
  position: "relative",
  width: "100%",
  height: "230px",
  overflow: "hidden",
  "& img": {
    transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  },
  "&:hover img": {
    transform: "scale(1.05)",
  },
});

const ImageOverlay = styled("div")({
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "100%",
  height: "60px",
  background: "linear-gradient(to top, rgba(22, 22, 25, 0.8), transparent)",
  pointerEvents: "none",
});

const CardLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  display: "block",
  marginBottom: theme.spacing(2),
  marginTop: theme.spacing(2),
  color: theme.palette.primary.light,
  transition: "color 0.2s ease",
  "&:hover": {
    color: theme.palette.action.hover,
  },
}));

const Excerpt = styled(Typography)(({ theme }) => ({
  display: "-webkit-box",
  WebkitLineClamp: "2",
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  color: theme.palette.common.copy,
  marginBottom: theme.spacing(2),
}));

const CardFooter = styled(Typography)(({ theme }) => ({
  position: "absolute",
  bottom: "24px",
  left: 0,
  color: theme.palette.common.copy,
  fontSize: "12px",
  letterSpacing: "0.05em",
  textTransform: "uppercase",
}));
```

---

## Task 5: Update Header & Logo Styling

**Files:**
- Modify: `components/header.tsx:1-65`

**Step 1: Update header styling**

Replace lines 44-54:
```typescript
const LogoLink =  styled(Link)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  left: 0,
  color: theme.palette.primary.light,
  [theme.breakpoints.only('md')]: {
    left: 0
  }
}));
```
With:
```typescript
const LogoLink = styled(Link)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  left: 0,
  color: theme.palette.primary.light,
  transition: 'color 0.2s ease',
  '&:hover': {
    color: theme.palette.action.hover,
  },
  [theme.breakpoints.only('md')]: {
    left: 0
  }
}));
```

---

## Task 6: Add Staggered Animations to Homepage

**Files:**
- Modify: `pages/index.tsx:1-69`

**Step 1: Wrap content with animation classes**

Replace lines 46-68:
```typescript
  return (
    <Layout copyrightDate={copyrightDate} home>
      <Container maxWidth="lg">
        <Box
          sx={{
            width: "70%",
            mt: theme.spacing(10),
            mb: theme.spacing(10),
            lineHeight: 1.2,
            [theme.breakpoints.down("sm")]: {
            },
          }}
        >
          <Typography variant="quote" className="animate-fade-in animate-delay-1">
            Building, breaking, learning
          </Typography>
        </Box>
        <AuthorHero />
        <PostSummary allPostsHeaders={allPostsHeaders}></PostSummary>
      </Container>
    </Layout>
  );
```
With:
```typescript
  return (
    <Layout copyrightDate={copyrightDate} home>
      <Container maxWidth="lg">
        <Box
          sx={{
            width: "70%",
            mt: theme.spacing(10),
            mb: theme.spacing(10),
            lineHeight: 1.2,
            [theme.breakpoints.down("sm")]: {
            },
          }}
        >
          <Typography variant="quote" className="animate-fade-in animate-delay-1">
            Building, breaking, learning
          </Typography>
        </Box>
        <Box className="animate-fade-in animate-delay-2">
          <AuthorHero />
        </Box>
        <Box className="animate-fade-in animate-delay-3">
          <PostSummary allPostsHeaders={allPostsHeaders}></PostSummary>
        </Box>
      </Container>
    </Layout>
  );
```

---

## Task 7: Polish Post Page Typography

**Files:**
- Modify: `pages/posts/[slug].tsx:105-189`

**Step 1: Update ConstrainedStack maxWidth**

Replace lines 192-196:
```typescript
const ConstrainedStack = styled(Stack)(({ theme }) => ({
  margin: `${theme.spacing(8)} auto 35px`,
  width: "100%",
  maxWidth: "680px",
}));
```
With:
```typescript
const ConstrainedStack = styled(Stack)(({ theme }) => ({
  margin: `${theme.spacing(8)} auto 35px`,
  width: "100%",
  maxWidth: "720px",
}));
```

**Step 2: Update hero image height**

Replace lines 131-146:
```typescript
      <Image
        src={frontmatter.hero}
        width="0"
        height="0"
        sizes="100vw"
        priority
        style={{
          width: "80%",
          height: "500px",
          objectFit: "cover",
          objectPosition: "left 20%",
          margin: `0 auto 35px`,
          display: "block",
        }}
        alt={frontmatter.title}
      />
```
With:
```typescript
      <Image
        src={frontmatter.hero}
        width="0"
        height="0"
        sizes="100vw"
        priority
        style={{
          width: "85%",
          height: "520px",
          objectFit: "cover",
          objectPosition: "center 20%",
          margin: `0 auto 50px`,
          display: "block",
          borderRadius: "16px",
        }}
        alt={frontmatter.title}
      />
```

---

## Task 8: Update Footer Gradient

**Files:**
- Modify: `components/footer.tsx:1-44`

**Step 1: Update footer gradient**

Replace lines 35-43:
```typescript
const FooterGradient = styled(Box)({
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '350px',
    zIndex: -1,
    pointerEvents: 'none',
    background: 'linear-gradient(180deg, #111216 0%, rgba(66, 81, 98, 0.36) 100%)',
})
```
With:
```typescript
const FooterGradient = styled(Box)({
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '400px',
    zIndex: -1,
    pointerEvents: 'none',
    background: 'linear-gradient(180deg, #0D0D0F 0%, rgba(13, 13, 15, 0.0) 100%)',
})
```

---

## Task 9: Run lint & typecheck

**Step 1: Run commands**

Run: `npm run lint`
Run: `npm run typecheck` (or `npx tsc --noEmit` if not configured)

Expected: No errors

---

## Task 10: Test in browser

**Step 1: Start dev server**

Run: `npm run dev`
Open: http://localhost:3000

Verify:
- [ ] Noise texture visible across page
- [ ] Cards lift on hover with shadow expansion
- [ ] Staggered fade-in animation on page load
- [ ] Typography feels editorial (Cormorant headings, DM Sans body)
- [ ] Color palette is cohesive with champagne gold accents
- [ ] No layout shifts or janky transitions
