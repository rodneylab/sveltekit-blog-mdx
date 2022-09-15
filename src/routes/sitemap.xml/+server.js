import website from '$lib/config/website';
import { BLOG_PATH, getPosts, getPostsContent } from '$lib/utilities/blog';
import path from 'path';

export const prerender = true;

const { siteUrl } = website;

const render = (pages, posts) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
	xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
	xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
  xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
  xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:pagemap="http://www.google.com/schemas/sitemap-pagemap/1.0"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
	>

	${pages
		.map(
			(element) => `
	<url>
	  <loc>${element}</loc>
		<lastmod>${`${process.env.VITE_BUILD_TIME}`}</lastmod>
		<changefreq>monthly</changefreq>
		<priority>0.7</priority>
	</url>`,
		)
		.join('\n')}
	
	${posts
		.map((element) => {
			const { lastUpdated, slug } = element;
			return `
	<url>
	  <loc>${siteUrl}/${slug}/</loc>
		<lastmod>${`${lastUpdated}`}</lastmod>
		<changefreq>daily</changefreq>
		<priority>0.7</priority>
	</url>
	`;
		})
		.join('')}
</urlset>`;

/** @type {import('./$types').RequestHandler} */
export async function GET() {
	const __dirname = path.resolve();
	const location = path.join(__dirname, BLOG_PATH);
	const postsContent = await getPostsContent(location);
	const posts = await getPosts(postsContent, false);

	const pages = Object.keys(import.meta.glob('/src/routes/**/!(_)*.svelte'))
		.filter((page) => {
			const filters = ['slug]', '_', 'private'];

			return !filters.find((filter) => page.includes(filter));
		})
		.map((page) =>
			page.replace('/src/routes', siteUrl).replace('/index.svelte', '').replace('.svelte', ''),
		);

	return {
		body: render(pages, posts),
		headers: {
			'Cache-Control': `max-age=0, s-max-age=${600}`,
			'Content-Type': 'application/xml',
		},
	};
}
