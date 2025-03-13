import { SvelteComponentTyped } from "svelte";
import type { EventGroup } from '../../../models/event-groups/event-groups';
declare const __propDef: {
    props: {
        group: EventGroup;
        canvasWidth: number;
        x?: number;
        y: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type GroupDetailsRowProps = typeof __propDef.props;
export type GroupDetailsRowEvents = typeof __propDef.events;
export type GroupDetailsRowSlots = typeof __propDef.slots;
export default class GroupDetailsRow extends SvelteComponentTyped<GroupDetailsRowProps, GroupDetailsRowEvents, GroupDetailsRowSlots> {
}
export {};
