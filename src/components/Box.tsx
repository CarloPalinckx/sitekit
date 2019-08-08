import theme from '../../theme';
import styled, { css } from 'styled-components';

type Coordinates = [number] | [number, number] | [number, number, number] | [number, number, number, number];

export type BoxProps = {
    width?: string;
    maxWidth?: string;
    margin?: Coordinates;
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
    margin: ${({ margin }) =>
        margin
            ? coords(margin)
                  .map(coord => coord * theme.spacing)
                  .join('px ') + 'px'
            : ''};
`;

const Box = styled.div<BoxProps>`
    ${box}
`;

export default Box;
