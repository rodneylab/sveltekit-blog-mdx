<script>
	import BlogPostSummary from '$lib/components/BlogPostSummary.svelte';
	import { H_ELLIPSIS_ENTITY } from '$lib/constants/entities';

	export let initialPosts = 4;
	export let posts;

	const postCount = posts.length;
	$: showPosts = initialPosts;
	$: displayPosts = posts.slice(0, showPosts);

	const handleClick = () => {
		showPosts += initialPosts;
	};
</script>

<section role="feed">
	<h2>BLOG POSTS</h2>
	{#if postCount > 0}
		{#each displayPosts as post, index}
			<article aria-posinset={index + 1} aria-setsize={postCount}>
				<BlogPostSummary
					datePublished={post.datePublished}
					postTitle={post.postTitle}
					seoMetaDescription={post.seoMetaDescription}
					slug={post.slug}
				/>
			</article>
		{/each}
	{:else}
		<p>No posts yet!</p>
	{/if}
	{#if showPosts < postCount}
		<button type="submit" on:click={handleClick}>See more {H_ELLIPSIS_ENTITY}</button>
	{/if}
</section>
