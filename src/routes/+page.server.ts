import { redirect } from '@sveltejs/kit';
import type { Actions } from '@sveltejs/kit';
import { db } from '$lib/server/db.server';
import { spotifyClient } from '$lib/server/spotify.server';
import { searchOnDeezer } from '$lib/server/deezer.server';
import type { Album, Artist, SimplifiedAlbum, Track } from '@spotify/web-api-ts-sdk';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		// Search on platforms
		const id: string = data.get('id') as string;
		type spotifyType = 'albums' | 'tracks' | 'artists';
		const type: spotifyType = (data.get('type') + 's') as spotifyType;
		const spotifyResponse: Artist | Album | Track = await spotifyClient[type].get(id);
		const deezerResponse = await searchOnDeezer(
			spotifyResponse.name,
			spotifyResponse.type as 'artist' | 'album' | 'artist'
		);

		const existingLink = await db.links.findFirst({
			where: {
				type: { equals: spotifyResponse.type },
				spotify: { contains: spotifyResponse.id }
			}
		});

		let link = undefined;
		if (!existingLink) {
			link = await db.links.create({
				data: {
					name: spotifyResponse.name,
					sourceUrl: spotifyResponse.href,
					type: spotifyResponse.type,
					images: JSON.stringify(
						((spotifyResponse as Track).album as SimplifiedAlbum)?.images ??
							(spotifyResponse as Artist | Album).images
					),
					spotify: JSON.stringify({
						id: spotifyResponse.id,
						url: spotifyResponse.external_urls.spotify
					}),
					deezer: JSON.stringify({
						id: deezerResponse[0].id,
						url: deezerResponse[0].link
					})
				}
			});
		}

		redirect(302, '/' + (existingLink?.id ?? link?.id));
	}
} satisfies Actions;
