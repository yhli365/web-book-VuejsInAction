var path = require('path');

var config = {
	entry : {
		main : './main'
	},
	output : {
		path : path.join(__dirname, './dist'),
		publicPath : '/dist/',
		filename : 'main.js'
	},
	module : {
		rules : [ {
			test : /\.css$/,
			use : [ 'style-loader', 'css-loader' ]
		} ]
	}
};

module.exports = config;