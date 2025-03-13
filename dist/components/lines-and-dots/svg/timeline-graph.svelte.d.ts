import { SvelteComponentTyped } from "svelte";
import type { EventGroups } from '../../../models/event-groups/event-groups';
import type { WorkflowTaskFailedEvent } from '../../../types/events';
import type { WorkflowExecution } from '../../../types/workflows';
declare const __propDef: {
    props: {
        x?: number;
        y?: number;
        workflow: WorkflowExecution;
        groups: EventGroups;
        viewportHeight?: number;
        readOnly?: boolean;
        workflowTaskFailedError?: WorkflowTaskFailedEvent | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type TimelineGraphProps = typeof __propDef.props;
export type TimelineGraphEvents = typeof __propDef.events;
export type TimelineGraphSlots = typeof __propDef.slots;
export default class TimelineGraph extends SvelteComponentTyped<TimelineGraphProps, TimelineGraphEvents, TimelineGraphSlots> {
}
export {};
