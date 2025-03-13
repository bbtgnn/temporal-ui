import { stringifyWithBigInt } from '../utilities/parse-with-big-int';
import { requestFromAPI } from '../utilities/request-from-api';
import { routeForApi } from '../utilities/route-for-api';
export const fetchNexusEndpoints = async (search = '', request = fetch) => {
    const route = routeForApi('nexus-endpoints');
    const { endpoints } = await requestFromAPI(route, {
        request,
        params: { name: search },
    });
    return endpoints || [];
};
export const fetchNexusEndpoint = async (id, request = fetch) => {
    const route = routeForApi('nexus-endpoint', { endpointId: id });
    const endpoint = await requestFromAPI(route, {
        request,
        notifyOnError: false,
    });
    return endpoint;
};
export const createNexusEndpoint = async (body, request = fetch) => {
    const route = routeForApi('nexus-endpoints');
    const endpoint = await requestFromAPI(route, {
        request,
        options: {
            method: 'POST',
            body: stringifyWithBigInt({
                ...body,
            }),
        },
        notifyOnError: false,
    });
    return endpoint;
};
export const updateNexusEndpoint = async (id, body, request = fetch) => {
    const route = routeForApi('nexus-endpoint.update', { endpointId: id });
    const endpoint = await requestFromAPI(route, {
        request,
        options: {
            method: 'POST',
            body: stringifyWithBigInt({
                ...body,
            }),
        },
        notifyOnError: false,
    });
    return endpoint;
};
export const deleteNexusEndpoint = async (id, version, request = fetch) => {
    const route = routeForApi('nexus-endpoint', { endpointId: id });
    const endpoint = await requestFromAPI(route, {
        request,
        options: {
            method: 'DELETE',
        },
        params: { version },
    });
    return endpoint;
};
