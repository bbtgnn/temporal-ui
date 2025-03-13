export const activityEvents = [
    'ActivityTaskCanceled',
    'ActivityTaskCancelRequested',
    'ActivityTaskCompleted',
    'ActivityTaskFailed',
    'ActivityTaskScheduled',
    'ActivityTaskStarted',
    'ActivityTaskTimedOut',
];
export const timerEvents = [
    'TimerStarted',
    'TimerCanceled',
    'TimerFired',
];
export const signalEvents = [
    'WorkflowExecutionSignaled',
    'SignalExternalWorkflowExecutionFailed',
    'SignalExternalWorkflowExecutionInitiated',
];
export const markerEvents = ['MarkerRecorded'];
const childEvents = [
    'StartChildWorkflowExecutionInitiated',
    'ChildWorkflowExecutionStarted',
    'ChildWorkflowExecutionCompleted',
    'ChildWorkflowExecutionCanceled',
    'ChildWorkflowExecutionFailed',
    'ChildWorkflowExecutionTerminated',
    'ChildWorkflowExecutionTimedOut',
    'StartChildWorkflowExecutionFailed',
];
const nexusEvents = [
    'NexusOperationScheduled',
    'NexusOperationStarted',
    'NexusOperationCompleted',
    'NexusOperationFailed',
    'NexusOperationCanceled',
    'NexusOperationTimedOut',
    'NexusOperationCancelRequested',
];
export const eventTypes = [
    ...activityEvents,
    ...timerEvents,
    ...signalEvents,
    ...markerEvents,
    ...childEvents,
    ...nexusEvents,
    'WorkflowExecutionCanceled',
    'WorkflowExecutionCancelRequested',
    'WorkflowExecutionCompleted',
    'WorkflowExecutionContinuedAsNew',
    'WorkflowExecutionFailed',
    'WorkflowExecutionStarted',
    'WorkflowExecutionTerminated',
    'WorkflowExecutionTimedOut',
    'WorkflowExecutionOptionsUpdated',
    'WorkflowTaskCompleted',
    'WorkflowTaskFailed',
    'WorkflowTaskScheduled',
    'WorkflowTaskStarted',
    'WorkflowTaskTimedOut',
    'ExternalWorkflowExecutionCancelRequested',
    'ExternalWorkflowExecutionSignaled',
    'RequestCancelExternalWorkflowExecutionFailed',
    'RequestCancelExternalWorkflowExecutionInitiated',
    'UpsertWorkflowSearchAttributes',
    'WorkflowExecutionUpdateAccepted',
    'WorkflowExecutionUpdateAdmitted',
    'WorkflowExecutionUpdateCompleted',
    'WorkflowExecutionUpdateRejected',
    'WorkflowExecutionUpdateRequested',
    'WorkflowPropertiesModified',
];
export const eventAttributeKeys = [
    'workflowExecutionStartedEventAttributes',
    'workflowExecutionCompletedEventAttributes',
    'workflowExecutionFailedEventAttributes',
    'workflowExecutionTimedOutEventAttributes',
    'workflowExecutionOptionsUpdatedEventAttributes',
    'workflowTaskStartedEventAttributes',
    'workflowTaskScheduledEventAttributes',
    'workflowTaskCompletedEventAttributes',
    'workflowTaskTimedOutEventAttributes',
    'workflowTaskFailedEventAttributes',
    'activityTaskScheduledEventAttributes',
    'activityTaskCompletedEventAttributes',
    'activityTaskStartedEventAttributes',
    'activityTaskFailedEventAttributes',
    'activityTaskTimedOutEventAttributes',
    'timerStartedEventAttributes',
    'timerFiredEventAttributes',
    'activityTaskCancelRequestedEventAttributes',
    'activityTaskCanceledEventAttributes',
    'timerCanceledEventAttributes',
    'markerRecordedEventAttributes',
    'workflowExecutionSignaledEventAttributes',
    'workflowExecutionTerminatedEventAttributes',
    'workflowExecutionUpdateAdmittedEventAttributes',
    'workflowExecutionUpdateAcceptedEventAttributes',
    'workflowExecutionUpdateCompletedEventAttributes',
    'workflowExecutionUpdateRejectedEventAttributes',
    'workflowExecutionCancelRequestedEventAttributes',
    'workflowExecutionCanceledEventAttributes',
    'requestCancelExternalWorkflowExecutionInitiatedEventAttributes',
    'requestCancelExternalWorkflowExecutionFailedEventAttributes',
    'externalWorkflowExecutionCancelRequestedEventAttributes',
    'workflowExecutionContinuedAsNewEventAttributes',
    'startChildWorkflowExecutionInitiatedEventAttributes',
    'startChildWorkflowExecutionFailedEventAttributes',
    'childWorkflowExecutionStartedEventAttributes',
    'childWorkflowExecutionCompletedEventAttributes',
    'childWorkflowExecutionFailedEventAttributes',
    'childWorkflowExecutionCanceledEventAttributes',
    'childWorkflowExecutionTimedOutEventAttributes',
    'childWorkflowExecutionTerminatedEventAttributes',
    'signalExternalWorkflowExecutionInitiatedEventAttributes',
    'signalExternalWorkflowExecutionFailedEventAttributes',
    'externalWorkflowExecutionSignaledEventAttributes',
    'upsertWorkflowSearchAttributesEventAttributes',
    'nexusOperationScheduledEventAttributes',
    'nexusOperationStartedEventAttributes',
    'nexusOperationCompletedEventAttributes',
    'nexusOperationFailedEventAttributes',
    'nexusOperationCanceledEventAttributes',
    'nexusOperationTimedOutEventAttributes',
    'nexusOperationCancelRequestedEventAttributes',
    'workflowPropertiesModifiedEventAttributes',
];
export const validResetEventTypes = [
    'WorkflowTaskCompleted',
    'WorkflowTaskFailed',
    'WorkflowTaskTimedOut',
];
export const findAttributeKey = (event) => {
    for (const key of eventAttributeKeys) {
        if (key in event)
            return key;
    }
};
export const findAttributes = (event, key) => {
    return event[key];
};
export const findAttributesAndKey = (event) => {
    const key = findAttributeKey(event);
    const attributes = findAttributes(event, key);
    return { key, attributes };
};
const hasAttributes = (key) => (event) => {
    return Boolean(event === null || event === void 0 ? void 0 : event[key]);
};
export const isWorkflowExecutionStartedEvent = hasAttributes('workflowExecutionStartedEventAttributes');
export const isWorkflowExecutionCompletedEvent = hasAttributes('workflowExecutionCompletedEventAttributes');
export const isWorkflowExecutionFailedEvent = hasAttributes('workflowExecutionFailedEventAttributes');
export const isWorkflowExecutionTimedOutEvent = hasAttributes('workflowExecutionTimedOutEventAttributes');
export const isWorkflowTaskScheduledEvent = hasAttributes('workflowTaskScheduledEventAttributes');
export const isWorkflowTaskStartedEvent = hasAttributes('workflowTaskStartedEventAttributes');
export const isWorkflowTaskCompletedEvent = hasAttributes('workflowTaskCompletedEventAttributes');
export const isWorkflowTaskTimedOutEvent = hasAttributes('workflowTaskTimedOutEventAttributes');
export const isPureWorkflowTaskFailedEvent = hasAttributes('workflowTaskFailedEventAttributes');
export const isWorkflowTaskFailedEvent = (event) => {
    var _a, _b, _c, _d;
    return (isPureWorkflowTaskFailedEvent(event) &&
        ((_b = (_a = event.workflowTaskFailedEventAttributes) === null || _a === void 0 ? void 0 : _a.failure) === null || _b === void 0 ? void 0 : _b.message) !==
            'UnhandledCommand' &&
        !((_d = (_c = event.workflowTaskFailedEventAttributes) === null || _c === void 0 ? void 0 : _c.failure) === null || _d === void 0 ? void 0 : _d.resetWorkflowFailureInfo));
};
export const isActivityTaskScheduledEvent = hasAttributes('activityTaskScheduledEventAttributes');
export const isActivityTaskStartedEvent = hasAttributes('activityTaskStartedEventAttributes');
export const isActivityTaskCompletedEvent = hasAttributes('activityTaskCompletedEventAttributes');
export const isActivityTaskFailedEvent = hasAttributes('activityTaskFailedEventAttributes');
export const isActivityTaskTimedOutEvent = hasAttributes('activityTaskTimedOutEventAttributes');
export const isTimerStartedEvent = hasAttributes('timerStartedEventAttributes');
export const isTimerFiredEvent = hasAttributes('timerFiredEventAttributes');
export const isActivityTaskCancelRequestedEvent = hasAttributes('activityTaskCancelRequestedEventAttributes');
export const isActivityTaskCanceledEvent = hasAttributes('activityTaskCanceledEventAttributes');
export const isTimerCanceledEvent = hasAttributes('timerCanceledEventAttributes');
export const isMarkerRecordedEvent = hasAttributes('markerRecordedEventAttributes');
export const isWorkflowExecutionSignaledEvent = hasAttributes('workflowExecutionSignaledEventAttributes');
export const isWorkflowExecutionTerminatedEvent = hasAttributes('workflowExecutionTerminatedEventAttributes');
export const isWorkflowExecutionCancelRequestedEvent = hasAttributes('workflowExecutionCancelRequestedEventAttributes');
export const isWorkflowExecutionCanceledEvent = hasAttributes('workflowExecutionCanceledEventAttributes');
export const isRequestCancelExternalWorkflowExecutionInitiatedEvent = hasAttributes('requestCancelExternalWorkflowExecutionInitiatedEventAttributes');
export const isRequestCancelExternalWorkflowExecutionFailedEvent = hasAttributes('requestCancelExternalWorkflowExecutionFailedEventAttributes');
export const isExternalWorkflowExecutionCancelRequestedEvent = hasAttributes('externalWorkflowExecutionCancelRequestedEventAttributes');
export const isWorkflowExecutionContinuedAsNewEvent = hasAttributes('workflowExecutionContinuedAsNewEventAttributes');
export const isStartChildWorkflowExecutionInitiatedEvent = hasAttributes('startChildWorkflowExecutionInitiatedEventAttributes');
export const isStartChildWorkflowExecutionFailedEvent = hasAttributes('startChildWorkflowExecutionFailedEventAttributes');
export const isChildWorkflowExecutionStartedEvent = hasAttributes('childWorkflowExecutionStartedEventAttributes');
export const isChildWorkflowExecutionCompletedEvent = hasAttributes('childWorkflowExecutionCompletedEventAttributes');
export const isChildWorkflowExecutionFailedEvent = hasAttributes('childWorkflowExecutionFailedEventAttributes');
export const isChildWorkflowExecutionCanceledEvent = hasAttributes('childWorkflowExecutionCanceledEventAttributes');
export const isChildWorkflowExecutionTimedOutEvent = hasAttributes('childWorkflowExecutionTimedOutEventAttributes');
export const isChildWorkflowExecutionTerminatedEvent = hasAttributes('childWorkflowExecutionTerminatedEventAttributes');
export const isSignalExternalWorkflowExecutionInitiatedEvent = hasAttributes('signalExternalWorkflowExecutionInitiatedEventAttributes');
export const isSignalExternalWorkflowExecutionFailedEvent = hasAttributes('signalExternalWorkflowExecutionFailedEventAttributes');
export const isExternalWorkflowExecutionSignaledEvent = hasAttributes('externalWorkflowExecutionSignaledEventAttributes');
export const isUpsertWorkflowSearchAttributesEvent = hasAttributes('upsertWorkflowSearchAttributesEventAttributes');
export const isResetEvent = (event) => {
    return validResetEventTypes.includes(event.eventType);
};
const localActivityMarkerNames = ['LocalActivity', 'core_local_activity'];
export const isLocalActivityMarkerEvent = (event) => {
    if (!isMarkerRecordedEvent(event))
        return false;
    if (!localActivityMarkerNames.includes(event.markerRecordedEventAttributes.markerName)) {
        return false;
    }
    return true;
};
export const isWorkflowExecutionUpdateAcceptedEvent = hasAttributes('workflowExecutionUpdateAcceptedEventAttributes');
export const isWorkflowExecutionUpdateAdmittedEvent = hasAttributes('workflowExecutionUpdateAdmittedEventAttributes');
export const isWorkflowExecutionUpdateCompletedEvent = hasAttributes('workflowExecutionUpdateCompletedEventAttributes');
export const isFailedWorkflowExecutionUpdateCompletedEvent = (event) => {
    var _a;
    return isWorkflowExecutionUpdateCompletedEvent(event) &&
        Boolean((_a = event.workflowExecutionUpdateCompletedEventAttributes.outcome) === null || _a === void 0 ? void 0 : _a.failure);
};
export const isNexusOperationScheduledEvent = hasAttributes('nexusOperationScheduledEventAttributes');
export const isNexusOperationStartedEvent = hasAttributes('nexusOperationStartedEventAttributes');
export const isNexusOperationCompletedEvent = hasAttributes('nexusOperationCompletedEventAttributes');
export const isNexusOperationFailedEvent = hasAttributes('nexusOperationFailedEventAttributes');
export const isNexusOperationCanceledEvent = hasAttributes('nexusOperationCanceledEventAttributes');
export const isNexusOperationTimedOutEvent = hasAttributes('nexusOperationTimedOutEventAttributes');
export const isNexusOperationCancelRequestedEvent = hasAttributes('nexusOperationCancelRequestedEventAttributes');
