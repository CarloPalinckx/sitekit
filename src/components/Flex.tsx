import styled from 'styled-components';
import { box, BoxProps } from '../components/Box';

type Props = BoxProps & {
    flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse' | 'initial' | 'inherit';
    flexDirection?: 'column' | 'row';
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    alignItems?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
};

const Flex = styled.div<Props>`
    ${box}
    display: flex;
    flex-wrap: ${({ flexWrap }) => flexWrap || ''};
    flex-direction: ${({ flexDirection }) => flexDirection || ''};
    justify-content: ${({ justifyContent }) => justifyContent || ''};
    align-items: ${({ alignItems }) => alignItems || ''};
`;

export default Flex;
