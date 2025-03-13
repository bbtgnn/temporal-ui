import { SvelteComponentTyped } from "svelte";
import type { EventGroups } from '../../../models/event-groups/event-groups';
import type { WorkflowEventWithPending } from '../../../types/events';
declare const __propDef: {
    props: {
        groups: EventGroups;
        history: WorkflowEventWithPending[];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type HistoryGraphProps = typeof __propDef.props;
export type HistoryGraphEvents = typeof __propDef.events;
export type HistoryGraphSlots = typeof __propDef.slots;
export default class HistoryGraph extends SvelteComponentTyped<HistoryGraphProps, HistoryGraphEvents, HistoryGraphSlots> {
}
export {};
