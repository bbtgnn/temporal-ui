import type { PendingActivityInfo } from '../../types';
import type { EventAttributeKey, EventAttributesWithType, PendingActivity } from '../../types/events';
export declare const canBeSimplified: (value: unknown) => value is Record<string, string>;
export declare const getValueForFirstKey: (value: Record<string, string>) => string;
export declare function simplifyAttributes(attributes: EventAttributesWithType<EventAttributeKey>, preserveTimestamps?: boolean): EventAttributesWithType<EventAttributeKey>;
export declare function simplifyAttributes(attributes: PendingActivityInfo, preserveTimestamps?: boolean): PendingActivity;
