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
export type CanceledProps = typeof __propDef.props;
export type CanceledEvents = typeof __propDef.events;
export type CanceledSlots = typeof __propDef.slots;
export default class Canceled extends SvelteComponentTyped<CanceledProps, CanceledEvents, CanceledSlots> {
}
export {};
