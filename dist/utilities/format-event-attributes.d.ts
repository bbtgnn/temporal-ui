import type { I18nKey } from '../i18n';
import type { EventGroup } from '../models/event-groups/event-groups';
import type { EventAttribute, EventAttributeKey, IterableEvent, PendingActivity } from '../types/events';
export type CombinedAttributes = EventAttribute & {
    eventTime?: string;
    workflowExecutionRunId?: string;
    workflowExecutionWorkflowId?: string;
    firstExecutionRunId?: string;
    continuedExecutionRunId?: string;
    newExecutionRunId?: string;
    namespace?: string;
};
export declare const formatRetryExpiration: (maxAttempts: number, expiration: string) => number | string;
export declare const formatAttemptsLeft: (maxAttempts: number | null, attempt: number) => number | string;
export declare const formatMaximumAttempts: (maxAttempts: number | null) => number | string;
export declare const formatAttributes: (event: IterableEvent) => CombinedAttributes;
export declare const formatGroupAttributes: (group: EventGroup) => CombinedAttributes;
export declare const formatPendingAttributes: (pendingActivity: PendingActivity) => CombinedAttributes;
export type AttributeGroup = 'summary' | 'parent' | 'activity' | 'taskQueue' | 'schedule' | 'retryPolicy' | 'workflow' | 'searchAttributes';
type GroupingOption = {
    label: I18nKey;
};
export declare const attributeGroupingProperties: Readonly<Record<AttributeGroup, GroupingOption>>;
export type AttributeGrouping = Partial<Record<AttributeGroup, EventAttributeKey[]>>;
export declare const attributeGroups: (event: IterableEvent, attributes: CombinedAttributes) => AttributeGrouping;
export {};
