import type { EventGroup } from '../models/event-groups/event-groups';
import type { IterableEventWithPending } from '../types/events';
export declare const getFailedOrPendingEvents: (items: IterableEventWithPending[], filterForFailedOrPending: boolean) => IterableEventWithPending[];
export declare const getFailedOrPendingGroups: (items: EventGroup[], filterForFailedOrPending: boolean) => EventGroup[];
