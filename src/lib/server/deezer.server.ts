import { env } from '$env/dynamic/private';

const query = 'Harder Faster Stronger';
const search_type = 'track';

export const searchOnDeezer = async (query: string, type: "track" | "artist" | "album") => {
	let response = await fetch(`https://api.deezer.com/search/${type}?q=${query}`);
	response = await response.json();
	return response;
}
