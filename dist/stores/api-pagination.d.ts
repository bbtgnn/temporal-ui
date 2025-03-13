/// <reference types="svelte" />
import type { Readable } from 'svelte/store';
type PaginationMethods<T> = {
    nextPageWithItems: (t: string, items: T[]) => void;
    nextPage: () => void;
    previousPage: () => void;
    setUpdating: () => void;
    reset: () => void;
    resetPageSize: (pageSize: number) => void;
    nextRow: () => void;
    previousRow: () => void;
    setActiveIndex: (activeIndex: number) => void;
};
type PaginationItems<T> = {
    key: string;
    loading: boolean;
    updating: boolean;
    hasNext: boolean;
    hasPrevious: boolean;
    index: number;
    previousPageSize: number;
    pageSize: number;
    indexData: Record<number, {
        nextToken: string;
        start: number;
        end: number;
        items: T[];
    }>;
    visibleItems: T[];
    hasNextIndexData: boolean;
    indexStart: number;
    indexEnd: number;
    activeIndex: number;
};
export type PaginationStore<T> = PaginationMethods<T> & Readable<PaginationItems<T>>;
export declare const getInitialPageSize: (options: string[] | number[], defaultPageSize?: string | number | undefined) => number;
export declare function createPaginationStore<T>(pageSizeOptions?: string[] | number[], defaultPageSize?: string | number | undefined): PaginationStore<T>;
export {};
