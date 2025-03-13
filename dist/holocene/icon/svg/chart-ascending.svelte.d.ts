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
export type ChartAscendingProps = typeof __propDef.props;
export type ChartAscendingEvents = typeof __propDef.events;
export type ChartAscendingSlots = typeof __propDef.slots;
export default class ChartAscending extends SvelteComponentTyped<ChartAscendingProps, ChartAscendingEvents, ChartAscendingSlots> {
}
export {};
