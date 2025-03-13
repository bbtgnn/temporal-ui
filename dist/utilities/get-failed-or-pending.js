import { isEventGroup } from '../models/event-groups';
import { isEvent } from '../models/event-history';
import { isLocalActivityMarkerEvent } from './is-event-type';
import { isPendingActivity, isPendingNexusOperation, } from './is-pending-activity';
const isFailedLocalActivity = (event) => {
    return (isLocalActivityMarkerEvent(event) &&
        event.markerRecordedEventAttributes.failure);
};
const isFailedLocalActivityGroup = (group) => {
    return isFailedLocalActivity(group.initialEvent);
};
const isFailedEvent = (iterable) => {
    return (isEvent(iterable) &&
        (iterable.classification === 'Failed' ||
            iterable.classification === 'TimedOut' ||
            isFailedLocalActivity(iterable)));
};
const isPendingEvent = (iterable) => {
    return isPendingActivity(iterable) || isPendingNexusOperation(iterable);
};
const isFailedEventGroup = (iterable) => {
    return (isEventGroup(iterable) &&
        (iterable.classification === 'Failed' ||
            iterable.classification === 'TimedOut' ||
            isFailedLocalActivityGroup(iterable)));
};
const isPendingEventGroup = (iterable) => {
    return isEventGroup(iterable) && iterable.isPending;
};
export const getFailedOrPendingEvents = (items, filterForFailedOrPending) => {
    if (!filterForFailedOrPending)
        return items;
    return items.filter((item) => isFailedEvent(item) ||
        isPendingEvent(item) ||
        isFailedEventGroup(item) ||
        isPendingEventGroup(item));
};
export const getFailedOrPendingGroups = (items, filterForFailedOrPending) => {
    if (!filterForFailedOrPending)
        return items;
    return items.filter((item) => isFailedEventGroup(item) || isPendingEventGroup(item));
};
