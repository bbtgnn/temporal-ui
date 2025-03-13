import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        content: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type MarkdownProps = typeof __propDef.props;
export type MarkdownEvents = typeof __propDef.events;
export type MarkdownSlots = typeof __propDef.slots;
export default class Markdown extends SvelteComponentTyped<MarkdownProps, MarkdownEvents, MarkdownSlots> {
}
export {};
