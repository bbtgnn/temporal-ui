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
export type ResultsProps = typeof __propDef.props;
export type ResultsEvents = typeof __propDef.events;
export type ResultsSlots = typeof __propDef.slots;
export default class Results extends SvelteComponentTyped<ResultsProps, ResultsEvents, ResultsSlots> {
}
export {};
