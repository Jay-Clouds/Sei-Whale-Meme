import { defineConfig } from 'astro/config';
import { injectSpeedInsights } from '@vercel/speed-insights';
import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";

injectSpeedInsights();

export default defineConfig({
  integrations: [react(), tailwind()]
});