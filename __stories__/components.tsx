import { storiesOf } from '@storybook/react';
import Button from '../src/components/Button';
import React from 'react';

storiesOf('Components/Button', module).add('All', () => {
    return (
        <>
            <Button cta>Click here</Button>
            &nbsp; &nbsp;
            <Button>Or here</Button>
            &nbsp;&nbsp;
            <Button negative>Click here</Button>
        </>
    );
});
