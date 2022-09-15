<script>
	import { page } from '$app/stores';

	const {
		status,
		error: { message },
	} = $page;
	const title = `${status}: ${message}`;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>
<h1>{title}</h1>
