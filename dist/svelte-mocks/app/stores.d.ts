/// <reference types="svelte" />
interface Page<Params extends Record<string, string> = Record<string, string>> {
    url: URL;
    params: Params;
    routeId: string | null;
    data: App.PageData;
    status: number;
    error: Error | null;
}
export declare const page: import("svelte/store").Readable<Page<Record<string, string>>>;
export {};
