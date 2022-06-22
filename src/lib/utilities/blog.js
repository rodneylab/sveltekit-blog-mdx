import { compile } from 'mdsvex';
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
