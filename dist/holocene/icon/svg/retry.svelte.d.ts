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
export type RetryProps = typeof __propDef.props;
export type RetryEvents = typeof __propDef.events;
export type RetrySlots = typeof __propDef.slots;
export default class Retry extends SvelteComponentTyped<RetryProps, RetryEvents, RetrySlots> {
}
export {};
