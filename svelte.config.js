/** @type {import('@sveltejs/kit').Config} */
import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	extensions: ['.svelte', '.md', '.svelte.md'],
	preprocess: [vitePreprocess({}), mdsvex({ extensions: ['.svelte.md', '.md', '.svx'] })],
	kit: {
		adapter: adapter({ precompress: true }),
	},
};

export default config;
