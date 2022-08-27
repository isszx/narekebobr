import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://isszx.github.io', // 'https://narekebobr.by',
	base: '/narekebobr',
	integrations: [mdx(), sitemap()],
});
