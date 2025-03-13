import { readable } from 'svelte/store';
import { getContext, hasContext } from 'svelte';
import { CoreUserKey } from '../models/core-user';
export const defaultCoreUserStore = readable({
    namespaceWriteDisabled: () => false,
});
export const coreUserStore = () => {
    if (!hasContext(CoreUserKey))
        return defaultCoreUserStore;
    return getContext(CoreUserKey);
};
