const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        home: path.resolve(__dirname,'src','js','index.js'),
        store: path.resolve(__dirname,'src','js','store.js'),
        contact: path.resolve(__dirname,'src','js','contact.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist', 'js'),
        filename: 'bundle-[name].js'
    }
}