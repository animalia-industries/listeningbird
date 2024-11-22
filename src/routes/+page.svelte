<script>
	import CD from '$lib/components/CD.svelte';
</script>

<div class="grow flex flex-col-reverse justify-between md:flex-row gap-x-2">
	<div class="md:my-auto">
		<CD
			class="translate-y-1/3 md:translate-y-0 md:w-3/4"
			isWrapped
			artworkURL="/images/logo/OUI-cover.webp"
		/>
	</div>
	<div
		class="flex flex-col items-center md:items-start justify-center z-50 w-full md:self-end md:my-auto mt-12"
	>
		<div class="flex flex-col w-full">
			<p class="text-white font-koulen text-4xl text-center md:text-start mb-4">
				Search any song, artist or album
			</p>
			<a href="/search" class="rounded-full font-koulen w-full px-4 py-2 bg-neutral-800 text-white"
				>Create a new page</a
			>
		</div>
	</div>
</div>
