import { requestFromAPI } from '../utilities/request-from-api';
import { routeForApi } from '../utilities/route-for-api';
export const fetchPaginatedDeployments = async (namespace, query, onError, request = fetch) => {
    return (pageSize = 100, token = '') => {
        const route = routeForApi('worker-deployments', { namespace });
        return requestFromAPI(route, {
            params: {
                maximumPageSize: String(pageSize),
                nextPageToken: token,
                ...(query ? { query } : {}),
            },
            request,
            onError,
        }).then(({ workerDeployments, nextPageToken }) => {
            return {
                items: workerDeployments,
                nextPageToken: nextPageToken ? String(nextPageToken) : '',
            };
        });
    };
};
export const fetchDeployment = async (parameters, request = fetch) => {
    const route = routeForApi('worker-deployment', parameters);
    return requestFromAPI(route, { request });
};
export const fetchDeploymentVersion = async (parameters, request = fetch) => {
    const route = routeForApi('worker-deployment-version', parameters);
    return requestFromAPI(route, { request });
};
