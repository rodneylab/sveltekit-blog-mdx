<script>
	import dayjs from 'dayjs';
	import { H_ELLIPSIS_ENTITY } from '$lib/constants/entities';
	import { goto } from '$app/navigation';

	export let postTitle;
	export let datePublished;
	export let seoMetaDescription;
	export let slug;

	/**
	 * @param event {MouseEvent} - click
	 */
	const handleMouseEnter = (event) => {
		let element = /** @type {HTMLElement} */ (event.target);
		element.style.cursor = 'pointer';
	};

	/**
	 * @param event {MouseEvent} - click
	 */
	const handleMouseLeave = (event) => {
		let element = /** @type {HTMLElement} */ (event.target);
		element.style.cursor = 'default';
	};

	const handleMouseDown = async () => {
		goto(`/${slug}`);
	};

	const date = dayjs(datePublished);
	const dateString = `${date.format('D')} ${date.format('MMM')}`;
	const idString = `blog-post-summary-${slug}`;
</script>

<div
	class="container"
	on:mouseenter={handleMouseEnter}
	on:mouseleave={handleMouseLeave}
	on:mousedown={handleMouseDown}
>
	<div class="content" data-sveltekit-preload-data="hover">
		<h3>
			<a aria-label={`Open ${postTitle} blog post`} aria-describedby={idString} href={`/${slug}/`}
				>{postTitle}</a
			>
		</h3>
		<p>{dateString}</p>
		<p>{seoMetaDescription}</p>
		<span id={idString} aria-hidden="true">Read more {H_ELLIPSIS_ENTITY}</span>
	</div>
</div>

<style lang="scss">
	.container {
		display: flex;
		width: 100%;
		margin: $spacing-12 $spacing-0;
	}

	.content {
		width: 80%;
		border: $spacing-px-2 solid $color-theme-2;
		border-radius: $spacing-3;
		margin: $spacing-0 auto;
		padding: $spacing-4;

		h3 {
			margin: $spacing-0 $spacing-2;
		}
		p {
			color: $color-theme-1;
			font-size: $mobile-font-size-2;
			margin: $spacing-2;
		}
	}

	.content:focus,
	.content:hover {
		h3 {
			color: $color-theme-2;
		}
		p {
			color: $color-theme-3;
		}
		border-color: $color-theme-4;
		background-color: $color-theme-4;
		box-shadow: $spacing-0 $spacing-0 $spacing-1 $spacing-0 $color-theme-4-alpha-20;
		color: $color-accent;
	}
</style>
