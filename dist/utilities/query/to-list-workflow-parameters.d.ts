import type { FilterParameters } from '../../types/workflows';
export type ParsedParameters = FilterParameters & {
    timeRange?: string;
};
export declare const getLargestDurationUnit: (duration: Duration) => Duration;
export declare const toListWorkflowParameters: (query: string) => ParsedParameters;
