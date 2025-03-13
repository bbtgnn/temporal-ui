import { SvelteComponentTyped } from "svelte";
import type { HTMLAttributes } from 'svelte/elements';
declare class __sveltets_Render<T> {
    props(): HTMLAttributes<HTMLDivElement> & {
        items: T[];
        floatId?: string;
        startingIndex?: string | number;
        currentPageKey?: string;
        itemsPerPage?: number;
        updating?: boolean;
        pageSizeSelectLabel: string;
        previousButtonLabel: string;
        nextButtonLabel: string;
    };
    events(): {} & {
        [evt: string]: CustomEvent<any>;
    };
    slots(): {
        'action-top-left': {};
        'action-top-center': {};
        'pagination-top': {};
        'action-top-right': {};
        default: {
            visibleItems: T[];
            initialItem: T;
            activeRowIndex: number;
            setActiveRowIndex: (activeRowIndex: number) => void;
        };
        'action-bottom-left': {};
        'action-bottom-right': {};
    };
}
export type PaginationProps<T> = ReturnType<__sveltets_Render<T>['props']>;
export type PaginationEvents<T> = ReturnType<__sveltets_Render<T>['events']>;
export type PaginationSlots<T> = ReturnType<__sveltets_Render<T>['slots']>;
export default class Pagination<T> extends SvelteComponentTyped<PaginationProps<T>, PaginationEvents<T>, PaginationSlots<T>> {
}
export {};
