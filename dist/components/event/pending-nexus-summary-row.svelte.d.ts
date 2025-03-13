import { SvelteComponentTyped } from "svelte";
import type { EventGroup } from '../../models/event-groups/event-groups';
import type { PendingNexusOperation } from '../../types/events';
declare const __propDef: {
    props: {
        event: PendingNexusOperation;
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
export type PendingNexusSummaryRowProps = typeof __propDef.props;
export type PendingNexusSummaryRowEvents = typeof __propDef.events;
export type PendingNexusSummaryRowSlots = typeof __propDef.slots;
export default class PendingNexusSummaryRow extends SvelteComponentTyped<PendingNexusSummaryRowProps, PendingNexusSummaryRowEvents, PendingNexusSummaryRowSlots> {
}
export {};
