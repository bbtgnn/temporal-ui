import { SvelteComponentTyped } from "svelte";
import type { NamespaceListItem } from '../types/global';
declare const __propDef: {
    props: {
        namespaceList?: NamespaceListItem[];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type NamespacePickerProps = typeof __propDef.props;
export type NamespacePickerEvents = typeof __propDef.events;
export type NamespacePickerSlots = typeof __propDef.slots;
export default class NamespacePicker extends SvelteComponentTyped<NamespacePickerProps, NamespacePickerEvents, NamespacePickerSlots> {
}
export {};
