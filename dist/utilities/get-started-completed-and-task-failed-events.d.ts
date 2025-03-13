import type { WorkflowEvent } from '../types/events';
export type WorkflowInputAndResults = {
    input: string;
    results: string;
    contAsNew: boolean;
};
export declare const getWorkflowStartedCompletedAndTaskFailedEvents: (eventHistory: WorkflowEvent[]) => WorkflowInputAndResults;
