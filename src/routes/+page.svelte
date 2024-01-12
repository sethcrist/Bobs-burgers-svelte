<script lang="ts">
    let subject = 'learners'
</script>

<svelte:head>
    <title>Home</title>
</svelte:head>

<h1>Welcome SvelteKit {subject}!</h1>

<a href="/about">About</a>
<a href="/characters">Characters</a>

<style>
    h1 {
        color: #ff3e00;
    }
</style>