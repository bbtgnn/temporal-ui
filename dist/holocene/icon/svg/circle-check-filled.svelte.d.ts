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
export type CircleCheckFilledProps = typeof __propDef.props;
export type CircleCheckFilledEvents = typeof __propDef.events;
export type CircleCheckFilledSlots = typeof __propDef.slots;
export default class CircleCheckFilled extends SvelteComponentTyped<CircleCheckFilledProps, CircleCheckFilledEvents, CircleCheckFilledSlots> {
}
export {};
