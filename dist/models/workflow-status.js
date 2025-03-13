export const workflowStatuses = [
    'Running',
    'TimedOut',
    'Completed',
    'Failed',
    'ContinuedAsNew',
    'Canceled',
    'Terminated',
];
export function isWorkflowStatusType(value) {
    return workflowStatuses.includes(value);
}
export const workflowStatusFilters = [
    'All',
    ...workflowStatuses,
];
