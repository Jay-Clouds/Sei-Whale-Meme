import { defineConfig } from 'astro/config';
import { injectSpeedInsights } from '@vercel/speed-insights';
import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";


// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  injectSpeedInsights();
  output: "server",
  adapter: vercel()
});