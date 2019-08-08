import React, { FC } from 'react';
import { storiesOf } from '@storybook/react';
import chroma from 'chroma-js';
import Flex from '../src/components/Flex';

type Props = {
    primaryColor: string;
    secondaryColor: string;
};

type ScaleProps = {
    color: string;
    size: number;
    curve?: number;
    direction?: 'both' | 'down' | 'up';
};

const Scale: FC<ScaleProps> = props => {
    const c = chroma(props.color);
    const scale = [c.hex()];
    const curve = props.curve || 0.25;

    if (props.size % 2 !== 1) {
        throw new Error('Only odd sizes can be used to generate a scale');
    }

    if (props.direction === undefined || props.direction === 'both') {
        const splitSize = (props.size - 1) / 2;

        for (let i = 1; i < splitSize + 1; i++) {
            scale.push(c.darken(i * curve).hex());
            scale.unshift(c.brighten(i * curve).hex());
        }
    }

    if (props.direction === 'up') {
        for (let i = 1; i < props.size; i++) {
            scale.push(c.darken(i * curve).hex());
        }
    }

    if (props.direction === 'down') {
        for (let i = 1; i < props.size; i++) {
            scale.unshift(c.brighten(i * curve).hex());
        }
    }

    return (
        <div>
            {scale.map(color => {
                return <div style={{ float: 'left', height: '40px', width: '40px', background: color }} />;
            })}
        </div>
    );
};

const Palette: FC<Props> = props => {
    return (
        <Flex flexDirection="column">
            <Scale color={props.primaryColor} size={5} />
            <Scale color={props.secondaryColor} size={5} />
            <Scale color={chroma.mix(props.secondaryColor, '#000', 0.9).hex()} size={5} curve={0.5} direction="down" />
            <Scale color={chroma.mix(props.secondaryColor, '#fff', 0.7).hex()} size={5} curve={0.5} direction="up" />
        </Flex>
    );
};

storiesOf('Colors', module).add('All', () => <Palette secondaryColor="#7788EE" primaryColor="#541A8B" />);
