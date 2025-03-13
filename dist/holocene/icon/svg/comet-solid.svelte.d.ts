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
export type CometSolidProps = typeof __propDef.props;
export type CometSolidEvents = typeof __propDef.events;
export type CometSolidSlots = typeof __propDef.slots;
export default class CometSolid extends SvelteComponentTyped<CometSolidProps, CometSolidEvents, CometSolidSlots> {
}
export {};
