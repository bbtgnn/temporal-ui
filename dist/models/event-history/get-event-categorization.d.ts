import type { I18nKey } from '../../i18n';
import type { EventType, WorkflowEvents } from '../../types/events';
type Categories = typeof CATEGORIES;
export type EventTypeCategory = Categories[keyof Categories];
export declare const CATEGORIES: {
    readonly ACTIVITY: "activity";
    readonly CHILD_WORKFLOW: "child-workflow";
    readonly LOCAL_ACTIVITY: "local-activity";
    readonly NEXUS: "nexus";
    readonly SIGNAL: "signal";
    readonly TIMER: "timer";
    readonly UPDATE: "update";
    readonly WORKFLOW: "workflow";
    readonly OTHER: "other";
};
export declare const eventTypeCategorizations: Readonly<Record<EventType, EventTypeCategory>>;
export type EventTypeOption = {
    label: I18nKey;
    value: EventTypeCategory;
    description?: I18nKey;
};
export declare const allEventTypeOptions: EventTypeOption[];
export declare const compactEventTypeOptions: EventTypeOption[];
export declare const getEventCategory: (eventType: EventType) => EventTypeCategory;
export declare const isCategoryType: (value: string) => value is EventTypeCategory;
export declare const getEventsInCategory: (events: WorkflowEvents, category: string) => WorkflowEvents;
export {};
