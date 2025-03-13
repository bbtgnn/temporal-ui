import { SvelteComponentTyped } from "svelte";
export declare const meta: {
    title: string;
    component: typeof Tooltip;
    args: {
        text: string;
        show: boolean;
        hide: boolean;
    };
    argTypes: {
        text: {
            name: string;
            control: "text";
        };
        hide: {
            name: string;
            control: "boolean";
            if: {
                arg: string;
                neq: boolean;
            };
        };
        show: {
            name: string;
            control: "boolean";
            if: {
                arg: string;
                neq: boolean;
            };
        };
        icon: {
            name: string;
            control: "select";
            options: string[];
        };
        width: {
            name: string;
            control: {
                type: "range";
                min: number;
                max: number;
            };
        };
        top: {
            name: string;
            control: "boolean";
            table: {
                category: string;
            };
        };
        left: {
            name: string;
            control: "boolean";
            table: {
                category: string;
            };
        };
        right: {
            name: string;
            control: "boolean";
            table: {
                category: string;
            };
        };
        bottom: {
            name: string;
            control: "boolean";
            table: {
                category: string;
            };
        };
        topRight: {
            name: string;
            control: "boolean";
            table: {
                category: string;
            };
        };
        topLeft: {
            name: string;
            control: "boolean";
            table: {
                category: string;
            };
        };
        bottomRight: {
            name: string;
            control: "boolean";
            table: {
                category: string;
            };
        };
        bottomLeft: {
            name: string;
            control: "boolean";
            table: {
                category: string;
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
export type TooltipProps = typeof __propDef.props;
export type TooltipEvents = typeof __propDef.events;
export type TooltipSlots = typeof __propDef.slots;
export default class Tooltip extends SvelteComponentTyped<TooltipProps, TooltipEvents, TooltipSlots> {
}
export {};
