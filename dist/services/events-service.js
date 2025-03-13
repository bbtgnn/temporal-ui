import throttle from 'just-throttle';
import { toEventHistory } from '../models/event-history';
import { fullEventHistory } from '../stores/events';
import { refresh } from '../stores/workflow-run';
import { isSortOrder } from '../utilities/is';
import { paginated } from '../utilities/paginated';
import { requestFromAPI } from '../utilities/request-from-api';
import { routeForApi } from '../utilities/route-for-api';
const getEndpointForSortOrder = (sortOrder) => {
    if (!isSortOrder(sortOrder))
        return 'events.descending';
    if (sortOrder === 'descending')
        return 'events.descending';
    if (sortOrder === 'ascending')
        return 'events.ascending';
    return 'events.descending';
};
export const fetchRawEvents = async ({ namespace, workflowId, runId, sort, onStart, onUpdate, onComplete, }) => {
    const endpoint = getEndpointForSortOrder(sort);
    const route = routeForApi(endpoint, { namespace, workflowId });
    const response = await paginated(async (token) => {
        return requestFromAPI(route, {
            token,
            request: fetch,
            params: { 'execution.runId': runId },
        });
    }, { onStart, onUpdate, onComplete });
    return response.history.events;
};
export const throttleRefresh = throttle(() => {
    refresh.set(Date.now());
}, 5000);
export const fetchAllEvents = async ({ namespace, workflowId, runId, sort = 'ascending', signal, historySize, }) => {
    const onStart = () => {
        if (!signal)
            return;
        fullEventHistory.set([]);
    };
    const onUpdate = (full, current) => {
        var _a, _b;
        if (!signal)
            return;
        fullEventHistory.set([...toEventHistory((_a = full.history) === null || _a === void 0 ? void 0 : _a.events)]);
        const next = (_b = current === null || current === void 0 ? void 0 : current.history) === null || _b === void 0 ? void 0 : _b.events;
        const hasNewHistory = historySize &&
            (next === null || next === void 0 ? void 0 : next.every((e) => parseInt(e.eventId) > parseInt(historySize)));
        if (hasNewHistory) {
            throttleRefresh();
        }
    };
    const onComplete = () => {
        if (!signal)
            return;
        refresh.set(Date.now());
    };
    const endpoint = getEndpointForSortOrder(sort);
    const route = routeForApi(endpoint, { namespace, workflowId });
    const response = await paginated(async (token) => {
        return requestFromAPI(route, {
            token,
            request: fetch,
            params: {
                'execution.runId': runId,
                waitNewEvent: signal ? 'true' : 'false',
            },
            options: { signal },
        });
    }, { onStart, onUpdate, onComplete });
    if (!(response === null || response === void 0 ? void 0 : response.history))
        return [];
    const allEvents = await toEventHistory(response.history.events);
    return allEvents;
};
export const fetchPartialRawEvents = async ({ namespace, workflowId, runId, sort, maximumPageSize = '20', }) => {
    const route = routeForApi(`events.${sort}`, {
        namespace,
        workflowId,
    });
    try {
        const response = await requestFromAPI(route, {
            request: fetch,
            params: { maximumPageSize, 'execution.runId': runId },
        });
        return response.history.events;
    }
    catch (e) {
        return [];
    }
};
export async function getPaginatedEvents({ namespace, workflowId, runId, sort, category, compact, }) {
    return async (_pageSize = 100, token = '') => {
        const historyRoute = routeForApi(compact ? 'events.ascending' : `events.${sort}`, {
            namespace,
            workflowId,
        });
        const { history, nextPageToken } = await requestFromAPI(historyRoute, {
            request: fetch,
            params: {
                nextPageToken: token,
                'execution.runId': runId,
            },
        });
        const events = await toEventHistory(history.events);
        if (category) {
            return {
                items: events === null || events === void 0 ? void 0 : events.filter((event) => event.category === category),
                nextPageToken: nextPageToken !== null && nextPageToken !== void 0 ? nextPageToken : '',
            };
        }
        return {
            items: events,
            nextPageToken: nextPageToken !== null && nextPageToken !== void 0 ? nextPageToken : '',
        };
    };
}
export const fetchInitialEvent = async (parameters) => {
    const startEventsRaw = await fetchPartialRawEvents({
        ...parameters,
        sort: 'ascending',
        maximumPageSize: '1',
    });
    const start = await toEventHistory(startEventsRaw);
    return start[0];
};
