import React from 'react';
import { storiesOf } from '@storybook/react';
import Nav from '../src/components/Nav';
import Type from '../src/components/Type';
import Flex from '../src/components/Flex';
import theme from './theme';
import Button from '../src/components/Button';
import { UndrawArt, UndrawADayAtThePark } from 'react-undraw';
import Wrap from '../src/components/Wrap';
import Card from '../src/components/Card';

storiesOf('Page', module).add('Basic example', () => {
    return (
        <Flex background={theme.colors.lights.lightest()} flexDirection="column" width="100%">
            <Wrap>
                <Nav
                    logo={
                        <img
                            width="80px"
                            src="https://images.vexels.com/media/users/3/137692/isolated/preview/e425fa1fe274a2267405829771f13a13-simple-logo-geometric-polygonal-by-vexels.png"
                        />
                    }
                    items={['Home', 'about', 'contact']}
                />
            </Wrap>
            <Wrap background={theme.colors.lights.lightest()} padding={[20, 0, 30, 0]}>
                <Flex
                    style={{ opacity: 0 }}
                    animate={{ scale: [0.8, 1.05, 1], opacity: [0, 1] }}
                    transition={{ duration: 0.4 }}
                    flexDirection="column"
                    alignItems="center"
                    padding={[0, 20]}
                >
                    <Type scale="h1" align="center" color={theme.colors.darks.lighter(1)}>
                        Our product is amazing. You'll love it.
                    </Type>
                    <Type scale="sub1" align="center" color={theme.colors.darks.lighter(3)} margin={[10, 30]}>
                        So amazing even, that you'll pay us a lot of money so that we can keep going on our anual castle
                        retreats.
                    </Type>
                    <Flex>
                        <Button cta>Take my kidneys!</Button>
                        &nbsp; &nbsp;
                        <Button>I'm not convinced yet</Button>
                    </Flex>
                </Flex>
            </Wrap>
            <Wrap background={theme.colors.lights.darker(1)} padding={[20, 0]}>
                <Flex justifyContent="center" alignItems="center">
                    <Flex width="50%" flexDirection="column">
                        <Type scale="h3" color={theme.colors.darks.lighter(1)}>
                            Come for our chat. Stay for our everything else.
                        </Type>
                        <Type scale="sub2" color={theme.colors.darks.lighter(3)} margin={[10, 0, 0, 0]}>
                            Only Intercom gives you a totally customizable messaging suite to drive growth at every
                            stage of the lifecycle.
                        </Type>
                    </Flex>
                    <Flex width="50%" justifyContent="center">
                        <Flex width="400px">
                            <UndrawADayAtThePark />
                        </Flex>
                    </Flex>
                </Flex>
            </Wrap>
            <Wrap background={theme.colors.lights.lightest()} padding={[20, 0]}>
                <Flex justifyContent="center" alignItems="center">
                    <Flex width="50%" justifyContent="center">
                        <Flex width="400px">
                            <UndrawArt />
                        </Flex>
                    </Flex>
                    <Flex width="50%" flexDirection="column">
                        <Type scale="h3" color={theme.colors.darks.lighter(1)}>
                            Come for our chat. Stay for our everything else.
                        </Type>
                        <Type scale="sub2" color={theme.colors.darks.lighter(3)} margin={[10, 0, 0, 0]}>
                            Only Intercom gives you a totally customizable messaging suite to drive growth at every
                            stage of the lifecycle.
                        </Type>
                    </Flex>
                </Flex>
            </Wrap>
            <Wrap background={theme.colors.lights.darker(1)} padding={[20, 0]}>
                <Flex alignItems="flex-start" justifyContent="flex-start" margin={[0, 0, 0, 4]}>
                    <Flex flexDirection="column" margin={[0, 10, 0, 0]}>
                        <Type scale="h4" color={theme.colors.darks.lighter(1)}>
                            Come for our chat. Stay for our everything else.
                        </Type>
                        <Type scale="body1" color={theme.colors.darks.lighter(3)} margin={[10, 0, 0, 0]}>
                            Only Intercom gives you a totally customizable messaging suite to drive growth at every
                            stage of the lifecycle.
                        </Type>
                    </Flex>
                    <Card alignItems="flex-start" flexDirection="column" padding={[10]} margin={[0, 4, 0, 0]}>
                        <Type scale="h4" color={theme.colors.darks.lighter(1)}>
                            Product A
                        </Type>
                        <Type scale="body1" color={theme.colors.darks.lighter(3)} margin={[5, 0, 10, 0]}>
                            The cheapest one, this means that you will be spammed with triggers to upgrade.
                        </Type>
                        <Button>Sign me up!</Button>
                    </Card>
                    <Card margin={[0, 0, 0, 4]} alignItems="flex-start" flexDirection="column" padding={[10]}>
                        <Type scale="h4" color={theme.colors.darks.lighter(1)}>
                            Product B
                        </Type>
                        <Type scale="body1" color={theme.colors.darks.lighter(3)} margin={[5, 0, 10, 0]}>
                            The cheapest one, this means that you will be spammed with triggers to upgrade.
                        </Type>
                        <Button>Sign me up!</Button>
                    </Card>
                </Flex>
            </Wrap>
        </Flex>
    );
});
