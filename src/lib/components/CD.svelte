<script lang="ts">
	// Set default artwork vynil image
	export let artworkURL: string =
		'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg';
	export let isWrapped: boolean = false;
</script>

<div
	class="rounded-full aspect-square flex items-center justify-center relative {$$props.class} {isWrapped
		? ''
		: 'overflow-hidden'} {isWrapped ? '' : 'animate-spin-slow'}"
>
	<img
		src="/images/vinyl-layout.png"
		alt="Vinyl"
		class="w-full h-full object-cover opacity-30 absolute z-50"
	/>
	<img src={artworkURL} alt="Spinner" class="object-cover w-full h-full" />
	{#if !isWrapped}
		<div class="rounded-full bg-neutral-800 h-1/6 w-1/6 absolute">
			<div
				class="rounded-full bg-neutral-300/50 h-1/6 w-1/6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
			></div>
		</div>
	{/if}
	{#if isWrapped}
		<img class="absolute scale-110" src="/images/cover-layout.png" alt="" />
	{/if}
</div>
