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
export type ConnectionProps = typeof __propDef.props;
export type ConnectionEvents = typeof __propDef.events;
export type ConnectionSlots = typeof __propDef.slots;
export default class Connection extends SvelteComponentTyped<ConnectionProps, ConnectionEvents, ConnectionSlots> {
}
export {};
