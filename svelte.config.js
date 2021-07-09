/** @type {import('@sveltejs/kit').Config} */
import adapter from '@sveltejs/adapter-netlify';
import { mdsvex } from 'mdsvex';
import preprocess from 'svelte-preprocess';
import toc from '@jsdevtools/rehype-toc';
import rehypeSlug from 'rehype-slug';

const config = {
  extensions: ['.svelte', '.md', '.svelte.md'],
  preprocess: [
    mdsvex({ extensions: ['.svelte.md', '.md', '.svx'], rehypePlugins: [rehypeSlug, toc] }),
    preprocess({
      scss: {
        prependData: "@import 'src/lib/styles/variables.scss';",
      },
    }),
  ],
  kit: {
    adapter: adapter(),
    files: {
      hooks: 'src/hooks',
    },
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
  },
};

export default config;
