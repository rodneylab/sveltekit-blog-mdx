<script>
  import website from '$lib/config/website';
  import { VERTICAL_LINE_ENTITY } from '$lib/constants/entities';
  import OpenGraph from './OpenGraph.svelte';
  import SchemaOrg from './SchemaOrg.svelte';
  import Twitter from './Twitter.svelte';

  const {
    author,
    entity,
    facebookAuthorPage,
    facebookPage,
    ogLanguage,
    siteLanguage,
    siteShortTitle,
    siteTitle,
    siteUrl,
    githubPage,
    linkedinProfile,
    telegramUsername,
    tiktokUsername,
    twitterUsername,
  } = website;

  export let article = false;
  export let breadcrumbs = [];
  export let entityMeta = null;
  export let lastUpdated;
  export let datePublished;
  export let metadescription;
  export let slug;
  export let timeToRead = 0;
  export let title;

  const defaultAlt =
    'picture of a person with long, curly hair, wearing a red had taking a picture with an analogue camera';

  // imported props with fallback defaults
  export let featuredImage = {
    url: 'https://rodneylab-climate-starter.imgix.net/home-open-graph.jpg?ixlib=js-3.2.1&w=1200&h=627&s=81c4407df7d9782806b78d698dbcbc75',
    alt: defaultAlt,
    width: 672,
    height: 448,
    caption: 'Home page',
  };
  export let ogImage = {
    url: 'https://rodneylab-climate-starter.imgix.net/home-open-graph.jpg?ixlib=js-3.2.1&w=1200&h=627&s=81c4407df7d9782806b78d698dbcbc75',
    alt: defaultAlt,
  };
  export let ogSquareImage = {
    url: 'https://rodneylab-climate-starter.imgix.net/home-open-graph-square.jpg?ixlib=js-3.2.1&w=400&h=400&s=f98299427341f6f66d1c2460bad224e2',
    alt: defaultAlt,
  };
  export let twitterImage = {
    url: 'https://rodneylab-climate-starter.imgix.net/home-twitter.jpg?ixlib=js-3.2.0&w=800&h=418&s=1b08b7276d34486234a4e2c1ccb49a74',
    alt: defaultAlt,
  };

  const pageTitle = `${siteTitle} ${VERTICAL_LINE_ENTITY} ${title}`;
  const url = `${siteUrl}/${slug}`;
  const openGraphProps = {
    article,
    datePublished,
    lastUpdated,
    image: ogImage,
    squareImage: ogSquareImage,
    metadescription,
    ogLanguage,
    pageTitle,
    siteTitle,
    url,
    ...(article ? { datePublished, lastUpdated, facebookPage, facebookAuthorPage } : {}),
  };
  const schemaOrgProps = {
    article,
    author,
    breadcrumbs,
    datePublished,
    entity,
    lastUpdated,
    entityMeta,
    featuredImage,
    metadescription,
    siteLanguage,
    siteTitle,
    siteTitleAlt: siteShortTitle,
    siteUrl,
    title: pageTitle,
    url,
    facebookPage,
    githubPage,
    linkedinProfile,
    telegramUsername,
    tiktokUsername,
    twitterUsername,
  };
  const twitterProps = {
    article,
    author,
    twitterUsername,
    image: twitterImage,
    timeToRead,
  };
</script>

<svelte:head>
  <title>{pageTitle}</title>
  <meta name="description" content={metadescription} />
  <meta
    name="robots"
    content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
  />
  <html lang={siteLanguage} />
  <link rel="canonical" href={url} />
</svelte:head>
<Twitter {...twitterProps} />
<OpenGraph {...openGraphProps} />
<SchemaOrg {...schemaOrgProps} />
