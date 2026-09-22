import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://www.exemple.fr", // remplace par ton domaine (même valeur que SITE.url dans src/config.ts)
  build: { inlineStylesheets: "always" },
});
