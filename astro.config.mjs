import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ab-brothers-construction.keithkelly.dev',
  output: 'static',
  integrations: [sitemap()],
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Big Shoulders Display',
      cssVariable: '--font-display',
      weights: [400, 700, 900],
      fallbacks: ['Arial Narrow', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Source Serif 4',
      cssVariable: '--font-source-serif',
      weights: [400, 600],
      styles: ['normal', 'italic'],
    },
  ],
});
