import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  base: '/cv',
  compressHTML: true,
  integrations: [],
  vite: {
    plugins: [
      tailwindcss()
    ]
  }
});
