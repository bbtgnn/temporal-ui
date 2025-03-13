import { SvelteComponentTyped } from "svelte";
import type { HTMLAttributes } from 'svelte/elements';
declare class __sveltets_Render<T> {
    props(): HTMLAttributes<HTMLDivElement> & {
        onError?: (error: unknown) => void;
        onFetch: () => Promise<(size: number, token: string, query?: string) => Promise<{
            items: T[];
            nextPageToken: string;
        }>>;
        onShiftUp?: (event: KeyboardEvent) => void;
        onShiftDown?: (event: KeyboardEvent) => void;
        onSpace?: (event: KeyboardEvent) => void;
        pageSizeOptions?: string[] | number[];
        defaultPageSize?: string | number;
        total?: string | number;
        pageSizeSelectLabel: string;
        emptyStateMessage: string;
        fallbackErrorMessage: string;
        itemsKeyname?: string;
        previousButtonLabel: string;
        nextButtonLabel: string;
    } & ({
        filterable?: false;
    } | {
        filterable: true;
        filterInputPlaceholder: string;
        filterDebounceInMilliseconds?: number;
    });
    events(): {} & {
        [evt: string]: CustomEvent<any>;
    };
    slots(): {
        error: {};
        header: {
            visibleItems: T[];
        };
        'action-top-left': {
            visibleItems: T[];
        };
        'action-top-center': {};
        'action-top-right': {};
        loading: {};
        empty: {
            query: string;
        };
        default: {
            updating: boolean;
            visibleItems: T[];
            activeIndex: number;
            setActiveIndex: (activeIndex: number) => void;
        };
        'action-bottom-left': {};
        'action-bottom-right': {};
    };
}
export type ApiPaginationProps<T> = ReturnType<__sveltets_Render<T>['props']>;
export type ApiPaginationEvents<T> = ReturnType<__sveltets_Render<T>['events']>;
export type ApiPaginationSlots<T> = ReturnType<__sveltets_Render<T>['slots']>;
export default class ApiPagination<T> extends SvelteComponentTyped<ApiPaginationProps<T>, ApiPaginationEvents<T>, ApiPaginationSlots<T>> {
}
export {};
