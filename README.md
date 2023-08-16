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
    ├── next.config.mjs
    └── package.json
```

## Getting Started

Once you've cloned the repo, you'll need to install dependencies with 
`npm install` followed by `npm run dev`.  Or the equivalent yarn commands.

## Learn More

[incremental.fyi](https://incremental.fyi) is currently hosted on [Cloudflare pages](https://developers.cloudflare.com/pages/framework-guides/deploy-a-nextjs-site/#deploy-your-application-to-cloudflare-pages) as it's free for me.  There's plenty of instructions on how to deploy on Vercel.  Also planning on a adding a docker file to support deploying on services like Google Cloud Run.

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
