<script>
	import dayjs from 'dayjs';
	import { H_ELLIPSIS_ENTITY } from '$lib/constants/entities';
	import { goto } from '$app/navigation';

	let { postTitle, datePublished, seoMetaDescription, slug } = $props();

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
	role="presentation"
	class="container"
	onmouseenter={handleMouseEnter}
	onmouseleave={handleMouseLeave}
	onmousedown={handleMouseDown}
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
		margin: variables.$spacing-12 variables.$spacing-0;
	}

	.content {
		width: 80%;
		border: variables.$spacing-px-2 solid variables.$color-theme-2;
		border-radius: variables.$spacing-3;
		margin: variables.$spacing-0 auto;
		padding: variables.$spacing-4;

		h3 {
			margin: variables.$spacing-0 variables.$spacing-2;
		}
		p {
			color: variables.$color-theme-1;
			font-size: variables.$mobile-font-size-2;
			margin: variables.$spacing-2;
		}
	}

	.content:focus,
	.content:hover {
		h3 {
			color: variables.$color-theme-2;
		}
		p {
			color: variables.$color-theme-3;
		}
		border-color: variables.$color-theme-4;
		background-color: variables.$color-theme-4;
		box-shadow: variables.$spacing-0 variables.$spacing-0 variables.$spacing-1 variables.$spacing-0
			variables.$color-theme-4-alpha-20;
		color: variables.$color-accent;
	}
</style>
