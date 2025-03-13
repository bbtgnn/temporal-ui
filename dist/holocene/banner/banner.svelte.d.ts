import { SvelteComponentTyped } from "svelte";
import { type VariantProps } from 'class-variance-authority';
export declare const dismissedBanners: Pick<import("svelte/store").Writable<Record<string, boolean>>, "update" | "subscribe" | "set">;
export type BannerType = VariantProps<typeof types>['type'];
declare const types: (props?: {
    type?: "default" | "danger";
} & import("class-variance-authority/dist/types").ClassProp) => string;
import type { IconName } from '../icon';
declare const __propDef: {
    props: {
        id: string;
        message: string;
        dismissible?: boolean;
        icon?: IconName;
        type?: BannerType;
        class?: string;
    } | ({
        id: string;
        message: string;
        dismissible?: boolean;
        icon?: IconName;
        type?: BannerType;
        class?: string;
    } & {
        dismissable: true;
        dismissLabel: string;
    });
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type BannerProps = typeof __propDef.props;
export type BannerEvents = typeof __propDef.events;
export type BannerSlots = typeof __propDef.slots;
export default class Banner extends SvelteComponentTyped<BannerProps, BannerEvents, BannerSlots> {
}
export {};
