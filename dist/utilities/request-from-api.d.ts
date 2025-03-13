import { handleError as handleRequestError } from './handle-error';
import { toURL } from './to-url';
export type TemporalAPIError = {
    code: number;
    message: string;
    details: unknown[];
};
export type RetryCallback = (retriesRemaining: number) => void;
export type APIErrorResponse = {
    status: number;
    statusText: string;
    statusCode?: number;
    body: TemporalAPIError;
};
export type ErrorCallback = (error: APIErrorResponse) => void;
type toURLParams = Parameters<typeof toURL>;
type RequestFromAPIOptions = {
    params?: toURLParams[1];
    request?: typeof fetch;
    options?: Parameters<typeof fetch>[1];
    token?: string;
    onError?: ErrorCallback;
    notifyOnError?: boolean;
    handleError?: typeof handleRequestError;
    isBrowser?: boolean;
    signal?: AbortController['signal'];
};
export declare const isTemporalAPIError: (obj: unknown) => obj is TemporalAPIError;
/**
 *  A utility method for making requests to the Temporal API.
 *
 * @param endpoint The path of the API endpoint you want to request data from.
 *
 * @param options.params Query (or search) parameters to be suffixed to the
 * path.
 * @param options.token Shorthand for a `nextPageToken` query parameter.
 * @param options.request A replacement for the native `fetch` function.
 *
 * @returns Promise with the response from the API parsed into an object.
 */
export declare const requestFromAPI: <T>(endpoint: toURLParams[0], init?: RequestFromAPIOptions) => Promise<T>;
export {};
