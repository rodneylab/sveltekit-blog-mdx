import meta from '$lib/assets/blog/best-medium-format-camera-for-starting-out/best-medium-format-camera-for-starting-out.jpg?width=672&metadata';
import srcsetwebp from '$lib/assets/blog/best-medium-format-camera-for-starting-out/best-medium-format-camera-for-starting-out.jpg?w=1344;672&webp&srcset';
import srcsetauto from '$lib/assets/blog/best-medium-format-camera-for-starting-out/best-medium-format-camera-for-starting-out.jpg?w=1344;672&jpeg&srcset';
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
    'data:image/jpeg;base64,/9j/2wBDAAwREhMUFBUUFBofGhUaHiIcGhohKC4jJB4hMzg/PTouKC5CRFpMPi5XRTc3VmBRVlpgZmRkQklveXFmeFtlaWf/2wBDAQgMDQwNDw8PDxFgEBIaVmBaYFpgY2NjY2BjYGBiY2NjY2NjY2NjY2NjY2JjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAHAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAIF/8QAFQEBAQAAAAAAAAAAAAAAAAAAAwX/2gAMAwEAAhADEAAAAM+Cev8A/8QAHBABAAEEAwAAAAAAAAAAAAAAAQIAAxMhEZGh/9oACAEBAAE/AM5u2kZDIkS48rMmtnTX/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQIA/9oACAECAQE/AKtkkDf/xAAXEQEAAwAAAAAAAAAAAAAAAAABABEh/9oACAEDAQE/AHKZ/9k=',
  ogImage,
  ogSquareImage,
  twitterImage,
};

export { data as default };
