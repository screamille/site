import { defineConfig } from "astro/config";

// GitHub Pages : le site est servi sous https://screamille.github.io/site/
// Si tu passes sur Vercel ou un vrai domaine : mets base: "/" et site: "https://ton-domaine.fr"
export default defineConfig({
  site: "https://screamille.github.io",
  base: "/site",
  build: { inlineStylesheets: "always" },
});
