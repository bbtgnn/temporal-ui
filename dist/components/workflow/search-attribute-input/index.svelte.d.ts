import { SvelteComponentTyped } from "svelte";
import { type SearchAttributeInput } from '../../../stores/search-attributes';
declare const __propDef: {
    props: {
        attributesToAdd?: SearchAttributeInput[];
        attribute: SearchAttributeInput;
        onRemove: (attribute: string) => void;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type IndexProps = typeof __propDef.props;
export type IndexEvents = typeof __propDef.events;
export type IndexSlots = typeof __propDef.slots;
export default class Index extends SvelteComponentTyped<IndexProps, IndexEvents, IndexSlots> {
}
export {};
