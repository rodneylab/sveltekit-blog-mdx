<script>
	export let alt;
	export let height; // needed to reduce CLS
	export let src;
	export let sources;
	export let placeholder;
	export let width; // needed to reduce CLS
	export let maxWidth = '1280px';
	export let sizes = `(max-width: ${maxWidth}) 100vw, ${maxWidth}}`;
	export let importance = undefined;
	export let loading = 'lazy';
	export let style = '';
</script>

<picture>
	{#each sources as source}
		<source data-sizes={sizes} data-srcset={source.srcset} type={source.type} {width} {height} />
	{/each}
	<img
		class="lazy"
		{alt}
		{importance}
		{loading}
		decoding="async"
		{width}
		{height}
		data-src={src}
		src={placeholder}
		style={`max-width:${maxWidth};${style}`}
	/>
</picture>

<style>
	img {
		height: auto;
	}

	img:not([src]):not([srcset]) {
		visibility: hidden;
	}
</style>
