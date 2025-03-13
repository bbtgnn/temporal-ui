import { SvelteComponentTyped } from "svelte";
export declare const meta: {
    title: string;
    component: typeof Chip;
    args: {
        intent: "default";
        button: false;
        removeButtonLabel: string;
    };
    argTypes: {
        intent: {
            control: "select";
            options: string[];
        };
        button: {
            control: "boolean";
        };
        removeButtonLabel: {
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
export type ChipProps = typeof __propDef.props;
export type ChipEvents = typeof __propDef.events;
export type ChipSlots = typeof __propDef.slots;
export default class Chip extends SvelteComponentTyped<ChipProps, ChipEvents, ChipSlots> {
}
export {};
