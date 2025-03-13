import { SvelteComponentTyped } from "svelte";
import type { NetworkError } from '../types/global';
declare const __propDef: {
    props: {
        error?: App.Error | NetworkError;
        status?: number;
    };
    events: {
        clearError: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ErrorProps = typeof __propDef.props;
export type ErrorEvents = typeof __propDef.events;
export type ErrorSlots = typeof __propDef.slots;
export default class Error extends SvelteComponentTyped<ErrorProps, ErrorEvents, ErrorSlots> {
}
export {};
