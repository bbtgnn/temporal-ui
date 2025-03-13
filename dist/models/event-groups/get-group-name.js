import { formatDurationAbbreviated } from '../../utilities/format-time';
import { getSummaryAttribute } from '../../utilities/get-single-attribute-for-event';
import { isActivityTaskScheduledEvent, isLocalActivityMarkerEvent, isMarkerRecordedEvent, isNexusOperationScheduledEvent, isNexusOperationStartedEvent, isSignalExternalWorkflowExecutionInitiatedEvent, isStartChildWorkflowExecutionInitiatedEvent, isTimerStartedEvent, isWorkflowExecutionSignaledEvent, isWorkflowExecutionUpdateAcceptedEvent, } from '../../utilities/is-event-type';
export const getEventGroupName = (event) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    if (!event)
        return '';
    if (isActivityTaskScheduledEvent(event)) {
        return (_b = (_a = event.activityTaskScheduledEventAttributes) === null || _a === void 0 ? void 0 : _a.activityType) === null || _b === void 0 ? void 0 : _b.name;
    }
    if (isTimerStartedEvent(event)) {
        return `${(_c = event.timerStartedEventAttributes) === null || _c === void 0 ? void 0 : _c.timerId} (${formatDurationAbbreviated((_d = event.timerStartedEventAttributes) === null || _d === void 0 ? void 0 : _d.startToFireTimeout)})`;
    }
    if (isSignalExternalWorkflowExecutionInitiatedEvent(event)) {
        return (_e = event.signalExternalWorkflowExecutionInitiatedEventAttributes) === null || _e === void 0 ? void 0 : _e.signalName;
    }
    if (isWorkflowExecutionSignaledEvent(event)) {
        return (_f = event.workflowExecutionSignaledEventAttributes) === null || _f === void 0 ? void 0 : _f.signalName;
    }
    if (isMarkerRecordedEvent(event)) {
        if (isLocalActivityMarkerEvent(event)) {
            return 'Local Activity';
        }
        return (_g = event.markerRecordedEventAttributes) === null || _g === void 0 ? void 0 : _g.markerName;
    }
    if (isStartChildWorkflowExecutionInitiatedEvent(event)) {
        return (_j = (_h = event.startChildWorkflowExecutionInitiatedEventAttributes) === null || _h === void 0 ? void 0 : _h.workflowType) === null || _j === void 0 ? void 0 : _j.name;
    }
    if (isWorkflowExecutionUpdateAcceptedEvent(event)) {
        return (_m = (_l = (_k = event.workflowExecutionUpdateAcceptedEventAttributes) === null || _k === void 0 ? void 0 : _k.acceptedRequest) === null || _l === void 0 ? void 0 : _l.input) === null || _m === void 0 ? void 0 : _m.name;
    }
    if (isNexusOperationScheduledEvent(event)) {
        return `${event.nexusOperationScheduledEventAttributes.service}.${event.nexusOperationScheduledEventAttributes.operation}`;
    }
};
export const getEventGroupLabel = (event) => {
    if (!event)
        return '';
    if (isActivityTaskScheduledEvent(event)) {
        return 'Activity';
    }
    if (isTimerStartedEvent(event)) {
        return 'Timer';
    }
    if (isSignalExternalWorkflowExecutionInitiatedEvent(event)) {
        return 'Signal';
    }
    if (isWorkflowExecutionSignaledEvent(event)) {
        return 'Signal received';
    }
    if (isLocalActivityMarkerEvent(event)) {
        return 'Local Activity';
    }
    if (isMarkerRecordedEvent(event)) {
        return 'Marker';
    }
    if (isStartChildWorkflowExecutionInitiatedEvent(event)) {
        return 'Child Workflow';
    }
    if (isWorkflowExecutionUpdateAcceptedEvent(event)) {
        return 'Workflow Update';
    }
    if (isNexusOperationScheduledEvent(event) ||
        isNexusOperationStartedEvent(event)) {
        return 'Nexus Operation';
    }
};
export const getEventGroupDisplayName = (event) => {
    var _a, _b, _c;
    if (!event)
        return '';
    if (isLocalActivityMarkerEvent(event)) {
        return (_c = (_b = (_a = getSummaryAttribute(event)) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.toString()) !== null && _c !== void 0 ? _c : 'Local Activity';
    }
    return getEventGroupName(event);
};
