import { SvelteComponentTyped } from "svelte";
declare class __sveltets_Render<Item> {
    props(): {
        [x: string]: any;
        visibleItems: Item[];
        variant?: "primary" | "split";
        updating?: boolean;
        maxHeight?: string;
        fixed?: boolean;
    };
    events(): {} & {
        [evt: string]: CustomEvent<any>;
    };
    slots(): {
        caption: {};
        headers: {
            visibleItems: Item[];
        };
        default: {};
        'actions-start': {};
        'actions-center': {};
        'actions-end': {};
        empty: {};
    };
}
export type IndexProps<Item> = ReturnType<__sveltets_Render<Item>['props']>;
export type IndexEvents<Item> = ReturnType<__sveltets_Render<Item>['events']>;
export type IndexSlots<Item> = ReturnType<__sveltets_Render<Item>['slots']>;
export default class Index<Item> extends SvelteComponentTyped<IndexProps<Item>, IndexEvents<Item>, IndexSlots<Item>> {
}
export {};
