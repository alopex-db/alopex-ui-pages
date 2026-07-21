# Alopex Data UI landing page

The bilingual product landing page for **Alopex Data UI — Data Application Components for AlopexDB**.

- English: `/`
- Japanese: `/ja/`
- GitHub and package identifiers: `app/site-config.ts`

## Local development

Requires Node.js 22.13 or newer.

```bash
pnpm install
pnpm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
pnpm run build
```

The project uses vinext and the Sites Vite plugin to produce a Cloudflare Worker-compatible build. Publishing is handled through OpenAI Sites using `.openai/hosting.json`.
