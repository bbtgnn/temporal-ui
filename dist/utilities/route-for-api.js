import { get } from 'svelte/store';
import { base as basePath } from '$app/paths';
import { page } from '$app/stores';
import { getApiOrigin } from './get-api-origin';
import { minimumVersionRequired } from './version-check';
const replaceNamespaceInApiUrl = (apiUrl, namespace) => {
    if (apiUrl) {
        return apiUrl.replace('%namespace%', namespace);
    }
    return '';
};
export const base = (namespace) => {
    var _a, _b;
    let baseUrl = '';
    const webUrl = (_a = get(page).data) === null || _a === void 0 ? void 0 : _a.webUrl;
    const webUrlExistsWithNamespace = webUrl && namespace;
    const apiUrlExistsWithNamespace = ((_b = globalThis === null || globalThis === void 0 ? void 0 : globalThis.AppConfig) === null || _b === void 0 ? void 0 : _b.apiUrl) && namespace;
    if (webUrlExistsWithNamespace) {
        baseUrl = webUrl;
    }
    else if (apiUrlExistsWithNamespace) {
        console.warn('Using fallback api url, web url not found');
        baseUrl = replaceNamespaceInApiUrl(globalThis.AppConfig.apiUrl, namespace);
    }
    else {
        baseUrl = getApiOrigin();
    }
    if (baseUrl.endsWith('/'))
        baseUrl = baseUrl.slice(0, -1);
    baseUrl = `${baseUrl}${basePath}`;
    return baseUrl;
};
const getPath = (endpoint) => {
    if (endpoint.startsWith('/'))
        endpoint = endpoint.slice(1);
    return `/api/v1/${endpoint}`;
};
const withBase = (path, namespace) => {
    const baseUrl = base(namespace);
    return `${baseUrl}${path}`;
};
const encode = (parameters) => {
    var _a, _b, _c;
    const version = (_c = (_b = (_a = get(page)) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.settings) === null || _c === void 0 ? void 0 : _c.version;
    return Object.keys(parameters !== null && parameters !== void 0 ? parameters : {}).reduce((acc, key) => {
        if (version && minimumVersionRequired('2.23.0', version)) {
            acc[key] = encodeURIComponent(parameters[key]);
        }
        else {
            acc[key] = encodeURIComponent(encodeURIComponent(parameters[key]));
        }
        return acc;
    }, {
        namespace: '',
        workflowId: '',
        scheduleId: '',
        queue: '',
        queryType: '',
        signalName: '',
        updateName: '',
        batchJobId: '',
        activityId: '',
        endpointId: '',
        deploymentName: '',
        version: '',
    });
};
export function pathForApi(route, parameters, shouldEncode = true) {
    if (shouldEncode)
        parameters = encode(parameters);
    const routes = {
        systemInfo: '/system-info',
        cluster: '/cluster-info',
        namespaces: '/namespaces',
        namespace: `/namespaces/${parameters === null || parameters === void 0 ? void 0 : parameters.namespace}`,
        'search-attributes': `/namespaces/${parameters.namespace}/search-attributes`,
        'events.ascending': `/namespaces/${parameters === null || parameters === void 0 ? void 0 : parameters.namespace}/workflows/${parameters === null || parameters === void 0 ? void 0 : parameters.workflowId}/history`,
        'events.descending': `/namespaces/${parameters === null || parameters === void 0 ? void 0 : parameters.namespace}/workflows/${parameters === null || parameters === void 0 ? void 0 : parameters.workflowId}/history-reverse`,
        query: `/namespaces/${parameters === null || parameters === void 0 ? void 0 : parameters.namespace}/workflows/${parameters === null || parameters === void 0 ? void 0 : parameters.workflowId}/query/${parameters.queryType}`,
        schedule: `/namespaces/${parameters === null || parameters === void 0 ? void 0 : parameters.namespace}/schedules/${parameters === null || parameters === void 0 ? void 0 : parameters.scheduleId}`,
        'schedule.patch': `/namespaces/${parameters === null || parameters === void 0 ? void 0 : parameters.namespace}/schedules/${parameters === null || parameters === void 0 ? void 0 : parameters.scheduleId}/patch`,
        'schedule.edit': `/namespaces/${parameters === null || parameters === void 0 ? void 0 : parameters.namespace}/schedules/${parameters === null || parameters === void 0 ? void 0 : parameters.scheduleId}/update`,
        schedules: `/namespaces/${parameters === null || parameters === void 0 ? void 0 : parameters.namespace}/schedules`,
        settings: '/settings',
        'task-queue': `/namespaces/${parameters === null || parameters === void 0 ? void 0 : parameters.namespace}/task-queues/${parameters === null || parameters === void 0 ? void 0 : parameters.queue}`,
        'task-queue.compatibility': `/namespaces/${parameters === null || parameters === void 0 ? void 0 : parameters.namespace}/task-queues/${parameters === null || parameters === void 0 ? void 0 : parameters.queue}/worker-build-id-compatibility`,
        'task-queue.rules': `/namespaces/${parameters === null || parameters === void 0 ? void 0 : parameters.namespace}/task-queues/${parameters === null || parameters === void 0 ? void 0 : parameters.queue}/worker-versioning-rules`,
        user: '/me',
        'worker-task-reachability': `/namespaces/${parameters === null || parameters === void 0 ? void 0 : parameters.namespace}/worker-task-reachability`,
        'workflow.terminate': `/namespaces/${parameters === null || parameters === void 0 ? void 0 : parameters.namespace}/workflows/${parameters === null || parameters === void 0 ? void 0 : parameters.workflowId}/terminate`,
        'workflow.cancel': `/namespaces/${parameters.namespace}/workflows/${parameters.workflowId}/cancel`,
        'workflow.signal': `/namespaces/${parameters.namespace}/workflows/${parameters.workflowId}/signal/${parameters.signalName}`,
        'workflow.update': `/namespaces/${parameters.namespace}/workflows/${parameters.workflowId}/update/${parameters.updateName}`,
        'workflow.reset': `/namespaces/${parameters.namespace}/workflows/${parameters.workflowId}/reset`,
        workflow: `/namespaces/${parameters === null || parameters === void 0 ? void 0 : parameters.namespace}/workflows/${parameters === null || parameters === void 0 ? void 0 : parameters.workflowId}`,
        workflows: `/namespaces/${parameters === null || parameters === void 0 ? void 0 : parameters.namespace}/workflows`,
        'workflows.archived': `/namespaces/${parameters === null || parameters === void 0 ? void 0 : parameters.namespace}/archived-workflows`,
        'workflows.count': `/namespaces/${parameters === null || parameters === void 0 ? void 0 : parameters.namespace}/workflow-count`,
        'activity.complete': `/namespaces/${parameters.namespace}/activities/complete-by-id`,
        'activity.fail': `/namespaces/${parameters.namespace}/activities/fail-by-id`,
        'batch-operations.list': `/namespaces/${parameters.namespace}/batch-operations`,
        'batch-operations': `/namespaces/${parameters.namespace}/batch-operations/${parameters === null || parameters === void 0 ? void 0 : parameters.batchJobId}`,
        'nexus-endpoints': '/nexus/endpoints',
        'nexus-endpoint': `/nexus/endpoints/${parameters.endpointId}`,
        'nexus-endpoint.update': `/nexus/endpoints/${parameters.endpointId}/update`,
        'worker-deployments': `/namespaces/${parameters.namespace}/worker-deployments`,
        'worker-deployment': `/namespaces/${parameters.namespace}/worker-deployments/${parameters.deploymentName}`,
        'worker-deployment-version': `/namespaces/${parameters.namespace}/worker-deployment-versions/${parameters.version}`,
    };
    return getPath(routes[route]);
}
export function routeForApi(route, parameters, shouldEncode = true) {
    const path = pathForApi(route, parameters, shouldEncode);
    return withBase(path, parameters === null || parameters === void 0 ? void 0 : parameters.namespace);
}
