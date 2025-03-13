import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        containerHeight?: number;
        initialZoom?: number;
        maxZoomIn?: number;
        maxZoomOut?: number;
        width?: number;
        height?: number;
        zoomable?: boolean;
        pannable?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        controls: {};
        default: {
            width: number;
            height: number;
            zoomLevel: number;
        };
    };
};
export type ZoomSvgProps = typeof __propDef.props;
export type ZoomSvgEvents = typeof __propDef.events;
export type ZoomSvgSlots = typeof __propDef.slots;
export default class ZoomSvg extends SvelteComponentTyped<ZoomSvgProps, ZoomSvgEvents, ZoomSvgSlots> {
}
export {};
