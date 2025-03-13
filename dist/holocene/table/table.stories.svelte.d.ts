import { SvelteComponentTyped } from "svelte";
export declare const meta: {
    title: string;
    component: typeof Table;
    args: {
        variant: string;
        columns: number;
        rows: number;
    };
    argTypes: {
        variant: {
            control: "radio";
            options: string[];
        };
        columns: {
            control: "number";
        };
        rows: {
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
export type TableProps = typeof __propDef.props;
export type TableEvents = typeof __propDef.events;
export type TableSlots = typeof __propDef.slots;
export default class Table extends SvelteComponentTyped<TableProps, TableEvents, TableSlots> {
}
export {};
