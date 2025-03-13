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
export type TemporalLogoProps = typeof __propDef.props;
export type TemporalLogoEvents = typeof __propDef.events;
export type TemporalLogoSlots = typeof __propDef.slots;
export default class TemporalLogo extends SvelteComponentTyped<TemporalLogoProps, TemporalLogoEvents, TemporalLogoSlots> {
}
export {};
