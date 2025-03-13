import { isEvent } from '../../models/event-history';
import { formatGroupAttributes, formatPendingAttributes, } from '../../utilities/format-event-attributes';
import { getGroupForEventOrPendingEvent } from '../../utilities/pending-activities';
const baseRadius = 6;
export const TimelineConfig = {
    height: baseRadius * 5,
    gutter: baseRadius * 8,
    radius: baseRadius * 2,
    fontSizeRatio: baseRadius * 4,
};
export const HistoryConfig = {
    height: 32,
    gutter: baseRadius * 2,
    radius: 4,
    fontSizeRatio: baseRadius * 4,
};
export const DetailsConfig = {
    height: baseRadius * 4,
    gutter: baseRadius * 3,
    radius: baseRadius,
    fontSizeRatio: baseRadius * 4,
};
export const CategoryIcon = {
    workflow: 'workflow',
    signal: 'signal',
    activity: 'activity',
    nexus: 'nexus',
    timer: 'retention',
    'local-activity': 'feather',
    'child-workflow': 'relationship',
    update: 'update',
    other: 'terminal',
};
export const timelineTextPosition = (points, y, width, isPending, config) => {
    const { radius } = config;
    const firstPoint = points[0];
    const lastPoint = points[points.length - 1];
    let backdrop = false;
    let textAnchor = 'start';
    let textIndex = 0;
    const textToLeft = firstPoint > (1 / 2) * width;
    let textToRight = !textToLeft && lastPoint < (2 / 3) * width && !isPending;
    if (textToLeft)
        textAnchor = 'end';
    if (textToRight)
        textIndex = points.indexOf(lastPoint);
    const offset = 1.5 * radius;
    let textX = textToRight ? lastPoint + offset : firstPoint - offset;
    // Pending or long events
    if (!textToRight && !textToLeft) {
        backdrop = true;
        textToRight = true;
        textX = firstPoint + offset;
        if (points.length === 2 && isPending) {
            const gap = points[1] - points[0];
            if (gap < width - points[1]) {
                textIndex = 1;
                textX = points[1] + offset;
            }
        }
        if (points.length > 2) {
            const gap1 = points[1] - points[0];
            const gap2 = points[2] - points[1];
            if (gap2 > gap1) {
                textIndex = 1;
                textX = points[1] + offset;
            }
        }
    }
    const textPosition = [textX, y];
    return { textPosition, textIndex, textAnchor, backdrop };
};
export const isMiddleEvent = (event, groups) => {
    const group = groups.find((g) => g.eventIds.has(event.id));
    if (!group)
        return false;
    const ids = Array.from(group.eventIds);
    return ids.indexOf(event.id) === 1 && group.eventList.length === 3;
};
const pairIsConsecutive = (x, y) => {
    return parseInt(x) === parseInt(y) - 1;
};
const isConsecutiveGroup = (group) => {
    const ids = Array.from(group.eventIds);
    if (ids.length === 1)
        return true;
    if (ids.length === 2)
        return pairIsConsecutive(ids[0], ids[1]);
    if (ids.length === 3) {
        return (pairIsConsecutive(ids[0], ids[1]) && pairIsConsecutive(ids[1], ids[2]));
    }
};
const getOpenGroups = (event, groups) => {
    const group = getGroupForEventOrPendingEvent(groups, event);
    if (group.level !== undefined)
        return group.level;
    const pendingGroups = groups
        .filter((g) => g.isPending && g.id !== group.id)
        .filter((g) => parseInt(g.initialEvent.id) < parseInt(group.initialEvent.id));
    const nonPendingGroups = groups
        .filter((g) => g.eventList.length > 1 && !g.isPending && g.id !== group.id)
        .filter((g) => parseInt(g.initialEvent.id) < parseInt(group.initialEvent.id))
        .filter((g) => parseInt(g.lastEvent.id) > parseInt(group.initialEvent.id));
    const openGroups = [...pendingGroups, ...nonPendingGroups];
    if (!openGroups.length && isConsecutiveGroup(group)) {
        group.level = 0;
    }
    group.level = openGroups.length + 1;
    return group.level;
};
export const getNextDistanceAndOffset = (history, event, groups, height, sort) => {
    const group = getGroupForEventOrPendingEvent(groups, event);
    let nextDistance = 0;
    let offset = 0;
    if (!group) {
        return { nextDistance, offset };
    }
    if (group.eventList.length === 1 && !group.isPending) {
        return { nextDistance, offset };
    }
    const currentIndex = isEvent(event) && group.eventList.indexOf(event);
    const nextEvent = isEvent(event) && group.eventList[currentIndex + 1];
    if (!isEvent(event) || event.category !== 'workflow') {
        offset = getOpenGroups(event, groups);
    }
    if (!nextEvent && !group.isPending) {
        return { nextDistance, offset };
    }
    let diff = 0;
    if (nextEvent) {
        diff = parseInt(nextEvent.id) - parseInt(event.id);
    }
    else if (group.isPending && isEvent(event)) {
        diff = history.length - parseInt(event.id) + 2;
    }
    const distance = diff * height;
    nextDistance = sort === 'ascending' ? distance : -distance;
    return { nextDistance, offset };
};
export const getStatusColor = (status) => {
    switch (status) {
        case 'Completed':
            return '#00f37e';
        case 'Failed':
        case 'Terminated':
            return '#ff4518';
        case 'Signaled':
            return '#d300d8';
        case 'Fired':
            return '#f8a208';
        case 'TimedOut':
            return '#F97316';
        case 'Canceled':
            return '#fed64b';
        case 'Running':
            return '#3b82f6';
        case 'Pending':
            return '#a78bfa';
        case 'Retrying':
            return '#FF9B70';
        default:
            return '#ffffff';
    }
};
export const getCategoryColor = (type) => {
    switch (type) {
        case 'other':
        case 'local-activity':
            return '#ebebeb';
        case 'timer':
            return '#fbbf24';
        case 'signal':
            return '#ec4899';
        case 'activity':
            return '#a78bfa';
        case 'workflow':
            return '#059669';
        case 'child-workflow':
            return '#67e4f9';
        case 'update':
            return '#FF9B70';
        case 'nexus':
            return '#3b82f6';
        default:
            return '#ebebeb';
    }
};
export const mergeEventGroupDetails = (group) => {
    const attributes = formatGroupAttributes(group);
    return group.pendingActivity
        ? { ...formatPendingAttributes(group.pendingActivity), ...attributes }
        : attributes;
};
export const staticCodeBlockHeight = 200;
export const getPendingEventDetailHeight = (event) => {
    const textHeight = 5 * DetailsConfig.fontSizeRatio;
    let codeBlockHeight = 0;
    if (event === null || event === void 0 ? void 0 : event.heartbeatDetails)
        codeBlockHeight += staticCodeBlockHeight;
    if (event === null || event === void 0 ? void 0 : event.lastFailure)
        codeBlockHeight += staticCodeBlockHeight;
    return codeBlockHeight + textHeight + 2 * DetailsConfig.fontSizeRatio;
};
