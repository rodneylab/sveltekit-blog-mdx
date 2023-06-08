import fm from 'front-matter';
import fs from 'fs';
import path from 'path';
import { BLOG_PATH } from './src/lib/utilities/blog.js';
import { makeDirectory } from './src/lib/utilities/file.js';
import { dominantColour, lowResolutionPlaceholder, metadata } from './src/lib/utilities/image.js';

const __dirname = path.resolve();
const formats = ['webp', 'auto'];
const sizes = [672];
const densities = [1.0, 2.0];
const maxWidth = sizes[sizes.length - 1];

// use sizes and densities arrays to determine the actual output widths needed
const outputSizes = [];
sizes.forEach((sizesElement) => {
	densities.forEach((densitiesElement) => outputSizes.push(densitiesElement * sizesElement));
});
outputSizes.sort((a, b) => b - a);

async function generateImageMeta(source) {
	const metaPromises = [
		metadata({ source }),
		dominantColour({ source }),
		lowResolutionPlaceholder({ source }),
	];
	const [metadataResult, dominantColourObject, placeholder] = await Promise.all(metaPromises);
	const { format, width, height } = metadataResult;
	const { r, g, b } = dominantColourObject;
	const dominantColourValue = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
	return { dominantColour: dominantColourValue, placeholder, format, width, height };
}

function getPosts(location) {
	const directories = fs
		.readdirSync(location)
		.filter((element) => fs.lstatSync(`${location}/${element}`).isDirectory());
	const articles = [];

	directories.forEach((element) => {
		const contentPath = `${location}/${element}/index.md`;
		if (fs.existsSync(contentPath)) {
			const content = fs.readFileSync(contentPath, { encoding: 'utf-8' });
			const frontmatter = fm(content);
			const { featuredImage, featuredImageAlt, ogImage, ogSquareImage, twitterImage } =
				frontmatter.attributes;
			articles.push({
				slug: element,
				featuredImage,
				featuredImageAlt,
				ogImage,
				ogSquareImage,
				twitterImage,
			});
		}
	});
	return articles;
}

const main = async () => {
	try {
		const location = path.join(__dirname, BLOG_PATH);
		const posts = getPosts(location);

		const imageMetaPromises = posts.map(async (element) => {
			const { featuredImage, slug } = element;
			const source = path.join(__dirname, 'src/lib/assets/blog/', slug, featuredImage);
			return generateImageMeta(source);
		});
		const imageMetadata = await Promise.all(imageMetaPromises);

		console.log(`Generating image metadata for posts`);
		const postDataDir = path.join(__dirname, 'src/lib/generated/posts');
		await makeDirectory(postDataDir);

		posts.forEach((element, index) => {
			const { featuredImage, featuredImageAlt, ogImage, ogSquareImage, slug, twitterImage } =
				element;
			const postPath = path.join(postDataDir, `${slug}.js`);
			const { dominantColour, format, placeholder, width } = imageMetadata[index];
			const source = `$lib/assets/blog/${slug}/${featuredImage}`;
			const ogImageSource = `$lib/assets/blog/${slug}/${ogImage}`;
			const ogSquareImageSource = `$lib/assets/blog/${slug}/${ogSquareImage}`;
			const twitterImageSource = `$lib/assets/blog/${slug}/${twitterImage}`;
			const srcsetImportArray = formats.map(
				(formatsElement) =>
					`import srcset${formatsElement} from '${source}?w=${
						width < outputSizes[0] ? `${width};` : ''
					}${outputSizes
						.filter((outputSizesElement) => outputSizesElement <= width)
						.join(';')}&format=${formatsElement === 'auto' ? format : formatsElement}&as=srcset';`,
			);
			const sources = `[\n${formats
				.map(
					(formatsElement) =>
						`    { srcset: ${`srcset${formatsElement}`}, type: ${
							formatsElement === 'auto' ? `'image/${format}'` : `'image/${formatsElement}'`
						} },`,
				)
				.join('\n')}\n  ]`;
			const result = `import meta from '${source}?w=${Math.min(
				maxWidth,
				width,
			)}&as=meta:height;src;width';
${srcsetImportArray.join('\n')}
import ogImage from '${ogImageSource}';
import ogSquareImage from '${ogSquareImageSource}';
import twitterImage from '${twitterImageSource}';

const { height, src, width } = meta;

const data = {
  slug: '${slug}',
  alt: '${featuredImageAlt.replace(/'/g, "\\'")}',
  width,
  height,
  src,
  sources: ${sources},
  dominantColour: '${dominantColour}',
  placeholder:
    '${placeholder}',
  ogImage,
  ogSquareImage,
  twitterImage,
};

export { data as default };
`;
			fs.writeFileSync(postPath, result, 'utf-8');
		});
	} catch (error) {
		console.log(`Error generating blog post responsive image data: ${error}`);
	}
};

main();
