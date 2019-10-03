import { storiesOf } from '@storybook/react';
import Button from '../src/components/Button';
import React from 'react';
import Nav from '../src/components/Nav';
import Card from '../src/components/Card';
import Type from '../src/components/Type';
import theme from '../theme';
import Image from '../src/components/Image';
import Box from '../src/components/Box';
import Flex from '../src/components/Flex';
import TextField from '../src/components/TextField';
import FormRow from '../src/components/FormRow';

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

storiesOf('Components/Image', module)
    .add('16:9 ratio', () => {
        return (
            <Box width="600px">
                <Image
                    ratio={[16, 9]}
                    alt="9:16 ratio image"
                    src="https://images.unsplash.com/photo-1567972410313-bea9d349d276?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                />
            </Box>
        );
    })
    .add('9:16 ratio', () => {
        return (
            <Box width="300px">
                <Image
                    ratio={[9, 16]}
                    alt="9:16 ratio image"
                    src="https://images.unsplash.com/photo-1567995110917-feaa949ef578?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80"
                />
            </Box>
        );
    })
    .add('round', () => {
        return (
            <Box width="300px">
                <Image
                    ratio={[10, 10]}
                    round
                    alt="round ratio image"
                    src="https://images.unsplash.com/photo-1556910633-5099dc3971e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80"
                />
            </Box>
        );
    })
    .add('square', () => {
        return (
            <Box width="300px">
                <Image
                    ratio={[10, 10]}
                    alt="square ratio image"
                    src="https://images.unsplash.com/photo-1556910633-5099dc3971e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80"
                />
            </Box>
        );
    });

storiesOf('Components/TextField', module).add('Default', () => {
    return (
        <Box margin={[10]}>
            <TextField placeholder="Lorem ipsum" />
        </Box>
    );
});

storiesOf('Components/FormRow', module).add('Default', () => {
    return (
        <Box margin={[10]}>
            <FormRow fieldId="firstname" label="First name">
                <TextField id="firstname" />
            </FormRow>
            <FormRow margin={[5, 0, 0, 0]} fieldId="lastname" label="Last name">
                <TextField id="lastname" />
            </FormRow>
        </Box>
    );
});
