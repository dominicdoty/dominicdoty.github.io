import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import remarkExcerpt from 'mdsvex-excerpt';
// svelte.config.js

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.svx', '.md'],
			layout: {
				post: './src/lib/PostCard.svelte'
			},
			remarkPlugins: [
				[
					remarkExcerpt,
					{
						componentName: 'More',
						componentPath: '$lib/More.svelte',
						excerptMark: '<!--more-->'
					}
				]
			]
		})
	],

	kit: {
		// note that adapter-cloudflare is available for cloudflare pages if static rendering isn't enough
		adapter: adapter(),

		alias: {
			$src: './src'
		}
	},

	extensions: ['.svelte', '.svx', '.md']
};

export default config;
