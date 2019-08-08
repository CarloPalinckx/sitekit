import React from 'react';
import { storiesOf } from '@storybook/react';
import Flex from '../src/components/Flex';
import theme from '../theme';
import styled from 'styled-components';
import Type from '../src/components/Type';

const Swatch = styled.div`
    background: ${(props: { color: string }) => props.color};
    height: 40px;
    width: 40px;
`;

storiesOf('Colors', module).add('All', () => {
    return (
        <Flex flexDirection="column">
            {Object.keys(theme.colors).map(key => {
                return (
                    <>
                        <Type scale="sub1">
                            {key
                                .split('')
                                .map((letter, index) => (index === 0 ? letter.toUpperCase() : letter))
                                .join('')}
                        </Type>
                        <Flex>
                            {theme.colors[key as keyof typeof theme.colors].map(color => (
                                <Swatch color={color} />
                            ))}
                        </Flex>
                        <br />
                    </>
                );
            })}
        </Flex>
    );
});
