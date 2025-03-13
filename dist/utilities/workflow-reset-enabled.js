export const workflowResetEnabled = (settings, coreUser, namespace) => {
    return (!settings.disableWriteActions &&
        !settings.workflowResetDisabled &&
        !coreUser.namespaceWriteDisabled(namespace));
};
