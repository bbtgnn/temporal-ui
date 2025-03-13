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
export type StarEmptyProps = typeof __propDef.props;
export type StarEmptyEvents = typeof __propDef.events;
export type StarEmptySlots = typeof __propDef.slots;
export default class StarEmpty extends SvelteComponentTyped<StarEmptyProps, StarEmptyEvents, StarEmptySlots> {
}
export {};
