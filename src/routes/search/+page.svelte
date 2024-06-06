<script>
    import CD from "$lib/components/CD.svelte";
</script>

<!-- This will be the search page -->



<div class="grow flex flex-col z-50 w-full  mt-12">
    <div class="flex flex-col w-full mb-4">
        <p class="text-white font-koulen text-4xl text-center md:text-start mb-4">Search any song, artist or album</p>
        <input type="text" class="rounded-full font-koulen w-full px-4 py-2 bg-neutral-800 text-white" placeholder="Search for an album" />
    </div>

    <div class="divide-y-2 divide-neutral-800 rounded-md overflow-hidden">

        <a href="#" class="flex items-center justify-between bg-neutral-800/50 px-4 py-2 gap-x-4">
            <CD isWrapped class="w-16 animate-pulse" artworkURL="/images/default.png" />
            <div class="flex grow flex-col gap-y-1 animate-pulse">
                <span class="leading-none font-koulen text-xl text-white">Loading</span>
            </div>
        </a>

        <!-- Artist -->
        <a href="/billie-eilish" class="flex items-center justify-between bg-neutral-800/50 px-4 py-2 gap-x-4">
            <CD class="w-16" artworkURL="https://numero.twic.pics/2024-04/billie-eilish-pochette-album-hit-me-hard-and-soft-jpg.jpg?twic=v1/quality=83/truecolor=true/output=jpeg" />
            <div class="flex grow flex-col gap-y-1">
                <span class="leading-none font-koulen text-xl text-white">Billie Eilish</span>
            </div>
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.5 20.2344L15.7188 12.5L8.5 4.76562L9.53125 3.73438L17.7812 12.5L9.53125 21.2656L8.5 20.2344Z" fill="white"/>
            </svg>
        </a>
        <!-- Music -->
        <a href="/billie-eilish" class="flex items-center justify-between bg-neutral-800/50 px-4 py-2 gap-x-4">
            <CD class="w-16" artworkURL="https://numero.twic.pics/2024-04/billie-eilish-pochette-album-hit-me-hard-and-soft-jpg.jpg?twic=v1/quality=83/truecolor=true/output=jpeg" />
            <div class="flex grow flex-col gap-y-1">
                <span class="leading-none font-koulen text-xl text-white">Chihiro</span>
                <span class="leading-none font-koulen text-lg text-neutral-500">Billie Eilish</span>
            </div>
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.5 20.2344L15.7188 12.5L8.5 4.76562L9.53125 3.73438L17.7812 12.5L9.53125 21.2656L8.5 20.2344Z" fill="white"/>
            </svg>
        </a>

        <!-- album -->
        <a href="/billie-eilish/hit-me-hard-and-soft" class="flex items-center justify-between bg-neutral-800/50 px-4 py-2 gap-x-4">
            <CD class="w-16" isWrapped artworkURL="https://numero.twic.pics/2024-04/billie-eilish-pochette-album-hit-me-hard-and-soft-jpg.jpg?twic=v1/quality=83/truecolor=true/output=jpeg" />
            <div class="flex grow flex-col gap-y-1">
                <span class="leading-none font-koulen text-xl text-white">Hit me hard and soft</span>
                <span class="leading-none font-koulen text-lg text-neutral-500">Billie Eilish</span>
            </div>
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.5 20.2344L15.7188 12.5L8.5 4.76562L9.53125 3.73438L17.7812 12.5L9.53125 21.2656L8.5 20.2344Z" fill="white"/>
            </svg>
        </a>

    </div>
</div>