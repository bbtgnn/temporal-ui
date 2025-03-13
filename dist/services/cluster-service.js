import { requestFromAPI } from '../utilities/request-from-api';
import { routeForApi } from '../utilities/route-for-api';
export const fetchCluster = async (settings, request = fetch) => {
    if (settings.runtimeEnvironment.isCloud)
        return;
    const route = routeForApi('cluster');
    return await requestFromAPI(route, {
        request,
    }).then((clusterInformation) => {
        return clusterInformation;
    });
};
export const fetchSystemInfo = async (settings, request = fetch) => {
    if (settings.runtimeEnvironment.isCloud)
        return;
    const route = routeForApi('systemInfo');
    return await requestFromAPI(route, {
        request,
    }).then((systemInformation) => {
        return systemInformation;
    });
};
