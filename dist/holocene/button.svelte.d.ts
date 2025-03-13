import { SvelteComponentTyped } from "svelte";
declare const buttonStyles: (props?: {
    variant?: "primary" | "secondary" | "destructive" | "ghost" | "table-header";
    size?: "xs" | "sm" | "md" | "lg";
} & import("class-variance-authority/dist/types").ClassProp) => string;
type BaseProps = {
    disabled?: boolean;
    loading?: boolean;
    leadingIcon?: IconName;
    trailingIcon?: IconName;
    count?: number;
    id?: string;
    'data-testid'?: string;
};
export type ButtonStyles = VariantProps<typeof buttonStyles>;
export type ButtonWithoutHrefProps = BaseProps & ButtonStyles & HTMLButtonAttributes;
export type ButtonWithHrefProps = BaseProps & ButtonStyles & HTMLAnchorAttributes & {
    href: string;
    target?: HTMLAnchorAttributes['target'];
    disabled?: boolean;
};
import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';
import { type VariantProps } from 'class-variance-authority';
import type { IconName } from './icon';
declare const __propDef: {
    props: ButtonWithoutHrefProps | ButtonWithHrefProps;
    events: {
        click: MouseEvent;
        keydown: KeyboardEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type ButtonProps = typeof __propDef.props;
export type ButtonEvents = typeof __propDef.events;
export type ButtonSlots = typeof __propDef.slots;
export default class Button extends SvelteComponentTyped<ButtonProps, ButtonEvents, ButtonSlots> {
}
export {};
