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
export type RegionsProps = typeof __propDef.props;
export type RegionsEvents = typeof __propDef.events;
export type RegionsSlots = typeof __propDef.slots;
export default class Regions extends SvelteComponentTyped<RegionsProps, RegionsEvents, RegionsSlots> {
}
export {};
