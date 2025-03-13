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
export type EyeShowProps = typeof __propDef.props;
export type EyeShowEvents = typeof __propDef.events;
export type EyeShowSlots = typeof __propDef.slots;
export default class EyeShow extends SvelteComponentTyped<EyeShowProps, EyeShowEvents, EyeShowSlots> {
}
export {};
