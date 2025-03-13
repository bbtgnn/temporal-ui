import { SvelteComponentTyped } from "svelte";
import type { IconName } from '../../../holocene/icon';
declare const __propDef: {
    props: {
        label: string;
        value: string;
        href?: string | undefined;
        icon?: IconName | undefined;
        current?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ContinueAsNewNodeProps = typeof __propDef.props;
export type ContinueAsNewNodeEvents = typeof __propDef.events;
export type ContinueAsNewNodeSlots = typeof __propDef.slots;
export default class ContinueAsNewNode extends SvelteComponentTyped<ContinueAsNewNodeProps, ContinueAsNewNodeEvents, ContinueAsNewNodeSlots> {
}
export {};
