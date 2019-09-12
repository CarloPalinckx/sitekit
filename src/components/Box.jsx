import styled, { css } from 'styled-components';
const coords = (coordinates) => {
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
export const box = css `
    box-sizing: border-box;
    width: ${({ width }) => width || ''};
    max-width: ${({ maxWidth }) => maxWidth || ''};
    margin: ${({ theme, margin }) => margin
    ? coords(margin)
        .map(coord => coord * theme.spacing)
        .join('px ') + 'px'
    : ''};
    padding: ${({ theme, padding }) => padding
    ? coords(padding)
        .map(coord => coord * theme.spacing)
        .join('px ') + 'px'
    : ''};
    background: ${({ background }) => background || ''};
    align-self: ${({ alignSelf }) => alignSelf || ''};
`;
const Box = styled.div `
    ${box}
`;
export default Box;
