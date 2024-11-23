import type { RequestHandler } from './$types';
import { error, json } from '@sveltejs/kit';
import { db } from "$lib/server/db.server";
import { spotifyClient } from '$lib/server/spotify.server';
import { searchOnDeezer } from '$lib/server/deezer.server';

export const POST: RequestHandler = async ({ request }) => {
	const data = await request.json();

	// Search on platforms
	const spotifyResponse = await spotifyClient[data.type + 's'].get(data.id);
	const deezerResponse = await searchOnDeezer(spotifyResponse.name, spotifyResponse.type);

	const existingLink = await db.links.findFirst({
		where: {
			type: { equals: spotifyResponse.type },
			spotify: { contains: spotifyResponse.id }
		}
	})

	let link = undefined;
	if (!existingLink) {
		link = await db.links.create({
			data: {
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
			}
		});
	}



	return json({
		status: 200,
		data: {
			id: existingLink?.id ?? link.id
		}
	});
};
