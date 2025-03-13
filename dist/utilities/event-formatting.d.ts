import type { EventSortOrder } from '../stores/event-view';
import type { BooleanString } from '../types/global';
type DateFilterOptions = {
    compact: boolean;
    sortOrder: EventSortOrder;
    showElapsed: BooleanString;
};
export declare const getDateFilterValue: ({ compact, sortOrder, showElapsed, }: DateFilterOptions) => string;
export {};
