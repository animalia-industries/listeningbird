<script>
	import '../app.css';
</script>

<div class="relative flex h-full min-h-screen w-full flex-col overflow-hidden bg-stone-900">
	<div class="container flex grow flex-col py-4">
		<div class="z-50 flex w-full items-center justify-between gap-x-2">
			<a href="/" class="font-koulen text-2xl text-white">Listeningbird</a>
			<div class="flex gap-x-2">
				<a href="/" class="font-koulen text-white">HOME</a>
			</div>
		</div>
		<slot />
	</div>
	<!-- Overlay -->
	<div
		class="fixed top-0 h-screen w-screen bg-gradient-to-t from-stone-950 to-stone-950/0 to-40% md:bg-gradient-to-r md:to-30%"
	></div>
</div>
