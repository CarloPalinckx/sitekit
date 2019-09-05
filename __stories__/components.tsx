import { storiesOf } from '@storybook/react';
import Button from '../src/components/Button';
import React from 'react';
import Nav from '../src/components/Nav';
import Card from '../src/components/Card';
import Type from '../src/components/Type';
import theme from '../theme';

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

storiesOf('Components/Card', module).add('Default', () => {
    return (
        <Card width="400px" flexDirection="column" margin={[10]} padding={[9]}>
            <Type scale="h3" margin={[0, 0, 3, 0]}>
                Title in card
            </Type>
            <Type scale="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</Type>
            <Type scale="body2" margin={[5, 0, 0, 0]} color={theme.colors.darks.lighter(3)}>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                id est laborum.
            </Type>
        </Card>
    );
});
