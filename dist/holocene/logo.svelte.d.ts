import { SvelteComponentTyped } from "svelte";
import type { SVGAttributes } from 'svelte/elements';
declare const __propDef: {
    props: SVGAttributes<SVGElement> & {
        width?: number;
        height?: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type LogoProps = typeof __propDef.props;
export type LogoEvents = typeof __propDef.events;
export type LogoSlots = typeof __propDef.slots;
export default class Logo extends SvelteComponentTyped<LogoProps, LogoEvents, LogoSlots> {
}
export {};
