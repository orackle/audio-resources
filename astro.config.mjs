// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  adapter: cloudflare(),
  server: {
    host: true
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