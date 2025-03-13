import { SvelteComponentTyped } from "svelte";
import type { Timestamp } from '@temporalio/common';
import type { EventGroup } from '../../../models/event-groups/event-groups';
declare const __propDef: {
    props: {
        y?: number;
        group: EventGroup;
        activeGroups?: string[];
        startTime: string | Timestamp;
        endTime: string | Date;
        canvasWidth: number;
        active?: boolean;
        readOnly?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type TimelineGraphRowProps = typeof __propDef.props;
export type TimelineGraphRowEvents = typeof __propDef.events;
export type TimelineGraphRowSlots = typeof __propDef.slots;
export default class TimelineGraphRow extends SvelteComponentTyped<TimelineGraphRowProps, TimelineGraphRowEvents, TimelineGraphRowSlots> {
}
export {};
