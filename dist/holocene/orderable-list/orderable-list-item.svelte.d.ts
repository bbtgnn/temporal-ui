import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: ({
        label: string;
        index?: number;
        totalItems?: number;
        pinned?: boolean;
        maxPinnedItems?: number;
    } & {
        readonly: boolean;
    }) | ({
        label: string;
        index?: number;
        totalItems?: number;
        pinned?: boolean;
        maxPinnedItems?: number;
    } & {
        static: boolean;
    } & Pick<{
        moveUpButtonLabel: string;
        moveDownButtonLabel: string;
        pinButtonLabel: string;
        unpinButtonLabel: string;
        addButtonLabel: string;
        removeButtonLabel: string;
    }, "addButtonLabel">) | ({
        label: string;
        index?: number;
        totalItems?: number;
        pinned?: boolean;
        maxPinnedItems?: number;
    } & {
        moveUpButtonLabel: string;
        moveDownButtonLabel: string;
        pinButtonLabel: string;
        unpinButtonLabel: string;
        addButtonLabel: string;
        removeButtonLabel: string;
    });
    events: {
        dragover: DragEvent;
        addItem: CustomEvent<undefined>;
        moveItem: CustomEvent<{
            from: number;
            to: number;
        }>;
        pinItem: CustomEvent<undefined>;
        removeItem: CustomEvent<undefined>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type OrderableListItemProps = typeof __propDef.props;
export type OrderableListItemEvents = typeof __propDef.events;
export type OrderableListItemSlots = typeof __propDef.slots;
export default class OrderableListItem extends SvelteComponentTyped<OrderableListItemProps, OrderableListItemEvents, OrderableListItemSlots> {
}
export {};
