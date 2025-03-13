import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ImportEventsProps = typeof __propDef.props;
export type ImportEventsEvents = typeof __propDef.events;
export type ImportEventsSlots = typeof __propDef.slots;
export default class ImportEvents extends SvelteComponentTyped<ImportEventsProps, ImportEventsEvents, ImportEventsSlots> {
}
export {};
