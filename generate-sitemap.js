import { config } from 'dotenv';
import fm from 'front-matter';
import fs from 'fs';
import path from 'path';
import { BLOG_PATH } from './src/lib/utilities/blog.js';

config();

const DEFAULT_BLOG_POST_PRIORITY = 0.7;
const DEFAULT_PAGE_PRIORITY = 0.7;
const siteUrl = process.env.VITE_SITE_URL;

const TIMESTAMP = new Date().toISOString();

const __dirname = path.resolve();
const sitemapFile = path.join(__dirname, 'static/sitemap.xml');

function getPages(location) {
  const pages = fs.readdirSync(location).reduce((accumulator, currentValue) => {
    if (
      path.extname(currentValue) === '.svelte' &&
      path.basename(currentValue).indexOf('__') !== 0
    ) {
      accumulator.push(`${siteUrl}/${currentValue.replace('.svelte', '/').replace('index/', '')}`);
    }

    return accumulator;
  }, []);
  return pages;
}

export const getPosts = (location) => {
  const directories = fs
    .readdirSync(location)
    .filter((element) => fs.lstatSync(`${location}/${element}`).isDirectory());
  const articles = [];

  directories.forEach((element) => {
    const contentPath = `${location}/${element}/index.md`;
    if (fs.existsSync(contentPath)) {
      const content = fs.readFileSync(contentPath, { encoding: 'utf-8' });
      const frontmatter = fm(content);
      const { lastUpdated } = frontmatter.attributes;

      articles.push({ slug: element, lastUpdated });
    }
  });
  return articles;
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
    )
    .join('')}
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

const location = path.join(__dirname, BLOG_PATH);
const pages = getPages(location);
const posts = getPosts(location);

fs.writeFileSync(sitemapFile, render(pages, posts));
