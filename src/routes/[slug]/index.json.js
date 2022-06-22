/** @type {import('./index.json').RequestHandler} */
export async function get({ params }) {
  const { slug } = params;

  const { default: body, metadata } = await import(`../../content/blog/${slug}/index.md`);

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

  if (!body) {
    return {
      status: 404,
    };
  }

  return {
    body: JSON.stringify({
      post: {
        datePublished,
        featuredImage,
        featuredImageAlt,
        ogImage,
        ogSquareImage,
        postTitle,
        seoMetaDescription,
        twitterImage,
        slug,
        body,
      },
    }),
  };
}
