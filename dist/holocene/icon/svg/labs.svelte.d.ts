import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        active?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type LabsProps = typeof __propDef.props;
export type LabsEvents = typeof __propDef.events;
export type LabsSlots = typeof __propDef.slots;
export default class Labs extends SvelteComponentTyped<LabsProps, LabsEvents, LabsSlots> {
}
export {};
