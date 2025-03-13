import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type BooleanFilterProps = typeof __propDef.props;
export type BooleanFilterEvents = typeof __propDef.events;
export type BooleanFilterSlots = typeof __propDef.slots;
export default class BooleanFilter extends SvelteComponentTyped<BooleanFilterProps, BooleanFilterEvents, BooleanFilterSlots> {
}
export {};
