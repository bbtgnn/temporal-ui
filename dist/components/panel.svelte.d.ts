import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        error?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type PanelProps = typeof __propDef.props;
export type PanelEvents = typeof __propDef.events;
export type PanelSlots = typeof __propDef.slots;
export default class Panel extends SvelteComponentTyped<PanelProps, PanelEvents, PanelSlots> {
}
export {};
