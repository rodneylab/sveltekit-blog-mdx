/** @type {import('@sveltejs/kit').Config} */
import adapter from '@sveltejs/adapter-netlify';

const config = {
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
