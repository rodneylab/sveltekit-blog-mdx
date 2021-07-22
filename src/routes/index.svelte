<script context="module">
  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ fetch }) {
    const url = `./index.json`;
    const response = await fetch(url);

    if (response.ok) {
      const { posts } = await response.json();
      return {
        props: { posts },
      };
    }

    return {};
  }
</script>

<script>
  import BlogRoll from '$lib/components/BlogRoll.svelte';
  import Card from '$lib/components/Card.svelte';
  import SEO from '$lib/components/SEO/index.svelte';
  import website from '$lib/config/website';

  export let posts;

  const { author, siteUrl } = website;

  let title = 'Home';
  const breadcrumbs = [
    {
      name: 'Home',
      slug: '',
    },
  ];
  let metadescription =
    'SvelteKit MDsvex Blog Starter - starter code by Rodney Lab to help you get going on your next blog site';
  const featuredImageAlt =
    'picture of a person with long, curly hair, wearing a red had taking a picture with an analogue camera';
  const featuredImage = {
    url: 'https://rodneylab-climate-starter.imgix.net/home-open-graph.jpg?ixlib=js-3.2.1&w=1200&h=627&s=81c4407df7d9782806b78d698dbcbc75',
    alt: featuredImageAlt,
    width: 672,
    height: 448,
    caption: 'Home page',
  };
  const ogImage = {
    url: 'https://rodneylab-climate-starter.imgix.net/home-open-graph.jpg?ixlib=js-3.2.1&w=1200&h=627&s=81c4407df7d9782806b78d698dbcbc75',
    alt: featuredImageAlt,
  };
  const ogSquareImage = {
    url: 'https://rodneylab-climate-starter.imgix.net/home-open-graph-square.jpg?ixlib=js-3.2.1&w=400&h=400&s=f98299427341f6f66d1c2460bad224e2',
    alt: featuredImageAlt,
  };

  const twitterImage = {
    url: 'https://rodneylab-climate-starter.imgix.net/home-twitter.jpg?ixlib=js-3.2.0&w=800&h=418&s=1b08b7276d34486234a4e2c1ccb49a74',
    alt: featuredImageAlt,
  };
  const entityMeta = {
    url: `${siteUrl}/`,
    faviconWidth: 512,
    faviconHeight: 512,
    caption: author,
  };
  const seoProps = {
    title,
    slug: '',
    entityMeta,
    datePublished: '2021-07-07T14:19:33.000+0100',
    lastUpdated: '2021-07-07T14:19:33.000+0100',
    breadcrumbs,
    metadescription,
    featuredImage,
    ogImage,
    ogSquareImage,
    twitterImage,
  };
</script>

<SEO {...seoProps} />
<header>
  <h1>Climate &mdash; Sveltekit Starter</h1>
  <h2>SvelteKit MDsveX (Markdown for Svelte) Blog</h2>
</header>
<Card>
  <h2><span>About me</span></h2>
  <p>
    I live and breathe analogue photography. I show you my favourite analogue film cameras on this
    site. Hopefully if you are not into analogue photography yet, some of my enthusiasm will rub off
    onto you.
  </p>
</Card>
<BlogRoll {posts} />

<style lang="scss">
  header > h2 {
    font-size: $font-size-3;
  }
</style>
