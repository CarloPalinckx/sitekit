import styled from 'styled-components';
import theme from '../../theme';
import { button } from './Type';
import { Scale } from '../lib/colors';
import chroma from 'chroma-js';

type Props = {
    primary?: boolean;
};

type Opts = (mapper: (props: Props & { scale: Scale }) => string) => (props: Props) => string;

const opts: Opts = mapper => props => {
    const scale = props.primary ? theme.colors.primary : theme.colors.secondary;

    return mapper({ ...props, scale });
};

const Button = styled.button<Props>`
    ${button}
    transition: background-color 300ms;
    cursor: pointer;
    border-radius: 100px;
    padding: ${theme.spacing * 3}px ${theme.spacing * 6}px;
    appearance: none;
    background: ${opts(({ scale }) => scale.root())};
    color: #fff;
    border: none;

    &:hover {
        background: ${opts(({ scale }) => {
            return scale.lighter(1);
        })};
    }

    &:focus {
        box-shadow: ${opts(({ scale }) => {
            return `0 0 0 4px rgba(${chroma(scale.root())
                .alpha(0.25)
                .rgba()
                .join(', ')})`;
        })};
        outline: none;
    }
`;

export default Button;
