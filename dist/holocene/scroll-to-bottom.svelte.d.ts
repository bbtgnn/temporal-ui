import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        hidden: boolean;
        onScrollToBottomClick: () => void;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ScrollToBottomProps = typeof __propDef.props;
export type ScrollToBottomEvents = typeof __propDef.events;
export type ScrollToBottomSlots = typeof __propDef.slots;
export default class ScrollToBottom extends SvelteComponentTyped<ScrollToBottomProps, ScrollToBottomEvents, ScrollToBottomSlots> {
}
export {};
