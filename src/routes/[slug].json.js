import path from 'path';
import { getPost, getPostsContent } from '$lib/utilities/blog';

export async function get({ params }) {
  const { slug } = params;
  const __dirname = path.resolve();
  const location = path.join(__dirname, './src/routes/');
  const articles = await getPostsContent(location);
  const article = articles.find((element) => element.slug === slug);
  const post = await getPost(article.content, true);

  if (post) {
    return { body: JSON.stringify({ post: { ...post, slug } }) };
  }
}
