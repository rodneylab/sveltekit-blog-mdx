<script>
	let { children, rel = '', target = '', href, ariaLabel } = $props();
</script>

<a aria-label={ariaLabel} {href} {rel} {target}> {@render children?.()}</a>
