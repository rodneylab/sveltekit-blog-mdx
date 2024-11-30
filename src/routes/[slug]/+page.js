/** @type {import('./$types').PageLoad} */
export async function load({ data }) {
	const { imageData } = data;

	return {
		...data,
		imageData: JSON.parse(imageData),
	};
}
