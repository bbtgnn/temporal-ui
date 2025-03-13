/// <reference types="svelte" />
import type { EventGroup } from '../models/event-groups/event-groups';
export declare const indexPageSize = 200;
export declare const startIndex: import("svelte/store").Writable<number>;
export declare const endIndex: import("svelte/store").Writable<number>;
export declare const activeGroups: import("svelte/store").Writable<string[]>;
export declare const activeGroupHeight: import("svelte/store").Writable<number>;
export declare const clearActives: () => void;
export declare const clearActiveGroups: () => void;
export declare const setActiveGroup: (group: EventGroup) => void;
