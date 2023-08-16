# Incremental Blog

Incremental is a SSG blog template heavily inspired by Narative's [Novela](https://novela.narative.co/) but migrated to [Next.js](https://nextjs.org/) and [Mui](htttps://mui.com).


## Preface
A WIP with a laundry list of [todos](#todos), but developed enough to serve some basic blog posts.  Incremental allows bloggers to mostly focus on writing in `MDX` and customize components / theme colors for their needs.

Posts exists in the `/posts`.  Incremental will parse the directory and serve all `md` or `mdx` files with `publish: true` in it's Front Matter.

### Directory Structure
```
  incremental
    ├── pages
    │     ├── posts         
    │     |   └── 2022
    │     |          └── 8
    │     |              └── 8
    │     |                  └── post-slug.mdx
    |     └── author
    |           └─ index.tsx
    ├── public
    │     ├── images
    |     |      └─ all-images-referenced-in-posts.jpg
    │     └── static-files.js
    ├── styles
    │     ├── themes
    |     |      └─ mui-theme.ts
    │     └── globals.css
    ├── next.config.mjs
    └── package.json
```

## Getting Started

Once you've cloned the repo, you'll need to install dependencies with 
`npm install` followed by `npm run dev`.  Or the equivalent yarn commands.

## Learn More

[incremental.fyi](https://incremental.fyi) is currently hosted on [Cloudflare pages](https://developers.cloudflare.com/pages/framework-guides/deploy-a-nextjs-site/#deploy-your-application-to-cloudflare-pages) as it's free for me.  There's plenty of instructions on how to deploy on Vercel.  Also planning on a adding a docker file to support deploying on services like Google Cloud Run.

### Adding A Post
You can replace the post directory with your own posts.  `posts.js` will crawl the post directory treating all `md` and `mdx` files as posts.

### Adding An Image Or Other Static Content
Images and other static content need to follow Nextjs rules and typically lives in the `/public` directory.  References to images and other static content from posts then need to reference the absolute path instead of relative like the following

```html
<div className="Image__Medium">
  <Image
    src="/images/medium.jpg"
    alt="alt text for medium image"
  />
  <figcaption>Caption text for medium image</figcaption>
</div>
```

### Modifying Author
Author information is defined in a few places.  I'll refactor it all out to a json config file soon but right now it's in.
-  `/pages/author/index.tsx`
-  `/components/author-hero.tsx`
-  `/components/article-summary.tsx`

### Modifying Socials
Socials are defined in `/components/socials.tsx`.  This will also likely be refactored into a config file instead of hardcoded in the template.

### Modifying Theme
Following the general pttern the theme also needs to be refactored and styling is handled in the general theme template some in individual components.

## TODOs
### P0s
- [ ] style for mobile
- [ ] update SEO
- [ ] add reading progress bar
### P1s
- [ ] clean up styles into theme
- [ ] clean up components
- [ ] comment code
- [ ] add related articles 
- [ ] refactor style to not mix sx + styled + style jsx
- [ ] refactor author details to config
- [ ] add algolia search
- [ ] add rss feed
- [ ] add accessibility
### P2s
- [ ] copy code block 
- [ ] copy article link button
- [ ] light / dark toggle
- [ ] add mail subscription
- [ ] add ability to separate content into separate repo
- [ ] docker file
