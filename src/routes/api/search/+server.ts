import { error, json } from '@sveltejs/kit';
import { spotifyClient } from '$lib/server/spotify.server';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
	const query = url.searchParams.get('query');

	if (query == null) {
		const response = {
			status: 406,
			message: 'Not query provided'
		};

		return json(response);
	}

	const data = await spotifyClient.search(query, ["album", "artist", "track"], undefined, 10);

	const response = {
		status: 200,
		data: {
			albums: data.albums.items.map((album) => { return { id: album.id, name: album.name, type: album.album_type, artists: album.artists.map((artist) => artist.name), sourceUrl: album.href, totalTracks: album.total_tracks, releaseDate: album.release_date, images: album.images } }),
			artists: data.artists.items.map((artist) => { return { id: artist.id, name: artist.name, type: artist.type, genres: artist.genres, sourceUrl: artist.href, images: artist.images } }),
			tracks: data.tracks.items.map((track) => { return { id: track.id, name: track.name, type: track.type, artists: track.artists.map((artist) => artist.name), album: track.album.name, images: track.album.images, sourceUrl: track.href, explicit: track.explicit } })
		},
	};

	return json(response);
}
