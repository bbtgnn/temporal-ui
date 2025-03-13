import { translate } from '../i18n/translate';
import { requestFromAPI, } from '../utilities/request-from-api';
import { routeForApi } from '../utilities/route-for-api';
import { getOrderedVersionSets } from '../utilities/task-queue-compatibility';
export async function getPollers(parameters, request = fetch) {
    var _a;
    const route = routeForApi('task-queue', parameters);
    const workflowPollers = await requestFromAPI(route, {
        request,
        params: { taskQueueType: '1' },
    });
    const activityPollers = await requestFromAPI(route, {
        request,
        params: { taskQueueType: '2' },
    });
    if (!(workflowPollers === null || workflowPollers === void 0 ? void 0 : workflowPollers.pollers))
        workflowPollers.pollers = [];
    if (!(activityPollers === null || activityPollers === void 0 ? void 0 : activityPollers.pollers))
        activityPollers.pollers = [];
    activityPollers.pollers.forEach((poller) => {
        poller.taskQueueTypes = ['ACTIVITY'];
    });
    workflowPollers.pollers.forEach((poller) => {
        poller.taskQueueTypes = ['WORKFLOW'];
    });
    const r = (type) => (pollers, poller) => {
        const currentPoller = pollers[poller.identity] || {
            lastAccessTime: undefined,
            taskQueueTypes: [],
        };
        pollers[poller.identity] = {
            lastAccessTime: !currentPoller.lastAccessTime ||
                currentPoller.lastAccessTime < poller.lastAccessTime
                ? poller.lastAccessTime
                : currentPoller.lastAccessTime,
            taskQueueTypes: currentPoller.taskQueueTypes.concat([type]),
        };
        return pollers;
    };
    activityPollers.pollers.filter((pollerA) => workflowPollers.pollers.some((pollerW) => {
        if (pollerA.identity === pollerW.identity) {
            pollerA.taskQueueTypes = [
                ...pollerW.taskQueueTypes,
                ...pollerA.taskQueueTypes,
            ];
            return pollerA;
        }
    }));
    (_a = activityPollers.pollers) === null || _a === void 0 ? void 0 : _a.reduce(r('ACTIVITY'), workflowPollers.pollers.reduce(r('WORKFLOW'), {}));
    const pollers = !activityPollers.pollers.length
        ? workflowPollers.pollers
        : activityPollers.pollers;
    const taskQueueStatus = !activityPollers.pollers.length
        ? workflowPollers.taskQueueStatus
        : activityPollers.taskQueueStatus;
    return {
        pollers,
        taskQueueStatus,
    };
}
export async function getVersioning(parameters, request = fetch) {
    const rules = await getTaskQueueRules(parameters, request);
    const compatibility = await getTaskQueueCompatibility(parameters, request);
    const versionSets = getOrderedVersionSets(compatibility);
    return { rules, compatibility, versionSets };
}
export async function getTaskQueueRules(parameters, request = fetch) {
    const route = routeForApi('task-queue.rules', parameters);
    return requestFromAPI(route, {
        request,
        handleError: (_e) => {
            return;
        },
    });
}
export async function getTaskQueueCompatibility(parameters, request = fetch) {
    const route = routeForApi('task-queue.compatibility', parameters);
    return requestFromAPI(route, {
        request,
        handleError: (_e) => {
            return;
        },
    });
}
export async function getWorkerTaskReachability(parameters, request = fetch) {
    const { namespace, buildIds, queue } = parameters;
    const route = routeForApi('worker-task-reachability', { namespace });
    const params = new URLSearchParams();
    if (buildIds.length) {
        for (const buildId of buildIds) {
            params.append('buildIds', buildId);
        }
    }
    else {
        params.append('buildIds', '');
        params.append('taskQueues', queue);
    }
    return await requestFromAPI(route, {
        request,
        params,
        handleError: (_e) => {
            return {
                buildIdReachability: [],
            };
        },
    });
}
function getLabelForReachability(reachability) {
    if (!reachability || !reachability.length)
        return translate('workers.ready-to-be-retired');
    if (reachability.length === 1 && reachability.includes('CLOSED')) {
        return translate('common.maybe');
    }
    return translate('common.no');
}
export function getBuildIdReachability(workerTaskReachability, taskQueue, buildId) {
    var _a, _b;
    const buildIdReachability = (_a = workerTaskReachability === null || workerTaskReachability === void 0 ? void 0 : workerTaskReachability.buildIdReachability) === null || _a === void 0 ? void 0 : _a.find((bird) => bird.buildId === buildId);
    if (!buildIdReachability)
        return '';
    const currentTaskQueueReachability = (_b = buildIdReachability === null || buildIdReachability === void 0 ? void 0 : buildIdReachability.taskQueueReachability) === null || _b === void 0 ? void 0 : _b.find((tqr) => (tqr === null || tqr === void 0 ? void 0 : tqr.taskQueue) === taskQueue);
    if (!currentTaskQueueReachability)
        return '';
    const reachability = currentTaskQueueReachability === null || currentTaskQueueReachability === void 0 ? void 0 : currentTaskQueueReachability.reachability;
    return getLabelForReachability(reachability);
}
