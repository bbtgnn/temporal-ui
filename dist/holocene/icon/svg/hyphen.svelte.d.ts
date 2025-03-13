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
export type HyphenProps = typeof __propDef.props;
export type HyphenEvents = typeof __propDef.events;
export type HyphenSlots = typeof __propDef.slots;
export default class Hyphen extends SvelteComponentTyped<HyphenProps, HyphenEvents, HyphenSlots> {
}
export {};
