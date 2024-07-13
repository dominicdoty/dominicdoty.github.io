import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import lqip from 'vite-plugin-lqip';

export default defineConfig({
	plugins: [lqip(), enhancedImages(), sveltekit()],
	build: { minify: true, cssMinify: true },
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@use "src/variables.scss" as *;'
			}
		}
	}
});
