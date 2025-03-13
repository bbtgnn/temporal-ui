/// <reference types="svelte" />
import { type Readable } from 'svelte/store';
import type { FetchEventsParameters, FetchEventsParametersWithSettings } from '../services/events-service';
import type { WorkflowEvents } from '../types/events';
export declare const parameters: Readable<FetchEventsParameters>;
export declare const parametersWithSettings: Readable<FetchEventsParametersWithSettings>;
export declare const timelineEvents: import("svelte/store").Writable<any>;
export declare const fullEventHistory: import("svelte/store").Writable<WorkflowEvents>;
export declare const pauseLiveUpdates: import("svelte/store").Writable<boolean>;
export declare const currentEventHistory: import("svelte/store").Writable<WorkflowEvents>;
export declare const filteredEventHistory: Readable<import("../types/events").WorkflowEvent[]>;
export declare const resetEvents: Readable<import("../types/events").WorkflowEvent[]>;
export declare const decodeEventHistory: Pick<import("svelte/store").Writable<boolean>, "update" | "subscribe" | "set">;
export type DownloadEventHistorySetting = 'encoded' | 'decoded' | 'readable';
export declare const downloadEventHistorySetting: Pick<import("svelte/store").Writable<DownloadEventHistorySetting>, "update" | "subscribe" | "set">;
