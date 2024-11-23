import type { RequestHandler } from './$types';
import { error, json } from '@sveltejs/kit';
import { db } from "$lib/server/db.server";
import { spotifyClient } from '$lib/server/spotify.server';
import { searchOnDeezer } from '$lib/server/deezer.server';

export const POST: RequestHandler = async ({ request }) => {
	const data = await request.json();

	// Get from Spotify
	const spotifyResponse = await spotifyClient[data.type + 's'].get(data.id);

	//  Get from Deezer
	const deezerResponse = await searchOnDeezer(spotifyResponse.name, spotifyResponse.type);

	// Save to DynamoDB
	const link = await db.links.create({ data: {
		name: spotifyResponse.name,
		sourceUrl: spotifyResponse.href,
		type: spotifyResponse.type,
		images: JSON.stringify(spotifyResponse.album?.images ?? spotifyResponse.images),
		spotify: JSON.stringify({
			id: spotifyResponse.id,
			url: spotifyResponse.external_urls.spotify
		}),
		deezer: JSON.stringify({
			id: deezerResponse.data[0].id,
			url: deezerResponse.data[0].link
		}),
	}});

	return json({
		status: 200,
		data: {
			id: link.id
		}
	});
};
