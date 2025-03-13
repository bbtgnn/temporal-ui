import { derived } from 'svelte/store';
import { page } from '$app/stores';
import { advancedVisibilityEnabled, advancedVisibilityEnabledWithOrderBy, } from '../utilities/advanced-visibility-enabled';
import { cluster } from './cluster';
import { temporalVersion } from './versions';
export const isCloud = derived([page], ([$page]) => { var _a, _b, _c; return (_c = (_b = (_a = $page.data) === null || _a === void 0 ? void 0 : _a.settings) === null || _b === void 0 ? void 0 : _b.runtimeEnvironment) === null || _c === void 0 ? void 0 : _c.isCloud; });
export const supportsAdvancedVisibility = derived([cluster, temporalVersion, isCloud], ([$cluster, $temporalVersion, $isCloud]) => advancedVisibilityEnabled($cluster, $temporalVersion) || $isCloud);
export const supportsAdvancedVisibilityWithOrderBy = derived([cluster, isCloud], ([$cluster, $isCloud]) => advancedVisibilityEnabledWithOrderBy($cluster) || $isCloud);
