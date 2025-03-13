import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        point: [number, number];
        width: number;
        height: number;
        classification?: string | undefined;
        fill?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type BoxProps = typeof __propDef.props;
export type BoxEvents = typeof __propDef.events;
export type BoxSlots = typeof __propDef.slots;
export default class Box extends SvelteComponentTyped<BoxProps, BoxEvents, BoxSlots> {
}
export {};
