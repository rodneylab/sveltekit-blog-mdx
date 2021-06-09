<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ fetch }) {
		const url = `/index.json`;
		const response = await fetch(url);

		if (response.ok) {
			const { posts } = await response.json();
			return {
				props: { posts }
			};
		}

		return {
			status: response.status,
			error: new Error(`Could not load ${url}`)
		};
	}
</script>

<script>
	import BlogRoll from '$lib/components/BlogRoll.svelte';
	import Card from '$lib/components/Card.svelte';
	import SEO from '$lib/components/SEO/index.svelte';
	export let posts;

	let title = '';
	let metadescription = '';
</script>

<SEO {title} {metadescription} />
<header>
	<h1>Climate &mdash; Sveltekit Starter</h1>
	<h2>SvelteKit Starter for MDsveX (Markdown in Svelte) Blog</h2>
</header>
<Card>
	<h2>About me</h2>
	<p>
		I live and breathe analogue photography. I show you my favourite analogue film cameras on this
		site. Hopefully if you are not into analogue photography yet, some of my enthusiasm will rub off
		onto you.
	</p>
</Card>
<BlogRoll {posts} />
