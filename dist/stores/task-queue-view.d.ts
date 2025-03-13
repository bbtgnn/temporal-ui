/// <reference types="svelte" />
import type { TaskQueueView } from '../types/events';
export declare const taskQueueView: Pick<import("svelte/store").Writable<TaskQueueView>, "update" | "subscribe" | "set">;
