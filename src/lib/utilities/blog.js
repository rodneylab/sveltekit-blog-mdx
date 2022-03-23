import { compile } from 'mdsvex';
import fs from 'node:fs';
import { join, resolve } from 'node:path';
export const BLOG_PATH = 'src/content/blog';

const __dirname = resolve();
const location = join(__dirname, BLOG_PATH);

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

// /**
//  * Returns array of objects containing the slug and post Markdown content
//  * @returns {Promise<{slug: string; content: string;}[]>}
//  */
// export async function getPostsContent() {
//   try {
//     const postFiles = await import.meta.glob('../../content/blog/**/index.md');
//     const postPromises = Object.keys(postFiles).map(async (element) => {
//       const lastIndex = element.lastIndexOf('/index.md');
//       const firstIndex = element.lastIndexOf('/', lastIndex - 1) + 1;
//       const slug = element.slice(firstIndex, lastIndex);
//       const content = (await import(`${element}?raw`)).default;
//       return { slug, content: content };
//     });

//     return Promise.all(postPromises);
//   } catch (error) {
//     console.error(`Error importing blog posts in getPostsContent: ${error}`);
//   }
// }

/**
 * Returns array of objects containing the slug and post Markdown content
 * @returns {{slug: string; content: string;}[]}
 */
export function getPostsContent() {
  const directories = fs
    .readdirSync(location)
    .filter((element) => fs.lstatSync(`${location}/${element}`).isDirectory());
  const articles = [];
  directories.forEach((element) => {
    const contentPath = `${location}/${element}/index.md`;
    if (fs.existsSync(contentPath)) {
      const content = fs.readFileSync(contentPath, { encoding: 'utf-8' });
      articles.push({ slug: element, content });
    }
  });
  return articles;
}

/**
 * Returns an array of post metadata, with optional post body too.  Array is sort in reverse
 * chrononological order
 * @param {{slug: string; content: string;}[]} postsContent -
 * @param {boolean} body - if true the HTML post body is returned as well as meta
 */
export const getPosts = async (postsContent, body = false) => {
  const postPromises = postsContent.map(async (element) => {
    const { content, slug } = element;
    const transformedContent = await compile(content);
    const { datePublished, lastUpdated, postTitle, seoMetaDescription } =
      /** @type {{datePublished: string; lastUpdated: string; postTitle: string; seoMetaDescription: string;}} */ (
        transformedContent.data.fm
      );
    let resultElement = { datePublished, lastUpdated, postTitle, seoMetaDescription, slug };
    if (body) {
      resultElement = { ...resultElement, body: transformedContent.code };
    }
    return resultElement;
  });
  const result = await Promise.all(postPromises);
  return result.sort((a, b) => Date.parse(b.datePublished) - Date.parse(a.datePublished));
};

/**
 * Returns post meta together with compiled body
 * @param {string} content
 * @param {boolean} body
 * @returns
 */
export const getPost = async (content, body = true) => {
  const transformedContent = await compile(content);
  const {
    datePublished,
    featuredImage,
    featuredImageAlt,
    ogImage,
    ogSquareImage,
    postTitle,
    seoMetaDescription,
    twitterImage,
  } = /** @type {{datePublished: string; featuredImage: string; featuredImageAlt: string; lastUpdated: string; ogImage: string; ogSquareImage: string; postTitle: string; seoMetaDescription: string; twitterImage: string}} */ (
    transformedContent.data.fm
  );
  let result = {
    datePublished,
    featuredImage,
    featuredImageAlt,
    ogImage,
    ogSquareImage,
    postTitle,
    seoMetaDescription,
    twitterImage,
  };
  if (body) {
    result = { ...result, body: transformedContent.code };
  }
  return result;
};
