// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
	// site: 'https://carverbryce.com',
	site: 'https://jritt.github.io/carver',
  // base: 'dist',
  integrations: [sitemap()]
/* 	build: {
    inlineStylesheets: 'always',
  }, */

	//Changes dist/_astro to dist/______
	//build: {  assets: 'custom-folder' },
});

