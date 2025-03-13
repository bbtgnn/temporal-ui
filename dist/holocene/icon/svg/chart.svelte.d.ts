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
export type ChartProps = typeof __propDef.props;
export type ChartEvents = typeof __propDef.events;
export type ChartSlots = typeof __propDef.slots;
export default class Chart extends SvelteComponentTyped<ChartProps, ChartEvents, ChartSlots> {
}
export {};
