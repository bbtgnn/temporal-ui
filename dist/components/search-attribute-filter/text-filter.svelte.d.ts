import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
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
