import { SvelteComponentTyped } from "svelte";
import type { HTMLAttributes } from 'svelte/elements';
import { type Writable } from 'svelte/store';
export declare const MENU_CONTEXT = "menu-context";
export type MenuContext = {
    open: Writable<boolean>;
    keepOpen: Writable<boolean>;
    menuElement: Writable<HTMLUListElement>;
};
declare const __propDef: {
    props: HTMLAttributes<HTMLUListElement> & {
        open?: Writable<boolean>;
        class?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            open: Writable<boolean>;
        };
    };
};
export type MenuContainerProps = typeof __propDef.props;
export type MenuContainerEvents = typeof __propDef.events;
export type MenuContainerSlots = typeof __propDef.slots;
export default class MenuContainer extends SvelteComponentTyped<MenuContainerProps, MenuContainerEvents, MenuContainerSlots> {
}
export {};
