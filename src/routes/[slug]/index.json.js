import { getPost, getPostsContent } from '$lib/utilities/blog';

/** @type {import('./index.json').RequestHandler} */
export async function get({ params }) {
  const { slug } = params;
  const articles = getPostsContent();
  const article = articles.find((element) => element.slug === slug);
  const post = await getPost(article.content, true);
  if (post) {
    return {
      body: JSON.stringify({ post: { ...post, slug } }),
    };
  }
  return {
    status: 404,
  };
}
