/** @type {import('@sveltejs/kit').Config} */
import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';

const config = {
	preprocess: preprocess({
		scss: {
			prependData: `@import 'src/lib/styles/styles.scss';`
		}
	}),
	kit: {
		adapter: adapter(),
		files: {
			serviceWorker: 'src/service-worker'
		},
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
