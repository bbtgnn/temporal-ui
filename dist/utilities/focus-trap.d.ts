export declare const getFocusableElements: (node: HTMLElement) => HTMLElement[];
export declare const focusTrap: (node: HTMLElement, enabled: boolean) => {
    update(newArgs: boolean): void;
    destroy(): void;
};
