import { SvelteComponentTyped } from "svelte";
export declare const scrollTop: import("svelte/store").Writable<number>;
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
        main: {};
        footer: {};
    };
};
export type MainContentContainerProps = typeof __propDef.props;
export type MainContentContainerEvents = typeof __propDef.events;
export type MainContentContainerSlots = typeof __propDef.slots;
export default class MainContentContainer extends SvelteComponentTyped<MainContentContainerProps, MainContentContainerEvents, MainContentContainerSlots> {
}
export {};
