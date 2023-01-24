import readingTime from 'reading-time';

/** @type {import('./$types').PageLoad} */
export async function load({ params, url }) {
	const { slug } = params;
	const { pathname } = url;

	const postPromise = import(`../../content/blog/${slug}/index.md`);
	const imageDataPromise = import(`../../lib/generated/posts/${pathname.slice(1)}.js`);

	const [postResult, imageDataResult] = await Promise.all([postPromise, imageDataPromise]);
	const { default: page, metadata } = postResult;
	const { default: imageData } = imageDataResult;

	if (!page) {
		return {
			status: 404,
		};
	}

	const {
		datePublished,
		featuredImage,
		featuredImageAlt,
		ogImage,
		ogSquareImage,
		postTitle,
		seoMetaDescription,
		twitterImage,
	} = metadata;

	return {
		post: {
			datePublished,
			featuredImage,
			featuredImageAlt,
			ogImage,
			ogSquareImage,
			postTitle,
			seoMetaDescription,
			timeToRead: Math.ceil(readingTime(page).minutes),
			twitterImage,
			slug,
		},
		slug,
		imageData,
		page,
	};
}
