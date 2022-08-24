import meta from '$lib/assets/blog/twin-lens-reflex-camera/twin-lens-reflex-camera.jpg?width=672&metadata';
import srcsetwebp from '$lib/assets/blog/twin-lens-reflex-camera/twin-lens-reflex-camera.jpg?w=1344;672&webp&srcset';
import srcsetauto from '$lib/assets/blog/twin-lens-reflex-camera/twin-lens-reflex-camera.jpg?w=1344;672&jpeg&srcset';
import ogImage from '$lib/assets/blog/twin-lens-reflex-camera/twin-lens-reflex-camera-open-graph.jpg';
import ogSquareImage from '$lib/assets/blog/twin-lens-reflex-camera/twin-lens-reflex-camera-open-graph-square.jpg';
import twitterImage from '$lib/assets/blog/twin-lens-reflex-camera/twin-lens-reflex-camera-twitter.jpg';

const { height, src, width } = meta;

const data = {
	slug: 'twin-lens-reflex-camera',
	alt: 'Photograph of a Rolleicord twin Lens reflex camera',
	width,
	height,
	src,
	sources: [
		{ srcset: srcsetwebp, type: 'image/webp' },
		{ srcset: srcsetauto, type: 'image/jpeg' },
	],
	dominantColour: '#382828',
	placeholder:
		'data:image/jpeg;base64,/9j/2wBDAAwREhMUFBUUFBofGhUaHiIcGhohKC4jJB4hMzg/PTouKC5CRFpMPi5XRTc3VmBRVlpgZmRkQklveXFmeFtlaWf/2wBDAQgMDQwNDw8PDxFgEBIaVmBaYFpgY2NjY2BjYGBiY2NjY2NjY2NjY2NjY2JjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAHAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAMG/8QAFQEBAQAAAAAAAAAAAAAAAAAAAwT/2gAMAwEAAhADEAAAAMtYCr//xAAbEAABBQEBAAAAAAAAAAAAAAABAAIDESFBcf/aAAgBAQABPwCN0eiuZ6i42V//xAAVEQEBAAAAAAAAAAAAAAAAAAABAP/aAAgBAgEBPwBUv//EABYRAQEBAAAAAAAAAAAAAAAAAAEAAv/aAAgBAwEBPwAyN//Z',
	ogImage,
	ogSquareImage,
	twitterImage,
};

export { data as default };
