import styled from 'styled-components';
import { BoxProps, box } from './Box';
import { fieldStyles } from './TextField';

const TextArea = styled.textarea<BoxProps>`
    ${box}
    ${fieldStyles}
    resize: vertical;
`;

export default TextArea;
