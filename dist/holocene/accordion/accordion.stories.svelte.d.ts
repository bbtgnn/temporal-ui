import { SvelteComponentTyped } from "svelte";
export declare const meta: {
    title: string;
    component: typeof Accordion;
    args: {
        title: string;
        subtitle: string;
        open: false;
        expandable: true;
        error: string;
    };
    argTypes: {
        title: {
            name: string;
            control: "text";
        };
        subtitle: {
            name: string;
            control: "text";
        };
        open: {
            name: string;
            control: "boolean";
        };
        expandable: {
            name: string;
            control: "boolean";
        };
        error: {
            name: string;
            control: "text";
        };
        icon: {
            name: string;
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
export type AccordionProps = typeof __propDef.props;
export type AccordionEvents = typeof __propDef.events;
export type AccordionSlots = typeof __propDef.slots;
export default class Accordion extends SvelteComponentTyped<AccordionProps, AccordionEvents, AccordionSlots> {
}
export {};
