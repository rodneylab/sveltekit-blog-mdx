<script>
	import lazyload from 'vanilla-lazyload';
	import { browser } from '$app/environment';

	let { children } = $props();

	if (browser && !document.lazyloadInstance) {
		document.lazyloadInstance = new lazyload();
	}
</script>

{@render children?.()}
