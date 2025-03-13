import { requestFromAPI } from '../utilities/request-from-api';
import { routeForApi } from '../utilities/route-for-api';
export const fetchWorkflowCount = async (namespace, query, request = fetch) => {
    let count = 0;
    try {
        const countRoute = routeForApi('workflows.count', { namespace });
        const result = await requestFromAPI(countRoute, {
            params: query ? { query } : {},
            onError: () => { },
            handleError: () => { },
            request,
        });
        count = parseInt((result === null || result === void 0 ? void 0 : result.count) || '0');
    }
    catch (e) {
        // Don't fail the workflows call due to count
    }
    return { count };
};
export const fetchWorkflowCountByExecutionStatus = async ({ namespace, query, }) => {
    const groupByClause = 'GROUP BY ExecutionStatus';
    const countRoute = routeForApi('workflows.count', {
        namespace,
    });
    const { count, groups } = await requestFromAPI(countRoute, {
        params: {
            query: query ? `${query} ${groupByClause}` : `${groupByClause}`,
        },
        notifyOnError: false,
    });
    return { count: count !== null && count !== void 0 ? count : '0', groups };
};
export const fetchScheduleCount = async ({ namespace, }) => {
    const query = 'TemporalNamespaceDivision="TemporalScheduler" AND ExecutionStatus="Running"';
    const countRoute = routeForApi('workflows.count', {
        namespace,
    });
    const { count } = await requestFromAPI(countRoute, {
        params: {
            query,
        },
        notifyOnError: false,
    });
    return count !== null && count !== void 0 ? count : '0';
};
