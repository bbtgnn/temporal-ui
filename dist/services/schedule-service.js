import { v4 as uuidv4 } from 'uuid';
import { translate } from '../i18n/translate';
import { stringifyWithBigInt } from '../utilities/parse-with-big-int';
import { requestFromAPI } from '../utilities/request-from-api';
import { routeForApi } from '../utilities/route-for-api';
export const fetchPaginatedSchedules = async (namespace, query, onError, request = fetch) => {
    return (pageSize = 100, token = '') => {
        const route = routeForApi('schedules', { namespace });
        return requestFromAPI(route, {
            params: {
                maximumPageSize: String(pageSize),
                nextPageToken: token,
                ...(query ? { query } : {}),
            },
            request,
            onError,
        }).then(({ schedules, nextPageToken }) => {
            return {
                items: schedules,
                nextPageToken: nextPageToken ? String(nextPageToken) : '',
            };
        });
    };
};
export const fetchAllSchedules = async (namespace, request = fetch) => {
    var _a;
    let error = '';
    const onError = (err) => {
        var _a, _b;
        return (error =
            (_b = (_a = err === null || err === void 0 ? void 0 : err.body) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : `${translate('schedules.error-message-fetching')}: ${err.status}: ${err.statusText}`);
    };
    const route = routeForApi('schedules', { namespace });
    const { schedules, nextPageToken } = (_a = (await requestFromAPI(route, {
        params: {},
        onError,
        request,
    }))) !== null && _a !== void 0 ? _a : { schedules: [], nextPageToken: '' };
    return {
        schedules,
        nextPageToken: String(nextPageToken),
        error,
    };
};
export async function fetchSchedule(parameters, request = fetch) {
    const route = routeForApi('schedule', parameters);
    return requestFromAPI(route, { request });
}
export async function deleteSchedule(parameters, request = fetch) {
    const route = routeForApi('schedule', parameters);
    return requestFromAPI(route, {
        request,
        options: { method: 'DELETE' },
    });
}
export async function createSchedule({ namespace, scheduleId, body, }) {
    let error = '';
    const onError = (err) => {
        var _a, _b;
        return (error =
            (_b = (_a = err === null || err === void 0 ? void 0 : err.body) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : `Error creating schedule: ${err.status}: ${err.statusText}`);
    };
    const route = routeForApi('schedule', {
        namespace,
        scheduleId,
    });
    const { conflictToken } = await requestFromAPI(route, {
        options: {
            method: 'POST',
            body: stringifyWithBigInt({
                request_id: uuidv4(),
                ...body,
            }),
        },
        onError,
    });
    return { conflictToken, error };
}
export async function editSchedule({ namespace, scheduleId, body, }) {
    let error = '';
    const onError = (err) => {
        var _a, _b;
        return (error =
            (_b = (_a = err === null || err === void 0 ? void 0 : err.body) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : `Error editing schedule: ${err.status}: ${err.statusText}`);
    };
    const route = routeForApi('schedule.edit', {
        namespace,
        scheduleId,
    });
    await requestFromAPI(route, {
        options: {
            method: 'POST',
            body: stringifyWithBigInt({
                request_id: uuidv4(),
                ...body,
            }),
        },
        onError,
    });
    return { error };
}
export async function pauseSchedule({ namespace, scheduleId, reason, }) {
    const options = {
        patch: {
            pause: reason,
        },
    };
    const route = routeForApi('schedule.patch', {
        namespace,
        scheduleId: scheduleId,
    });
    return await requestFromAPI(route, {
        options: {
            method: 'POST',
            body: stringifyWithBigInt({
                ...options,
                request_id: uuidv4(),
            }),
        },
        onError: (error) => console.error(error),
    });
}
export async function unpauseSchedule({ namespace, scheduleId, reason, }) {
    const options = {
        patch: {
            unpause: reason,
        },
    };
    const route = routeForApi('schedule.patch', {
        namespace,
        scheduleId: scheduleId,
    });
    return await requestFromAPI(route, {
        options: {
            method: 'POST',
            body: stringifyWithBigInt({
                ...options,
                request_id: uuidv4(),
            }),
        },
    });
}
export async function triggerImmediately({ namespace, scheduleId, overlapPolicy, }) {
    const options = {
        patch: {
            triggerImmediately: {
                overlapPolicy,
            },
        },
    };
    const route = routeForApi('schedule.patch', {
        namespace,
        scheduleId: scheduleId,
    });
    return await requestFromAPI(route, {
        options: {
            method: 'POST',
            body: stringifyWithBigInt({
                ...options,
                request_id: uuidv4(),
            }),
        },
    });
}
export async function backfillRequest({ namespace, scheduleId, overlapPolicy, startTime, endTime, }) {
    const options = {
        patch: {
            backfillRequest: [
                {
                    overlapPolicy,
                    startTime,
                    endTime,
                },
            ],
        },
    };
    const route = routeForApi('schedule.patch', {
        namespace,
        scheduleId: scheduleId,
    });
    return await requestFromAPI(route, {
        options: {
            method: 'POST',
            body: stringifyWithBigInt({
                ...options,
                request_id: uuidv4(),
            }),
        },
    });
}
