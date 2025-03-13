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
export type CometProps = typeof __propDef.props;
export type CometEvents = typeof __propDef.events;
export type CometSlots = typeof __propDef.slots;
export default class Comet extends SvelteComponentTyped<CometProps, CometEvents, CometSlots> {
}
export {};
