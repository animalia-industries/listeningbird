<script lang="ts">
	import CD from '$lib/components/CD.svelte';

	let loading: boolean;

	let searchResults: any = [];

	let typeInputValue: string;
	let idInputValue: string;

	$: searchQuery = '';

	const searchAPI = async (query: string) => {
		searchResults = [];
		if (query.length < 3) return;
		try {
			loading = true;
			const response = (await fetch(`/api/search?query=${query}`)).json();
			searchResults = await response;
		} catch (error) {
			console.error(error);
		} finally {
			loading = false;
		}
	};
</script>

<form class="z-50" action="" method="POST">
	<input type="hidden" name="type" value={typeInputValue} />
	<input type="hidden" name="id" value={idInputValue} />

	<div class="mt-12 flex w-full grow flex-col">
		<div class="mb-4 flex w-full flex-col">
			<p class="mb-4 text-center font-koulen text-4xl text-white md:text-start">
				Search any song, artist or album
			</p>
			<input
				bind:value={searchQuery}
				on:input={(e) => searchAPI(searchQuery)}
				type="text"
				class="w-full rounded-full bg-neutral-800 px-4 py-2 font-koulen text-white"
				placeholder="Search for an album, artist or track"
			/>
		</div>

		{#if loading}
			<p class="ml-2 font-koulen text-xl text-white">Tracks</p>
			<div class="mb-3 divide-y-2 divide-neutral-800 overflow-hidden rounded-md">
				{#each Array(3) as _}
					<div class="flex items-center justify-between gap-x-4 bg-neutral-800/50 px-4 py-2">
						<CD isWrapped class="w-16 min-w-16 animate-pulse" artworkURL="/images/default.png" />
						<div class="flex grow animate-pulse flex-col gap-y-1">
							<span class="font-koulen text-xl leading-none text-white">Loading</span>
						</div>
					</div>
				{/each}
			</div>
		{/if}
		{#if searchResults.data?.tracks}
			<p class="ml-2 font-koulen text-xl text-white">Tracks</p>
			<div class="mb-3 divide-y-2 divide-neutral-800 overflow-hidden rounded-md">
				{#each searchResults.data?.tracks as track}
					<button
						type="submit"
						class="flex w-full items-center justify-between gap-x-4 bg-neutral-800/50 px-4 py-2"
						on:click={() => {
							typeInputValue = track?.type;
							idInputValue = track?.id;
						}}
					>
						<CD class="w-16 min-w-16" artworkURL={track?.images[0]?.url} />
						<div class="flex grow flex-col gap-y-1 text-start">
							<span class="line-clamp-1 font-koulen text-xl leading-none text-white"
								>{track?.name}</span
							>
							<span class="line-clamp-1 font-koulen text-lg leading-none text-neutral-500"
								>{track?.album} - {track?.artists.join(', ')}</span
							>
						</div>
						{#if track?.explicit}
							<span class="rounded-full bg-red-500 px-2 py-1 text-xs text-white">Explicit</span>
						{/if}
						<svg
							width="25"
							height="25"
							viewBox="0 0 25 25"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M8.5 20.2344L15.7188 12.5L8.5 4.76562L9.53125 3.73438L17.7812 12.5L9.53125 21.2656L8.5 20.2344Z"
								fill="white"
							/>
						</svg>
					</button>
				{/each}
			</div>
		{/if}

		{#if loading}
			<p class="ml-2 font-koulen text-xl text-white">Albums</p>
			<div class="mb-3 divide-y-2 divide-neutral-800 overflow-hidden rounded-md">
				{#each Array(3) as _}
					<div class="flex items-center justify-between gap-x-4 bg-neutral-800/50 px-4 py-2">
						<CD isWrapped class="w-16 min-w-16 animate-pulse" artworkURL="/images/default.png" />
						<div class="flex grow animate-pulse flex-col gap-y-1">
							<span class="font-koulen text-xl leading-none text-white">Loading</span>
						</div>
					</div>
				{/each}
			</div>
		{/if}

		{#if searchResults.data?.albums}
			<!-- Artist -->
			<p class="ml-2 font-koulen text-xl text-white">Albums</p>
			<div class="mb-3 divide-y-2 divide-neutral-800 overflow-hidden rounded-md">
				{#each searchResults.data?.albums as album}
					{#if album.type === 'album'}
						<button
							type="submit"
							class="flex w-full items-center justify-between gap-x-4 bg-neutral-800/50 px-4 py-2"
							on:click={() => {
								typeInputValue = album?.type;
								idInputValue = album?.id;
							}}
						>
							<CD class="w-16 min-w-16" isWrapped artworkURL={album?.images[0].url} />
							<div class="flex grow flex-col gap-y-1 text-start">
								<span class="line-clamp-1 font-koulen text-xl leading-none text-white"
									>{album?.name}</span
								>
								<span class="line-clamp-1 font-koulen text-lg leading-none text-neutral-500"
									>{album?.artists.join(', ')}</span
								>
							</div>
							<svg
								width="25"
								height="25"
								viewBox="0 0 25 25"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M8.5 20.2344L15.7188 12.5L8.5 4.76562L9.53125 3.73438L17.7812 12.5L9.53125 21.2656L8.5 20.2344Z"
									fill="white"
								/>
							</svg>
						</button>
					{/if}
				{/each}
			</div>
		{/if}

		{#if loading}
			<p class="ml-2 font-koulen text-xl text-white">Artists</p>
			<div class="mb-3 divide-y-2 divide-neutral-800 overflow-hidden rounded-md">
				{#each Array(3) as _}
					<div class="flex items-center justify-between gap-x-4 bg-neutral-800/50 px-4 py-2">
						<CD isWrapped class="w-16 min-w-16 animate-pulse" artworkURL="/images/default.png" />
						<div class="flex grow animate-pulse flex-col gap-y-1">
							<span class="font-koulen text-xl leading-none text-white">Loading</span>
						</div>
					</div>
				{/each}
			</div>
		{/if}
		{#if searchResults.data?.artists}
			<p class="ml-2 font-koulen text-xl text-white">Artists</p>

			<div class="mb-3 divide-y-2 divide-neutral-800 overflow-hidden rounded-md">
				{#each searchResults.data?.artists as artist}
					<button
						type="submit"
						class="flex w-full items-center justify-between gap-x-4 bg-neutral-800/50 px-4 py-2"
						on:click={() => {
							typeInputValue = artist?.type;
							idInputValue = artist?.id;
						}}
					>
						<CD class="w-16 min-w-16" artworkURL={artist?.images[0]?.url} />
						<div class="flex grow flex-col gap-y-1">
							<span class="line-clamp-1 text-start font-koulen text-xl leading-none text-white"
								>{artist?.name}</span
							>
						</div>
						<svg
							width="25"
							height="25"
							viewBox="0 0 25 25"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M8.5 20.2344L15.7188 12.5L8.5 4.76562L9.53125 3.73438L17.7812 12.5L9.53125 21.2656L8.5 20.2344Z"
								fill="white"
							/>
						</svg>
					</button>
				{/each}
			</div>
		{/if}
	</div>
</form>
