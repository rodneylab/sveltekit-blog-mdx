<script>
	import Icon, { addCollection } from '@iconify/svelte/dist/OfflineIcon.svelte';

	export let label = 'Email icon';
	export let colour = 'inherit';
	export let ariaHidden = false;
	export let width = 24;

	addCollection({
		prefix: 'simple-line-icons',
		icons: {
			envelope: {
				body: '<path d="M1023 168q1-3 1-6t-1-6l-2-6q-12-54-77-54H112q-30 0-57.5 11T13 137l-5 5q-10 11-7 26q-1 2-1 4v516q0 40 36 76t76 36h832q37 0 58.5-34t21.5-78V170.5l-1-2.5zm-911-8h832L512 505L81 161q8-1 31-1zm832 576H112q-9 0-20.5-8T72 708.5T64 688V230l427 341q9 8 21 8q12-1 21-8l427-341v462q0 44-16 44z" fill="currentColor"/>',
				height: 896,
				hidden: true,
			},
		},
		width: 1024,
		height: 1024,
	});

	// https://api.iconify.design/simple-line-icons.json?icons=envelope
</script>

<Icon icon="simple-line-icons:envelope" aria-label={label} {ariaHidden} color={colour} {width} />
