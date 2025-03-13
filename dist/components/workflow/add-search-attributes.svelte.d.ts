import { SvelteComponentTyped } from "svelte";
import { type SearchAttributeInput as SAInput } from '../../stores/search-attributes';
declare const __propDef: {
    props: {
        class?: string;
        attributesToAdd?: SAInput[];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type AddSearchAttributesProps = typeof __propDef.props;
export type AddSearchAttributesEvents = typeof __propDef.events;
export type AddSearchAttributesSlots = typeof __propDef.slots;
export default class AddSearchAttributes extends SvelteComponentTyped<AddSearchAttributesProps, AddSearchAttributesEvents, AddSearchAttributesSlots> {
}
export {};
