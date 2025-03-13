import { SvelteComponentTyped } from "svelte";
import type { IconName } from '../../../holocene/icon';
declare const __propDef: {
    props: {
        point: [number, number];
        category?: string | undefined;
        classification?: string | undefined;
        r?: number;
        icon?: IconName | undefined;
        strokeWidth?: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type DotProps = typeof __propDef.props;
export type DotEvents = typeof __propDef.events;
export type DotSlots = typeof __propDef.slots;
export default class Dot extends SvelteComponentTyped<DotProps, DotEvents, DotSlots> {
}
export {};
