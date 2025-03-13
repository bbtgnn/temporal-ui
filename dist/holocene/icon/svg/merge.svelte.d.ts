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
export type MergeProps = typeof __propDef.props;
export type MergeEvents = typeof __propDef.events;
export type MergeSlots = typeof __propDef.slots;
export default class Merge extends SvelteComponentTyped<MergeProps, MergeEvents, MergeSlots> {
}
export {};
