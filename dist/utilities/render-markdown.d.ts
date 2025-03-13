import { toHast } from 'mdast-util-to-hast';
/**
 * Generate an HTML page from the given markdown content.
 * @param markdown The markdown content to render.
 * @returns The rendered HTML.
 */
export declare const process: (markdown: string) => Promise<import("hast").Nodes>;
export declare const render: (hast: ReturnType<typeof toHast>) => Promise<string>;
