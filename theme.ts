import { scale } from './src/lib/colors';
import chroma from 'chroma-js';

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
