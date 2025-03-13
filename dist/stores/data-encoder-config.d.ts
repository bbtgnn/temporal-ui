/// <reference types="svelte" />
import type { DataEncoderStatus } from '../types/global';
export declare const codecEndpoint: Pick<import("svelte/store").Writable<string>, "update" | "subscribe" | "set">;
export declare const passAccessToken: Pick<import("svelte/store").Writable<boolean>, "update" | "subscribe" | "set">;
export declare const includeCredentials: Pick<import("svelte/store").Writable<boolean>, "update" | "subscribe" | "set">;
export declare const overrideRemoteCodecConfiguration: Pick<import("svelte/store").Writable<boolean>, "update" | "subscribe" | "set">;
export declare const lastDataEncoderStatus: import("svelte/store").Writable<DataEncoderStatus>;
export declare const lastDataEncoderError: import("svelte/store").Writable<string>;
export declare function setLastDataEncoderFailure(error?: unknown): void;
export declare function setLastDataEncoderSuccess(): void;
export declare function resetLastDataEncoderSuccess(): void;
