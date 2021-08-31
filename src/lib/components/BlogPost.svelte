<script>
  import ImgixClient from '@imgix/js-core';
  import readingTime from 'reading-time';
  import BannerImage from '$lib/components/BannerImage.svelte';
  import SEO from '$lib/components/SEO/index.svelte';
  import website from '$lib/config/website';

  export let post;

  /* code here shows how to set up Imgix to generate responsive, NextGen images you need to add your
   * Imgix credentials to your .env file.  If these aren't defined we use static images in the
   * /static/assets/images folder, these aren't responsive or generated in NextGen formats. Also edit
   * $lib/BlogPost.svelte if you change image related stuff here.
   */
  const { imgixDomain, imgixSecureToken, siteUrl } = website;

  const client =
    imgixDomain && imgixSecureToken
      ? new ImgixClient({
          domain: imgixDomain,
          secureURLToken: imgixSecureToken,
        })
      : null;

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

  const featuredImageUrl = client
    ? client.buildURL(featuredImage, { w: 672, h: 448 })
    : `${siteUrl}/assets/images/${featuredImage}`;
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
        url: client
          ? client.buildURL(ogImage, { w: 1200, h: 627 })
          : `${siteUrl}/assets/images/${ogImage}`,
        alt: featuredImageAlt,
      }
    : null;
  const ogSquareImageObject = ogSquareImage
    ? {
        url: client
          ? client.buildURL(ogSquareImage, { w: 400, h: 400 })
          : `${siteUrl}/assets/images/${ogSquareImage}`,
        alt: featuredImageAlt,
      }
    : null;
  const twitterImageObject = twitterImage
    ? {
        url: client
          ? client.buildURL(twitterImage, { w: 800, h: 418 })
          : `${siteUrl}/assets/images/${twitterImage}`,
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
