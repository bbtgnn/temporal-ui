import { SvelteComponentTyped } from "svelte";
export declare const meta: {
    title: string;
    component: typeof Icon;
    args: {
        name: "add";
        height: number;
        width: number;
    };
    argTypes: {
        name: {
            name: string;
            control: "select";
            options: string[];
        };
        height: {
            name: string;
            control: "number";
        };
        width: {
            name: string;
            control: "number";
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
export type IconProps = typeof __propDef.props;
export type IconEvents = typeof __propDef.events;
export type IconSlots = typeof __propDef.slots;
export default class Icon extends SvelteComponentTyped<IconProps, IconEvents, IconSlots> {
}
export {};
