import { SvelteComponentTyped } from "svelte";
export declare const meta: {
    title: string;
    component: typeof Drawer;
    args: {
        open: true;
        position: "bottom";
        title: string;
        dark: true;
        closeButtonLabel: string;
        closePadding: true;
    };
    argTypes: {
        position: {
            name: string;
            control: "radio";
            options: string[];
        };
        title: {
            name: string;
            control: "text";
        };
        dark: {
            name: string;
            control: "boolean";
        };
        onClick: {
            control: false;
            table: {
                disable: true;
            };
        };
        closePadding: {
            control: "boolean";
            table: {
                disable: true;
            };
        };
        closeButtonLabel: {
            name: string;
            control: "text";
            table: {
                category: string;
            };
        };
        open: {
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
export type DrawerProps = typeof __propDef.props;
export type DrawerEvents = typeof __propDef.events;
export type DrawerSlots = typeof __propDef.slots;
export default class Drawer extends SvelteComponentTyped<DrawerProps, DrawerEvents, DrawerSlots> {
}
export {};
