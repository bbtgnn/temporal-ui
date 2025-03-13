import { isActivityTaskScheduledEvent, isLocalActivityMarkerEvent, isMarkerRecordedEvent, isNexusOperationScheduledEvent, isSignalExternalWorkflowExecutionInitiatedEvent, isStartChildWorkflowExecutionInitiatedEvent, isTimerStartedEvent, isWorkflowExecutionSignaledEvent, isWorkflowExecutionUpdateAcceptedEvent, isWorkflowTaskScheduledEvent, } from '../../utilities/is-event-type';
import { eventIsCanceled, eventIsFailureOrTimedOut, eventIsTerminated, } from './get-event-in-group';
import { getGroupId } from './get-group-id';
import { getEventGroupDisplayName, getEventGroupLabel, getEventGroupName, } from './get-group-name';
import { getLastEvent } from './get-last-event';
const createGroupFor = (event) => {
    const id = getGroupId(event);
    const name = getEventGroupName(event);
    const label = getEventGroupLabel(event);
    const displayName = getEventGroupDisplayName(event);
    const { timestamp, category, classification } = event;
    const groupEvents = new Map();
    const groupEventIds = new Set();
    groupEvents.set(event.id, event);
    groupEventIds.add(event.id);
    return {
        id,
        name,
        label,
        displayName,
        events: groupEvents,
        eventIds: groupEventIds,
        initialEvent: event,
        timestamp,
        category: isLocalActivityMarkerEvent(event) ? 'local-activity' : category,
        classification,
        level: undefined,
        pendingActivity: undefined,
        pendingNexusOperation: undefined,
        userMetadata: event === null || event === void 0 ? void 0 : event.userMetadata,
        get eventTime() {
            var _a;
            return (_a = this.lastEvent) === null || _a === void 0 ? void 0 : _a.eventTime;
        },
        get attributes() {
            var _a;
            return (_a = getLastEvent(this)) === null || _a === void 0 ? void 0 : _a.attributes;
        },
        get eventList() {
            return Array.from(this.events, ([_key, value]) => value);
        },
        get links() {
            return Array.from(this.events, ([_key, value]) => value.links).flat();
        },
        get lastEvent() {
            return getLastEvent(this);
        },
        get finalClassification() {
            return getLastEvent(this).classification;
        },
        get isPending() {
            return (!!this.pendingActivity ||
                !!this.pendingNexusOperation ||
                (isTimerStartedEvent(this.initialEvent) &&
                    this.eventList.length === 1) ||
                (isStartChildWorkflowExecutionInitiatedEvent(this.initialEvent) &&
                    this.eventList.length === 2));
        },
        get isFailureOrTimedOut() {
            return Boolean(this.eventList.find(eventIsFailureOrTimedOut));
        },
        get isCanceled() {
            return Boolean(this.eventList.find(eventIsCanceled));
        },
        get isTerminated() {
            return Boolean(this.eventList.find(eventIsTerminated));
        },
    };
};
export const createEventGroup = (event) => {
    if (isActivityTaskScheduledEvent(event))
        return createGroupFor(event);
    if (isStartChildWorkflowExecutionInitiatedEvent(event))
        return createGroupFor(event);
    if (isTimerStartedEvent(event))
        return createGroupFor(event);
    if (isSignalExternalWorkflowExecutionInitiatedEvent(event))
        return createGroupFor(event);
    if (isWorkflowExecutionSignaledEvent(event))
        return createGroupFor(event);
    if (isMarkerRecordedEvent(event)) {
        if (isLocalActivityMarkerEvent(event)) {
            return createGroupFor(event);
        }
        return createGroupFor(event);
    }
    if (isWorkflowExecutionUpdateAcceptedEvent(event))
        return createGroupFor(event);
    if (isNexusOperationScheduledEvent(event))
        return createGroupFor(event);
};
export const createWorkflowTaskGroup = (event) => {
    if (isWorkflowTaskScheduledEvent(event))
        return createGroupFor(event);
};
