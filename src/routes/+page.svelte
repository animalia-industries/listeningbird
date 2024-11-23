<script>
	import CD from '$lib/components/CD.svelte';
</script>

<div class="flex grow flex-col-reverse justify-between gap-x-2 md:flex-row">
	<div class="md:my-auto">
		<CD
			class="translate-y-1/3 md:w-3/4 md:translate-y-0"
			isWrapped
			artworkURL="/images/logo/OUI-cover.webp"
		/>
	</div>
	<div
		class="z-50 mt-12 flex w-full flex-col items-center justify-center md:my-auto md:items-start md:self-end"
	>
		<div class="flex w-full flex-col">
			<p class="mb-4 text-center font-koulen text-4xl text-white md:text-start">
				Search any song, artist or album
			</p>
			<a href="/search" class="w-full rounded-full bg-neutral-800 px-4 py-2 font-koulen text-white"
				>Create a new page</a
			>
		</div>
	</div>
</div>
