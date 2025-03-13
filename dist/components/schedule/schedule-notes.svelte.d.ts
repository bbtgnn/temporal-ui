import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        notes?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ScheduleNotesProps = typeof __propDef.props;
export type ScheduleNotesEvents = typeof __propDef.events;
export type ScheduleNotesSlots = typeof __propDef.slots;
export default class ScheduleNotes extends SvelteComponentTyped<ScheduleNotesProps, ScheduleNotesEvents, ScheduleNotesSlots> {
}
export {};
