<script>
  import BannerImage from '$lib/components/BannerImage.svelte';
  import SEO from '$lib/components/SEO/index.svelte';

  export let post;

  const {
    featuredImage,
    featuredImageAlt,
    featuredImageSrc,
    featuredImageSrcset,
    postTitle: title,
    seoMetaDescription: metadescription,
    slug,
  } = post;
  const bannerImageProps = {
    image: featuredImage,
    alt: featuredImageAlt,
    // featuredImageAlt,
    // featuredImageSrc,
    // featuredImageSrcset,
  };
</script>

<SEO article={true} {slug} {title} {metadescription} />
<BannerImage {...bannerImageProps} />
