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
export type NexusProps = typeof __propDef.props;
export type NexusEvents = typeof __propDef.events;
export type NexusSlots = typeof __propDef.slots;
export default class Nexus extends SvelteComponentTyped<NexusProps, NexusEvents, NexusSlots> {
}
export {};
