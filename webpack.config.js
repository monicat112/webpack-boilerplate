const path = require('path') // this loads in a node.js library
require('@babel/polyfill')

// module is something specific to node.js  
// this is how we expose something froma given file
// in this case we're exposing the config object
module.exports = {
    // here we can provide the config details

    // this can be a relative path
    entry: ['@babel/polyfill', './src/index.js'],
    output: {
        // but this has to be an absolute path. 
        // ? __dirname is a node.js global variable for the absolute path to the project
        path: path.resolve(__dirname, 'public/scripts'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        }]
    },
    devServer: {
        contentBase:path.resolve(__dirname, 'public'),
        publicPath: '/scripts/'
    },
    devtool: 'source-map'
}

