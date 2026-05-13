// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://silly-beignet-10d67b.netlify.app/",
  integrations: [preact()]
});