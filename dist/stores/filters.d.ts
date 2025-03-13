/// <reference types="svelte" />
import type { SearchAttributeFilter } from '../models/search-attribute-filters';
export declare const query: import("svelte/store").Readable<string>;
export declare const showChildWorkflows: Pick<import("svelte/store").Writable<boolean>, "update" | "subscribe" | "set">;
export declare const hideChildWorkflows: Pick<import("svelte/store").Writable<boolean>, "update" | "subscribe" | "set">;
export declare const searchInputViewOpen: Pick<import("svelte/store").Writable<boolean>, "update" | "subscribe" | "set">;
export declare const workflowFilters: import("svelte/store").Writable<SearchAttributeFilter[]>;
export declare const scheduleFilters: import("svelte/store").Writable<SearchAttributeFilter[]>;
export declare const eventCategoryFilter: import("svelte/store").Writable<import("../models/event-history/get-event-categorization").EventTypeCategory[]>;
export declare const eventClassificationFilter: import("svelte/store").Writable<("Running" | "TimedOut" | "Completed" | "Failed" | "Canceled" | "Terminated" | "Unspecified" | "Scheduled" | "Open" | "New" | "Started" | "Initiated" | "Fired" | "CancelRequested" | "Signaled")[]>;
export declare const eventTypeFilter: import("svelte/store").Writable<import("../models/event-history/get-event-categorization").EventTypeCategory[]>;
export declare const eventStatusFilter: import("svelte/store").Writable<boolean>;
