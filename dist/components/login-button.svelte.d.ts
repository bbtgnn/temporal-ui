import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type LoginButtonProps = typeof __propDef.props;
export type LoginButtonEvents = typeof __propDef.events;
export type LoginButtonSlots = typeof __propDef.slots;
export default class LoginButton extends SvelteComponentTyped<LoginButtonProps, LoginButtonEvents, LoginButtonSlots> {
}
export {};
