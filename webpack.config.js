const path = require('path');

module.exports = {
    mode: 'development',
    entry: './code.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'out/test/classes')
    }
};