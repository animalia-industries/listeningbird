<script lang="ts">
    import { onMount } from "svelte";

onMount(() => {
	console.log(fetch('/api/search?query=linkin park'));
})
</script>

<form action="" method="POST">
	<input type="text" name="type">
	<input type="text" name="id">
	<button type="submit">oui</button>
</form>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
