<script>
	import '$lib/styles/index.scss';
</script>

<section class="container">
	<div class="content">
		<slot />
	</div>
</section>

<style lang="scss">
	.container {
		display: flex;
		width: 100%;
	}

	.content {
		width: 80%;
		border: variables.$spacing-px-2 solid variables.$color-theme-1;
		background-color: variables.$color-theme-3;
		border-radius: variables.$spacing-3;
		margin: variables.$spacing-6 auto;
		padding: variables.$spacing-4;
	}
</style>
