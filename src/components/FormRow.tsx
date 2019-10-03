import React, { FC } from 'react';
import Flex from './Flex';
import styled from 'styled-components';
import { overline } from './Type';
import { box, BoxProps } from './Box';

type Props = BoxProps & {
    fieldId: string;
    label: string;
};

const Label = styled.label<BoxProps>`
    ${box}
    ${overline}
    color: ${({ theme }) => theme.colors.darks.lightest()}
`;

const FormRow: FC<Props> = props => {
    return (
        <Flex flexDirection="column" {...props}>
            <Label margin={[0, 0, 3, 0]} htmlFor={props.fieldId}>
                {props.label}
            </Label>
            {props.children}
        </Flex>
    );
};

export default FormRow;
