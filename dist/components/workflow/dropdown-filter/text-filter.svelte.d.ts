import { SvelteComponentTyped } from "svelte";
import { type TextFilterAttributes } from '../../../models/workflow-filters';
declare const __propDef: {
    props: {
        attribute: TextFilterAttributes;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type TextFilterProps = typeof __propDef.props;
export type TextFilterEvents = typeof __propDef.events;
export type TextFilterSlots = typeof __propDef.slots;
export default class TextFilter extends SvelteComponentTyped<TextFilterProps, TextFilterEvents, TextFilterSlots> {
}
export {};
