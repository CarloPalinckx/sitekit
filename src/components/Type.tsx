import styled, { css } from 'styled-components';
import { box, BoxProps } from '../components/Box';

export const h1 = css`
    font-family: ${({ theme }) => theme.bodyFont};
    font-size: 76px;
    font-weight: 600;
    letter-spacing: -1.5;
    line-height: 1.1;
`;

export const h2 = css`
    font-family: ${({ theme }) => theme.bodyFont};
    font-size: 60px;
    font-weight: 600;
    letter-spacing: -0.5;
`;

export const h3 = css`
    font-family: ${({ theme }) => theme.bodyFont};
    font-size: 48px;
    font-weight: 600;
    letter-spacing: 0px;
`;

export const h4 = css`
    font-family: ${({ theme }) => theme.bodyFont};
    font-size: 34px;
    font-weight: 600;
    letter-spacing: 0.25px;
`;

export const h5 = css`
    font-family: ${({ theme }) => theme.bodyFont};
    font-size: 24px;
    font-weight: 600;
    letter-spacing: 0px;
`;

export const h6 = css`
    font-family: ${({ theme }) => theme.bodyFont};
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0.15px;
`;

export const sub1 = css`
    font-family: ${({ theme }) => theme.bodyFont};
    font-size: 24px;
    font-weight: 400;
    letter-spacing: 0.15px;
`;

export const sub2 = css`
    font-family: ${({ theme }) => theme.bodyFont};
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0.1px;
`;

export const body1 = css`
    font-family: ${({ theme }) => theme.bodyFont};
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.5px;
    line-height: 1.6;
`;

export const body2 = css`
    font-family: ${({ theme }) => theme.bodyFont};
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.25px;
    line-height: 1.6;
`;

export const button = css`
    font-family: ${({ theme }) => theme.bodyFont};
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 1.25px;
    text-transform: uppercase;
`;

export const overline = css`
    font-family: ${({ theme }) => theme.bodyFont};
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
`;

const scale = {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    sub1,
    sub2,
    body1,
    body2,
    button,
    overline,
};

type Props = BoxProps & {
    scale: keyof typeof scale;
    color?: string;
    align?: 'right' | 'left' | 'center';
};

const Type = styled.span<Props>`
    ${box}
    ${props => scale[props.scale]}
    color: ${props => props.color || ''};
    text-align: ${props => props.align || 'left'};
`;

export default Type;
