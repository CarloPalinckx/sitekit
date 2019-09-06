import styled, { css } from 'styled-components';
import { box, BoxProps } from '../components/Box';

export type FlexProps = {
    flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse' | 'initial' | 'inherit';
    flexDirection?: 'column' | 'row';
    flexBasis?: string;
    flexShrink?: number;
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    alignItems?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
};

export const flex = css<FlexProps>`
    display: flex;
    flex-basis: ${({ flexBasis }) => flexBasis};
    flex-wrap: ${({ flexWrap }) => flexWrap || ''};
    flex-direction: ${({ flexDirection }) => flexDirection || ''};
    justify-content: ${({ justifyContent }) => justifyContent || ''};
    align-items: ${({ alignItems }) => alignItems || ''};
    flex-shrink: ${({ flexShrink }) => flexShrink};
`;

type Props = BoxProps & FlexProps;

const Flex = styled.div<Props>`
    ${box}
    ${flex}
`;

export default Flex;
