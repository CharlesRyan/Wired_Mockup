module.exports = {
	entry: "./src/index.js",
	output: {
		path: __dirname + '/',
        filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: ["babel-loader"],
				query: {
					presets: ["latest", "stage-2", "react"]
				}
			},
			{
				test: /\.json$/,
				exclude: /(node_modules)/,
				loader: "json-loader"
			}
		]
	}

};
