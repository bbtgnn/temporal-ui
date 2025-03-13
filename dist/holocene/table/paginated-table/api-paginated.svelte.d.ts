import { SvelteComponentTyped } from "svelte";
export type PaginatedRequest<T> = (size: number, token: string) => Promise<{
    items: T[];
    nextPageToken: string;
}>;
import type { HTMLAttributes } from 'svelte/elements';
declare class __sveltets_Render<T> {
    props(): HTMLAttributes<HTMLDivElement> & {
        id?: string;
        maxHeight?: string;
        onError?: (error: unknown) => void;
        onFetch: () => Promise<PaginatedRequest<T>>;
        onShiftUp?: (event: KeyboardEvent) => void;
        onShiftDown?: (event: KeyboardEvent) => void;
        onSpace?: (event: KeyboardEvent) => void;
        total?: string | number;
        pageSizeSelectLabel: string;
        emptyStateTitle?: string;
        emptyStateMessage?: string;
        errorTitle?: string;
        errorMessage?: string;
        itemsKeyname?: string;
        previousButtonLabel: string;
        nextButtonLabel: string;
        pageSizeOptions?: string[];
    };
    events(): {} & {
        [evt: string]: CustomEvent<any>;
    };
    slots(): {
        header: {
            visibleItems: T[];
        };
        caption: {
            slot: string;
        };
        headers: {
            slot: string;
            visibleItems: T[];
        };
        default: {
            visibleItems: T[];
        };
        loading: {};
        error: {};
        empty: {};
        'actions-end-additional': {};
    };
}
export type ApiPaginatedProps<T> = ReturnType<__sveltets_Render<T>['props']>;
export type ApiPaginatedEvents<T> = ReturnType<__sveltets_Render<T>['events']>;
export type ApiPaginatedSlots<T> = ReturnType<__sveltets_Render<T>['slots']>;
export default class ApiPaginated<T> extends SvelteComponentTyped<ApiPaginatedProps<T>, ApiPaginatedEvents<T>, ApiPaginatedSlots<T>> {
}
export {};
