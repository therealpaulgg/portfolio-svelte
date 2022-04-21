import { readSync } from "to-vfile";
import { unified } from "unified";
import parse from "remark-parse";
import gfm from "remark-gfm";
import remark2rehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import frontmatter from "remark-frontmatter";
import highlight from "rehype-highlight";
import django from "highlight.js/lib/languages/django";

const parser = unified().use(parse).use(gfm).use(frontmatter, ["yaml"]);

const runner = unified()
    .use(remark2rehype)
    .use(highlight, { languages: { django } })
    .use(rehypeStringify);

export function process(filename: string): { content: string } {
    const tree = parser.parse(readSync(filename));
    if (tree.children.length > 0 && tree.children[0].type == "yaml") {
        tree.children = tree.children.slice(1, tree.children.length);
    }
    const content = runner.stringify(runner.runSync(tree));
    return { content };
}
