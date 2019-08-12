import React, { FC } from 'react';
import Flex, { FlexProps } from '../components/Flex';
import { BoxProps } from '../components/Box';

const Wrap: FC<FlexProps & BoxProps> = props => {
    return (
        <Flex as="section" width="100%" justifyContent="center" {...props}>
            <Flex padding={[0, 10]} width="100%" maxWidth="1200px" flexDirection="row" flexWrap="wrap">
                {props.children}
            </Flex>
        </Flex>
    );
};

export default Wrap;
