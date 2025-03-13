import { expect, within } from '@storybook/test';
export const shouldNotBeTransparent = (fn) => {
    return ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const element = fn(canvas);
        expect(element).not.toHaveStyle({ backgroundColor: 'rgba(0,0,0,0)' });
    };
};
