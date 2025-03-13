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
export type AstronautProps = typeof __propDef.props;
export type AstronautEvents = typeof __propDef.events;
export type AstronautSlots = typeof __propDef.slots;
export default class Astronaut extends SvelteComponentTyped<AstronautProps, AstronautEvents, AstronautSlots> {
}
export {};
