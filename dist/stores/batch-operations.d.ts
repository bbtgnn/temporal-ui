/// <reference types="svelte" />
export declare const inProgressBatchOperation: import("svelte/store").Writable<{
    namespace: string;
    jobId: string;
}>;
export declare const autoRefresh: Pick<import("svelte/store").Writable<boolean>, "update" | "subscribe" | "set">;
