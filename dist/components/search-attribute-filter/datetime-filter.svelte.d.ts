import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type DatetimeFilterProps = typeof __propDef.props;
export type DatetimeFilterEvents = typeof __propDef.events;
export type DatetimeFilterSlots = typeof __propDef.slots;
export default class DatetimeFilter extends SvelteComponentTyped<DatetimeFilterProps, DatetimeFilterEvents, DatetimeFilterSlots> {
}
export {};
