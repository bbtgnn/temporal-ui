import { stringifyWithBigInt } from '../utilities/parse-with-big-int';
import { requestFromAPI } from '../utilities/request-from-api';
import { routeForApi } from '../utilities/route-for-api';
export const failActivityTask = async ({ namespace, workflowId, runId, activityId, failure, identity, lastHeartbeatDetails, }) => {
    const route = routeForApi('activity.fail', {
        namespace,
    });
    return requestFromAPI(route, {
        notifyOnError: false,
        options: {
            body: stringifyWithBigInt({ failure, identity, lastHeartbeatDetails }),
        },
        params: {
            workflowId,
            runId,
            activityId,
        },
    });
};
export const completeActivityTask = async ({ namespace, workflowId, runId, activityId, identity, result, }) => {
    const route = routeForApi('activity.complete', {
        namespace,
    });
    return requestFromAPI(route, {
        notifyOnError: false,
        options: { body: stringifyWithBigInt({ identity, result }) },
        params: {
            workflowId,
            runId,
            activityId,
        },
    });
};
