import { SvelteComponentTyped } from "svelte";
import type { CombinedAttributes } from '../../../utilities/format-event-attributes';
declare const __propDef: {
    props: {
        key: string;
        value: string | Record<string, unknown>;
        attributes: CombinedAttributes;
        onDecode?: (decodedValue: string) => void | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type GroupDetailsTextProps = typeof __propDef.props;
export type GroupDetailsTextEvents = typeof __propDef.events;
export type GroupDetailsTextSlots = typeof __propDef.slots;
export default class GroupDetailsText extends SvelteComponentTyped<GroupDetailsTextProps, GroupDetailsTextEvents, GroupDetailsTextSlots> {
}
export {};
