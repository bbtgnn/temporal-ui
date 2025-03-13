import { get } from 'svelte/store';
import { coreUserStore } from '../stores/core-user';
export const workflowCreateDisabled = (page, namespace) => {
    var _a, _b, _c, _d;
    const coreUser = coreUserStore();
    const namespaceWriteDisabled = get(coreUser).namespaceWriteDisabled(namespace !== null && namespace !== void 0 ? namespace : page.params.namespace);
    if ((_b = (_a = page === null || page === void 0 ? void 0 : page.data) === null || _a === void 0 ? void 0 : _a.settings) === null || _b === void 0 ? void 0 : _b.disableWriteActions)
        return true;
    if ((_d = (_c = page === null || page === void 0 ? void 0 : page.data) === null || _c === void 0 ? void 0 : _c.settings) === null || _d === void 0 ? void 0 : _d.startWorkflowDisabled)
        return true;
    return namespaceWriteDisabled;
};
