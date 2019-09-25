/// <reference path="../../index.d.ts" />
import styled from 'styled-components';
import { button } from './Type';
import { Scale } from '../lib/colors';
import chroma from 'chroma-js';
import { Theme } from '../../index.d';

type Props = {
    cta?: boolean;
    negative?: boolean;
};

type Opts = (
    mapper: (props: Props & { scale: Scale; color: string }) => string,
) => (props: Props & { theme: Theme }) => string;

const opts: Opts = mapper => props => {
    let scale = props.theme.colors.themecolor;
    let color = props.theme.colors.lights.lightest();

    if (props.cta) {
        scale = props.theme.colors.cta;
    }

    if (props.negative) {
        scale = props.theme.colors.lights;
        color = props.theme.colors.darks.darkest();
    }

    return mapper({ ...props, scale, color });
};

const Button = styled.button<Props>`
    ${button}
    transition: background-color 300ms;
    cursor: pointer;
    border-radius: 12px;
    padding: ${({ theme }) => theme.spacing * 4}px ${({ theme }) => theme.spacing * 6}px;
    appearance: none;
    background: ${opts(({ scale }) => scale.root())};
    color: ${opts(({ color }) => color)};
    border: none;

    &:hover {
        background: ${opts(({ scale }) => {
            return scale.lighter(1);
        })};
    }

    &:focus {
        box-shadow: ${opts(({ scale }) => {
            return `0 0 6px 4px rgba(${chroma(scale.root())
                .alpha(0.3)
                .rgba()
                .join(', ')})`;
        })};
        outline: none;
    }
`;

export default Button;
