import { SvelteComponentTyped } from "svelte";
export declare const meta: {
    title: string;
    component: typeof IconButton;
    args: {
        icon: "close";
        label: string;
    };
    argTypes: {
        label: {
            control: "text";
        };
        icon: {
            control: "select";
            options: string[];
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
export type IconButtonProps = typeof __propDef.props;
export type IconButtonEvents = typeof __propDef.events;
export type IconButtonSlots = typeof __propDef.slots;
export default class IconButton extends SvelteComponentTyped<IconButtonProps, IconButtonEvents, IconButtonSlots> {
}
export {};
