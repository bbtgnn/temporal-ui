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
export type DescendingProps = typeof __propDef.props;
export type DescendingEvents = typeof __propDef.events;
export type DescendingSlots = typeof __propDef.slots;
export default class Descending extends SvelteComponentTyped<DescendingProps, DescendingEvents, DescendingSlots> {
}
export {};
