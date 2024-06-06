<script>
    import CD from "$lib/components/CD.svelte";
</script>

<!-- This will be the search page -->


<div class="grow flex flex-col-reverse md:flex-row gap-x-2">
    <div class="my-auto">
        <CD class="w-3/4" isWrapped artworkURL="https://store.twentyonepilots.com/cdn/shop/files/TOP_CL5_Cover_mailer_1.jpg?v=1709152879"  />
    </div>
    <div class="flex flex-col items-center md:items-start justify-center z-50 w-full md:self-end md:my-auto">
        <div class="flex flex-col w-full">
            <h1 class="text-white font-koulen text-4xl">OUI</h1>
            <p class="text-xl font-koulen text-white mb-4">Search any song, artist or album</p>
            <input type="text" class="font-koulen w-full p-2 bg-neutral-800 text-white" placeholder="Search for an album" />
        </div>
    </div>
</div>