import { SvelteComponentTyped } from "svelte";
import type { I18nKey, I18nReplace } from '.';
declare const __propDef: {
    props: {
        key: I18nKey;
        count?: number;
        replace?: I18nReplace;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type TranslateProps = typeof __propDef.props;
export type TranslateEvents = typeof __propDef.events;
export type TranslateSlots = typeof __propDef.slots;
export default class Translate extends SvelteComponentTyped<TranslateProps, TranslateEvents, TranslateSlots> {
}
export {};
