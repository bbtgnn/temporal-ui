import { SvelteComponentTyped } from "svelte";
import type { SchedulePolicies, ScheduleSpec, ScheduleState } from '$types';
declare const __propDef: {
    props: {
        spec: ScheduleSpec;
        state: ScheduleState;
        policies: SchedulePolicies;
        notes?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ScheduleAdvancedSettingsProps = typeof __propDef.props;
export type ScheduleAdvancedSettingsEvents = typeof __propDef.events;
export type ScheduleAdvancedSettingsSlots = typeof __propDef.slots;
export default class ScheduleAdvancedSettings extends SvelteComponentTyped<ScheduleAdvancedSettingsProps, ScheduleAdvancedSettingsEvents, ScheduleAdvancedSettingsSlots> {
}
export {};
