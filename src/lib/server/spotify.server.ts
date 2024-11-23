import { env } from '$env/dynamic/private';
import { SpotifyApi } from '@spotify/web-api-ts-sdk';

export const spotifyClient = SpotifyApi.withClientCredentials(
	env.SPOTIFY_CLIENT_ID as string,
	env.SPOTIFY_CLIENT_SECRET as string
);
