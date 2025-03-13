import { SvelteComponentTyped } from "svelte";
import type { Timestamp } from '@temporalio/common';
import type { WorkflowExecution } from '../../types/workflows';
declare const __propDef: {
    props: {
        workflow: WorkflowExecution;
        startTime: string | Timestamp;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            endTime: string | Date;
            duration: number;
        };
    };
};
export type EndTimeIntervalProps = typeof __propDef.props;
export type EndTimeIntervalEvents = typeof __propDef.events;
export type EndTimeIntervalSlots = typeof __propDef.slots;
export default class EndTimeInterval extends SvelteComponentTyped<EndTimeIntervalProps, EndTimeIntervalEvents, EndTimeIntervalSlots> {
}
export {};
