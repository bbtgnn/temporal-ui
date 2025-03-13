import type { WorkflowEvent } from '../../types/events';
import type { EventGroup, EventGroups } from './event-groups';
export declare const getGroupForEvent: (event: WorkflowEvent, groups: EventGroups) => EventGroup;
