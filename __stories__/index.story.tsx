import React, { FC } from 'react';
import { storiesOf } from '@storybook/react';
import chroma from 'chroma-js';

type Props = {
    primaryColor: string;
    secondaryColor: string;
};

const Scale = (props: { color: string; size: number }) => {
    const c = chroma(props.color);
    const scale = [c.hex()];

    if (props.size % 2 !== 1) {
        throw new Error('Only odd sizes can be used to generate a scale');
    }

    const splitSize = (props.size - 1) / 2;

    for (let i = 1; i < splitSize + 1; i++) {
        scale.push(c.darken(i * 0.25).hex());
        scale.unshift(c.brighten(i * 0.25).hex());
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
        <div>
            <div>
                <Scale color={props.primaryColor} size={5} />
            </div>
            <div>
                <Scale color={props.secondaryColor} size={5} />
            </div>
            <div>
                <Scale color={chroma.mix(props.primaryColor, '#fff', 0.8).hex()} size={3} />
            </div>
            <div>
                <Scale color={chroma.mix(props.secondaryColor, '#fff', 0.8).hex()} size={3} />
            </div>
        </div>
    );
};

storiesOf('Colors', module).add('All', () => <Palette primaryColor="hotpink" secondaryColor="cornflowerblue" />);
