/// <reference path="../../index.d.ts" />
import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import Box, { box, BoxProps } from './Box';
import Flex, { flex, FlexProps } from './Flex';
import { button } from './Type';

const Container = styled.nav<FlexProps & BoxProps>`
    ${flex}
    ${box}
`;

const Item = styled.a`
    ${box}
    ${button}
    text-decoration: none;
    color: ${__THEME__.colors.darks.lighter(1)};
    transition: color 300ms;

    &:hover {
        color: ${__THEME__.colors.themecolor.root()};
    }
`;

type Props = {
    logo: ReactNode;
    items: Array<string>;
};

const Nav: FC<Props> = props => {
    return (
        <Container width="100%" justifyContent="space-between">
            <Box margin={[4, 0, 0, 3]} as="figure">
                {props.logo}
            </Box>
            <Flex>
                {props.items.map(item => {
                    return (
                        <Item href="" padding={[4, 3]}>
                            {item}
                        </Item>
                    );
                })}
            </Flex>
        </Container>
    );
};

export default Nav;
