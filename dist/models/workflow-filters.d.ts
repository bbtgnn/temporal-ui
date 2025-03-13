import type { SearchAttributes, WorkflowExecution } from '../types/workflows';
export type TextFilterAttributes = 'WorkflowId' | 'WorkflowType' | 'RunId';
export type TextFilterKeys = Extract<keyof WorkflowExecution, 'id' | 'name' | 'runId'>;
export declare const attributeToHumanReadable: Record<TextFilterAttributes, string>;
export declare const attributeToId: Record<TextFilterAttributes, string>;
export declare const searchAttributeToWorkflowKey: Record<TextFilterAttributes, TextFilterKeys>;
export type SortOrder = 'asc' | 'desc';
export type WorkflowSort = {
    attribute: keyof SearchAttributes;
    value: SortOrder;
};
