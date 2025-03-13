import { SvelteComponentTyped } from "svelte";
import OrderableListItem from './orderable-list-item.svelte';
export declare const meta: {
    title: string;
    component: typeof OrderableList;
    subcomponents: {
        OrderableListItem: typeof OrderableListItem;
    };
    argTypes: {
        items: {
            name: string;
            control: {
                type: "object";
            };
        };
    };
};
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type OrderableListProps = typeof __propDef.props;
export type OrderableListEvents = typeof __propDef.events;
export type OrderableListSlots = typeof __propDef.slots;
export default class OrderableList extends SvelteComponentTyped<OrderableListProps, OrderableListEvents, OrderableListSlots> {
}
export {};
