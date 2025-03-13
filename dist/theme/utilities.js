import { colors, palette } from './colors';
const removeHexPrefix = (hex) => hex.replace('#', '');
export const rgb = (hexColor) => {
    let hex = removeHexPrefix(hexColor);
    hex = hex.length === 3 ? hex.replace(/./g, '$&$&') : hex;
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `${r} ${g} ${b}`;
};
export const css = (variable) => `rgb(var(${variable}))`;
export const toColor = (name) => {
    const [paletteColor, shade] = name.split('.');
    const color = colors[paletteColor];
    if (isHexColor(color))
        return rgb(color);
    if (isPaletteColor(paletteColor)) {
        const color = palette[paletteColor];
        if (isShade(shade))
            return rgb(color[shade]);
        return rgb(color.DEFAULT);
    }
};
export const isHexColor = (color) => {
    if (typeof color !== 'string')
        return false;
    return /^#[0-9A-F]{6}$/i.test(color);
};
export const isPaletteColor = (color) => color in palette;
export const isShade = (shade) => typeof shade === 'number' ||
    typeof Number(shade) === 'number' ||
    shade === 'DEFAULT';
