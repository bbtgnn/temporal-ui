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
export type UserMenuMobileProps = typeof __propDef.props;
export type UserMenuMobileEvents = typeof __propDef.events;
export type UserMenuMobileSlots = typeof __propDef.slots;
export default class UserMenuMobile extends SvelteComponentTyped<UserMenuMobileProps, UserMenuMobileEvents, UserMenuMobileSlots> {
}
export {};
