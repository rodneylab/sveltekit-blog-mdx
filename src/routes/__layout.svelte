<script context="module">
  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ page, fetch }) {
    const { path } = page;
    const { slug } = page.params;

    // make sure this is not a blog post
    if (path === '/') {
      const url = `./index.json`;
      const response = await fetch(url);

      if (response.ok) {
        return {
          props: { ...(await response.json()) },
        };
      }

      return {};
    } else if (path === '/contact') {
      return {};
    }

    const url = `${page.path}.json`;
    const res = await fetch(url);

    if (res.ok) {
      const imageData = await import(`../lib/generated/posts/${path.slice(1)}.js`);
      return {
        props: { ...(await res.json()), slug, imageData: { ...imageData.default } },
      };
    }

    return {};
  }
</script>

<script>
  import lazyload from 'vanilla-lazyload';
  import { browser } from '$app/env';
  // Lora - supported variants:
  // weights: [400, 500, 600, 700]
  // styles: italic, normal
  import '@fontsource/lora/400.css';
  import '@fontsource/lora/600.css';
  import '@fontsource/lora/700.css';
  import '@fontsource/lora/700-italic.css';

  // Source Sans Pro - supported variants:
  // weights: [200, 300, 400, 600, 700, 900]
  // styles: italic, normal
  import '@fontsource/source-sans-pro/400.css';
  import '@fontsource/source-sans-pro/400-italic.css';

  import '$lib/styles/normalise.css';
  import '$lib/styles/index.scss';

  import BlogPost from '$lib/components/BlogPost.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Header from '$lib/components/Header.svelte';
  import PWA from '$lib/components/PWA.svelte';

  export let post, imageData;

  if (browser && !document.lazyloadInstance) {
    document.lazyloadInstance = new lazyload();
  }

  $: isBlogPost = post !== undefined;
</script>

<PWA />
<div class="container">
  <Header />
  <main class="main-container">
    {#if isBlogPost}
      <BlogPost {post} {imageData} />
    {/if}
    <slot />
  </main>
  <Footer />
</div>

<style lang="scss">
  .container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;
    padding: $spacing-4 $spacing-0 $spacing-0;
    margin: $spacing-0 auto;
    min-height: 100vh;
  }

  .main-container {
    max-width: $max-width-wrapper;
    width: 100%;
    margin: $spacing-0 auto;
  }

  @media screen and (max-width: $desktop-breakpoint) {
    .container {
      margin: $spacing-0 $spacing-4;
    }
  }
</style>
