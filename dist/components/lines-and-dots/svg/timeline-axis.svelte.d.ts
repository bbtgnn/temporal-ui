import { SvelteComponentTyped } from "svelte";
import type { Timestamp } from '../../../types';
declare const __propDef: {
    props: {
        x1?: number;
        x2?: number;
        timelineHeight?: number;
        startTime: string | Timestamp;
        duration: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type TimelineAxisProps = typeof __propDef.props;
export type TimelineAxisEvents = typeof __propDef.events;
export type TimelineAxisSlots = typeof __propDef.slots;
export default class TimelineAxis extends SvelteComponentTyped<TimelineAxisProps, TimelineAxisEvents, TimelineAxisSlots> {
}
export {};
