/// <reference types="svelte" />
import type { Readable } from 'svelte/store';
export declare const defaultItemsPerPage = 100;
export declare const options: string[];
export declare const perPageKey = "per-page";
export declare const currentPageKey = "page";
export declare const MAX_PAGE_SIZE: string;
type PaginationMethods<T> = {
    adjustPageSize: (n: number | string) => void;
    next: () => void;
    previous: () => void;
    jumpToPage: (x: number | string) => void;
    jumpToHashPage: (hash: string) => void;
    jumpToIndex: (x: number | string) => void;
    findIndex: (fn: (item: T) => boolean) => number;
    findPage: (fn: (item: T) => boolean) => number;
    nextRow: () => void;
    previousRow: () => void;
    setActiveRowIndex: (activeRowIndex: number | undefined) => void;
};
type PaginationStore<T> = PaginationMethods<T> & Readable<{
    items: T[];
    initialItem: T;
    hasPrevious: boolean;
    hasNext: boolean;
    startingIndex: number;
    endingIndex: number;
    length: number;
    pageSize: number;
    currentPage: number;
    totalPages: number;
    activeRowIndex: number | undefined;
    pageShortcuts: number[];
}>;
export declare const getPageForIndex: (i: number, pageSize: number) => number;
export declare const getPageShortcuts: (currentPage: number, totalPages: number) => number[];
export declare const getStartingIndexForPage: (page: number, itemsPerPage: number, items: ArrayLike<unknown>) => number;
export declare const getNearestStartingIndex: (index: number, itemsPerPage: number, items: ArrayLike<unknown>) => number;
export declare const getMaxRowIndex: (itemsOfPage: number, itemsPerPage: number) => number;
export declare const getValidPage: (page: number, itemsPerPage: number, items: ArrayLike<unknown>) => number;
export declare const getTotalPages: (pageSize: number, items: ArrayLike<unknown>) => number;
export declare const getIndex: (index: number, things: ArrayLike<unknown>) => number;
export declare const outOfBounds: (index: number, things: ArrayLike<unknown>) => boolean;
/**
 * Creates a Svelte store for viewing pages of a larger data set.
 */
export declare const pagination: <T>(items?: readonly T[], perPage?: number | string, currentPage?: string | number) => PaginationStore<T>;
export declare const perPageFromSearchParameter: (perPage?: number | string) => number;
export {};
