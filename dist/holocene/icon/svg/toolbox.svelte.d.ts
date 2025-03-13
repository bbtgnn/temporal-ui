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
export type ToolboxProps = typeof __propDef.props;
export type ToolboxEvents = typeof __propDef.events;
export type ToolboxSlots = typeof __propDef.slots;
export default class Toolbox extends SvelteComponentTyped<ToolboxProps, ToolboxEvents, ToolboxSlots> {
}
export {};
