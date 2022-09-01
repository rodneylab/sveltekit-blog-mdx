<script>
	import { browser } from '$app/environment';
	import BlogPost from '$lib/components/BlogPost.svelte';
	import '$lib/styles/index.scss';
	import '$lib/styles/normalise.css';
	import lazyload from 'vanilla-lazyload';

	export let data;

	const { page, post, imageData } = data;

	if (browser && !document.lazyloadInstance) {
		document.lazyloadInstance = new lazyload();
	}
</script>

<BlogPost {post} {imageData} />
<svelte:component this={page} />
