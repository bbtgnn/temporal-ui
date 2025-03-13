import { SvelteComponentTyped } from "svelte";
export declare const meta: {
    title: string;
    component: typeof Modal;
    args: {
        open: true;
        large: false;
        loading: false;
        error: string;
        confirmText: string;
        hideConfirm: false;
        confirmDisabled: false;
        cancelText: string;
        hightlightNav: false;
    };
    argTypes: {
        open: {
            name: string;
            control: "boolean";
            table: {
                disable: true;
            };
        };
        large: {
            name: string;
            control: "boolean";
        };
        loading: {
            name: string;
            control: "boolean";
        };
        error: {
            name: string;
            control: "text";
        };
        confirmText: {
            name: string;
            control: "text";
            table: {
                category: string;
                subcategory: string;
            };
        };
        confirmDisabled: {
            name: string;
            control: "boolean";
            table: {
                category: string;
                subcategory: string;
            };
        };
        hideConfirm: {
            name: string;
            control: "boolean";
            table: {
                category: string;
                subcategory: string;
            };
        };
        confirmType: {
            name: string;
            control: "select";
            options: string[];
            table: {
                category: string;
                subcategory: string;
            };
        };
        cancelText: {
            name: string;
            control: "text";
            table: {
                category: string;
                subcategory: string;
            };
        };
        hightlightNav: {
            name: string;
            control: "boolean";
        };
        toggleModal: {
            table: {
                disable: true;
            };
        };
    };
};
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ModalProps = typeof __propDef.props;
export type ModalEvents = typeof __propDef.events;
export type ModalSlots = typeof __propDef.slots;
export default class Modal extends SvelteComponentTyped<ModalProps, ModalEvents, ModalSlots> {
}
export {};
