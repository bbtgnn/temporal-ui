import { derived } from 'svelte/store';
import { page } from '$app/stores';
export const cluster = derived([page], ([$page]) => {
    var _a;
    return (_a = $page.data) === null || _a === void 0 ? void 0 : _a.cluster;
});
