import { SvelteComponentTyped } from "svelte";
import { type TaskQueueRules } from '../services/pollers-service';
declare const __propDef: {
    props: {
        rules: TaskQueueRules;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type WorkerRulesProps = typeof __propDef.props;
export type WorkerRulesEvents = typeof __propDef.events;
export type WorkerRulesSlots = typeof __propDef.slots;
export default class WorkerRules extends SvelteComponentTyped<WorkerRulesProps, WorkerRulesEvents, WorkerRulesSlots> {
}
export {};
