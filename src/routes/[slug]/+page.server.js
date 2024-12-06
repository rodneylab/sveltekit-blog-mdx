import { markdown_to_html as markdownToHtml } from '@rodneylab/parsedown';
import createDOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';
import { separateFrontmatter } from '$lib/utilities/blog';

export const prerender = true;

const { window } = new JSDOM('');
const DOMPurify = createDOMPurify(window);

/** @type {import('./$types').PageLoad} */
export async function load({ params, url }) {
	const { slug } = params;
	const { pathname } = url;

	const imageDataPromise = import(`../../lib/generated/posts/${pathname.slice(1)}.js`);
	const markdown = (await import(`../../content/blog/${slug}/index.md?raw`)).default;

	if (!markdown) {
		return {
			status: 404,
		};
	}
	const { frontmatter, markdownBody } = separateFrontmatter(markdown);
	const { html, statistics } = await markdownToHtml(markdownBody);
	const sanitisedHtml = DOMPurify.sanitize(html);

	const [imageDataResult] = await Promise.all([imageDataPromise]);
	const { default: imageData } = imageDataResult;

	const {
		datePublished,
		featuredImage,
		featuredImageAlt,
		ogImage,
		ogSquareImage,
		postTitle,
		seoMetaDescription,
		twitterImage,
	} = frontmatter;

	return {
		post: {
			datePublished,
			featuredImage,
			featuredImageAlt,
			ogImage,
			ogSquareImage,
			postTitle,
			seoMetaDescription,
			timeToRead: statistics.reading_time,
			twitterImage,
			slug,
		},
		slug,
		sanitisedHtml,
		statistics,
		imageData: JSON.stringify(imageData),
	};
}
