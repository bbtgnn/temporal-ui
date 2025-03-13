import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        namespace: string;
        workflowId: string;
        taskQueue: string;
        workflowType: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type StartWorkflowButtonProps = typeof __propDef.props;
export type StartWorkflowButtonEvents = typeof __propDef.events;
export type StartWorkflowButtonSlots = typeof __propDef.slots;
export default class StartWorkflowButton extends SvelteComponentTyped<StartWorkflowButtonProps, StartWorkflowButtonEvents, StartWorkflowButtonSlots> {
}
export {};
