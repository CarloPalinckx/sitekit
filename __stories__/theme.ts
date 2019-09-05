import chroma from 'chroma-js';
import { Scale } from '../src/__types__';

export const scale = (
    color: string,
    options: {
        size?: number;
        direction?: 'up' | 'both' | 'down';
        curve?: number;
    },
): Scale => {
    const c = chroma(color);
    const scale = [c.hex()];
    const size = options.size || 5;
    const direction = options.direction || 'both';
    const curve = options.curve || 0.25;

    if (size % 2 !== 1) {
        throw new Error('Only odd sizes can be used to generate a scale');
    }

    const splitSize = (size - 1) / 2;

    if (direction === 'both') {
        for (let i = 1; i < splitSize + 1; i++) {
            scale.push(c.darken(i * curve).hex());
            scale.unshift(c.brighten(i * curve).hex());
        }
    }

    if (direction === 'up') {
        for (let i = 1; i < size; i++) {
            scale.push(c.darken(i * curve).hex());
        }
    }

    if (direction === 'down') {
        for (let i = 1; i < size; i++) {
            scale.unshift(c.brighten(i * curve).hex());
        }
    }

    return {
        scale,
        root: color,
        direction,
    };
};

const themeColor = '#8549BC';
const ctaColor = '#7788EE';

const theme = {
    spacing: 4,
    bodyFont: 'Inter',
    colors: {
        cta: scale(ctaColor, { size: 5 }),
        themecolor: scale(themeColor, { size: 5 }),
        darks: scale(chroma.mix(themeColor, '#000', 0.97).hex(), {
            size: 5,
            curve: 0.5,
            direction: 'down',
        }),
        lights: scale(chroma.mix(themeColor, '#fff', 0.97).hex(), {
            size: 5,
            curve: 0.1,
            direction: 'up',
        }),
    },
};

export default theme;
