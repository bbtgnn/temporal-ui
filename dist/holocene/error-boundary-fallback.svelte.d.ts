import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        error?: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        fallback: {};
        default: {};
    };
};
export type ErrorBoundaryFallbackProps = typeof __propDef.props;
export type ErrorBoundaryFallbackEvents = typeof __propDef.events;
export type ErrorBoundaryFallbackSlots = typeof __propDef.slots;
export default class ErrorBoundaryFallback extends SvelteComponentTyped<ErrorBoundaryFallbackProps, ErrorBoundaryFallbackEvents, ErrorBoundaryFallbackSlots> {
}
export {};
