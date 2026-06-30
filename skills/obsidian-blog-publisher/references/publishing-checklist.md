# Publishing Checklist

Use this checklist before pushing a new public content batch.

1. Update `blog.config.mjs` with public roots, deny patterns, and minimum length.
2. Run `npm run sync:publish-roots`.
3. Read `src/data/sync-manifest.json` and check published, skipped, uploaded image counts.
4. Run a strict secret-marker scan against `src/pages/posts`, `public/media`, and `src/data`.
5. Run `npm run build`.
6. Browser-check home, archive, offer, sync, and at least one generated article.
7. Commit generated posts and media because Vercel cannot read the local Obsidian vault.
8. Deploy with `vercel --prod --yes`.
9. Visit production and confirm the article count, archive list, and paid CTA are visible.
