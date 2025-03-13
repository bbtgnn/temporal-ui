import { SvelteComponentTyped } from "svelte";
import type { HTMLAttributes } from 'svelte/elements';
declare const __propDef: {
    props: HTMLAttributes<HTMLUListElement> & {
        id: string;
        keepOpen?: boolean;
        position?: 'left' | 'right' | 'top-left' | 'top-right';
        menuElement?: HTMLUListElement;
        maxHeight?: string;
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type MenuProps = typeof __propDef.props;
export type MenuEvents = typeof __propDef.events;
export type MenuSlots = typeof __propDef.slots;
export default class Menu extends SvelteComponentTyped<MenuProps, MenuEvents, MenuSlots> {
}
export {};
