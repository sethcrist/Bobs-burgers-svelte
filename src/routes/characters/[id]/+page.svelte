<script lang="ts">
    export let data;

    $: character = data?.character;
</script>

<svelte:head>
    <title>{character.name}</title>
</svelte:head>

<h1>{character.name}</h1>



<a href="/characters">Back to Characters</a>

<style>

</style>
