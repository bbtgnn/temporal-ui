import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type DeploymentProps = typeof __propDef.props;
export type DeploymentEvents = typeof __propDef.events;
export type DeploymentSlots = typeof __propDef.slots;
export default class Deployment extends SvelteComponentTyped<DeploymentProps, DeploymentEvents, DeploymentSlots> {
}
export {};
