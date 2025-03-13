import { SvelteComponentTyped } from "svelte";
import type { IconName } from '../../../holocene/icon';
import type { GraphConfig } from '../constants';
declare const __propDef: {
    props: {
        point?: [number, number];
        category?: string | undefined;
        status?: string | undefined;
        fontSize?: string;
        fontWeight?: string;
        textAnchor?: string;
        backdrop?: boolean;
        backdropHeight?: number;
        icon?: IconName | undefined;
        config?: GraphConfig | undefined;
        label?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type TextProps = typeof __propDef.props;
export type TextEvents = typeof __propDef.events;
export type TextSlots = typeof __propDef.slots;
export default class Text extends SvelteComponentTyped<TextProps, TextEvents, TextSlots> {
}
export {};
