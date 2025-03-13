import { SvelteComponentTyped } from "svelte";
export declare const MENU_ITEM_SELECTORS = "input, li[role=\"option\"]:not([aria-disabled=\"true\"]), li[role=\"menuitem\"]:not([aria-disabled=\"true\"])";
import type { HTMLAnchorAttributes, HTMLLiAttributes } from 'svelte/elements';
declare const __propDef: {
    props: ({
        selected?: boolean;
        destructive?: boolean;
        disabled?: boolean;
        description?: string;
        centered?: boolean;
        class?: string;
        'data-testid'?: string;
        hoverable?: boolean;
    } & HTMLLiAttributes & {
        href?: never;
        newTab?: never;
    }) | ({
        selected?: boolean;
        destructive?: boolean;
        disabled?: boolean;
        description?: string;
        centered?: boolean;
        class?: string;
        'data-testid'?: string;
        hoverable?: boolean;
    } & HTMLAnchorAttributes & {
        href: string;
        newTab?: boolean;
    });
    events: {
        click: CustomEvent<undefined>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
        leading: {};
        trailing: {};
    };
};
export type MenuItemProps = typeof __propDef.props;
export type MenuItemEvents = typeof __propDef.events;
export type MenuItemSlots = typeof __propDef.slots;
export default class MenuItem extends SvelteComponentTyped<MenuItemProps, MenuItemEvents, MenuItemSlots> {
}
export {};
