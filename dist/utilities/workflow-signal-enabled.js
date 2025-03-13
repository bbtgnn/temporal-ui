export const workflowSignalEnabled = (settings, coreUser, namespace) => {
    return (!settings.disableWriteActions &&
        !settings.workflowSignalDisabled &&
        !coreUser.namespaceWriteDisabled(namespace));
};
