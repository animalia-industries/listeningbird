<script>
    import "../app.css";
</script>

<div class="bg-stone-900 w-full min-h-screen h-full relative overflow-hidden flex flex-col">
    <div class="container grow flex flex-col py-4">
        <div class="flex justify-between items-center w-full gap-x-2 z-50">
            <a href="/" class="font-koulen text-2xl text-white">
                OUI
            </a>
            <div class="flex gap-x-2">
                <a href="/" class="text-white font-koulen">HOME</a>
            </div>
        </div>
        <slot />
    </div>
    <!-- Overlay -->
    <div class="bg-gradient-to-t md:bg-gradient-to-r from-stone-950 to-stone-950/0 to-40% md:to-30% h-screen w-screen absolute top-0"></div>
</div>