---
name: obsidian-blog-publisher
description: Safely publish selected Obsidian vault folders to this Astro personal blog, preserve the source vault as read-only, sync local images into static media, maintain paid-conversion UI sections, expose static public JSON APIs, and verify/deploy on Vercel. Use when updating public Obsidian content, adding paid service cards, changing blog collections, adding API endpoints, or preparing a production deployment for this repository.
---

# Obsidian Blog Publisher

## Overview

Use this skill to update the blog without repeating the original publishing mistakes: missing generated posts, ignored media, unsafe private content, and one-off UI edits. Treat `blog.config.mjs`, `src/lib/siteModel.js`, and `src/pages/api/v1/` as the primary extension points.

## Workflow

1. Read `AGENTS.md`, `docs/context-compact.md`, and the user request.
2. Keep the Obsidian vault read-only. Only generate files inside the blog repository.
3. Update public roots and deny rules in `blog.config.mjs` when content scope changes.
4. Run `npm run sync:publish-roots` for the configured public roots.
5. Inspect `src/data/sync-manifest.json` for published, skipped, and image counts.
6. Run the strict secret-marker scan. Report counts and paths only, never secret values.
7. Put reusable UI/data changes in `src/lib/siteModel.js` and `src/components/` before editing pages.
8. Keep public API responses under `/api/v1/*.json.js` backward compatible.
9. Run `npm run build`, browser-check important pages, then deploy with `vercel --prod --yes`.

## Extension Points

- Content scope: `blog.config.mjs`
- Sync implementation: `scripts/sync-obsidian.mjs`
- Shared content model: `src/lib/siteModel.js`
- Paid offer UI: `src/components/OfferGrid.astro`
- Metrics UI: `src/components/ProofGrid.astro` and `src/components/CockpitPanel.astro`
- Static API: `src/pages/api/v1/`
- API docs: `docs/api.md`

## Open-Closed Rule

Prefer adding configuration or small components over modifying every page:

- Add services in `services`.
- Add collections in `collectionDefinitions`.
- Add content type metadata in `contentTypes`.
- Add API resources by reusing `apiResponse(resource, data)`.
- Add page sections by composing existing components before creating new one-off markup.

## Validation

Run these checks before finishing:

```bash
npm run sync:publish-roots
npm run build
npm audit --audit-level=low
```

Use browser QA for `/`, `/archive/`, `/offer/`, `/sync/`, and at least one generated article. Use `references/publishing-checklist.md` for the full release checklist.

If a real secret is found, stop the release and ask the user to rotate or clean it in the source vault.
