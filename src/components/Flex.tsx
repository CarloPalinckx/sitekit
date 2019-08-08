import styled from 'styled-components';

type Props = {
    flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse' | 'initial' | 'inherit';
    flexDirection?: 'column' | 'row';
};

const Flex = styled.div<Props>`
    display: flex;
    flex-wrap: ${({ flexWrap }) => flexWrap || 'nowrap'};
    flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
`;

export default Flex;
