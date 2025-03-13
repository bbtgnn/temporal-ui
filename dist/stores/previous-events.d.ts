/// <reference types="svelte" />
import { type Writable } from 'svelte/store';
import type { FetchEventsParameters } from '../services/events-service';
export declare const previous: Writable<FetchEventsParameters>;
export declare const clearPreviousEventParameters: () => void;
