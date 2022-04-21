import { process } from "$lib/markdown";

export function get({ params }): { body: string } {
    const { slug } = params;

    const { content } = process(`src/markdown/home.md`);

    const body = JSON.stringify({ content });

    return {
        body
    };
}
