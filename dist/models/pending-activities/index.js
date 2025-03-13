import { get } from 'svelte/store';
import { page } from '$app/stores';
import { authUser } from '../../stores/auth-user';
import { convertPayloadToJsonWithCodec, decodePayloadAttributes, } from '../../utilities/decode-payload';
export async function getActivityAttributes({ activity, namespace, settings, accessToken }, { convertWithCodec = convertPayloadToJsonWithCodec, decodeAttributes = decodePayloadAttributes, } = {}) {
    const convertedAttributes = await convertWithCodec({
        attributes: activity,
        namespace,
        settings,
        accessToken,
    });
    const decodedAttributes = decodeAttributes(convertedAttributes);
    return decodedAttributes;
}
const decodePendingActivity = async ({ activity, namespace, settings, accessToken, }) => {
    const decodedActivity = await getActivityAttributes({
        activity,
        namespace,
        settings,
        accessToken,
    });
    return decodedActivity;
};
export const toDecodedPendingActivities = async (workflow, namespace = get(page).params.namespace, settings = get(page).data.settings, accessToken = get(authUser).accessToken) => {
    var _a;
    const pendingActivities = (_a = workflow === null || workflow === void 0 ? void 0 : workflow.pendingActivities) !== null && _a !== void 0 ? _a : [];
    const decodedActivities = [];
    for (const activity of pendingActivities) {
        const decodedActivity = await decodePendingActivity({
            activity,
            namespace,
            settings,
            accessToken,
        });
        decodedActivities.push(decodedActivity);
    }
    return decodedActivities;
};
