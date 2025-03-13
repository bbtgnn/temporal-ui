import { SvelteComponentTyped } from "svelte";
import type { ConfigurableTableHeader } from '../../stores/configurable-table-columns';
import type { ScheduleListEntry } from '$types';
declare const __propDef: {
    props: {
        schedule: ScheduleListEntry;
        columns: ConfigurableTableHeader[];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type SchedulesTableRowProps = typeof __propDef.props;
export type SchedulesTableRowEvents = typeof __propDef.events;
export type SchedulesTableRowSlots = typeof __propDef.slots;
export default class SchedulesTableRow extends SvelteComponentTyped<SchedulesTableRowProps, SchedulesTableRowEvents, SchedulesTableRowSlots> {
}
export {};
