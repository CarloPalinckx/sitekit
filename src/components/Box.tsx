import styled, { css } from 'styled-components';

type Coordinates = [number] | [number, number] | [number, number, number] | [number, number, number, number];

export type BoxProps = {
    width?: string;
    maxWidth?: string;
    height?: string;
    maxHeight?: string;
    margin?: Coordinates;
    padding?: Coordinates;
    background?: string;
    alignSelf?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
};

const coords = (coordinates: Coordinates): [number, number, number, number] => {
    switch (coordinates.length) {
        case 1: {
            return [coordinates[0], coordinates[0], coordinates[0], coordinates[0]];
        }
        case 2: {
            return [coordinates[0], coordinates[1], coordinates[0], coordinates[1]];
        }
        case 3: {
            return [coordinates[0], coordinates[1], coordinates[1], coordinates[2]];
        }
        case 4: {
            return [coordinates[0], coordinates[1], coordinates[2], coordinates[3]];
        }
    }
};

export const box = css<BoxProps>`
    box-sizing: border-box;
    width: ${({ width }) => width || ''};
    max-width: ${({ maxWidth }) => maxWidth || ''};
    height: ${({ height }) => height || ''};
    max-height: ${({ maxHeight }) => maxHeight || ''};
    margin: ${({ theme, margin }) =>
        margin
            ? coords(margin)
                  .map(coord => coord * theme.spacing)
                  .join('px ') + 'px'
            : ''};
    padding: ${({ theme, padding }) =>
        padding
            ? coords(padding)
                  .map(coord => coord * theme.spacing)
                  .join('px ') + 'px'
            : ''};
    background: ${({ background }) => background || ''};
    align-self: ${({ alignSelf }) => alignSelf || ''};
`;

const Box = styled.div<BoxProps>`
    ${box}
`;

export default Box;
