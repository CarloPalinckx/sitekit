import styled, { css } from 'styled-components';
import { body1 } from './Type';
import { BoxProps, box } from './Box';

export const fieldStyles = css`
    ${body1}
    padding: 12px;
    appearance: none;
    border-radius: ${({ theme }) => theme.spacing}px;
    border: solid 2px ${({ theme }) => theme.colors.lights.darkest()};
    color: ${({ theme }) => theme.colors.darks.lighter(1)};

    &:focus {
        box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.1);
        outline: none;
    }
`;

const TextField = styled.input.attrs({ type: 'text' })<BoxProps>`
    ${box}
    ${fieldStyles}
`;

export default TextField;
