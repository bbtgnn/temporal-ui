/// <reference types="svelte" />
type DataEncoder = {
    namespace: string;
    settingsEndpoint?: string;
    settingsPassAccessToken: boolean;
    settingsIncludeCredentials: boolean;
    endpoint: string;
    accessToken?: string;
    hasNotRequested: boolean;
    hasError: boolean;
    hasSuccess: boolean;
};
export declare const dataEncoder: import("svelte/store").Readable<DataEncoder>;
export {};
