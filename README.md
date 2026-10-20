<p align="center">
  <a href="https://alopex-db.github.io/alopex-ui-pages/">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/alopex-db/alopex-db.github.io/main/docs/assets/images/brand/submark-dataui-dark-192.png">
      <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/alopex-db/alopex-db.github.io/main/docs/assets/images/brand/submark-dataui-192.png">
      <img alt="Alopex Data UI" src="https://raw.githubusercontent.com/alopex-db/alopex-db.github.io/main/docs/assets/images/brand/submark-dataui-192.png" width="96">
    </picture>
  </a>
</p>

<h1 align="center">Alopex Data UI — product site</h1>

<p align="center">
  <b>The bilingual landing page for Alopex Data UI.</b><br>
  This repository is the site, not the component library.
</p>

<p align="center">
  <a href="https://alopex-db.github.io/alopex-ui-pages/">English site</a> &bull;
  <a href="https://alopex-db.github.io/alopex-ui-pages/ja/">日本語サイト</a> &bull;
  <a href="https://github.com/alopex-db/alopex-ui">The library</a> &bull;
  <a href="https://alopex-db.github.io">Alopex docs</a> &bull;
  <a href="https://github.com/sponsors/asopitech">Sponsor</a>
</p>

<p align="center">
  <a href="https://github.com/alopex-db/alopex-ui-pages/actions/workflows/pages.yml"><img alt="Deploy" src="https://img.shields.io/github/actions/workflow/status/alopex-db/alopex-ui-pages/pages.yml?branch=main&label=pages%20deploy"></a>
  <img alt="Node" src="https://img.shields.io/badge/node-%E2%89%A522.13-5FB4C9">
  <img alt="Stack" src="https://img.shields.io/badge/stack-React%20%C2%B7%20Vite%20%C2%B7%20vinext-1E3A5F">
</p>

---

## What this is

Looking for the component model, the DataSource contract, or the packages?
That is **[alopex-db/alopex-ui](https://github.com/alopex-db/alopex-ui)**.
This repository holds the marketing site that explains it, in English and
Japanese.

| | |
|:--|:--|
| **Published at** | <https://alopex-db.github.io/alopex-ui-pages/> (`/` English, `/ja/` Japanese) |
| **Deployed by** | [`.github/workflows/pages.yml`](.github/workflows/pages.yml) on every push to `main` |
| **Built with** | React + Vite for the published static build; vinext for the Cloudflare Worker variant |
| **Shared copy and links** | [`app/site-config.ts`](app/site-config.ts) — GitHub URL, repository name, package scope |

## Develop

Node.js 22.13 or newer.

```bash
npm install          # or: pnpm install
npm run dev          # vinext dev server
```

Open <http://localhost:3000>.

## Build

```bash
# The GitHub Pages build — this is what ships
npm run build:pages  # vite, base /alopex-ui-pages/, outputs pages-dist/

# The Cloudflare Worker build
npm run build        # vinext build

# Lint and the rendered-HTML test
npm run lint
npm test             # builds, then checks the rendered markup
```

`npm test` runs `tests/rendered-html.test.mjs` against a real build, so a
broken page fails before it reaches the deploy.

## Layout

| Path | What lives there |
|:--|:--|
| `app/` | Page components — `page.tsx` (English), `ja/` (Japanese), `landing-page.tsx`, `layout.tsx` |
| `app/site-config.ts` | GitHub URL, repository name, and package scope used across both locales |
| `github-pages/` | Entry HTML for the static Pages build (`index.html`, `ja/index.html`) |
| `vite.pages.config.ts` | The Pages build — base path, inputs, and `pages-dist/` output |
| `worker/`, `next.config.ts` | The Cloudflare Worker variant |
| `public/` | Static assets shared by both builds |
| `tests/` | Rendered-HTML checks |

## Editing the site

- **Copy changes** live in `app/page.tsx` and `app/ja/`. Keep both locales in
  step — a change to one is incomplete until the other matches.
- **Links and names** come from `app/site-config.ts`; change them there rather
  than inline.
- **Brand assets** (mark, lockups, palette) come from
  [alopex-db.github.io/docs/assets/images/brand](https://github.com/alopex-db/alopex-db.github.io/tree/main/docs/assets/images/brand);
  see `BRAND.md` there before using them.

## The Alopex family

| Project | What it is |
|:--|:--|
| [**alopex**](https://github.com/alopex-db/alopex) | The unified engine — SQL + vector (HNSW) + columnar, embedded to cluster |
| [**alopex-skulk**](https://github.com/alopex-db/alopex-skulk) | Time-series storage, ingest, and embedded PromQL / SQL-TS |
| [**alopex-chirps**](https://github.com/alopex-db/alopex-chirps) | Gossip and messaging mesh over UDP/QUIC |
| [**alopex-ui**](https://github.com/alopex-db/alopex-ui) | Alopex Data UI — the component model this site describes |

Documentation for the family: <https://alopex-db.github.io>.

## Sponsor

Built in the open by [@asopitech](https://github.com/asopitech) —
[GitHub Sponsors](https://github.com/sponsors/asopitech?metadata_source=alopex_ui_pages_readme&metadata_campaign=sponsor_early_access&metadata_content=readme_sponsor_section)
funds continued development across the Alopex family.
