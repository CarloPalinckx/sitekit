import { createGlobalStyle, ThemeContext } from 'styled-components';
import Undraw from 'react-undraw';
import React, { useContext, useEffect } from 'react';
const ResetStyles = createGlobalStyle `
    body {
        margin: 0;
        padding: 0;
    }
`;
const Reset = () => {
    const theme = useContext(ThemeContext);
    useEffect(() => {
        Undraw.setDefaultProps({
            primaryColor: theme.colors.themecolor.root(),
        });
    }, []);
    return <ResetStyles />;
};
export default Reset;
