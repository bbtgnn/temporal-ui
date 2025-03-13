/// <reference types="svelte" />
import type { NetworkError } from '../types/global';
import type { APIErrorResponse, TemporalAPIError } from './request-from-api';
export declare const handleError: (error: unknown, toasts?: import("../stores/toaster").Toaster, errors?: import("svelte/store").Writable<NetworkError>, isBrowser?: boolean) => void;
export declare const handleUnauthorizedOrForbiddenError: (error: APIErrorResponse, isBrowser?: boolean) => void;
export declare const isUnauthorized: (error: unknown) => error is TemporalAPIError;
export declare const isForbidden: (error: unknown) => error is TemporalAPIError;
