import { createGlobalStyle } from 'styled-components';
import Undraw from 'react-undraw';
import theme from '../../theme';

Undraw.setDefaultProps({ primaryColor: theme.colors.themecolor.root() });

const Reset = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
    }
`;

export default Reset;
