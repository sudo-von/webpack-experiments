const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        index: path.resolve(__dirname,'src','js','index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist', 'js'),
        filename: 'bundle-[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
}