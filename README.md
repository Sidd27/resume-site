# resume-site

Personal resume and portfolio site for [Siddharth Pandey](https://sidd27.github.io/resume-site/).

**Live:** https://sidd27.github.io/resume-site/

## Stack

- React 19 + TypeScript
- Vite 6
- Tailwind CSS + shadcn/ui
- Radix UI primitives
- Lucide icons

## Features

- Experience, Projects, Education, and Blogs tabs
- npm packages fetched live with published date, updated date, and monthly downloads
- Blog posts fetched live from Dev.to and Medium
- Categorised skills sidebar (AI/LLM, Frontend, Backend, Cloud/IaC, Architecture)
- Light / dark mode
- Fully responsive

## Local development

```bash
pnpm install
pnpm dev
```

## Deploy

Pushes to `main` trigger the GitHub Actions workflow which builds the site and deploys it to GitHub Pages via `actions/deploy-pages`.
