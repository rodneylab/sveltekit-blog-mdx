<script>
	import { H_ELLIPSIS_ENTITY } from '$lib/constants/entities';

	export let postTitle;
	export let datePublished;
	export let seoMetaDescription;
	export let slug;
</script>

<h3><a href={`/${slug}/`}>{postTitle}</a></h3>
<p>{datePublished}</p>
<p>{seoMetaDescription}</p>
<span aria-hidden>Read more {H_ELLIPSIS_ENTITY}</span>
