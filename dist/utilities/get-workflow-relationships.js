import { has } from './has';
import { isString } from './is';
import { isChildWorkflowExecutionCanceledEvent, isChildWorkflowExecutionCompletedEvent, isChildWorkflowExecutionFailedEvent, isChildWorkflowExecutionTerminatedEvent, isChildWorkflowExecutionTimedOutEvent, isWorkflowExecutionStartedEvent, } from './is-event-type';
const getNewExecutionId = (events) => {
    for (const event of events) {
        if (has(event.attributes, 'newExecutionRunId') &&
            isString(event.attributes.newExecutionRunId)) {
            return event.attributes.newExecutionRunId;
        }
    }
};
export const isChildWorkflowClosedEvent = (event) => {
    return (isChildWorkflowExecutionCompletedEvent(event) ||
        isChildWorkflowExecutionFailedEvent(event) ||
        isChildWorkflowExecutionCanceledEvent(event) ||
        isChildWorkflowExecutionTimedOutEvent(event) ||
        isChildWorkflowExecutionTerminatedEvent(event));
};
export const getWorkflowRelationships = (workflow, fullEventHistory, namespaces) => {
    var _a, _b, _c, _d, _e, _f;
    const children = fullEventHistory.filter((event) => isChildWorkflowClosedEvent(event));
    const hasChildren = !!(workflow === null || workflow === void 0 ? void 0 : workflow.pendingChildren.length) || !!children.length;
    const parent = workflow === null || workflow === void 0 ? void 0 : workflow.parent;
    const parentNamespaceName = (_b = (_a = namespaces === null || namespaces === void 0 ? void 0 : namespaces.find((namespace) => {
        return namespace.namespaceInfo.id === workflow.parentNamespaceId;
    })) === null || _a === void 0 ? void 0 : _a.namespaceInfo) === null || _b === void 0 ? void 0 : _b.name;
    const workflowExecutionStartedEvent = fullEventHistory.find(isWorkflowExecutionStartedEvent);
    const newExecutionRunId = getNewExecutionId(fullEventHistory);
    const firstExecutionRunId = (_c = workflowExecutionStartedEvent === null || workflowExecutionStartedEvent === void 0 ? void 0 : workflowExecutionStartedEvent.attributes) === null || _c === void 0 ? void 0 : _c.firstExecutionRunId;
    const first = firstExecutionRunId === (workflow === null || workflow === void 0 ? void 0 : workflow.runId) ? undefined : firstExecutionRunId;
    const previous = (_d = workflowExecutionStartedEvent === null || workflowExecutionStartedEvent === void 0 ? void 0 : workflowExecutionStartedEvent.attributes) === null || _d === void 0 ? void 0 : _d.continuedExecutionRunId;
    let scheduleId = '';
    const temporalScheduledById = (_f = (_e = workflow === null || workflow === void 0 ? void 0 : workflow.searchAttributes) === null || _e === void 0 ? void 0 : _e.indexedFields) === null || _f === void 0 ? void 0 : _f.TemporalScheduledById;
    if (typeof temporalScheduledById === 'string') {
        scheduleId = temporalScheduledById;
    }
    const hasRelationships = !!(parent ||
        hasChildren ||
        first ||
        previous ||
        newExecutionRunId ||
        scheduleId);
    const relationshipCount = (parent ? 1 : 0) +
        (workflow === null || workflow === void 0 ? void 0 : workflow.pendingChildren.length) +
        children.length +
        (first ? 1 : 0) +
        (previous ? 1 : 0) +
        (newExecutionRunId ? 1 : 0) +
        (scheduleId ? 1 : 0);
    return {
        hasRelationships,
        hasChildren,
        children,
        first,
        previous,
        parent,
        parentNamespaceName,
        next: newExecutionRunId,
        scheduleId,
        relationshipCount,
    };
};
