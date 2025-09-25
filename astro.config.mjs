// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  output: 'static', // Ensure static output for Cloudflare Pages
  integrations: [
    tailwindcss({
      applyBaseStyles: true,
    }),
    mdx()
  ],
  adapter: cloudflare(),
  server: {
    host: true
  },
  build: {
    // Ensure CSS is properly extracted and minified
    cssMinify: true,
    // Generate source maps for debugging
    sourcemap: true,
  },
  vite: {
    server: {
      host: true,
      allowedHosts: [
        'wrinkleable-cristobal-septavalent.ngrok-free.dev',
        'localhost'
      ],
      hmr: {
        clientPort: 443,
        protocol: 'wss'
      }
    }
  }
});