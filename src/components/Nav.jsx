import React from 'react';
import styled from 'styled-components';
import Box, { box } from './Box';
import Flex, { flex } from './Flex';
import { button } from './Type';
const Container = styled.nav `
    ${flex}
    ${box}
`;
const Item = styled.a `
    ${box}
    ${button}
    text-decoration: none;
    color: ${({ theme }) => theme.colors.darks.lighter(1)};
    transition: color 300ms;

    &:hover {
        color: ${({ theme }) => theme.colors.themecolor.root()};
    }
`;
const Nav = props => {
    return (<Container width="100%" justifyContent="space-between">
            <Box margin={[4, 0, 0, 3]} as="figure">
                {props.logo}
            </Box>
            <Flex alignSelf="flex-start">
                {props.items.map(item => {
        return (<Item href="" padding={[4, 3]}>
                            {item}
                        </Item>);
    })}
            </Flex>
        </Container>);
};
export default Nav;
