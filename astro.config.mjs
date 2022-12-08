import { defineConfig } from "astro/config";

//react
import react from "@astrojs/react";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [react(), tailwind()],
});
