const path = require('path');

module.exports = {
    entry: {
        main: './src/main.js',
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
