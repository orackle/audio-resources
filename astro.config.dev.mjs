// astro.config.dev.mjs
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'http://localhost:3000',
  integrations: [mdx(), tailwind({
    config: {
      applyBaseStyles: false, // We'll handle base styles in our CSS files
    },
  })],
  output: 'server',
  adapter: {
    name: '@astrojs/node',
    serverEntrypoint: '@astrojs/node/server.js'
  },
  experimental: {
    clientPrerender: true
  },
  // Ensure CSS is processed correctly
  vite: {
    css: {
      devSourcemap: true,
    },
  },
});
