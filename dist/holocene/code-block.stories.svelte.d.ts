import { SvelteComponentTyped } from "svelte";
export declare const meta: {
    title: string;
    args: {
        editable: false;
        inline: false;
        language: "json";
        copyable: false;
        label: string;
    };
    argTypes: {
        editable: {
            control: "boolean";
            table: {
                category: string;
            };
        };
        inline: {
            control: "boolean";
            table: {
                category: string;
            };
        };
        copyable: {
            control: "boolean";
            table: {
                category: string;
            };
        };
        content: {
            control: "text";
            table: {
                category: string;
            };
        };
        language: {
            control: "select";
            options: string[];
            table: {
                category: string;
            };
        };
        minHeight: {
            control: {
                type: "number";
                min: number;
                max: number;
                step: number;
            };
            table: {
                category: string;
            };
        };
        maxHeight: {
            control: {
                type: "number";
                min: number;
                max: number;
                step: number;
            };
            table: {
                category: string;
            };
        };
        copyIconTitle: {
            control: "text";
            table: {
                category: string;
            };
        };
        copySuccessIconTitle: {
            control: "text";
            table: {
                category: string;
            };
        };
    };
};
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type CodeBlockProps = typeof __propDef.props;
export type CodeBlockEvents = typeof __propDef.events;
export type CodeBlockSlots = typeof __propDef.slots;
export default class CodeBlock extends SvelteComponentTyped<CodeBlockProps, CodeBlockEvents, CodeBlockSlots> {
}
export {};
