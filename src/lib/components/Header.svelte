<script>
	import CameraIcon from '$lib/components/Icons/Camera.svelte';
</script>

<header class="header-container">
	<a aria-label="Jump to Home page" class="hover-jump" href="./"
		><span class="logo"><CameraIcon width={96} /></span></a
	>
	<nav class="nav">
		<ul>
			<li><a href="/.">Home</a></li>
			<li><a href="/contact">Contact</a></li>
		</ul>
	</nav>
</header>

<style lang="scss">
	.header-container {
		display: flex;
		align-items: flex-end;
		max-width: variables.$max-width-wrapper;
		width: 100%;
		margin: variables.$spacing-0 auto variables.$spacing-12;
	}

	.nav {
		display: flex;
		margin-left: auto;
		list-style-type: none;

		ul {
			display: flex;
			align-items: flex-end;
			padding-bottom: 0;
			margin-bottom: variables.$spacing-0;

			li {
				display: flex;
				font-size: variables.$font-size-4;
				margin-left: variables.$spacing-6;
				margin-bottom: variables.$spacing-1;
			}
		}
	}

	.logo {
		color: variables.$color-theme-1;
	}

	@media (prefers-reduced-motion: no-preference) {
		.hover-jump {
			transition: all 0.25s ease-in-out;
		}
	}

	.hover-jump:focus,
	.hover-jump:hover {
		transform: translateY(-1 * variables.$spacing-2);
	}
</style>
