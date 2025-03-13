export const workflowTerminateEnabled = (settings, coreUser, namespace) => {
    return (!settings.disableWriteActions &&
        !settings.workflowTerminateDisabled &&
        !coreUser.namespaceWriteDisabled(namespace));
};
