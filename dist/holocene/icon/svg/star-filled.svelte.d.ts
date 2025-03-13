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
export type StarFilledProps = typeof __propDef.props;
export type StarFilledEvents = typeof __propDef.events;
export type StarFilledSlots = typeof __propDef.slots;
export default class StarFilled extends SvelteComponentTyped<StarFilledProps, StarFilledEvents, StarFilledSlots> {
}
export {};
