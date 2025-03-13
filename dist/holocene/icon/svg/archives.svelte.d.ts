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
export type ArchivesProps = typeof __propDef.props;
export type ArchivesEvents = typeof __propDef.events;
export type ArchivesSlots = typeof __propDef.slots;
export default class Archives extends SvelteComponentTyped<ArchivesProps, ArchivesEvents, ArchivesSlots> {
}
export {};
