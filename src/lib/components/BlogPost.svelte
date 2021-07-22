<script>
  import ImgixClient from '@imgix/js-core';
  import readingTime from 'reading-time';
  import BannerImage from '$lib/components/BannerImage.svelte';
  import SEO from '$lib/components/SEO/index.svelte';
  import website from '$lib/config/website';

  export let post;
  const { imgixDomain, imgixSecureToken } = website;

  const client = new ImgixClient({
    domain: imgixDomain,
    secureURLToken: imgixSecureToken,
  });

  const timeToRead = Math.ceil(readingTime(post.body).minutes);
  const {
    datePublished,
    featuredImage,
    featuredImageAlt,
    lastUpdated,
    ogImage,
    ogSquareImage,
    postTitle: title,
    seoMetaDescription: metadescription,
    slug,
    twitterImage,
  } = post;

  const featuredImageUrl = client.buildURL(featuredImage, { w: 672, h: 448 });
  const breadcrumbs = [
    {
      name: 'Home',
      slug: '',
    },
    {
      name: title,
      slug,
    },
  ];
  const featuredImageObject = {
    url: featuredImageUrl,
    alt: featuredImageAlt,
    width: 672,
    height: 448,
    caption: title,
  };
  const ogImageObject = ogImage
    ? {
        url: client.buildURL(ogImage, { w: 1200, h: 627 }),
        alt: featuredImageAlt,
      }
    : null;
  const ogSquareImageObject = ogSquareImage
    ? {
        url: client.buildURL(ogSquareImage, { w: 400, h: 400 }),
        alt: featuredImageAlt,
      }
    : null;
  const twitterImageObject = twitterImage
    ? {
        url: client.buildURL(twitterImage, { w: 800, h: 418 }),
        alt: featuredImageAlt,
      }
    : null;

  const bannerImageProps = {
    image: featuredImage,
    alt: featuredImageAlt,
  };
</script>

<SEO
  article
  {breadcrumbs}
  {slug}
  {title}
  {datePublished}
  {lastUpdated}
  {metadescription}
  {timeToRead}
  featuredImage={featuredImageObject}
  ogImage={ogImageObject}
  ogSquareImage={ogSquareImageObject}
  twitterImage={twitterImageObject}
/>
<BannerImage {...bannerImageProps} />
