import { SvelteComponentTyped } from "svelte";
import type { WorkflowExecution } from '../../../types/workflows';
declare const __propDef: {
    props: {
        open: boolean;
        workflow: WorkflowExecution;
        namespace: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type UpdateConfirmationModalProps = typeof __propDef.props;
export type UpdateConfirmationModalEvents = typeof __propDef.events;
export type UpdateConfirmationModalSlots = typeof __propDef.slots;
export default class UpdateConfirmationModal extends SvelteComponentTyped<UpdateConfirmationModalProps, UpdateConfirmationModalEvents, UpdateConfirmationModalSlots> {
}
export {};
