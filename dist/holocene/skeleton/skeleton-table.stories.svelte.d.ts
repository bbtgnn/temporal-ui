import { SvelteComponentTyped } from "svelte";
export declare const meta: {
    title: string;
    component: typeof SkeletonTable;
    args: {
        rows: number;
        columns: number;
    };
    argTypes: {
        rows: {
            name: string;
            control: "number";
        };
        columns: {
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
export type SkeletonTableProps = typeof __propDef.props;
export type SkeletonTableEvents = typeof __propDef.events;
export type SkeletonTableSlots = typeof __propDef.slots;
export default class SkeletonTable extends SvelteComponentTyped<SkeletonTableProps, SkeletonTableEvents, SkeletonTableSlots> {
}
export {};
