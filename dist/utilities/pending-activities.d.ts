import type { EventGroup } from '../models/event-groups/event-groups';
import type { PendingActivity, PendingNexusOperation, WorkflowEventWithPending } from '../types/events';
import type { WorkflowEvent } from '../types/events';
export declare const getPendingActivity: (event: WorkflowEvent, pendingActivities: PendingActivity[]) => PendingActivity | undefined;
export declare const isAssociatedPendingActivity: (event: WorkflowEvent, pendingActivity: PendingActivity | undefined) => boolean;
export declare const getPendingNexusOperation: (event: WorkflowEvent, pendingNexusOperations: PendingNexusOperation[]) => PendingNexusOperation | undefined;
export declare const getGroupForEventOrPendingEvent: (groups: EventGroup[], event: WorkflowEventWithPending) => EventGroup;
