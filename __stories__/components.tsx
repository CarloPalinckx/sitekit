import { storiesOf } from '@storybook/react';
import Button from '../src/components/Button';
import React from 'react';
import Nav from '../src/components/Nav';

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

storiesOf('Components/Nav', module).add('Default', () => {
    return <Nav logo={<img src="https://dummyimage.com/150x100" />} items={['Home', 'About', 'Contact']} />;
});
