import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type PendingActivitiesProps = typeof __propDef.props;
export type PendingActivitiesEvents = typeof __propDef.events;
export type PendingActivitiesSlots = typeof __propDef.slots;
export default class PendingActivities extends SvelteComponentTyped<PendingActivitiesProps, PendingActivitiesEvents, PendingActivitiesSlots> {
}
export {};
