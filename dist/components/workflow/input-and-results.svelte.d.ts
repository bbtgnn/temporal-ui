import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        content: string;
        title: string;
        running?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type InputAndResultsProps = typeof __propDef.props;
export type InputAndResultsEvents = typeof __propDef.events;
export type InputAndResultsSlots = typeof __propDef.slots;
export default class InputAndResults extends SvelteComponentTyped<InputAndResultsProps, InputAndResultsEvents, InputAndResultsSlots> {
}
export {};
