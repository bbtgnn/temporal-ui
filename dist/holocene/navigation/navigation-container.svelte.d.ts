import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        isCloud?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
        bottom: {};
    };
};
export type NavigationContainerProps = typeof __propDef.props;
export type NavigationContainerEvents = typeof __propDef.events;
export type NavigationContainerSlots = typeof __propDef.slots;
export default class NavigationContainer extends SvelteComponentTyped<NavigationContainerProps, NavigationContainerEvents, NavigationContainerSlots> {
}
export {};
