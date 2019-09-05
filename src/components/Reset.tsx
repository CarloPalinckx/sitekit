import { createGlobalStyle } from 'styled-components';
import Undraw from 'react-undraw';

Undraw.setDefaultProps({ primaryColor: __THEME__.colors.themecolor.root() });

const Reset = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
    }
`;

export default Reset;
