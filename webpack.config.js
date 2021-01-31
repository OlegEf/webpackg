const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const sass = require('node-sass');
const webpack = require('webpack');

module.exports = {
	mode: "development",
	entry: {
	  main: path.resolve(__dirname,'./src/index.js')
	},
	output: { 
	  path: path.resolve(__dirname,'./dist'),
	  filename: '[name].bundle.js', 
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
				  // Creates `style` nodes from JS strings
				  "style-loader",
				  // Translates CSS into CommonJS
				  "css-loader",
				  // Compiles Sass to CSS
				  "sass-loader",
				],
			},
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			}

		],
	}, 
	devServer: {
		overlay: true,
		open: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			title:'webpack title',
			template: path.resolve(__dirname,'./src/template.html'),
			filename: "index.html"
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css'
		}),
		new CleanWebpackPlugin(),
		new webpack.HotModuleReplacementPlugin()
  ]
}