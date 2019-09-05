import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Reset from '../src/components/Reset';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';

addDecorator(withKnobs);
addDecorator(story => (
    <ThemeProvider theme={theme}>
        <>
            <Reset />
            {story()}
        </>
    </ThemeProvider>
));

// automatically import all files ending in *.stories.js
const req = require.context('../__stories__', true, /\.tsx$/);
function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
