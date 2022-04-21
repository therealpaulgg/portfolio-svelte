<script lang="ts" context="module">
    import { base } from "$app/paths";
    export async function load({ fetch }) {
        const content = await fetch(`${base}/portfolio.json`).then((r) => r.json());
        return {
            props: { content }
        };
    }
</script>

<script lang="ts">
    export let content;
    import Typewriter from "../components/Typewriter.svelte";
</script>

<svelte:head>
    <title>Portfolio | Paul Gellai Portfolio</title>
</svelte:head>

<div class="home container mx-auto px-4 pt-4">
    <div class="text-6xl mb-2">
        <Typewriter
            words={['Portfolio']}
            speed={70}
            nextWordInterval={0}
        />
    </div>
    <div>{@html content.content}</div>
</div>