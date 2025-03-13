import { convertPayloadToJsonWithCodec, decodePayloadAttributes, } from '../../utilities/decode-payload';
import { formatDate } from '../../utilities/format-date';
import { has } from '../../utilities/has';
import { findAttributesAndKey } from '../../utilities/is-event-type';
import { toEventNameReadable } from '../../utilities/screaming-enums';
import { getEventCategory } from './get-event-categorization';
import { getEventClassification } from './get-event-classification';
import { simplifyAttributes } from './simplify-attributes';
export async function getEventAttributes({ historyEvent, namespace, settings, accessToken }, { convertWithCodec = convertPayloadToJsonWithCodec, decodeAttributes = decodePayloadAttributes, } = {}) {
    const { key, attributes } = findAttributesAndKey(historyEvent);
    const convertedAttributes = await convertWithCodec({
        attributes,
        namespace,
        settings,
        accessToken,
    });
    const decodedAttributes = decodeAttributes(convertedAttributes);
    return {
        type: key,
        ...decodedAttributes,
    };
}
export const toEvent = (historyEvent) => {
    const id = String(historyEvent.eventId);
    const eventType = toEventNameReadable(historyEvent.eventType);
    const timestamp = formatDate(String(historyEvent.eventTime));
    const classification = getEventClassification(eventType);
    const category = getEventCategory(eventType);
    const { key, attributes } = findAttributesAndKey(historyEvent);
    const links = (historyEvent === null || historyEvent === void 0 ? void 0 : historyEvent.links) || [];
    return {
        ...historyEvent,
        name: eventType,
        id,
        eventType,
        timestamp,
        classification,
        category,
        links,
        attributes: simplifyAttributes({ type: key, ...attributes }),
    };
};
export const toEventHistory = (events) => {
    return events.map(toEvent);
};
export const isEvent = (event) => {
    if (event === null)
        return false;
    if (typeof event !== 'object')
        return false;
    if (Array.isArray(event))
        return false;
    if (has(event, 'eventType'))
        return true;
    return false;
};
export const fromEventToRawEvent = (event) => {
    const workflowEvent = { ...event };
    delete workflowEvent.name;
    delete workflowEvent.id;
    delete workflowEvent.timestamp;
    delete workflowEvent.classification;
    delete workflowEvent.category;
    delete workflowEvent.attributes;
    return workflowEvent;
};
