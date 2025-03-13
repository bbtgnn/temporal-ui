import { isEvent } from '../models/event-history';
import { capitalize } from './format-camel-case';
import { decodePayload, isSinglePayload } from './decode-payload';
import { has } from './has';
import { isObject } from './is';
import { isLocalActivityMarkerEvent, isWorkflowExecutionUpdateAcceptedEvent, } from './is-event-type';
import { isPendingActivity, isPendingNexusOperation, } from './is-pending-activity';
const emptyAttribute = { key: '', value: '' };
const keysForPlainText = new Set([
    'activityId',
    'attempt',
    'binaryChecksum',
    'identity',
    'parentInitiatedEventId',
    'requestId',
    'scheduledEventId',
    'startedEventId',
    'lastHeartbeatTime',
    'scheduledTime',
    'expirationTime',
]);
export const shouldDisplayAsPlainText = (key) => {
    return keysForPlainText.has(key);
};
const keysToOmitIfNoValue = new Set([
    'suggestContinueAsNew',
    'historySizeBytes',
]);
export const shouldDisplayAttribute = (key, value) => {
    if (value === null)
        return false;
    if (value === undefined)
        return false;
    if (value === '')
        return false;
    if (value === '0s')
        return false;
    if (key === 'type')
        return false;
    if ((!value || value === '0') && keysToOmitIfNoValue.has(key))
        return false;
    return true;
};
export const pendingActivityKeys = [
    'attempt',
    'maximumAttempts',
    'heartbeatDetails',
    'lastHeartbeatTime',
    'lastFailure',
    'lastStartedTime',
    'scheduledTime',
    'expirationTime',
    'lastWorkerIdentity',
];
export const shouldDisplayPendingAttribute = (key) => {
    return pendingActivityKeys.includes(key);
};
export const shouldDisplayGroupAttribute = (key, value) => {
    if (value === null)
        return false;
    if (value === undefined)
        return false;
    if (value === '')
        return false;
    if (value === '0s')
        return false;
    if (key === 'type')
        return false;
    if (key === 'workflowId')
        return false;
    if (key === 'initiatedEventId')
        return false;
    if (key === 'startedEventId')
        return false;
    if (key === 'scheduledEventId')
        return false;
    if (key === 'activityId')
        return false;
    if (key === 'namespace')
        return false;
    if (key === 'namespaceId')
        return false;
    if (key === 'workflowTaskCompletedEventId')
        return false;
    if (key === 'taskQueueKind')
        return false;
    if ((!value || value === '0') && keysToOmitIfNoValue.has(key))
        return false;
    return true;
};
export const shouldDisplayNestedAttribute = (value) => {
    if (value === null)
        return false;
    if (value === undefined)
        return false;
    if (value === '')
        return false;
    if (Array.isArray(value) && !value.length)
        return false;
    return true;
};
export const getCodeBlockValue = (value) => {
    if (typeof value === 'string')
        return value;
    return [value === null || value === void 0 ? void 0 : value.payloads, value === null || value === void 0 ? void 0 : value.indexedFields, value === null || value === void 0 ? void 0 : value.points, value].find((v) => v !== undefined);
};
export const getStackTrace = (value) => {
    if (!isObject(value))
        return undefined;
    if (has(value, 'stackTrace') && value.stackTrace)
        return value.stackTrace;
    for (const key in value) {
        if (isObject(value[key])) {
            return getStackTrace(value[key]);
        }
    }
};
const keysWithExecutionLinks = [
    'baseRunId',
    'continuedExecutionRunId',
    'firstExecutionRunId',
    'newExecutionRunId',
    'newRunId',
    'originalExecutionRunId',
];
export const displayLinkType = (key, attributes) => {
    if (shouldDisplayAsExecutionLink(key))
        return 'execution';
    if (shouldDisplayAsTaskQueueLink(key))
        return 'task-queue';
    if (shouldDisplayChildWorkflowLink(key, attributes))
        return 'child-workflow';
    if (shouldDisplayNexusEndpointLink(key))
        return 'nexus-endpoint';
    return 'none';
};
// For linking to same workflow but different execution
export const shouldDisplayAsExecutionLink = (key) => {
    for (const workflowKey of keysWithExecutionLinks) {
        if (key === workflowKey)
            return true;
    }
    return false;
};
const keysWithTaskQueueLinks = ['taskQueueName'];
export const shouldDisplayAsTaskQueueLink = (key) => {
    for (const taskQueueKey of keysWithTaskQueueLinks) {
        if (key === taskQueueKey)
            return true;
    }
    return false;
};
const keysWithChildExecutionLinks = [
    'workflowExecutionWorkflowId',
    'workflowExecutionRunId',
];
// For linking to a child workflow
export const shouldDisplayChildWorkflowLink = (key, attributes) => {
    const workflowLinkAttributesExist = Boolean((attributes === null || attributes === void 0 ? void 0 : attributes.workflowExecutionWorkflowId) &&
        (attributes === null || attributes === void 0 ? void 0 : attributes.workflowExecutionRunId));
    for (const workflowKey of keysWithChildExecutionLinks) {
        if (key === workflowKey && workflowLinkAttributesExist)
            return true;
    }
    return false;
};
const keysWithNexusEndpointLinks = ['endpointId'];
export const shouldDisplayNexusEndpointLink = (key) => {
    for (const endpointKey of keysWithNexusEndpointLinks) {
        if (key === endpointKey)
            return true;
    }
    return false;
};
export const shouldDisplayAsTime = (key) => {
    var _a;
    return (_a = key === null || key === void 0 ? void 0 : key.toLowerCase()) === null || _a === void 0 ? void 0 : _a.endsWith('time');
};
const formatSummaryValue = (key, value) => {
    if (typeof value === 'object') {
        if (isSinglePayload(value)) {
            return { key, value };
        }
        const [firstKey] = Object.keys(value);
        if (!firstKey) {
            return { key, value: {} };
        }
        if (firstKey === 'payloads') {
            return { key, value };
        }
        return { key: key + capitalize(firstKey), value: value[firstKey] };
    }
    else {
        return { key, value: value.toString() };
    }
};
/**
 * A list of the keys that should be shown in the summary view.
 */
