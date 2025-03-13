import { SvelteComponentTyped } from "svelte";
import type { BatchOperation } from '../../types/batch';
declare const __propDef: {
    props: {
        operation: BatchOperation;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type DetailsProps = typeof __propDef.props;
export type DetailsEvents = typeof __propDef.events;
export type DetailsSlots = typeof __propDef.slots;
export default class Details extends SvelteComponentTyped<DetailsProps, DetailsEvents, DetailsSlots> {
}
export {};
