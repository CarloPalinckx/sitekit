import chroma from 'chroma-js';

export type Scale = Array<string> & {
    root(): string;
    lighter(step: number): string;
    darker(step: number): string;
    darkest(): string;
    lightest(): string;
};

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

    (scale as Scale).root = () => {
        return color;
    };

    (scale as Scale).lighter = (step: number) => {
        switch (direction) {
            case 'both': {
                return scale[splitSize - step];
            }
            case 'up': {
                return scale[step];
            }
            case 'down': {
                return scale[scale.length - 1 - step];
            }
        }
    };

    (scale as Scale).darker = (step: number) => {
        switch (direction) {
            case 'both': {
                return scale[splitSize + step];
            }
            case 'up': {
                return scale[step];
            }
            case 'down': {
                return scale[step];
            }
        }
    };

    (scale as Scale).darkest = () => {
        return scale[scale.length - 1];
    };

    (scale as Scale).lightest = () => {
        return scale[0];
    };

    return scale as Scale;
};
