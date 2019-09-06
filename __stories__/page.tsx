import React from 'react';
import { storiesOf } from '@storybook/react';
import Nav from '../src/components/Nav';
import Type from '../src/components/Type';
import Flex from '../src/components/Flex';
import theme from '../theme';
import Button from '../src/components/Button';
import { UndrawArt, UndrawADayAtThePark, UndrawAppreciation } from 'react-undraw';
import Wrap from '../src/components/Wrap';
import { Card } from '../src';

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
                <Flex flexDirection="column" alignItems="center" padding={[0, 20]}>
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
                            Lorem ipsum dolor sit amet
                        </Type>
                        <Type scale="sub2" color={theme.colors.darks.lighter(3)} margin={[10, 0, 0, 0]}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mi turpis, luctus ut commodo
                            eu.
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
                            Lorem ipsum dolor sit
                        </Type>
                        <Type scale="sub2" color={theme.colors.darks.lighter(3)} margin={[10, 0, 0, 0]}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mi turpis, luctus ut commodo
                            eu.
                        </Type>
                    </Flex>
                </Flex>
            </Wrap>
            <Wrap background={theme.colors.lights.darker(1)} padding={[20, 0]}>
                <Flex justifyContent="center" alignItems="center">
                    <Flex width="50%" flexDirection="column">
                        <Type scale="h3" color={theme.colors.darks.lighter(1)}>
                            Lorem ipsum dolor sit
                        </Type>
                        <Type scale="sub2" color={theme.colors.darks.lighter(3)} margin={[10, 0, 0, 0]}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mi turpis, luctus ut commodo
                            eu.
                        </Type>
                    </Flex>
                    <Flex width="50%" justifyContent="center">
                        <Flex width="400px">
                            <UndrawAppreciation />
                        </Flex>
                    </Flex>
                </Flex>
            </Wrap>
            <Wrap background={theme.colors.lights.lightest()} padding={[20, 0]} width="100%">
                <Flex>
                    <Flex
                        justifyContent="center"
                        flexBasis="500px"
                        flexShrink={0}
                        alignItems="flex-start"
                        flexDirection="column"
                    >
                        <Type scale="h4" margin={[0, 0, 5, 0]}>
                            This is your last chance.
                        </Type>
                        <Type scale="body2">
                            After this, there is no turning back. You take the blue pill—the story ends, you wake up in
                            your bed and believe whatever you want to believe. You take the red pill—you stay in
                            Wonderland, and I show you how deep the rabbit hole goes. Remember: all I'm offering is the
                            truth. Nothing more.
                        </Type>
                    </Flex>
                    <Card alignItems="flex-start" flexDirection="column" padding={[10]} margin={[0, 0, 0, 10]}>
                        <Type scale="h4" color={theme.colors.darks.lighter(1)} margin={[0, 0, 5, 0]}>
                            Blue pill
                        </Type>
                        <Type scale="body1" color={theme.colors.darks.lighter(3)} margin={[0, 0, 10, 0]}>
                            The cheapest one, this means that you will be spammed with triggers to upgrade.
                        </Type>
                        <Button>Sign me up!</Button>
                    </Card>
                    <Card alignItems="flex-start" flexDirection="column" padding={[10]} margin={[0, 0, 0, 10]}>
                        <Type scale="h4" color={theme.colors.darks.lighter(1)} margin={[0, 0, 5, 0]}>
                            Red pill
                        </Type>
                        <Type scale="body1" color={theme.colors.darks.lighter(3)} margin={[0, 0, 10, 0]}>
                            The cheapest one, this means that you will be spammed with triggers to upgrade.
                        </Type>
                        <Button>Sign me up!</Button>
                    </Card>
                </Flex>
            </Wrap>
        </Flex>
    );
});
