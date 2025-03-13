import { isEventGroup } from './';
import { isActivityTaskCanceledEvent, isActivityTaskFailedEvent, isActivityTaskTimedOutEvent, isChildWorkflowExecutionCanceledEvent, isChildWorkflowExecutionFailedEvent, isChildWorkflowExecutionTerminatedEvent, isChildWorkflowExecutionTimedOutEvent, isFailedWorkflowExecutionUpdateCompletedEvent, isNexusOperationCanceledEvent, isNexusOperationFailedEvent, isNexusOperationTimedOutEvent, isSignalExternalWorkflowExecutionFailedEvent, isTimerCanceledEvent, isWorkflowExecutionCanceledEvent, isWorkflowExecutionFailedEvent, isWorkflowExecutionTerminatedEvent, isWorkflowExecutionTimedOutEvent, isWorkflowTaskFailedEvent, isWorkflowTaskTimedOutEvent, } from '../../utilities/is-event-type';
export const eventIsFailureOrTimedOut = (event) => {
    return (isActivityTaskTimedOutEvent(event) ||
        isActivityTaskFailedEvent(event) ||
        isWorkflowExecutionFailedEvent(event) ||
        isWorkflowExecutionTimedOutEvent(event) ||
        isWorkflowTaskTimedOutEvent(event) ||
        isWorkflowTaskFailedEvent(event) ||
        isChildWorkflowExecutionFailedEvent(event) ||
        isChildWorkflowExecutionTimedOutEvent(event) ||
        isSignalExternalWorkflowExecutionFailedEvent(event) ||
        isFailedWorkflowExecutionUpdateCompletedEvent(event) ||
        isNexusOperationFailedEvent(event) ||
        isNexusOperationTimedOutEvent(event));
};
export const eventOrGroupIsFailureOrTimedOut = (event) => {
    if (isEventGroup(event))
        return event.isFailureOrTimedOut;
    return eventIsFailureOrTimedOut(event);
};
export const eventIsCanceled = (event) => {
    return (isActivityTaskCanceledEvent(event) ||
        isTimerCanceledEvent(event) ||
        isWorkflowExecutionCanceledEvent(event) ||
        isChildWorkflowExecutionCanceledEvent(event) ||
        isNexusOperationCanceledEvent(event));
};
export const eventOrGroupIsCanceled = (event) => {
    if (isEventGroup(event))
        return event.isCanceled;
    return eventIsCanceled(event);
};
export const eventIsTerminated = (event) => {
    return (isWorkflowExecutionTerminatedEvent(event) ||
        isChildWorkflowExecutionTerminatedEvent(event));
};
export const eventOrGroupIsTerminated = (event) => {
    if (isEventGroup(event))
        return event.isTerminated;
    return eventIsTerminated(event);
};
