<script lang="ts">
    export let disabled = false;
    export let active = false;
    export let circular = false;
    export let uppercase = true;
    export let type: "button" | "reset" | "submit" = "button";
    export let invertColor = false
</script>

<button
    on:click
    {type}
    {disabled}
    class={`${
        active ? "bg-custom-light-pink text-black" : invertColor ? "dark:bg-custom-titanium bg-gray-300" : "bg-custom-titanium dark:bg-gray-300"
    } ${invertColor ? 'text-black dark:text-white' : 'text-white dark:text-black'}   shadow text-sm transition duration-200 m-1 btn ${
        uppercase ? "uppercase" : ""
    } py-2 px-4 ${
        circular ? "w-12 h-12 rounded-full flex items-center justify-center" : "rounded "
    } ${
        disabled
            ? "opacity-50 cursor-not-allowed "
            : "hover:bg-custom-light-pink dark:hover:text-white dark:hover:bg-custom-light-pink hover:text-white "
    }`}
>
    <slot />
</button>
