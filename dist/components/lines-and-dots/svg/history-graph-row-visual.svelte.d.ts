import { SvelteComponentTyped } from "svelte";
import type { EventGroup, EventGroups } from '../../../models/event-groups/event-groups';
import type { WorkflowEventWithPending } from '../../../types/events';
declare const __propDef: {
    props: {
        event: WorkflowEventWithPending;
        group: EventGroup;
        history: WorkflowEventWithPending[];
        groups: EventGroups;
        index: number;
        canvasWidth: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type HistoryGraphRowVisualProps = typeof __propDef.props;
export type HistoryGraphRowVisualEvents = typeof __propDef.events;
export type HistoryGraphRowVisualSlots = typeof __propDef.slots;
export default class HistoryGraphRowVisual extends SvelteComponentTyped<HistoryGraphRowVisualProps, HistoryGraphRowVisualEvents, HistoryGraphRowVisualSlots> {
}
export {};
