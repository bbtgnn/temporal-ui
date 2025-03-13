import { isVersionNewer } from './version-check';
export const advancedVisibilityEnabled = (cluster, version) => {
    var _a;
    return (((_a = cluster === null || cluster === void 0 ? void 0 : cluster.visibilityStore) === null || _a === void 0 ? void 0 : _a.includes('elasticsearch')) ||
        isVersionNewer(version, '1.19'));
};
export const advancedVisibilityEnabledWithOrderBy = (cluster) => {
    var _a;
    return (_a = cluster === null || cluster === void 0 ? void 0 : cluster.visibilityStore) === null || _a === void 0 ? void 0 : _a.includes('elasticsearch');
};
