import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        open?: boolean;
        namespace: string;
        workflowId: string;
        runId: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type DownloadEventHistoryModalProps = typeof __propDef.props;
export type DownloadEventHistoryModalEvents = typeof __propDef.events;
export type DownloadEventHistoryModalSlots = typeof __propDef.slots;
export default class DownloadEventHistoryModal extends SvelteComponentTyped<DownloadEventHistoryModalProps, DownloadEventHistoryModalEvents, DownloadEventHistoryModalSlots> {
}
export {};
