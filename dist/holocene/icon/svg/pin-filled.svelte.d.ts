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
export type PinFilledProps = typeof __propDef.props;
export type PinFilledEvents = typeof __propDef.events;
export type PinFilledSlots = typeof __propDef.slots;
export default class PinFilled extends SvelteComponentTyped<PinFilledProps, PinFilledEvents, PinFilledSlots> {
}
export {};
