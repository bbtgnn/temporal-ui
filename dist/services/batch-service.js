import { get } from 'svelte/store';
import { Action } from '../models/workflow-actions';
import { getAuthUser } from '../stores/auth-user';
import { inProgressBatchOperation } from '../stores/batch-operations';
import { temporalVersion } from '../stores/versions';
import { stringifyWithBigInt } from '../utilities/parse-with-big-int';
import { requestFromAPI } from '../utilities/request-from-api';
import { routeForApi } from '../utilities/route-for-api';
import { toBatchOperationStateReadable, toBatchOperationTypeReadable, } from '../utilities/screaming-enums';
import { isVersionNewer } from '../utilities/version-check';
// https://github.com/temporalio/api/blob/master/temporal/api/enums/v1/reset.proto
var ResetType;
(function (ResetType) {
    ResetType[ResetType["RESET_TYPE_FIRST_WORKFLOW_TASK"] = 1] = "RESET_TYPE_FIRST_WORKFLOW_TASK";
    ResetType[ResetType["RESET_TYPE_LAST_WORKFLOW_TASK"] = 2] = "RESET_TYPE_LAST_WORKFLOW_TASK";
})(ResetType || (ResetType = {}));
const queryFromWorkflows = (workflowExecutions) => {
    const runIds = workflowExecutions.map((wf) => wf.runId);
    return runIds.reduce((queryString, id, index, arr) => {
        queryString += `RunId="${id}"`;
        if (index !== arr.length - 1) {
            queryString += ' OR ';
        }
        return queryString;
    }, '');
};
const batchActionToOperation = (action, resetType) => {
    const identity = getAuthUser().email;
    switch (action) {
        case Action.Cancel:
            return {
                cancellationOperation: { identity },
            };
        case Action.Terminate:
            return {
                terminationOperation: { identity },
            };
        case Action.Reset: {
            const options = resetType === 'first'
                ? { firstWorkflowTask: {} }
                : { lastWorkflowTask: {} };
            return {
                resetOperation: {
                    identity,
                    // options is a new field for server versions 1.23 and later
                    options,
                    // resetType is a deprecated field for server versions 1.23 and earlier
                    resetType: resetType === 'first'
                        ? ResetType.RESET_TYPE_FIRST_WORKFLOW_TASK
                        : ResetType.RESET_TYPE_LAST_WORKFLOW_TASK,
                },
            };
        }
    }
};
const toWorkflowExecutionInput = ({ id, runId, }) => ({ workflowId: id, runId });
const createBatchOperationRequest = (action, options) => {
    const body = {
        jobId: options.jobId,
        namespace: options.namespace,
        reason: options.reason,
        ...batchActionToOperation(action, options.resetType),
    };
    if (options.workflows) {
        if (isVersionNewer(get(temporalVersion), '1.19')) {
            return {
                ...body,
                executions: options.workflows.map(toWorkflowExecutionInput),
            };
        }
        else {
            return {
                ...body,
                visibilityQuery: queryFromWorkflows(options.workflows),
            };
        }
    }
    else if (options.query) {
        return {
            ...body,
            visibilityQuery: options.query,
        };
    }
};
export async function batchCancelWorkflows(options) {
    const route = routeForApi('batch-operations', {
        namespace: options.namespace,
        batchJobId: options.jobId,
    });
    const body = createBatchOperationRequest(Action.Cancel, options);
    await requestFromAPI(route, {
        options: {
            method: 'POST',
            body: stringifyWithBigInt(body),
        },
        notifyOnError: false,
    });
    inProgressBatchOperation.set({
        jobId: body.jobId,
        namespace: body.namespace,
    });
}
export async function batchTerminateWorkflows(options) {
    const route = routeForApi('batch-operations', {
        namespace: options.namespace,
        batchJobId: options.jobId,
    });
    const body = createBatchOperationRequest(Action.Terminate, options);
    await requestFromAPI(route, {
        options: {
            method: 'POST',
            body: stringifyWithBigInt(body),
        },
        notifyOnError: false,
    });
    inProgressBatchOperation.set({
        jobId: body.jobId,
        namespace: body.namespace,
    });
}
export const batchResetWorkflows = async (options) => {
    const route = routeForApi('batch-operations', {
        namespace: options.namespace,
        batchJobId: options.jobId,
    });
    const body = createBatchOperationRequest(Action.Reset, options);
    await requestFromAPI(route, {
        options: {
            method: 'POST',
            body: stringifyWithBigInt(body),
        },
        notifyOnError: false,
    });
    inProgressBatchOperation.set({
        jobId: body.jobId,
        namespace: body.namespace,
    });
};
export async function pollBatchOperation({ namespace, jobId, }) {
    return new Promise((resolve, reject) => {
        describeBatchOperation({ namespace, jobId }).then(({ state, completeOperationCount }) => {
            if (state === 'Failed') {
                reject();
            }
            else if (state !== 'Running') {
                resolve(completeOperationCount);
            }
            else {
                setTimeout(() => {
                    try {
                        resolve(pollBatchOperation({ namespace, jobId }));
                    }
                    catch {
                        reject();
                    }
                }, 5000);
            }
        });
    });
}
export async function describeBatchOperation({ jobId, namespace }, request = fetch) {
    const route = routeForApi('batch-operations', {
        namespace,
        batchJobId: jobId,
    });
    const response = await requestFromAPI(route, {
        request,
    });
    return toBatchOperationDetails(response);
}
const toBatchOperationDetails = (apiBatchOperationDetails) => {
    var _a, _b, _c;
    return {
        ...apiBatchOperationDetails,
        operationType: toBatchOperationTypeReadable(apiBatchOperationDetails.operationType),
        state: toBatchOperationStateReadable(apiBatchOperationDetails.state),
        startTime: apiBatchOperationDetails.startTime,
        closeTime: apiBatchOperationDetails.closeTime,
        totalOperationCount: parseInt((_a = apiBatchOperationDetails === null || apiBatchOperationDetails === void 0 ? void 0 : apiBatchOperationDetails.totalOperationCount) !== null && _a !== void 0 ? _a : '0', 10),
        completeOperationCount: parseInt((_b = apiBatchOperationDetails === null || apiBatchOperationDetails === void 0 ? void 0 : apiBatchOperationDetails.completeOperationCount) !== null && _b !== void 0 ? _b : '0', 10),
        failureOperationCount: parseInt((_c = apiBatchOperationDetails === null || apiBatchOperationDetails === void 0 ? void 0 : apiBatchOperationDetails.failureOperationCount) !== null && _c !== void 0 ? _c : '0', 10),
    };
};
export async function listBatchOperations(namespace, request = fetch) {
    const route = routeForApi('batch-operations.list', {
        namespace,
        batchJobId: '',
    });
    const response = await requestFromAPI(route, {
        request,
    });
    return {
        nextPageToken: response.nextPageToken,
        operations: response.operationInfo
            ? response.operationInfo.map(toBatchOperationInfo)
            : [],
    };
}
const toBatchOperationInfo = (apiBatchOperationInfo) => {
    return {
        startTime: apiBatchOperationInfo.startTime,
        closeTime: apiBatchOperationInfo.closeTime,
        jobId: apiBatchOperationInfo.jobId,
        state: toBatchOperationStateReadable(apiBatchOperationInfo.state),
    };
};
