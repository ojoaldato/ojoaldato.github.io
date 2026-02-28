# ojoaldato.github.io

Personal site built with [Astro Nano](https://github.com/markhorn-dev/astro-nano), Tailwind, and Bun.

## Setup

```bash
bun install
```

## Development

```bash
bun run dev            # localhost:4321
bun run dev:network    # accessible on local network
```

## Build & Preview

```bash
bun run build          # outputs to ./dist/
bun run preview        # preview the build locally
```

## Adding Content

### Blog post

Create a new `.md` file in `src/content/blog/`:

```yaml
---
title: "Post Title"
description: "Short description."
date: 2026-02-20
draft: false
---
```

### Project

Create a new `.md` file in `src/content/projects/`:

```yaml
---
title: "Project Name"
description: "Short description."
date: 2026-02-20
demoURL: "https://example.com"
repoURL: "https://github.com/..."
draft: false
---
```

### Work experience

Create a new `.md` file in `src/content/work/`:

```yaml
---
company: "Company"
role: "Role"
dateStart: 2026-01-01
dateEnd: "Present"
---
```

## Site config

Edit `src/consts.ts` for name, email, socials, and homepage settings.

## Analytics

[Google Analytics Dashboard](https://analytics.google.com/analytics/web/#/a385817752p526348411/admin/streams/table/)

## Deployment

Pushes to `master` auto-deploy via GitHub Actions (`.github/workflows/deploy.yml`).

Requires GitHub Pages source set to **GitHub Actions** in repo Settings > Pages.
