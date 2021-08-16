import website from './src/lib/config/website.js';
import { BLOG_PATH, getPosts, getPostsContent } from './src/lib/utilities/blog.js';
import path from 'path';
import fs from 'fs';

const DEFAULT_BLOG_POST_PRIORITY = 0.7;
const DEFAULT_PAGE_PRIORITY = 0.7;

const { siteUrl } = website;
const TIMESTAMP = new Date().toISOString();

const __dirname = path.resolve();
const sitemapFile = path.join(__dirname, 'static/sitemap.xml');

export const getPages = (location) => {
  const pages = fs
    .readdirSync(location)
    .filter(
      (element) =>
        path.extname(element) === '.svelte' && path.basename(element).indexOf('__') !== 0,
    );
  return pages;
};

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
      (element) => `  <url>
	    <loc>${element}</loc>
		  <lastmod>${`${TIMESTAMP}`}</lastmod>
		  <changefreq>monthly</changefreq>
		  <priority>${DEFAULT_PAGE_PRIORITY}</priority>
	  </url>`,
    ).join('')}
	${posts
    .map((element) => {
      const { lastUpdated, slug } = element;
      return `  <url>
	    <loc>${siteUrl}/${slug}/</loc>
		  <lastmod>${`${lastUpdated}`}</lastmod>
		  <changefreq>daily</changefreq>
		  <priority>${DEFAULT_BLOG_POST_PRIORITY}</priority>
	  </url>
	`;
    })
    .join('')}</urlset>`;

// export async function get() {
// const __dirname = path.resolve();
const location = path.join(__dirname, BLOG_PATH);
const postsContent = await getPostsContent(location);
const posts = await getPosts(postsContent, false);
const pages = await getPages(location);

// const pages = Object.keys(import.meta.glob('/src/routes/**/!(_)*.svelte'))
//   .filter((page) => {
//     const filters = ['slug]', '_', 'private'];

//     return !filters.find((filter) => page.includes(filter));
//   })
//   .map((page) =>
//     page.replace('/src/routes', siteUrl).replace('/index.svelte', '').replace('.svelte', ''),
//   );

fs.writeFileSync(sitemapFile, render(pages, posts));
// }
