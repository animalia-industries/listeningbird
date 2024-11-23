<script lang="ts">
	let {
		// Set default artwork vynil image
		artworkURL = 'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg',
		isWrapped = false,
		...props
	}: { artworkURL: string; isWrapped: boolean; class: string } = $props();
</script>

<div
	class="relative flex aspect-square items-center justify-center rounded-full {props.class} {isWrapped
		? ''
		: 'overflow-hidden'} {isWrapped ? '' : 'animate-spin-slow'}"
>
	<img
		src="/images/vinyl-layout.png"
		alt="Vinyl"
		class="absolute z-50 h-full w-full object-cover opacity-30"
	/>
	<img src={artworkURL} alt="Spinner" class="h-full w-full object-cover" />
	{#if !isWrapped}
		<div class="absolute h-1/6 w-1/6 rounded-full bg-neutral-800">
			<div
				class="absolute left-1/2 top-1/2 h-1/6 w-1/6 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-neutral-300/50"
			></div>
		</div>
	{/if}
	{#if isWrapped}
		<img class="absolute scale-110" src="/images/cover-layout.png" alt="" />
	{/if}
</div>
