import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        hidden: boolean;
        onScrollToTopClick: () => void;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ScrollToTopProps = typeof __propDef.props;
export type ScrollToTopEvents = typeof __propDef.events;
export type ScrollToTopSlots = typeof __propDef.slots;
export default class ScrollToTop extends SvelteComponentTyped<ScrollToTopProps, ScrollToTopEvents, ScrollToTopSlots> {
}
export {};
