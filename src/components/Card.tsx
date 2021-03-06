import styled from 'styled-components';
import { box, BoxProps } from './Box';
import { flex, FlexProps } from './Flex';

const Card = styled.div<BoxProps & FlexProps>`
    ${box}
    ${flex}
    box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.1);
    border-radius: ${({ theme }) => theme.spacing * 4}px;
`;

export default Card;
