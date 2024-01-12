<script lang="ts">
    export let data;

    $: characters = data?.characters;
</script>

<svelte:head>
    <title>Characters</title>
</svelte:head>

<h1>Characters</h1>

<ul>
    {#each characters as {name, id, image, occupation}}
        <li>
            <a href={`/characters/${id}`} class="picture">
                <img src={image} alt={name} />
            </a>
            <div>
                <a href={`/characters/${id}`}><b>{name}</b></a>

                <p class="occupation">
                    {occupation ? occupation : 'Unknown'}
                </p>
            </div>
        </li>
    {/each}
</ul>

<a href="/home">Home</a>

<style>
    h1 {
        color: #4075a6;
    }
    li {
        display: flex;
        gap: 2rem
    }
    a {
        text-decoration: none;
    }
    .picture {
        display: flex;
        height: 100px;
        width: 100px;
    }
    .picture > img {
        height: 100%;
        width: 100%;
        object-fit: contain;
    }
    .occupation {
        color: grey;
    }

</style>
