import { BROWSER } from 'esm-env';
import { getApiOrigin } from '../utilities/get-api-origin';
import { getEnvironment } from '../utilities/get-environment';
import { requestFromAPI } from '../utilities/request-from-api';
import { routeForApi } from '../utilities/route-for-api';
export const isCloudMatch = /(tmprl\.cloud|tmprl-test\.cloud)$/;
export const fetchSettings = async (request = fetch) => {
    var _a, _b, _c, _d, _e;
    const route = routeForApi('settings');
    const settingsResponse = await requestFromAPI(route, {
        request,
    });
    const EnvironmentOverride = getEnvironment();
    const settingsInformation = {
        auth: {
            enabled: !!((_a = settingsResponse === null || settingsResponse === void 0 ? void 0 : settingsResponse.Auth) === null || _a === void 0 ? void 0 : _a.Enabled),
            options: (_b = settingsResponse === null || settingsResponse === void 0 ? void 0 : settingsResponse.Auth) === null || _b === void 0 ? void 0 : _b.Options,
        },
        bannerText: settingsResponse === null || settingsResponse === void 0 ? void 0 : settingsResponse.BannerText,
        baseUrl: getApiOrigin(),
        codec: {
            endpoint: (_c = settingsResponse === null || settingsResponse === void 0 ? void 0 : settingsResponse.Codec) === null || _c === void 0 ? void 0 : _c.Endpoint,
            passAccessToken: (_d = settingsResponse === null || settingsResponse === void 0 ? void 0 : settingsResponse.Codec) === null || _d === void 0 ? void 0 : _d.PassAccessToken,
            includeCredentials: (_e = settingsResponse === null || settingsResponse === void 0 ? void 0 : settingsResponse.Codec) === null || _e === void 0 ? void 0 : _e.IncludeCredentials,
        },
        defaultNamespace: (settingsResponse === null || settingsResponse === void 0 ? void 0 : settingsResponse.DefaultNamespace) || 'default',
        disableWriteActions: !!(settingsResponse === null || settingsResponse === void 0 ? void 0 : settingsResponse.DisableWriteActions) || false,
        workflowTerminateDisabled: !!(settingsResponse === null || settingsResponse === void 0 ? void 0 : settingsResponse.WorkflowTerminateDisabled),
        workflowCancelDisabled: !!(settingsResponse === null || settingsResponse === void 0 ? void 0 : settingsResponse.WorkflowCancelDisabled),
        workflowSignalDisabled: !!(settingsResponse === null || settingsResponse === void 0 ? void 0 : settingsResponse.WorkflowSignalDisabled),
        workflowUpdateDisabled: !!(settingsResponse === null || settingsResponse === void 0 ? void 0 : settingsResponse.WorkflowUpdateDisabled),
        workflowResetDisabled: !!(settingsResponse === null || settingsResponse === void 0 ? void 0 : settingsResponse.WorkflowResetDisabled),
        batchActionsDisabled: !!(settingsResponse === null || settingsResponse === void 0 ? void 0 : settingsResponse.BatchActionsDisabled),
        startWorkflowDisabled: !!(settingsResponse === null || settingsResponse === void 0 ? void 0 : settingsResponse.StartWorkflowDisabled),
        hideWorkflowQueryErrors: !!(settingsResponse === null || settingsResponse === void 0 ? void 0 : settingsResponse.HideWorkflowQueryErrors),
        refreshWorkflowCountsDisabled: !!(settingsResponse === null || settingsResponse === void 0 ? void 0 : settingsResponse.RefreshWorkflowCountsDisabled),
        showTemporalSystemNamespace: settingsResponse === null || settingsResponse === void 0 ? void 0 : settingsResponse.ShowTemporalSystemNamespace,
        notifyOnNewVersion: settingsResponse === null || settingsResponse === void 0 ? void 0 : settingsResponse.NotifyOnNewVersion,
        feedbackURL: settingsResponse === null || settingsResponse === void 0 ? void 0 : settingsResponse.FeedbackURL,
        runtimeEnvironment: {
            get isCloud() {
                if (EnvironmentOverride) {
                    return EnvironmentOverride === 'cloud';
                }
                return isCloudMatch.test(BROWSER ? window.location.hostname : '');
            },
            get isLocal() {
                if (EnvironmentOverride) {
                    return EnvironmentOverride === 'local';
                }
                return isCloudMatch.test(BROWSER ? window.location.hostname : '');
            },
            envOverride: Boolean(EnvironmentOverride),
        },
        version: settingsResponse === null || settingsResponse === void 0 ? void 0 : settingsResponse.Version,
    };
    return settingsInformation;
};
