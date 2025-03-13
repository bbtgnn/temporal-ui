import type { CommonHistoryEvent } from '../../types/events';
import type { EventGroup } from './event-groups';
export declare const createEventGroup: (event: CommonHistoryEvent) => EventGroup;
export declare const createWorkflowTaskGroup: (event: CommonHistoryEvent) => EventGroup;
