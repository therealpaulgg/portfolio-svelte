<script lang="ts">
    import { page } from "$app/stores";
    import dayjs from "dayjs";
    import { setTheme, theme } from "../store";

    import "../app.css";
    import Navbar from "../components/Navbar.svelte"
    import Typewriter from "../components/Typewriter.svelte";
    import Icon from "svelte-awesome/components/Icon.svelte";
    import Button from "../components/Button.svelte";
    import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
</script>

<svelte:head>
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/base16/solar-flare.min.css"
    />
</svelte:head>

<div class={`${$theme === "dark" ? "dark" : ""}`}>
    <div class={`relative min-h-screen dark:bg-custom-dark-theme dark:text-white font-body pb-16 `}>
        <Navbar>
            <div slot="name">
                <div>
                    <div class="pr-4">Paul Gellai Portfolio</div>
                    <div class="text-base">
                        <Typewriter
                            words={["Hack", "The", "Planet", "🌎"]}
                            next-word-interval={100}
                        />
                    </div>
                </div>
            </div>
            <div slot="links" class="flex gap-4">
                <a href="/" class="navbar-link" class:active={$page.url.pathname === "/"}
                        >Home</a
                    >
                    <a
                        href="/portfolio"
                        class="navbar-link"
                        class:active={$page.url.pathname === "/portfolio"}>Portfolio</a
                    >
                    <a
                        href="/skills"
                        class="navbar-link"
                        class:active={$page.url.pathname === "/skills"}>Skills</a
                    >
                    <a href="https://blog.paulgellai.dev" class="navbar-link">Blog</a>
            </div>
            <div slot="right">
                <Button invertColor circular on:click={() => setTheme($theme === "light" ? "dark" : "light")}>
                    {#if $theme === "dark"}
                        <Icon data={faMoon} />
                    {:else}
                        <Icon data={faSun} />
                    {/if}
                </Button>
            </div>
        </Navbar>
        <!-- <nav class="bg-custom-pink p-3 mb-3 text-white">
            <div class="mx-auto container flex items-center justify-between">
                <div class="flex items-center gap-6 text-lg">
                    
                    
                </div>
                
            </div>
        </nav> -->

        <div class="mx-auto container pb-16 px-2"><slot /></div>
        <footer
            class="bottom-0 left-0 right-0 p-3 absolute w-full bg-gray-200 dark:bg-custom-titanium"
        >
            <div class="mx-auto container text-center">
                Copyright © {dayjs().year()} <a href="https://paulgellai.dev">Paul Gellai.</a> All rights
                reserved.
            </div>
        </footer>
    </div>
</div>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;700&display=swap");
    @import url("https://fonts.googleapis.com/css2?family=Inconsolata:wght@300;400;600&display=swap");
</style>
