import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        show?: boolean;
        filterable?: boolean;
        copyable?: boolean;
        content: string;
        onFilter?: () => void;
        filtered?: boolean;
        copyIconTitle: string;
        copySuccessIconTitle: string;
        filterIconTitle: string;
        class?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type FilterOrCopyButtonsProps = typeof __propDef.props;
export type FilterOrCopyButtonsEvents = typeof __propDef.events;
export type FilterOrCopyButtonsSlots = typeof __propDef.slots;
export default class FilterOrCopyButtons extends SvelteComponentTyped<FilterOrCopyButtonsProps, FilterOrCopyButtonsEvents, FilterOrCopyButtonsSlots> {
}
export {};
