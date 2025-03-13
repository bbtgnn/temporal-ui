export const workflowCancelEnabled = (settings, coreUser, namespace) => {
    return (!settings.disableWriteActions &&
        !settings.workflowCancelDisabled &&
        !coreUser.namespaceWriteDisabled(namespace));
};
