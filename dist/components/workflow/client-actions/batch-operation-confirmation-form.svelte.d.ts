import { SvelteComponentTyped } from "svelte";
import { Action } from '../../../models/workflow-actions';
declare const __propDef: {
    props: {
        action: Action;
        reason: string;
        jobId: string;
        reasonPlaceholder: string;
        jobIdPlaceholder: string;
        jobIdValid: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type BatchOperationConfirmationFormProps = typeof __propDef.props;
export type BatchOperationConfirmationFormEvents = typeof __propDef.events;
export type BatchOperationConfirmationFormSlots = typeof __propDef.slots;
export default class BatchOperationConfirmationForm extends SvelteComponentTyped<BatchOperationConfirmationFormProps, BatchOperationConfirmationFormEvents, BatchOperationConfirmationFormSlots> {
}
export {};
