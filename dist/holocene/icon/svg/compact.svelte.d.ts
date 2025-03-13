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
export type CompactProps = typeof __propDef.props;
export type CompactEvents = typeof __propDef.events;
export type CompactSlots = typeof __propDef.slots;
export default class Compact extends SvelteComponentTyped<CompactProps, CompactEvents, CompactSlots> {
}
export {};
