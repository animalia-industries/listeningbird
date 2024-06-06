<script>
    import CD from "$lib/components/CD.svelte";
</script>

<!-- This will be the search page -->


<div class="grow flex flex-col-reverse justify-between md:flex-row gap-x-2">
    <div class="md:my-auto">
        <CD class="translate-y-1/3 md:translate-y-0 md:w-3/4" isWrapped artworkURL="https://store.twentyonepilots.com/cdn/shop/files/TOP_CL5_Cover_mailer_1.jpg?v=1709152879"  />
    </div>
    <div class="flex flex-col items-center md:items-start justify-center z-50 w-full md:self-end md:my-auto mt-12">
        <div class="flex flex-col w-full">
            <p class="text-white font-koulen text-4xl text-center md:text-start mb-4">Search any song, artist or album</p>
            <a href="/search" class="rounded-full font-koulen w-full px-4 py-2 bg-neutral-800 text-white">Search for an album</a>
        </div>
    </div>
</div>