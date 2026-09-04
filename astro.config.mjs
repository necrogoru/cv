import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  base: '/cv',
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  integrations: [],
  vite: {
    plugins: [
      tailwindcss()
    ]
  }
});
