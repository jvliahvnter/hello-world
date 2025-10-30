import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jvliahvnter.github.io',
  base: '/hello-world/astro',
  outDir: '../dist/astro',
  build: {
    assets: 'assets'
  }
});
