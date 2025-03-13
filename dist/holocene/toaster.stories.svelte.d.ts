import { SvelteComponentTyped } from "svelte";
export declare const meta: {
    title: string;
    component: typeof Toaster;
    args: {
        closeButtonLabel: string;
        duration: number;
        variant: string;
        message: string;
    };
    argTypes: {
        variant: {
            name: string;
            control: "select";
            options: string[];
            mapping: {
                Primary: string;
                Success: string;
                Info: string;
                Error: string;
                Warning: string;
            };
        };
        message: {
            name: string;
            control: "text";
        };
        duration: {
            control: {
                type: "range";
                min: number;
                max: number;
                step: number;
            };
        };
        closeButtonLabel: {
            name: string;
            control: "text";
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
export type ToasterProps = typeof __propDef.props;
export type ToasterEvents = typeof __propDef.events;
export type ToasterSlots = typeof __propDef.slots;
export default class Toaster extends SvelteComponentTyped<ToasterProps, ToasterEvents, ToasterSlots> {
}
export {};
