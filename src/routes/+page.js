import { separateFrontmatter } from '$lib/utilities/blog';

/** @type {import('./$types').PageLoad} */
export async function load() {
	const mdModules = import.meta.glob('../content/blog/**/index.md');
	const posts = await Promise.all(
		Object.keys(mdModules).map(async (path) => {
			const slug = path.split('/').at(-2);
			const markdown = (await import(`../content/blog/${slug}/index.md?raw`)).default;
			const { frontmatter } = separateFrontmatter(markdown);
			const { datePublished, lastUpdated, postTitle, seoMetaDescription } = frontmatter;
			return {
				datePublished,
				lastUpdated,
				postTitle,
				seoMetaDescription,
				slug,
			};
		}),
	);
	return { posts };
}
