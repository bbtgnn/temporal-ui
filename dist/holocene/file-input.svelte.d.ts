import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        id: string;
        accept?: string;
        onUpload: (input: string) => void;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type FileInputProps = typeof __propDef.props;
export type FileInputEvents = typeof __propDef.events;
export type FileInputSlots = typeof __propDef.slots;
export default class FileInput extends SvelteComponentTyped<FileInputProps, FileInputEvents, FileInputSlots> {
}
export {};
