import { writable } from "svelte/store";
import {browser} from "$app/env"

export const theme = writable(
    browser && (localStorage.getItem("theme") === "dark" || localStorage.getItem("theme") === "light")
        ? localStorage.getItem("theme")
        : browser && window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
);

export function setTheme(newTheme: "light" | "dark"): void {
    console.log("updating theme???")
    console.log(newTheme)
    theme.set(newTheme);
    localStorage.setItem("theme", newTheme);
}
