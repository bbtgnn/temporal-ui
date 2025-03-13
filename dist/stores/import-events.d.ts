/// <reference types="svelte" />
import type { EventGroups } from '../models/event-groups/event-groups';
import type { WorkflowEvents } from '../types/events';
export declare const importEvents: import("svelte/store").Writable<WorkflowEvents>;
export declare const importEventGroups: import("svelte/store").Writable<EventGroups>;
