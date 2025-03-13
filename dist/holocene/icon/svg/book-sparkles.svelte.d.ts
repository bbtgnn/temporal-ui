import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type BookSparklesProps = typeof __propDef.props;
export type BookSparklesEvents = typeof __propDef.events;
export type BookSparklesSlots = typeof __propDef.slots;
export default class BookSparkles extends SvelteComponentTyped<BookSparklesProps, BookSparklesEvents, BookSparklesSlots> {
}
export {};
