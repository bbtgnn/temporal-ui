import { derived } from 'svelte/store';
import { page } from '$app/stores';
import { minimumVersionRequired } from '../utilities/version-check';
import { temporalVersion } from './versions';
export const groupByCountEnabled = derived([page], ([$page]) => {
    var _a, _b, _c;
    return Boolean((_c = (_b = (_a = $page.data) === null || _a === void 0 ? void 0 : _a.systemInfo) === null || _b === void 0 ? void 0 : _b.capabilities) === null || _c === void 0 ? void 0 : _c.countGroupByExecutionStatus);
});
export const prefixSearchEnabled = derived([page, temporalVersion], ([$page, $temporalVersion]) => {
    var _a, _b, _c;
    const serverVersionEnabled = minimumVersionRequired('1.23.0', $temporalVersion);
    const capabilitiesEnabled = Boolean((_c = (_b = (_a = $page.data) === null || _a === void 0 ? void 0 : _a.systemInfo) === null || _b === void 0 ? void 0 : _b.capabilities) === null || _c === void 0 ? void 0 : _c.prefixSearch);
    return serverVersionEnabled || capabilitiesEnabled;
});
