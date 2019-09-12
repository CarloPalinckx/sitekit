import styled from 'styled-components';
import { box } from './Box';
import { flex } from './Flex';
const Card = styled.div `
    ${box}
    ${flex}
    box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.1);
    border-radius: ${({ theme }) => theme.spacing * 4}px;
`;
export default Card;
