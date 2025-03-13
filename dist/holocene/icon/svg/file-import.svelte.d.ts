import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type FileImportProps = typeof __propDef.props;
export type FileImportEvents = typeof __propDef.events;
export type FileImportSlots = typeof __propDef.slots;
export default class FileImport extends SvelteComponentTyped<FileImportProps, FileImportEvents, FileImportSlots> {
}
export {};
