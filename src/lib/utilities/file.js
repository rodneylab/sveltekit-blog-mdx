import { promises as fsp } from 'fs';

export async function makeDirectory(directoryPath) {
	await fsp.mkdir(directoryPath, { recursive: true }, (err) => {
		if (err) {
			return console.error(err);
		}
	});
}
