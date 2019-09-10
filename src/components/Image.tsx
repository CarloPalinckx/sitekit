import React, { FC } from 'react';
import styled from 'styled-components';

type Props = {
    src: string;
    alt: string;
    ratio: [number, number];
};

const Outer = styled.figure<Pick<Props, 'ratio'>>`
    overflow: hidden;
    position: relative;
    padding: 0;
    margin: 0;
    padding-top: ${({ ratio }) => (ratio[1] / ratio[0]) * 100}%;
`;

const Inner = styled.img<Props>`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    ${({ ratio }) => {
        if (ratio[1] > ratio[0]) return 'height: 100%;';
        if (ratio[0] > ratio[1]) return 'width: 100%;';
    }}
`;

const Image: FC<Props> = props => {
    return (
        <Outer {...props}>
            <Inner src={props.src} alt={props.alt} ratio={props.ratio} />
        </Outer>
    );
};

export default Image;
