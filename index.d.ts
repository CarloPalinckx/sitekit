import 'styled-components';
import { Theme } from './__types__';

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
}
