import { SvelteComponentTyped } from "svelte";
export declare const meta: {
    title: string;
    component: typeof Label;
    args: {
        label: string;
        disabled: false;
        hidden: false;
        required: true;
    };
    argTypes: {
        label: {
            name: string;
            control: "text";
        };
        disabled: {
            name: string;
            control: "boolean";
        };
        required: {
            name: string;
            control: "boolean";
        };
        hidden: {
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
export type LabelProps = typeof __propDef.props;
export type LabelEvents = typeof __propDef.events;
export type LabelSlots = typeof __propDef.slots;
export default class Label extends SvelteComponentTyped<LabelProps, LabelEvents, LabelSlots> {
}
export {};
