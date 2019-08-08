import { scale } from './src/lib/colors';
import chroma from 'chroma-js';

const primaryColor = '#541A8B';
const secondaryColor = '#7788EE';

const theme = {
    spacing: 4,
    bodyFont: 'Inter',
    colors: {
        primary: scale(primaryColor, { size: 5 }),
        secondary: scale(secondaryColor, { size: 5 }),
        darks: scale(chroma.mix(secondaryColor, '#000', 0.9).hex(), {
            size: 5,
            curve: 0.5,
            direction: 'down',
        }),
        lights: scale(
            chroma(secondaryColor)
                .brighten(2.4)
                .hex(),
            {
                size: 5,
                curve: 0.5,
                direction: 'up',
            },
        ),
    },
};

export default theme;
