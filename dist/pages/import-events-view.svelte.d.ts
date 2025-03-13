import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type ImportEventsViewProps = typeof __propDef.props;
export type ImportEventsViewEvents = typeof __propDef.events;
export type ImportEventsViewSlots = typeof __propDef.slots;
export default class ImportEventsView extends SvelteComponentTyped<ImportEventsViewProps, ImportEventsViewEvents, ImportEventsViewSlots> {
}
export {};
