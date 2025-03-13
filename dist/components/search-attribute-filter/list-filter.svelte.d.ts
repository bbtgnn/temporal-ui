import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type ListFilterProps = typeof __propDef.props;
export type ListFilterEvents = typeof __propDef.events;
export type ListFilterSlots = typeof __propDef.slots;
export default class ListFilter extends SvelteComponentTyped<ListFilterProps, ListFilterEvents, ListFilterSlots> {
}
export {};
