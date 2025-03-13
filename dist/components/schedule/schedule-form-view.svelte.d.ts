import { SvelteComponentTyped } from "svelte";
import type { FullSchedule, ScheduleParameters, SchedulePreset } from '../../types/schedule';
import type { Schedule, SearchAttribute } from '$types';
declare const __propDef: {
    props: {
        schedule?: FullSchedule | null;
        searchAttributes?: SearchAttribute;
        onConfirm: (preset: SchedulePreset, args: Partial<ScheduleParameters>, schedule?: Schedule) => void;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ScheduleFormViewProps = typeof __propDef.props;
export type ScheduleFormViewEvents = typeof __propDef.events;
export type ScheduleFormViewSlots = typeof __propDef.slots;
export default class ScheduleFormView extends SvelteComponentTyped<ScheduleFormViewProps, ScheduleFormViewEvents, ScheduleFormViewSlots> {
}
export {};
