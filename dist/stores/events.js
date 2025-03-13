import { derived, writable } from 'svelte/store';
import { page } from '$app/stores';
import { authUser } from './auth-user';
import { refresh } from './workflow-run';
import { decodeURIForSvelte } from '../utilities/encode-uri';
import { isLocalActivityMarkerEvent, isResetEvent, } from '../utilities/is-event-type';
import { eventFilterSort } from './event-view';
import { eventTypeFilter } from './filters';
import { persistStore } from './persist-store';
const namespace = derived([page], ([$page]) => {
    if ($page.params.namespace) {
        return decodeURIForSvelte($page.params.namespace);
    }
    return '';
});
const workflowId = derived([page], ([$page]) => {
    if ($page.params.workflow) {
        return decodeURIForSvelte($page.params.workflow);
    }
    return '';
});
const runId = derived([page], ([$page]) => {
    if ($page.params.run) {
        return decodeURIForSvelte($page.params.run);
    }
    return '';
});
const settings = derived([page], ([$page]) => { var _a; return (_a = $page.data) === null || _a === void 0 ? void 0 : _a.settings; });
const accessToken = derived([authUser], ([$authUser]) => $authUser === null || $authUser === void 0 ? void 0 : $authUser.accessToken);
export const parameters = derived([namespace, workflowId, runId, eventFilterSort], ([$namespace, $workflowId, $runId, $sort]) => {
    return {
        namespace: $namespace,
        workflowId: $workflowId,
        runId: $runId,
        sort: $sort,
    };
});
export const parametersWithSettings = derived([parameters, settings, accessToken, refresh], ([$parameters, $settings, $accessToken, $refresh]) => {
    return {
        ...$parameters,
        settings: $settings,
        accessToken: $accessToken,
        refresh,
        $refresh,
    };
});
export const timelineEvents = writable(null);
export const fullEventHistory = writable([]);
export const pauseLiveUpdates = writable(false);
export const currentEventHistory = writable([]);
export const filteredEventHistory = derived([currentEventHistory, eventTypeFilter], ([$history, $types]) => {
    return $history.filter((event) => {
        if (isLocalActivityMarkerEvent(event)) {
            return $types.includes('local-activity');
        }
        return $types.includes(event.category);
    });
});
export const resetEvents = derived(fullEventHistory, (events) => events.filter(isResetEvent));
export const decodeEventHistory = persistStore('decodeEventHistory', true, true);
export const downloadEventHistorySetting = persistStore('downloadEventHistorySetting', 'encoded', true);
