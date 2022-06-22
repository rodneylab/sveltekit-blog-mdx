/** @type {import('./index').RequestHandler} */
export async function get() {
  const mdModules = await import.meta.glob('../content/blog/**/index.md');
  const posts = await Promise.all(
    Object.keys(mdModules).map(async (path) => {
      mdModules[path]();
      const slug = path.split('/').at(-2);
      const { datePublished, lastUpdated, postTitle, seoMetaDescription } = (
        await mdModules[path]()
      ).metadata;
      return { datePublished, lastUpdated, postTitle, seoMetaDescription, slug };
    }),
  );

  return { body: { ...{ posts } } };
}
