const webpack = require('webpack');
const theme = require('../__stories__/theme-compiled.js');

console.log(JSON.stringify(theme));
module.exports = ({ config, mode }) => {
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        loader: require.resolve('babel-loader'),
        options: {
            presets: [['react-app', { flow: false, typescript: true }]],
        },
    });
    config.resolve.extensions.push('.ts', '.tsx');
    config.plugins.push(
        new webpack.DefinePlugin({
            __THEME__: JSON.stringify(theme),
        }),
    );

    return config;
};
