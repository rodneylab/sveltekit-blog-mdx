import meta from '$lib/assets/blog/best-medium-format-camera-for-starting-out/best-medium-format-camera-for-starting-out.jpg?w=672&as=meta:height;src;width';
import srcsetwebp from '$lib/assets/blog/best-medium-format-camera-for-starting-out/best-medium-format-camera-for-starting-out.jpg?w=1344;672&format=webp&as=srcset';
import srcsetauto from '$lib/assets/blog/best-medium-format-camera-for-starting-out/best-medium-format-camera-for-starting-out.jpg?w=1344;672&format=jpeg&as=srcset';
import ogImage from '$lib/assets/blog/best-medium-format-camera-for-starting-out/best-medium-format-camera-for-starting-out-open-graph.jpg';
import ogSquareImage from '$lib/assets/blog/best-medium-format-camera-for-starting-out/best-medium-format-camera-for-starting-out-open-graph-square.jpg';
import twitterImage from '$lib/assets/blog/best-medium-format-camera-for-starting-out/best-medium-format-camera-for-starting-out-twitter.jpg';

const { height, src, width } = meta;

const data = {
	slug: 'best-medium-format-camera-for-starting-out',
	alt: 'Photograph of a Hasselblad medium format camera with the focusing screen exposed',
	width,
	height,
	src,
	sources: [
		{ srcset: srcsetwebp, type: 'image/webp' },
		{ srcset: srcsetauto, type: 'image/jpeg' },
	],
	dominantColour: '#484848',
	placeholder:
		'data:image/jpeg;base64,/9j/2wBDAAwREhMUFBUUFBofGhUaHiIcGhohKC4jJB4hMzg/PTouKC5CRFpMPi5XRTc3VmBRVlpgZmRkQklveXFmeFtlaWf/2wBDAQgMDQwNDw8PDxFgEBIaVmBaYFpgY2NjY2BjYGBiY2NjY2NjY2NjY2NjY2JjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAHAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAIF/8QAFQEBAQAAAAAAAAAAAAAAAAAAAwX/2gAMAwEAAhADEAAAAM6Scv8A/8QAHBAAAgICAwAAAAAAAAAAAAAAAQIAIQMTEXHR/9oACAEBAAE/AN4vGVVgWDBuL6m4ivDP/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQIA/9oACAECAQE/AKtkkDf/xAAWEQEBAQAAAAAAAAAAAAAAAAABACH/2gAIAQMBAT8AcBv/2Q==',
	ogImage,
	ogSquareImage,
	twitterImage,
};

export { data as default };
