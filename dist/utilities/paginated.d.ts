import type { NextPageToken, PaginationCallbacks, WithNextPageToken, WithoutNextPageToken } from '../types/global';
type PaginatedOptions<T> = PaginationCallbacks<T> & {
    token?: NextPageToken;
    previousProps?: WithoutNextPageToken<T>;
};
/**
 * Takes a function that receives a `nextPageToken`. If the promise
 * returned from that function has a `nextPageToken`, this function
 * will recursively call the function again, passing in the new
 * `nextPageToken`.
 *
 * - `onStart` fires at the beginning.
 * - `onUpdate` fires on each exection.
 * - `onComplete` fires when there are no more `nextPageTokens`.
 * - `onError` fires when a promise is rejected.
 */
export declare const paginated: <T extends WithNextPageToken>(fn: (token?: NextPageToken) => Promise<T>, { onStart, onUpdate, onComplete, onError, token, previousProps, }?: PaginatedOptions<T>) => Promise<WithoutNextPageToken<T>>;
export {};
