import { Scale } from '../__types__';

const scale = (scale: Scale) => ({
    lighter(step: number) {
        switch (scale.direction) {
            case 'both': {
                return scale.scale[(scale.scale.length - 1) / 2 - step];
            }
            case 'up': {
                return scale.scale[step];
            }
            case 'down': {
                return scale.scale[scale.scale.length - 1 - step];
            }
        }
    },
    darker(step: number) {
        switch (scale.direction) {
            case 'both': {
                return scale.scale[(scale.scale.length - 1) / 2 + step];
            }
            case 'up': {
                return scale.scale[step];
            }
            case 'down': {
                return scale.scale[step];
            }
        }
    },
    darkest() {
        return scale.scale[scale.scale.length - 1];
    },
    lightest() {
        return scale.scale[0];
    },
});

export default scale;
