import { readable } from 'svelte/store';
const settings = {
    auth: {
        enabled: false,
        options: null,
    },
    baseUrl: 'http://localhost:3000',
    bannerText: '',
    codec: {
        endpoint: '',
        passAccessToken: false,
        includeCredentials: false,
    },
    defaultNamespace: 'default',
    disableWriteActions: false,
    showTemporalSystemNamespace: false,
    batchActionsDisabled: false,
    workflowResetDisabled: false,
    workflowCancelDisabled: false,
    workflowSignalDisabled: false,
    workflowUpdateDisabled: false,
    workflowTerminateDisabled: false,
    hideWorkflowQueryErrors: false,
    notifyOnNewVersion: true,
    feedbackURL: '',
    runtimeEnvironment: {
        isCloud: false,
        isLocal: true,
        envOverride: true,
    },
    version: '2.28.0',
};
const data = {
    settings,
};
export const page = readable({
    error: null,
    params: {
        namespace: 'default',
    },
    routeId: 'namespaces/[namespace]/workflows@root',
    status: 200,
    data,
    url: new URL('http://localhost:3000/namespaces/default/workflows?search=basic&query=WorkflowType%3D%22testing%22'),
});
