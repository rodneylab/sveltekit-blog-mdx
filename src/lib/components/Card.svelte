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
		border: $spacing-px-2 solid $color-theme-1;
		background-color: $color-theme-3;
		border-radius: $spacing-3;
		margin: $spacing-6 auto;
		padding: $spacing-4;
	}
</style>
