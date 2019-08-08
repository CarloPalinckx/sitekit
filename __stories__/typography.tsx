import React from 'react';
import { storiesOf } from '@storybook/react';
import Type from '../src/components/Type';
import Flex from '../src/components/Flex';

storiesOf('Typography', module).add('all', () => {
    return (
        <Flex flexDirection="column">
            <Type scale="h1">H1</Type>
            <Type scale="h2">H2</Type>
            <Type scale="h3">H3</Type>
            <Type scale="h4">H4</Type>
            <Type scale="h5">H5</Type>
            <Type scale="h6">H6</Type>
            <Type scale="sub1">Sub1</Type>
            <Type scale="sub2">Sub2</Type>
            <Type scale="body1">Body1</Type>
            <Type scale="body2">Body2</Type>
            <Type scale="button">Button</Type>
            <Type scale="overline">Overline</Type>
        </Flex>
    );
});
