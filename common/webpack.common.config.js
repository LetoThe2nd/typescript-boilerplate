const path = require( 'path' );

module.exports = {
    // bundling mode
    mode: 'development',

    // entry files
	entry: './src/index.ts',
	
    // output bundles (location)
    output: {
        filename: 'index.js',
        devtoolModuleFilenameTemplate: 'file:///[absolute-resource-path]'
	},
	devtool: "source-map",

    // file resolutions
    resolve: {
        extensions: [ '.ts', '.js' ],
    },

    // loaders
    module: {
        rules: [
            {
                test: /\.tsx?/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    }
};