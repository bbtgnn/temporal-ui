import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type LogoutProps = typeof __propDef.props;
export type LogoutEvents = typeof __propDef.events;
export type LogoutSlots = typeof __propDef.slots;
export default class Logout extends SvelteComponentTyped<LogoutProps, LogoutEvents, LogoutSlots> {
}
export {};
