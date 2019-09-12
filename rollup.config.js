import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import { uglify } from 'rollup-plugin-uglify';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

module.exports = {
    input: 'src/index.tsx',
    output: {
        name: 'sitekit',
        file: 'dist/src/index.js',
        format: 'umd',
        globals: name => name,
    },
    external: ['styled-components', 'react', 'react-dom', 'react-undraw', 'chroma-js'],
    plugins: [
        resolve({
            preferBuiltins: true,
            extensions,
        }),
        babel({ extensions, exclude: 'node_modules/**' }),
        uglify(),
    ],
};
