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
        active ? "bg-custom-light-blue text-black" : invertColor ? "bg-gray-300" : "bg-custom-titanium"
    } ${invertColor ? 'text-black' : 'text-white'}   shadow text-sm transition duration-200 m-1 btn ${
        uppercase ? "uppercase" : ""
    } py-2 px-4 ${
        circular ? "w-12 h-12 rounded-full flex items-center justify-center" : "rounded "
    } ${
        disabled
            ? "opacity-50 cursor-not-allowed "
            : "hover:bg-custom-light-blue hover:text-white "
    }`}
>
    <slot />
</button>
