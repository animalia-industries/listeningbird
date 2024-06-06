import type { RequestHandler } from './$types';
import { error, json } from '@sveltejs/kit';
import { spotifyClient } from '$lib/server/spotify.server';
import { dynamoDbClient } from '$lib/server/aws.server';
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";
import { searchOnDeezer } from '$lib/server/deezer.server';

export const POST: RequestHandler  = async ({ request }) => {
	const data = await request.json()

	// Get from Spotify
	const spotifyResponse = await spotifyClient[data.type+'s'].get(data.id);
	console.log(spotifyResponse);
	//  Get from Deezer
	const deezerResponse = await searchOnDeezer(spotifyResponse.name, spotifyResponse.type);

	// Create link object
	const link = {
		id: crypto.randomUUID(),
		name: spotifyResponse.name,
		sourceUrl: spotifyResponse.href,
		type: spotifyResponse.type,
		images: spotifyResponse.album?.images ?? spotifyResponse.images,
		// createdAt: new Date(),
	};

	switch (spotifyResponse.type) {
		case 'artist':
			link.spotify = {
				id: spotifyResponse.id,
				url: spotifyResponse.external_urls.spotify
			};
			if (deezerResponse.total > 1) {
				link.deezer = {
					id: deezerResponse.data[0].id,
					url: deezerResponse.data[0].link
				};
			}
			break;
		case 'album':
			link.artists = spotifyResponse.artists,
			link.spotify = {
				id: spotifyResponse.id,
				url: spotifyResponse.external_urls.spotify
			};
			if (deezerResponse.total > 1) {
				link.deezer = {
					id: deezerResponse.data[0].id,
					url: deezerResponse.data[0].link
				};
			}
			break;
		case 'track':
			link.artists = spotifyResponse.artists,
			link.album = spotifyResponse.album.name;
			link.spotify = {
				id: spotifyResponse.id,
				url: spotifyResponse.external_urls.spotify
			};
			if (deezerResponse.total > 1) {
				link.deezer = {
					id: deezerResponse.data[0].id,
					url: deezerResponse.data[0].link
				};
			}
			break;
	}

	// // Save to DynamoDB
	const ddbDocClient = DynamoDBDocumentClient.from(dynamoDbClient);
	await ddbDocClient.send(
	  new PutCommand({
	    TableName: "musiclinks",
	    Item: link,
	  })
	);

	return json({
		status: 200,
		data: {
			id: link.id,
		}
	})
}
