import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        content?: string;
    };
    events: {
        change: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type EditorProps = typeof __propDef.props;
export type EditorEvents = typeof __propDef.events;
export type EditorSlots = typeof __propDef.slots;
export default class Editor extends SvelteComponentTyped<EditorProps, EditorEvents, EditorSlots> {
}
export {};
