<script>
  import BannerImage from '$lib/components/BannerImage.svelte';
  import SEO from '$lib/components/SEO/index.svelte';

  export let post;

  const {
    featuredImage,
    featuredImageAlt,
    postTitle: title,
    seoMetaDescription: metadescription,
    slug,
  } = post;
  const bannerImageProps = {
    image: featuredImage,
    alt: featuredImageAlt,
  };
</script>

<SEO article {slug} {title} {metadescription} />
<BannerImage {...bannerImageProps} />
