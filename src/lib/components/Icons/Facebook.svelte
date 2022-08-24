<script>
	import Icon, { addCollection } from '@iconify/svelte/dist/OfflineIcon.svelte';

	export let label = 'Facebook icon';
	export let colour = 'inherit';
	export let ariaHidden = false;
	export let width = 24;

	addCollection({
		prefix: 'simple-icons',
		icons: {
			facebook: {
				body: '<path fill="currentColor" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669c1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>',
			},
		},
		width: 24,
		height: 24,
	});

	// https://api.iconify.design/simple-icons.json?icons=facebook
</script>

<Icon icon="simple-icons:facebook" {ariaHidden} aria-label={label} color={colour} {width} />
