import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://portfolio-2025-red-mu.vercel.app',
  output: 'static',
  build: {
    assets: 'assets'
  }
});