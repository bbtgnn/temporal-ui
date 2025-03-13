export const isCancelInProgress = (status, eventHistory) => {
    const isRunning = status === 'Running';
    const workflowCancelRequested = eventHistory === null || eventHistory === void 0 ? void 0 : eventHistory.some((event) => (event === null || event === void 0 ? void 0 : event.eventType) === 'WorkflowExecutionCancelRequested');
    return isRunning && workflowCancelRequested;
};
