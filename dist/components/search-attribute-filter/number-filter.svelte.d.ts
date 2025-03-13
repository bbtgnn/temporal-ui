import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type NumberFilterProps = typeof __propDef.props;
export type NumberFilterEvents = typeof __propDef.events;
export type NumberFilterSlots = typeof __propDef.slots;
export default class NumberFilter extends SvelteComponentTyped<NumberFilterProps, NumberFilterEvents, NumberFilterSlots> {
}
export {};
