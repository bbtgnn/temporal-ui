import { SvelteComponentTyped } from "svelte";
import type { ButtonStyles } from '../button.svelte';
import type { IconName } from '../icon';
declare const __propDef: {
    props: {
        options?: {
            label: string;
            value: string;
            icon?: IconName;
        }[];
        initialSelected?: {
            label: string;
            value: string;
            icon?: IconName;
        }[];
        onChange: (options: {
            label: string;
            value: string;
            icon?: IconName;
        }[]) => void;
        label: string;
        id: string;
        variant?: ButtonStyles['variant'];
        icon?: IconName | undefined;
        selectAllLabel: string;
        clearAllLabel: string;
        active?: boolean;
        disabled?: boolean;
        position?: 'left' | 'right';
        initialSelectedAll?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type MultiSelectProps = typeof __propDef.props;
export type MultiSelectEvents = typeof __propDef.events;
export type MultiSelectSlots = typeof __propDef.slots;
export default class MultiSelect extends SvelteComponentTyped<MultiSelectProps, MultiSelectEvents, MultiSelectSlots> {
}
export {};
