import { SvelteComponentTyped } from "svelte";
import { MenuButton, MenuContainer, MenuItem } from './';
export declare const meta: {
    title: string;
    component: typeof MenuButton;
    subcomponents: {
        MenuButton: typeof MenuButton;
        MenuContainer: typeof MenuContainer;
        MenuItem: typeof MenuItem;
    };
    args: {
        variant: "primary";
        keepOpen: false;
        position: "left";
    };
    argTypes: {
        variant: {
            name: string;
            control: "select";
            options: string[];
        };
        keepOpen: {
            name: string;
            control: "boolean";
        };
        position: {
            name: string;
            control: "inline-radio";
            options: string[];
        };
        menuElement: {
            name: string;
            table: {
                disable: true;
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
export type MenuProps = typeof __propDef.props;
export type MenuEvents = typeof __propDef.events;
export type MenuSlots = typeof __propDef.slots;
export default class Menu extends SvelteComponentTyped<MenuProps, MenuEvents, MenuSlots> {
}
export {};
