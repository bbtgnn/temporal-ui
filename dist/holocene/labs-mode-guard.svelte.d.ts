import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
        fallback: {};
    };
};
export type LabsModeGuardProps = typeof __propDef.props;
export type LabsModeGuardEvents = typeof __propDef.events;
export type LabsModeGuardSlots = typeof __propDef.slots;
export default class LabsModeGuard extends SvelteComponentTyped<LabsModeGuardProps, LabsModeGuardEvents, LabsModeGuardSlots> {
}
export {};
