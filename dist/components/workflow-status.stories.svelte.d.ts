import { SvelteComponentTyped } from "svelte";
export declare const meta: {
    title: string;
    component: typeof WorkflowStatus;
    args: {
        count: any;
        newCount: any;
        big: false;
        loading: false;
        delay: number;
    };
    argTypes: {
        count: {
            name: string;
            control: "number";
        };
        newCount: {
            name: string;
            control: "number";
        };
        big: {
            name: string;
            control: "boolean";
        };
        loading: {
            name: string;
            control: "boolean";
        };
        delay: {
            name: string;
            control: "number";
        };
        status: {
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
export type WorkflowStatusProps = typeof __propDef.props;
export type WorkflowStatusEvents = typeof __propDef.events;
export type WorkflowStatusSlots = typeof __propDef.slots;
export default class WorkflowStatus extends SvelteComponentTyped<WorkflowStatusProps, WorkflowStatusEvents, WorkflowStatusSlots> {
}
export {};
