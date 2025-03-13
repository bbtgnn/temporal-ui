import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        scrollToTopHidden?: boolean;
        scrollToBottomHidden?: boolean;
        onScrollToTopClick: () => void;
        onScrollToBottomClick: () => void;
        scrollToTopAriaLabel: string;
        scrollToBottomAriaLabel: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ScrollToContainerProps = typeof __propDef.props;
export type ScrollToContainerEvents = typeof __propDef.events;
export type ScrollToContainerSlots = typeof __propDef.slots;
export default class ScrollToContainer extends SvelteComponentTyped<ScrollToContainerProps, ScrollToContainerEvents, ScrollToContainerSlots> {
}
export {};
