// import adapter from '@sveltejs/adapter-auto';
import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: preprocess(),

    kit: {
        adapter: adapter(),

        // hydrate the <div id="svelte"> element in src/app.html
        target: "#svelte",
		// thanks https://github.com/sveltejs/kit/issues/928
        vite: {
            ssr: {
                noExternal: [
                    "@fortawesome/free-brands-svg-icons",
                    "@fortawesome/free-regular-svg-icons",
                    "@fortawesome/free-solid-svg-icons"
                ]
            }
        }
    }
};

export default config;
