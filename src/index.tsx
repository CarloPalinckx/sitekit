import { BoxProps as B } from './components/Box';
import { FlexProps as F } from './components/Flex';
import { Scale as S } from './lib/colors';

export type BoxProps = B;
export type FlexProps = F;
export type Scale = S;

export { scale } from './lib/colors';

export { default as Box, box } from './components/Box';
export { default as Button } from './components/Button';
export { default as Card } from './components/Card';
export { default as Flex, flex } from './components/Flex';
export { default as Nav } from './components/Nav';
export { default as Reset } from './components/Reset';
export { default as Type } from './components/Type';
export { default as Wrap } from './components/Wrap';
