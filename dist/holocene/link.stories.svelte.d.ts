import { SvelteComponentTyped } from "svelte";
export declare const meta: {
    title: string;
    component: typeof Link;
    args: {
        href: string;
        icon: any;
        active: false;
        newTab: false;
        light: false;
    };
    argTypes: {
        href: {
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
export type LinkProps = typeof __propDef.props;
export type LinkEvents = typeof __propDef.events;
export type LinkSlots = typeof __propDef.slots;
export default class Link extends SvelteComponentTyped<LinkProps, LinkEvents, LinkSlots> {
}
export {};
