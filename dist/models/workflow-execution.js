import { decodePayload } from '../utilities/decode-payload';
import { toCallbackStateReadable, toPendingNexusOperationStateReadable, toWorkflowStatusReadable, } from '../utilities/screaming-enums';
import { writeActionsAreAllowed } from '../utilities/write-actions-are-allowed';
import { simplifyAttributes } from './event-history/simplify-attributes';
export const toPendingActivities = (pendingActivity = []) => {
    return pendingActivity.map((activity) => {
        const attributes = simplifyAttributes(activity, true);
        const id = activity.activityId;
        return { ...attributes, id };
    });
};
const toPendingNexusOperations = (operations) => {
    if (!operations)
        return [];
    return operations.map((operation) => {
        return {
            ...operation,
            state: toPendingNexusOperationStateReadable(operation.state),
        };
    });
};
const toCallbacks = (callbacks) => {
    if (!callbacks)
        return [];
    return callbacks.map((callback) => {
        return {
            ...callback,
            state: toCallbackStateReadable(callback.state),
        };
    });
};
const toSearchAttributes = (apiSearchAttributes) => {
    if (!apiSearchAttributes || !apiSearchAttributes.indexedFields)
        return {};
    const decoded = Object.entries(apiSearchAttributes.indexedFields).reduce((searchAttributes, [searchAttributeName, payload]) => {
        return {
            ...searchAttributes,
            [searchAttributeName]: decodePayload(payload),
        };
    }, {});
    return {
        indexedFields: decoded,
    };
};
export const toWorkflowExecution = (response) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
    const searchAttributes = toSearchAttributes(response.workflowExecutionInfo.searchAttributes);
    const memo = response.workflowExecutionInfo.memo;
    const name = response.workflowExecutionInfo.type.name;
    const id = response.workflowExecutionInfo.execution.workflowId;
    const runId = response.workflowExecutionInfo.execution.runId;
    const startTime = response.workflowExecutionInfo.startTime;
    const endTime = response.workflowExecutionInfo.closeTime;
    const executionTime = response.workflowExecutionInfo.executionTime;
    const status = toWorkflowStatusReadable(response.workflowExecutionInfo.status);
    const isRunning = status === 'Running';
    const historyEvents = response.workflowExecutionInfo.historyLength;
    const historySizeBytes = response.workflowExecutionInfo.historySizeBytes;
    const url = `/workflows/${id}/${runId}`;
    const taskQueue = ((_b = (_a = response === null || response === void 0 ? void 0 : response.executionConfig) === null || _a === void 0 ? void 0 : _a.taskQueue) === null || _b === void 0 ? void 0 : _b.name) ||
        ((_c = response === null || response === void 0 ? void 0 : response.workflowExecutionInfo) === null || _c === void 0 ? void 0 : _c.taskQueue);
    const mostRecentWorkerVersionStamp = (_d = response === null || response === void 0 ? void 0 : response.workflowExecutionInfo) === null || _d === void 0 ? void 0 : _d.mostRecentWorkerVersionStamp;
    const assignedBuildId = (_e = response === null || response === void 0 ? void 0 : response.workflowExecutionInfo) === null || _e === void 0 ? void 0 : _e.assignedBuildId;
    const parentNamespaceId = (_f = response === null || response === void 0 ? void 0 : response.workflowExecutionInfo) === null || _f === void 0 ? void 0 : _f.parentNamespaceId;
    const parent = (_g = response === null || response === void 0 ? void 0 : response.workflowExecutionInfo) === null || _g === void 0 ? void 0 : _g.parentExecution;
    const stateTransitionCount = response.workflowExecutionInfo.stateTransitionCount;
    const defaultWorkflowTaskTimeout = (_h = response.executionConfig) === null || _h === void 0 ? void 0 : _h.defaultWorkflowTaskTimeout;
    const pendingActivities = toPendingActivities(response.pendingActivities);
    const pendingChildren = (_j = response === null || response === void 0 ? void 0 : response.pendingChildren) !== null && _j !== void 0 ? _j : [];
    const pendingNexusOperations = toPendingNexusOperations(response === null || response === void 0 ? void 0 : response.pendingNexusOperations);
    const pendingWorkflowTask = response === null || response === void 0 ? void 0 : response.pendingWorkflowTask;
    const callbacks = toCallbacks(response === null || response === void 0 ? void 0 : response.callbacks);
    const rootExecution = (_k = response.workflowExecutionInfo) === null || _k === void 0 ? void 0 : _k.rootExecution;
    const versioningInfo = (_l = response.workflowExecutionInfo) === null || _l === void 0 ? void 0 : _l.versioningInfo;
    let summary;
    let details;
    if ((_m = response === null || response === void 0 ? void 0 : response.executionConfig) === null || _m === void 0 ? void 0 : _m.userMetadata) {
        summary = (_p = (_o = response === null || response === void 0 ? void 0 : response.executionConfig) === null || _o === void 0 ? void 0 : _o.userMetadata) === null || _p === void 0 ? void 0 : _p.summary;
        details = (_r = (_q = response === null || response === void 0 ? void 0 : response.executionConfig) === null || _q === void 0 ? void 0 : _q.userMetadata) === null || _r === void 0 ? void 0 : _r.details;
    }
    return {
        name,
        id,
        runId,
        startTime,
        endTime,
        executionTime,
        status,
        historyEvents,
        historySizeBytes,
        searchAttributes,
        memo,
        rootExecution,
        url,
        taskQueue,
        assignedBuildId,
        mostRecentWorkerVersionStamp,
        pendingActivities,
        pendingChildren,
        pendingNexusOperations,
        pendingWorkflowTask,
        callbacks,
        versioningInfo,
        summary,
        details,
        parentNamespaceId,
        parent,
        stateTransitionCount,
        isRunning,
        defaultWorkflowTaskTimeout,
        get canBeTerminated() {
            return isRunning && writeActionsAreAllowed();
        },
    };
};
export const toWorkflowExecutions = (response) => {
    return (response.executions || []).map((workflowExecutionInfo) => toWorkflowExecution({ workflowExecutionInfo }));
};
