import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        logout: () => void;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type UserMenuProps = typeof __propDef.props;
export type UserMenuEvents = typeof __propDef.events;
export type UserMenuSlots = typeof __propDef.slots;
export default class UserMenu extends SvelteComponentTyped<UserMenuProps, UserMenuEvents, UserMenuSlots> {
}
export {};
