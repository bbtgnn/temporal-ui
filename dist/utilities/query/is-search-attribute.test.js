import { writable } from 'svelte/store';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { isSearchAttribute } from './is-search-attribute';
const store = writable({
    WorkflowType: 'Keyword',
});
describe('isSearchAttribute', () => {
    it('should return true if the attribute is a key in the search attributes', () => {
        expect(isSearchAttribute('WorkflowType', store)).toBe(true);
    });
    it('should return false if the attribute is not a key in the search attributes', () => {
        expect(isSearchAttribute('NotAKey', store)).toBe(false);
    });
    it('should return false if the attribute is null', () => {
        expect(isSearchAttribute(null, store)).toBe(false);
    });
    it('should return false if the attribute is undefined', () => {
        expect(isSearchAttribute(undefined, store)).toBe(false);
    });
    describe('with store', () => {
        beforeEach(() => {
            vi.mock('$lib/stores/search-attributes', () => {
                return {
                    searchAttributes: writable({
                        WorkflowType: 'Keyword',
                    }),
                };
            });
        });
        afterEach(() => {
            vi.restoreAllMocks();
        });
        it('should return true if the attribute is a key in the search attributes', () => {
            expect(isSearchAttribute('WorkflowType')).toBe(true);
        });
        it('should return false if the attribute is not a key in the search attributes', () => {
            expect(isSearchAttribute('NotAKey')).toBe(false);
        });
        it('should return false if the attribute is null', () => {
            expect(isSearchAttribute(null)).toBe(false);
        });
        it('should return false if the attribute is undefined', () => {
            expect(isSearchAttribute(undefined)).toBe(false);
        });
    });
});
