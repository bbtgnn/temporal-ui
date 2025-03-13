import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type DurationFilterProps = typeof __propDef.props;
export type DurationFilterEvents = typeof __propDef.events;
export type DurationFilterSlots = typeof __propDef.slots;
export default class DurationFilter extends SvelteComponentTyped<DurationFilterProps, DurationFilterEvents, DurationFilterSlots> {
}
export {};
