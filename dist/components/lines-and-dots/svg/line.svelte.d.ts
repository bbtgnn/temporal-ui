import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        startPoint?: number[];
        endPoint?: number[];
        status?: string | undefined;
        category?: string | undefined;
        classification?: string | undefined;
        scheduling?: boolean;
        pending?: boolean;
        strokeWidth?: number;
        strokeDasharray?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type LineProps = typeof __propDef.props;
export type LineEvents = typeof __propDef.events;
export type LineSlots = typeof __propDef.slots;
export default class Line extends SvelteComponentTyped<LineProps, LineEvents, LineSlots> {
}
export {};
