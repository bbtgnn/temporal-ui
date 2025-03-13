import { toWorkflowTaskFailureReadable } from './screaming-enums';
const isFailedTaskEvent = (event) => {
    return event.eventType === 'WorkflowTaskFailed';
};
const isCompletedTaskEvent = (event) => {
    return event.eventType === 'WorkflowTaskCompleted';
};
export const getErrorCause = (error) => {
    var _a;
    const { workflowTaskFailedEventAttributes: { failure, cause }, } = error;
    if (((_a = failure === null || failure === void 0 ? void 0 : failure.applicationFailureInfo) === null || _a === void 0 ? void 0 : _a.type) === 'workflowTaskHeartbeatError') {
        return 'WorkflowTaskHeartbeatError';
    }
    return toWorkflowTaskFailureReadable(cause);
};
const getFailedWorkflowTask = (fullEventHistory) => {
    const failedWorkflowTaskIndex = fullEventHistory.findIndex(isFailedTaskEvent);
    if (failedWorkflowTaskIndex < 0)
        return;
    const completedWorkflowTaskIndex = fullEventHistory.findIndex(isCompletedTaskEvent);
    const failedWorkflowTask = fullEventHistory.find((event) => isFailedTaskEvent(event));
    const cause = getErrorCause(failedWorkflowTask);
    if (cause === 'ResetWorkflow')
        return;
    if (completedWorkflowTaskIndex < 0)
        return failedWorkflowTask;
    // History is sorted in descending order, so index of failed task should be less than index of completed task
    if (failedWorkflowTaskIndex < completedWorkflowTaskIndex) {
        return failedWorkflowTask;
    }
};
export const getWorkflowTaskFailedEvent = (fullEventHistory, sortOrder) => {
    if (sortOrder === 'descending') {
        return getFailedWorkflowTask(fullEventHistory);
    }
    else {
        const reversedEventHistory = [...fullEventHistory].reverse();
        return getFailedWorkflowTask(reversedEventHistory);
    }
};
