import { SvelteComponentTyped } from "svelte";
export declare const meta: {
    title: string;
    component: typeof Alert;
    args: {
        title: string;
        intent: "info";
        hidden: false;
    };
    argTypes: {
        title: {
            control: "text";
        };
        intent: {
            control: "select";
            options: string[];
        };
        icon: {
            control: "select";
            options: string[];
        };
        hidden: {
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
export type AlertProps = typeof __propDef.props;
export type AlertEvents = typeof __propDef.events;
export type AlertSlots = typeof __propDef.slots;
export default class Alert extends SvelteComponentTyped<AlertProps, AlertEvents, AlertSlots> {
}
export {};
