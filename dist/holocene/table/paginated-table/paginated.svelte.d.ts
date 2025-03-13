import { SvelteComponentTyped } from "svelte";
declare class __sveltets_Render<Item> {
    props(): {
        [x: string]: any;
        id?: string;
        items: Item[];
        variant?: "primary" | "split";
        updating?: boolean;
        perPageLabel: string;
        pageButtonLabel: (page: number) => string;
        nextPageButtonLabel: string;
        previousPageButtonLabel: string;
        maxHeight?: string;
        pageSizeOptions?: string[];
        fixed?: boolean;
        hashField?: string;
    };
    events(): {} & {
        [evt: string]: CustomEvent<any>;
    };
    slots(): {
        caption: {
            slot: string;
        };
        headers: {
            slot: string;
            visibleItems: Item[];
        };
        default: {
            visibleItems: Item[];
        };
        'actions-end-additional': {};
        empty: {
            slot: string;
            updating: boolean;
        };
    };
}
export type PaginatedProps<Item> = ReturnType<__sveltets_Render<Item>['props']>;
export type PaginatedEvents<Item> = ReturnType<__sveltets_Render<Item>['events']>;
export type PaginatedSlots<Item> = ReturnType<__sveltets_Render<Item>['slots']>;
export default class Paginated<Item> extends SvelteComponentTyped<PaginatedProps<Item>, PaginatedEvents<Item>, PaginatedSlots<Item>> {
}
export {};
