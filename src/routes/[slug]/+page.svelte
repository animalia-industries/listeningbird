<script lang="ts">

import CD from "$lib/components/CD.svelte";
</script>
    <!-- This will be the single page -->

<div class="grow flex mt-12 md:self-end items-start justify-center md:w-1/2">
    <div class="absolute
        bottom-8
        -left-1/4 -right-1/4

        md:top-1/4
        translate-y-2/3
        md:translate-y-0
    ">
        <CD  class="md:w-5/12" artworkURL="https://store.twentyonepilots.com/cdn/shop/files/TOP_CL5_Cover_mailer_1.jpg?v=1709152879" />
    </div>
    <!-- https://store.twentyonepilots.com/cdn/shop/files/TOP_CL5_Cover_mailer_1.jpg?v=1709152879 -->

    <div class="flex flex-col gap-y-2 font-koulen mb-4 z-50 w-full">
        <h1 class="text-4xl md:text-6xl text-white">everybody loves everybody ep</h1>
        <h2 class="text-2xl md:text-4xl text-white mb-4 border-b pb-3">Twenty One Pilots</h2>
        <div class="flex flex-col gap-y-2">
            <!-- music links -->
            <div class="space-y-3">

                <a href="#" class="flex justify-between items-center bg-white rounded-full px-4 py-2 font-bold gap-x-4 hover:scale-105 transition-all">
                    <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg" class="transition-colors">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 16.5C0 12.2565 1.68571 8.18687 4.68629 5.18629C7.68687 2.18571 11.7565 0.5 16 0.5C20.2435 0.5 24.3131 2.18571 27.3137 5.18629C30.3143 8.18687 32 12.2565 32 16.5C32 20.7435 30.3143 24.8131 27.3137 27.8137C24.3131 30.8143 20.2435 32.5 16 32.5C11.7565 32.5 7.68687 30.8143 4.68629 27.8137C1.68571 24.8131 0 20.7435 0 16.5ZM21.6 23.54C22.56 24.34 24 22.58 22.56 21.62C18.0387 19.2231 12.7707 18.6505 7.84 20.02C6.72 20.18 6.88 22.1 8 22.1C12.8 21.3 16.96 20.66 21.6 23.54ZM23.2 19.54C17.6 16.5 13.6 16.5 7.68 17.78C6.08 17.78 6.08 15.7 7.36 15.22C10.2095 14.4183 13.1897 14.1894 16.1282 14.5464C19.0667 14.9034 21.9054 15.8393 24.48 17.3C25.6 18.1 24.96 20.18 23.2 19.54ZM24.96 14.74C26.56 15.86 28.16 13.14 26.56 12.18C20.3739 8.86613 13.1324 8.119 6.4 10.1C4.8 10.74 5.6 13.3 6.88 13.14C13.44 11.54 19.68 11.54 24.96 14.74Z" fill="currentColor"/>
                    </svg>
                    <span class="text-xl grow">SPOTIFY</span>
                    <!-- carret left -->
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.5 20.2344L15.7188 12.5L8.5 4.76562L9.53125 3.73438L17.7812 12.5L9.53125 21.2656L8.5 20.2344Z" fill="#111111"/>
                    </svg>
                </a>

                <a href="#" class="flex justify-between items-center bg-white rounded-full px-4 py-2 font-bold gap-x-4 hover:scale-105 transition-all">
                    <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg" class="transition-colors">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 16.5C0 12.2565 1.68571 8.18687 4.68629 5.18629C7.68687 2.18571 11.7565 0.5 16 0.5C20.2435 0.5 24.3131 2.18571 27.3137 5.18629C30.3143 8.18687 32 12.2565 32 16.5C32 20.7435 30.3143 24.8131 27.3137 27.8137C24.3131 30.8143 20.2435 32.5 16 32.5C11.7565 32.5 7.68687 30.8143 4.68629 27.8137C1.68571 24.8131 0 20.7435 0 16.5ZM21.6 23.54C22.56 24.34 24 22.58 22.56 21.62C18.0387 19.2231 12.7707 18.6505 7.84 20.02C6.72 20.18 6.88 22.1 8 22.1C12.8 21.3 16.96 20.66 21.6 23.54ZM23.2 19.54C17.6 16.5 13.6 16.5 7.68 17.78C6.08 17.78 6.08 15.7 7.36 15.22C10.2095 14.4183 13.1897 14.1894 16.1282 14.5464C19.0667 14.9034 21.9054 15.8393 24.48 17.3C25.6 18.1 24.96 20.18 23.2 19.54ZM24.96 14.74C26.56 15.86 28.16 13.14 26.56 12.18C20.3739 8.86613 13.1324 8.119 6.4 10.1C4.8 10.74 5.6 13.3 6.88 13.14C13.44 11.54 19.68 11.54 24.96 14.74Z" fill="currentColor"/>
                    </svg>
                    <span class="text-xl grow">Deezer</span>
                    <!-- carret left -->
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.5 20.2344L15.7188 12.5L8.5 4.76562L9.53125 3.73438L17.7812 12.5L9.53125 21.2656L8.5 20.2344Z" fill="#111111"/>
                    </svg>
                </a>

                <p class="cursor-not-allowed flex justify-between items-center bg-neutral-300 rounded-full px-4 py-2 font-bold gap-x-4">
                    <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg" class="transition-colors">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 16.5C0 12.2565 1.68571 8.18687 4.68629 5.18629C7.68687 2.18571 11.7565 0.5 16 0.5C20.2435 0.5 24.3131 2.18571 27.3137 5.18629C30.3143 8.18687 32 12.2565 32 16.5C32 20.7435 30.3143 24.8131 27.3137 27.8137C24.3131 30.8143 20.2435 32.5 16 32.5C11.7565 32.5 7.68687 30.8143 4.68629 27.8137C1.68571 24.8131 0 20.7435 0 16.5ZM21.6 23.54C22.56 24.34 24 22.58 22.56 21.62C18.0387 19.2231 12.7707 18.6505 7.84 20.02C6.72 20.18 6.88 22.1 8 22.1C12.8 21.3 16.96 20.66 21.6 23.54ZM23.2 19.54C17.6 16.5 13.6 16.5 7.68 17.78C6.08 17.78 6.08 15.7 7.36 15.22C10.2095 14.4183 13.1897 14.1894 16.1282 14.5464C19.0667 14.9034 21.9054 15.8393 24.48 17.3C25.6 18.1 24.96 20.18 23.2 19.54ZM24.96 14.74C26.56 15.86 28.16 13.14 26.56 12.18C20.3739 8.86613 13.1324 8.119 6.4 10.1C4.8 10.74 5.6 13.3 6.88 13.14C13.44 11.54 19.68 11.54 24.96 14.74Z" fill="currentColor"/>
                    </svg>
                    <span class="text-xl grow">Amazon Music</span>
                    <!-- carret left -->
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.5 20.2344L15.7188 12.5L8.5 4.76562L9.53125 3.73438L17.7812 12.5L9.53125 21.2656L8.5 20.2344Z" fill="#111111"/>
                    </svg>
                </p>

                <p class="cursor-not-allowed flex justify-between items-center bg-neutral-300 rounded-full px-4 py-2 font-bold gap-x-4">
                    <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg" class="transition-colors">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 16.5C0 12.2565 1.68571 8.18687 4.68629 5.18629C7.68687 2.18571 11.7565 0.5 16 0.5C20.2435 0.5 24.3131 2.18571 27.3137 5.18629C30.3143 8.18687 32 12.2565 32 16.5C32 20.7435 30.3143 24.8131 27.3137 27.8137C24.3131 30.8143 20.2435 32.5 16 32.5C11.7565 32.5 7.68687 30.8143 4.68629 27.8137C1.68571 24.8131 0 20.7435 0 16.5ZM21.6 23.54C22.56 24.34 24 22.58 22.56 21.62C18.0387 19.2231 12.7707 18.6505 7.84 20.02C6.72 20.18 6.88 22.1 8 22.1C12.8 21.3 16.96 20.66 21.6 23.54ZM23.2 19.54C17.6 16.5 13.6 16.5 7.68 17.78C6.08 17.78 6.08 15.7 7.36 15.22C10.2095 14.4183 13.1897 14.1894 16.1282 14.5464C19.0667 14.9034 21.9054 15.8393 24.48 17.3C25.6 18.1 24.96 20.18 23.2 19.54ZM24.96 14.74C26.56 15.86 28.16 13.14 26.56 12.18C20.3739 8.86613 13.1324 8.119 6.4 10.1C4.8 10.74 5.6 13.3 6.88 13.14C13.44 11.54 19.68 11.54 24.96 14.74Z" fill="currentColor"/>
                    </svg>
                    <span class="text-xl grow">Apple Music</span>
                    <!-- carret left -->
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.5 20.2344L15.7188 12.5L8.5 4.76562L9.53125 3.73438L17.7812 12.5L9.53125 21.2656L8.5 20.2344Z" fill="#111111"/>
                    </svg>
                </p>

                <p class="cursor-not-allowed flex justify-between items-center bg-neutral-300 rounded-full px-4 py-2 font-bold gap-x-4">
                    <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg" class="transition-colors">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 16.5C0 12.2565 1.68571 8.18687 4.68629 5.18629C7.68687 2.18571 11.7565 0.5 16 0.5C20.2435 0.5 24.3131 2.18571 27.3137 5.18629C30.3143 8.18687 32 12.2565 32 16.5C32 20.7435 30.3143 24.8131 27.3137 27.8137C24.3131 30.8143 20.2435 32.5 16 32.5C11.7565 32.5 7.68687 30.8143 4.68629 27.8137C1.68571 24.8131 0 20.7435 0 16.5ZM21.6 23.54C22.56 24.34 24 22.58 22.56 21.62C18.0387 19.2231 12.7707 18.6505 7.84 20.02C6.72 20.18 6.88 22.1 8 22.1C12.8 21.3 16.96 20.66 21.6 23.54ZM23.2 19.54C17.6 16.5 13.6 16.5 7.68 17.78C6.08 17.78 6.08 15.7 7.36 15.22C10.2095 14.4183 13.1897 14.1894 16.1282 14.5464C19.0667 14.9034 21.9054 15.8393 24.48 17.3C25.6 18.1 24.96 20.18 23.2 19.54ZM24.96 14.74C26.56 15.86 28.16 13.14 26.56 12.18C20.3739 8.86613 13.1324 8.119 6.4 10.1C4.8 10.74 5.6 13.3 6.88 13.14C13.44 11.54 19.68 11.54 24.96 14.74Z" fill="currentColor"/>
                    </svg>
                    <span class="text-xl grow">Soundcloud</span>
                    <!-- carret left -->
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.5 20.2344L15.7188 12.5L8.5 4.76562L9.53125 3.73438L17.7812 12.5L9.53125 21.2656L8.5 20.2344Z" fill="#111111"/>
                    </svg>
                </p>

            </div>
        </div>

    </div>

</div>
