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
export type ExitProps = typeof __propDef.props;
export type ExitEvents = typeof __propDef.events;
export type ExitSlots = typeof __propDef.slots;
export default class Exit extends SvelteComponentTyped<ExitProps, ExitEvents, ExitSlots> {
}
export {};
