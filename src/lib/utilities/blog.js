import { parse } from 'yaml';

export const BLOG_PATH = 'src/content/blog';

/**
 * Returns array of post slugs
 * @returns {Promise<string[]>}
 */
export async function getSlugs() {
	try {
		const posts = await import.meta.glob('../../content/blog/**/index.md');
		const slugs = Object.keys(posts).map((element) => {
			const lastIndex = element.lastIndexOf('/index.md');
			const firstIndex = element.lastIndexOf('/', lastIndex - 1) + 1;
			return element.slice(firstIndex, lastIndex);
		});
		return slugs;
	} catch (error) {
		console.error(`Error finding post slugs in getSlugs: ${error}`);
	}
}

/**
 * Returns array of objects containing the slug and post Markdown content
 * @returns {Promise<{slug: string; content: string;}[]>}
 */
export async function getPostsContent() {
	try {
		const postFiles = await import.meta.glob('../../content/blog/**/index.md');
		const postPromises = Object.keys(postFiles).map(async (element) => {
			await postFiles[element]();
			const lastIndex = element.lastIndexOf('/index.md');
			const firstIndex = element.lastIndexOf('/', lastIndex - 1) + 1;
			const slug = element.slice(firstIndex, lastIndex);
			const content = (await import(`${element}?raw`)).default;

			return { slug, content };
		});

		return Promise.all(postPromises);
	} catch (error) {
		console.error(`Error importing blog posts in getPostsContent: ${error}`);
	}
}

export const separateFrontmatter = (markdown) => {
	const frontmatterStartIndex = markdown.indexOf('---') + 3;
	const frontmatterEndIndex = markdown.indexOf('---', frontmatterStartIndex);

	if (frontmatterStartIndex !== -1 && frontmatterEndIndex !== -1) {
		const parsedFrontmatter = parse(markdown.slice(frontmatterStartIndex, frontmatterEndIndex));

		return {
			frontmatter: parsedFrontmatter,
			markdownBody: markdown.slice(frontmatterEndIndex + 3).trim(),
		};
	}

	// assume there is no frontmatter
	return {
		frontmatter: null,
		markdownBody: markdown,
	};
};
