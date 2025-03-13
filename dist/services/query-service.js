import { translate } from '../i18n/translate';
import { convertPayloadToJsonWithCodec } from '../utilities/decode-payload';
import { getQueryTypesFromError } from '../utilities/get-query-types-from-error';
import { has } from '../utilities/has';
import { stringifyWithBigInt } from '../utilities/parse-with-big-int';
import { requestFromAPI } from '../utilities/request-from-api';
import { routeForApi } from '../utilities/route-for-api';
const formatParameters = async (namespace, workflow, queryType) => {
    workflow = await workflow;
    return {
        namespace,
        workflowId: workflow.id,
        queryType,
    };
};
async function fetchQuery({ workflow, namespace, queryType, queryArgs }, signal) {
    workflow = await workflow;
    const parameters = await formatParameters(namespace, workflow, queryType);
    const route = routeForApi('query', parameters);
    return await requestFromAPI(route, {
        options: {
            method: 'POST',
            body: stringifyWithBigInt({
                execution: {
                    workflowId: workflow.id,
                    runId: workflow.runId,
                },
                query: {
                    queryType,
                    queryArgs,
                },
            }),
            signal,
        },
        request: fetch,
        notifyOnError: false,
    });
}
export async function getWorkflowMetadata(options, settings, accessToken, signal) {
    var _a;
    try {
        const metadata = await getQuery({ ...options, queryType: '__temporal_workflow_metadata' }, settings, accessToken, signal);
        if (!metadata.currentDetails) {
            metadata.currentDetails = translate('workflows.no-current-details');
        }
        return metadata;
    }
    catch (e) {
        if ((_a = e.message) === null || _a === void 0 ? void 0 : _a.includes('__temporal_workflow_metadata')) {
            const queryDefinitions = getQueryTypesFromError(e.message);
            return {
                definition: {
                    queryDefinitions,
                },
                currentDetails: translate('workflows.no-current-details'),
            };
        }
        else {
            return {
                error: e,
                currentDetails: translate('workflows.no-current-details'),
            };
        }
    }
}
export async function getQuery(options, settings, accessToken, signal) {
    return fetchQuery(options, signal).then(async (execution) => {
        const { queryResult } = execution !== null && execution !== void 0 ? execution : { queryResult: { payloads: [] } };
        let data = queryResult.payloads;
        try {
            if (data[0]) {
                const convertedAttributes = await convertPayloadToJsonWithCodec({
                    attributes: queryResult,
                    namespace: options.namespace,
                    settings,
                    accessToken,
                });
                if (has(convertedAttributes, 'payloads') &&
                    Array.isArray(convertedAttributes.payloads)) {
                    data = convertedAttributes.payloads[0];
                }
            }
            return data;
        }
        catch (e) {
            if (typeof data !== 'string') {
                return stringifyWithBigInt(data);
            }
            return data;
        }
    });
}
export async function getWorkflowStackTrace(options, settings, accessToken) {
    return getQuery({ ...options, queryType: '__stack_trace' }, settings, accessToken);
}
