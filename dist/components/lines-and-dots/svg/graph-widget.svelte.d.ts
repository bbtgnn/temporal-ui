import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        namespace: string;
        workflowId: string;
        runId?: string;
        viewportHeight?: number;
        onLoad?: () => void;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type GraphWidgetProps = typeof __propDef.props;
export type GraphWidgetEvents = typeof __propDef.events;
export type GraphWidgetSlots = typeof __propDef.slots;
export default class GraphWidget extends SvelteComponentTyped<GraphWidgetProps, GraphWidgetEvents, GraphWidgetSlots> {
}
export {};
