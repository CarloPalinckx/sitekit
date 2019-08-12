import React, { FC } from 'react';
import { storiesOf } from '@storybook/react';
import Flex from '../src/components/Flex';
import theme from '../theme';
import styled from 'styled-components';
import Type from '../src/components/Type';
import { Scale } from 'src/lib/colors';
import chroma from 'chroma-js';
import Button from '../src/components/Button';
import { boolean } from '@storybook/addon-knobs';

const Swatch = styled.div`
    position: relative;
    background: ${(props: { color: string; root: boolean }) => props.color};
    height: 100px;
    width: 100px;

    &::before {
        content: '⬆';
        display: ${props => (props.root ? 'block' : 'none')};
        position: absolute;
        bottom: -24px;
        left: 50%;
    }
`;

type ExampleProps = {
    overlineColor: string;
    titleColor: string;
    subtitleColor: string;
    background: string;
    showButton: boolean;
    showCtaButton: boolean;
    showNegativeButton: boolean;
};

const ColorExample: FC<ExampleProps> = props => {
    return (
        <Flex flexDirection="column" width="100%" padding={[15]} alignItems="center" background={props.background}>
            <Flex maxWidth="800px" flexDirection="column" alignItems="center">
                <Type scale="overline" margin={[0, 0, 3, 0]} color={props.overlineColor} align="center">
                    {props.background}
                </Type>
                <Type scale="h2" margin={[0, 0, 10, 0]} color={props.titleColor} align="center">
                    The quick brown fox jumps over the lazy dog.
                </Type>
                <Type scale="sub2" align="center" margin={[0, 10]} color={props.subtitleColor}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                </Type>
                <Flex margin={[10, 0, 0, 0]}>
                    {props.showCtaButton && <Button cta>Click here</Button>}
                    {props.showButton && (
                        <>
                            &nbsp;&nbsp;<Button>Or here</Button>
                        </>
                    )}
                    {props.showNegativeButton && (
                        <>
                            &nbsp;&nbsp;<Button negative>Or here</Button>
                        </>
                    )}
                </Flex>
            </Flex>
        </Flex>
    );
};

type ScaleExampleProps = {
    name: string;
    scale: Scale;
};

const ScaleExample: FC<ScaleExampleProps> = props => {
    return (
        <Flex width="100%" flexDirection="column" margin={[0, 0, 10, 0]} alignItems="center">
            <Type scale="h3">
                {props.name
                    .split('')
                    .map((letter, index) => (index === 0 ? letter.toUpperCase() : letter))
                    .join('')}
            </Type>
            <Type scale="sub2">
                - The root has a luminance of&nbsp;
                {chroma(props.scale.root())
                    .luminance()
                    .toPrecision(2)}
                <br />- The suggested value is around 0.30
            </Type>
            <Flex>
                {props.scale.map(color => (
                    <Swatch root={color.toLowerCase() === props.scale.root().toLowerCase()} color={color} />
                ))}
            </Flex>
        </Flex>
    );
};

