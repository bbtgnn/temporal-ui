/// <reference types="svelte" />
import type { EventView } from '../types/events';
import type { BooleanString } from '../types/global';
export type EventSortOrder = 'ascending' | 'descending';
export type EventSortOrderOptions = {
    label: string;
    option: EventSortOrder;
}[];
export declare const autoRefreshWorkflow: Pick<import("svelte/store").Writable<"on" | "off">, "update" | "subscribe" | "set">;
export declare const eventViewType: Pick<import("svelte/store").Writable<EventView>, "update" | "subscribe" | "set">;
export declare const expandAllEvents: Pick<import("svelte/store").Writable<string>, "update" | "subscribe" | "set">;
export declare const eventFilterSort: Pick<import("svelte/store").Writable<EventSortOrder>, "update" | "subscribe" | "set">;
export declare const eventShowElapsed: Pick<import("svelte/store").Writable<BooleanString>, "update" | "subscribe" | "set">;
