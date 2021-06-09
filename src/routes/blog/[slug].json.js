import path from 'path';

import { getPost, getPostsContent } from '$lib/utilities/blog';

export async function get({ params }) {
	const { slug } = params;
	const __dirname = path.resolve();
	const location = path.join(__dirname, 'src/content/blog');
	const articles = await getPostsContent(location);
	let article = articles.find((element) => element.slug === slug);

	return { body: JSON.stringify({ post: await getPost(article.content, true) }) };
}
