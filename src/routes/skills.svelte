<script lang="ts" context="module">
    import { base } from "$app/paths";
    export async function load({ fetch }) {
        const content = await fetch(`${base}/skills.json`).then((r) => r.json());
        return {
            props: { content }
        };
    }
</script>

<script lang="ts">
    export let content;
    import Button from "../components/Button.svelte";
    let requested = false;

    const emails = [
        "cGF1bEBwYXVsLnN5c3RlbXM=",
        "YWdlbGxhaUBhc3UuZWR1",
        "cGF1bEBwYXVsZ2VsbGFpLmRldg=="
    ];
    function b64decode(str: string) {
        return atob(str);
    }

    function handleClick() {
        requested = true
    }
</script>

<svelte:head>
    <title>Skills | Paul Gellai Portfolio</title>
</svelte:head>

<div class="mt-2">This is a web-based version of my resume.</div>
<div class="font-bold text-2xl">Contact</div>
<p>
    To help prevent <em>most</em> pesky bots from spamming my contact information, I have masked my emails
    so that they will display if you click on them.
</p>
<Button on:click={handleClick}>Show Emails</Button>
{#if requested}
    <div>
        <ul>
            {#each emails as email, i}
                <li>
                    <a class="hover:text-custom-light-blue" href={`mailto:${b64decode(email)}`}
                        >{b64decode(email)}</a
                    >
                </li>
            {/each}
        </ul>
    </div>
{/if}

<hr class="mt-6 mb-2" />

<div>{@html content.content}</div>
