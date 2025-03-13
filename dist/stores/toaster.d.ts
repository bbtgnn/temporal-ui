/// <reference types="svelte" />
import { type Writable } from 'svelte/store';
import type { Toast } from '../types/holocene';
export interface Toaster extends Writable<Toast[]> {
    push: (toast: Toast) => void;
    pop: (id: string) => void;
    clear: () => void;
    toasts: Writable<Toast[]>;
}
export declare const toaster: Toaster;
