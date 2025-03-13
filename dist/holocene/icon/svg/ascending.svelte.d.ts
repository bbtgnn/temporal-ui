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
export type AscendingProps = typeof __propDef.props;
export type AscendingEvents = typeof __propDef.events;
export type AscendingSlots = typeof __propDef.slots;
export default class Ascending extends SvelteComponentTyped<AscendingProps, AscendingEvents, AscendingSlots> {
}
export {};
