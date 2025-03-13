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
export type OfficeBuildingsProps = typeof __propDef.props;
export type OfficeBuildingsEvents = typeof __propDef.events;
export type OfficeBuildingsSlots = typeof __propDef.slots;
export default class OfficeBuildings extends SvelteComponentTyped<OfficeBuildingsProps, OfficeBuildingsEvents, OfficeBuildingsSlots> {
}
export {};
