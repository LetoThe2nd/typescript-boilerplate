const path = require("path");

const _ = require("lodash");

const common = require("../../common/webpack.common.config");

module.exports = _.merge(common, {
    output: {
        path: path.resolve( __dirname, 'dist' )
	},
    // entry files
	entry: './src/index.tsx',
    // file resolutions
    resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
});