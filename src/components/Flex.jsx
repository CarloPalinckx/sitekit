import styled, { css } from 'styled-components';
import { box } from '../components/Box';
export const flex = css `
    display: flex;
    flex-basis: ${({ flexBasis }) => flexBasis};
    flex-wrap: ${({ flexWrap }) => flexWrap || ''};
    flex-direction: ${({ flexDirection }) => flexDirection || ''};
    justify-content: ${({ justifyContent }) => justifyContent || ''};
    align-items: ${({ alignItems }) => alignItems || ''};
    flex-shrink: ${({ flexShrink }) => flexShrink};
`;
const Flex = styled.div `
    ${box}
    ${flex}
`;
export default Flex;
