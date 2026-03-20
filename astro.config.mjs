import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://ab-brothers-construction.keithkelly.dev',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
