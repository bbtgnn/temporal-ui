import type { EventSortOrder } from '../../stores/event-view';
import type { CommonHistoryEvent, PendingActivity, PendingNexusOperation } from '../../types/events';
import type { EventGroup, EventGroups } from './event-groups';
export { getGroupForEvent } from './get-group-for-event';
export declare const groupEvents: (events: CommonHistoryEvent[], sort?: EventSortOrder, pendingActivities?: PendingActivity[], pendingNexusOperations?: PendingNexusOperation[]) => EventGroups;
export declare const isEventGroup: (eventOrGroup: unknown) => eventOrGroup is EventGroup;
export declare const isEventGroups: (eventsOrGroups: unknown[]) => eventsOrGroups is EventGroups;
export declare const groupWorkflowTaskEvents: (events: CommonHistoryEvent[], sort?: EventSortOrder) => EventGroups;
