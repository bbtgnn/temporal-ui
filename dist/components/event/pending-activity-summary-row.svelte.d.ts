import { SvelteComponentTyped } from "svelte";
import type { EventGroup } from '../../models/event-groups/event-groups';
import type { PendingActivity } from '../../types/events';
declare const __propDef: {
    props: {
        event: PendingActivity;
        group?: EventGroup | undefined;
        index: number;
        expandAll?: boolean;
        active?: boolean;
        onRowClick?: () => void;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type PendingActivitySummaryRowProps = typeof __propDef.props;
export type PendingActivitySummaryRowEvents = typeof __propDef.events;
export type PendingActivitySummaryRowSlots = typeof __propDef.slots;
export default class PendingActivitySummaryRow extends SvelteComponentTyped<PendingActivitySummaryRowProps, PendingActivitySummaryRowEvents, PendingActivitySummaryRowSlots> {
}
export {};
