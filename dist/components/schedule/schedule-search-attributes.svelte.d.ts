import { SvelteComponentTyped } from "svelte";
import type { SearchAttribute } from '../../types';
declare const __propDef: {
    props: {
        searchAttributes: SearchAttribute;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ScheduleSearchAttributesProps = typeof __propDef.props;
export type ScheduleSearchAttributesEvents = typeof __propDef.events;
export type ScheduleSearchAttributesSlots = typeof __propDef.slots;
export default class ScheduleSearchAttributes extends SvelteComponentTyped<ScheduleSearchAttributesProps, ScheduleSearchAttributesEvents, ScheduleSearchAttributesSlots> {
}
export {};
