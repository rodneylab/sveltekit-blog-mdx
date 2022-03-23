import { getPosts, getPostsContent } from '$lib/utilities/blog';

/** @type {import('./index').RequestHandler} */
export async function get() {
  const postsContent = getPostsContent();
  const posts = await getPosts(postsContent, false);
  return { body: { ...{ posts } } };
}
