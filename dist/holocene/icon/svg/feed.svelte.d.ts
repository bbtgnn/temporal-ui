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
export type FeedProps = typeof __propDef.props;
export type FeedEvents = typeof __propDef.events;
export type FeedSlots = typeof __propDef.slots;
export default class Feed extends SvelteComponentTyped<FeedProps, FeedEvents, FeedSlots> {
}
export {};
