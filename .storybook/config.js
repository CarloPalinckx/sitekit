import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Reset from '../src/components/Reset';

addDecorator(withKnobs);
addDecorator(story => (
    <>
        <Reset />
        {story()}
    </>
));

// automatically import all files ending in *.stories.js
const req = require.context('../__stories__', true, /\.tsx$/);
function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
