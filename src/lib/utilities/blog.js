import fs from 'fs';
import { compile } from 'mdsvex';

export const BLOG_PATH = 'src/content/blog';

export const getPostsContent = (location) => {
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
};

/**
 * Returns an array of post metadata, with optional post body too.  Array is sort in reverse
 * chrononological order
 * @param {string} postsContent - The title of the book.
 * @param {bool} body - if true the HTML post body is returned as well as meta
 */
export const getPosts = async (postsContent, body = false) => {
  let result = postsContent.map(async (element) => {
    const { content, slug } = element;
    const transformedContent = await compile(content);
    const { datePublished, lastUpdated, postTitle, seoMetaDescription } =
      transformedContent.data.fm;
    let resultElement = { datePublished, lastUpdated, postTitle, seoMetaDescription, slug };
    if (body) {
      resultElement = { ...resultElement, body: transformedContent.code };
    }
    return resultElement;
  });
  result = await Promise.all(result);
  return result.sort((a, b) => Date.parse(b.datePublished) - Date.parse(a.datePublished));
};

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
  } = transformedContent.data.fm;
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
