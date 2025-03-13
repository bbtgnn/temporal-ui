import type { IconName } from '../../holocene/icon';
import type { EventGroup, EventGroups } from '../../models/event-groups/event-groups';
import type { EventSortOrder } from '../../stores/event-view';
import type { EventClassification, EventTypeCategory, PendingActivity, WorkflowEvent, WorkflowEventWithPending } from '../../types/events';
import type { WorkflowStatus } from '../../types/workflows';
export type GraphConfig = {
    height: number;
    gutter: number;
    radius: number;
    fontSizeRatio: number;
};
export declare const TimelineConfig: GraphConfig;
export declare const HistoryConfig: GraphConfig;
export declare const DetailsConfig: GraphConfig;
export declare const CategoryIcon: Record<EventTypeCategory, IconName>;
export declare const timelineTextPosition: (points: number[], y: number, width: number, isPending: boolean, config: GraphConfig) => {
    textPosition: [number, number];
    textIndex: number;
    textAnchor: string;
    backdrop: boolean;
};
export declare const isMiddleEvent: (event: WorkflowEvent, groups: EventGroups) => boolean;
export declare const getNextDistanceAndOffset: (history: WorkflowEventWithPending[], event: WorkflowEventWithPending, groups: EventGroups, height: number, sort: EventSortOrder) => {
    nextDistance: number;
    offset: number;
};
export declare const getStatusColor: (status: WorkflowStatus | EventClassification | 'Pending' | 'Retrying') => string;
export declare const getCategoryColor: (type: EventTypeCategory) => string;
export declare const mergeEventGroupDetails: (group: EventGroup) => import("../../utilities/format-event-attributes").CombinedAttributes;
export declare const staticCodeBlockHeight = 200;
export declare const getPendingEventDetailHeight: (event: PendingActivity) => number;
