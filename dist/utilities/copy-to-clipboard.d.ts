/// <reference types="svelte" />
import { type Writable } from 'svelte/store';
type CopiedToClipboardReturnValue = {
    copy: (event: Event, content: string) => Promise<void>;
    copied: Writable<boolean>;
};
export declare const copyToClipboard: (timeout?: number) => CopiedToClipboardReturnValue;
export {};
