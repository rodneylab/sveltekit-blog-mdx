<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export const prerender = true;
	export async function load({ page, fetch }) {
		const { slug } = page.params;
		const url = `/${slug}.json`;
		const res = await fetch(url);

		if (res.ok) {
			const { post } = await res.json();
			return {
				props: { post }
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}
</script>

<script>
	import BannerImage from '$lib/components/BannerImage.svelte';

	export let post;

	const { body, featuredImage, featuredImageAlt, featuredImageSrc, featuredImageSrcset } = post;
</script>

<BannerImage
	alt={featuredImageAlt}
	image={featuredImage}
	{featuredImageSrc}
	{featuredImageSrcset}
/>
<article>{@html body}</article>
