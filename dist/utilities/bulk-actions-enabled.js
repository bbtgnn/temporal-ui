const ALLOWED_BULK_ACTIONS = ['workflowCancelDisabled', 'workflowTerminateDisabled'];
export const bulkActionsEnabled = (settings) => {
    if (settings.disableWriteActions)
        return false;
    if (settings.batchActionsDisabled)
        return false;
    return ALLOWED_BULK_ACTIONS.some((action) => !settings[action]);
};
