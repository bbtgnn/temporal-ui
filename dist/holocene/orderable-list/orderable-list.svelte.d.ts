import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        heading: {};
        default: {};
    };
};
export type OrderableListProps = typeof __propDef.props;
export type OrderableListEvents = typeof __propDef.events;
export type OrderableListSlots = typeof __propDef.slots;
export default class OrderableList extends SvelteComponentTyped<OrderableListProps, OrderableListEvents, OrderableListSlots> {
}
export {};
