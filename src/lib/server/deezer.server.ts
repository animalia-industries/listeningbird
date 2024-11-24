export type DeezerResponse = {
	data: DeezerTrack[] | DeezerAlbum[] | DeezerArtist[];
	total: number;
	prev: undefined | URL;
	next: undefined | URL;
};

export interface DeezerTrack {
	id: number;
	readable: boolean;
	title: string;
	title_short: string;
	link: URL;
	duration: number;
	rank: number;
	explicit_lyrics: true;
	explicit_content_lyrics: number;
	explicit_content_cover: number;
	preview: URL;
	md5_preview: string;
	artist: DeezerArtist;
	album: DeezerAlbumBase;
	type: 'track';
}

export interface DeezerAlbumBase {
	id: number;
	title: string;
	link: URL;
	cover: URL;
	cover_small: URL;
	cover_medium: URL;
	cover_big: URL;
	cover_xl: URL;
	md5_images: string;
	tracklist: URL;
	type: 'album';
}

export interface DeezerAlbum extends DeezerAlbumBase {
	genre_id: number;
	nb_tracks: number;
	record_type: 'album' | 'ep' | 'single';
	explicit_lyrics: boolean;
	artist: DeezerArtist;
}

export interface DeezerArtistBase {
	id: number;
	name: string;
	link: URL;
	picture: URL;
	picture_small: URL;
	picture_medium: URL;
	picture_big: URL;
	picture_xl: URL;
	tracklist: URL;
	type: 'artist';
}

export interface DeezerArtist extends DeezerArtistBase {
	nb_album: number;
	nb_fan: number;
	radio: boolean;
}

export const searchOnDeezer = async (query: string, type: 'track' | 'artist' | 'album') => {
	const response = await fetch(`https://api.deezer.com/search/${type}?q=${query}`);
	const data: DeezerResponse = await response.json();
	return data.data;
};
