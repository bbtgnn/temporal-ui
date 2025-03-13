import { BROWSER } from 'esm-env';
import { base } from '$app/paths';
import { encodeURIForSvelte } from './encode-uri';
import { toURL } from './to-url';
export const routeForNamespaces = () => {
    return `${base}/namespaces`;
};
export const routeForNexus = () => {
    return `${base}/nexus`;
};
export const routeForNexusEndpoint = (id) => {
    return `${base}/nexus/${id}`;
};
export const routeForNexusEndpointEdit = (id) => {
    return `${base}/nexus/${id}/edit`;
};
export const routeForNexusEndpointCreate = () => {
    return `${base}/nexus/create`;
};
export const routeForNamespace = ({ namespace, }) => {
    return `${base}/namespaces/${namespace}`;
};
export const routeForNamespaceSelector = () => {
    return `${base}/select-namespace`;
};
export const routeForWorkflows = (parameters) => {
    return `${routeForNamespace(parameters)}/workflows`;
};
export const routeForWorkflowStart = ({ namespace, workflowId, taskQueue, workflowType, }) => {
    return toURL(`${routeForNamespace({ namespace })}/workflows/start-workflow`, {
        workflowId: workflowId || '',
        taskQueue: taskQueue || '',
        workflowType: workflowType || '',
    });
};
export const routeForWorkflowsWithQuery = ({ namespace, query, page, }) => {
    if (!BROWSER) {
        return undefined;
    }
    return toURL(routeForWorkflows({ namespace }), {
        query,
        ...(page && { page }),
    });
};
export const routeForArchivalWorkfows = (parameters) => {
    return `${routeForNamespace(parameters)}/archival`;
};
export const routeForWorkflow = ({ workflow, run, ...parameters }) => {
    const wid = encodeURIForSvelte(workflow);
    return `${routeForWorkflows(parameters)}/${wid}/${run}`;
};
export const routeForSchedules = (parameters) => {
    return `${routeForNamespace(parameters)}/schedules`;
};
export const routeForScheduleCreate = ({ namespace, }) => {
    return `${routeForSchedules({ namespace })}/create`;
};
export const routeForSchedule = ({ scheduleId, namespace, }) => {
    const sid = encodeURIForSvelte(scheduleId);
    return `${routeForSchedules({ namespace })}/${sid}`;
};
export const routeForScheduleEdit = ({ scheduleId, namespace, }) => {
    const sid = encodeURIForSvelte(scheduleId);
    return `${routeForSchedules({ namespace })}/${sid}/edit`;
};
export const routeForEventHistory = ({ queryParams, ...parameters }) => {
    const eventHistoryPath = `${routeForWorkflow(parameters)}/history`;
    return toURL(`${eventHistoryPath}`, queryParams, parameters === null || parameters === void 0 ? void 0 : parameters.eventId);
};
export const routeForEventHistoryEvent = ({ eventId, ...parameters }) => {
    return `${routeForWorkflow(parameters)}/history/events/${eventId}`;
};
export const routeForEventGroup = ({ eventId, ...parameters }) => {
    return `${routeForWorkflow(parameters)}/history/event-groups/${eventId}`;
};
export const routeForWorkers = (parameters) => {
    return `${routeForWorkflow(parameters)}/workers`;
};
export const routeForWorkerDeployments = ({ namespace, }) => {
    return `${base}/namespaces/${namespace}/worker-deployments`;
};
export const routeForWorkerDeployment = ({ namespace, deployment, }) => {
    const deploymentName = encodeURIForSvelte(deployment);
    return `${base}/namespaces/${namespace}/worker-deployments/${deploymentName}`;
};
export const routeForWorkerDeploymentVersion = ({ namespace, deployment, version, }) => {
    return `${routeForWorkerDeployment({
        namespace,
        deployment,
    })}/version/${version}`;
};
export const routeForRelationships = (parameters) => {
    return `${routeForWorkflow(parameters)}/relationships`;
};
export const routeForTaskQueue = (parameters) => {
    const queue = encodeURIForSvelte(parameters.queue);
    return `${routeForNamespace({
        namespace: parameters.namespace,
    })}/task-queues/${queue}`;
};
export const routeForCallStack = (parameters) => {
    return `${routeForWorkflow(parameters)}/call-stack`;
};
export const routeForWorkflowQuery = (parameters) => {
    return `${routeForWorkflow(parameters)}/query`;
};
export const routeForWorkflowMetadata = (parameters) => {
    return `${routeForWorkflow(parameters)}/metadata`;
};
export const routeForWorkflowUpdate = (parameters) => {
    return `${routeForWorkflow(parameters)}/update`;
};
export const routeForPendingActivities = (parameters) => {
    return `${routeForWorkflow(parameters)}/pending-activities`;
};
export const routeForAuthentication = (parameters) => {
    var _a;
    const { settings, searchParams: currentSearchParams, originUrl } = parameters;
    const login = new URL(`${base}/auth/sso`, settings.baseUrl);
    let opts = (_a = settings.auth.options) !== null && _a !== void 0 ? _a : [];
    opts = [...opts, 'returnUrl'];
    opts.forEach((option) => {
        if (!currentSearchParams)
            return;
        const searchParam = currentSearchParams.get(option);
        if (searchParam) {
            login.searchParams.set(option, searchParam);
        }
    });
    if (!login.searchParams.get('returnUrl') && originUrl) {
        login.searchParams.set('returnUrl', originUrl);
    }
    return login.toString();
};
export const routeForLoginPage = (error = '', isBrowser = BROWSER) => {
    if (isBrowser) {
        const login = new URL(`${base}/login`, window.location.origin);
        login.searchParams.set('returnUrl', window.location.href);
        if (error) {
            login.searchParams.set('error', error);
        }
        return login.toString();
    }
    return `${base}/login`;
};
export const routeForEventHistoryImport = (namespace, view) => {
    if (namespace && view) {
        return `${base}/import/events/${namespace}/workflow/run/history/${view}`;
    }
    return `${base}/import/events`;
};
export const routeForBatchOperations = ({ namespace, }) => {
    return `${base}/namespaces/${namespace}/batch-operations`;
};
export const routeForBatchOperation = ({ namespace, jobId, }) => {
    return `${base}/namespaces/${namespace}/batch-operations/${jobId}`;
};
export const hasParameters = (...required) => (parameters) => {
    for (const parameter of required) {
        if (!parameters[parameter])
            return false;
    }
    return true;
};
export const isNamespaceParameter = hasParameters('namespace');
export const isWorkflowParameters = hasParameters('namespace', 'workflow', 'run');
export const isEventHistoryParameters = hasParameters('namespace', 'workflow', 'run', 'view', 'queryParams');
export const isEventParameters = hasParameters('namespace', 'workflow', 'run', 'eventId');
