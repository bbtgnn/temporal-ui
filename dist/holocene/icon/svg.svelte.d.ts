import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        title?: string;
        width?: number;
        height?: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type SvgProps = typeof __propDef.props;
export type SvgEvents = typeof __propDef.events;
export type SvgSlots = typeof __propDef.slots;
export default class Svg extends SvelteComponentTyped<SvgProps, SvgEvents, SvgSlots> {
}
export {};
