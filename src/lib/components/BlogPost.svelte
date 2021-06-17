<script>
	import BannerImage from '$lib/components/BannerImage.svelte';
	export let post;
	const { featuredImage, featuredImageAlt, featuredImageSrc, featuredImageSrcset } = post;
	const bannerImageProps = { featuredImage, featuredImageAlt, featuredImageSrc, featuredImageSrcset };
</script>

<BannerImage {...bannerImageProps}/>