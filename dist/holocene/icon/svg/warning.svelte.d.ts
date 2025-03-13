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
export type WarningProps = typeof __propDef.props;
export type WarningEvents = typeof __propDef.events;
export type WarningSlots = typeof __propDef.slots;
export default class Warning extends SvelteComponentTyped<WarningProps, WarningEvents, WarningSlots> {
}
export {};
