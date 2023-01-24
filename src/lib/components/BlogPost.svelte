<script>
	import readingTime from 'reading-time';
	import BannerImage from '$lib/components/BannerImage.svelte';
	import SEO from '$lib/components/SEO/index.svelte';

	export let imageData;
	export let post;

	const {
		datePublished,
		featuredImageAlt,
		lastUpdated,
		postTitle: title,
		seoMetaDescription: metadescription,
		slug,
		timeToRead,
	} = post;
	const { ogImage, ogSquareImage, src: featuredImage, twitterImage } = imageData;

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
		url: featuredImage,
		alt: featuredImageAlt,
		width: 672,
		height: 448,
		caption: title,
	};
	const ogImageObject = ogImage
		? {
				url: ogImage,
				alt: featuredImageAlt,
		  }
		: null;
	const ogSquareImageObject = ogSquareImage
		? {
				url: ogSquareImage,
				alt: featuredImageAlt,
		  }
		: null;
	const twitterImageObject = twitterImage
		? {
				url: twitterImage,
				alt: featuredImageAlt,
		  }
		: null;
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

<BannerImage {imageData} />
<h1>{title}</h1>
