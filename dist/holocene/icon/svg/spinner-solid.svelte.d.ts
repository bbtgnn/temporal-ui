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
export type SpinnerSolidProps = typeof __propDef.props;
export type SpinnerSolidEvents = typeof __propDef.events;
export type SpinnerSolidSlots = typeof __propDef.slots;
export default class SpinnerSolid extends SvelteComponentTyped<SpinnerSolidProps, SpinnerSolidEvents, SpinnerSolidSlots> {
}
export {};
