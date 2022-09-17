import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from 'vite-imagetools';
import autoImport from 'sveltekit-autoimport';

const autoImportConfig = {
	components: ['./src/lib/components'],
	include: ['**/*.svelte', './src/content/blog/**/*.md'],
};

/** @type {import('vite').UserConfig} */
const config = {
	define: {
		'process.env.VITE_BUILD_TIME': JSON.stringify(new Date().toISOString()),
	},
	plugins: [autoImport(autoImportConfig), imagetools(), sveltekit()],
	server: {
		port: 5173,
		strictPort: false,
	},
	preview: {
		port: 4173,
		strictPort: false,
	},
};

export default config;
