import path from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const root = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: "/alopex-ui-pages/",
  root: path.join(root, "github-pages"),
  publicDir: path.join(root, "public"),
  plugins: [react()],
  build: {
    outDir: path.join(root, "pages-dist"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: path.join(root, "github-pages", "index.html"),
        ja: path.join(root, "github-pages", "ja", "index.html"),
      },
    },
  },
});
