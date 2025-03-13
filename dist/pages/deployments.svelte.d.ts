import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type DeploymentsProps = typeof __propDef.props;
export type DeploymentsEvents = typeof __propDef.events;
export type DeploymentsSlots = typeof __propDef.slots;
export default class Deployments extends SvelteComponentTyped<DeploymentsProps, DeploymentsEvents, DeploymentsSlots> {
}
export {};
