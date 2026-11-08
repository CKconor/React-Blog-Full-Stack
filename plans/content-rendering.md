# Content rendering overhaul

Goal: Entry pages static + cheap to ship; images optimised.

## Decisions
1. **ISR** — drop `force-dynamic` from `/blog`, `/blog/[slug]`, `/projects`, `/projects/[slug]`. Add `generateStaticParams` to both slug routes. Keep `revalidate: 3600` (time-based only, no webhook). `dynamicParams` default true → new slugs render on first hit.
   - Requires `CONTENTFUL_SPACE_ID` / `CONTENTFUL_AUTH_KEY` at build time (deploy env).
2. **Server Markdown** — remove `'use client'` from `Markdown.tsx` + `codeblock.tsx`. Swap `Prism` → `PrismLight`, register js, jsx, ts, tsx, bash, css, json, markup. Existing `.token.*` CSS unchanged.
3. **Images** — `next/image`, default loader, keep `remotePatterns`. `fill` + `sizes` on `EntryCard` and `Article` hero; `priority` on hero. Parents need `relative` + fixed height.
4. **Queries** — split fields: Summary (title, slug, excerpt, image, sys) for lists + `generateStaticParams`; Full = Summary + body for slug pages. Blog list `order: sys_publishedAt_DESC`. Project order unchanged.

## Verify
- `next build` output: Entry routes marked ● (SSG/ISR), not ƒ.
- Client JS for `/blog/[slug]` no longer includes react-markdown / prism.
- Code blocks still themed; images served via `/_next/image`.

## Unresolved
- Why `force-dynamic` was originally added (assumed: missing env at build).
- Any code languages beyond the registered set?
