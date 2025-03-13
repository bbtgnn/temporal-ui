import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        position?: 'left' | 'right';
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type TimezoneSelectProps = typeof __propDef.props;
export type TimezoneSelectEvents = typeof __propDef.events;
export type TimezoneSelectSlots = typeof __propDef.slots;
export default class TimezoneSelect extends SvelteComponentTyped<TimezoneSelectProps, TimezoneSelectEvents, TimezoneSelectSlots> {
}
export {};
