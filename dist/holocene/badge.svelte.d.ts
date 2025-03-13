import { SvelteComponentTyped } from "svelte";
import { type VariantProps } from 'class-variance-authority';
export type BadgeType = VariantProps<typeof types>['type'];
declare const types: (props?: {
    type?: "default" | "success" | "warning" | "count" | "primary" | "secondary" | "danger" | "subtle";
} & import("class-variance-authority/dist/types").ClassProp) => string;
export declare const badgeTypes: ("default" | "success" | "warning" | "count" | "primary" | "secondary" | "danger" | "subtle")[];
declare const __propDef: {
    props: {
        type?: BadgeType | undefined | null | false;
        class?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type BadgeProps = typeof __propDef.props;
export type BadgeEvents = typeof __propDef.events;
export type BadgeSlots = typeof __propDef.slots;
export default class Badge extends SvelteComponentTyped<BadgeProps, BadgeEvents, BadgeSlots> {
}
export {};
