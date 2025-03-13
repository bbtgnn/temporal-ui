import { SvelteComponentTyped } from "svelte";
export declare const meta: {
    title: string;
    component: typeof FileInput;
    args: {
        id: string;
        accept: string;
    };
    argTypes: {
        id: {
            control: "text";
        };
        accept: {
            control: "text";
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
export type FileInputProps = typeof __propDef.props;
export type FileInputEvents = typeof __propDef.events;
export type FileInputSlots = typeof __propDef.slots;
export default class FileInput extends SvelteComponentTyped<FileInputProps, FileInputEvents, FileInputSlots> {
}
export {};
