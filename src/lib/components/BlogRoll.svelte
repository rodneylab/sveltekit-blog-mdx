<script>
	import BlogPostSummary from '$lib/components/BlogPostSummary.svelte';

	export let posts;
	const postCount = posts.length;
</script>

{#if postCount > 0}
	{#each posts as post, index}
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
