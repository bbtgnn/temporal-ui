/// <reference types="svelte" />
export declare const lastUsedNamespace: Pick<import("svelte/store").Writable<string>, "update" | "subscribe" | "set">;
export declare const namespaces: import("svelte/store").Writable<import("@temporalio/proto").temporal.api.workflowservice.v1.IDescribeNamespaceResponse[]>;
