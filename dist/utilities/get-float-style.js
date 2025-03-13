export const getFloatStyle = ({ width, height, screenWidth, breakpoint = 1279, // 'xl' max-width breakpoint in tailwindcss
 }) => {
    return width && height && screenWidth > breakpoint
        ? `position: absolute; right: ${width + 20}px; top: -${height}px`
        : '';
};
