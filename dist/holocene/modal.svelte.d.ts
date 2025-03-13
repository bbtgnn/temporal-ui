import { SvelteComponentTyped } from "svelte";
import type { HTMLAttributes } from 'svelte/elements';
import { type ComponentProps } from 'svelte';
import Button from './button.svelte';
declare const __propDef: {
    props: {
        toggleModal?: (open: boolean, modal: HTMLDialogElement) => void;
    } & HTMLAttributes<HTMLDialogElement> & {
        cancelText: string;
        confirmDisabled?: boolean;
        confirmText: string;
        confirmType?: ComponentProps<Button>['variant'];
        hideConfirm?: boolean;
        hightlightNav?: boolean;
        id: string;
        large?: boolean;
        loading?: boolean;
        'data-testid'?: string;
        open: boolean;
        error?: string;
    };
    events: {
        cancelModal: CustomEvent<undefined>;
        confirmModal: CustomEvent<undefined>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        title: {};
        content: {};
    };
};
export type ModalProps = typeof __propDef.props;
export type ModalEvents = typeof __propDef.events;
export type ModalSlots = typeof __propDef.slots;
export default class Modal extends SvelteComponentTyped<ModalProps, ModalEvents, ModalSlots> {
    get toggleModal(): (open: boolean, modal: HTMLDialogElement) => void;
}
export {};
