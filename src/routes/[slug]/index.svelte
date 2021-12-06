<script context="module">
  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ page, fetch }) {
    const { path } = page;
    const { slug } = page.params;
    const url = `${page.path}.json`;
    const res = await fetch(url);

    if (res.ok) {
      const imageData = await import(`../../lib/generated/posts/${path.slice(1)}.js`);
      const markdownPath = `../../content/blog/${slug}/index.md`;
      return {
        props: {
          ...(await res.json()),
          slug,
          imageData: { ...imageData.default },
          page: (await import(/* @vite-ignore */ markdownPath)).default,
        },
      };
    }

    return {};
  }
</script>

<script>
  import lazyload from 'vanilla-lazyload';
  import { browser } from '$app/env';

  import '$lib/styles/normalise.css';
  import '$lib/styles/index.scss';
  import BlogPost from '$lib/components/BlogPost.svelte';
  export let page, post, imageData;

  if (browser && !document.lazyloadInstance) {
    document.lazyloadInstance = new lazyload();
  }
</script>

<BlogPost {post} {imageData} />
<svelte:component this={page} />
