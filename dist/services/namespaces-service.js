import { namespaces } from '../stores/namespaces';
import { toaster } from '../stores/toaster';
import { paginated } from '../utilities/paginated';
import { requestFromAPI } from '../utilities/request-from-api';
import { routeForApi } from '../utilities/route-for-api';
import { toNamespaceArchivalStateReadable, toNamespaceStateReadable, } from '../utilities/screaming-enums';
const emptyNamespace = {
    namespaces: [],
};
const toNamespaceDetails = (namespace) => {
    var _a;
    if (namespace.config) {
        namespace.config.historyArchivalState = toNamespaceArchivalStateReadable(namespace.config.historyArchivalState);
        namespace.config.visibilityArchivalState = toNamespaceArchivalStateReadable(namespace.config.visibilityArchivalState);
    }
    if (namespace.namespaceInfo) {
        namespace.namespaceInfo.state = toNamespaceStateReadable((_a = namespace.namespaceInfo) === null || _a === void 0 ? void 0 : _a.state);
    }
    return namespace;
};
export async function fetchNamespaces(settings, request = fetch) {
    var _a;
    const { showTemporalSystemNamespace, runtimeEnvironment } = settings;
    if (runtimeEnvironment.isCloud) {
        namespaces.set([]);
        return;
    }
    try {
        const route = routeForApi('namespaces');
        const results = await paginated(async (token) => requestFromAPI(route, {
            request,
            token,
            onError: () => toaster.push({
                variant: 'error',
                message: 'Unable to fetch namespaces',
            }),
        }));
        const _namespaces = ((_a = results === null || results === void 0 ? void 0 : results.namespaces) !== null && _a !== void 0 ? _a : [])
            .filter((namespace) => showTemporalSystemNamespace ||
            namespace.namespaceInfo.name !== 'temporal-system')
            .map(toNamespaceDetails);
        namespaces.set(_namespaces);
    }
    catch (e) {
        namespaces.set([]);
    }
}
export async function fetchNamespace(namespace, settings, request = fetch) {
    var _a;
    const [empty] = emptyNamespace.namespaces;
    if ((_a = settings === null || settings === void 0 ? void 0 : settings.runtimeEnvironment) === null || _a === void 0 ? void 0 : _a.isCloud) {
        return empty;
    }
    const route = routeForApi('namespace', { namespace });
    const results = await requestFromAPI(route, {
        request,
        onError: () => toaster.push({ variant: 'error', message: 'Unable to fetch namespaces' }),
    });
    return results ? toNamespaceDetails(results) : empty;
}
