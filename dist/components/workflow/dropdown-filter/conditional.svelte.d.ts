import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        conditional?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ConditionalProps = typeof __propDef.props;
export type ConditionalEvents = typeof __propDef.events;
export type ConditionalSlots = typeof __propDef.slots;
export default class Conditional extends SvelteComponentTyped<ConditionalProps, ConditionalEvents, ConditionalSlots> {
}
export {};
