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
export type LightningBoltProps = typeof __propDef.props;
export type LightningBoltEvents = typeof __propDef.events;
export type LightningBoltSlots = typeof __propDef.slots;
export default class LightningBolt extends SvelteComponentTyped<LightningBoltProps, LightningBoltEvents, LightningBoltSlots> {
}
export {};
