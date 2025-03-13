import { writable } from 'svelte/store';
const emptyPrevious = {
    namespace: null,
    workflowId: null,
    runId: null,
    rawPayloads: null,
    sort: null,
};
export const previous = writable(emptyPrevious);
export const clearPreviousEventParameters = () => {
    previous.set(emptyPrevious);
};
