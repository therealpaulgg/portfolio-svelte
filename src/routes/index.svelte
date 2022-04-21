<script lang="ts" context="module">
    import { base } from "$app/paths";
    export async function load({ fetch }) {
        const content = await fetch(`${base}/index.json`).then((r) => r.json());
        return {
            props: { content }
        };
    }
</script>

<script lang="ts">
    export let content;
    import { faLinkedin, faGithub, faKeybase } from "@fortawesome/free-brands-svg-icons";
    import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
    import { faKey } from "@fortawesome/free-solid-svg-icons";
    import Icon from "svelte-awesome/components/Icon.svelte";
    import Typewriter from "../components/Typewriter.svelte";
</script>

<svelte:head>
    <title>Home | Paul Gellai Portfolio</title>
</svelte:head>

<div class="container mx-auto px-4 pt-4">
    <div>
        <div class="text-center text-4xl mb-2">
            <Typewriter words={["Welcome"]} speed={50} nextWordInterval={0} />
        </div>
        <img
            src="/img/paul-headshot.jpg"
            class="mx-auto mb-4 w-auto h-64 rounded-full object-contain"
            alt="paul-headshot"
        />
        <div class="text-center">
            <a class="mx-2 hover:text-custom-light-pink" href="https://github.com/therealpaulgg">
                <Icon data={faGithub} scale={2} />
            </a>

            <a
                class="mx-2 hover:text-custom-light-pink"
                href="https://www.linkedin.com/in/paul-gellai/"
            >
                <Icon data={faLinkedin} scale={2} />
            </a>
            <a class="mx-2 hover:text-custom-light-pink" href="mailto:paul@paul.systems">
                <Icon data={faEnvelope} scale={2} />
            </a>
            <a class="mx-2 hover:text-custom-light-pink" href="https://keybase.io/therealpaulgg">
                <Icon data={faKeybase} scale={2} />
            </a>
            <a
                class="mx-2 hover:text-custom-light-pink"
                href="https://keys.openpgp.org/vks/v1/by-fingerprint/AD240A0359379DD45AF9BAC82ED4A29D63852003"
            >
                <Icon data={faKey} scale={2} />
            </a>
        </div>
    </div>
    <hr>
    <div>{@html content.content}</div>
</div>
