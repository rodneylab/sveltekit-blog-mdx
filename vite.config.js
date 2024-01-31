import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';

/** @type {import('vite').UserConfig} */
export default defineConfig({
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: "@import 'src/lib/styles/variables.scss';",
			},
		},
	},
	define: {
		'process.env.VITE_BUILD_TIME': JSON.stringify(new Date().toISOString()),
	},
	plugins: [sveltekit(), imagetools()],
	server: {
		port: 5173,
		strictPort: false,
	},
	preview: {
		port: 4173,
		strictPort: false,
	},
});
