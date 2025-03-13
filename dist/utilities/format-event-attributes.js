import { get } from 'svelte/store';
import { translate } from '../i18n/translate';
import { relativeTime, timeFormat } from '../stores/time-format';
import { capitalize } from './format-camel-case';
import { formatDate } from './format-date';
import { pendingActivityKeys, shouldDisplayAttribute, shouldDisplayGroupAttribute, shouldDisplayNestedAttribute, shouldDisplayPendingAttribute, } from './get-single-attribute-for-event';
const keysToExpand = new Set([
    'taskQueue',
    'retryPolicy',
    'parentWorkflowExecution',
    'workflowExecution',
    'meta',
]);
const keysToFormat = new Set(['maximumAttempts']);
export const formatRetryExpiration = (maxAttempts, expiration) => {
    if (maxAttempts === 0) {
        return translate('workflows.no-expiration');
    }
    return expiration;
};
export const formatAttemptsLeft = (maxAttempts, attempt) => {
    if (!maxAttempts) {
        return translate('workflows.unlimited');
    }
    return maxAttempts - attempt;
};
export const formatMaximumAttempts = (maxAttempts) => {
    if (!maxAttempts) {
        return translate('workflows.unlimited');
    }
    return maxAttempts;
};
const formatValue = (key, value) => {
    if (key === 'maximumAttempts' && !value) {
        return translate('workflows.unlimited');
    }
    return value;
};
const formatNestedAttributes = (attributes, key) => {
    if (keysToExpand.has(key) && typeof attributes[key] === 'object') {
        for (const [nestedKey, nestedValue] of Object.entries(attributes[key])) {
            const shouldDisplayNested = shouldDisplayNestedAttribute(nestedValue);
            if (shouldDisplayNested) {
                if (keysToFormat.has(nestedKey)) {
                    attributes[`${key}${capitalize(nestedKey)}`] = formatValue(nestedKey, nestedValue);
                }
                else {
                    attributes[`${key}${capitalize(nestedKey)}`] = nestedValue;
                }
            }
        }
        delete attributes[key];
    }
};
export const formatAttributes = (event) => {
    const attributes = {};
    if (event.attributes) {
        for (const [key, value] of Object.entries(event.attributes)) {
            const shouldDisplay = shouldDisplayAttribute(key, value);
            if (shouldDisplay)
                attributes[key] = value;
            formatNestedAttributes(attributes, key);
        }
    }
    return attributes;
};
export const formatGroupAttributes = (group) => {
    const attributes = {};
    group.eventList.forEach((event) => {
        for (const [key, value] of Object.entries(event.attributes)) {
            const shouldDisplay = shouldDisplayAttribute(key, value);
            if (shouldDisplay)
                attributes[key] = value;
            formatNestedAttributes(attributes, key);
        }
    });
    Object.keys(attributes).forEach((key) => {
        if (!shouldDisplayGroupAttribute(key, attributes[key]))
            delete attributes[key];
    });
    return attributes;
};
export const formatPendingAttributes = (pendingActivity) => {
    const attributes = {};
    const sortedEntries = Object.entries(pendingActivity).sort(([key1], [key2]) => {
        return (pendingActivityKeys.indexOf(key1) - pendingActivityKeys.indexOf(key2));
    });
    for (const [key, value] of sortedEntries) {
        const shouldDisplay = shouldDisplayPendingAttribute(key);
        const formattedValue = key.toLowerCase().includes('time')
            ? formatDate(String(value), get(timeFormat), {
                relative: get(relativeTime),
            })
            : value;
        if (shouldDisplay)
            attributes[key] = formattedValue;
        formatNestedAttributes(attributes, key);
    }
    return attributes;
};
const attributeGroupings = [
    'summary',
    'parent',
    'activity',
    'taskQueue',
    'schedule',
    'retryPolicy',
    'workflow',
    'searchAttributes',
];
export const attributeGroupingProperties = {
    activity: { label: 'events.attribute-group.activity' },
    parent: { label: 'events.attribute-group.parent' },
    retryPolicy: { label: 'events.attribute-group.retry-policy' },
    schedule: { label: 'events.attribute-group.schedule' },
    searchAttributes: {
        label: 'events.attribute-group.search-attributes',
    },
    summary: { label: 'events.attribute-group.summary' },
    taskQueue: { label: 'events.attribute-group.task-queue' },
    workflow: { label: 'events.attribute-group.workflow' },
};
const consolidateActivityGroups = (event, groupedAttributes) => {
    var _a, _b;
    // Move activity group into summary if activity
    if (event.category === 'activity' && ((_a = groupedAttributes === null || groupedAttributes === void 0 ? void 0 : groupedAttributes.activity) === null || _a === void 0 ? void 0 : _a.length)) {
        groupedAttributes.summary = [
            ...groupedAttributes.activity,
            ...groupedAttributes.summary,
        ];
        groupedAttributes.activity = [];
    }
    // Move workflow group into summary if activity
    if (event.category === 'activity' && ((_b = groupedAttributes === null || groupedAttributes === void 0 ? void 0 : groupedAttributes.workflow) === null || _b === void 0 ? void 0 : _b.length)) {
        groupedAttributes.summary = [
            ...groupedAttributes.summary,
            ...groupedAttributes.workflow,
        ];
        groupedAttributes.workflow = [];
    }
};
const consolidateSingleItemGroups = (groupedAttributes) => {
    const keysToIgnore = new Set([
        'summary',
        'searchAttributes',
    ]);
    for (const [key, value] of Object.entries(groupedAttributes)) {
        if (value.length === 1 && !keysToIgnore.has(key)) {
            groupedAttributes.summary = [...groupedAttributes.summary, ...value];
            groupedAttributes[key] = [];
        }
    }
};
export const attributeGroups = (event, attributes) => {
    const groupedAttributes = {};
    attributeGroupings.forEach((group) => {
        if (group === 'summary') {
            groupedAttributes[group] = Object.keys(attributes);
        }
        else {
            groupedAttributes[group] = [];
        }
    });
    for (const key in attributes) {
        const attributeGroup = attributeGroupings.find((group) => key.includes(group));
        if (attributeGroup) {
            groupedAttributes[attributeGroup] = [
                key,
                ...groupedAttributes[attributeGroup],
            ];
            groupedAttributes.summary = groupedAttributes.summary.filter((g) => g !== key);
        }
    }
    consolidateActivityGroups(event, groupedAttributes);
    consolidateSingleItemGroups(groupedAttributes);
    return groupedAttributes;
};
