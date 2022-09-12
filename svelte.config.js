/** @type {import('@sveltejs/kit').Config} */
import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import preprocess from 'svelte-preprocess';

const config = {
	extensions: ['.svelte', '.md', '.svelte.md'],
	preprocess: [
		mdsvex({ extensions: ['.svelte.md', '.md', '.svx'] }),
		preprocess({
			scss: {
				prependData: "@import 'src/lib/styles/variables.scss';",
			},
		}),
	],
	kit: {
		adapter: adapter({ precompress: true }),
	},
};

export default config;
