import type { EventAttributeKey, EventAttributesWithType, EventWithMetadata, HistoryEvent, WorkflowEvent, WorkflowEvents } from '../../types/events';
import { type DecodeFunctions } from '../../utilities/decode-payload';
export declare function getEventAttributes({ historyEvent, namespace, settings, accessToken }: EventWithMetadata, { convertWithCodec, decodeAttributes, }?: DecodeFunctions): Promise<EventAttributesWithType<EventAttributeKey>>;
export declare const toEvent: (historyEvent: HistoryEvent) => WorkflowEvent;
export declare const toEventHistory: (events: HistoryEvent[]) => WorkflowEvents;
export declare const isEvent: (event: unknown) => event is WorkflowEvent;
export declare const fromEventToRawEvent: (event: WorkflowEvent) => HistoryEvent;