storiesOf('Colors', module)
    .add('All', () => {
        return (
            <Flex flexDirection="column" margin={[10]}>
                {Object.keys(theme.colors).map(key => {
                    return <ScaleExample name={key} scale={theme.colors[key as keyof typeof theme.colors]} />;
                })}
            </Flex>
        );
    })
    .add('Dark text on light background', () => {
        return (
            <Flex width="100%" flexDirection="column">
                {theme.colors.lights.map(color => {
                    return (
                        <ColorExample
                            background={color}
                            overlineColor={theme.colors.darks.lightest()}
                            titleColor={theme.colors.darks.lighter(1)}
                            subtitleColor={theme.colors.darks.lighter(3)}
                            showButton={boolean('Show button', true)}
                            showCtaButton={boolean('Show cta button', true)}
                            showNegativeButton={boolean('Show negative button', false)}
                        />
                    );
                })}
            </Flex>
        );
    })
    .add('Light text on coloured background', () => {
        return (
            <Flex width="100%" flexDirection="column">
                {theme.colors.themecolor.map(color => {
                    return (
                        <ColorExample
                            background={color}
                            overlineColor={theme.colors.lights.darkest()}
                            titleColor={theme.colors.lights.darker(1)}
                            subtitleColor={theme.colors.lights.darker(3)}
                            showButton={boolean('Show button', false)}
                            showCtaButton={boolean('Show cta button', false)}
                            showNegativeButton={boolean('Show negative button', true)}
                        />
                    );
                })}
            </Flex>
        );
    })
    .add('Light text on dark background', () => {
        return (
            <Flex width="100%" flexDirection="column">
                {[...theme.colors.darks].reverse().map(color => {
                    return (
                        <ColorExample
                            background={color}
                            overlineColor={theme.colors.lights.darkest()}
                            titleColor={theme.colors.lights.darker(1)}
                            subtitleColor={theme.colors.lights.darker(3)}
                            showButton={boolean('Show button', false)}
                            showCtaButton={boolean('Show cta button', false)}
                            showNegativeButton={boolean('Show negative button', true)}
                        />
                    );
                })}
            </Flex>
        );
    })
    .add('Dark text on dark background', () => {
        const showButton = boolean('Show button', false);
        const showCtaButton = boolean('Show cta button', false);
        const showNegativeButton = boolean('Show negative button', true);

        return (
            <Flex width="100%">
                <Flex width="50%" flexDirection="column">
                    {[...theme.colors.darks].reverse().map(color => {
                        if (color.toLowerCase() === theme.colors.darks.lightest()) return null;

                        return (
                            <ColorExample
                                background={color}
                                overlineColor={theme.colors.darks.lightest()}
                                titleColor={theme.colors.darks.lightest()}
                                subtitleColor={theme.colors.darks.lightest()}
                                showButton={showButton}
                                showCtaButton={showCtaButton}
                                showNegativeButton={showNegativeButton}
                            />
                        );
                    })}
                </Flex>
                <Flex width="50%" flexDirection="column">
                    {theme.colors.darks.map(color => {
                        if (color.toLowerCase() === theme.colors.darks.darkest()) return null;

                        return (
                            <ColorExample
                                background={color}
                                overlineColor={theme.colors.darks.darkest()}
                                titleColor={theme.colors.darks.darkest()}
                                subtitleColor={theme.colors.darks.darkest()}
                                showButton={showButton}
                                showCtaButton={showCtaButton}
                                showNegativeButton={showNegativeButton}
                            />
                        );
                    })}
                </Flex>
            </Flex>
        );
    })
    .add('Light text on light background', () => {
        const showButton = boolean('Show button', true);
        const showCtaButton = boolean('Show cta button', true);
        const showNegativeButton = boolean('Show negative button', false);

        return (
            <Flex width="100%">
                <Flex width="50%" flexDirection="column">
                    {theme.colors.lights.map(color => {
                        if (color.toLowerCase() === theme.colors.lights.darkest()) return null;

                        return (
                            <ColorExample
                                background={color}
                                overlineColor={theme.colors.lights.darkest()}
                                titleColor={theme.colors.lights.darkest()}
                                subtitleColor={theme.colors.lights.darkest()}
                                showButton={showButton}
                                showCtaButton={showCtaButton}
                                showNegativeButton={showNegativeButton}
                            />
                        );
                    })}
                </Flex>
                <Flex width="50%" flexDirection="column">
                    {[...theme.colors.lights].reverse().map(color => {
                        if (color.toLowerCase() === theme.colors.lights.lightest()) return null;

                        return (
                            <ColorExample
                                background={color}
                                overlineColor={theme.colors.lights.lightest()}
                                titleColor={theme.colors.lights.lightest()}
                                subtitleColor={theme.colors.lights.lightest()}
                                showButton={showButton}
                                showCtaButton={showCtaButton}
                                showNegativeButton={showNegativeButton}
                            />
                        );
                    })}
                </Flex>
            </Flex>
        );
    })
    .add('Dark text on coloured background', () => {
        return (
            <Flex width="100%" flexDirection="column">
                {theme.colors.themecolor.map(color => {
                    return (
                        <ColorExample
                            background={color}
                            overlineColor={theme.colors.darks.darkest()}
                            titleColor={theme.colors.darks.darkest()}
                            subtitleColor={theme.colors.darks.darkest()}
                            showButton={boolean('Show button', false)}
                            showCtaButton={boolean('Show cta button', false)}
                            showNegativeButton={boolean('Show negative button', true)}
                        />
                    );
                })}
            </Flex>
        );
    })
    .add('Light text on coloured background', () => {
        return (
            <Flex width="100%" flexDirection="column">
                {theme.colors.themecolor.map(color => {
                    return (
                        <ColorExample
                            background={color}
                            overlineColor={theme.colors.lights.darkest()}
                            titleColor={theme.colors.lights.darker(1)}
                            subtitleColor={theme.colors.lights.darker(3)}
                            showButton={boolean('Show button', false)}
                            showCtaButton={boolean('Show cta button', false)}
                            showNegativeButton={boolean('Show negative button', true)}
                        />
                    );
                })}
            </Flex>
        );
    });
