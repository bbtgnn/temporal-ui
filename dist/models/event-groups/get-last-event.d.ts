import type { WorkflowEvent } from '../../types/events';
import type { EventGroup } from './event-groups';
export declare const getLastEvent: ({ events }: EventGroup) => WorkflowEvent;
