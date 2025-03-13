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
export type InactiveProps = typeof __propDef.props;
export type InactiveEvents = typeof __propDef.events;
export type InactiveSlots = typeof __propDef.slots;
export default class Inactive extends SvelteComponentTyped<InactiveProps, InactiveEvents, InactiveSlots> {
}
export {};
