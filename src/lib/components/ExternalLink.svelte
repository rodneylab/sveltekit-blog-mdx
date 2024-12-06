<script>
	let {
		children,
		rel = 'nofollow noopener noreferrer',
		target = '_blank',
		href,
		ariaLabel,
	} = $props();
</script>

<a aria-label={ariaLabel} {href} {rel} {target}>{@render children?.()}</a>
