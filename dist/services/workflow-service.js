import { get } from 'svelte/store';
import { v4 } from 'uuid';
import { page } from '$app/stores';
import { isPayloadInputEncodingType, } from '../components/payload-input-with-encoding.svelte';
import { Action } from '../models/workflow-actions';
import { toWorkflowExecution, toWorkflowExecutions, } from '../models/workflow-execution';
import { isCloud } from '../stores/advanced-visibility';
import { authUser } from '../stores/auth-user';
import { temporalVersion } from '../stores/versions';
import { canFetchChildWorkflows } from '../stores/workflows';
import { ResetReapplyExcludeType, ResetReapplyType, } from '../types';
import { cloneAllPotentialPayloadsWithCodec, decodeSingleReadablePayloadWithCodec, } from '../utilities/decode-payload';
import { encodePayloads, setBase64Payload, } from '../utilities/encode-payload';
import { handleUnauthorizedOrForbiddenError, isForbidden, isUnauthorized, } from '../utilities/handle-error';
import { paginated } from '../utilities/paginated';
import { stringifyWithBigInt } from '../utilities/parse-with-big-int';
import { toListWorkflowQuery } from '../utilities/query/list-workflow-query';
import { requestFromAPI } from '../utilities/request-from-api';
import { base, pathForApi, routeForApi } from '../utilities/route-for-api';
import { isVersionNewer, minimumVersionRequired, } from '../utilities/version-check';
import { formatReason } from '../utilities/workflow-actions';
import { fetchInitialEvent } from './events-service';
export const fetchAllWorkflows = async (namespace, parameters, request = fetch, archived = false) => {
    var _a;
    const rawQuery = parameters.query || toListWorkflowQuery(parameters, archived);
    let query;
    try {
        query = decodeURIComponent(rawQuery);
    }
    catch {
        query = rawQuery;
    }
    const endpoint = archived
        ? 'workflows.archived'
        : 'workflows';
    let error = '';
    const onError = (err) => {
        var _a, _b, _c;
        // Kick out to login if 401/403
        handleUnauthorizedOrForbiddenError(err);
        if (((_a = err === null || err === void 0 ? void 0 : err.body) === null || _a === void 0 ? void 0 : _a.message) || (err === null || err === void 0 ? void 0 : err.status)) {
            error =
                (_c = (_b = err === null || err === void 0 ? void 0 : err.body) === null || _b === void 0 ? void 0 : _b.message) !== null && _c !== void 0 ? _c : `Error fetching workflows: ${err.status}: ${err.statusText}`;
        }
        else {
            error = 'Error fetching workflows: Server failed to respond';
        }
    };
    const route = routeForApi(endpoint, { namespace });
    const { executions, nextPageToken } = (_a = (await requestFromAPI(route, {
        params: { query },
        onError,
        handleError: onError,
        request,
    }))) !== null && _a !== void 0 ? _a : { executions: [], nextPageToken: '' };
    return {
        workflows: toWorkflowExecutions({ executions }),
        nextPageToken: String(nextPageToken),
        error,
    };
};
export const fetchWorkflowForRunId = async ({ namespace, workflowId, url }, request = fetch) => {
    var _a, _b;
    const endpoint = 'workflows';
    const baseUrl = url !== null && url !== void 0 ? url : base(namespace);
    const path = pathForApi(endpoint, { namespace });
    const route = baseUrl + path;
    const { executions } = (_a = (await requestFromAPI(route, {
        params: {
            query: `WorkflowId="${workflowId}"`,
            pageSize: '1',
        },
        request,
    }))) !== null && _a !== void 0 ? _a : { executions: [] };
    const latestExecution = (_b = toWorkflowExecutions({ executions })) === null || _b === void 0 ? void 0 : _b[0];
    return {
        runId: latestExecution === null || latestExecution === void 0 ? void 0 : latestExecution.runId,
    };
};
export const fetchWorkflowForAuthorization = async (namespace, request = fetch, archived = false) => {
    const endpoint = archived
        ? 'workflows.archived'
        : 'workflows';
    let authorized = true;
    const onError = (err) => {
        if (isUnauthorized(err) || isForbidden(err)) {
            authorized = false;
        }
    };
    const route = routeForApi(endpoint, { namespace });
    await requestFromAPI(route, {
        params: { pageSize: '1' },
        onError,
        handleError: onError,
        request,
    });
    return {
        authorized,
    };
};
export const fetchAllArchivedWorkflows = async (namespace, parameters, request = fetch) => {
    return fetchAllWorkflows(namespace, parameters, request, true);
};
export async function fetchWorkflow(parameters, request = fetch) {
    const route = routeForApi('workflow', {
        namespace: parameters.namespace,
        workflowId: parameters.workflowId,
    });
    return requestFromAPI(route, {
        request,
        notifyOnError: false,
        params: {
            'execution.runId': parameters.runId,
        },
    })
        .then((response) => {
        return { workflow: toWorkflowExecution(response) };
    })
        .catch((e) => {
        return { error: e };
    });
}
export async function terminateWorkflow({ workflow, namespace, reason, }) {
    const route = routeForApi('workflow.terminate', {
        namespace,
        workflowId: workflow.id,
    });
    const email = get(authUser).email;
    const formattedReason = formatReason({
        reason,
        action: Action.Terminate,
        email,
    });
    return await requestFromAPI(route, {
        options: {
            method: 'POST',
            body: stringifyWithBigInt({
                reason: formattedReason,
                ...(email && { identity: email }),
            }),
        },
        notifyOnError: false,
        params: {
            'execution.runId': workflow.runId,
        },
    });
}
export async function cancelWorkflow({ namespace, workflow: { id: workflowId, runId } }, request = fetch) {
    const route = routeForApi('workflow.cancel', {
        namespace,
        workflowId,
    });
    return requestFromAPI(route, {
        request,
        notifyOnError: false,
        options: {
            method: 'POST',
        },
        params: {
            'execution.runId': runId,
        },
    });
}
export async function signalWorkflow({ namespace, workflow: { id: workflowId, runId }, name, input, encoding, messageType, }) {
    var _a;
    const route = routeForApi('workflow.signal', {
        namespace,
        workflowId,
        signalName: name,
    });
    const payloads = await encodePayloads({ input, encoding, messageType });
    const settings = get(page).data.settings;
    const version = (_a = settings === null || settings === void 0 ? void 0 : settings.version) !== null && _a !== void 0 ? _a : '';
    const newVersion = isVersionNewer(version, '2.22');
    const body = newVersion
        ? {
            signalName: name,
            workflowExecution: {
                workflowId,
                runId,
            },
            input: {
                payloads,
            },
        }
        : {
            signalName: name,
            input: {
                payloads,
            },
            params: {
                'execution.runId': runId,
            },
        };
    return requestFromAPI(route, {
        notifyOnError: false,
        options: {
            method: 'POST',
            body: stringifyWithBigInt(body),
        },
    });
}
export async function updateWorkflow({ namespace, workflow: { workflowId, runId }, name, identity, updateId, input = '', encoding, }) {
    const route = routeForApi('workflow.update', {
        namespace,
        workflowId,
        updateName: name,
    });
    const payloads = await encodePayloads({ input, encoding });
    const body = {
        workflowExecution: {
            runId,
        },
        request: {
            meta: {
                updateId,
                identity,
            },
            input: {
                args: {
                    payloads,
                },
            },
        },
    };
    return requestFromAPI(route, {
        notifyOnError: false,
        options: {
            method: 'POST',
            body: stringifyWithBigInt(body),
        },
    });
}
export async function resetWorkflow({ namespace, workflow: { id: workflowId, runId }, eventId, reason, includeSignals, excludeSignals, excludeUpdates, }) {
    const route = routeForApi('workflow.reset', {
        namespace,
        workflowId,
    });
    const email = get(authUser).email;
    const formattedReason = formatReason({
        action: Action.Reset,
        reason,
        email,
    });
    const body = {
        workflowExecution: {
            workflowId,
            runId,
        },
        workflowTaskFinishEventId: eventId,
        requestId: v4(),
        reason: formattedReason,
    };
    if (get(isCloud) || minimumVersionRequired('1.24.0', get(temporalVersion))) {
        const resetReapplyExcludeTypes = [];
        if (!excludeSignals && !excludeUpdates) {
            resetReapplyExcludeTypes.push(ResetReapplyExcludeType.RESET_REAPPLY_EXCLUDE_TYPE_UNSPECIFIED);
        }
        if (excludeSignals) {
            resetReapplyExcludeTypes.push(ResetReapplyExcludeType.RESET_REAPPLY_EXCLUDE_TYPE_SIGNAL);
        }
        if (excludeUpdates) {
            resetReapplyExcludeTypes.push(ResetReapplyExcludeType.RESET_REAPPLY_EXCLUDE_TYPE_UPDATE);
        }
        body.resetReapplyExcludeTypes = resetReapplyExcludeTypes;
        body.resetReapplyType = ResetReapplyType.RESET_REAPPLY_TYPE_ALL_ELIGIBLE;
    }
    else {
        let resetReapplyType;
        if (includeSignals) {
            resetReapplyType = ResetReapplyType.RESET_REAPPLY_TYPE_SIGNAL;
        }
        else {
            resetReapplyType = ResetReapplyType.RESET_REAPPLY_TYPE_NONE;
        }
        body.resetReapplyType = resetReapplyType;
    }
    return requestFromAPI(route, {
        notifyOnError: false,
        options: {
            method: 'POST',
            body: stringifyWithBigInt(body),
        },
        params: {
            'execution.runId': runId,
        },
    });
}
export async function fetchWorkflowForSchedule(parameters, request = fetch) {
    const onError = (err) => {
        console.error(err);
    };
    const route = routeForApi('workflow', parameters);
    return requestFromAPI(route, {
        request,
        onError,
        handleError: onError,
    }).then(toWorkflowExecution);
}
export async function fetchAllChildWorkflows(namespace, workflowId, runId) {
    if (!get(canFetchChildWorkflows)) {
        return [];
    }
    try {
        let query = `ParentWorkflowId = "${workflowId}"`;
        if (runId) {
            query += ` AND ParentRunId = "${runId}"`;
        }
        const { workflows } = await fetchAllWorkflows(namespace, { query });
        return workflows;
    }
    catch (e) {
        return [];
    }
}
export const setSearchAttributes = (attributes) => {
    if (!attributes.length)
        return {};
    const searchAttributes = {};
    attributes.forEach((attribute) => {
        searchAttributes[attribute.label] = setBase64Payload(attribute.value);
    });
    return searchAttributes;
};
export async function startWorkflow({ namespace, workflowId, taskQueue, workflowType, input, summary, details, encoding, messageType, searchAttributes, }) {
    const route = routeForApi('workflow', {
        namespace,
        workflowId,
    });
    let payloads;
    let summaryPayload;
    let detailsPayload;
    if (input) {
        try {
            payloads = await encodePayloads({ input, encoding, messageType });
        }
        catch (_) {
            throw new Error('Could not encode input for starting workflow');
        }
    }
    try {
        if (summary) {
            summaryPayload = (await encodePayloads({
                input: stringifyWithBigInt(summary),
                encoding: 'json/plain',
            }))[0];
        }
        if (details) {
            detailsPayload = (await encodePayloads({
                input: stringifyWithBigInt(details),
                encoding: 'json/plain',
            }))[0];
        }
    }
    catch (e) {
        console.error('Could not encode summary or details for starting workflow');
    }
    const body = stringifyWithBigInt({
        workflowId,
        taskQueue: {
            name: taskQueue,
        },
        workflowType: {
            name: workflowType,
        },
        input: payloads ? { payloads } : null,
        userMetadata: {
            summary: summaryPayload,
            details: detailsPayload,
        },
        searchAttributes: searchAttributes.length === 0
            ? null
            : {
                indexedFields: {
                    ...setSearchAttributes(searchAttributes),
                },
            },
    });
    return requestFromAPI(route, {
        notifyOnError: false,
        options: {
            method: 'POST',
            body,
        },
    });
}
export const fetchInitialValuesForStartWorkflow = async ({ namespace, workflowType, workflowId, }) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    const handleError = (err) => {
        console.error(err);
    };
    const emptyValues = {
        input: '',
        encoding: 'json/plain',
        messageType: '',
        searchAttributes: undefined,
        summary: '',
        details: '',
    };
    try {
        let query = '';
        if (workflowType && workflowId) {
            query = `WorkflowType = "${workflowType}" AND WorkflowId = "${workflowId}"`;
        }
        else if (workflowType) {
            query = `WorkflowType = "${workflowType}"`;
        }
        else if (workflowId) {
            query = `WorkflowId = "${workflowId}"`;
        }
        const route = routeForApi('workflows', { namespace });
        const workflows = await requestFromAPI(route, {
            params: { query, pageSize: '1' },
            handleError,
        });
        if (!((_a = workflows === null || workflows === void 0 ? void 0 : workflows.executions) === null || _a === void 0 ? void 0 : _a[0]))
            return emptyValues;
        const listWorkflow = toWorkflowExecutions(workflows)[0];
        const params = {
            namespace,
            workflowId: listWorkflow.id,
            runId: listWorkflow.runId,
        };
        const { workflow } = await fetchWorkflow(params);
        const firstEvent = await fetchInitialEvent(params);
        const startEvent = firstEvent;
        const convertedAttributes = (await cloneAllPotentialPayloadsWithCodec((_b = startEvent === null || startEvent === void 0 ? void 0 : startEvent.attributes) === null || _b === void 0 ? void 0 : _b.input, namespace, get(page).data.settings, get(authUser).accessToken, 'readable', false));
        let summary = '';
        if (workflow.summary) {
            const decodedSummary = await decodeSingleReadablePayloadWithCodec(workflow.summary);
            if (typeof decodedSummary === 'string') {
                summary = decodedSummary;
            }
        }
        let details = '';
        if (workflow.details) {
            const decodedDetails = await decodeSingleReadablePayloadWithCodec(workflow.details);
            if (typeof decodedDetails === 'string') {
                details = decodedDetails;
            }
        }
        const input = (convertedAttributes === null || convertedAttributes === void 0 ? void 0 : convertedAttributes.payloads)
            ? stringifyWithBigInt((_c = convertedAttributes.payloads[0]) === null || _c === void 0 ? void 0 : _c.data)
            : '';
        const encoding = (convertedAttributes === null || convertedAttributes === void 0 ? void 0 : convertedAttributes.payloads) &&
            isPayloadInputEncodingType((_e = (_d = convertedAttributes.payloads[0]) === null || _d === void 0 ? void 0 : _d.metadata) === null || _e === void 0 ? void 0 : _e.encoding)
            ? (_g = (_f = convertedAttributes.payloads[0]) === null || _f === void 0 ? void 0 : _f.metadata) === null || _g === void 0 ? void 0 : _g.encoding
            : 'json/plain';
        const messageType = (convertedAttributes === null || convertedAttributes === void 0 ? void 0 : convertedAttributes.payloads)
            ? (_j = (_h = convertedAttributes.payloads[0]) === null || _h === void 0 ? void 0 : _h.metadata) === null || _j === void 0 ? void 0 : _j.messageType
            : '';
        return {
            input,
            encoding,
            messageType,
            searchAttributes: (_k = workflow === null || workflow === void 0 ? void 0 : workflow.searchAttributes) === null || _k === void 0 ? void 0 : _k.indexedFields,
            summary,
            details,
        };
    }
    catch (e) {
        return emptyValues;
    }
};
const buildRoots = (root, workflows) => {
    const childrenMap = new Map();
    workflows.forEach((workflow) => {
        if (workflow.parent) {
            const key = `${workflow.parent.workflowId}:${workflow.parent.runId}`;
            const children = childrenMap.get(key) || [];
            children.push(workflow);
            childrenMap.set(key, children);
        }
    });
    const buildNode = (workflow, paths) => {
        const key = `${workflow.id}:${workflow.runId}`;
        const children = childrenMap.get(key) || [];
        const node = {
            workflow,
            children: [],
            rootPaths: [...paths, { runId: workflow.runId, workflowId: workflow.id }],
        };
        node.children = children.map((child) => buildNode(child, node.rootPaths));
        return node;
    };
    return buildNode(root, []);
};
export async function fetchAllRootWorkflows(namespace, rootWorkflowId, rootRunId) {
    let query = `RootWorkflowId = "${rootWorkflowId}"`;
    if (rootRunId) {
        query += ` AND RootRunId = "${rootRunId}"`;
    }
    const root = await fetchWorkflow({
        namespace,
        workflowId: rootWorkflowId,
        runId: rootRunId,
    });
    const workflows = await fetchAllPaginatedWorkflows(namespace, { query });
    return buildRoots(root === null || root === void 0 ? void 0 : root.workflow, workflows);
}
export const fetchAllPaginatedWorkflows = async (namespace, parameters, request = fetch, archived = false) => {
    const rawQuery = parameters.query || toListWorkflowQuery(parameters, archived);
    let query;
    try {
        query = decodeURIComponent(rawQuery);
    }
    catch {
        query = rawQuery;
    }
    const route = routeForApi('workflows', { namespace });
    const { executions } = await paginated(async (token) => {
        return requestFromAPI(route, {
            token,
            request,
            params: { query },
        });
    });
    return toWorkflowExecutions({ executions });
};
