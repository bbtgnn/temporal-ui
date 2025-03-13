import { isWorkflowExecutionCompletedEvent, isWorkflowExecutionContinuedAsNewEvent, } from './is-event-type';
import { stringifyWithBigInt } from './parse-with-big-int';
const completedEventTypes = [
    'WorkflowExecutionFailed',
    'WorkflowExecutionCompleted',
    'WorkflowExecutionContinuedAsNew',
    'WorkflowExecutionTimedOut',
    'WorkflowExecutionCanceled',
    'WorkflowExecutionTerminated',
];
const isStartedEvent = (event) => {
    return !!event.workflowExecutionStartedEventAttributes;
};
const isCompletionEvent = (event) => {
    for (const completionType of completedEventTypes) {
        if (event.eventType === completionType)
            return true;
    }
    return false;
};
const getEventResult = (event) => {
    if (isWorkflowExecutionContinuedAsNewEvent(event)) {
        return event.attributes.input;
    }
    if (isWorkflowExecutionCompletedEvent(event)) {
        if (event.attributes.result === null)
            return null;
        return event.attributes.result;
    }
    return event.attributes;
};
export const getWorkflowStartedCompletedAndTaskFailedEvents = (eventHistory) => {
    var _a, _b;
    let input;
    let results;
    let contAsNew = false;
    let workflowStartedEvent;
    let workflowCompletedEvent;
    for (const event of eventHistory) {
        if (isStartedEvent(event)) {
            workflowStartedEvent = event;
            continue;
        }
        else if (isCompletionEvent(event)) {
            workflowCompletedEvent = event;
            continue;
        }
    }
    if (workflowStartedEvent) {
        input = stringifyWithBigInt((_b = (_a = workflowStartedEvent === null || workflowStartedEvent === void 0 ? void 0 : workflowStartedEvent.workflowExecutionStartedEventAttributes) === null || _a === void 0 ? void 0 : _a.input) !== null && _b !== void 0 ? _b : null);
    }
    if (workflowCompletedEvent) {
        contAsNew = isWorkflowExecutionContinuedAsNewEvent(workflowCompletedEvent);
        results = stringifyWithBigInt(getEventResult(workflowCompletedEvent));
    }
    return {
        input,
        results,
        contAsNew,
    };
};
