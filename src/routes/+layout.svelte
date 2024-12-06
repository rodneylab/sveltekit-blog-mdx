<script>
	// Lora - supported variants:
	// weights: [400, 500, 600, 700]
	// styles: italic, normal
	import '@fontsource/lora/400.css';
	import '@fontsource/lora/600.css';
	import '@fontsource/lora/700.css';
	import '@fontsource/lora/700-italic.css';

	// Source Sans Pro - supported variants:
	// weights: [200, 300, 400, 600, 700, 900]
	// styles: italic, normal
	import '@fontsource/source-sans-pro/400.css';
	import '@fontsource/source-sans-pro/400-italic.css';

	import '$lib/styles/normalise.css';
	import '$lib/styles/index.scss';

	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import PWA from '$lib/components/PWA.svelte';

	let { children } = $props();
</script>

<PWA />
<div class="container">
	<Header />
	<main class="main-container">
		{@render children?.()}
	</main>
	<Footer />
</div>

<style lang="scss">
	.container {
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
		justify-content: space-between;
		padding: variables.$spacing-4 variables.$spacing-0 variables.$spacing-0;
		margin: variables.$spacing-0 auto;
		min-height: 100vh;
	}

	.main-container {
		max-width: variables.$max-width-wrapper;
		width: 100%;
		margin: variables.$spacing-0 auto;
	}

	@media screen and (max-width: variables.$desktop-breakpoint) {
		.container {
			margin: variables.$spacing-0 variables.$spacing-4;
		}
	}
</style>
