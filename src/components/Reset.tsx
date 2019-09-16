import { createGlobalStyle } from 'styled-components';
import React from 'react';

const ResetStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
    }
`;

const Reset = () => {
    return <ResetStyles />;
};

export default Reset;
