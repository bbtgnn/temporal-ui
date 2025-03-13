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
export type ErrorProps = typeof __propDef.props;
export type ErrorEvents = typeof __propDef.events;
export type ErrorSlots = typeof __propDef.slots;
export default class Error extends SvelteComponentTyped<ErrorProps, ErrorEvents, ErrorSlots> {
}
export {};