const preferredSummaryKeys = [
    'activityType',
    'signalName',
    'workflowType',
    'result',
    'failure',
    'input',
    'outcome',
    'workflowExecution',
    'taskQueue',
    'startToFireTimeout',
    'attempt',
    'historySizeBytes',
    'identity',
    'parentInitiatedEventId',
    'endpointId',
];
/**
 * Returns that first event attribute that is eligible to be displayed.
 */
const getFirstDisplayAttribute = ({ attributes, }) => {
    for (const [key, value] of Object.entries(attributes)) {
        if (shouldDisplayAttribute(key, value)) {
            return formatSummaryValue(key, value);
        }
    }
};
const getActivityType = (payload) => {
    if (has(payload, 'ActivityType'))
        return payload.ActivityType;
    if (has(payload, 'activity_type'))
        return payload.activity_type;
};
const isJavaSDK = (event) => {
    var _a, _b, _c;
    return !!((_c = (_b = (_a = event.markerRecordedEventAttributes) === null || _a === void 0 ? void 0 : _a.details) === null || _b === void 0 ? void 0 : _b.type) === null || _c === void 0 ? void 0 : _c.payloads);
};
/**
 * Iterates through the keys of an event and compares it with the list of
 * preferred keys. If a preferred key is found, it will be returned.
 * Otherwise, it will return the first eligible event attribute.
 */
export const getEventSummaryAttribute = (event) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    const first = getFirstDisplayAttribute(event);
    if (isLocalActivityMarkerEvent(event)) {
        const payloads = (((_c = (_b = (_a = event.markerRecordedEventAttributes) === null || _a === void 0 ? void 0 : _a.details) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.payloads) ||
            ((_f = (_e = (_d = event.markerRecordedEventAttributes) === null || _d === void 0 ? void 0 : _d.details) === null || _e === void 0 ? void 0 : _e.type) === null || _f === void 0 ? void 0 : _f.payloads) ||
            []);
        const decodedPayloads = payloads.map((p) => decodePayload(p));
        const payload = decodedPayloads === null || decodedPayloads === void 0 ? void 0 : decodedPayloads[0];
        if (isJavaSDK(event) && payload) {
            return formatSummaryValue('ActivityType', payload);
        }
        const activityType = getActivityType(payload);
        if (activityType) {
            return formatSummaryValue('ActivityType', activityType);
        }
    }
    if (isWorkflowExecutionUpdateAcceptedEvent(event)) {
        if ((_j = (_h = (_g = event.attributes) === null || _g === void 0 ? void 0 : _g.acceptedRequest) === null || _h === void 0 ? void 0 : _h.input) === null || _j === void 0 ? void 0 : _j.name) {
            return {
                key: 'name',
                value: event.attributes.acceptedRequest.input.name,
            };
        }
    }
    for (const preferredKey of preferredSummaryKeys) {
        for (const [key, value] of Object.entries(event.attributes)) {
            if (key === preferredKey && shouldDisplayAttribute(key, value)) {
                return formatSummaryValue(key, value);
            }
        }
    }
    return first || emptyAttribute;
};
export const getPendingActivitySummaryAttribute = (event) => {
    return { key: 'attempt', value: event.attempt.toString() };
};
export const getPendingNexusOperationSummaryAttribute = (event) => {
    if (!event.attempt)
        return emptyAttribute;
    return { key: 'attempt', value: event.attempt.toString() };
};
export const getSummaryAttribute = (event) => {
    if (isEvent(event))
        return getEventSummaryAttribute(event);
    if (isPendingActivity(event))
        return getPendingActivitySummaryAttribute(event);
    if (isPendingNexusOperation(event))
        return getPendingNexusOperationSummaryAttribute(event);
    return emptyAttribute;
};
export const getPrimaryAttributeForEvent = (event) => {
    if (!event)
        return emptyAttribute;
    return getSummaryAttribute(event);
};
export const getSecondaryAttributeForEvent = (event, primaryKey) => {
    if (!event || !(event === null || event === void 0 ? void 0 : event.attributes))
        return emptyAttribute;
    for (const preferredKey of preferredSummaryKeys) {
        for (const [key, value] of Object.entries(event.attributes)) {
            if (key === preferredKey &&
                key !== primaryKey &&
                shouldDisplayAttribute(key, value)) {
                return formatSummaryValue(key, value);
            }
        }
    }
    return emptyAttribute;
};
