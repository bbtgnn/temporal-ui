import { SvelteComponentTyped } from "svelte";
import type { HTMLInputAttributes } from 'svelte/elements';
import type { IconName } from '../icon';
declare const __propDef: {
    props: (HTMLInputAttributes & {
        id: string;
        value: string;
        label: string;
        labelHidden?: boolean;
        icon?: IconName;
        suffix?: string;
        valid?: boolean;
        hintText?: string;
        maxLength?: number;
        hideCount?: boolean;
        spellcheck?: boolean;
        noBorder?: boolean;
        autoFocus?: boolean;
        error?: boolean;
        'data-testid'?: string;
    }) | (HTMLInputAttributes & {
        id: string;
        value: string;
        label: string;
        labelHidden?: boolean;
        icon?: IconName;
        suffix?: string;
        valid?: boolean;
        hintText?: string;
        maxLength?: number;
        hideCount?: boolean;
        spellcheck?: boolean;
        noBorder?: boolean;
        autoFocus?: boolean;
        error?: boolean;
        'data-testid'?: string;
    } & {
        copyable: boolean;
        copyButtonLabel: string;
    }) | (HTMLInputAttributes & {
        id: string;
        value: string;
        label: string;
        labelHidden?: boolean;
        icon?: IconName;
        suffix?: string;
        valid?: boolean;
        hintText?: string;
        maxLength?: number;
        hideCount?: boolean;
        spellcheck?: boolean;
        noBorder?: boolean;
        autoFocus?: boolean;
        error?: boolean;
        'data-testid'?: string;
    } & {
        clearable: boolean;
        clearButtonLabel: string;
    });
    events: {
        click: MouseEvent;
        input: Event;
        keydown: KeyboardEvent;
        change: Event;
        focus: FocusEvent;
        blur: FocusEvent;
        clear: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        'before-input': {
            disabled: boolean;
        };
        'after-input': {
            disabled: boolean;
        };
    };
};
export type InputProps = typeof __propDef.props;
export type InputEvents = typeof __propDef.events;
export type InputSlots = typeof __propDef.slots;
export default class Input extends SvelteComponentTyped<InputProps, InputEvents, InputSlots> {
}
export {};
