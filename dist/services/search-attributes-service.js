import { requestFromAPI } from '../utilities/request-from-api';
import { routeForApi } from '../utilities/route-for-api';
import { toSearchAttributeTypeReadable } from '../utilities/screaming-enums';
export const fetchSearchAttributesForNamespace = async (namespace, request = fetch) => {
    try {
        const route = routeForApi('search-attributes', { namespace });
        const searchAttributesResponse = await requestFromAPI(route, {
            request,
        });
        const customAttributes = { ...searchAttributesResponse.customAttributes };
        const systemAttributes = { ...searchAttributesResponse.systemAttributes };
        Object.entries(customAttributes).forEach(([key, value]) => {
            customAttributes[key] = toSearchAttributeTypeReadable(value);
        });
        Object.entries(systemAttributes).forEach(([key, value]) => {
            systemAttributes[key] = toSearchAttributeTypeReadable(value);
        });
        return {
            customAttributes,
            systemAttributes,
        };
    }
    catch (e) {
        console.error('Error fetching search attributes for namespace', namespace, e);
        return {
            customAttributes: {},
            systemAttributes: {},
        };
    }
};
