import { isEvent } from '../models/event-history';
import { isActivityTaskScheduledEvent, isNexusOperationScheduledEvent, } from './is-event-type';
import { isPendingActivity, isPendingNexusOperation, } from './is-pending-activity';
export const getPendingActivity = (event, pendingActivities) => {
    let pendingActivity;
    if (isActivityTaskScheduledEvent(event)) {
        pendingActivity = pendingActivities.find((p) => p.activityId === event.attributes.activityId);
    }
    return pendingActivity;
};
export const isAssociatedPendingActivity = (event, pendingActivity) => {
    if (isActivityTaskScheduledEvent(event) && pendingActivity) {
        return pendingActivity.activityId === event.attributes.activityId;
    }
    return false;
};
export const getPendingNexusOperation = (event, pendingNexusOperations) => {
    let pendingOperation;
    if (isNexusOperationScheduledEvent(event)) {
        pendingOperation = pendingNexusOperations.find((p) => p.scheduledEventId === event.id);
    }
    return pendingOperation;
};
export const getGroupForEventOrPendingEvent = (groups, event) => {
    return groups.find((g) => {
        var _a, _b;
        if (isEvent(event)) {
            return g.eventIds.has(event.id);
        }
        else if (isPendingActivity(event)) {
            return ((_a = g.pendingActivity) === null || _a === void 0 ? void 0 : _a.id) === event.id;
        }
        else if (isPendingNexusOperation(event)) {
            return (((_b = g === null || g === void 0 ? void 0 : g.pendingNexusOperation) === null || _b === void 0 ? void 0 : _b.scheduledEventId) === (event === null || event === void 0 ? void 0 : event.scheduledEventId));
        }
    });
};
