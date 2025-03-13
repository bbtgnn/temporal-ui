import { writable } from 'svelte/store';
import { pollBatchOperation } from '../services/batch-service';
import { persistStore } from './persist-store';
export const inProgressBatchOperation = writable();
inProgressBatchOperation.subscribe(async (operation) => {
    if (operation) {
        await pollBatchOperation(operation).then(() => inProgressBatchOperation.set(undefined));
    }
});
export const autoRefresh = persistStore('auto-refresh-batch-operation', false);
