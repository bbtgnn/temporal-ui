import { SvelteComponentTyped } from "svelte";
import type { IconName } from './icon';
import type { Only } from '../types/global';
declare const __propDef: {
    props: {
        text?: string;
        icon?: IconName;
        hide?: boolean;
        width?: number;
        class?: string;
        show?: boolean;
    } & (Only<{
        top?: boolean;
        topRight?: boolean;
        right?: boolean;
        bottomRight?: boolean;
        bottom?: boolean;
        bottomLeft?: boolean;
        left?: boolean;
        topLeft?: boolean;
    }, "top"> | Only<{
        top?: boolean;
        topRight?: boolean;
        right?: boolean;
        bottomRight?: boolean;
        bottom?: boolean;
        bottomLeft?: boolean;
        left?: boolean;
        topLeft?: boolean;
    }, "topRight"> | Only<{
        top?: boolean;
        topRight?: boolean;
        right?: boolean;
        bottomRight?: boolean;
        bottom?: boolean;
        bottomLeft?: boolean;
        left?: boolean;
        topLeft?: boolean;
    }, "right"> | Only<{
        top?: boolean;
        topRight?: boolean;
        right?: boolean;
        bottomRight?: boolean;
        bottom?: boolean;
        bottomLeft?: boolean;
        left?: boolean;
        topLeft?: boolean;
    }, "bottomRight"> | Only<{
        top?: boolean;
        topRight?: boolean;
        right?: boolean;
        bottomRight?: boolean;
        bottom?: boolean;
        bottomLeft?: boolean;
        left?: boolean;
        topLeft?: boolean;
    }, "bottom"> | Only<{
        top?: boolean;
        topRight?: boolean;
        right?: boolean;
        bottomRight?: boolean;
        bottom?: boolean;
        bottomLeft?: boolean;
        left?: boolean;
        topLeft?: boolean;
    }, "bottomLeft"> | Only<{
        top?: boolean;
        topRight?: boolean;
        right?: boolean;
        bottomRight?: boolean;
        bottom?: boolean;
        bottomLeft?: boolean;
        left?: boolean;
        topLeft?: boolean;
    }, "left"> | Only<{
        top?: boolean;
        topRight?: boolean;
        right?: boolean;
        bottomRight?: boolean;
        bottom?: boolean;
        bottomLeft?: boolean;
        left?: boolean;
        topLeft?: boolean;
    }, "topLeft">);
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
        content: {};
    };
};
export type TooltipProps = typeof __propDef.props;
export type TooltipEvents = typeof __propDef.events;
export type TooltipSlots = typeof __propDef.slots;
export default class Tooltip extends SvelteComponentTyped<TooltipProps, TooltipEvents, TooltipSlots> {
}
export {};
