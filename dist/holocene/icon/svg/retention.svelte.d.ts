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
export type RetentionProps = typeof __propDef.props;
export type RetentionEvents = typeof __propDef.events;
export type RetentionSlots = typeof __propDef.slots;
export default class Retention extends SvelteComponentTyped<RetentionProps, RetentionEvents, RetentionSlots> {
}
export {};
